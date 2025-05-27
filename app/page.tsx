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
import { ServiceCardsGrid } from "@/components/service-cards-grid"
import { Team } from "@/components/team"
import { WhyChooseUs } from "@/components/why-choose-us"
import { CalculateForm } from "@/components/calculate-form"
import { MobileMenu } from "@/components/mobile-menu"
import { useIsMobile } from "@/hooks/use-mobile"
import { ServiceCardsAlt } from "@/components/service-cards-alt"
import { ServiceCards } from "@/components/service-cards"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

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
        <ServiceCardsGrid />
        <CalculateForm />
        <BeforeAfterSlider />
        <WhyChooseUs />
        <Branches />
        <section id="about" className="py-16 md:py-24 bg-zinc-900">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tight mb-8 text-center uppercase">О Нас</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
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
                <Image src="/placeholder.svg?height=600&width=800" alt="О NEWTONE" fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>
        <Faq />
        <ProcessSteps />
        <Gallery />
        {/* <Partners /> */}
        <Reviews />
        {/* <Team /> */}
        {/* <LocationMap /> */}
        <section id="contact" className="py-16 md:py-24 bg-zinc-900">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tight mb-8 text-center uppercase">Контакты</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Связаться с Нами</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-green-600" />
                    <span>+7 (778) 588-67-79</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-green-600" />
                    <span>+7 (771) 222‒22‒67</span>
                  </div>
                  {/* <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-green-600" />
                    <span>Астана, ул. Примерная, 123</span>
                  </div> */}
                </div>
                <div className="mt-6">
                  <h4 className="text-lg font-medium mb-3">Мы в Соцсетях</h4>
                  <div className="flex gap-4">
                    <Link href="#" className="text-gray-400 hover:text-green-600 transition-colors">
                      <Instagram className="h-6 w-6" />
                      <span className="sr-only">Instagram</span>
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
