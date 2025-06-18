'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SwatchIcon } from '@heroicons/react/24/outline'
import { useTheme } from '@/contexts/ThemeContext'
import { colorPalettes } from '@/config/colorPalettes'
import { ThemeName } from '@/types/theme'

export default function ThemeSwitcher() {
  const [isOpen, setIsOpen] = useState(false)
  const { currentTheme, setTheme } = useTheme()
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleThemeChange = (themeName: ThemeName) => {
    setTheme(themeName)
    setIsOpen(false)
  }

  return (
    <div className="theme-switcher relative" ref={dropdownRef}>
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-white/50 transition-all duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <SwatchIcon className="w-4 h-4" />
        <span className="hidden sm:inline">Farben</span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="theme-switcher-dropdown"
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <div className="p-3">
              <h3 className="text-sm font-semibold text-gray-900 mb-3">
                Farbpalette wählen
              </h3>
              
              <div className="space-y-1">
                {Object.entries(colorPalettes).map(([themeName, palette]) => (
                  <motion.div
                    key={themeName}
                    className={`theme-option ${currentTheme === themeName ? 'active' : ''}`}
                    onClick={() => handleThemeChange(themeName as ThemeName)}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="font-medium text-sm">
                          {palette.displayName}
                        </div>
                        <div className="text-xs text-gray-500 mt-0.5">
                          {palette.description}
                        </div>
                      </div>
                      
                      {/* Color Preview */}
                      <div className="flex gap-1 ml-3">
                        <div 
                          className="w-4 h-4 rounded-full border border-white/50 shadow-sm"
                          style={{ backgroundColor: palette.colors.primary }}
                        />
                        <div 
                          className="w-4 h-4 rounded-full border border-white/50 shadow-sm"
                          style={{ backgroundColor: palette.colors.secondary }}
                        />
                        <div 
                          className="w-4 h-4 rounded-full border border-white/50 shadow-sm"
                          style={{ backgroundColor: palette.colors.accent }}
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-3 pt-3 border-t border-gray-200">
                <p className="text-xs text-gray-500 text-center">
                  Live-Vorschau • Einfach zum Testen
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
