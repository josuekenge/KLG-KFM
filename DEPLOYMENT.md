# Deployment Guide - Kyeto Fleet Management

This guide covers deploying your application with proper SSL/HTTPS configuration.

## 🔧 Development vs Production

### Development (Local)
- **URL**: `http://localhost:3001` or `http://localhost:3000`
- **Protocol**: HTTP (no SSL required)
- **Security**: Relaxed CSP for hot-reload and development tools
- **HSTS**: Disabled

### Production
- **URL**: `https://kyetofleet.com` or `https://kyetologistics.com`
- **Protocol**: HTTPS (SSL/TLS required)
- **Security**: Strict CSP, HSTS, and security headers
- **DNS**: Must be properly configured

---

## 🌐 DNS Configuration

### For Production Deployment

1. **Domain Setup**
   - Purchase domain from registrar (e.g., Namecheap, GoDaddy, Google Domains)
   - Point DNS records to your hosting server

2. **DNS Records Required**
   ```
   Type    Name    Value               TTL
   A       @       YOUR_SERVER_IP      300
   A       www     YOUR_SERVER_IP      300
   CNAME   *       kyetologistics.com  300
   ```

3. **DNS Propagation**
   - Takes 24-48 hours to fully propagate
   - Check status: https://dnschecker.org

---

## 🔒 SSL/TLS Certificate Setup

### Option 1: Let's Encrypt (Free - Recommended)

1. **Install Certbot**
   ```bash
   # Ubuntu/Debian
   sudo apt-get update
   sudo apt-get install certbot python3-certbot-nginx

   # CentOS/RHEL
   sudo yum install certbot python3-certbot-nginx
   ```

2. **Generate Certificate**
   ```bash
   sudo certbot --nginx -d kyetologistics.com -d www.kyetologistics.com
   ```

3. **Auto-Renewal**
   ```bash
   sudo certbot renew --dry-run
   ```

### Option 2: Cloudflare (Free SSL + CDN)

1. **Sign up** at https://cloudflare.com
2. **Add your site** and update nameservers at your domain registrar
3. **Enable SSL/TLS**:
   - Go to SSL/TLS → Overview
   - Select "Full (strict)" or "Full"
4. **Enable Always Use HTTPS**:
   - SSL/TLS → Edge Certificates
   - Toggle "Always Use HTTPS"

### Option 3: Commercial SSL Certificate

1. Purchase from providers like:
   - DigiCert
   - Comodo
   - GeoTrust
   
2. Install on your server following provider instructions

---

## 🚀 Deployment Platforms

