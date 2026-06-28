import {
  createDirectMessage,
  createTrackingLink,
  json,
  normalizeUsername,
  parseWebhookEvents,
  saveToSupabase,
} from './_geraes-open-utils.js'

const graphVersion = process.env.META_GRAPH_VERSION || 'v20.0'

async function sendDirectIfAllowed({ instagramUserId, username, mentionType }) {
  const token = process.env.META_PAGE_ACCESS_TOKEN
  const senderId = process.env.META_IG_USER_ID
  if (!token || !senderId || !instagramUserId) {
    return {
      status: 'pending',
      error: !token
        ? 'META_PAGE_ACCESS_TOKEN is not configured'
        : !senderId
          ? 'META_IG_USER_ID is not configured'
          : 'instagramUserId not available',
    }
  }

  const tracking = createTrackingLink({
    username,
    mentionType,
    directStatus: 'sent',
  })
  const message = createDirectMessage(tracking.url)

  const response = await fetch(`https://graph.instagram.com/${graphVersion}/${senderId}/messages`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      recipient: { id: instagramUserId },
      message: { text: message },
    }),
  })

  const body = await response.json().catch(() => ({}))

  if (!response.ok) {
    return {
      status: 'error',
      error: body.error?.message || `Meta API error ${response.status}`,
      tracking,
      metaResponse: body,
    }
  }

  return {
    status: 'sent',
    tracking,
    message,
    metaResponse: body,
  }
}

export async function handler(event) {
  if (event.httpMethod === 'GET') {
    const params = event.queryStringParameters || {}
    const verifyToken = process.env.META_VERIFY_TOKEN

    if (params['hub.mode'] === 'subscribe' && params['hub.verify_token'] === verifyToken) {
      return {
        statusCode: 200,
        body: params['hub.challenge'] || '',
      }
    }

    return json(403, { error: 'Invalid verification token' })
  }

  if (event.httpMethod !== 'POST') {
    return json(405, { error: 'Method not allowed' })
  }

  const payload = JSON.parse(event.body || '{}')
  const events = parseWebhookEvents(payload)
  const results = []

  for (const item of events) {
    const username = normalizeUsername(item.username)
    const mentionType = item.eventType || 'unknown'

    await saveToSupabase('instagram_events', {
      username,
      instagram_user_id: item.instagramUserId || null,
      event_type: mentionType,
      event_payload: item.raw,
      detected_at: new Date(item.timestamp || Date.now()).toISOString(),
      status: 'new',
    }).catch((error) => console.error(error))

    const direct = await sendDirectIfAllowed({
      instagramUserId: item.instagramUserId,
      username,
      mentionType,
    })

    await saveToSupabase('direct_messages', {
      username,
      instagram_user_id: item.instagramUserId || null,
      tracking_token: direct.tracking?.token || null,
      tracking_url: direct.tracking?.url || null,
      message_text: direct.message || null,
      status: direct.status,
      error_message: direct.error || null,
      meta_response: direct.metaResponse || null,
      sent_at: direct.status === 'sent' ? new Date().toISOString() : null,
    }).catch((error) => console.error(error))

    results.push({ eventType: mentionType, username, directStatus: direct.status, error: direct.error || null })
  }

  return json(200, { ok: true, processed: results.length, results })
}
