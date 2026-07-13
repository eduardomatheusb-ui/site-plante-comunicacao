const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term']
const STORAGE_KEY = 'plante_campaign_utms'

export function captureUtmParams() {
  if (typeof window === 'undefined') return {}

  const params = new URLSearchParams(window.location.search)
  const current = {}

  UTM_KEYS.forEach((key) => {
    const value = params.get(key)
    if (value) current[key] = value
  })

  if (Object.keys(current).length) {
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(current))
    return current
  }

  try {
    return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || '{}')
  } catch {
    return {}
  }
}

export function getStoredUtms() {
  if (typeof window === 'undefined') return {}
  try {
    return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || '{}')
  } catch {
    return {}
  }
}

export function withPreservedUtms(path) {
  const utms = getStoredUtms()
  const params = new URLSearchParams()

  Object.entries(utms).forEach(([key, value]) => {
    if (value) params.set(key, value)
  })

  const query = params.toString()
  return query ? `${path}?${query}` : path
}

export function trackEvent(name, payload = {}) {
  const safePayload = {
    page: typeof window !== 'undefined' ? window.location.pathname : '',
    campaign: 'guia_eca_digital',
    ...payload,
  }

  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', name, safePayload)
  }
}

export function normalizeBrazilianPhone(value) {
  return String(value || '').replace(/\D/g, '').slice(0, 11)
}

export function formatBrazilianPhone(value) {
  const digits = normalizeBrazilianPhone(value)
  if (digits.length <= 2) return digits
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7, 11)}`
}
