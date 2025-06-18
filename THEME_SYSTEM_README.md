# Theme System - Farbpaletten Switcher

## 🎨 Übersicht
Dieses System ermöglicht es, live zwischen verschiedenen Farbpaletten zu wechseln, um die beste Option für die Website zu finden.

## 📁 Hinzugefügte Dateien
- `src/types/theme.ts` - TypeScript Typen für das Theme System
- `src/config/colorPalettes.ts` - Definition aller 5 Farbpaletten
- `src/contexts/ThemeContext.tsx` - React Context für Theme Management
- `src/components/ThemeSwitcher.tsx` - UI Komponente für den Farbpaletten-Switcher

## 🔧 Modifizierte Dateien
- `src/app/layout.tsx` - ThemeProvider hinzugefügt
- `src/components/Navigation.tsx` - ThemeSwitcher integriert
- `src/app/globals.css` - CSS für Theme Switcher und dynamische Farben

## 🎯 Verfügbare Farbpaletten

1. **Charcoal & Electric Blue** (Aktuell)
   - Primary: #374151, Secondary: #3b82f6, Accent: #06d6a0

2. **Deep Forest & Emerald** (Natürlich-Tech)
   - Primary: #0f4c3a, Secondary: #10b981, Accent: #fbbf24

3. **Navy & Coral** (Sophisticated)
   - Primary: #1e3a8a, Secondary: #f97316, Accent: #8b5cf6

4. **Slate & Teal** (Minimalistisch)
   - Primary: #475569, Secondary: #0d9488, Accent: #eab308

5. **Midnight & Lime** (Futuristisch)
   - Primary: #1f2937, Secondary: #84cc16, Accent: #f59e0b

## 🚀 Verwendung
Der Theme Switcher ist in der Navigation verfügbar (Desktop & Mobile). Klicke auf das Farbpaletten-Icon, um zwischen den Optionen zu wechseln.

## 🗑️ System entfernen (nach Entscheidung)

### Dateien löschen:
```bash
rm src/types/theme.ts
rm src/config/colorPalettes.ts
rm src/contexts/ThemeContext.tsx
rm src/components/ThemeSwitcher.tsx
```

### Aus Navigation entfernen:
- Import `ThemeSwitcher` entfernen
- `<ThemeSwitcher />` Komponenten entfernen

### Aus Layout entfernen:
- Import `ThemeProvider` entfernen
- `<ThemeProvider>` wrapper entfernen

### CSS bereinigen:
- Theme Switcher Styles aus `globals.css` entfernen (Zeilen mit Kommentar "Theme Switcher Styles")
- CSS Custom Properties auf finale Farben setzen

### Finale Farbpalette implementieren:
Ersetze die CSS Custom Properties in `globals.css` mit der gewählten Farbpalette.

## 💾 Persistierung
Das gewählte Theme wird im localStorage gespeichert und beim nächsten Besuch automatisch geladen.
