'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
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
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="features" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-blue-200/30 to-emerald-200/30 rounded-full filter blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-emerald-200/30 to-blue-200/30 rounded-full filter blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
            scale: [1.1, 1, 1.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Alles was Sie brauchen, in einer Plattform
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            PropertyOS vereint alle wichtigen Tools für erfolgreiches Centermanagement
          </motion.p>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              onMouseEnter={() => setActiveFeature(index)}
              whileHover={{ y: -8 }}
            >
              {/* Glassmorphism Card */}
              <motion.div
                className="relative bg-white/70 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden"
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)"
                }}
                style={{
                  background: "linear-gradient(135deg, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.6) 100%)"
                }}
              >
                {/* Animated Background Gradient */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: "linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, rgba(6, 214, 160, 0.05) 100%)"
                  }}
                />

                {/* Icon */}
                <motion.div
                  className="mb-6 relative z-10"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-r from-gray-600 to-blue-600 rounded-xl flex items-center justify-center shadow-lg"
                    whileHover={{
                      boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)"
                    }}
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </motion.div>
                </motion.div>

                {/* Screenshot Placeholder */}
                <motion.div
                  className="h-40 md:h-48 bg-gradient-to-br from-blue-50/80 to-emerald-50/80 backdrop-blur-sm rounded-xl mb-6 flex items-center justify-center border border-blue-200/30 relative overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Animated Background */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-emerald-400/10"
                    animate={{
                      x: [-100, 100],
                      opacity: [0, 0.5, 0]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />

                  <div className="text-center relative z-10">
                    <motion.div
                      className="w-16 h-16 bg-gradient-to-r from-blue-200 to-emerald-200 rounded-xl mx-auto mb-2 shadow-lg"
                      animate={{
                        scale: [1, 1.05, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    <p className="text-sm text-blue-600 font-medium">UI Screenshot</p>
                  </div>
                </motion.div>

                {/* Content */}
                <div className="relative z-10">
                  <motion.h3
                    className="text-lg md:text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300"
                    whileHover={{ x: 5 }}
                  >
                    {feature.title}
                  </motion.h3>
                  <motion.p
                    className="text-sm md:text-base text-gray-600 leading-relaxed"
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1 }}
                  >
                    {feature.description}
                  </motion.p>

                  {/* Animated Progress Bar */}
                  <motion.div
                    className="mt-6 h-1 bg-gray-200 rounded-full overflow-hidden"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className="h-full bg-gradient-to-r from-gray-600 to-blue-600 rounded-full"
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                    />
                  </motion.div>
                </div>

                {/* Floating Elements */}
                <motion.div
                  className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full opacity-60"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.6, 1, 0.6]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.3
                  }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Feature Navigation Dots */}
        <motion.div
          className="flex justify-center mt-16 space-x-3"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          {features.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveFeature(index)}
              className={`relative rounded-full transition-all duration-300 ${
                activeFeature === index
                  ? 'w-10 h-3'
                  : 'w-3 h-3'
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.div
                className={`w-full h-full rounded-full transition-all duration-300 ${
                  activeFeature === index
                    ? 'bg-gradient-to-r from-gray-600 to-blue-600'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                animate={activeFeature === index ? {
                  boxShadow: [
                    "0 0 0 0 rgba(59, 130, 246, 0.4)",
                    "0 0 0 8px rgba(59, 130, 246, 0)",
                    "0 0 0 0 rgba(59, 130, 246, 0)"
                  ]
                } : {}}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </motion.button>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
