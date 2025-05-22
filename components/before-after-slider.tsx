"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

const beforeAfterExamples = [
  {
    id: 1,
    title: "УСЛУГА1",
    before: "/placeholder.svg?height=600&width=800",
    after: "/placeholder.svg?height=600&width=800",
  },
  {
    id: 2,
    title: "УСЛУГА2",
    before: "/placeholder.svg?height=600&width=800",
    after: "/placeholder.svg?height=600&width=800",
  },
  {
    id: 3,
    title: "УСЛУГА3",
    before: "/placeholder.svg?height=600&width=800",
    after: "/placeholder.svg?height=600&width=800",
  },
]

export function BeforeAfterSlider() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const sliderRef = useRef<HTMLDivElement>(null)

  const handleSliderChange = (e: React.MouseEvent | React.TouchEvent) => {
    if (!sliderRef.current) return

    const rect = sliderRef.current.getBoundingClientRect()
    let clientX

    if ("touches" in e) {
      clientX = e.touches[0].clientX
    } else {
      clientX = e.clientX
    }

    const position = ((clientX - rect.left) / rect.width) * 100
    setSliderPosition(Math.max(0, Math.min(100, position)))
  }

  const handleMouseDown = () => {
    setIsDragging(true)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleSliderChange(e)
    }
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    handleSliderChange(e)
  }

  useEffect(() => {
    const handleMouseUpGlobal = () => {
      setIsDragging(false)
    }

    window.addEventListener("mouseup", handleMouseUpGlobal)
    return () => {
      window.removeEventListener("mouseup", handleMouseUpGlobal)
    }
  }, [])

  return (
    <section className="py-16 md:py-24 bg-zinc-900">
      <div className="container">
        <h2 className="text-3xl font-bold tracking-tight mb-12 text-center uppercase">До & После</h2>

        <div className="max-w-4xl mx-auto">
          <div className="mb-6 flex justify-center space-x-4">
            {beforeAfterExamples.map((example, index) => (
              <button
                key={example.id}
                onClick={() => setActiveIndex(index)}
                className={`px-4 py-2 text-sm font-medium transition-colors uppercase tracking-wider ${
                  activeIndex === index ? "bg-green-800 text-white" : "bg-zinc-800 text-gray-300 hover:bg-zinc-700"
                }`}
              >
                {example.title}
              </button>
            ))}
          </div>

          <motion.div
            key={activeIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="relative h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden border border-gray-800"
            ref={sliderRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleMouseUp}
          >
            {/* After Image (Full) */}
            <div className="absolute inset-0">
              <Image
                src={beforeAfterExamples[activeIndex].after || "/placeholder.svg"}
                alt="After"
                fill
                className="object-cover"
              />
            </div>

            {/* Before Image (Clipped) */}
            <div className="absolute inset-0 overflow-hidden" style={{ width: `${sliderPosition}%` }}>
              <Image
                src={beforeAfterExamples[activeIndex].before || "/placeholder.svg"}
                alt="Before"
                fill
                className="object-cover"
              />
            </div>

            {/* Slider Handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-green-800 rounded-full shadow-lg flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 5L3 10L8 15" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path
                    d="M16 5L21 10L16 15"
                    stroke="#fff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

            {/* Labels */}
            <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 text-sm">ДО</div>
            <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 text-sm">ПОСЛЕ</div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
