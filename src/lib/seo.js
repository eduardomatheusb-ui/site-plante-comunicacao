import { meta } from '../content/siteContent'

function setMeta(name, content) {
  let tag = document.querySelector(`meta[name="${name}"]`)
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute('name', name)
    document.head.appendChild(tag)
  }
  tag.setAttribute('content', content)
}

function setProperty(property, content) {
  let tag = document.querySelector(`meta[property="${property}"]`)
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute('property', property)
    document.head.appendChild(tag)
  }
  tag.setAttribute('content', content)
}

export function applySeo({
  title = meta.defaultTitle,
  description = meta.defaultDescription,
  path = '/',
  image = '/favicon-192x192.png',
  robots = 'index, follow',
  structuredData = [],
}) {
  document.title = title
  setMeta('description', description)
  setMeta('robots', robots)
  setProperty('og:title', title)
  setProperty('og:description', description)
  setProperty('og:url', `https://www.agenciaplante.com.br${path}`)
  setProperty('og:type', path?.startsWith('/blog/') ? 'article' : 'website')
  setProperty('og:image', `https://www.agenciaplante.com.br${image}`)
  setProperty('twitter:card', 'summary_large_image')
  setProperty('twitter:title', title)
  setProperty('twitter:description', description)
  setProperty('twitter:image', `https://www.agenciaplante.com.br${image}`)

  let canonical = document.querySelector('link[rel="canonical"]')
  if (!canonical) {
    canonical = document.createElement('link')
    canonical.setAttribute('rel', 'canonical')
    document.head.appendChild(canonical)
  }
  canonical.setAttribute('href', `https://www.agenciaplante.com.br${path}`)

  document.querySelectorAll('script[data-plante-structured-data="true"]').forEach((tag) => tag.remove())
  structuredData.forEach((schema) => {
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.dataset.planteStructuredData = 'true'
    script.textContent = JSON.stringify(schema)
    document.head.appendChild(script)
  })
}
