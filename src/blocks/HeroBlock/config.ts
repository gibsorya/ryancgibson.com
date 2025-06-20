import type { Block } from 'payload'

export const Hero: Block = {
    slug: 'hero',
    interfaceName: 'HeroBlock',
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
            name: 'image',
            type: 'upload',
            relationTo: 'media',
            required: false,
        },
        {
            name: 'type',
            type: 'select',
            options: [
                {
                    label: 'Text Only',
                    value: 'text'
                },
                {
                    label: 'Full Width',
                    value: 'full'
                },
                {
                    label: 'Banner',
                    value: 'banner'
                }
            ],
            defaultValue: 'text'
        }
    ]
}