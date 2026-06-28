import { createDirectMessage, createTrackingLink, json, normalizeUsername, saveToSupabase } from './_geraes-open-utils.js'

const graphVersion = process.env.META_GRAPH_VERSION || 'v20.0'

async function sendInstagramDirect({ recipientId, message }) {
  const token = process.env.META_PAGE_ACCESS_TOKEN

  if (!token) {
    return {
      status: 'pending',
      error: 'META_PAGE_ACCESS_TOKEN is not configured',
    }
  }

  const response = await fetch(`https://graph.facebook.com/${graphVersion}/me/messages`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      recipient: { id: recipientId },
      message: { text: message },
    }),
  })

  const body = await response.json().catch(() => ({}))

  if (!response.ok) {
    return {
      status: 'error',
      error: body.error?.message || `Meta API error ${response.status}`,
      metaResponse: body,
    }
  }

  return {
    status: 'sent',
    metaResponse: body,
  }
}

export async function handler(event) {
  if (event.httpMethod !== 'POST') {
    return json(405, { error: 'Method not allowed' })
  }

  const adminSecret = process.env.PLANTE_ADMIN_SECRET
  if (adminSecret && event.headers['x-plante-admin-secret'] !== adminSecret) {
    return json(401, { error: 'Unauthorized' })
  }

  const payload = JSON.parse(event.body || '{}')
  const recipientId = payload.instagramUserId || payload.recipientId
  const username = normalizeUsername(payload.username)

  if (!recipientId) {
    return json(400, { error: 'instagramUserId is required for automatic Direct sending' })
  }

  const { token, url } = createTrackingLink({
    username,
    mentionType: payload.mentionType || 'manual',
    directStatus: 'sent',
  })
  const message = payload.message || createDirectMessage(url, { withEmoji: Boolean(payload.withEmoji) })
  const result = await sendInstagramDirect({ recipientId, message })

  await saveToSupabase('direct_messages', {
    username,
    instagram_user_id: recipientId,
    tracking_token: token,
    tracking_url: url,
    message_text: message,
    status: result.status,
    error_message: result.error || null,
    meta_response: result.metaResponse || null,
    sent_at: result.status === 'sent' ? new Date().toISOString() : null,
  }).catch((error) => console.error(error))

  return json(result.status === 'error' ? 502 : 200, {
    ...result,
    token,
    url,
    message,
  })
}
