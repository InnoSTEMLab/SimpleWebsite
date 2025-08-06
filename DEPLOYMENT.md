# 🚀 Deployment Guide for IONOS

This guide will help you deploy your InnoSTEMLab website to IONOS hosting.

## 📋 Prerequisites

1. **IONOS Account**: You need an IONOS hosting account
2. **Domain**: A domain name (you can purchase one through IONOS)
3. **GitHub Account**: To store your code securely

## 🔒 Security First - Environment Variables

⚠️ **IMPORTANT**: Never commit your `.env.local` file to version control!

Your `.gitignore` file already protects your environment variables, but double-check that:
- `.env.local` is in your `.gitignore`
- You never accidentally commit it

## 📦 Step 1: Prepare Your Code

### 1.1 Build Your Project Locally
```bash
npm run build
```

### 1.2 Test Locally
```bash
npm start
```
Visit `http://localhost:3000` to make sure everything works.

## 🌐 Step 2: Choose Your IONOS Hosting Plan

For a Next.js application, you'll need:

### Recommended Plans:
- **IONOS VPS** (Virtual Private Server) - Most flexible
- **IONOS Web Hosting Plus** - Good for static sites
- **IONOS Managed WordPress** - Not recommended for Next.js

### Minimum Requirements:
- **Node.js support** (version 18 or higher)
- **SSH access** (for VPS)
- **Git support**

## 🚀 Step 3: Deploy to IONOS

### Option A: IONOS VPS (Recommended)

#### 3.1 Set Up Your VPS
1. Log into your IONOS account
2. Go to "VPS" section
3. Create a new VPS with:
   - **OS**: Ubuntu 22.04 LTS
   - **RAM**: At least 2GB
   - **Storage**: At least 20GB

#### 3.2 Connect to Your VPS
```bash
ssh root@your-server-ip
```

#### 3.3 Install Required Software
```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install Node.js 18
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install Git
sudo apt install git -y

# Install PM2 (process manager)
sudo npm install -g pm2

# Install Nginx
sudo apt install nginx -y
```

#### 3.4 Deploy Your Application
```bash
# Create app directory
mkdir /var/www/innostemlab
cd /var/www/innostemlab

# Clone your repository (replace with your GitHub repo)
git clone https://github.com/yourusername/your-repo-name.git .

# Install dependencies
npm install

# Create environment file
nano .env.local
```

#### 3.5 Set Up Environment Variables
In the `.env.local` file, add:
```
RESEND_API_KEY=your_actual_resend_api_key_here
NODE_ENV=production
```

#### 3.6 Build and Start the Application
```bash
# Build the application
npm run build

# Start with PM2
pm2 start npm --name "innostemlab" -- start

# Save PM2 configuration
pm2 save
pm2 startup
```

#### 3.7 Configure Nginx
```bash
sudo nano /etc/nginx/sites-available/innostemlab
```

Add this configuration:
```nginx
server {
    listen 80;
    server_name your-domain.com www.your-domain.com;

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
```

Enable the site:
```bash
sudo ln -s /etc/nginx/sites-available/innostemlab /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

### Option B: IONOS Web Hosting (Static Export)

If you want to use IONOS Web Hosting, you'll need to export your site as static files:

#### 3.1 Modify next.config.ts
```typescript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
};

export default nextConfig;
```

#### 3.2 Build Static Files
```bash
npm run build
```

#### 3.3 Upload to IONOS
1. Go to your IONOS Web Hosting control panel
2. Use File Manager or FTP to upload the `out` folder contents
3. Upload to the `public_html` directory

## 🔧 Step 4: Configure Your Domain

### 4.1 Point Domain to Your Server
1. In IONOS control panel, go to "Domains"
2. Select your domain
3. Go to "DNS Settings"
4. Add/update A record:
   - **Type**: A
   - **Name**: @ (or leave blank)
   - **Value**: Your server IP address
   - **TTL**: 3600

### 4.2 SSL Certificate (HTTPS)
IONOS usually provides free SSL certificates. Enable it in your hosting control panel.

## 🔄 Step 5: Continuous Deployment (Optional)

### Set up automatic deployments:
1. Create a GitHub repository
2. Push your code (without .env.local)
3. Set up GitHub Actions or use IONOS Git integration

## 🛠️ Step 6: Maintenance

### Update Your Application
```bash
# SSH into your server
ssh root@your-server-ip

# Navigate to your app
cd /var/www/innostemlab

# Pull latest changes
git pull

# Install dependencies
npm install

# Build
npm run build

# Restart application
pm2 restart innostemlab
```

### Monitor Your Application
```bash
# Check PM2 status
pm2 status

# View logs
pm2 logs innostemlab

# Monitor resources
pm2 monit
```

## 🆘 Troubleshooting

### Common Issues:
1. **Port 3000 not accessible**: Check firewall settings
2. **Environment variables not working**: Verify .env.local exists and has correct values
3. **Build errors**: Check Node.js version compatibility
4. **Domain not loading**: Check DNS settings and propagation time

### Useful Commands:
```bash
# Check Node.js version
node --version

# Check if port 3000 is listening
netstat -tlnp | grep :3000

# Check Nginx status
sudo systemctl status nginx

# Check PM2 status
pm2 status
```

## 📞 Support

- **IONOS Support**: Contact IONOS customer service
- **Next.js Documentation**: https://nextjs.org/docs/deployment
- **PM2 Documentation**: https://pm2.keymetrics.io/docs/

## 🔐 Security Checklist

- [ ] Environment variables are not in version control
- [ ] SSL certificate is enabled
- [ ] Firewall is configured
- [ ] Regular backups are set up
- [ ] PM2 is configured to restart on server reboot
- [ ] Nginx is properly configured
- [ ] Domain DNS is correctly set up

---

**Remember**: Keep your `.env.local` file secure and never share it publicly! 