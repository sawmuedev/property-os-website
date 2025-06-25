'use client'

import { CameraIcon, PencilIcon, RocketLaunchIcon } from '@heroicons/react/24/outline'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const services = [
  "Social Posts inkl. Ad-Schaltung (Meta, Google)",
  "Eventkommunikation für Website & Touchpoints",
  "Erstellung passender Inhalte auf Basis Ihrer Info",
  "KPI-Auswertung & regelmäßige Berichte"
]

const workflowSteps = [
  {
    step: "Input",
    title: "Sie senden uns Ihr Foto",
    description: "Ein einfaches Foto oder eine kurze Info reicht",
    icon: CameraIcon
  },
  {
    step: "Redaktion",
    title: "Unser Team arbeitet",
    description: "Professionelle Aufbereitung für alle Kanäle",
    icon: PencilIcon
  },
  {
    step: "Output",
    title: "Fertige Kommunikation",
    description: "Website, Social Media, MediaStelen – alles ready",
    icon: RocketLaunchIcon
  }
]

export default function EditorialService() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-20 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-r from-blue-200/20 to-emerald-200/20 rounded-full filter blur-3xl"
          animate={{
            x: [0, 40, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 10,
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
            Sie senden ein Foto – wir machen Kommunikation daraus
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Unser Redaktionsteam kümmert sich um alles: Website-News, Social Media, Aktionen,
            Chatbot-Content und MediaStelen-Inhalte. Schnell. Professionell. Zielgruppengerecht.
          </motion.p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Services List */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.h3
              className="text-2xl font-bold text-gray-900 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              Unsere Leistungen:
            </motion.h3>
            <ul className="space-y-6">
              {services.map((service, index) => (
                <motion.li
                  key={index}
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <motion.div
                    className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0 mt-3"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3, delay: 1.2 + index * 0.1 }}
                  />
                  <span className="text-gray-700 text-lg leading-relaxed">{service}</span>
                </motion.li>
              ))}
            </ul>

            {/* Additional Info */}
            <motion.div
              className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-emerald-50 rounded-xl border border-blue-200/50 backdrop-blur-sm"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6, delay: 1.8 }}
              whileHover={{ scale: 1.02 }}
            >
              <h4 className="font-bold text-blue-900 mb-3">Warum unser Redaktionsservice?</h4>
              <p className="text-blue-800 text-sm mb-3">
                Unsere Redakteure verstehen Shoppingcenter – durch die tägliche Betreuung von Centern
                jeder Größe kennen wir deren Kommunikationsbedürfnisse aus der Praxis.
              </p>
              <p className="text-blue-700 text-sm">
                Sparen Sie Zeit und Ressourcen. Unser erfahrenes Team sorgt für konsistente,
                professionelle Kommunikation über alle Kanäle hinweg.
              </p>
            </motion.div>
          </motion.div>

          {/* Enhanced Workflow Infographic */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.h3
              className="text-2xl font-bold text-gray-900 mb-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              So läuft&apos;s ab:
            </motion.h3>
            <div className="space-y-8">
              {workflowSteps.map((step, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-6"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 1.2 + index * 0.2 }}
                  whileHover={{ x: 5 }}
                >
                  {/* Enhanced Icon */}
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-r from-gray-600 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg"
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)"
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <step.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Content */}
                  <motion.div
                    className="flex-1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                    transition={{ duration: 0.5, delay: 1.4 + index * 0.2 }}
                  >
                    <div className="text-sm font-bold text-blue-600 uppercase tracking-wide mb-1">
                      {step.step}
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-1">
                      {step.title}
                    </h4>
                    <p className="text-gray-600">
                      {step.description}
                    </p>
                  </motion.div>


                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
