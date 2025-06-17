import type { Block } from 'payload'

export const Card: Block = {
    slug: 'card',
    labels: {
        singular: 'Card',
        plural: 'Cards',
    },
    interfaceName: 'CardBlock',
    fields: [
        {
            name: 'title',
            type: 'text',
        },
        {
            name: 'description',
            type: 'richText',
        },
        {
            name: 'background',
            type: 'select',
            options: [
                {
                    label: 'Light',
                    value: 'light',
                },
                {
                    label: 'Dark',
                    value: 'dark',
                },
                {
                    label: 'Light Blue',
                    value: 'light-blue',
                },
                {
                    label: 'Gradient',
                    value: 'gradient',
                },
                {
                    label: 'None',
                    value: 'none',
                }
            ],
        }
    ]
}