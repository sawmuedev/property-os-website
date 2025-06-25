'use client'

import { motion } from 'framer-motion'

export default function TrustBar() {
  return (
    <section className="relative py-6 md:py-8 bg-white border-b border-gray-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.p
            className="text-sm md:text-base text-gray-700 font-medium"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Vertrauen Sie auf{' '}
            <motion.a
              href="https://sawatzki-muehlenbruch.de/"
              target="_blank"
              rel="noopener noreferrer"
              className="theme-secondary font-semibold hover:underline"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              SawatzkiMühlenbruch
            </motion.a>
            {' '}– über{' '}
            <motion.span
              className="theme-secondary font-semibold"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              15 Jahre Expertise
            </motion.span>
            {' '}und bereits{' '}
            <motion.span
              className="theme-secondary font-semibold"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              150 Shoppingcenter deutschlandweit
            </motion.span>
          </motion.p>
        </motion.div>
      </div>
      
      {/* Subtle decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -left-4 top-1/2 w-8 h-8 bg-gradient-to-r from-blue-400/10 to-emerald-400/10 rounded-full blur-sm"
          animate={{
            x: [0, 20, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute -right-4 top-1/2 w-6 h-6 bg-gradient-to-l from-emerald-400/10 to-blue-400/10 rounded-full blur-sm"
          animate={{
            x: [0, -15, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>
    </section>
  )
}
