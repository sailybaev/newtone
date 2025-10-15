import React from "react"
import { Award, Clock, MapPin, Shield, PenToolIcon as Tool } from "lucide-react"

export interface Advantage {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const advantages: Advantage[] = [
  {
    icon: <Tool className="h-6 w-6 text-green-600" />,
    title: "Современное Оборудование",
    description: "Передовые инструменты и технологии для превосходных результатов",
  },
  {
    icon: <MapPin className="h-6 w-6 text-green-600" />,
    title: "2 Филиала",
    description: "Удобное расположение для вашего комфорта",
  },
  {
    icon: <Shield className="h-6 w-6 text-green-600" />,
    title: "Гарантия Качества",
    description: "100% удовлетворение или мы исправим недостатки",
  },
  {
    icon: <Award className="h-6 w-6 text-green-600" />,
    title: "Сертифицированные Специалисты",
    description: "Обученные профессионалы с многолетним опытом",
  },
  {
    icon: <Clock className="h-6 w-6 text-green-600" />,
    title: "Эффективный Сервис",
    description: "Быстрое обслуживание без ущерба для качества",
  }
]; 