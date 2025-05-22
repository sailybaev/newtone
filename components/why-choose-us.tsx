"use client"

import { motion } from "framer-motion"
import { Award, Clock, Sparkles, ThumbsUp, Wrench } from "lucide-react"

const reasons = [
  {
    icon: <Sparkles className="h-10 w-10 text-green-600" />,
    title: "Премиальное Качество",
    description: "Мы используем только продукцию высшего качества и передовые технологии для исключительных результатов.",
  },
  {
    icon: <Clock className="h-10 w-10 text-green-600" />,
    title: "Эффективность",
    description: "Мы ценим ваше время и обеспечиваем быстрый сервис без ущерба для качества.",
  },
  {
    icon: <Award className="h-10 w-10 text-green-600" />,
    title: "Опытная Команда",
    description: "Наши сертифицированные специалисты имеют многолетний опыт в премиальном детейлинге.",
  },
  {
    icon: <ThumbsUp className="h-10 w-10 text-green-600" />,
    title: "Гарантия Удовлетворения",
    description: "Мы не будем довольны, пока вы полностью не будете удовлетворены нашим сервисом.",
  },
  {
    icon: <Wrench className="h-10 w-10 text-green-600" />,
    title: "Современное Оборудование",
    description: "Мы инвестируем в новейшие технологии для достижения превосходных результатов.",
  },
]

export function WhyChooseUs() {
  return (
    <section id="why-us" className="py-16 md:py-24 bg-black">
      <div className="container">
        <h2 className="text-3xl font-bold tracking-tight mb-12 text-center uppercase">Почему Выбирают Нас</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-zinc-900 p-6 border border-gray-800 hover:border-green-800 transition-colors"
            >
              <div className="mb-4">{reason.icon}</div>
              <h3 className="text-xl font-bold mb-2 uppercase">{reason.title}</h3>
              <p className="text-gray-400">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
