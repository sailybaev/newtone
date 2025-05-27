"use client"

import { motion } from "framer-motion"
import { MapPin, Phone, Instagram, MessageCircle } from "lucide-react"
import Link from "next/link"

const branches = [
  {
    name: "На левом берегу",
    address: "Астана, Улица Алихан Бокейхан, 18/1а",
    phone: "+7 (778) 588-67-79",
    mapUrl: "https://2gis.kz/astana/geo/70000001023999833",
    instagramUrl: "https://www.instagram.com/reel/DJoOYXtM0Ti/?igsh=OXl4dTNvZzN0c2Vr",
    whatsappUrl: "https://wa.me/77775886779"
  },
  {
    name: "На правом берегу",
    address: "Астана, Улица Каныш Сатпаев, 16/3",
    phone: "+7 (771) 222‒22‒67",
    mapUrl: "https://2gis.kz/astana/geo/70000001089909420",
    instagramUrl: "https://www.instagram.com/reel/DJoOYXtM0Ti/?igsh=OXl4dTNvZzN0c2Vr",
    whatsappUrl: "https://wa.me/77712222267"
  }
]

export function Branches() {
  return (
    <section className="py-20 bg-black text-white">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-12 text-center uppercase tracking-wider"
        >
          Наши Филиалы
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          {branches.map((branch, index) => (
            <motion.div
              key={branch.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-zinc-900 p-8 border border-zinc-800"
            >
              <h3 className="text-2xl font-bold mb-4">{branch.name}</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 mt-1 text-green-500" />
                  <div>
                    <p className="text-gray-300">{branch.address}</p>
                    <Link
                      href={branch.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-500 hover:text-green-400 text-sm mt-1 inline-block"
                    >
                      Открыть на карте
                    </Link>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-green-500" />
                  <a href={`tel:${branch.phone}`} className="text-gray-300 hover:text-white">
                    {branch.phone}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Instagram className="w-5 h-5 text-green-500" />
                  <Link
                    href={branch.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white"
                  >
                    Instagram
                  </Link>
                </div>
                <div className="flex items-center gap-3">
                  <MessageCircle className="w-5 h-5 text-green-500" />
                  <Link
                    href={branch.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white"
                  >
                    WhatsApp
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 