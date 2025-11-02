export interface Service {
	id: string
	title: string
	description?: string
	image: string
	price: string
	link: string
	cols?: number
	category: 'detailing' | 'repair' | 'installation' | 'protection'
}

export const services: Service[] = [
	{
		id: 'himchistka-salona',
		title: 'ХИМЧИСТКА САЛОНА',
		image: '/images/himsalon.jpeg',
		price: 'от 50 000 ₸',
		link: '/himchistka-salona',
		cols: 1,
		category: 'detailing',
	},
	{
		// done
		id: 'polirovka-kuzova',
		title: 'ПОЛИРОВКА КУЗОВА',
		image: '/images/polirovka.jpeg',
		price: 'от 70 000 ₸',
		link: '/polirovka-kuzova',
		cols: 1,
		category: 'detailing',
	},
	{
		// done
		id: 'restavratsiya-kozhi',
		title: 'РЕСТАВРАЦИЯ КОЖИ',
		image: '/images/leather.jpeg',
		price: 'цена по запросу',
		link: '/restavratsiya-kozhi',
		cols: 1,
		category: 'detailing',
	},
	// { // done
	//   id: "poshiv-chehlov",
	//   title: "ПОШИВ ЧЕХЛОВ",
	//   image: "/images/case.jpeg",
	//   price: "цена по запросу",
	//   link: "/poshiv-chehlov",
	//   cols: 1,
	//   category: "detailing"
	// },
	{
		// done
		id: 'peretyazhka-interera',
		title: 'ПЕРЕТЯЖКА ИНТЕРЬЕРА',
		image: '/images/interior.jpeg',
		price: 'цена по запросу',
		link: '/peretyazhka-interera',
		cols: 1,
		category: 'detailing',
	},
	{
		// done
		id: 'peretyazhka-rulya',
		title: 'ПЕРЕТЯЖКА РУЛЯ',
		image: '/images/rul.jpeg',
		price: 'цена по запросу',
		link: '/peretyazhka-rulya',
		cols: 1,
		category: 'detailing',
	},
	{
		id: 'bronirovanie-kuzova',
		title: 'БРОНИРОВАНИЕ КУЗОВА',
		image: '/images/plenka.jpeg',
		price: 'от 250 000 ₸',
		link: '/bronirovanie-kuzova',
		cols: 1,
		category: 'protection',
	},
	{
		id: 'zashchita-lobovogo-stekla',
		title: 'ЗАЩИТА ЛОБОВОГО СТЕКЛА',
		image: '/images/windshield.png',
		price: 'от 100 000 ₸',
		link: '/zashchita-lobovogo-stekla',
		cols: 1,
		category: 'protection',
	},
	{
		id: 'tonirovka',
		title: 'ТОНИРОВКА',
		image: '/images/tonirovka.jpg',
		price: 'от 35 000 ₸',
		link: '/tonirovka',
		cols: 1,
		category: 'protection',
	},
	{
		// done
		id: 'shumoizolyatsiya',
		title: 'ШУМОИЗОЛЯЦИЯ',
		image: '/images/shum.jpeg',
		price: 'от 350 000 ₸',
		link: '/shumoizolyatsiya',
		cols: 1,
		category: 'installation',
	},
	{
		id: 'zashchita-plastika-salona',
		title: 'ЗАЩИТА ПЛАСТИКА САЛОНА',
		image: '/images/plastik.jpeg',
		price: 'от 70 000 ₸',
		link: '/zashchita-plastika-salona',
		cols: 1,
		category: 'protection',
	},
	{
		id: 'akvaprint',
		title: 'АКВАПРИНТ',
		image: '/images/aquaprint.jpeg',
		price: 'цена по запросу',
		link: '/akvaprint',
		cols: 1,
		category: 'detailing',
	},
	{
		id: 'vypravlenie-vmyatin-pdr',
		title: 'ВЫПРАВЛЕНИЕ ВМЯТИН (PDR)',
		image: '/images/vmyatina.jpg',
		price: 'от 10 000 ₸',
		link: '/vypravlenie-vmyatin-pdr',
		cols: 1,
		category: 'repair',
	},
	{
		id: 'kuzovnoy-remont',
		title: 'КУЗОВНОЙ РЕМОНТ',
		image: '/images/body.jpg',
		price: 'цена по запросу',
		link: '/kuzovnoy-remont',
		cols: 1,
		category: 'repair',
	},
	{
		id: 'pokraska-avto',
		title: 'ПОКРАСКА АВТО',
		image: '/images/pokraska2.jpg',
		price: 'цена по запросу',
		link: '/pokraska-avto',
		cols: 1,
		category: 'repair',
	},
	{
		id: 'ustanovka-signalizatsii',
		title: 'УСТАНОВКА СИГНАЛИЗАЦИИ',
		image: '/images/alarm.jpg',
		price: 'цена по запросу',
		link: '/ustanovka-signalizatsii',
		cols: 1,
		category: 'installation',
	},
	{
		// done
		id: 'ustanovka-linz',
		title: 'УСТАНОВКА ЛИНЗ',
		image: '/images/lens.jpeg',
		price: 'цена по запросу',
		link: '/ustanovka-linz',
		cols: 1,
		category: 'installation',
	},
]
