'use client'

import { useState } from 'react'
import {
  ChartBarIcon,
  ChatBubbleLeftRightIcon,
  DevicePhoneMobileIcon,
  QrCodeIcon,
  CurrencyEuroIcon,
  Cog6ToothIcon
} from '@heroicons/react/24/outline'

const features = [
  {
    title: "Dashboard in Echtzeit",
    description: "KPIs, Besucherzahlen & Webdaten auf einen Blick – mobil & browserbasiert.",
    icon: ChartBarIcon
  },
  {
    title: "KI-gestützter Chatbot",
    description: "Besucher fragen – PropertyOS antwortet. Automatisiert. Mehrsprachig. Präzise.",
    icon: ChatBubbleLeftRightIcon
  },
  {
    title: "Social Media & Website aus einer Hand",
    description: "Sie liefern ein Foto – unser Redaktionsteam erledigt den Rest.",
    icon: DevicePhoneMobileIcon
  },
  {
    title: "QR-Mängelmelder",
    description: "Ein Scan, ein Klick – technisches Problem sofort im System.",
    icon: QrCodeIcon
  },
  {
    title: "Mieter-Umsatzmeldung",
    description: "Mieter senden Monatsumsätze direkt im Tool – datenschutzkonform & zentralisiert.",
    icon: CurrencyEuroIcon
  },
  {
    title: "Zentrale Steuerung",
    description: "Steuern Sie MediaStelen, Displays & Inhalte in allen Touchpoints – aus einer Oberfläche.",
    icon: Cog6ToothIcon
  }
]

export default function FeatureSlider() {
  const [activeFeature, setActiveFeature] = useState(0)

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Alles was Sie brauchen, in einer Plattform
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            PropertyOS vereint alle wichtigen Tools für erfolgreiches Centermanagement
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 cursor-pointer"
              onMouseEnter={() => setActiveFeature(index)}
            >
              {/* Icon */}
              <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-12 h-12 text-blue-600" />
              </div>

              {/* Screenshot Placeholder */}
              <div className="h-48 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg mb-6 flex items-center justify-center border-2 border-dashed border-blue-200">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-200 rounded-lg mx-auto mb-2"></div>
                  <p className="text-sm text-blue-600">UI Screenshot</p>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Effect */}
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-full h-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Feature Navigation Dots */}
        <div className="flex justify-center mt-12 space-x-2">
          {features.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveFeature(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeFeature === index
                  ? 'bg-blue-600 w-8'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
