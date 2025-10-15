"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const branches = [
  { id: "1", label: "Первый филиал", address: "Астана, Улица Алихан Бокейхан, 18/1а", whatsapp: "+77785886779" },
  { id: "2", label: "Второй филиал", address: "Астана, Улица Каныш Сатпаев, 16/3", whatsapp: "+77712222267" },
]

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    branch: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Format the message for WhatsApp
    const selectedBranch = branches.find(branch => branch.id === formData.branch)
    const whatsappMessage = `Новое сообщение от клиента:\n\nИмя: ${formData.name}\nEmail: ${formData.email}\nТелефон: ${formData.phone}\nФилиал: ${selectedBranch?.label || 'Не выбран'}\nАдрес: ${selectedBranch?.address || 'Не выбран'}\n\nСообщение:\n${formData.message}`

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage)
    
    // Use the WhatsApp number from the selected branch, or a default number if no branch is selected
    const whatsappNumber = selectedBranch?.whatsapp || "+77785886779"
    
    // Open WhatsApp with the pre-filled message
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank')

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true)
      setFormData({
        name: "",
        email: "",
        phone: "",
        branch: "",
        message: "",
      })

      // Reset the success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    }, 1000)
  }

  return (
    <div>
      <h3 className="text-xl font-semibold mb-4 uppercase">Отправить Сообщение</h3>

      {isSubmitted ? (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-green-900/20 border border-green-800 p-4 flex items-start gap-3"
        >
          <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
          <div>
            <h4 className="font-medium text-green-500">Сообщение Отправлено!</h4>
            <p className="text-sm text-green-400">Спасибо за обращение. Мы свяжемся с вами в ближайшее время.</p>
          </div>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Ваше Имя</Label>
            <Input
              id="name"
              name="name"
              placeholder="Адам Адамов"
              required
              value={formData.name}
              onChange={handleChange}
              className="bg-zinc-800 border-gray-700 rounded-none"
            />
          </div>


          <div className="space-y-2">
            <Label htmlFor="phone">Телефон</Label>
            <Input
              id="phone"
              name="phone"
              placeholder="+7 (777) 777-77-77"
              value={formData.phone}
              onChange={handleChange}
              className="bg-zinc-800 border-gray-700 rounded-none"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="branch">Выберите Филиал</Label>
            <Select onValueChange={(value) => handleSelectChange("branch", value)} value={formData.branch}>
              <SelectTrigger className="bg-zinc-800 border-gray-700 rounded-none">
                <SelectValue placeholder="Выберите филиал" />
              </SelectTrigger>
              <SelectContent className="bg-zinc-800 border-gray-700 w-[var(--radix-select-trigger-width)] max-w-[300px]">
                {branches.map((branch) => (
                  <SelectItem 
                    key={branch.id} 
                    value={branch.id}
                    className="text-gray-200 hover:bg-zinc-700 hover:text-white focus:bg-zinc-700 focus:text-white cursor-pointer"
                  >
                    <div className="flex flex-col">
                      <span>{branch.label}</span>
                      <span className="text-sm text-gray-400">{branch.address}</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Сообщение</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Чем мы можем помочь?"
              rows={4}
              required
              value={formData.message}
              onChange={handleChange}
              className="bg-zinc-800 border-gray-700 rounded-none min-h-[120px]"
            />
          </div>

          <Button
            type="submit"
            className="w-full rounded-none bg-green-800 hover:bg-green-700 text-white uppercase tracking-wider"
          >
            Отправить Сообщение
          </Button>
        </form>
      )}
    </div>
  )
}
