'use client'

import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

interface ConsultationPopupProps {
	isOpen: boolean
	onClose: () => void
}

export function ConsultationPopup({ isOpen, onClose }: ConsultationPopupProps) {
	const [isSubmitted, setIsSubmitted] = useState(false)
	const [isLoading, setIsLoading] = useState(false)
	const [formData, setFormData] = useState({
		name: '',
		phone: '',
	})

	async function sendToTelegram(payload: {
		name: string
		tell: string
		thema: string
	}) {
		try {
			const body = new URLSearchParams()
			body.append('name', payload.name)
			body.append('tell', payload.tell)
			body.append('thema', payload.thema)

			const res = await fetch('/api/send-telegram', {
				method: 'POST',
				headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
				body: body.toString(),
			})

			if (!res.ok) {
				console.warn('Telegram send failed', res.status)
				throw new Error('Failed to send message')
			} else {
				console.log('Telegram message sent')
			}
		} catch (err) {
			console.error('Error sending to telegram', err)
			throw err
		}
	}

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target
		setFormData({
			...formData,
			[name]: value,
		})
	}

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		setIsLoading(true)

		try {
			await sendToTelegram({
				name: formData.name,
				tell: formData.phone,
				thema: 'Заявка на консультацию из Hero секции',
			})

			setIsSubmitted(true)
			setFormData({ name: '', phone: '' })

			// Reset the success message and close dialog after 3 seconds
			setTimeout(() => {
				setIsSubmitted(false)
				onClose()
			}, 3000)
		} catch (error) {
			console.error('Error submitting form:', error)
			// You could add error handling here
		} finally {
			setIsLoading(false)
		}
	}

	const handleOpenChange = (open: boolean) => {
		if (!open) {
			onClose()
			// Reset form when closing
			setTimeout(() => {
				setFormData({ name: '', phone: '' })
				setIsSubmitted(false)
			}, 300)
		}
	}

	return (
		<Dialog open={isOpen} onOpenChange={handleOpenChange}>
			<DialogContent className='sm:max-w-md bg-zinc-900 border-gray-700 text-white rounded-none'>
				<DialogHeader>
					<DialogTitle className='text-xl font-semibold uppercase tracking-wider text-white'>
						Получить консультацию
					</DialogTitle>
				</DialogHeader>

				{isSubmitted ? (
					<motion.div
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						className='bg-green-900/20 border border-green-800 p-4 flex items-start gap-3 rounded-none'
					>
						<CheckCircle className='h-5 w-5 text-green-600 mt-0.5' />
						<div>
							<h4 className='font-medium text-green-500'>Заявка отправлена!</h4>
							<p className='text-sm text-green-400'>
								Мы свяжемся с вами в ближайшее время.
							</p>
						</div>
					</motion.div>
				) : (
					<form onSubmit={handleSubmit} className='space-y-4'>
						<div className='space-y-2'>
							<Label htmlFor='popup-name' className='text-white'>
								Ваше имя
							</Label>
							<Input
								id='popup-name'
								name='name'
								placeholder='Введите ваше имя'
								required
								value={formData.name}
								onChange={handleChange}
								className='bg-zinc-800 border-gray-700 rounded-none text-white placeholder:text-gray-400 focus:border-green-800'
							/>
						</div>

						<div className='space-y-2'>
							<Label htmlFor='popup-phone' className='text-white'>
								Номер телефона
							</Label>
							<Input
								id='popup-phone'
								name='phone'
								type='tel'
								placeholder='+7 (777) 777-77-77'
								required
								value={formData.phone}
								onChange={handleChange}
								className='bg-zinc-800 border-gray-700 rounded-none text-white placeholder:text-gray-400 focus:border-green-800'
							/>
						</div>

						<div className='flex flex-col sm:flex-row gap-3 pt-4'>
							<Button
								type='submit'
								disabled={isLoading}
								className='flex-1 rounded-none bg-green-800 hover:bg-green-700 text-white uppercase tracking-wider'
							>
								{isLoading ? 'Отправляем...' : 'Отправить заявку'}
							</Button>
							<Button
								type='button'
								variant='outline'
								onClick={() => onClose()}
								className='flex-1 rounded-none border-gray-700 text-white bg-zinc-800 '
							>
								Отмена
							</Button>
						</div>
					</form>
				)}
			</DialogContent>
		</Dialog>
	)
}
