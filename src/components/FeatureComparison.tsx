'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const features = [
  {
    name: "Website mit eigenem CMS (Mallcockpit)",
    starter: true,
    active: true,
    master: true
  },
  {
    name: "Social Media-Redaktion inkl. Ads",
    starter: true,
    active: true,
    master: true
  },
  {
    name: "Direkte Content-Übermittlung an Redaktion",
    starter: true,
    active: true,
    master: true
  },
  {
    name: "QR-Mängelmelder zur Haustechnik",
    starter: true,
    active: true,
    master: true
  },
  {
    name: "KI-Chatbot",
    starter: true,
    active: true,
    master: true
  },
  {
    name: "MediaStele mit Welcome Deals & Couponing",
    starter: false,
    active: true,
    master: true
  },
  {
    name: "Mieter-Umsatzmeldung",
    starter: false,
    active: true,
    master: true
  },
  {
    name: "Dashboard mit Web-, Social- & Besucher-KPIs",
    starter: false,
    active: true,
    master: true
  },
  {
    name: "Steuerung von Touchpoints & digitalen Inhalten",
    starter: false,
    active: true,
    master: true
  },
  {
    name: "Schnittstellen zu externen Systemen (z. B. Parkhaus)",
    starter: false,
    active: false,
    master: true
  },
  {
    name: "Property-Cockpit für mehrere Standorte",
    starter: false,
    active: false,
    master: true
  },
  {
    name: "Hardwareintegration (Displays, Sensoren etc.)",
    starter: false,
    active: false,
    master: true
  }
]

export default function FeatureComparison() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-blue-200/20 to-emerald-200/20 rounded-full filter blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
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
            Detaillierter Feature-Vergleich
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Alle Funktionen und Module im Überblick
          </motion.p>
        </motion.div>
        
        {/* Enhanced Mobile Cards View */}
        <div className="block lg:hidden space-y-6">
          {['Starter', 'Active', 'Master'].map((plan, planIndex) => (
            <motion.div
              key={plan}
              className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-white/20"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.6 + planIndex * 0.2 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <motion.div
                className={`p-6 text-center ${
                  planIndex === 0 ? 'bg-gradient-to-r from-blue-600 to-blue-700' :
                  planIndex === 1 ? 'bg-gradient-to-r from-emerald-600 to-emerald-700' :
                  'bg-gradient-to-r from-gray-600 to-gray-700'
                } text-white`}
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-2xl font-bold">CenterOS {plan}</h3>
              </motion.div>
              <div className="p-6">
                <ul className="space-y-3">
                  {features.map((feature, index) => {
                    const hasFeature = planIndex === 0 ? feature.starter :
                                     planIndex === 1 ? feature.active : feature.master
                    return (
                      <motion.li
                        key={index}
                        className="flex items-center gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ duration: 0.4, delay: 0.8 + planIndex * 0.2 + index * 0.05 }}
                        whileHover={{ x: 5 }}
                      >
                        <motion.div
                          className={`w-6 h-6 rounded-full flex items-center justify-center ${
                            hasFeature ? 'bg-green-100' : 'bg-gray-100'
                          }`}
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.2 }}
                        >
                          <motion.span
                            className={`text-sm font-bold ${
                              hasFeature ? 'text-green-600' : 'text-gray-400'
                            }`}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.3, delay: 1 + planIndex * 0.2 + index * 0.05 }}
                          >
                            {hasFeature ? '✓' : '—'}
                          </motion.span>
                        </motion.div>
                        <span className={`text-sm ${hasFeature ? 'text-gray-900' : 'text-gray-400'}`}>
                          {feature.name}
                        </span>
                      </motion.li>
                    )
                  })}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Enhanced Desktop Table View */}
        <motion.div
          className="hidden lg:block bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden border border-white/20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          whileHover={{ y: -5 }}
        >
          <table className="w-full">
            <thead>
              <motion.tr
                className="bg-gradient-to-r from-gray-50 to-gray-100"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <th className="px-8 py-6 text-left text-lg font-bold text-gray-900">
                  Modul / Funktion
                </th>
                <th className="px-8 py-6 text-center text-lg font-bold text-blue-600">
                  Starter
                </th>
                <th className="px-8 py-6 text-center text-lg font-bold text-emerald-600">
                  Active
                </th>
                <th className="px-8 py-6 text-center text-lg font-bold text-gray-600">
                  Master
                </th>
              </motion.tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <motion.tr
                  key={index}
                  className={`border-t border-gray-200/50 ${index % 2 === 0 ? 'bg-gray-50/50' : 'bg-white/50'}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, delay: 1 + index * 0.05 }}
                  whileHover={{ backgroundColor: "rgba(59, 130, 246, 0.05)" }}
                >
                  <td className="px-8 py-4 text-gray-900 font-medium">
                    {feature.name}
                  </td>
                  <td className="px-8 py-4 text-center">
                    <motion.div
                      className={`inline-flex items-center justify-center w-8 h-8 rounded-full ${
                        feature.starter ? 'bg-green-100' : 'bg-gray-100'
                      }`}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <motion.span
                        className={`text-lg font-bold ${
                          feature.starter ? 'text-green-600' : 'text-gray-400'
                        }`}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3, delay: 1.2 + index * 0.05 }}
                      >
                        {feature.starter ? '✓' : '—'}
                      </motion.span>
                    </motion.div>
                  </td>
                  <td className="px-8 py-4 text-center">
                    <motion.div
                      className={`inline-flex items-center justify-center w-8 h-8 rounded-full ${
                        feature.active ? 'bg-green-100' : 'bg-gray-100'
                      }`}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <motion.span
                        className={`text-lg font-bold ${
                          feature.active ? 'text-green-600' : 'text-gray-400'
                        }`}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3, delay: 1.3 + index * 0.05 }}
                      >
                        {feature.active ? '✓' : '—'}
                      </motion.span>
                    </motion.div>
                  </td>
                  <td className="px-8 py-4 text-center">
                    <motion.div
                      className={`inline-flex items-center justify-center w-8 h-8 rounded-full ${
                        feature.master ? 'bg-green-100' : 'bg-gray-100'
                      }`}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <motion.span
                        className={`text-lg font-bold ${
                          feature.master ? 'text-green-600' : 'text-gray-400'
                        }`}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3, delay: 1.4 + index * 0.05 }}
                      >
                        {feature.master ? '✓' : '—'}
                      </motion.span>
                    </motion.div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Enhanced Bottom CTAs */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 2 }}
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              className="bg-white/80 backdrop-blur-sm border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{
                scale: 1.05,
                y: -2,
                boxShadow: "0 10px 30px rgba(37, 99, 235, 0.2)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              Alle Funktionen als PDF herunterladen
            </motion.button>
            <motion.button
              className="bg-gradient-to-r from-gray-600 to-blue-600 hover:from-gray-700 hover:to-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{
                scale: 1.05,
                y: -2,
                boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              Jetzt unverbindlich beraten lassen
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
