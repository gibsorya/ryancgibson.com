import type { GlobalConfig } from 'payload'

export const Footer: GlobalConfig = {
    slug: 'footer',
    access: {
        read: () => true,
    },
    admin: {
        group: 'Global',
    },
    fields: [
        {
            name: 'text',
            type: 'text',
            label: 'Text',
        },
        {
            name: 'textUrl',
            type: 'text',
            label: 'Text URL',
        },
        {
            name: 'displaySocials',
            type: 'checkbox',
            label: 'Display Socials'
        }
    ]
}