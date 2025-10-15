"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Instagram, Facebook, Linkedin } from "lucide-react"

const team = [
  {
    name: "Адам Адамов",
    position: "Основатель и Главный Детейлер",
    image: "/placeholder.svg?height=400&width=400",
    social: {
      instagram: "#",
      facebook: "#",
      linkedin: "#",
    },
  },
  {
    name: "Адам Адамов",
    position: "Специалист по Керамике",
    image: "/placeholder.svg?height=400&width=400",
    social: {
      instagram: "#",

    },
  },
  {
    name: "Адам Адамов",
    position: "Эксперт по Восстановлению Салонов",
    image: "/placeholder.svg?height=400&width=400",
    social: {
      instagram: "#",

    },
  },
  {
    name: "Адам Адамов",
    position: "Менеджер по Работе с Клиентами",
    image: "/placeholder.svg?height=400&width=400",
    social: {
      instagram: "#",
    },
  },
]

export function Team() {
  return (
    <section className="py-16 md:py-24 bg-zinc-900">
      <div className="container">
        <h2 className="text-3xl font-bold tracking-tight mb-12 text-center uppercase">Наша Команда</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative overflow-hidden mb-4 aspect-square border border-gray-800">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform group-hover:scale-105 duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                  <div className="flex gap-4">
                    <a
                      href={member.social.instagram}
                      className="text-white hover:text-green-600 transition-colors"
                      aria-label={`${member.name}'s Instagram`}
                    >
                      <Instagram className="h-5 w-5" />
                    </a>
                  
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-semibold uppercase">{member.name}</h3>
              <p className="text-sm text-gray-400">{member.position}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
