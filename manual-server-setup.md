# Manuelle Server-Einrichtung

Da die automatische Installation Probleme macht, hier die Schritte zum manuellen Setup:

## 1. SSH auf den Server

```bash
ssh root@31.97.180.187
```

## 2. System aktualisieren

```bash
apt update && apt upgrade -y
```

## 3. Node.js installieren

```bash
# NodeSource Repository hinzufügen
curl -fsSL https://deb.nodesource.com/setup_lts.x | bash -

# Node.js installieren
apt-get install -y nodejs

# Version prüfen
node --version
npm --version
```

## 4. Zusätzliche Tools installieren

```bash
apt-get install -y nginx ufw rsync git
```

## 5. PM2 installieren

```bash
npm install -g pm2
```

## 6. Nginx konfigurieren

```bash
# Nginx Konfiguration erstellen
cat > /etc/nginx/sites-available/property-os-website << 'EOF'
server {
    listen 80;
    server_name _;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
EOF

# Site aktivieren
ln -sf /etc/nginx/sites-available/property-os-website /etc/nginx/sites-enabled/
rm -f /etc/nginx/sites-enabled/default

# Nginx testen und starten
nginx -t
systemctl enable nginx
systemctl start nginx
systemctl reload nginx
```

## 7. Firewall konfigurieren

```bash
ufw allow OpenSSH
ufw allow 'Nginx Full'
ufw --force enable
```

## 8. Website-Verzeichnis erstellen

```bash
mkdir -p /var/www/property-os-website
```

## 9. Status prüfen

```bash
# Services prüfen
systemctl status nginx
pm2 status

# Ports prüfen
netstat -tlnp | grep :80
netstat -tlnp | grep :3000
```

Nach diesem Setup kannst du das `./deploy.sh` Script ausführen!
