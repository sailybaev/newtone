export interface Service {
  id: string;
  title: string;
  description?: string;
  image: string;
  price: string;
  link: string;
  cols?: number;
  category: 'detailing' | 'repair' | 'installation' | 'protection';
}

export const services: Service[] = [
  {
    id: "chemical-cleaning",
    title: "ХИМЧИСТКА САЛОНА",
    image: "/placeholder.svg?height=400&width=600",
    price: "от 50 000 ₸",
    link: "#",
    cols: 2,
    category: "detailing"
  },
  {
    id: "polishing",
    title: "ПОЛИРОВКА КУЗОВА",
    image: "/placeholder.svg?height=400&width=600",
    price: "от 70 000 ₸",
    link: "#",
    cols: 1,
    category: "detailing"
  },
  {
    id: "leather-restoration",
    title: "РЕСТАВРАЦИЯ КОЖИ",
    image: "/placeholder.svg?height=400&width=600",
    price: "цена по запросу",
    link: "#",
    cols: 1,
    category: "detailing"
  },
  {
    id: "interior-upholstery",
    title: "ПЕРЕТЯЖКА ИНТЕРЬЕРА",
    image: "/placeholder.svg?height=400&width=600",
    price: "цена по запросу",
    link: "#",
    cols: 1,
    category: "detailing"
  },
  {
    id: "steering-wheel",
    title: "ПЕРЕТЯЖКА РУЛЯ",
    image: "/placeholder.svg?height=400&width=600",
    price: "цена по запросу",
    link: "#",
    cols: 1,
    category: "detailing"
  },
  {
    id: "wrapping",
    title: "ОКЛЕЙКА ПЛЕНКОЙ",
    image: "/placeholder.svg?height=400&width=600",
    price: "от 250 000 ₸",
    link: "#",
    cols: 2,
    category: "protection"
  },
  {
    id: "windshield-protection",
    title: "ЗАЩИТА ЛОБОВОГО СТЕКЛА",
    image: "/placeholder.svg?height=400&width=600",
    price: "от 100 000 ₸",
    link: "#",
    cols: 1,
    category: "protection"
  },
  {
    id: "tinting",
    title: "ТОНИРОВКА",
    image: "/placeholder.svg?height=400&width=600",
    price: "от 35 000 ₸",
    link: "#",
    cols: 1,
    category: "protection"
  },
  {
    id: "sound-insulation",
    title: "ШУМОИЗОЛЯЦИЯ",
    image: "/placeholder.svg?height=400&width=600",
    price: "от 350 000 ₸",
    link: "#",
    cols: 1,
    category: "installation"
  },
  {
    id: "interior-protection",
    title: "ЗАЩИТА ПЛАСТИКА САЛОНА",
    image: "/placeholder.svg?height=400&width=600",
    price: "от 70 000 ₸",
    link: "#",
    cols: 1,
    category: "protection"
  },
  {
    id: "hydro-dipping",
    title: "АКВАПРИНТ",
    image: "/placeholder.svg?height=400&width=600",
    price: "цена по запросу",
    link: "#",
    cols: 1,
    category: "detailing"
  },
  {
    id: "pdr",
    title: "ВЫПРАВЛЕНИЕ ВМЯТИН (PDR)",
    image: "/placeholder.svg?height=400&width=600",
    price: "от 10 000 ₸",
    link: "#",
    cols: 2,
    category: "repair"
  },
  {
    id: "body-repair",
    title: "КУЗОВНОЙ РЕМОНТ",
    image: "/placeholder.svg?height=400&width=600",
    price: "цена по запросу",
    link: "#",
    cols: 1,
    category: "repair"
  },
  {
    id: "painting",
    title: "ПОКРАСКА АВТО",
    image: "/placeholder.svg?height=400&width=600",
    price: "цена по запросу",
    link: "#",
    cols: 1,
    category: "repair"
  },
  {
    id: "alarm-installation",
    title: "УСТАНОВКА СИГНАЛИЗАЦИИ",
    image: "/placeholder.svg?height=400&width=600",
    price: "цена по запросу",
    link: "#",
    cols: 1,
    category: "installation"
  },
  {
    id: "lighting",
    title: "УСТАНОВКА ЛИНЗ",
    image: "/placeholder.svg?height=400&width=600",
    price: "цена по запросу",
    link: "#",
    cols: 1,
    category: "installation"
  }
]; 