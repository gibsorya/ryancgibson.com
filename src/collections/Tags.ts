import { anyone } from '@/access/anyone'
import type { CollectionConfig } from 'payload'

export const Tags: CollectionConfig = {
    slug: 'tags',
    access: {
        read: anyone
    },
    admin: {
        useAsTitle: 'name',
    },
    labels: {
        singular: 'Tag',
        plural: 'Tags'
    },
    fields: [
        {
            name: 'name',
            type: 'text',
            required: true,
        },
        {
            name: 'url',
            type: 'text',
            required: false
        }
    ]
}