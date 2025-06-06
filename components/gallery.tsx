"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

const galleryImages = [
  "/images/gallery/WhatsApp Image 2025-05-29 at 12.21.43.jpeg",
  "/images/gallery/WhatsApp Image 2025-05-29 at 12.21.43 (1).jpeg",
  "/images/gallery/WhatsApp Image 2025-05-29 at 12.21.45.jpeg",
  "/images/gallery/DSCF0571.jpg",
  "/images/gallery/DSCF0600.jpg",
  "/images/gallery/DSCF0610.jpg",
  "/images/gallery/DSCF0744.jpg",
  "/images/gallery/DSCF0843.jpg",
  "/images/gallery/DSCF1037.jpg",
  "/images/gallery/DSCF1181.jpg",
]

export function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length)
  }

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  if (galleryImages.length === 0) {
    return (
      <section id="gallery" className="py-16 md:py-24 bg-black">
        <div className="container">
          <h2 className="text-3xl font-bold tracking-tight mb-16 text-center uppercase">Галерея</h2>
          <div className="flex justify-center items-center h-[400px]">
            <div className="text-white">No images found</div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="gallery" className="py-16 md:py-24 bg-black">
      <div className="container">
        <h2 className="text-3xl font-bold tracking-tight mb-16 text-center uppercase">Галерея</h2>
        <div className="relative" ref={containerRef}>
          <div className="overflow-hidden">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto"
            >
              <div className="relative aspect-[16/9] overflow-hidden rounded-none border border-gray-800">
                <Image
                  src={galleryImages[currentIndex]}
                  alt={`Gallery image ${currentIndex + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
          <button
            onClick={prevImage}
            className="absolute left-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/80 transition-colors"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/80 transition-colors"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  )
}
