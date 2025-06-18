import { ColorPalette, ThemeName } from '@/types/theme'

export const colorPalettes: Record<ThemeName, ColorPalette> = {
  'charcoal-blue': {
    name: 'charcoal-blue',
    displayName: 'Charcoal & Electric Blue',
    description: 'Industrial-Modern (Aktuell)',
    colors: {
      primary: '#374151',      // Charcoal
      secondary: '#3b82f6',    // Electric Blue
      accent: '#06d6a0',       // Mint
      success: '#10b981',
      primaryDark: '#4b5563',  // Lighter Charcoal for dark mode
      secondaryDark: '#60a5fa' // Lighter Electric Blue for dark mode
    }
  },
  
  'forest-emerald': {
    name: 'forest-emerald',
    displayName: 'Deep Forest & Emerald',
    description: 'Natürlich-Tech',
    colors: {
      primary: '#0f4c3a',      // Tiefes Waldgrün
      secondary: '#10b981',    // Smaragdgrün
      accent: '#fbbf24',       // Warmes Gold
      success: '#059669',
      primaryDark: '#065f46',  // Lighter forest for dark mode
      secondaryDark: '#34d399' // Lighter emerald for dark mode
    }
  },
  
  'navy-coral': {
    name: 'navy-coral',
    displayName: 'Navy & Coral',
    description: 'Sophisticated',
    colors: {
      primary: '#1e3a8a',      // Navy
      secondary: '#f97316',    // Warmes Orange/Coral
      accent: '#8b5cf6',       // Violett (subtiler)
      success: '#10b981',
      primaryDark: '#3730a3',  // Lighter navy for dark mode
      secondaryDark: '#fb923c' // Lighter coral for dark mode
    }
  },
  
  'slate-teal': {
    name: 'slate-teal',
    displayName: 'Slate & Teal',
    description: 'Minimalistisch',
    colors: {
      primary: '#475569',      // Slate
      secondary: '#0d9488',    // Teal
      accent: '#eab308',       // Gelb
      success: '#059669',
      primaryDark: '#64748b',  // Lighter slate for dark mode
      secondaryDark: '#14b8a6' // Lighter teal for dark mode
    }
  },
  
  'midnight-lime': {
    name: 'midnight-lime',
    displayName: 'Midnight & Lime',
    description: 'Futuristisch',
    colors: {
      primary: '#1f2937',      // Midnight
      secondary: '#84cc16',    // Lime
      accent: '#f59e0b',       // Amber
      success: '#10b981',
      primaryDark: '#374151',  // Lighter midnight for dark mode
      secondaryDark: '#a3e635' // Lighter lime for dark mode
    }
  },

  'graphite-lime': {
    name: 'graphite-lime',
    displayName: 'Graphite & Fresh Lime',
    description: 'Smart Bold',
    colors: {
      primary: '#2d2d2d',      // Graphit-Schwarz
      secondary: '#a3e635',    // Lime
      accent: '#3b82f6',       // Elektroblau
      success: '#10b981',
      primaryDark: '#404040',  // Lighter graphite for dark mode
      secondaryDark: '#bef264' // Lighter lime for dark mode
    }
  },

  'stone-terracotta': {
    name: 'stone-terracotta',
    displayName: 'Stone & Terracotta',
    description: 'Warm Tech-Trust',
    colors: {
      primary: '#3f3f46',      // Stone-Grey
      secondary: '#f97316',    // Terracotta
      accent: '#10b981',       // Smaragdgrün
      success: '#059669',
      primaryDark: '#52525b',  // Lighter stone for dark mode
      secondaryDark: '#fb923c' // Lighter terracotta for dark mode
    }
  },

  'sky-steel': {
    name: 'sky-steel',
    displayName: 'Sky & Steel',
    description: 'Cloud-Tech',
    colors: {
      primary: '#1e40af',      // Royal Blue
      secondary: '#60a5fa',    // Sky Blue
      accent: '#e0f2fe',       // Eisblau
      success: '#10b981',
      primaryDark: '#3730a3',  // Lighter royal blue for dark mode
      secondaryDark: '#93c5fd' // Lighter sky blue for dark mode
    }
  },

  'concrete-aqua': {
    name: 'concrete-aqua',
    displayName: 'Concrete & Neon Aqua',
    description: 'Futuristisch-Urban',
    colors: {
      primary: '#1e1e1e',      // Concrete Black
      secondary: '#67e8f9',    // Neon Aqua
      accent: '#facc15',       // Digital Yellow
      success: '#10b981',
      primaryDark: '#2d2d2d',  // Lighter concrete for dark mode
      secondaryDark: '#a5f3fc' // Lighter aqua for dark mode
    }
  },

  'pearl-sage': {
    name: 'pearl-sage',
    displayName: 'Pearl & Sage',
    description: 'Clean Professional',
    colors: {
      primary: '#6b7280',      // Warm Grey
      secondary: '#059669',    // Sage Green
      accent: '#f59e0b',       // Warm Amber
      success: '#10b981',
      primaryDark: '#9ca3af',  // Lighter grey for dark mode
      secondaryDark: '#34d399' // Lighter sage for dark mode
    }
  }
}

export const defaultTheme: ThemeName = 'charcoal-blue'
