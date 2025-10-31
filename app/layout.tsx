import { Metadata } from 'next'
import Script from 'next/script'
import type { ReactNode } from 'react'
import './globals.css'

export const metadata: Metadata = {
	title:
		'NEWTONE - Премиальный Детейлинг Центр в Астане | Мойка и Детейлинг Автомобилей',
	description:
		'Профессиональный детейлинг и мойка автомобилей в Астане. Высококачественные услуги, опытные специалисты и передовые технологии для безупречного результата. Защитное покрытие, полировка, химчистка салона.',
	keywords:
		'детейлинг, мойка автомобилей, Астана, NEWTONE, полировка, химчистка салона, защитное покрытие, керамика, детейлинг центр, мойка машин, полировка кузова, химчистка автомобиля, защита кузова, керамическое покрытие',
	openGraph: {
		title: 'NEWTONE - Премиальный Детейлинг Центр в Астане',
		description:
			'Профессиональный детейлинг и мойка автомобилей в Астане. Высококачественные услуги и передовые технологии.',
		images: ['/images/about.jpeg'],
		type: 'website',
		locale: 'ru_RU',
		siteName: 'NEWTONE - Детейлинг Центр',
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
	viewport: 'width=device-width, initial-scale=1',
	alternates: {
		canonical: 'https://newtone.kz',
	},
	icons: {
		icon: '/fav.jpg',
		apple: '/apple-touch-icon.png',
	},
	category: 'automotive',
	classification: 'business',
}

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang='ru'>
			<head>
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link
					rel='preconnect'
					href='https://fonts.gstatic.com'
					crossOrigin='anonymous'
				/>
				{/* Google Tag Manager */}
				<Script
					id='gtm-script'
					strategy='afterInteractive'
					dangerouslySetInnerHTML={{
						__html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
						new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
						j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
						'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
						})(window,document,'script','dataLayer','GTM-PB8VP8LS');`,
					}}
				/>
			</head>
			<body>
				{/* Google Tag Manager (noscript) */}
				<noscript>
					<iframe
						src='https://www.googletagmanager.com/ns.html?id=GTM-PB8VP8LS'
						height='0'
						width='0'
						style={{ display: 'none', visibility: 'hidden' }}
					/>
				</noscript>
				{children}

				{/* 2GIS Maps */}
				<Script
					src='https://maps.api.2gis.ru/2.0/loader.js?pkg=full'
					strategy='afterInteractive'
				/>

				{/* Yandex.Metrika counter */}
				<Script
					id='yandex-metrika'
					strategy='afterInteractive'
					dangerouslySetInnerHTML={{
						__html: `
              (function(m,e,t,r,i,k,a){
                m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                m[i].l=1*new Date();
                for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
              })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=104652284', 'ym');

              ym(104652284, 'init', {ssr:true, webvisor:true, clickmap:true, ecommerce:"dataLayer", accurateTrackBounce:true, trackLinks:true});
            `,
					}}
				/>
				<noscript>
					<div>
						<img
							src='https://mc.yandex.ru/watch/104652284'
							style={{ position: 'absolute', left: '-9999px' }}
							alt=''
						/>
					</div>
				</noscript>
			</body>
		</html>
	)
}
