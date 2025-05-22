"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"

const partners = [
  { name: "Partner 1", logo: "/placeholder-logo.svg" },
  { name: "Partner 2", logo: "/placeholder-logo.svg" },
  { name: "Partner 3", logo: "/placeholder-logo.svg" },
  { name: "Partner 4", logo: "/placeholder-logo.svg" },
  { name: "Partner 5", logo: "/placeholder-logo.svg" },
  { name: "Partner 6", logo: "/placeholder-logo.svg" },
  { name: "Partner 7", logo: "/placeholder-logo.svg" },
  { name: "Partner 8", logo: "/placeholder-logo.svg" },
]

export function Partners() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const x = useTransform(scrollYProgress, [0, 1], [0, -100])

  return (
    <section className="py-16 md:py-24 bg-zinc-900">
      <div className="container">
        <h2 className="text-3xl font-bold tracking-tight mb-12 text-center uppercase">Our Partners</h2>

        <div ref={containerRef} className="overflow-hidden">
          <motion.div style={{ x: `${x.get()}px` }} className="flex gap-12 py-4">
            {[...partners, ...partners].map((partner, index) => (
              <div key={index} className="flex-shrink-0 w-[160px]">
                <Image
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  width={160}
                  height={80}
                  className="grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
