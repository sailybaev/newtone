"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

const services = [
  {
    id: "exterior",
    title: "EXTERIOR DETAILING",
    image: "/placeholder.svg?height=400&width=600",
    price: "FROM $199",
    link: "#",
  },
  {
    id: "interior",
    title: "INTERIOR DETAILING",
    image: "/placeholder.svg?height=400&width=600",
    price: "FROM $149",
    link: "#",
  },
  {
    id: "paint",
    title: "PAINT CORRECTION",
    image: "/placeholder.svg?height=400&width=600",
    price: "FROM $299",
    link: "#",
  },
  {
    id: "ceramic",
    title: "CERAMIC COATING",
    image: "/placeholder.svg?height=400&width=600",
    price: "FROM $599",
    link: "#",
  },
  {
    id: "leather",
    title: "LEATHER RESTORATION",
    image: "/placeholder.svg?height=400&width=600",
    price: "PRICE UPON REQUEST",
    link: "#",
  },
  {
    id: "protection",
    title: "PAINT PROTECTION FILM",
    image: "/placeholder.svg?height=400&width=600",
    price: "FROM $899",
    link: "#",
  },
]

export function ServiceCardsAlt() {
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  return (
    <section id="services" className="py-16 md:py-24 bg-black">
      <div className="container">
        <h2 className="text-3xl font-bold tracking-tight mb-16 text-center uppercase">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
          {services.map((service) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="group relative border border-gray-800 bg-black"
              onMouseEnter={() => setHoveredId(service.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <Link href={service.link} className="block">
                <div className="relative">
                  <div className="aspect-[3/2] overflow-hidden">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="h-full w-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent">
                    <div className="flex justify-between items-end">
                      <h3 className="text-xl font-bold">{service.title}</h3>
                      <div className="flex flex-col items-end">
                        <span className="text-xs text-gray-400">FROM</span>
                        <span className="text-lg font-medium">{service.price}</span>
                      </div>
                    </div>
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
