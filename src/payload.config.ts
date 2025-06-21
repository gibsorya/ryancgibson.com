// storage-adapter-import-placeholder
import { vercelPostgresAdapter } from '@payloadcms/db-vercel-postgres'
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { seoPlugin } from '@payloadcms/plugin-seo'
import { GenerateTitle, GenerateURL } from '@payloadcms/plugin-seo/types'
import { lexicalEditor, BlocksFeature, FixedToolbarFeature } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'


import { Page } from '@/payload-types'

// Collections
import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Projects } from './collections/Projects'
import { Pages } from './collections/Pages'
import { Tags } from './collections/Tags'
import { Skills } from './collections/Skills'
import { CallToActions } from './collections/CallToActions'

// Blocks
import { TypewriterBlock } from './blocks/TypewriterBlock/config'
import { CallToActionBlock } from './blocks/CallToActionBlock/config'

// Globals
import { Header } from './globals/Header/config'
import { Footer } from './globals/Footer/config'
import { Socials } from './globals/Socials'
import { getServerSideURL } from './utilities/getURL'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

const generateTitle: GenerateTitle<Page> = ({ doc }) => {
  return doc?.title ? `${doc.title} | Software Engineer` : 'Software Engineer'
}

const generateURL: GenerateURL<Page> = ({ doc }) => {
  const url = getServerSideURL()

  if (doc?.slug === 'home') {
    return url
  }

  return `${url}/${doc.slug}`
}

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    }
  },
  collections: [
    Users,
    Media,
    Projects,
    Pages,
    Tags,
    Skills,
    CallToActions
  ],
  globals: [
    Header,
    Footer,
    Socials
  ],
  editor: lexicalEditor({
    features: ({ defaultFeatures }) => [
      ...defaultFeatures,
      BlocksFeature({
        blocks: [
          TypewriterBlock,
          CallToActionBlock
        ]
      }),
      FixedToolbarFeature()
    ]
  }),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: vercelPostgresAdapter(),
  sharp,
  plugins: [
    payloadCloudPlugin(),
    // storage-adapter-placeholder
    vercelBlobStorage({
      collections: {
        media: true
      },
      // Token provided by Vercel once Blob storage is added to your Vercel project
      token: process.env.PRODUCTION_READ_WRITE_TOKEN || process.env.BLOB_READ_WRITE_TOKEN,
    }),
    seoPlugin({
      collections: [Pages],
      uploadsCollection: 'media',
      generateTitle,
      generateURL,
      tabbedUI: true
    })
  ],
  upload: {
    limits: {
      fileSize: 5000000, // 5MB, adjust as needed
    },
  },
})
