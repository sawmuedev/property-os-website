'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'


export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollY } = useScroll()

  // Transform values for floating effect
  const navY = useTransform(scrollY, [0, 100], [0, -5])
  const navBlur = useTransform(scrollY, [0, 100], [8, 20])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      style={{
        y: navY,
        backdropFilter: `blur(${navBlur}px)`,
      }}
      className={`fixed top-2 md:top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 rounded-xl md:rounded-2xl border w-[95%] md:w-auto ${
        isScrolled
          ? 'bg-white/90 border-white/20 shadow-2xl shadow-blue-500/10'
          : 'bg-white/70 border-white/10 shadow-xl'
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center h-12 md:h-14">
          {/* Logo */}
          <motion.div
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Link href="/" className="text-lg md:text-xl font-bold theme-text-gradient-primary-secondary">
              PropertyOS
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-1">
              {[
                { href: "#features", label: "Features" },
                { href: "#pricing", label: "Pakete" },
                { href: "#contact", label: "Kontakt" }
              ].map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  <Link
                    href={item.href}
                    className="relative text-gray-700 hover:text-blue-600 px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg hover:bg-white/50 group"
                  >
                    {item.label}
                    <motion.div
                      className="absolute bottom-0 left-1/2 w-0 h-0.5 theme-gradient-primary-secondary group-hover:w-full group-hover:left-0 transition-all duration-300"
                    />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Link
                href="#contact"
                className="text-blue-600 hover:text-blue-700 px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg hover:bg-blue-50/50"
              >
                Demo anfragen
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="#pricing"
                className="theme-gradient-primary-secondary text-white px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap"
              >
                Pakete
              </Link>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <motion.div
            className="lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600 p-2 rounded-lg hover:bg-white/50 transition-all duration-300"
              whileTap={{ scale: 0.95 }}
            >
              <motion.svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </motion.svg>
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        initial={false}
        animate={isOpen ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="lg:hidden overflow-hidden"
      >
        <motion.div
          className="mt-2 mx-4 rounded-xl bg-white/90 backdrop-blur-md border border-white/20 shadow-xl"
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-4 pt-4 pb-4 space-y-2">
            {[
              { href: "#features", label: "Features" },
              { href: "#pricing", label: "Pakete" },
              { href: "#contact", label: "Kontakt" }
            ].map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium rounded-lg hover:bg-blue-50/50 transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
            <div className="pt-3 border-t border-gray-200/50 space-y-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Link
                  href="#contact"
                  className="block px-3 py-2 text-base font-medium text-blue-600 hover:text-blue-700 rounded-lg hover:bg-blue-50/50 transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  Demo anfragen
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Link
                  href="#pricing"
                  className="block px-3 py-2 text-base font-medium theme-gradient-primary-secondary text-white rounded-lg text-center transition-all duration-300 shadow-lg"
                  onClick={() => setIsOpen(false)}
                >
                  Pakete vergleichen
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.nav>
  )
}
