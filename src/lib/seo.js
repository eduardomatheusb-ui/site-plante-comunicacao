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

export function applySeo({ title = meta.defaultTitle, description = meta.defaultDescription, path = '/' }) {
  document.title = title
  setMeta('description', description)
  setProperty('og:title', title)
  setProperty('og:description', description)
  setProperty('og:url', `https://www.agenciaplante.com.br${path}`)
  setProperty('twitter:title', title)
  setProperty('twitter:description', description)
}
