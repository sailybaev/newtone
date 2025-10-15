"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "Сколько времени занимает полный детейлинг?",
    answer:
      "Полный детейлинг обычно занимает от 4 до 8 часов, в зависимости от размера вашего автомобиля и его состояния. Для премиум-пакетов или дополнительных услуг, таких как керамическое покрытие, может потребоваться больше времени. Мы предоставим вам конкретную оценку времени при бронировании.",
  },
  {
    question: "Как часто нужно делать детейлинг автомобиля?",
    answer:
      "Для оптимальных результатов мы рекомендуем делать полный детейлинг каждые 3-4 месяца. Однако это может варьироваться в зависимости от ваших привычек вождения, места парковки и местных погодных условий. Регулярные мойки между полными детейлингами могут помочь продлить эффект от полного сервиса.",
  },
  {
    question: "Нужно ли готовить машину перед визитом?",
    answer:
      "Хотя это и не обязательно, удаление личных вещей из автомобиля перед визитом помогает нам выполнить более тщательную уборку. В остальном специальной подготовки не требуется – мы позаботимся обо всем остальном!",
  },
  {
    question: "В чем разница между воском и керамическим покрытием?",
    answer:
      "Воск обеспечивает защитный слой, который обычно держится 1-3 месяца и дает теплый, глянцевый вид. Керамическое покрытие - это более постоянное решение (1-5 лет), которое связывается с краской на молекулярном уровне, обеспечивая превосходную защиту от загрязнений окружающей среды, УФ-лучей и мелких царапин, а также создает высокоглянцевую поверхность.",
  },
  {
    question: "Предлагаете ли вы мобильный детейлинг?",
    answer:
      "Да, мы предлагаем услуги мобильного детейлинга в радиусе 30 миль от наших локаций. Может взиматься дополнительная плата в зависимости от вашего местоположения. Пожалуйста, свяжитесь с нами для уточнения доступности и цен на мобильные услуги.",
  },
  {
    question: "Безопасны ли ваши продукты для всех типов автомобилей?",
    answer:
      "Мы используем профессиональные продукты с сбалансированным pH, которые безопасны для всех типов автомобилей и лакокрасочных покрытий. Наша команда обучена подбирать подходящие продукты для каждого конкретного автомобиля и состояния.",
  },
]

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-16 md:py-24 bg-black">
      <div className="container">
        <h2 className="text-3xl font-bold tracking-tight mb-12 text-center uppercase">Часто Задаваемые Вопросы</h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border border-gray-800 bg-zinc-900"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="flex items-center justify-between w-full p-4 text-left"
              >
                <span className="font-medium">{faq.question}</span>
                <ChevronDown
                  className={`h-5 w-5 text-gray-400 transition-transform ${
                    openIndex === index ? "transform rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-4 pt-0 text-gray-400 border-t border-gray-800">{faq.answer}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
