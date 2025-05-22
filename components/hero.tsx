"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export function Hero() {
  const scrollToCalculate = () => {
    const element = document.getElementById('calculate')
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative h-[90vh] min-h-[600px] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Премиальный детейлинг автомобилей"
          fill
          priority
          className="object-cover brightness-50"
        />
      </div>
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-10 uppercase tracking-wider leading-tight">
            Детейлинг Студия <br />
            <span className="text-5xl md:text-7xl">NEWTONE</span>
          </h1>
          <p className="text-lg md:text-xl mb-10 text-gray-300 max-w-xl">
            Профессиональные услуги детейлинга, которые преображают ваш автомобиль с тщательным вниманием к деталям и
            премиальными продуктами.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToCalculate}
              className="inline-flex h-12 items-center justify-center rounded-none border border-green-800 bg-transparent px-8 py-3 text-sm font-medium text-white shadow transition-colors hover:bg-green-800 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring uppercase tracking-wider"
            >
              Рассчитать Стоимость
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToContact}
              className="inline-flex h-12 items-center justify-center rounded-none bg-black border border-white px-8 py-3 text-sm font-medium text-white shadow transition-colors hover:bg-white hover:text-black focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring uppercase tracking-wider"
            >
              Контакты
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
