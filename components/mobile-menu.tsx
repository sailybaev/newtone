"use client"

import { useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Phone, Mail } from "lucide-react"

interface MobileMenuProps {
  onClose: () => void
}

export function MobileMenu({ onClose }: MobileMenuProps) {
  // Prevent scrolling when menu is open
  useEffect(() => {
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [])

  const handleLinkClick = () => {
    onClose()
  }

  const menuItems = [
    { href: "#services", label: "Услуги" },
    { href: "#why-us", label: "Почему Мы" },
    { href: "#about", label: "О Нас" },
    { href: "#gallery", label: "Галерея" },
    { href: "#contact", label: "Контакты" },
  ]

  const contactInfo = {
    phone: "+7‒778‒588‒67‒79",

  }

  return (
    <motion.div
      initial={{ opacity: 0, x: "100%" }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: "100%" }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed inset-0 z-40 bg-black/95 backdrop-blur-sm flex flex-col"
    >
      <div className="flex-1 overflow-y-auto py-32 px-8">
        <nav className="flex flex-col space-y-10">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={handleLinkClick}
              className="text-2xl font-medium text-white uppercase tracking-wider hover:text-green-500 transition-colors duration-200"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="space-y-6">
            <a 
              href={`tel:${contactInfo.phone}`}
              className="flex items-center gap-4 group"
            >
              <Phone className="h-6 w-6 text-green-500 group-hover:text-green-400 transition-colors duration-200" />
              <span className="text-lg text-white group-hover:text-green-400 transition-colors duration-200">
                {contactInfo.phone}
              </span>
            </a>
            
          </div>

          <div className="mt-12">
            <Link
              href="#calculate"
              onClick={handleLinkClick}
              className="inline-flex h-14 w-full items-center justify-center rounded-md border-2 border-green-500 px-6 py-4 text-base font-medium text-white shadow-lg transition-all hover:bg-green-500 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 uppercase tracking-wider"
            >
              Рассчитать Стоимость
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
