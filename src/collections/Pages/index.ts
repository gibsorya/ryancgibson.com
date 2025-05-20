// import { generatePreviewPath } from '@/utilities/generatePreviewPath'
import { slugField } from '@/fields/slug'
import type { CollectionConfig } from 'payload'

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
    // livePreview: {
    //     url: ({ data, req }) => {
    //         const path = generatePreviewPath({
    //           slug: typeof data?.slug === 'string' ? data.slug : '',
    //           collection: 'pages',
    //           req,
    //         })
    
    //         return path
    //       },
    // }
  },
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    ...slugField()
  ],
}

