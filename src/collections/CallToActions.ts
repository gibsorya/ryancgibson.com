import type { CollectionConfig } from 'payload'

export const CallToActions: CollectionConfig = {
    slug: 'callToActions',
    access: {
        read: () => true,
    },
    labels: {
        singular: 'CTA',
        plural: 'CTAs',
    },
    admin: {
        useAsTitle: 'text',
    },
    fields: [
        {
            name: 'text',
            type: 'text',
            label: 'Text',
        },
        {
            name: 'link',
            type: 'text',
            label: 'Link',
        },
        {
            name: 'type',
            type: 'select',
            label: 'Type',
            options: [
                {
                    label: 'Primary',
                    value: 'primary',
                },
                {
                    label: 'Secondary',
                    value: 'secondary',
                },
                {
                    label: 'Tertiary',
                    value: 'tertiary',
                }
            ]
        }
    ]
}