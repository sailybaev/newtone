import { Metadata } from "next"
import type { ReactNode } from "react"
import './globals.css'

export const metadata: Metadata = {
  title: "NEWTONE - Премиальный Детейлинг Центр в Астане | Мойка и Детейлинг Автомобилей",
  description: "Профессиональный детейлинг и мойка автомобилей в Астане. Высококачественные услуги, опытные специалисты и передовые технологии для безупречного результата.",
  keywords: "детейлинг, мойка автомобилей, Астана, NEWTONE, полировка, химчистка салона, защитное покрытие",
  openGraph: {
    title: "NEWTONE - Премиальный Детейлинг Центр в Астане",
    description: "Профессиональный детейлинг и мойка автомобилей в Астане. Высококачественные услуги и передовые технологии.",
    images: ["/images/about.jpeg"],
    type: "website",
    locale: "ru_RU",
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: "width=device-width, initial-scale=1",
  alternates: {
    canonical: "https://newtone.kz",
  },
  icons: {
    icon: '/fav.jpg',
    apple: '/apple-touch-icon.png',
  },
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
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
