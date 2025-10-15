"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Phone, Mail, MapPin, Instagram, Facebook, Twitter, X, Menu } from "lucide-react"
import { AnimatePresence } from "framer-motion"

import { Advantages } from "@/components/advantages"
import { BeforeAfterSlider } from "@/components/before-after-slider"
import { Branches } from "@/components/branches"
import { ContactForm } from "@/components/contact-form"
import { Faq } from "@/components/faq"
import { Gallery } from "@/components/gallery"
import { Hero } from "@/components/hero"
import { LocationMap } from "@/components/location-map"
import { Partners } from "@/components/partners"
import { ProcessSteps } from "@/components/process-steps"
import { Reviews } from "@/components/reviews"
import { Team } from "@/components/team"
import { WhyChooseUs } from "@/components/why-choose-us"
import { CalculateForm } from "@/components/calculate-form"
import { MobileMenu } from "@/components/mobile-menu"
import { useIsMobile } from "@/hooks/use-mobile"
import { ServiceCards } from "@/components/service-cards"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ServiceCardsGrid } from "@/components/service-cards-grid"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const isMobile = useIsMobile()

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  if (!isMobile) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-black text-white">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Только для мобильных устройств</h1>
          <p className="text-gray-400">Этот сайт доступен только на мобильных устройствах.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <Header/>

      <AnimatePresence>
        {mobileMenuOpen && <MobileMenu onClose={toggleMobileMenu} />}
      </AnimatePresence>

      <main className="flex-1">
        <Hero />
        <Advantages />
        <ServiceCardsGrid/>
        <CalculateForm />
        <WhyChooseUs />
        <Branches />
        <section id="about" className="py-16 md:py-24 bg-zinc-900" itemScope itemType="https://schema.org/AutoWash">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tight mb-8 text-center uppercase">О Нас</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div itemProp="description">
                <p className="text-gray-400 mb-4">
                  NEWTONE - это премиальный центр детейлинга, предоставляющий исключительный сервис и результаты. Имея
                  многолетний опыт и страсть к совершенству, наша команда профессионалов использует только
                  высококачественные продукты и передовые технологии для восстановления и улучшения внешнего вида вашего
                  автомобиля.
                </p>
                <p className="text-gray-400">
                  Мы гордимся нашим вниманием к деталям и стремлением к удовлетворению клиентов. Независимо от того,
                  ищете ли вы базовую мойку или полный пакет детейлинга, у нас есть опыт, чтобы превзойти ваши ожидания
                  и сделать ваш автомобиль безупречным.
                </p>
              </div>
              <div className="relative h-[300px] rounded-none overflow-hidden border border-gray-800">
                <Image src="/images/about.jpeg" alt="NEWTONE - Премиальный Детейлинг Центр в Астане" fill className="object-cover" itemProp="image" />
              </div>
            </div>
          </div>
        </section>
        <Faq />
        <ProcessSteps />
        <Gallery />
        <Reviews />
        <section id="contact" className="py-16 md:py-24 bg-zinc-900" itemScope itemType="https://schema.org/LocalBusiness">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tight mb-8 text-center uppercase">Контакты</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Связаться с Нами</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3" itemProp="telephone">
                    <Phone className="h-5 w-5 text-green-600" />
                    <span>+7 (778) 588-67-79</span>
                  </div>
                  <div className="flex items-center gap-3" itemProp="telephone">
                    <Phone className="h-5 w-5 text-green-600" />
                    <span>+7 (771) 222‒22‒67</span>
                  </div>
                </div>
                <div className="mt-6">
                  <h4 className="text-lg font-medium mb-3">Мы в Соцсетях</h4>
                  <div className="flex gap-4">
                    <Link href="#" className="text-gray-400 hover:text-green-600 transition-colors" itemProp="sameAs">
                      <Instagram className="h-6 w-6" />
                      <span className="sr-only">Instagram</span>
                    </Link>
                    <Link href="https://www.tiktok.com/@new.tone.ast" className="text-gray-400 hover:text-green-600 transition-colors" itemProp="sameAs">
                      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                      </svg>
                      <span className="sr-only">TikTok</span>
                    </Link>
                  </div>
                </div>
              </div>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
