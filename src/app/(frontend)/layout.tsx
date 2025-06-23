import React from 'react'
import './globals.css'
import './styles.css'
import './typography.css'
import { Header } from '@/globals/Header/Component'
import { Footer } from '@/globals/Footer/Component'
import { Metadata } from 'next/types'
import { getServerSideURL } from '@/utilities/getURL'
import { mergeOpenGraph } from '@/utilities/mergeOpenGraph'

import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from '@vercel/speed-insights/next';

// Ensure we have a valid URL for metadataBase
const getValidMetadataBase = () => {
  try {
    return new URL(getServerSideURL())
  } catch (error) {
    console.warn('Invalid metadata base URL, falling back to localhost:', error)
    return new URL('http://localhost:3000')
  }
}

export const metadata: Metadata = {
  metadataBase: getValidMetadataBase(),
  openGraph: mergeOpenGraph(),
  twitter: {
    card: 'summary_large_image',
    creator: '@gibsorya',
  },
}


export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/tlz4jrd.css" />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
