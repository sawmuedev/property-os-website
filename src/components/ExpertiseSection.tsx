'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  BuildingOffice2Icon, 
  ClockIcon, 
  ShieldCheckIcon, 
  CpuChipIcon 
} from '@heroicons/react/24/outline'

const expertiseCards = [
  {
    icon: BuildingOffice2Icon,
    title: "150+ Center vertrauen uns",
    description: "Bewährte Technologie im Einsatz",
    detail: "Deutschlandweit setzen bereits über 150 Shoppingcenter auf unsere digitalen Lösungen.",
    color: "blue"
  },
  {
    icon: ClockIcon,
    title: "15+ Jahre Branchenerfahrung",
    description: "Tiefes Verständnis für Ihre Herausforderungen",
    detail: "Über anderthalb Jahrzehnte spezialisierte Expertise in der digitalen Centerkommunikation.",
    color: "emerald"
  },
  {
    icon: ShieldCheckIcon,
    title: "GCSP Technologie-Partner",
    description: "Anerkannte Expertise in der Branche",
    detail: "Exklusive Partnerschaft mit dem German Council of Shopping Places seit 2024.",
    color: "gray"
  },
  {
    icon: CpuChipIcon,
    title: "MallCockpit als Basis",
    description: "Bewährte Technologie, weiterentwickelt",
    detail: "PropertyOS basiert auf unserem bewährten MallCockpit-System für Websites und DOOH-Screens.",
    color: "purple"
  }
]

export default function ExpertiseSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-r from-blue-200/15 to-emerald-200/15 rounded-full filter blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, 20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-r from-gray-200/15 to-blue-200/15 rounded-full filter blur-3xl"
          animate={{
            x: [0, 40, 0],
            y: [0, -30, 0],
            scale: [1.1, 1, 1.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Expertise aus der Praxis für die Praxis
          </motion.h2>
          
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              PropertyOS entsteht nicht am Reißbrett. Als{' '}
              <span className="theme-secondary font-semibold">GCSP Technologie-Partner</span>{' '}
              bringt{' '}
              <span className="theme-secondary font-semibold">SawatzkiMühlenbruch</span>{' '}
              über{' '}
              <span className="theme-secondary font-semibold">15 Jahre Shoppingcenter-Erfahrung</span>{' '}
              mit. Wir wissen genau, welche Herausforderungen Centermanager täglich meistern müssen.{' '}
              Diese Praxiserfahrung aus{' '}
              <span className="theme-secondary font-semibold">150 betreuten Centern</span>{' '}
              fließt direkt in jede Funktion von PropertyOS ein.
            </p>
          </motion.div>
        </motion.div>

        {/* Expertise Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {expertiseCards.map((card, index) => (
            <motion.div
              key={index}
              className="group"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
            >
              <motion.div
                className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-300 h-full"
                whileHover={{ 
                  y: -8, 
                  scale: 1.02,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Icon */}
                <motion.div
                  className={`w-12 h-12 rounded-xl mb-4 flex items-center justify-center ${
                    card.color === 'blue' ? 'bg-blue-100 text-blue-600' :
                    card.color === 'emerald' ? 'bg-emerald-100 text-emerald-600' :
                    card.color === 'gray' ? 'bg-gray-100 text-gray-600' :
                    'bg-purple-100 text-purple-600'
                  }`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <card.icon className="w-6 h-6" />
                </motion.div>

                {/* Content */}
                <motion.h3
                  className="text-lg font-bold text-gray-900 mb-2"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                >
                  {card.title}
                </motion.h3>
                
                <motion.p
                  className="text-sm font-medium text-gray-600 mb-3"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                >
                  {card.description}
                </motion.p>
                
                <motion.p
                  className="text-sm text-gray-500 leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                >
                  {card.detail}
                </motion.p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.6 }}
        >
          <motion.p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 1.8 }}
          >
            Diese einzigartige Kombination aus praktischer Erfahrung und technologischer Kompetenz 
            macht PropertyOS zur idealen Lösung für modernes Centermanagement.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
