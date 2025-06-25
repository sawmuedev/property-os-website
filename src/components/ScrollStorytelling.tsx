'use client'

import {
  PencilSquareIcon,
  PencilIcon,
  ChatBubbleLeftIcon,
  ChartBarSquareIcon
} from '@heroicons/react/24/outline'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const steps = [
  {
    number: "01",
    title: "Sie melden ein Event",
    description: "\"Sommerschlussverkauf am 15.8.\" wird via App eingereicht.",
    icon: PencilSquareIcon
  },
  {
    number: "02",
    title: "Unsere Redaktion übernimmt",
    description: "Ein Foto reicht – daraus entstehen Post, Website-Update & MediaStele-Teaser.",
    icon: PencilIcon
  },
  {
    number: "03",
    title: "Besucher stellen Fragen",
    description: "\"Gibt's heute einen Deal?\" – der Chatbot antwortet direkt mit passenden Aktionen.",
    icon: ChatBubbleLeftIcon
  },
  {
    number: "04",
    title: "Auswertung inklusive",
    description: "Besucherzahlen steigen. Sie sehen den Erfolg live im Dashboard.",
    icon: ChartBarSquareIcon
  }
]

export default function ScrollStorytelling() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-r from-blue-200/20 to-emerald-200/20 rounded-full filter blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, 40, 0],
            scale: [1, 1.2, 1],
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
            So funktioniert&apos;s
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Von der Idee bis zur Auswertung – in 4 einfachen Schritten
          </motion.p>
        </motion.div>

        {/* Steps */}
        <div className="space-y-32">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              initial={{ opacity: 0, y: 100 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.2 }}
              >
                {/* Content */}
              <motion.div
                className="flex-1 text-center lg:text-left"
                initial={{ opacity: 0, x: index % 2 === 1 ? 50 : -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 1 ? 50 : -50 }}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
                >
                <motion.div
                  className="flex items-center justify-center lg:justify-start mb-6"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-gray-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4 shadow-lg">
                      {step.number}
                    </div>
                    <div>
                      <step.icon className="w-10 h-10 text-blue-600" />
                    </div>
                  </motion.div>


                <motion.h3
                  className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                >
                  {step.title}
                </motion.h3>

                <motion.p
                  className="text-lg lg:text-xl text-gray-600 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 1 + index * 0.2 }}
                >
                  {step.description}
                </motion.p>
              </motion.div>

              {/* Enhanced Illustration */}
              <motion.div
                className="flex-1 w-full max-w-md lg:max-w-none mx-auto"
                initial={{ opacity: 0, x: index % 2 === 1 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 1 ? -50 : 50 }}
                transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
                >
                  <div className="h-64 lg:h-80 bg-gradient-to-br from-blue-50/80 to-emerald-50/80 backdrop-blur-sm rounded-2xl border border-blue-200/30 flex items-center justify-center relative overflow-hidden shadow-xl">
                    {/* Static Background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400/5 to-emerald-400/5"></div>

                    <div className="text-center relative z-10">
                      <div>
                        <step.icon className="w-16 h-16 text-blue-600 mb-4 mx-auto" />
                      </div>

                      <div className="w-32 h-32 bg-gradient-to-br from-blue-200 to-emerald-200 rounded-xl mx-auto mb-4 shadow-lg" />

                      <p className="text-blue-600 font-medium">Illustration für Schritt {step.number}</p>
                    </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  )
}
