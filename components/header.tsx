'use client'

import { AnimatePresence } from 'framer-motion'
import { Menu, Phone, X } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import { MobileMenu } from '@/components/mobile-menu'
import { services } from '@/config/services'

export function Header() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
	const [isScrolled, setIsScrolled] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 20)
		}

		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	const toggleMobileMenu = () => {
		setMobileMenuOpen(!mobileMenuOpen)
	}

	const menuItems = [
		{ href: '#services', label: 'Услуги' },
		{ href: '#why-us', label: 'Почему Мы' },
		{ href: '#about', label: 'О Нас' },
		{ href: '#gallery', label: 'Галерея' },
		{ href: '#contact', label: 'Контакты' },
	]

	return (
		<>
			<header
				className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
					isScrolled
						? "bg-black/90 py-4 before:absolute before:inset-0 before:bg-[url('/carbon.jpg')] before:opacity-60 before:bg-cover before:bg-center before:bg-no-repeat before:-z-10"
						: 'bg-transparent py-6'
				}`}
			>
				{/* <div
          className={`absolute inset-0 transition-opacity duration-300 ${
            isScrolled ? "opacity-20" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url('/carbon.jpg')`,
            backgroundSize: "60%",
            backgroundRepeat: "repeat",
            backgroundPosition: "center",
            zIndex: -1
          }}
        ></div> */}
				<div className='container'>
					<div className='flex items-center justify-between'>
						<Link href='/' className='flex items-center gap-2'>
							<span className='text-xl font-bold tracking-wider text-white'>
								NEW TONE
							</span>
						</Link>

						{/* Desktop Navigation */}
						<nav className='hidden md:flex items-center gap-8'>
							{/* Services dropdown */}
							<div className='relative group'>
								<button className='text-gray-300 hover:text-white transition-colors duration-200 font-medium flex items-center gap-2'>
									Услуги
									<svg
										className='h-3 w-3 text-gray-300'
										viewBox='0 0 20 20'
										fill='none'
										stroke='currentColor'
									>
										<path
											d='M6 8l4 4 4-4'
											strokeWidth='1.5'
											strokeLinecap='round'
											strokeLinejoin='round'
										/>
									</svg>
								</button>
								<div className='absolute left-0 mt-2 w-64 bg-zinc-900 border border-gray-800 rounded shadow-lg opacity-0 group-hover:opacity-100 transform -translate-y-1 group-hover:translate-y-0 transition-all pointer-events-none group-hover:pointer-events-auto z-50'>
									<div className='py-2'>
										{services.map(s => {
											const title = (s as any).title || (s as any).name || s.id
											const href = (s as any).link || `/${s.id}`
											return (
												<Link
													key={s.id}
													href={href}
													className='block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-white'
												>
													{title}
												</Link>
											)
										})}
										<Link
											href='#services'
											className='block px-4 py-2 text-sm text-gray-400 hover:bg-gray-800 hover:text-white border-t border-gray-800'
										>
											Все услуги
										</Link>
									</div>
								</div>
							</div>

							{/* Other nav items */}
							{menuItems
								.filter(i => i.href !== '#services')
								.map(item => (
									<Link
										key={item.href}
										href={item.href}
										className='text-gray-300 hover:text-white transition-colors duration-200 font-medium'
									>
										{item.label}
									</Link>
								))}
						</nav>

						{/* Contact Button */}
						<div className='hidden md:flex items-center gap-6'>
							<a
								href='tel:+77712222267'
								className='flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-200'
							>
								<Phone className='h-5 w-5' />
								<span>+7 (771) 222-22-67</span>
							</a>
							<button
								onClick={() =>
									window.dispatchEvent(new Event('openCalculateForm'))
								}
								className='inline-flex h-10 items-center justify-center border-2 border-green-800 px-4 py-2 text-sm font-medium text-white shadow-lg transition-all hover:bg-green-800/10 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 uppercase tracking-wider'
							>
								Рассчитать Стоимость
							</button>
						</div>

						{/* Mobile Menu Button */}
						<button
							onClick={toggleMobileMenu}
							className='md:hidden p-2 text-gray-300 hover:text-white transition-colors'
							aria-label='Toggle menu'
						>
							{mobileMenuOpen ? (
								<X className='h-6 w-6' />
							) : (
								<Menu className='h-6 w-6' />
							)}
						</button>
					</div>
				</div>
			</header>

			<AnimatePresence>
				{mobileMenuOpen && <MobileMenu onClose={toggleMobileMenu} />}
			</AnimatePresence>
		</>
	)
}
