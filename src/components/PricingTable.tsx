'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const packages = [
  {
    name: "CenterOS Starter",
    subtitle: "Ihre Basis für Sichtbarkeit & Kommunikation – powered by CenterOS",
    description: "Ideal für Center, die digital sichtbar und redaktionell betreut starten möchten.",
    features: [
      "Professionelle Website mit eigenem CMS (Mallcockpit)",
      "Social Media-Redaktion für Posts, Aktionen & Ads",
      "Basic Reportings über Ihre Web- & Social Media-KPIs",
      "Direkte Kommunikation mit unserer Redaktion (z. B. per Foto-Upload)",
      "Integrierter KI-Chatbot für Besucherfragen"
    ],
    popular: false,
    color: "blue"
  },
  {
    name: "CenterOS Active",
    subtitle: "Ihr Center lebt – vernetzt, interaktiv, datengestützt",
    description: "Für Center, die aktiv mit Kunden, Mietern und Besuchern kommunizieren möchten.",
    features: [
      "Interaktive MediaStelen mit Welcome Deals & Couponing",
      "Dashboard mit Besucherzahlen, Social Media Insights & Web-KPIs",
      "QR-Mängelmelder für Kundenfeedback direkt an die Haustechnik",
      "Monatsumsatzmeldung durch Ihre Mieter – direkt im System",
      "KI-basierte Auswertung & Prozessautomatisierung im Hintergrund"
    ],
    popular: true,
    color: "cyan"
  },
  {
    name: "CenterOS Master",
    subtitle: "Alle Daten, alle Tools, alle Touchpoints – zentral gesteuert",
    description: "Die Komplettlösung für Betreiber mit höchsten Ansprüchen an Effizienz, Daten und Skalierbarkeit.",
    features: [
      "Vollständiges Analyse- & Reporting-Dashboard inkl. API-Anbindung",
      "Steuerung sämtlicher Inhalte, Displays & Touchpoints",
      "Schnittstellen zu Besucherfrequenzmessung, Parksystem, CRM u. v. m.",
      "Verwaltung mehrerer Center über das Property-Cockpit",
      "KI als technologische Grundlage für Steuerung & Automatisierung"
    ],
    popular: false,
    color: "purple"
  }
]

