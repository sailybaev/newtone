"use client"

import { motion } from "framer-motion"
import { Award, Clock, MapPin, Shield, PenToolIcon as Tool } from "lucide-react"

const advantages = [
  {
    icon: <Tool className="h-6 w-6 text-green-600" />,
    title: "Современное Оборудование",
    description: "Передовые инструменты и технологии для превосходных результатов",
  },
  {
    icon: <MapPin className="h-6 w-6 text-green-600" />,
    title: "Три Филиала",
    description: "Удобное расположение для вашего комфорта",
  },
  {
    icon: <Shield className="h-6 w-6 text-green-600" />,
    title: "Гарантия Качества",
    description: "100% удовлетворение или мы исправим недостатки",
  },
  {
    icon: <Award className="h-6 w-6 text-green-600" />,
    title: "Сертифицированные Специалисты",
    description: "Обученные профессионалы с многолетним опытом",
  },
  {
    icon: <Clock className="h-6 w-6 text-green-600" />,
    title: "Эффективный Сервис",
    description: "Быстрое обслуживание без ущерба для качества",
  },
]

export function Advantages() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section className="py-16 md:py-24 bg-zinc-900">
      <div className="container">
        <h2 className="text-3xl font-bold tracking-tight mb-12 text-center uppercase">Наши Преимущества</h2>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
        >
          {advantages.map((advantage, index) => (
            <motion.div key={index} variants={item} className="flex flex-col items-center text-center p-4">
              <div className="mb-4 p-3 bg-black rounded-full border border-gray-800">{advantage.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{advantage.title}</h3>
              <p className="text-sm text-gray-400">{advantage.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
