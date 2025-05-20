import type { CollectionConfig } from 'payload'

export const Projects: CollectionConfig = {
  slug: 'projects',
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
      type: 'text',
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
        type: 'select',
        options: ['Web Development', 'Mobile Development', 'UI/UX Design', 'Other'],
    }, 
  ],
}
