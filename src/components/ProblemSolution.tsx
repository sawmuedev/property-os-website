'use client'

import { ExclamationTriangleIcon, SparklesIcon } from '@heroicons/react/24/outline'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const problemSolutions = [
  {
    problem: "5 Tools, 10 Mails, 3 Telefonate pro Tag",
    solution: "Ein System für alles"
  },
  {
    problem: "Keine Zeit für Content",
    solution: "Redaktion inklusive"
  },
  {
    problem: "Keine aktuellen Zahlen zur Besucherfrequenz",
    solution: "Live-KPIs & Benchmarks"
  },
  {
    problem: "Mieterkommunikation unübersichtlich",
    solution: "Umsatzmeldungen direkt integriert"
  },
  {
    problem: "Social Media & Website laufen getrennt",
    solution: "Zentrale Verwaltung & Ausspielung"
  }
]

export default function ProblemSolution() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-20 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-red-200/20 to-orange-200/20 rounded-full filter blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-green-200/20 to-emerald-200/20 rounded-full filter blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 30, 0],
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
            Weg mit dem Tool-Chaos – rein in die digitale Übersicht
          </motion.h2>
        </motion.div>

        {/* Problem/Solution Comparison */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Problems */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div
              className="bg-red-50/80 backdrop-blur-sm p-8 rounded-2xl border border-red-200/50 shadow-xl relative overflow-hidden"
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              {/* Animated Background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-red-100/50 to-orange-100/50 opacity-0"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />

              <motion.div
                className="flex items-center mb-8 relative z-10"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <ExclamationTriangleIcon className="w-10 h-10 text-red-600 mr-4" />
                </motion.div>
                <h3 className="text-2xl font-bold text-red-700">Aktuelle Probleme</h3>
              </motion.div>

              <div className="space-y-6 relative z-10">
                {problemSolutions.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <motion.div
                      className="w-8 h-8 bg-red-200 rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-md"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <motion.span
                        className="text-red-700 text-lg font-bold"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3, delay: 1 + index * 0.1 }}
                      >
                        ✗
                      </motion.span>
                    </motion.div>
                    <span className="text-red-800 font-medium leading-relaxed">{item.problem}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Solutions */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.div
              className="bg-green-50/80 backdrop-blur-sm p-8 rounded-2xl border border-green-200/50 shadow-xl relative overflow-hidden"
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              {/* Animated Background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-green-100/50 to-emerald-100/50 opacity-0"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />

              <motion.div
                className="flex items-center mb-8 relative z-10"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <SparklesIcon className="w-10 h-10 text-green-600 mr-4" />
                </motion.div>
                <h3 className="text-2xl font-bold text-green-700">Lösungen mit PropertyOS</h3>
              </motion.div>

              <div className="space-y-6 relative z-10">
                {problemSolutions.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                    transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                    whileHover={{ x: -5 }}
                  >
                    <motion.div
                      className="w-8 h-8 bg-green-200 rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-md"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <motion.span
                        className="text-green-700 text-lg font-bold"
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{
                          duration: 0.5,
                          delay: 1.2 + index * 0.1,
                          type: "spring",
                          stiffness: 200
                        }}
                      >
                        ✓
                      </motion.span>
                    </motion.div>
                    <span className="text-green-800 font-medium leading-relaxed">{item.solution}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Enhanced CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 2 }}
        >
          <motion.p
            className="text-xl text-gray-600 mb-6"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 2.2 }}
          >
            Bereit für den Wechsel zu einem einheitlichen System?
          </motion.p>
          <motion.button
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 2.4, type: "spring", stiffness: 200 }}
            whileHover={{
              scale: 1.05,
              y: -2,
              boxShadow: "0 15px 35px rgba(59, 130, 246, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Jetzt Demo anfragen
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
