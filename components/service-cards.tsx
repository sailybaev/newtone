"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

const services = [
  {
    id: "exterior",
    title: "EXTERIOR DETAILING",
    description: "Complete exterior cleaning, polishing, and protection to restore your car's shine.",
    image: "/placeholder.svg?height=400&width=600",
    price: "FROM $199",
    link: "#",
  },
  {
    id: "interior",
    title: "INTERIOR DETAILING",
    description: "Deep cleaning of all interior surfaces, including seats, carpets, and dashboard.",
    image: "/placeholder.svg?height=400&width=600",
    price: "FROM $149",
    link: "#",
  },
  {
    id: "paint",
    title: "PAINT CORRECTION",
    description: "Remove swirls, scratches, and imperfections to restore your paint's original glory.",
    image: "/placeholder.svg?height=400&width=600",
    price: "FROM $299",
    link: "#",
  },
  {
    id: "ceramic",
    title: "CERAMIC COATING",
    description: "Long-lasting protection that enhances gloss and makes cleaning easier.",
    image: "/placeholder.svg?height=400&width=600",
    price: "FROM $599",
    link: "#",
  },
  {
    id: "leather",
    title: "LEATHER RESTORATION",
    description: "Revitalize and protect your vehicle's leather surfaces with our specialized treatment.",
    image: "/placeholder.svg?height=400&width=600",
    price: "PRICE UPON REQUEST",
    link: "#",
  },
  {
    id: "protection",
    title: "PAINT PROTECTION FILM",
    description: "Invisible shield that protects your paint from chips, scratches, and environmental damage.",
    image: "/placeholder.svg?height=400&width=600",
    price: "FROM $899",
    link: "#",
  },
]

export function ServiceCards() {
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  return (
    <section id="services" className="py-16 md:py-24 bg-black">
      <div className="container">
        <h2 className="text-3xl font-bold tracking-tight mb-16 text-center uppercase">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="group relative border border-gray-800 bg-black transition-all hover:border-green-800"
              onMouseEnter={() => setHoveredId(service.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <Link href={service.link} className="block">
                <div className="grid grid-cols-1 md:grid-cols-5">
                  <div className="md:col-span-3 relative aspect-[4/3] md:aspect-auto overflow-hidden">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className={`h-full w-full object-cover transition-all duration-500 ${
                        hoveredId === service.id ? "scale-105 grayscale-0" : "grayscale"
                      }`}
                    />
                  </div>
                  <div className="md:col-span-2 p-6 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                      <p className="text-gray-400 text-sm">{service.description}</p>
                    </div>
                    <div className="mt-4 flex justify-between items-center">
                      <span className="text-sm text-gray-500">FROM</span>
                      <span className="text-xl font-medium">{service.price}</span>
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
