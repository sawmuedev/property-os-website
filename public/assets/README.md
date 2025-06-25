# Assets Ordner

Dieser Ordner enthält alle statischen Assets für die PropertyOS Website.

## Struktur

### `/screenshots/`
Hier kommen alle App-Screenshots rein:
- Dashboard-Screenshots
- Feature-Screenshots (Chatbot, Social Media CMS, etc.)
- Mobile App Screenshots
- Desktop/Tablet Ansichten

**Empfohlene Dateiformate:**
- PNG für Screenshots mit Transparenz
- JPG für Screenshots ohne Transparenz
- WebP für optimierte Ladezeiten

**Empfohlene Namenskonvention:**
- `dashboard-overview.png`
- `chatbot-interface.png`
- `social-media-cms.png`
- `mobile-app-home.png`
- etc.

### `/logos/`
Hier kommen alle Partner- und Testimonial-Logos rein:
- GCSP (German Council of Shopping Places) Logo
- Google Partner Logo
- SSL/Sicherheits-Badges
- Kunden-/Center-Logos
- Weitere Partner-Logos

**Empfohlene Dateiformate:**
- SVG für skalierbare Logos (bevorzugt)
- PNG mit Transparenz für komplexe Logos
- Verschiedene Größen (z.B. logo-gcsp-small.svg, logo-gcsp-large.svg)

**Empfohlene Namenskonvention:**
- `gcsp-logo.svg`
- `google-partner.svg`
- `ssl-badge.svg`
- `center-[name]-logo.png`
- etc.

## Integration in die Website

Die Assets können dann in den React-Komponenten verwendet werden:

```jsx
// Screenshots
import dashboardImage from '/assets/screenshots/dashboard-overview.png'

// Logos
import gcspLogo from '/assets/logos/gcsp-logo.svg'
```

## Optimierung

Für beste Performance sollten alle Bilder optimiert werden:
- Screenshots: Komprimierung ohne sichtbaren Qualitätsverlust
- Logos: SVG bevorzugt, ansonsten PNG mit Transparenz
- Responsive Varianten für verschiedene Bildschirmgrößen
