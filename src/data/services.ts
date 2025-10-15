export interface Service {
  id: string;
  name: string;
  category: 'detailing' | 'repair' | 'installation' | 'protection';
}

export const services: Service[] = [
  {
    id: 'chemical-cleaning',
    name: 'Химчистка',
    category: 'detailing'
  },
  {
    id: 'polishing',
    name: 'Полировка',
    category: 'detailing'
  },
  {
    id: 'leather-restoration',
    name: 'Реставрация кожи',
    category: 'detailing'
  },
  {
    id: 'interior-upholstery',
    name: 'Перетяжка интерьера авто',
    category: 'detailing'
  },
  {
    id: 'ceiling-upholstery',
    name: 'Перетяжка потолка',
    category: 'detailing'
  },
  {
    id: 'carpet-upholstery',
    name: 'Перетяжка ковролана',
    category: 'detailing'
  },
  {
    id: 'steering-wheel-upholstery',
    name: 'Перетяжка руля',
    category: 'detailing'
  },
  {
    id: 'vinyl-wrapping',
    name: 'Оклейка пленкой',
    category: 'protection'
  },
  {
    id: 'windshield-protection',
    name: 'Защита лобового',
    category: 'protection'
  },
  {
    id: 'window-tinting',
    name: 'Тонировка',
    category: 'protection'
  },
  {
    id: 'sound-insulation',
    name: 'Шумоизоляция',
    category: 'installation'
  },
  {
    id: 'interior-plastic-protection',
    name: 'Защита пластика салона',
    category: 'protection'
  },
  {
    id: 'hydro-dipping',
    name: 'Аквапринт',
    category: 'detailing'
  },
  {
    id: 'pdr',
    name: 'Выправление вмятин (PDR)',
    category: 'repair'
  },
  {
    id: 'body-repair',
    name: 'Кузовной ремонт',
    category: 'repair'
  },
  {
    id: 'painting',
    name: 'Малярка',
    category: 'repair'
  },
  {
    id: 'car-painting',
    name: 'Покраска авто',
    category: 'repair'
  },
  {
    id: 'alarm-installation',
    name: 'Установка сигнализации (StarLine, Pandora)',
    category: 'installation'
  },
  {
    id: 'lighting-installation',
    name: 'Установка линз, автосвет, доп освещение',
    category: 'installation'
  }
]; 