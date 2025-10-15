import { Award, Clock, Sparkles, ThumbsUp, Wrench } from "lucide-react"

export interface Reason {
  icon: JSX.Element;
  title: string;
  description: string;
}

export const reasons: Reason[] = [
  {
    icon: <Sparkles className="h-10 w-10 text-green-600" />,
    title: "Премиальное Качество",
    description: "Мы используем только продукцию высшего качества и передовые технологии для исключительных результатов.",
  },
  {
    icon: <Clock className="h-10 w-10 text-green-600" />,
    title: "Эффективность",
    description: "Мы ценим ваше время и обеспечиваем быстрый сервис без ущерба для качества.",
  },
  {
    icon: <Award className="h-10 w-10 text-green-600" />,
    title: "Опытная Команда",
    description: "Наши сертифицированные специалисты имеют многолетний опыт в премиальном детейлинге.",
  },
  {
    icon: <ThumbsUp className="h-10 w-10 text-green-600" />,
    title: "Гарантия Удовлетворения",
    description: "Мы не будем довольны, пока вы полностью не будете удовлетворены нашим сервисом.",
  },
  {
    icon: <Wrench className="h-10 w-10 text-green-600" />,
    title: "Современное Оборудование",
    description: "Мы инвестируем в новейшие технологии для достижения превосходных результатов.",
  }
]; 