import type { Block } from 'payload'

export const Project: Block = {
    slug: 'project',
    interfaceName: 'ProjectBlock',
    fields: [
        {
            name: 'project',
            type: 'relationship',
            relationTo: 'projects',
            required: true,
        },
        {
            name: 'fullWidth',
            type: 'checkbox',
            label: 'Full Width',
            defaultValue: false,
        },
        {
            name: 'backgroundColor',
            type: 'select',
            options: [
                {
                    label: 'White',
                    value: 'white',
                },
                {
                    label: 'Tomato Red',
                    value: 'tomato-red',
                },
                {
                    label: 'Light Blue',
                    value: 'light_blue',
                },
                {
                    label: 'Rich Black',
                    value: 'rich_black',
                },
                {
                    label: 'Wenge Gray',
                    value: 'wenge-gray',
                }
            ],
            defaultValue: 'white',
        }
    ]
}