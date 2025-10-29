// import { generatePreviewPath } from '@/utilities/generatePreviewPath'
import { authenticatedOrPublished } from '@/access/authenticatedOrPublished'
import { CardDeck } from '@/blocks/CardDeckBlock/config'
import { Hero } from '@/blocks/HeroBlock/config'
import { Contact } from '@/blocks/ContactBlock/config'
import { ArticleList } from '@/blocks/ArticleListBlock/config'

import { slugField } from '@/fields/slug'
import type { CollectionConfig } from 'payload'

import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from '@payloadcms/plugin-seo/fields'
import { revalidatePage } from './hooks/revalidatePage'

export const Pages: CollectionConfig = {
  slug: 'pages',
  access: {
    read: authenticatedOrPublished,
  },
  admin: {
    useAsTitle: 'title',
    group: 'Pages',
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
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Content',
          fields: [
            {
              name: 'layout',
              type: 'blocks',
              required: false,
              blocks: [Hero, CardDeck, Contact, ArticleList]
            }
          ]
        },
        {
          name: 'meta',
          label: 'SEO',
          fields: [
            OverviewField({
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
              imagePath: 'meta.image',
            }),
            MetaTitleField({
              hasGenerateFn: true,
            }),
            MetaImageField({
              relationTo: 'media',
            }),

            MetaDescriptionField({}),
            PreviewField({
              // if the `generateUrl` function is configured
              hasGenerateFn: true,

              // field paths to match the target field for data
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
            }),
          ],
        }
      ]
    },
    {
      name: 'publishedAt',
      type: 'date',
      admin: {
        position: 'sidebar',
      },
    },
    ...slugField()
  ],
  hooks: {
    afterChange: [revalidatePage],
  },
  versions: {
    drafts: {
      autosave: {
        interval: 100, // We set this interval for optimal live preview
      },
      schedulePublish: true,
    },
    maxPerDoc: 50,
  }
}

