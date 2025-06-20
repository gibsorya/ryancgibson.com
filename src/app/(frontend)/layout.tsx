import React from 'react'
import './globals.css'
import './styles.css'
import './typography.css'
import { Header } from '@/globals/Header/Component'
import { Footer } from '@/globals/Footer/Component'

export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Payload Blank Template',
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
      </body>
    </html>
  )
}
