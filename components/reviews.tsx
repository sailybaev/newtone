"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

const reviews = [
  {
    id: 1,
    name: "Алекс Джонсон",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 5,
    text: "Абсолютно потрясающий сервис! Моя машина выглядит лучше, чем когда я её только купил. Внимание к деталям невероятное, а керамическое покрытие значительно упростило уход.",
    car: "BMW M3",
  },
  {
    id: 2,
    name: "Сара Уильямс",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 5,
    text: "Я пробовала несколько сервисов детейлинга, но NEWTONE находится на другом уровне. Команда профессиональна, тщательна и действительно заботится о выдающихся результатах.",
    car: "Mercedes-Benz E-Class",
  },
  {
    id: 3,
    name: "Михаил Чен",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 5,
    text: "Пакет химчистки салона стоил каждой копейки. Они удалили пятна, которые я считал постоянными, и оставили машину с приятным запахом. Очень рекомендую!",
    car: "Audi Q5",
  },
  {
    id: 4,
    name: "Эмили Родригес",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 4,
    text: "Отличный опыт от начала до конца. Команда была пунктуальна, профессиональна и отлично поработала с моей машиной. Единственная причина для 4 звезд - пришлось перенести запись один раз.",
    car: "Tesla Model 3",
  },
  {
    id: 5,
    name: "Давид Томпсон",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 5,
    text: "Услуга полировки кузова вернула к жизни мою 10-летнюю машину. Она выглядит как новая из салона! Я поражен тем, чего они смогли достичь.",
    car: "Porsche 911",
  },
]

export function Reviews() {
  const [activeIndex, setActiveIndex] = useState(0)
  const scrollRef = useRef<HTMLDivElement>(null)

  const nextReview = () => {
    setActiveIndex((prevIndex) => (prevIndex === reviews.length - 1 ? 0 : prevIndex + 1))
  }

  const prevReview = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? reviews.length - 1 : prevIndex - 1))
  }

  const goToReview = (index: number) => {
    setActiveIndex(index)
  }

  return (
    <section className="py-16 md:py-24 bg-black">
      <div className="container">
        <h2 className="text-3xl font-bold tracking-tight mb-12 text-center uppercase">What Our Clients Say</h2>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 z-10">
            <button
              onClick={prevReview}
              className="bg-black border border-gray-800 rounded-none p-2 shadow-md hover:border-green-800 transition-colors"
              aria-label="Previous review"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
          </div>

          <div ref={scrollRef} className="overflow-hidden">
            <motion.div
              animate={{ x: `-${activeIndex * 100}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="flex"
            >
              {reviews.map((review, index) => (
                <div key={review.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-zinc-900 p-6 border border-gray-800">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden border border-gray-800">
                        <Image
                          src={review.avatar || "/placeholder.svg"}
                          alt={review.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold">{review.name}</h3>
                        <p className="text-sm text-gray-400">{review.car}</p>
                      </div>
                      <div className="ml-auto flex">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-600"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-400">{review.text}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
            <button
              onClick={nextReview}
              className="bg-black border border-gray-800 rounded-none p-2 shadow-md hover:border-green-800 transition-colors"
              aria-label="Next review"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          <div className="flex justify-center mt-6 gap-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => goToReview(index)}
                className={`w-2 h-2 transition-colors ${activeIndex === index ? "bg-green-800" : "bg-gray-700"}`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
