'use client'

import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { MobileFloatingFooter } from '@/components/mobile-floating-footer'
import { getServiceDetails } from '@/config/service-details'
import { services } from '@/config/services'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { use } from 'react'

interface ServicePageProps {
	params: Promise<{
		service: string
	}>
}

export default function ServicePage({ params }: ServicePageProps) {
	const { service: serviceId } = use(params)
	const service = services.find(s => s.id === serviceId)

	if (!service) {
		notFound()
	}

	const scrollToContact = () => {
		const element = document.getElementById('contact')
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' })
		}
	}

	return (
		<div className='flex min-h-screen flex-col bg-black text-white'>
			<Header />

			<main className='flex-1'>
				{/* Hero Section for Service */}
				<section className='relative h-[100vh] min-h-[700px] flex items-center overflow-hidden pt-20'>
					<div className='absolute inset-0 z-0'>
						<Image
							src={service.image}
							alt={service.title}
							fill
							priority
							className='object-cover'
						/>
						<div className='absolute inset-0 bg-black/60' />
					</div>
					<div className='container relative z-10'>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8 }}
							className='max-w-3xl'
						>
							<h1 className='text-4xl md:text-6xl font-bold mb-10 uppercase tracking-wider leading-tight'>
								{service.title}
							</h1>
							<p className='text-lg md:text-xl mb-6 text-gray-300 max-w-xl'>
								{service.description ||
									`Профессиональные услуги ${service.title.toLowerCase()} в премиальном детейлинг центре NEW TONE. Используем только качественные материалы и современное оборудование.`}
							</p>
							<div className='text-2xl md:text-3xl font-bold mb-10 text-green-500'>
								{service.price}
							</div>
							<div className='flex flex-col sm:flex-row gap-4'>
								<a
									href={`https://wa.me/+77785886779?text=Здравствуйте,%20я%20хочу%20получить%20консультацию%20по%20услуге%20${encodeURIComponent(
										service.title
									)}`}
									className='inline-flex h-12 items-center justify-center rounded-none border border-green-800 bg-transparent px-8 py-3 text-sm font-medium text-white shadow transition-colors hover:bg-green-800 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring uppercase tracking-wider'
								>
									Записаться
								</a>
								<motion.button
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
									onClick={() => window.history.back()}
									className='inline-flex h-12 items-center justify-center rounded-none bg-black border border-white px-8 py-3 text-sm font-medium text-white shadow transition-colors hover:bg-white hover:text-black focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring uppercase tracking-wider'
								>
									Назад
								</motion.button>
							</div>
						</motion.div>
					</div>
				</section>

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

				{/* Contact Section */}
				{/* <section id='contact' className='py-16 md:py-24 bg-black'>
					<div className='container'>
						<h2 className='text-3xl font-bold tracking-tight mb-8 text-center uppercase'>
							Записаться на Услугу
						</h2>
						<div className='max-w-2xl mx-auto text-center'>
							<p className='text-gray-400 mb-8'>
								Свяжитесь с нами для записи на услугу{' '}
								{service.title.toLowerCase()} или получения дополнительной
								информации
							</p>
							<div className='flex flex-col sm:flex-row gap-4 justify-center'>
								<a
									href='https://wa.me/+77785886779'
									className='inline-flex h-12 items-center justify-center rounded-none border border-green-800 bg-transparent px-8 py-3 text-sm font-medium text-white shadow transition-colors hover:bg-green-800 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring uppercase tracking-wider'
								>
									+7 (778) 588-67-79
								</a>
								<a
									href='https://wa.me/+77712222267'
									className='inline-flex h-12 items-center justify-center rounded-none border border-green-800 bg-transparent px-8 py-3 text-sm font-medium text-white shadow transition-colors hover:bg-green-800 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring uppercase tracking-wider'
								>
									+7 (771) 222-22-67
								</a>
							</div>
						</div>
					</div>
				</section> */}
			</main>

			<Footer />
			<MobileFloatingFooter />
		</div>
	)
}
