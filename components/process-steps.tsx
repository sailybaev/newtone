"use client"

import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Консультация",
    description: "Мы оцениваем состояние вашего автомобиля и обсуждаем ваши пожелания для создания индивидуального плана детейлинга.",
  },
  {
    number: "02",
    title: "Подготовка",
    description: "Тщательная мойка и подготовка поверхности для достижения оптимальных результатов.",
  },
  {
    number: "03",
    title: "Детейлинг",
    description: "Профессиональная обработка кузова, салона и всех поверхностей с использованием премиальных материалов.",
  },
  {
    number: "04",
    title: "Защита",
    description: "Нанесение защитных покрытий для сохранения результатов на длительное время.",
  },
  {
    number: "05",
    title: "Контроль Качества",
    description: "Тщательная проверка каждого сантиметра автомобиля для обеспечения безупречного результата.",
  },
  {
    number: "06",
    title: "Передача",
    description: "Демонстрация результатов и консультация по уходу за автомобилем.",
  },
]

export function ProcessSteps() {
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
        <h2 className="text-3xl font-bold tracking-tight mb-12 text-center uppercase">Наш Процесс</h2>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {steps.map((step, index) => (
            <motion.div key={index} variants={item} className="relative p-6 border border-gray-800 bg-black">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-green-900/20 text-green-600 font-bold">
                  {step.number}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 uppercase">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                  <CheckCircle2 className="h-6 w-6 text-green-600" />
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
