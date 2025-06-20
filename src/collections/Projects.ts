import { anyone } from '@/access/anyone'
import type { CollectionConfig } from 'payload'

export const Projects: CollectionConfig = {
  slug: 'projects',
  access: {
    read: anyone
  },
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'richText',
    },
    {
        name: 'featuredImage',
        type: 'upload',
        relationTo: 'media',
    },
    {
        name: 'images',
        type: 'upload',
        relationTo: 'media',
        hasMany: true,
    },
    {
        name: 'tags',
        type: 'relationship',
        relationTo: 'tags',
        hasMany: true,
    },
    {
        name: 'links',
        type: 'array',
        fields: [
            {
                name: 'label',
                type: 'text',
                required: true,
            },
            {
                name: 'url',
                type: 'text',
                required: true,
            },
            {
                name: 'icon',
                type: 'upload',
                relationTo: 'media',
                required: false,
            }
        ]
    }
  ],
}
