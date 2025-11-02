'use client'

import { Button } from '@/components/ui/button'
import {
	Dialog,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import type { Service } from '@/config/services'
import { useIsMobile } from '@/hooks/use-mobile'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

export interface ServicePageClientProps {
	service: Service
}

function ServiceCallToAction({ serviceTitle }: { serviceTitle: string }) {
	const isMobile = useIsMobile()

	const waHref = `https://wa.me/+77712222267?text=Здравствуйте,%20я%20хочу%20получить%20консультацию%20по%20услуге%20${encodeURIComponent(
		serviceTitle
	)}`

	// Desktop modal form state
	const [name, setName] = useState('')
	const [phone, setPhone] = useState('')
	const [sending, setSending] = useState(false)
	const [sent, setSent] = useState(false)

	async function handleSubmit(e?: React.FormEvent) {
		if (e) e.preventDefault()
		setSending(true)
		try {
			const body = new URLSearchParams()
			body.append('name', name)
			body.append('tell', phone)
			body.append('thema', `Запись на услугу: ${serviceTitle}`)

			const res = await fetch('/api/send-telegram', {
				method: 'POST',
				headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
				body: body.toString(),
			})

			if (!res.ok) {
				console.warn('Telegram send failed', res.status)
				setSent(false)
			} else {
				setSent(true)
				// clear fields after success
				setName('')
				setPhone('')
			}
		} catch (err) {
			console.error('Error sending to telegram', err)
			setSent(false)
		} finally {
			setSending(false)
		}
	}

	if (isMobile) {
		return (
			<a
				href={waHref}
				className='inline-flex h-12 items-center justify-center rounded-none border border-green-800 bg-transparent px-8 py-3 text-sm font-medium text-white shadow transition-colors hover:bg-green-800 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring uppercase tracking-wider'
			>
				Записаться
			</a>
		)
	}

	return (
		<Dialog>
			<DialogTrigger asChild>
				<button className='inline-flex h-12 items-center justify-center rounded-none border border-green-800 bg-transparent px-8 py-3 text-sm font-medium text-white shadow transition-colors hover:bg-green-800 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring uppercase tracking-wider'>
					Записаться
				</button>
			</DialogTrigger>
			<DialogContent className='bg-zinc-900 border-zinc-700 text-white max-w-md mx-auto'>
				<DialogHeader className='pb-6'>
					<DialogTitle className='text-2xl font-bold text-center text-white'>
						Записаться на услугу
					</DialogTitle>
					<p className='text-zinc-400 text-center mt-2'>
						Заполните форму и мы свяжемся с вами
					</p>
				</DialogHeader>

				{sent ? (
					<div className='py-8 text-center'>
						<div className='w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4'>
							<svg
								className='w-8 h-8 text-green-500'
								fill='none'
								stroke='currentColor'
								viewBox='0 0 24 24'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='M5 13l4 4L19 7'
								/>
							</svg>
						</div>
						<h3 className='text-lg font-semibold text-green-500 mb-2'>
							Заявка отправлена!
						</h3>
						<p className='text-zinc-400'>
							Спасибо! Мы свяжемся с вами в ближайшее время.
						</p>
					</div>
				) : (
					<form onSubmit={handleSubmit} className='space-y-6'>
						<div className='space-y-2'>
							<Label
								htmlFor='signup-name'
								className='text-sm font-medium text-zinc-300'
							>
								Ваше имя *
							</Label>
							<Input
								id='signup-name'
								value={name}
								onChange={e => setName(e.target.value)}
								required
								placeholder='Введите ваше имя'
								className='bg-zinc-800 border-zinc-600 text-white placeholder:text-zinc-500 focus:border-green-500 focus:ring-green-500/20 h-12'
							/>
						</div>
						<div className='space-y-2'>
							<Label
								htmlFor='signup-phone'
								className='text-sm font-medium text-zinc-300'
							>
								Номер телефона *
							</Label>
							<Input
								id='signup-phone'
								value={phone}
								onChange={e => setPhone(e.target.value)}
								required
								placeholder='+7 (___) ___-__-__'
								className='bg-zinc-800 border-zinc-600 text-white placeholder:text-zinc-500 focus:border-green-500 focus:ring-green-500/20 h-12'
							/>
						</div>
						<DialogFooter className='pt-4'>
							<Button
								type='submit'
								disabled={sending}
								className='w-full bg-green-600 hover:bg-green-700 disabled:bg-zinc-700 disabled:text-zinc-400 h-12 text-base font-medium transition-all duration-200'
							>
								{sending ? (
									<div className='flex items-center justify-center gap-2'>
										<div className='w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin' />
										Отправка...
									</div>
								) : (
									'Отправить заявку'
								)}
							</Button>
						</DialogFooter>
					</form>
				)}
			</DialogContent>
		</Dialog>
	)
}

export function ServicePageClient({ service }: ServicePageClientProps) {
	return (
		<>
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
							<ServiceCallToAction serviceTitle={service.title} />
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
		</>
	)
}
