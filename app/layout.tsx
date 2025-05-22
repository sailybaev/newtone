import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'NEWTONE - Детейлинг Студия',
  description: 'Профессиональные услуги детейлинга, которые преображают ваш автомобиль с тщательным вниманием к деталям и премиальными продуктами.',
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
