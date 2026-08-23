import { anyone } from '@/access/anyone'
import type { CollectionConfig } from 'payload'

export const Newsletters: CollectionConfig = {
    slug: 'newsletters',
    access: {
        read: anyone
    },
    admin: {
        useAsTitle: 'title'
    },
    fields: [
        {
            name: 'title',
            type: 'text',
            required: true
        },
        {
            name: 'groupId',
            type: 'text',
            required: true,
            admin: {
                description: 'The Group ID from MailerLite'
            }
        }
    ]
}