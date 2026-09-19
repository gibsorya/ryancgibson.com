'use server'

import MailerLite, { CreateOrUpdateSubscriberParams } from '@mailerlite/mailerlite-nodejs'

export async function subscribeToNewsletter(email: string, groupId: string) {
  const apiKey = process.env.MAILER_LITE_API_TOKEN
  if (!apiKey) return { ok: false, error: 'Server not configured' }

  const mailerLite = new MailerLite({ api_key: apiKey })

  const params: CreateOrUpdateSubscriberParams = {
    email,
    groups: [groupId],
    status: 'active'
  }

  try {
    await mailerLite.subscribers.createOrUpdate(params)
    return { ok: true }
  } catch (err) {
    console.error(err)
    return { ok: false, error: 'Subscription failed' }
  }
}