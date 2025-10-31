# 🚀 Quick Start Guide

## The Issue You're Facing

If you see this error in Chrome:
```
This site can't provide a secure connection
kyetologistics.com sent an invalid response.
ERR_SSL_PROTOCOL_ERROR
```

**This means you're trying to access the production domain without proper SSL setup!**

---

## ✅ Solution: Use Localhost for Development

### For Local Development (Right Now!)

**Access your app at:**
```
http://localhost:3001
```

**NOT:**
- ❌ `https://kyetologistics.com` (requires SSL certificate)
- ❌ `https://localhost:3001` (no HTTPS in development)
- ❌ `http://kyetologistics.com` (will redirect to HTTPS)

---

## 📋 Step-by-Step Setup

### 1. Stop Any Running Servers
```bash
# Press Ctrl+C in any terminal running the dev server
```

### 2. Install Dependencies (if not already done)
```bash
npm install
```

### 3. Create Environment File
```bash
# Copy the example environment file
copy env.example .env.local
```

### 4. Start Development Server
```bash
npm run dev
```

### 5. Open Browser
Navigate to: **http://localhost:3001**

---

## 🌐 Development vs Production URLs

| Environment | URL | Protocol | SSL Required |
|------------|-----|----------|-------------|
| **Development** | `http://localhost:3001` | HTTP | ❌ No |
| **Production** | `https://kyetologistics.com` | HTTPS | ✅ Yes |

---

## 🔧 Common Issues & Fixes

### Issue 1: Port Already in Use
```bash
# Error: Port 3000 is already in use

# Solution: Use a different port
PORT=3001 npm run dev

# Or kill the process on port 3000
# Windows:
netstat -ano | findstr :3000
taskkill /PID <PID_NUMBER> /F

# Mac/Linux:
lsof -ti:3000 | xargs kill -9
```

### Issue 2: DNS Configuration Issues
```
# Error: DNS resolution failed

Solution:
1. Use localhost instead of domain name
2. Check your internet connection
3. Flush DNS cache:
   - Windows: ipconfig /flushdns
   - Mac: sudo dscacheutil -flushcache
   - Linux: sudo systemd-resolve --flush-caches
```

### Issue 3: SSL Protocol Error
```
# Error: ERR_SSL_PROTOCOL_ERROR

Solution:
1. Use HTTP not HTTPS in development
2. Access via localhost, not domain name
3. For production, see DEPLOYMENT.md for SSL setup
```

### Issue 4: Module Not Found
```bash
# Error: Cannot find module 'X'

# Solution: Clean install
rm -rf node_modules
rm package-lock.json
npm install
```

---

## 📱 Testing on Mobile Device (Same Network)

### 1. Find Your Local IP Address

**Windows:**
```bash
ipconfig
# Look for IPv4 Address (e.g., 192.168.1.100)
```

**Mac/Linux:**
```bash
ifconfig
# Look for inet (e.g., 192.168.1.100)
```

### 2. Update Next.js Config

Edit `next.config.ts`:
```typescript
// For testing on mobile
const nextConfig: NextConfig = {
  // ... other config
  experimental: {
    allowedOrigins: ['192.168.1.100:3001'], // Your local IP
  },
};
```

### 3. Start Server with Exposed Host
```bash
# Windows PowerShell
$env:HOST="0.0.0.0"; npm run dev

# Mac/Linux/Git Bash
HOST=0.0.0.0 npm run dev
```

### 4. Access from Mobile
Open browser on mobile and go to:
```
http://192.168.1.100:3001
```
(Replace with your actual local IP)

---

## 🚀 Deploying to Production

When you're ready to deploy to production with `https://kyetologistics.com`:

### Prerequisites Checklist
- [ ] Domain name purchased and configured
- [ ] DNS records point to your server
- [ ] SSL certificate obtained (Let's Encrypt recommended)
- [ ] Server/hosting platform ready
- [ ] Environment variables configured

### Quick Deploy Options

#### Option 1: Vercel (Easiest)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod

# Add custom domain in Vercel dashboard
# SSL is automatic!
```

#### Option 2: Netlify
```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy --prod

# Configure domain in Netlify dashboard
# SSL is automatic!
```

#### Option 3: Your Own Server
See detailed instructions in `DEPLOYMENT.md`

---

## 🔒 Security Notes

### Development
- Relaxed security headers
- HTTPS not required
- CORS enabled for localhost
- Hot reload enabled

### Production
- Strict security headers (HSTS, CSP)
- HTTPS required (SSL/TLS)
- CORS restricted to your domain
- Production optimizations enabled

---

## 📞 Need Help?

### Check These First:
1. **Terminal output** - Look for error messages
2. **Browser console** (F12 → Console tab)
3. **Network tab** (F12 → Network tab)

### Still Having Issues?

1. Clear browser cache (Ctrl+F5)
2. Try incognito/private mode
3. Try a different browser
4. Restart the dev server
5. Check if firewall is blocking the connection

---

## ⚡ Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server (requires build)
npm start

# Run linter
npm run lint

# Fix linting issues
npm run lint:fix

# Format code
npm run format

# Type check
npm run type-check

# Run tests
npm test
```

---

## 🎯 Quick Reference

### Local Development
```bash
# 1. Install
npm install

# 2. Setup environment
copy env.example .env.local

# 3. Run
npm run dev

# 4. Open browser
# http://localhost:3001
```

### Production Deployment
```bash
# 1. Build
npm run build

# 2. Test production build locally
npm start

# 3. Deploy
vercel --prod
# or
netlify deploy --prod
```

---

## ✅ Success Checklist

When you see this, you're all set:
```
✓ Ready in 2.3s
✓ Local:        http://localhost:3001
✓ Network:      http://192.168.1.100:3001
```

Open http://localhost:3001 in your browser and you should see your app! 🎉

---

**Remember:** 
- Development = `http://localhost:3001`
- Production = `https://kyetologistics.com` (with SSL)

Never try to access the production domain without proper SSL configuration!

