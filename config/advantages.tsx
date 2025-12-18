import {
	Award,
	Clock,
	DollarSign,
	MapPin,
	Shield,
	PenToolIcon as Tool,
} from 'lucide-react'
import React from 'react'

export interface Advantage {
	icon: React.ReactNode
	title: string
	description: string
}

export const advantages: Advantage[] = [
	{
		icon: <Tool className='h-6 w-6 text-green-600' />,
		title: 'Современное Оборудование',
		description:
			'Передовые инструменты и технологии для превосходных результатов',
	},
	{
		icon: <MapPin className='h-6 w-6 text-green-600' />,
		title: '2 филиала в Астане',
		description:
			'Выбирайте ближайшую локацию и экономьте время - одинаковые стандарты качества на каждой точке',
	},
	{
		icon: <Shield className='h-6 w-6 text-green-600' />,
		title: 'Гарантия Качества',
		description: '100% удовлетворение или мы исправим недостатки',
	},
	{
		icon: <Award className='h-6 w-6 text-green-600' />,
		title: 'Сертифицированные специалисты',
		description:
			'Каждый мастер - минимум 5 лет в детейлинге. Работаем не «по инструкции», а с пониманием каждого автомобиля',
	},
	{
		icon: <Clock className='h-6 w-6 text-green-600' />,
		title: 'Эффективный сервис',
		description:
			'Озвучиваем срок до начала работ и строго их соблюдаем. Машина не «зависает» в нашем детейлинге',
	},
	{
		icon: <DollarSign className='h-6 w-6 text-green-600' />,
		title: 'Честная цена',
		description:
			'Стоимость фиксируется до начала работ. Никаких скрытых доплат и сюрпризов.',
	},
]
