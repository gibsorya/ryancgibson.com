import React from 'react'
import './globals.css'
import './styles.css'
import './typography.css'

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
        <main>{children}</main>
      </body>
    </html>
  )
}
