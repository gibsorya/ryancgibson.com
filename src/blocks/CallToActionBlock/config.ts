import type { Block } from "payload";

export const CallToActionBlock: Block = {
    slug: 'callToAction',
    interfaceName: 'CallToActionBlock',
    fields: [
        {
            name: 'cta',
            type: 'relationship',
            relationTo: 'callToActions',
            label: 'CTA',
        },
        {
            name: 'overrideType',
            type: 'select',
            label: 'Override Type',
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