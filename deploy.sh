#!/bin/bash

# Property OS Website Deployment Script
# Dieses Script baut die Next.js App und deployed sie auf den Server

set -e  # Exit bei Fehlern

# Konfiguration
SERVER_HOST="31.97.180.187"
SERVER_USER="root"
SERVER_PATH="/var/www/property-os-website"
SSH_OPTS="-o ControlMaster=auto -o ControlPath=/tmp/ssh-%r@%h:%p -o ControlPersist=300"

echo "🚀 Starting deployment process..."

# 1. Build der Next.js App
echo "📦 Building Next.js application..."
npm run build

# 2. Erstelle SSH-Verbindung und führe alle Server-Befehle aus
echo "📁 Setting up server and uploading files..."
echo "Enter SSH passphrase once:"

# Erstelle Master-Verbindung
ssh ${SSH_OPTS} ${SERVER_USER}@${SERVER_HOST} "mkdir -p ${SERVER_PATH}" &
SSH_PID=$!
wait $SSH_PID

# 3. Upload der Build-Dateien mit SSH-Multiplexing
echo "⬆️  Uploading files to server..."
if [ -d ".next" ]; then
    # Upload package.json und package-lock.json
    echo "📄 Uploading package files..."
    scp ${SSH_OPTS} package.json package-lock.json ${SERVER_USER}@${SERVER_HOST}:${SERVER_PATH}/

    # Upload .next Ordner
    echo "📦 Uploading .next directory..."
    rsync -avz -e "ssh ${SSH_OPTS}" --exclude 'cache' .next/ ${SERVER_USER}@${SERVER_HOST}:${SERVER_PATH}/.next/

    # Upload andere wichtige Dateien
    echo "📄 Uploading config files..."
    scp ${SSH_OPTS} next.config.ts ${SERVER_USER}@${SERVER_HOST}:${SERVER_PATH}/ || true

    # Upload public Ordner
    echo "🖼️  Uploading public directory..."
    rsync -avz -e "ssh ${SSH_OPTS}" public/ ${SERVER_USER}@${SERVER_HOST}:${SERVER_PATH}/public/
else
    echo "❌ Build directory not found. Please run 'npm run build' first."
    exit 1
fi

# 4. Install dependencies und PM2 Setup in einem SSH-Befehl
echo "📥 Installing dependencies and setting up PM2..."
ssh ${SSH_OPTS} ${SERVER_USER}@${SERVER_HOST} "
    cd ${SERVER_PATH}

    # Install dependencies
    echo 'Installing dependencies...'
    npm ci --only=production

    # PM2 Setup
    echo 'Setting up PM2...'
    pm2 stop property-os-website || true
    pm2 delete property-os-website || true
    pm2 start npm --name 'property-os-website' -- start
    pm2 save

    echo 'Deployment completed on server!'
"

# 5. Schließe SSH-Multiplexing
echo "🔒 Closing SSH connection..."
ssh ${SSH_OPTS} -O exit ${SERVER_USER}@${SERVER_HOST} 2>/dev/null || true

echo "✅ Deployment completed successfully!"
echo "🌐 Your website should be running on the server."
echo ""
echo "Useful commands:"
echo "  - Check status: ssh ${SERVER_USER}@${SERVER_HOST} 'pm2 status'"
echo "  - View logs: ssh ${SERVER_USER}@${SERVER_HOST} 'pm2 logs property-os-website'"
echo "  - Restart: ssh ${SERVER_USER}@${SERVER_HOST} 'pm2 restart property-os-website'"
