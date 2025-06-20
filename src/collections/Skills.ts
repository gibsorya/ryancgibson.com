import { CollectionConfig } from "payload";
import { anyone } from '@/access/anyone';

export const Skills: CollectionConfig = {
    slug: 'skills',
    access: {
        read: anyone,
    },
    admin: {
        useAsTitle: 'name',
    },
    fields: [
        {
            name: 'name',
            type: 'text',
            required: true,
        },
        {
            name: 'icon',
            type: 'upload',
            relationTo: 'media',
            required: false
        },
        {
            name: 'url',
            type: 'text',
            required: false
        }
    ]
}