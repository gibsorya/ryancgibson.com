import { FixedToolbarFeature, lexicalEditor } from '@payloadcms/richtext-lexical'
import type { Block } from 'payload'

export const NewsletterBlock: Block = {
    slug: 'newsletter',
    interfaceName: 'NewsletterBlock',
    fields: [
        {
            name: 'newsletter',
            type: 'relationship',
            relationTo: 'newsletters',
            label: 'Newsletter'
        },
        {
            name: 'heading',
            type: 'text',
            label: 'Heading'
        },
        {
            name: 'description',
            type: 'richText',
            editor: lexicalEditor({
                features: ({ defaultFeatures }) => [
                    ...defaultFeatures,
                    FixedToolbarFeature()
                ]
            }),
        },
        {
            name: 'cta',
            type: 'relationship',
            relationTo: 'callToActions',
            label: 'CTA'
        }
    ]
}