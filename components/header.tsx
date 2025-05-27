"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Phone, Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

import { MobileMenu } from "@/components/mobile-menu"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const menuItems = [
    { href: "#services", label: "Услуги" },
    { href: "#why-us", label: "Почему Мы" },
    { href: "#about", label: "О Нас" },
    { href: "#gallery", label: "Галерея" },
    { href: "#contact", label: "Контакты" },
  ]

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? "bg-black/95 py-4 before:absolute before:inset-0 before:bg-[url('/carbon.jpg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-100 before:-z-10" 
            : "bg-transparent py-6"
        }`}
      >
        <div
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
        ></div>
        <div className="container">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-xl font-bold tracking-wider text-white">NEWTONE</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-300 hover:text-white transition-colors duration-200 font-medium"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Contact Button */}
            <div className="hidden md:flex items-center gap-6">
              <a
                href="tel:+77775886779"
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-200"
              >
                <Phone className="h-5 w-5" />
                <span>+7 (777) 588-67-79</span>
              </a>
              <Link
                href="#calculate"
                className="inline-flex h-10 items-center justify-center border-2 border-green-800 px-4 py-2 text-sm font-medium text-white shadow-lg transition-all hover:bg-green-800/10 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 uppercase tracking-wider"
              >
                Рассчитать Стоимость
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 text-gray-300 hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
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