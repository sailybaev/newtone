"use client"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { services } from "@/config/services"

export function ServiceCardsGrid() {
  return (
    <section id="services" className="py-16 md:py-24 bg-black">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-16 text-center uppercase">Наши Услуги</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map((service) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`relative border border-gray-800 md:col-span-${service.cols}`}
            >
              <Link href={service.link} className="block">
                <div className="relative">
                  <div className="aspect-video overflow-hidden">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="h-full w-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                </div>
                <div className="p-4 md:p-6 flex justify-between items-center">
                  <h3 className="text-lg md:text-xl font-bold">{service.title}</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-base md:text-xl font-medium whitespace-nowrap">{service.price}</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
