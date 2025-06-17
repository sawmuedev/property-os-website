#!/bin/bash

# Server Setup Script für Ubuntu VPS
# Dieses Script installiert alle notwendigen Tools auf dem Server

set -e

echo "🔧 Setting up server environment..."

# 1. System Update
echo "📦 Updating system packages..."
apt update && apt upgrade -y

# 2. Install Node.js (using NodeSource repository for latest LTS)
echo "📥 Installing Node.js..."
curl -fsSL https://deb.nodesource.com/setup_lts.x | bash -
apt-get install -y nodejs

# 3. Install additional tools
echo "🛠️  Installing additional tools..."
apt-get install -y \
    nginx \
    ufw \
    certbot \
    python3-certbot-nginx \
    rsync \
    git

# 4. Install PM2 globally
echo "⚙️  Installing PM2 process manager..."
npm install -g pm2

# 5. Setup Nginx
echo "🌐 Configuring Nginx..."
cat > /etc/nginx/sites-available/property-os-website << 'EOF'
server {
    listen 80;
    server_name _;  # Replace with your domain

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

# Enable the site
ln -sf /etc/nginx/sites-available/property-os-website /etc/nginx/sites-enabled/
rm -f /etc/nginx/sites-enabled/default

# Test nginx configuration
nginx -t

# 6. Setup Firewall
echo "🔒 Configuring firewall..."
ufw allow OpenSSH
ufw allow 'Nginx Full'
ufw --force enable

# 7. Start services
echo "🚀 Starting services..."
systemctl enable nginx
systemctl start nginx
systemctl reload nginx

# 8. Create website directory
echo "📁 Creating website directory..."
mkdir -p /var/www/property-os-website
chown -R www-data:www-data /var/www/property-os-website

echo "✅ Server setup completed!"
echo ""
echo "Next steps:"
echo "1. Update the server_name in /etc/nginx/sites-available/property-os-website with your domain"
echo "2. Run the deploy.sh script from your local machine"
echo "3. Setup SSL with: certbot --nginx -d yourdomain.com"
echo ""
echo "Installed versions:"
node --version
npm --version
pm2 --version
nginx -v
