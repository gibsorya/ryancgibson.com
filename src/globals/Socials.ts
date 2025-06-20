import type { GlobalConfig } from 'payload'

export const Socials: GlobalConfig = {
    slug: 'socials',
    access: {
        read: () => true,
    },
    admin: {
        group: 'Global',
    },
    fields: [
        {
            name: 'email',
            type: 'text',
            label: 'Email',
        },
        {
            name: 'github',
            type: 'text',
            label: 'Github',
        },
        {
            name: 'linkedin',
            type: 'text',
            label: 'Linkedin',
        }
    ]
}