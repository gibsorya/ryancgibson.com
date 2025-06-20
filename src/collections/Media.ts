import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
    {
      name: 'type',
      type: 'select',
      options: [
        {
          label: 'Image',
          value: 'image',
        },
        {
          label: 'Video',
          value: 'video',
        },
        {
          label: 'SVG',
          value: 'svg',
        }
      ],
      defaultValue: 'image',
    }
  ],
  upload: {
    imageSizes: [
      {
        name: 'thumbnail',
        width: 100,
        height: 100,
        position: 'center',
      },
      {
        name: 'standard',
        width: 1024,
        height: undefined,
        position: 'center',
      },
      {
        name: 'icon-small',
        width: 24,
        height: 24,
        position: 'center',
      },
      {
        name: 'icon-large',
        width: 120,
        height: 120,
        position: 'center',
      }
    ],
    adminThumbnail: 'thumbnail'
  },
}
