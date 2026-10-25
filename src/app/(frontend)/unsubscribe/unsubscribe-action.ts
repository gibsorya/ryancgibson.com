'use server'

import MailerLite, { CreateOrUpdateSubscriberParams } from '@mailerlite/mailerlite-nodejs'

export async function unsubscribeToNewsletter(email: string, groupId: string) {
  const apiKey = process.env.MAILER_LITE_API_TOKEN
  if (!apiKey) return { ok: false, error: 'Server not configured' }

  console.log("email:", email, "groupId", groupId)

  const mailerLite = new MailerLite({ api_key: apiKey })

  const params: CreateOrUpdateSubscriberParams = {
    email,
    groups: [groupId],
    status: 'unsubscribed'
  }

  await mailerLite.subscribers.createOrUpdate(params).then(response => {
    return response.data
  }).catch(error => {
    error
  })
}