### Vercel (Recommended for Next.js)

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel --prod
   ```

3. **Custom Domain**
   - Go to Project Settings → Domains
   - Add `kyetologistics.com`
   - Vercel provides SSL automatically

4. **Environment Variables**
   ```bash
   vercel env add NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY
   vercel env add NEXT_PUBLIC_GA_MEASUREMENT_ID
   ```

### AWS (EC2 + ALB)

1. **Create EC2 Instance**
2. **Set up Application Load Balancer**
3. **Request SSL Certificate from ACM**
4. **Configure ALB Listener**:
   - HTTP (80) → Redirect to HTTPS
   - HTTPS (443) → Target Group

### Netlify

1. **Connect Git Repository**
2. **Build Settings**:
   - Build command: `npm run build`
   - Publish directory: `.next`
3. **Domain Settings**:
   - Add custom domain
   - SSL is automatic

### Docker + Nginx

1. **Build Docker Image**
   ```bash
   docker build -t kfm-app .
   ```

2. **Nginx Configuration** (`/etc/nginx/sites-available/default`)
   ```nginx
   server {
       listen 80;
       server_name kyetologistics.com www.kyetologistics.com;
       return 301 https://$server_name$request_uri;
   }

   server {
       listen 443 ssl http2;
       server_name kyetologistics.com www.kyetologistics.com;

       ssl_certificate /etc/letsencrypt/live/kyetologistics.com/fullchain.pem;
       ssl_certificate_key /etc/letsencrypt/live/kyetologistics.com/privkey.pem;
       
       ssl_protocols TLSv1.2 TLSv1.3;
       ssl_ciphers HIGH:!aNULL:!MD5;
       ssl_prefer_server_ciphers on;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

3. **Start Services**
   ```bash
   docker run -d -p 3000:3000 kfm-app
   sudo systemctl restart nginx
   ```

---

## 🔐 Security Checklist

### Pre-Deployment
- [ ] Update `NEXT_PUBLIC_APP_URL` in environment variables
- [ ] Add Web3Forms API key
- [ ] Add Google Analytics ID
- [ ] Enable production environment variables
- [ ] Test SSL certificate locally

### Post-Deployment
- [ ] Verify HTTPS redirects work
- [ ] Test all forms submit properly
- [ ] Check Google Analytics tracking
- [ ] Run Lighthouse audit
- [ ] Test on multiple browsers
- [ ] Verify DNS propagation
- [ ] Set up monitoring (UptimeRobot, Pingdom)

---

## 🔍 Troubleshooting

### ERR_SSL_PROTOCOL_ERROR

**Problem**: Browser shows SSL protocol error

**Solutions**:
1. **Development**: Use `http://localhost:3001` (no HTTPS)
2. **Production**: 
   - Verify SSL certificate is installed
   - Check certificate hasn't expired
   - Ensure DNS points to correct server
   - Clear browser cache and cookies

### Mixed Content Warnings

**Problem**: Page loads but some resources blocked

**Solution**: Update all URLs to use HTTPS:
```javascript
// Bad
const apiUrl = "http://api.example.com";

// Good
const apiUrl = "https://api.example.com";
```

### DNS Not Resolving

**Problem**: Domain doesn't load

**Solutions**:
1. Check DNS propagation: https://dnschecker.org
2. Verify nameservers at registrar
3. Wait 24-48 hours for full propagation
4. Flush local DNS: `ipconfig /flushdns` (Windows) or `sudo dscacheutil -flushcache` (Mac)

### HSTS Errors

**Problem**: Browser forces HTTPS but cert is invalid

**Solution**:
1. Clear HSTS settings in browser:
   - Chrome: `chrome://net-internals/#hsts`
   - Firefox: Delete `SiteSecurityServiceState.txt`
2. Fix SSL certificate
3. Retry

---

## 📊 Monitoring & Analytics

### Setup Monitoring

1. **UptimeRobot** (Free)
   - Monitor: https://kyetologistics.com
   - Alert on downtime

2. **Google Search Console**
   - Verify site ownership
   - Monitor indexing status
   - Fix crawl errors

3. **Cloudflare Analytics** (if using Cloudflare)
   - Traffic analytics
   - Security insights
   - Performance metrics

---

## 🎯 Performance Optimization

### CDN Setup
- Use Cloudflare for global CDN
- Cache static assets
- Enable Brotli compression

### Caching Headers
Already configured in `next.config.ts`:
- Static assets: 1 year
- Fonts: Immutable
- API: No cache

### Image Optimization
- Next.js automatic image optimization
- Supports AVIF and WebP
- Responsive images

---

## 📞 Support

If you encounter issues during deployment:

1. **Check logs**: `vercel logs` or server logs
2. **Review documentation**: https://nextjs.org/docs/deployment
3. **Contact hosting support**
4. **Check firewall rules**
5. **Verify environment variables are set**

---

## 🎉 Quick Start Commands

```bash
# Development
npm run dev                 # Start dev server on http://localhost:3001

# Production Build
npm run build              # Build production bundle
npm start                  # Start production server (requires build)

# Deploy to Vercel
vercel --prod             # Deploy to production

# Docker
docker-compose up -d      # Start with Docker Compose
```

---

**Note**: Always test thoroughly in a staging environment before deploying to production.

