import type { Block } from "payload";

export const Contact: Block = {
    slug: 'contact',
    interfaceName: 'ContactBlock',
    fields: [
        {
            name: 'title',
            type: 'text',
            label: 'Title',
        },
        {
            name: 'description',
            type: 'richText',
            label: 'Description',
        },
        {
            name: 'cta',
            type: 'relationship',
            relationTo: 'callToActions',
            label: 'CTA',
        }
    ]
}