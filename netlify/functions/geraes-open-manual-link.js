import { createDirectMessage, createTrackingLink, json, normalizeUsername } from './_geraes-open-utils.js'

export async function handler(event) {
  if (event.httpMethod !== 'POST') {
    return json(405, { error: 'Method not allowed' })
  }

  const payload = JSON.parse(event.body || '{}')
  const username = normalizeUsername(payload.username)

  if (!username) {
    return json(400, { error: 'username is required' })
  }

  const { token, url } = createTrackingLink({
    username,
    mentionType: payload.mentionType || 'manual',
    directStatus: payload.directStatus || 'manual',
  })

  return json(200, {
    token,
    url,
    message: createDirectMessage(url, { withEmoji: Boolean(payload.withEmoji) }),
  })
}
