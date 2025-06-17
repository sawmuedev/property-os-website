'use client'

import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useState } from 'react'

// Floating Particles Component
const FloatingParticles = () => {
  const [particles, setParticles] = useState<Array<{id: number, x: number, y: number, size: number, delay: number}>>([])

  useEffect(() => {
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      delay: Math.random() * 5
    }))
    setParticles(newParticles)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 backdrop-blur-sm"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 6 + Math.random() * 4,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  )
}

export default function Hero() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 50]) // Reduzierter Parallax-Effekt

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Gradient */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "linear-gradient(45deg, #f0f9ff 0%, #e0f2fe 50%, #f0f9ff 100%)",
            "linear-gradient(45deg, #e0f2fe 0%, #f0f9ff 50%, #e0f2fe 100%)",
            "linear-gradient(45deg, #f0f9ff 0%, #e0f2fe 50%, #f0f9ff 100%)",
          ]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Floating Particles */}
      <FloatingParticles />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <motion.div
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20"
        style={{ y }}
      >
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* Content */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Die zentrale Plattform für{' '}
              <motion.span
                className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{
                  backgroundSize: "200% 200%"
                }}
              >
                modernes Centermanagement
              </motion.span>
            </motion.h1>

            <motion.p
              className="mt-4 md:mt-6 text-lg md:text-xl text-gray-600 max-w-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Alle Tools, Daten und Services – intuitiv bedienbar, KI-gestützt, redaktionell begleitet.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Link
                  href="#contact"
                  className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl text-base md:text-lg font-semibold transition-all duration-300 shadow-2xl hover:shadow-blue-500/25"
                >
                  Demo anfragen
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Link
                  href="#pricing"
                  className="inline-block border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 md:px-8 py-3 md:py-4 rounded-xl text-base md:text-lg font-semibold transition-all duration-300 bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl"
                >
                  Pakete vergleichen
                </Link>
              </motion.div>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              className="mt-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <p className="text-sm text-gray-500 mb-4">Vertraut von führenden Centern</p>
              <div className="flex flex-wrap justify-center lg:justify-start items-center gap-8 opacity-60">
                {/* Animated Placeholder Logos */}
                {[0, 1, 2, 3].map((index) => (
                  <motion.div
                    key={index}
                    className="h-8 w-24 bg-gradient-to-r from-gray-200 to-gray-300 rounded"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Mockup */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50, rotateY: -15 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          >
            <motion.div
              className="relative z-10"
              whileHover={{
                rotateY: 5,
                rotateX: -5,
                scale: 1.02
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Laptop Mockup */}
              <motion.div
                className="relative"
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <div className="bg-gray-800 rounded-t-xl p-2">
                  <div className="flex space-x-2">
                    {['bg-red-500', 'bg-yellow-500', 'bg-green-500'].map((color, index) => (
                      <motion.div
                        key={index}
                        className={`w-3 h-3 ${color} rounded-full`}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                        whileHover={{ scale: 1.2 }}
                      />
                    ))}
                  </div>
                </div>
                <motion.div
                  className="bg-white/95 backdrop-blur-sm rounded-b-xl overflow-hidden shadow-2xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                >
                  {/* Dashboard Placeholder */}
                  <div className="p-6 bg-gradient-to-br from-blue-50/80 to-white/80 backdrop-blur-sm">
                    <motion.div
                      className="flex items-center justify-between mb-6"
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 1.1 }}
                    >
                      <motion.div
                        className="h-8 w-32 bg-gradient-to-r from-blue-600 to-purple-600 rounded shadow-lg"
                        animate={{
                          boxShadow: [
                            "0 4px 15px rgba(37, 99, 235, 0.3)",
                            "0 6px 20px rgba(37, 99, 235, 0.4)",
                            "0 4px 15px rgba(37, 99, 235, 0.3)"
                          ]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      <motion.div
                        className="h-8 w-8 bg-gray-300 rounded-full shadow-md"
                        whileHover={{ rotate: 180 }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.div>

                    {/* Stats Cards */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {[
                        { color: 'from-blue-600 to-blue-700', delay: 1.2 },
                        { color: 'from-cyan-600 to-cyan-700', delay: 1.3 },
                        { color: 'from-purple-500 to-purple-600', delay: 1.4 }
                      ].map((card, index) => (
                        <motion.div
                          key={index}
                          className="bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.5, delay: card.delay }}
                          whileHover={{ y: -2, scale: 1.02 }}
                        >
                          <motion.div
                            className="h-4 w-16 bg-gray-300 rounded mb-2"
                            initial={{ width: 0 }}
                            animate={{ width: "4rem" }}
                            transition={{ duration: 0.8, delay: card.delay + 0.2 }}
                          />
                          <motion.div
                            className={`h-6 w-12 bg-gradient-to-r ${card.color} rounded shadow-sm`}
                            initial={{ width: 0 }}
                            animate={{ width: "3rem" }}
                            transition={{ duration: 0.8, delay: card.delay + 0.4 }}
                          />
                        </motion.div>
                      ))}
                    </div>

                    {/* Chart Placeholder */}
                    <motion.div
                      className="bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 1.5 }}
                      whileHover={{ scale: 1.01 }}
                    >
                      <motion.div
                        className="h-4 w-24 bg-gray-300 rounded mb-4"
                        initial={{ width: 0 }}
                        animate={{ width: "6rem" }}
                        transition={{ duration: 0.8, delay: 1.7 }}
                      />
                      <motion.div
                        className="h-32 bg-gradient-to-t from-blue-100/80 to-blue-50/80 rounded"
                        initial={{ height: 0 }}
                        animate={{ height: "8rem" }}
                        transition={{ duration: 1, delay: 1.8 }}
                      />
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Smartphone Mockup */}
              <motion.div
                className="absolute -bottom-8 -right-8 w-32"
                initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                whileHover={{
                  scale: 1.05,
                  rotate: 5,
                  y: -5
                }}
              >
                <div className="bg-gray-800 rounded-2xl p-1 shadow-xl">
                  <div className="bg-white rounded-xl overflow-hidden">
                    <div className="p-3">
                      <motion.div
                        className="h-2 w-16 bg-gray-300 rounded mb-3 mx-auto"
                        initial={{ width: 0 }}
                        animate={{ width: "4rem" }}
                        transition={{ duration: 0.5, delay: 1.5 }}
                      />
                      <div className="space-y-2">
                        {[
                          { width: "100%", color: "bg-gradient-to-r from-blue-600 to-purple-600", delay: 1.6 },
                          { width: "75%", color: "bg-gray-300", delay: 1.7 },
                          { width: "50%", color: "bg-gray-300", delay: 1.8 }
                        ].map((bar, index) => (
                          <motion.div
                            key={index}
                            className={`h-3 ${bar.color} rounded`}
                            style={{ width: bar.width }}
                            initial={{ width: 0 }}
                            animate={{ width: bar.width }}
                            transition={{ duration: 0.5, delay: bar.delay }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Enhanced Background Elements */}
            <motion.div
              className="absolute -top-4 -left-4 w-72 h-72 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.5, 0.3],
                rotate: [0, 180, 360]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute -bottom-8 -right-8 w-72 h-72 bg-gradient-to-r from-cyan-200 to-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"
              animate={{
                scale: [1.1, 1, 1.1],
                opacity: [0.5, 0.3, 0.5],
                rotate: [360, 180, 0]
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
            />
          </motion.div>

        </div>
      </motion.div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 2 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="cursor-pointer"
          whileHover={{ scale: 1.1 }}
          onClick={() => {
            document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })
          }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
            whileHover={{ borderColor: "#3b82f6" }}
          >
            <motion.div
              className="w-1 h-3 bg-gray-400 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ backgroundColor: "#3b82f6" }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
