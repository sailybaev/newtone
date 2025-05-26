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

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const isMobile = useIsMobile()

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  // if (!isMobile) {
  //   return (
  //     <div className="flex min-h-screen items-center justify-center bg-black text-white">
  //       <div className="text-center">
  //         <h1 className="text-2xl font-bold mb-4">Только для мобильных устройств</h1>
  //         <p className="text-gray-400">Этот сайт доступен только на мобильных устройствах.</p>
  //       </div>
  //     </div>
  //   )
  // }

  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <header className="sticky top-0 z-50 w-full border-b border-gray-800/40 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            {/* <div className="relative h-10 w-10 overflow-hidden rounded-full border border-gray-700">
              <Image src="/logo.png" alt="NEWTONE" width={40} height={40} className="object-cover" />
            </div> */}
            <span className="text-lg font-medium tracking-wider">NEWTONE</span> 
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#services" className="text-gray-400 hover:text-white transition-colors">
              Услуги
            </Link>
            <Link href="#about" className="text-gray-400 hover:text-white transition-colors">
              О Нас
            </Link>
            <Link href="#gallery" className="text-gray-400 hover:text-white transition-colors">
              Галерея
            </Link>
            <Link href="#contact" className="text-gray-400 hover:text-white transition-colors">
              Контакты
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 text-gray-400 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>

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
        <Team />
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
      <footer className="border-t border-gray-800 bg-black text-white relative">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url('/carbon-fiber.png')`,
            backgroundSize: "200px",
            backgroundRepeat: "repeat",
          }}
        ></div>
        <div className="container relative py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                {/* <div className="relative h-10 w-10 overflow-hidden rounded-full border border-gray-700">
                  <Image src="/logo.png" alt="NEWTONE" width={40} height={40} className="object-cover" />
                </div> */}
                <span className="text-lg font-medium tracking-wider">NEWTONE</span>
              </div>
              <p className="text-sm text-gray-400 mt-4">
                Премиальные услуги детейлинга для тех, кто ценит совершенство.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Быстрые Ссылки</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#services" className="text-sm text-gray-400 hover:text-white transition-colors">
                    Услуги
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="text-sm text-gray-400 hover:text-white transition-colors">
                    О Нас
                  </Link>
                </li>
                <li>
                  <Link href="#gallery" className="text-sm text-gray-400 hover:text-white transition-colors">
                    Галерея
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-sm text-gray-400 hover:text-white transition-colors">
                    Контакты
                  </Link>
                </li>
              </ul>
            </div>
            {/* <div>
              <h3 className="text-lg font-semibold mb-4">Услуги</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                    Комплексный Детейлинг
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                    Химчистка Салона
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                    Полировка Кузова
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                    Керамическое Покрытие
                  </Link>
                </li>
              </ul>
            </div> */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Контакты</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-green-600" />
                  <span className="text-sm text-gray-400">+7 (778) 588-67-79</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-green-600" />
                  <span className="text-sm text-gray-400">+7 (771) 222‒22‒67</span>
                </li>
           
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-6 border-t border-gray-800 text-center text-sm text-gray-500">
            <p>© {new Date().getFullYear()} NEWTONE. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
