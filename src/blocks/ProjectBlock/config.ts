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
        }
    ]
}