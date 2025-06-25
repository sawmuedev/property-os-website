'use client'

import React, { createContext, useContext, useEffect, useCallback } from 'react'
import { colorPalettes, defaultTheme } from '@/config/colorPalettes'

// Simplified theme context - only provides the fixed theme
const ThemeContext = createContext<{ currentPalette: typeof colorPalettes[typeof defaultTheme] } | undefined>(undefined)

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

interface ThemeProviderProps {
  children: React.ReactNode
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const currentPalette = colorPalettes[defaultTheme]

  // Apply the fixed theme colors to CSS custom properties and create dynamic Tailwind classes
  const applyTheme = useCallback(() => {
    const palette = currentPalette
    const root = document.documentElement

    // Apply CSS custom properties
    root.style.setProperty('--primary', palette.colors.primary)
    root.style.setProperty('--secondary', palette.colors.secondary)
    root.style.setProperty('--accent', palette.colors.accent)
    root.style.setProperty('--success', palette.colors.success)

    // Remove existing dynamic theme styles
    const existingStyle = document.getElementById('dynamic-theme-styles')
    if (existingStyle) {
      existingStyle.remove()
    }

    // Create dynamic CSS that overrides existing colors
    const style = document.createElement('style')
    style.id = 'dynamic-theme-styles'
    style.textContent = `
      /* Global color overrides for theme switching */

      /* Primary color overrides (gray-600, gray-700) */
      .from-gray-600 { --tw-gradient-from: ${palette.colors.primary} !important; }
      .to-gray-600 { --tw-gradient-to: ${palette.colors.primary} !important; }
      .from-gray-700 { --tw-gradient-from: ${palette.colors.primary}dd !important; }
      .to-gray-700 { --tw-gradient-to: ${palette.colors.primary}dd !important; }
      .bg-gray-600 { background-color: ${palette.colors.primary} !important; }
      .bg-gray-700 { background-color: ${palette.colors.primary}dd !important; }
      .text-gray-600 { color: ${palette.colors.primary} !important; }
      .border-gray-600 { border-color: ${palette.colors.primary} !important; }

      /* Secondary color overrides (blue-600, blue-700) */
      .from-blue-600 { --tw-gradient-from: ${palette.colors.secondary} !important; }
      .to-blue-600 { --tw-gradient-to: ${palette.colors.secondary} !important; }
      .from-blue-700 { --tw-gradient-from: ${palette.colors.secondary}dd !important; }
      .to-blue-700 { --tw-gradient-to: ${palette.colors.secondary}dd !important; }
      .bg-blue-600 { background-color: ${palette.colors.secondary} !important; }
      .bg-blue-700 { background-color: ${palette.colors.secondary}dd !important; }
      .text-blue-600 { color: ${palette.colors.secondary} !important; }
      .border-blue-600 { border-color: ${palette.colors.secondary} !important; }
      .hover\\:bg-blue-600:hover { background-color: ${palette.colors.secondary} !important; }
      .hover\\:text-blue-600:hover { color: ${palette.colors.secondary} !important; }
      .hover\\:from-blue-700:hover { --tw-gradient-from: ${palette.colors.secondary}dd !important; }
      .hover\\:to-blue-700:hover { --tw-gradient-to: ${palette.colors.secondary}dd !important; }

      /* Accent color overrides (emerald-600, emerald-700) */
      .from-emerald-600 { --tw-gradient-from: ${palette.colors.accent} !important; }
      .to-emerald-600 { --tw-gradient-to: ${palette.colors.accent} !important; }
      .from-emerald-700 { --tw-gradient-from: ${palette.colors.accent}dd !important; }
      .to-emerald-700 { --tw-gradient-to: ${palette.colors.accent}dd !important; }
      .bg-emerald-600 { background-color: ${palette.colors.accent} !important; }
      .text-emerald-600 { color: ${palette.colors.accent} !important; }
      .from-emerald-200 { --tw-gradient-from: ${palette.colors.accent}33 !important; }
      .to-emerald-200 { --tw-gradient-to: ${palette.colors.accent}33 !important; }
      .from-emerald-400 { --tw-gradient-from: ${palette.colors.accent}aa !important; }
      .to-emerald-400 { --tw-gradient-to: ${palette.colors.accent}aa !important; }
      .from-emerald-500 { --tw-gradient-from: ${palette.colors.accent}cc !important; }
      .to-emerald-500 { --tw-gradient-to: ${palette.colors.accent}cc !important; }
      .bg-emerald-100 { background-color: ${palette.colors.accent}22 !important; }

      /* Background gradient overrides for Hero and AI sections */
      .from-gray-900 { --tw-gradient-from: ${palette.colors.primary}22 !important; }
      .via-gray-800 { --tw-gradient-via: ${palette.colors.primary}33 !important; }
      .to-gray-900 { --tw-gradient-to: ${palette.colors.primary}22 !important; }
      .from-gray-800 { --tw-gradient-from: ${palette.colors.primary}33 !important; }
      .to-gray-800 { --tw-gradient-to: ${palette.colors.primary}33 !important; }
      .via-blue-900 { --tw-gradient-via: ${palette.colors.secondary}22 !important; }
      .from-blue-900 { --tw-gradient-from: ${palette.colors.secondary}22 !important; }
      .to-blue-900 { --tw-gradient-to: ${palette.colors.secondary}22 !important; }

      /* Floating particle colors */
      .from-blue-400\\/20 { --tw-gradient-from: ${palette.colors.secondary}33 !important; }
      .to-blue-600\\/20 { --tw-gradient-to: ${palette.colors.secondary}33 !important; }
      .from-emerald-400\\/20 { --tw-gradient-from: ${palette.colors.accent}33 !important; }
      .to-emerald-500\\/20 { --tw-gradient-to: ${palette.colors.accent}33 !important; }
      .from-blue-500\\/20 { --tw-gradient-from: ${palette.colors.secondary}33 !important; }
      .to-blue-600\\/20 { --tw-gradient-to: ${palette.colors.secondary}33 !important; }

      /* Background blend colors */
      .from-gray-50\\/80 { --tw-gradient-from: ${palette.colors.primary}11 !important; }
      .to-white\\/80 { --tw-gradient-to: rgba(255, 255, 255, 0.8) !important; }
      .from-blue-50\\/80 { --tw-gradient-from: ${palette.colors.secondary}11 !important; }
      .to-emerald-50\\/80 { --tw-gradient-to: ${palette.colors.accent}11 !important; }
      .from-gray-100\\/80 { --tw-gradient-from: ${palette.colors.primary}22 !important; }
      .to-gray-50\\/80 { --tw-gradient-to: ${palette.colors.primary}11 !important; }

      /* Additional background particle colors */
      .from-blue-200\\/20 { --tw-gradient-from: ${palette.colors.secondary}33 !important; }
      .to-emerald-200\\/20 { --tw-gradient-to: ${palette.colors.accent}33 !important; }
      .from-blue-200 { --tw-gradient-from: ${palette.colors.secondary}44 !important; }
      .to-emerald-200 { --tw-gradient-to: ${palette.colors.accent}44 !important; }

      /* Mix blend colors for floating elements */
      .from-blue-200 { --tw-gradient-from: ${palette.colors.secondary}44 !important; }
      .to-emerald-200 { --tw-gradient-to: ${palette.colors.accent}44 !important; }
      .from-emerald-200 { --tw-gradient-from: ${palette.colors.accent}44 !important; }
      .to-blue-200 { --tw-gradient-to: ${palette.colors.secondary}44 !important; }

      /* Shadow overrides */
      .shadow-blue-500\\/25 { box-shadow: 0 25px 50px -12px ${palette.colors.secondary}40 !important; }
      .hover\\:shadow-blue-500\\/25:hover { box-shadow: 0 25px 50px -12px ${palette.colors.secondary}40 !important; }

      /* Dark mode overrides */
      @media (prefers-color-scheme: dark) {
        :root {
          --primary: ${palette.colors.primaryDark || palette.colors.primary};
          --secondary: ${palette.colors.secondaryDark || palette.colors.secondary};
        }
      }

      /* Custom theme classes for manual use */
      .theme-text-gradient-all {
        background: linear-gradient(to right, ${palette.colors.primary}, ${palette.colors.secondary}, ${palette.colors.accent}) !important;
        -webkit-background-clip: text !important;
        background-clip: text !important;
        -webkit-text-fill-color: transparent !important;
      }

      .theme-text-gradient-primary-secondary {
        background: linear-gradient(to right, ${palette.colors.primary}, ${palette.colors.secondary}) !important;
        -webkit-background-clip: text !important;
        background-clip: text !important;
        -webkit-text-fill-color: transparent !important;
      }

      .theme-gradient-primary-secondary {
        background: linear-gradient(to right, ${palette.colors.primary}, ${palette.colors.secondary}) !important;
      }

      .theme-secondary { color: ${palette.colors.secondary} !important; }
      .theme-border-secondary { border-color: ${palette.colors.secondary} !important; }
      .theme-hover-secondary:hover { background-color: ${palette.colors.secondary} !important; }
      .theme-shadow-secondary { box-shadow: 0 10px 25px ${palette.colors.secondary}40 !important; }
    `
    document.head.appendChild(style)
  }, [currentPalette])

  // Apply theme on mount
  useEffect(() => {
    applyTheme()
  }, [applyTheme])

  const value = {
    currentPalette
  }

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}
