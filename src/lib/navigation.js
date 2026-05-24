export function normalizePath(pathname) {
  if (!pathname || pathname === '/') return '/'
  return pathname.replace(/\/+$/, '') || '/'
}

export function navigateTo(href) {
  if (!href) return

  if (href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:')) {
    window.location.href = href
    return
  }

  const nextPath = normalizePath(href)
  if (normalizePath(window.location.pathname) !== nextPath) {
    window.history.pushState({}, '', nextPath)
  }

  window.dispatchEvent(new CustomEvent('plante:navigate', { detail: { path: nextPath } }))
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

export function handleInternalClick(event, href) {
  if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
  event.preventDefault()
  navigateTo(href)
}
