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

export type ThemeName =
  | 'charcoal-blue'
  | 'forest-emerald'
  | 'navy-coral'
  | 'slate-teal'
  | 'midnight-lime'
  | 'graphite-lime'
  | 'stone-terracotta'
  | 'sky-steel'
  | 'concrete-aqua'
  | 'pearl-sage'

export interface ThemeContextType {
  currentTheme: ThemeName
  setTheme: (theme: ThemeName) => void
  currentPalette: ColorPalette
}
