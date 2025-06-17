#!/bin/bash

# Quick Server Setup - Führe das auf dem Server aus

echo "🔧 Quick Server Setup..."

# Node.js installieren
curl -fsSL https://deb.nodesource.com/setup_lts.x | bash -
apt-get install -y nodejs

# PM2 installieren
npm install -g pm2

# Nginx installieren
apt-get install -y nginx

# Nginx konfigurieren
cat > /etc/nginx/sites-available/default << 'EOF'
server {
    listen 80 default_server;
    listen [::]:80 default_server;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
EOF

# Nginx starten
systemctl enable nginx
systemctl restart nginx

# Website-Verzeichnis erstellen
mkdir -p /var/www/property-os-website

echo "✅ Setup completed! Now run ./deploy.sh from your local machine."
