'use client'

import type React from 'react'

import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { useEffect, useState } from 'react'

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'
import { branches } from '@/config/branches'
import { services } from '@/config/services'

export function CalculateForm() {
	const [isOpen, setIsOpen] = useState(false)
	const [formData, setFormData] = useState({
		name: '',
		branch: '',
		services: [] as string[],
	})

	// Listen for custom event to open the form
	useEffect(() => {
		const handleOpenCalculate = () => setIsOpen(true)
		window.addEventListener('openCalculateForm', handleOpenCalculate)
		return () =>
			window.removeEventListener('openCalculateForm', handleOpenCalculate)
	}, [])

	const calculateTotal = () => {
		let total = 0
		let hasPriceInquiry = false

		formData.services.forEach(serviceId => {
			const service = services.find(s => s.id === serviceId)
			if (service) {
				if (service.price === 'цена по запросу') {
					hasPriceInquiry = true
				} else {
					// Extract numeric value from price string (e.g., "от 50 000 ₸" -> 50000)
					const priceMatch = service.price.match(/от\s*(\d[\d\s]*)/)
					if (priceMatch) {
						const price = parseInt(priceMatch[1].replace(/\s/g, ''))
						total += price
					}
				}
			}
		})

		return { total, hasPriceInquiry }
	}

	const handleServiceChange = (serviceId: string, checked: boolean) => {
		if (checked) {
			setFormData({
				...formData,
				services: [...formData.services, serviceId],
			})
		} else {
			setFormData({
				...formData,
				services: formData.services.filter(id => id !== serviceId),
			})
		}
	}

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target
		setFormData({
			...formData,
			[name]: value,
		})
	}

	const handleSelectChange = (name: string, value: string) => {
		setFormData({
			...formData,
			[name]: value,
		})
	}

	const generateWhatsAppMessage = () => {
		const selectedServices = formData.services
			.map(id => services.find(service => service.id === id)?.title)
			.filter(Boolean)
			.join(', ')

		const selectedBranch = branches.find(
			branch => branch.id === formData.branch
		)

		const message = `
Здравствуйте, NEWTONE!

Хочу узнать стоимость детейлинга:

Имя: ${formData.name}
Филиал: ${
			selectedBranch
				? selectedBranch.label + ' (' + selectedBranch.address + ')'
				: 'Не выбран'
		}
Услуги: ${selectedServices}

Пожалуйста, сообщите мне стоимость. Спасибо!
    `.trim()

		const encodedMessage = encodeURIComponent(message)
		const whatsappNumber = selectedBranch?.whatsapp || '+77785886779'
		window.open(
			`https://wa.me/${whatsappNumber}?text=${encodedMessage}`,
			'_blank'
		)
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
										<Label htmlFor='branch'>Выберите Филиал</Label>
										<Select
											onValueChange={value =>
												handleSelectChange('branch', value)
											}
											value={formData.branch}
										>
											<SelectTrigger className='bg-zinc-800 border-gray-700 rounded-none text-white w-full text-sm'>
												<SelectValue placeholder='Выберите филиал' />
											</SelectTrigger>
											<SelectContent className='bg-zinc-800 border-gray-700 w-full'>
												{branches.map(branch => (
													<SelectItem
														key={branch.id}
														value={branch.id}
														className='text-white text-sm'
													>
														{branch.label} - {branch.address}
													</SelectItem>
												))}
											</SelectContent>
										</Select>
									</div>

									<div className='space-y-3'>
										<Label className='text-base font-medium'>Услуги</Label>
										<div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-zinc-800/50 rounded-none border border-gray-700'>
											{services.map(service => (
												<div
													key={service.id}
													className='flex items-start space-x-3 p-2 hover:bg-zinc-700/50 transition-colors rounded-none'
												>
													<Checkbox
														id={service.id}
														checked={formData.services.includes(service.id)}
														onCheckedChange={checked =>
															handleServiceChange(
																service.id,
																checked as boolean
															)
														}
														className='mt-1 border-gray-600 data-[state=checked]:bg-green-600 data-[state=checked]:border-green-600'
													/>
													<Label
														htmlFor={service.id}
														className='text-sm font-normal leading-tight cursor-pointer hover:text-green-400 transition-colors'
													>
														{service.title}
													</Label>
												</div>
											))}
										</div>
									</div>

									{formData.services.length > 0 && (
										<div className='p-4 bg-zinc-800/50 rounded-none border border-gray-700 mb-4'>
											<div className='text-center'>
												{(() => {
													const { total, hasPriceInquiry } = calculateTotal()
													return (
														<>
															{total > 0 && (
																<p className='text-lg font-semibold text-green-400'>
																	Итого: от {total.toLocaleString()} ₸
																</p>
															)}
															{hasPriceInquiry && (
																<p className='text-sm text-gray-400 mt-1'>
																	* Некоторые услуги требуют уточнения цены
																</p>
															)}
														</>
													)
												})()}
											</div>
										</div>
									)}

									<Button
										type='button'
										className='w-full rounded-none bg-green-800 hover:bg-green-700 text-white uppercase tracking-wider'
										onClick={generateWhatsAppMessage}
									>
										Получить Расчет в WhatsApp
									</Button>
								</form>
							</div>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	)
}
