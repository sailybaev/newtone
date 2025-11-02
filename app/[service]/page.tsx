import { Advantages } from '@/components/advantages'
import { Branches } from '@/components/branches'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { MobileFloatingFooter } from '@/components/mobile-floating-footer'
import { ServiceCardsGrid } from '@/components/service-cards-grid'
import { WhyChooseUs } from '@/components/why-choose-us'
import { getServiceDetails } from '@/config/service-details'
import { services } from '@/config/services'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ServicePageClient } from './service-page-client'

interface ServicePageProps {
	params: Promise<{
		service: string
	}>
}

export async function generateMetadata({
	params,
}: ServicePageProps): Promise<Metadata> {
	const { service: serviceId } = await params
	const service = services.find(s => s.id === serviceId)

	if (!service) {
		return {
			title: 'Услуга не найдена',
			description: 'Запрашиваемая услуга не найдена',
		}
	}

	const description =
		service.description ||
		`Профессиональные услуги ${service.title.toLowerCase()} в премиальном детейлинг центре NEW TONE. Используем только качественные материалы и современное оборудование. ${
			service.price
		}`

	return {
		title: `${service.title} ДЛЯ АВТО В АСТАНЕ | NEW TONE`,
		description,
		robots: {
			index: true,
			follow: true,
			googleBot: {
				index: true,
				follow: true,
			},
		},
		openGraph: {
			title: `${service.title} ДЛЯ АВТО В АСТАНЕ | NEW TONE`,
			description,
			images: [
				{
					url: service.image,
					width: 1200,
					height: 630,
					alt: service.title,
				},
			],
			type: 'website',
			siteName: 'NEW TONE',
		},
		twitter: {
			card: 'summary_large_image',
			title: `${service.title} | NEW TONE`,
			description,
			images: [service.image],
		},
	}
}

export async function generateStaticParams() {
	return services.map(service => ({
		service: service.id,
	}))
}

export default async function ServicePage({ params }: ServicePageProps) {
	const { service: serviceId } = await params
	const service = services.find(s => s.id === serviceId)

	if (!service) {
		notFound()
	}

	return (
		<div className='flex min-h-screen flex-col bg-black text-white'>
			<Header />

			<main className='flex-1'>
				<ServicePageClient service={service} />
			</main>
			<Advantages />
			<ServiceCardsGrid />
			<WhyChooseUs />
			<Branches />

			{/* Service Details Section */}
			<section className='py-16 md:py-24 bg-zinc-900'>
				<div className='container'>
					<div className='max-w-4xl mx-auto'>
						<h2 className='text-3xl font-bold tracking-tight mb-8 uppercase'>
							О Услуге
						</h2>
						<div className='space-y-6 text-gray-300'>
							{getServiceDetails(service.id)}
						</div>
					</div>
				</div>
			</section>

			<Footer />
			<MobileFloatingFooter />
		</div>
	)
}
