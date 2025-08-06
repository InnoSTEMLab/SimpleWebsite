# 🚀 Quick Deployment Checklist

## ✅ Pre-Deployment Checklist

### Security
- [ ] `.env.local` file exists with your `RESEND_API_KEY`
- [ ] `.env.local` is in `.gitignore` (already done ✅)
- [ ] You've tested the contact form locally

### Code Preparation
- [ ] Run `./deploy-prepare.sh` to test everything
- [ ] All pages work correctly
- [ ] Contact form sends emails successfully
- [ ] "Sign Up for Updates" buttons link to Google Forms

## 🌐 IONOS Setup Steps

### 1. Choose Hosting Plan
- [ ] **IONOS VPS** (Recommended) - Full Node.js support
- [ ] **IONOS Web Hosting** - Static files only (requires config change)

### 2. Domain Setup
- [ ] Purchase domain through IONOS (or use existing)
- [ ] Point DNS to your server

### 3. Server Setup (VPS Option)
- [ ] Create VPS with Ubuntu 22.04
- [ ] Install Node.js 18+
- [ ] Install PM2 and Nginx
- [ ] Configure environment variables
- [ ] Deploy your code

## 🔧 Quick Commands

### Test Locally
```bash
npm run build
npm start
```

### Prepare for Deployment
```bash
./deploy-prepare.sh
```

### Deploy to VPS
```bash
# On your VPS server:
git clone your-repo
npm install
# Add .env.local with RESEND_API_KEY
npm run build
pm2 start npm --name "innostemlab" -- start
```

## 🆘 Need Help?

1. **IONOS Support**: Contact their customer service
2. **Technical Issues**: Check the full `DEPLOYMENT.md` guide
3. **Environment Variables**: Make sure `.env.local` is secure

## 🔐 Security Reminder

**NEVER** commit or share your `.env.local` file!
- ✅ It's already in `.gitignore`
- ✅ Keep it secure on your server
- ✅ Don't share it in support tickets

---

**Your website is ready to deploy!** 🎉 