"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

const galleryImages = [
  {
    src: "/placeholder.svg?height=600&width=800",
    alt: "Процесс детейлинга",
  },
  {
    src: "/placeholder.svg?height=600&width=800",
    alt: "Химчистка салона",
  },
  {
    src: "/placeholder.svg?height=600&width=800",
    alt: "Полировка кузова",
  },
  {
    src: "/placeholder.svg?height=600&width=800",
    alt: "Нанесение керамического покрытия",
  },
  {
    src: "/placeholder.svg?height=600&width=800",
    alt: "Детейлинг колес",
  },
  {
    src: "/placeholder.svg?height=600&width=800",
    alt: "Мойка моторного отсека",
  },
  {
    src: "/placeholder.svg?height=600&width=800",
    alt: "Обработка кожи",
  },
  {
    src: "/placeholder.svg?height=600&width=800",
    alt: "Финальный осмотр",
  },
]

export function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isViewerOpen, setIsViewerOpen] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  const openImageViewer = (index: number) => {
    setCurrentIndex(index)
    setIsViewerOpen(true)
    document.body.style.overflow = "hidden"
  }

  const closeImageViewer = () => {
    setIsViewerOpen(false)
    document.body.style.overflow = "auto"
  }

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1))
  }

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1))
  }

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { current } = scrollRef
      const scrollAmount = 300

      if (direction === "left") {
        current.scrollBy({ left: -scrollAmount, behavior: "smooth" })
      } else {
        current.scrollBy({ left: scrollAmount, behavior: "smooth" })
      }
    }
  }

  return (
    <section id="gallery" className="py-16 md:py-24 bg-black">
      <div className="container">
        <h2 className="text-3xl font-bold tracking-tight mb-12 text-center uppercase">Our Work</h2>

        <div className="relative">
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-black/80 rounded-none p-2 shadow-md hover:bg-black transition-colors"
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <div
            ref={scrollRef}
            className="flex overflow-x-auto gap-4 pb-6 hide-scrollbar"
            style={{ scrollbarWidth: "none" }}
          >
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex-shrink-0 cursor-pointer"
                onClick={() => openImageViewer(index)}
              >
                <div className="relative w-[280px] h-[200px] overflow-hidden border border-gray-800">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform hover:scale-105 duration-300"
                  />
                </div>
              </motion.div>
            ))}
          </div>

          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-black/80 rounded-none p-2 shadow-md hover:bg-black transition-colors"
            aria-label="Scroll right"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        {isViewerOpen && (
          <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center">
            <button
              onClick={closeImageViewer}
              className="absolute top-4 right-4 text-white p-2 hover:bg-white/10 transition-colors"
              aria-label="Close viewer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white p-2 hover:bg-white/10 transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-8 w-8" />
            </button>

            <div className="relative w-full max-w-4xl h-[80vh] max-h-[80vh]">
              <Image
                src={galleryImages[currentIndex].src || "/placeholder.svg"}
                alt={galleryImages[currentIndex].alt}
                fill
                className="object-contain"
              />
            </div>

            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white p-2 hover:bg-white/10 transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="h-8 w-8" />
            </button>

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm">
              {currentIndex + 1} / {galleryImages.length}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
