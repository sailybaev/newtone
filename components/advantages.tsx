"use client"

import { motion } from "framer-motion"
import { advantages } from "@/config/advantages"

export function Advantages() {
  return (
    <section className="py-16 md:py-24 bg-black">
      <div className="container">
        <h2 className="text-3xl font-bold tracking-tight mb-16 text-center uppercase">Наши Преимущества</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-zinc-900 p-6 rounded-none border border-gray-800"
            >
              <div className="mb-4">{advantage.icon}</div>
              <h3 className="text-xl font-bold mb-2">{advantage.title}</h3>
              <p className="text-gray-400">{advantage.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
