import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-black text-white relative">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url('/carbon.jpg')`,
          backgroundSize: "40%",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="container relative py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold tracking-wider">NEWTONE</span>
            </div>
            <p className="text-sm text-gray-400">
              Премиальные услуги детейлинга для тех, кто ценит совершенство.
            </p>
            <div className="flex gap-4 pt-2">
              <Link
                href="#"
                className="text-gray-400 hover:text-green-600 transition-colors"
              >
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://www.tiktok.com/@new.tone.ast"
                className="text-gray-400 hover:text-green-600 transition-colors"
              >
                <svg
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
                <span className="sr-only">TikTok</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Быстрые Ссылки</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#services"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Услуги
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  О Нас
                </Link>
              </li>
              <li>
                <Link
                  href="#gallery"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Галерея
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Контакты
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-green-600" />
                <span className="text-sm text-gray-400">
                  +7 (778) 588-67-79
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-green-600" />
                <span className="text-sm text-gray-400">
                  +7 (771) 222‒22‒67
                </span>
              </li>

              <li className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-green-600" />
                <span className="text-sm text-gray-400">Астана, Казахстан</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Режим работы</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex justify-between">
                <span>Понедельник - Пятница</span>
                <span>09:00 - 20:00</span>
              </li>
              <li className="flex justify-between">
                <span>Суббота</span>
                <span>10:00 - 18:00</span>
              </li>
              <li className="flex justify-between">
                <span>Воскресенье</span>
                <span>Выходной</span>
              </li>
            </ul>
            <div className="mt-6">
              <Link
                href="#contact"
                className="inline-block w-full px-4 py-2 bg-green-600 text-white rounded-md text-sm font-medium hover:bg-green-700 transition-colors text-center"
              >
                Записаться онлайн
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} NEWTONE. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}
