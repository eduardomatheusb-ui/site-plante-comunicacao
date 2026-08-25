const cmsIdeaModules = import.meta.glob('./ideas/*.json', { eager: true, import: 'default' })

function formatDate(value) {
  if (!value) return 'Sem data'

  const parsed = new Date(`${value}T12:00:00`)
  if (Number.isNaN(parsed.getTime())) return value

  return new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  }).format(parsed)
}

function markdownToBlocks(markdown = '') {
  const blocks = []
  let paragraph = []

  const flush = () => {
    const text = paragraph.join('\n').trim()
    if (text) blocks.push(text)
    paragraph = []
  }

  markdown.split(/\r?\n/).forEach((line) => {
    const heading = line.match(/^#{2,3}\s+(.+)$/)

    if (!line.trim()) {
      flush()
      return
    }

    if (heading) {
      flush()
      blocks.push({ type: 'heading', text: heading[1].trim() })
      return
    }

    paragraph.push(line)
  })

  flush()
  return blocks
}

function normalizeIdea(item = {}) {
  const body = Array.isArray(item.body) ? item.body : markdownToBlocks(item.body)

  return {
    ...item,
    date: formatDate(item.date),
    readingTime: item.readingTime || '5 min',
    imageClass: item.imageClass || 'object-cover object-center',
    cardImageClass: item.cardImageClass || 'object-cover object-center',
    body,
  }
}

export const cmsIdeas = Object.values(cmsIdeaModules)
  .filter((item) => item && item.published !== false && item.slug && item.title)
  .map(normalizeIdea)
