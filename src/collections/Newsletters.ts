import { anyone } from '@/access/anyone'
import { FixedToolbarFeature, lexicalEditor } from '@payloadcms/richtext-lexical';
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
            name: 'description',
            type: 'richText',
            editor: lexicalEditor({
                features: ({ rootFeatures }) => {
                    return [
                        ...rootFeatures,
                        FixedToolbarFeature(),
                    ];
                },
            }),
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