'use client'

import { Button } from '@/components/ui/button'
import { MessageCircle, Phone } from 'lucide-react'

export function MobileFloatingFooter() {
	const handleWhatsApp = () => {
		// Default to first branch WhatsApp number
		const whatsappNumber = '+77785886779'
		const message = encodeURIComponent(
			'Здравствуйте! Хочу узнать подробнее о ваших услугах.'
		)
		window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank')
	}

	const handleCall = () => {
		window.location.href = 'tel:+77785886779'
	}

	return (
		<div className='fixed bottom-0 left-0 right-0 bg-zinc-900/98 backdrop-blur-md border-t border-gray-800 p-3 z-40 md:hidden shadow-2xl'>
			<div className='flex gap-2 max-w-md mx-auto'>
				<Button
					onClick={handleWhatsApp}
					className='flex-1 bg-green-800 hover:bg-green-700 text-white rounded-none py-6 flex items-center justify-center gap-2 font-semibold uppercase tracking-wide shadow-lg hover:shadow-green-800/20 transition-all duration-200 min-w-0'
				>
					<MessageCircle className='h-5 w-5 flex-shrink-0' />
					<span className='truncate'>WhatsApp</span>
				</Button>
				<Button
					onClick={handleCall}
					className='flex-1 bg-black hover:bg-white hover:text-black text-white rounded-none py-6 flex items-center justify-center gap-2 font-semibold uppercase tracking-wide shadow-lg transition-all duration-200 min-w-0'
				>
					<Phone className='h-5 w-5 flex-shrink-0' />
					<span className='truncate'>Позвонить</span>
				</Button>
			</div>
		</div>
	)
}
