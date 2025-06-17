# Property OS Website

Eine moderne Next.js Website gehostet auf einem Hostinger VPS.

## 🚀 Quick Start

### Lokale Entwicklung

```bash
# Dependencies installieren
npm install

# Development Server starten
npm run dev
```

Die Website ist dann unter [http://localhost:3000](http://localhost:3000) erreichbar.

### Deployment auf Server

#### Einmalige Server-Einrichtung

1. **Server-Setup ausführen** (einmalig):
```bash
# Script auf Server kopieren und ausführen
scp server-setup.sh root@31.97.180.187:/tmp/
ssh root@31.97.180.187 "chmod +x /tmp/server-setup.sh && /tmp/server-setup.sh"
```

2. **Domain konfigurieren** (optional):
```bash
# Nginx Konfiguration anpassen
ssh root@31.97.180.187 "nano /etc/nginx/sites-available/property-os-website"
# server_name mit deiner Domain ersetzen
```

3. **SSL einrichten** (optional):
```bash
ssh root@31.97.180.187 "certbot --nginx -d deine-domain.com"
```

#### Website deployen

```bash
# Einfaches Deployment
./deploy.sh
```

Das Script:
- Baut die Next.js App
- Lädt alle Dateien auf den Server hoch
- Installiert Dependencies
- Startet die App mit PM2

## 📁 Projekt-Struktur

```
property-os-website/
├── src/app/          # Next.js App Router
├── public/           # Statische Dateien
├── deploy.sh         # Deployment Script
├── server-setup.sh   # Server Einrichtung
└── next.config.ts    # Next.js Konfiguration
```

## 🛠️ Nützliche Befehle

### Lokal
```bash
npm run dev      # Development Server
npm run build    # Production Build
npm run start    # Production Server
npm run lint     # Code Linting
```

### Server Management
```bash
# Status prüfen
ssh root@31.97.180.187 'pm2 status'

# Logs anzeigen
ssh root@31.97.180.187 'pm2 logs property-os-website'

# App neu starten
ssh root@31.97.180.187 'pm2 restart property-os-website'

# Nginx neu laden
ssh root@31.97.180.187 'systemctl reload nginx'
```

## 🔧 Technologie-Stack

- **Framework**: Next.js 15 mit App Router
- **Styling**: Tailwind CSS
- **TypeScript**: Vollständig typisiert
- **Server**: Ubuntu VPS mit Nginx + PM2
- **Deployment**: Automatisiert mit rsync

## 📝 Entwicklung

Die Website nutzt moderne Next.js Features:
- App Router für bessere Performance
- TypeScript für Type Safety
- Tailwind CSS für schnelles Styling
- Automatisches Code Splitting

Änderungen werden automatisch im Development Mode neu geladen.
