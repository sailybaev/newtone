import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'v0 App',
  description: 'Created with v0',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script src="https://maps.api.2gis.ru/2.0/loader.js?pkg=full"></script>
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
