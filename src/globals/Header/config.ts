import type { GlobalConfig } from 'payload'

import { link } from '@/fields/link'
import { revalidateHeader } from './hooks/revalidateHeader'

export const Header: GlobalConfig = {
    slug: 'header',
    access: {
        read: () => true,
    },
    admin: {
        group: 'Global',
    },
    fields: [
        {
            name: 'logoLink',
            type: 'text',
            label: 'Logo Link',
            admin: {
                description: 'Link where the logo will redirect to',
            },
        },
        {
            name: 'navItems',
            type: 'array',
            fields: [
                link({
                    appearances: false,
                }),
            ],
            maxRows: 6,
            admin: {
                initCollapsed: true,
                components: {
                    RowLabel: '@/globals/Header/RowLabel#RowLabel',
                },
            },
        },
    ],
    hooks: {
        // afterChange: [revalidateHeader],
    },
}
