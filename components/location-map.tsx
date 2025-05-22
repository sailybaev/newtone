"use client"

import { useState } from "react"
import { MapPin } from "lucide-react"

const locations = [
  {
    id: 1,
    name: "New Tone",
    address: "Астана, Улица Алихан Бокейхан, 18/1а",
    phone: "+7 (778) 588-67-79",
    hours: "",
    coordinates: { lat: 40.7128, lng: -74.006 },
  },
  {
    id: 2,
    name: "New Tone 2",
    address: "Астана, Улица Каныш Сатпаев, 16/3",
    phone: "+7 (778) 588-67-79",
    hours: "",
    coordinates: { lat: 40.7328, lng: -73.986 },
  },
]

export function LocationMap() {
  const [activeLocation, setActiveLocation] = useState(0)

  return (
    <section id="locations" className="py-16 md:py-24 bg-black">
      <div className="container">
        <h2 className="text-3xl font-bold tracking-tight mb-12 text-center uppercase">Филиалы</h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-6">
            {locations.map((location, index) => (
              <div
                key={location.id}
                className={`p-4 cursor-pointer transition-colors border ${
                  activeLocation === index
                    ? "bg-green-800 text-white border-green-800"
                    : "bg-zinc-900 hover:border-green-800 border-gray-800"
                }`}
                onClick={() => setActiveLocation(index)}
              >
                <div className="flex items-start gap-3">
                  <MapPin className={`h-5 w-5 mt-1 ${activeLocation === index ? "text-white" : "text-green-600"}`} />
                  <div>
                    <h3 className="font-semibold text-lg uppercase">{location.name}</h3>
                    <p className={`text-sm ${activeLocation === index ? "text-white/90" : "text-gray-400"}`}>
                      {location.address}
                    </p>
                    <p className={`text-sm mt-2 ${activeLocation === index ? "text-white/90" : "text-gray-400"}`}>
                      {location.phone}
                    </p>
                    <p className={`text-sm ${activeLocation === index ? "text-white/90" : "text-gray-400"}`}>
                      {location.hours}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="md:col-span-2 bg-zinc-900 overflow-hidden h-[400px] relative border border-gray-800">
            <iframe
              src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.11976397304903!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sca!4v1621538241962!5m2!1sen!2sca`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              title="Map of NEWTONE locations"
            ></iframe>

            <div className="absolute bottom-4 right-4 bg-black p-3 border border-gray-800">
              <p className="text-sm font-medium">Get directions</p>
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${locations[activeLocation].coordinates.lat},${locations[activeLocation].coordinates.lng}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-green-600 hover:underline"
              >
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
