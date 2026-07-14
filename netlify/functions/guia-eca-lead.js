const memoryRateLimit = new Map()

const requiredFields = ['name', 'organization', 'segment', 'email', 'whatsapp', 'consent']

function json(statusCode, body) {
  return {
    statusCode,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-store',
    },
    body: JSON.stringify(body),
  }
}

function clean(value) {
  return String(value || '').replace(/[<>]/g, '').trim().slice(0, 500)
}

function normalizePhone(value) {
  return String(value || '').replace(/\D/g, '').slice(0, 11)
}

function checkRateLimit(ip) {
  const now = Date.now()
  const windowMs = 10 * 60 * 1000
  const entry = memoryRateLimit.get(ip) || { count: 0, start: now }

  if (now - entry.start > windowMs) {
    memoryRateLimit.set(ip, { count: 1, start: now })
    return true
  }

  entry.count += 1
  memoryRateLimit.set(ip, entry)
  return entry.count <= 8
}

// Integração TREM: encaminha leads do Guia ECA ao CRM (lê TREM_WEBHOOK_SECRET do ambiente).
export async function handler(event) {
  if (event.httpMethod !== 'POST') {
    return json(405, { ok: false, message: 'Método não permitido.' })
  }

  const ip = event.headers['x-nf-client-connection-ip'] || event.headers['client-ip'] || 'unknown'
  if (!checkRateLimit(ip)) {
    return json(429, { ok: false, message: 'Muitas tentativas. Tente novamente mais tarde.' })
  }

  let data
  try {
    data = JSON.parse(event.body || '{}')
  } catch {
    return json(400, { ok: false, message: 'Dados inválidos.' })
  }

  if (data.botField) {
    return json(400, { ok: false, message: 'Dados inválidos.' })
  }

  const lead = {
    name: clean(data.name),
    organization: clean(data.organization),
    segment: clean(data.segment),
    email: clean(data.email).toLowerCase(),
    whatsapp: normalizePhone(data.whatsapp),
    consent: Boolean(data.consent),
    utm_source: clean(data.utm_source),
    utm_medium: clean(data.utm_medium),
    utm_campaign: clean(data.utm_campaign),
    utm_content: clean(data.utm_content),
    utm_term: clean(data.utm_term),
    referrer: clean(data.referrer),
    landing_page: clean(data.landing_page),
    created_at: new Date().toISOString(),
  }

  const missing = requiredFields.filter((field) => !lead[field])
  if (missing.length || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.email) || lead.whatsapp.length < 10) {
    return json(422, { ok: false, message: 'Confira os campos obrigatórios.' })
  }

  const tremUrl = process.env.TREM_LEADS_URL || 'https://trem.agenciaplante.com.br/api/integrations/plante-site/leads'
  const tremSecret = process.env.TREM_WEBHOOK_SECRET
  if (!tremSecret) {
    return json(503, {
      ok: false,
      message: 'Integração TREM não configurada (defina TREM_WEBHOOK_SECRET).',
    })
  }

  try {
    const response = await fetch(tremUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${tremSecret}`,
      },
      body: JSON.stringify({
        name: lead.name,
        organization: lead.organization,
        segment: lead.segment,
        email: lead.email,
        whatsapp: lead.whatsapp,
        consent: lead.consent,
        consent_text: clean(data.consent_text),
        landing_page: lead.landing_page || 'guia-eca-digital',
        referrer: lead.referrer,
        created_at: lead.created_at,
        utm_source: lead.utm_source,
        utm_medium: lead.utm_medium,
        utm_campaign: lead.utm_campaign,
        utm_content: lead.utm_content,
        utm_term: lead.utm_term,
      }),
    })

    if (!response.ok) throw new Error('trem_error')
    return json(200, { ok: true })
  } catch {
    return json(502, { ok: false, message: 'Não foi possível registrar o lead agora.' })
  }
}
