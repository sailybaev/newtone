import { Metadata } from "next"
import type { ReactNode } from "react"
import './globals.css'

export const metadata: Metadata = {
  title: "NEWTONE - Премиальный Детейлинг Центр в Астане | Мойка и Детейлинг Автомобилей",
  description: "Профессиональный детейлинг и мойка автомобилей в Астане. Высококачественные услуги, опытные специалисты и передовые технологии для безупречного результата. Защитное покрытие, полировка, химчистка салона.",
  keywords: "детейлинг, мойка автомобилей, Астана, NEWTONE, полировка, химчистка салона, защитное покрытие, керамика, детейлинг центр, мойка машин, полировка кузова, химчистка автомобиля, защита кузова, керамическое покрытие",
  openGraph: {
    title: "NEWTONE - Премиальный Детейлинг Центр в Астане",
    description: "Профессиональный детейлинг и мойка автомобилей в Астане. Высококачественные услуги и передовые технологии.",
    images: ["/images/about.jpeg"],
    type: "website",
    locale: "ru_RU",
    siteName: "NEWTONE - Детейлинг Центр",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Нужно будет заменить на реальный код после регистрации в Google Search Console
  },
  viewport: "width=device-width, initial-scale=1",
  alternates: {
    canonical: "https://newtone.kz",
  },
  icons: {
    icon: '/fav.jpg',
    apple: '/apple-touch-icon.png',
  },
  category: 'automotive',
  classification: 'business',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="ru">
      <head>
        <script src="https://maps.api.2gis.ru/2.0/loader.js?pkg=full"></script>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