export default function PricingTable() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-r from-blue-200/20 to-purple-200/20 rounded-full filter blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, 30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-r from-cyan-200/20 to-blue-200/20 rounded-full filter blur-3xl"
          animate={{
            x: [0, 60, 0],
            y: [0, -40, 0],
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
            Welches Paket passt zu Ihrem Center?
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Ob kleines Center oder Betreiber mit Portfolio – PropertyOS passt sich an Ihre Anforderungen an.
          </motion.p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              className={`relative group ${pkg.popular ? 'lg:scale-105' : ''}`}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
              whileHover={{
                y: -10,
                scale: pkg.popular ? 1.08 : 1.05
              }}
            >
              {/* Animated Border for Popular Package */}
              {pkg.popular && (
                <motion.div
                  className="absolute inset-0 rounded-2xl"
                  style={{
                    background: "linear-gradient(45deg, #06b6d4, #3b82f6, #8b5cf6, #06b6d4)",
                    backgroundSize: "300% 300%",
                    padding: "2px"
                  }}
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <div className="w-full h-full bg-white rounded-2xl" />
                </motion.div>
              )}

              <motion.div
                className={`relative bg-white/95 backdrop-blur-sm rounded-2xl transition-all duration-500 ${
                  !pkg.popular ? 'border border-gray-200' : ''
                } ${pkg.popular ? 'pt-6' : ''}`}
                style={{
                  boxShadow: pkg.popular
                    ? '0 25px 50px rgba(6, 182, 212, 0.15), 0 10px 25px rgba(0, 0, 0, 0.1)'
                    : '0 20px 40px rgba(0, 0, 0, 0.08), 0 8px 20px rgba(0, 0, 0, 0.06)'
                }}
                whileHover={{
                  boxShadow: pkg.popular
                    ? '0 35px 70px rgba(6, 182, 212, 0.25), 0 15px 35px rgba(0, 0, 0, 0.15)'
                    : '0 30px 60px rgba(0, 0, 0, 0.12), 0 12px 30px rgba(0, 0, 0, 0.08)'
                }}
              >
                  {/* Enhanced Popular Badge */}
                {pkg.popular && (
                  <motion.div
                    className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.6, delay: 1.2, type: "spring", stiffness: 200 }}
                  >
                    <motion.div
                      className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-bold whitespace-nowrap shadow-lg"
                      animate={{
                        boxShadow: [
                          "0 4px 15px rgba(6, 182, 212, 0.4)",
                          "0 6px 20px rgba(6, 182, 212, 0.6)",
                          "0 4px 15px rgba(6, 182, 212, 0.4)"
                        ]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      Beliebtestes Paket
                    </motion.div>
                  </motion.div>
                )}

                <div className={`p-8 ${pkg.popular ? 'pt-12' : ''}`}>
                {/* Header */}
                <motion.div
                  className="text-center mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                >
                  <motion.h3
                    className={`text-2xl font-bold mb-2 ${
                      pkg.color === 'blue' ? 'text-blue-600' :
                      pkg.color === 'cyan' ? 'text-cyan-600' :
                      pkg.color === 'purple' ? 'text-purple-600' : 'text-gray-600'
                    }`}
                    whileHover={{ scale: 1.05 }}
                  >
                    {pkg.name}
                  </motion.h3>
                  <motion.p
                    className="text-gray-600 text-sm leading-relaxed mb-4"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.6, delay: 1 + index * 0.2 }}
                  >
                    {pkg.subtitle}
                  </motion.p>
                </motion.div>

                {/* Features */}
                <motion.div
                  className="mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 1.2 + index * 0.2 }}
                >
                  <h4 className="font-bold text-gray-900 mb-4">Top Features:</h4>
                  <ul className="space-y-3">
                    {pkg.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ duration: 0.4, delay: 1.4 + index * 0.2 + featureIndex * 0.1 }}
                        whileHover={{ x: 5 }}
                      >
                        <motion.div
                          className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                            pkg.color === 'blue' ? 'bg-blue-100' :
                            pkg.color === 'cyan' ? 'bg-cyan-100' :
                            pkg.color === 'purple' ? 'bg-purple-100' : 'bg-gray-100'
                          }`}
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.2 }}
                        >
                          <motion.span
                            className={`text-xs font-bold ${
                              pkg.color === 'blue' ? 'text-blue-600' :
                              pkg.color === 'cyan' ? 'text-cyan-600' :
                              pkg.color === 'purple' ? 'text-purple-600' : 'text-gray-600'
                            }`}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.3, delay: 1.6 + index * 0.2 + featureIndex * 0.1 }}
                          >
                            ✓
                          </motion.span>
                        </motion.div>
                        <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                {/* Description */}
                <motion.div
                  className="mb-8 p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg border border-gray-200/50"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.6, delay: 2 + index * 0.2 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <p className="text-gray-600 text-sm italic">
                    {pkg.description}
                  </p>
                </motion.div>

                {/* CTA Button */}
                <motion.button
                  className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 ${
                    pkg.popular
                      ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white hover:from-cyan-700 hover:to-blue-700'
                      : pkg.color === 'blue'
                        ? 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white'
                        : pkg.color === 'purple'
                          ? 'bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white'
                          : 'bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white'
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 2.2 + index * 0.2 }}
                  whileHover={{
                    scale: 1.05,
                    y: -2
                  }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    boxShadow: pkg.popular
                      ? '0 8px 25px rgba(6, 182, 212, 0.3)'
                      : pkg.color === 'blue'
                        ? '0 6px 20px rgba(37, 99, 235, 0.3)'
                        : pkg.color === 'purple'
                          ? '0 6px 20px rgba(147, 51, 234, 0.3)'
                          : '0 6px 20px rgba(75, 85, 99, 0.3)'
                  }}
                >
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 2.4 + index * 0.2 }}
                  >
                    Paket wählen
                  </motion.span>
                </motion.button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Bottom CTAs */}
        <motion.div
          className="text-center mt-16 space-y-4"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 2.8 }}
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
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
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
