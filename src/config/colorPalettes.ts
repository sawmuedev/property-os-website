// Fixed color palette for the website - Charcoal & Electric Blue
export interface ColorPalette {
  name: string
  displayName: string
  description: string
  colors: {
    primary: string
    secondary: string
    accent: string
    success: string
    // Dark mode variants
    primaryDark?: string
    secondaryDark?: string
  }
}

export const colorPalettes = {
  'charcoal-blue': {
    name: 'charcoal-blue',
    displayName: 'Charcoal & Electric Blue',
    description: 'Industrial-Modern',
    colors: {
      primary: '#374151',      // Charcoal
      secondary: '#3b82f6',    // Electric Blue
      accent: '#06d6a0',       // Mint
      success: '#10b981',
      primaryDark: '#4b5563',  // Lighter Charcoal for dark mode
      secondaryDark: '#60a5fa' // Lighter Electric Blue for dark mode
    }
  }
} as const

export const defaultTheme = 'charcoal-blue' as const
