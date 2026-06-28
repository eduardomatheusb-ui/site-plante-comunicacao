const campaign = 'geraes_open'
const landingPath = '/boa-jogada-plante'

export function json(statusCode, body) {
  return {
    statusCode,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-store',
    },
    body: JSON.stringify(body),
  }
}

export function normalizeUsername(value = '') {
  return String(value).trim().replace(/^@/, '')
}

export function createToken() {
  return crypto.randomUUID()
}

export function getSiteUrl() {
  return process.env.URL || process.env.DEPLOY_PRIME_URL || 'https://agenciaplante.com.br'
}

export function createTrackingLink({ username = '', mentionType = 'manual', directStatus = 'manual', token = createToken() }) {
  const params = new URLSearchParams({
    token,
    utm_source: 'instagram',
    utm_medium: directStatus === 'manual' ? 'manual_direct' : 'direct',
    utm_campaign: campaign,
    user: normalizeUsername(username),
    type: mentionType,
    direct_status: directStatus,
  })

  return {
    token,
    url: `${getSiteUrl()}${landingPath}?${params.toString()}`,
  }
}

export function createDirectMessage(link, { withEmoji = false } = {}) {
  const tennis = withEmoji ? ' 🎾' : ''

  return `Oi! Que boa jogada ver voce no Geraes Open${tennis}

Recebemos sua marcacao na acao especial da Plante em parceria com o evento.

Para participar, e so preencher este formulario:

${link}

Depois disso, voce ja entra na nossa acao especial.

Plante Comunicacao`
}

export function parseWebhookEvents(payload) {
  const entries = payload?.entry || []
  const events = []

  for (const entry of entries) {
    for (const messaging of entry.messaging || []) {
      events.push({
        source: 'instagram_messaging',
        eventType: messaging.message?.is_echo ? 'echo' : 'message_or_mention',
        instagramUserId: messaging.sender?.id || '',
        username: '',
        timestamp: messaging.timestamp || Date.now(),
        raw: messaging,
      })
    }

    for (const change of entry.changes || []) {
      const field = change.field || ''
      const value = change.value || {}
      events.push({
        source: 'instagram_graph',
        eventType: field || 'unknown',
        instagramUserId: value.from?.id || value.user_id || '',
        username: value.from?.username || value.username || '',
        timestamp: value.created_time ? Date.parse(value.created_time) : Date.now(),
        raw: change,
      })
    }
  }

  return events
}

export async function saveToSupabase(table, payload) {
  const url = process.env.SUPABASE_URL
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY

  if (!url || !key) {
    console.log(`[supabase-disabled] ${table}`, payload)
    return { skipped: true }
  }

  const response = await fetch(`${url.replace(/\/$/, '')}/rest/v1/${table}`, {
    method: 'POST',
    headers: {
      apikey: key,
      Authorization: `Bearer ${key}`,
      'Content-Type': 'application/json',
      Prefer: 'return=representation',
    },
    body: JSON.stringify(payload),
  })

  const text = await response.text()
  if (!response.ok) {
    throw new Error(`Supabase insert failed for ${table}: ${response.status} ${text}`)
  }

  return text ? JSON.parse(text) : null
}
