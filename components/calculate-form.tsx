'use client'

import type React from 'react'

import { AnimatePresence, motion } from 'framer-motion'
import { CheckCircle, X } from 'lucide-react'
import { useEffect, useState } from 'react'

import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
} from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useIsMobile } from '@/hooks/use-mobile'

export function CalculateForm() {
	const [isOpen, setIsOpen] = useState(false)
	const [formData, setFormData] = useState({
		name: '',
		phone: '',
	})
	const [isSubmitting, setIsSubmitting] = useState(false)
	const [showSuccessDialog, setShowSuccessDialog] = useState(false)
	const isMobile = useIsMobile()

	// Listen for custom event to open the form
	useEffect(() => {
		const handleOpenCalculate = () => setIsOpen(true)
		window.addEventListener('openCalculateForm', handleOpenCalculate)
		return () =>
			window.removeEventListener('openCalculateForm', handleOpenCalculate)
	}, [])

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target
		setFormData({
			...formData,
			[name]: value,
		})
	}

	const generateWhatsAppMessage = () => {
		const message = `
Здравствуйте, NEWTONE!

Хочу узнать стоимость детейлинга:

Имя: ${formData.name}
Телефон: ${formData.phone}

Пожалуйста, сообщите мне стоимость. Спасибо!
    `.trim()

		const encodedMessage = encodeURIComponent(message)
		const whatsappNumber = '+77712222267'
		window.open(
			`https://wa.me/${whatsappNumber}?text=${encodedMessage}`,
			'_blank'
		)
	}

	const sendToTelegram = async () => {
		if (!formData.name.trim()) {
			alert('Пожалуйста, укажите ваше имя')
			return
		}

		if (!formData.phone.trim()) {
			alert('Пожалуйста, укажите номер телефона')
			return
		}

		setIsSubmitting(true)

		try {
			const response = await fetch('/api/send-telegram', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					name: formData.name,
					thema: 'Заявка на расчет стоимости детейлинга',
					tell: formData.phone,
				}),
			})

			if (response.ok) {
				setShowSuccessDialog(true)
				setIsOpen(false)
				setFormData({
					name: '',
					phone: '',
				})
			} else {
				throw new Error('Ошибка при отправке')
			}
		} catch (error) {
			console.error('Error sending to Telegram:', error)
			alert('Произошла ошибка при отправке. Попробуйте еще раз.')
		} finally {
			setIsSubmitting(false)
		}
	}

	const handleSubmit = () => {
		if (isMobile) {
			generateWhatsAppMessage()
		} else {
			sendToTelegram()
		}
	}

	return (
		<>
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className='fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4'
						onClick={() => setIsOpen(false)}
					>
						<motion.div
							initial={{ scale: 0.9, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							exit={{ scale: 0.9, opacity: 0 }}
							className='bg-zinc-900 rounded-none border border-gray-800 shadow-lg max-w-md w-full max-h-[90vh] overflow-y-auto'
							onClick={e => e.stopPropagation()}
						>
							<div className='p-6'>
								<div className='flex items-center justify-between mb-6'>
									<h3 className='text-xl font-semibold uppercase'>
										Рассчитать Стоимость
									</h3>
									<Button
										variant='ghost'
										size='icon'
										onClick={() => setIsOpen(false)}
									>
										<X className='h-4 w-4' />
										<span className='sr-only'>Закрыть</span>
									</Button>
								</div>

								<form className='space-y-4'>
									<div className='space-y-2'>
										<Label htmlFor='name'>Ваше Имя</Label>
										<Input
											id='name'
											name='name'
											placeholder='Иван Иванов'
											value={formData.name}
											onChange={handleChange}
											className='bg-zinc-800 border-gray-700 rounded-none'
										/>
									</div>

									<div className='space-y-2'>
										<Label htmlFor='phone'>Номер Телефона</Label>
										<Input
											id='phone'
											name='phone'
											type='tel'
											placeholder='+7 (777) 123-45-67'
											value={formData.phone}
											onChange={handleChange}
											className='bg-zinc-800 border-gray-700 rounded-none'
										/>
									</div>

									<Button
										type='button'
										className='w-full rounded-none bg-green-800 hover:bg-green-700 text-white uppercase tracking-wider disabled:opacity-50'
										onClick={handleSubmit}
										disabled={isSubmitting}
									>
										{isSubmitting
											? 'Отправка...'
											: isMobile
											? 'Получить Расчет'
											: 'Получить Расчет'}
									</Button>
								</form>
							</div>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>

			{/* Success Dialog */}
			<AlertDialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
				<AlertDialogContent className='bg-zinc-900 border-gray-800 text-white max-w-md'>
					<AlertDialogHeader className='text-center'>
						<div className='mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-600/20'>
							<CheckCircle className='h-8 w-8 text-green-400' />
						</div>
						<AlertDialogTitle className='text-xl font-semibold text-green-400'>
							Заявка успешно отправлена!
						</AlertDialogTitle>
						<AlertDialogDescription className='text-gray-300 mt-2'>
							Спасибо за ваш запрос! Наш менеджер свяжется с вами в ближайшее
							время для уточнения деталей и предоставления точной стоимости
							услуг.
						</AlertDialogDescription>
					</AlertDialogHeader>
					<AlertDialogFooter>
						<AlertDialogAction
							className='w-full bg-green-600 hover:bg-green-700 text-white rounded-none uppercase tracking-wider'
							onClick={() => setShowSuccessDialog(false)}
						>
							Понятно
						</AlertDialogAction>
					</AlertDialogFooter>
				</AlertDialogContent>
			</AlertDialog>
		</>
	)
}
