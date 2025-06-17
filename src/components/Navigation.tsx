'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              PropertyOS
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link 
                href="#features" 
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Features
              </Link>
              <Link 
                href="#pricing" 
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Pakete
              </Link>
              <Link 
                href="#contact" 
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Kontakt
              </Link>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link 
              href="#contact" 
              className="text-blue-600 hover:text-blue-700 px-3 py-2 text-sm font-medium transition-colors"
            >
              Demo anfragen
            </Link>
            <Link 
              href="#pricing" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              Pakete vergleichen
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
            <Link 
              href="#features" 
              className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Features
            </Link>
            <Link 
              href="#pricing" 
              className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Pakete
            </Link>
            <Link 
              href="#contact" 
              className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Kontakt
            </Link>
            <div className="pt-4 pb-3 border-t border-gray-200">
              <Link 
                href="#contact" 
                className="block px-3 py-2 text-base font-medium text-blue-600 hover:text-blue-700"
                onClick={() => setIsOpen(false)}
              >
                Demo anfragen
              </Link>
              <Link 
                href="#pricing" 
                className="block px-3 py-2 text-base font-medium bg-blue-600 text-white rounded-lg mx-3 mt-2 text-center hover:bg-blue-700"
                onClick={() => setIsOpen(false)}
              >
                Pakete vergleichen
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
