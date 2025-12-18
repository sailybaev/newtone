'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

import { useIsMobile } from '@/hooks/use-mobile'
import { ConsultationPopup } from './consultation-popup'

export function Hero() {
	const [isPopupOpen, setIsPopupOpen] = useState(false)
	const isMobile = useIsMobile()

	const scrollToCalculate = () => {
		const element = document.getElementById('calculate')
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' })
		}
	}

	const scrollToContact = () => {
		const element = document.getElementById('contact')
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' })
		}
	}

	const handleConsultationClick = () => {
		if (isMobile) {
			// Open WhatsApp on mobile
			window.open(
				`https://wa.me/+77712222267?text=Здравствуйте,%20я%20хочу%20получить%20консультацию`,
				'_blank'
			)
		} else {
			// Open popup on desktop
			setIsPopupOpen(true)
		}
	}

	return (
		<section className='relative h-[100vh] min-h-[700px] flex items-center overflow-hidden pt-20'>
			<div className='absolute inset-0 z-0'>
				<Image
					src='/images/gifka.gif'
					alt='Премиальный детейлинг автомобилей'
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
						Детейлинг-центр NEWTONE | Астана<br />
						{/* <span className='text-2xl md:text-6xl'>Астана</span> */}
					</h1>
					<p className='text-lg md:text-xl mb-10 text-gray-300 max-w-xl'>
						Профессиональный детейлинг, который преображает ваш автомобиль.
Максимальное внимание к деталям и только премиальные материалы для
безупречного результата
					</p>
					<div className='flex flex-col sm:flex-row gap-4'>
						<button
							onClick={handleConsultationClick}
							className='inline-flex h-12 items-center justify-center rounded-none border border-green-800 bg-transparent px-8 py-3 text-sm font-medium text-white shadow transition-colors hover:bg-green-800 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring uppercase tracking-wider'
						>
							Получить консультацию
						</button>
						<motion.button
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							onClick={scrollToContact}
							className='inline-flex h-12 items-center justify-center rounded-none bg-black border border-white px-8 py-3 text-sm font-medium text-white shadow transition-colors hover:bg-white hover:text-black focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring uppercase tracking-wider'
						>
							Контакты
						</motion.button>
					</div>
				</motion.div>
			</div>

			{/* Consultation Popup */}
			<ConsultationPopup
				isOpen={isPopupOpen}
				onClose={() => setIsPopupOpen(false)}
			/>
		</section>
	)
}
