# 🚀 Netlify Deployment Guide for Kyeto Logistics

Your site is configured to deploy to **kyetologistics.com** via Netlify.

---

## ✅ Current Setup

- **Domain**: `kyetologistics.com` & `www.kyetologistics.com`
- **DNS Provider**: Squarespace
- **Hosting**: Netlify
- **SSL**: Automatic (provided by Netlify)

---

## 📋 Deployment Steps

### 1. Connect Repository to Netlify

If not already connected:

1. Go to [Netlify Dashboard](https://app.netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Connect your Git provider (GitHub, GitLab, or Bitbucket)
4. Select this repository
5. Netlify will auto-detect Next.js settings

### 2. Build Settings (Auto-configured via `netlify.toml`)

The `netlify.toml` file in the root directory contains all build settings:

```toml
[build]
  command = "npm run build"
  publish = ".next"

[build.environment]
  NODE_VERSION = "18"
```

### 3. Environment Variables

Add these in Netlify Dashboard → Site settings → Environment variables:

**Required:**
```
NODE_ENV=production
NEXT_PUBLIC_APP_URL=https://kyetologistics.com
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your-key-here
```

**Optional:**
```
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_BROWSER_OPTIMIZATION=true
NEXT_PUBLIC_PERFORMANCE_MONITORING=true
```

### 4. Domain Configuration

#### If Domain is Already Connected:

Your domain should already be pointing to Netlify. Verify in:
- Netlify Dashboard → Domain settings
- Should show: `kyetologistics.com` (Primary) and `www.kyetologistics.com` (Redirect)

#### If You Need to Configure DNS:

**Option A: Netlify DNS (Recommended)**
1. In Netlify: Domain settings → "Set up Netlify DNS"
2. Copy the 4 nameservers provided
3. In Squarespace: Settings → Domains → Advanced DNS
4. Replace nameservers with Netlify's nameservers
5. Wait 24-48 hours for propagation

**Option B: External DNS (Current Setup)**
1. In Squarespace DNS settings, add these records:

```
Type    Name    Value
A       @       75.2.60.5
CNAME   www     your-site-name.netlify.app
```

(Get your Netlify IP from: Netlify Dashboard → Domain settings → DNS records)

### 5. SSL Certificate

Netlify provides automatic SSL certificates via Let's Encrypt.

**To verify SSL is active:**
1. Go to Netlify Dashboard → Domain settings → HTTPS
2. Should show "Certificate active"
3. Enable "Force HTTPS" (redirects HTTP to HTTPS)

---

## 🔄 Deployment Process

### Automatic Deployment

Every push to your `main` branch triggers an automatic deployment:

```bash
git add .
git commit -m "feat: update feature"
git push origin main
```

Netlify will:
1. Pull latest code
2. Install dependencies
3. Run build command
4. Deploy to production
5. Invalidate CDN cache

### Manual Deployment

Via Netlify CLI:

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy --prod
```

### Deploy Previews

Every pull request gets a unique preview URL:
- Automatically generated
- Perfect for testing before merging
- Format: `deploy-preview-123--your-site.netlify.app`

---

## 🔍 Troubleshooting

### Issue 1: Site Not Loading (ERR_SSL_PROTOCOL_ERROR)

**Cause**: SSL certificate not yet provisioned or DNS not propagated

**Solution**:
1. Check Netlify Dashboard → Domain settings → HTTPS
2. If "Certificate pending", wait 5-10 minutes
3. If DNS issues, verify nameservers in Squarespace
4. Clear browser cache (Ctrl+F5)

### Issue 2: 404 on Page Refresh

**Cause**: SPA routing not configured

**Solution**: Already fixed in `netlify.toml`:
```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Issue 3: Build Fails

**Cause**: Missing environment variables or build errors

**Solution**:
1. Check build logs in Netlify Dashboard
2. Verify all environment variables are set
3. Test build locally: `npm run build`
4. Check Node version matches (18+)

### Issue 4: Old Version Showing

**Cause**: Browser or CDN cache

**Solution**:
1. Hard refresh: Ctrl+F5 (Windows) or Cmd+Shift+R (Mac)
2. Clear Netlify cache: Deploy settings → "Clear cache and deploy site"
3. Try incognito/private mode

### Issue 5: www Not Redirecting

**Cause**: Redirect rule not working

**Solution**:
1. In Netlify: Domain settings → Domain management
2. Set primary domain to `kyetologistics.com`
3. www will auto-redirect

---

## 📊 Monitoring & Analytics

### Netlify Analytics

Enable in Netlify Dashboard for:
- Page views
- Unique visitors
- Top pages
- Bandwidth usage

### Google Analytics

Already configured in the app. Just add your Measurement ID:
```
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

### Performance Monitoring

Built-in performance monitoring is enabled. Check browser console for Core Web Vitals.

---

## 🔐 Security Checklist

- [x] HTTPS enabled (automatic via Netlify)
- [x] Force HTTPS redirect configured
- [x] Security headers configured in `netlify.toml`
- [x] HSTS enabled
- [x] Content Security Policy configured
- [ ] Environment variables secured (add in Netlify Dashboard)
- [ ] Google Analytics configured (optional)
- [ ] Web3Forms API key added

---

## 🎯 Post-Deployment Checklist

After deploying, verify:

- [ ] Site loads at https://kyetologistics.com
- [ ] www redirects to non-www (or vice versa)
- [ ] HTTP redirects to HTTPS
- [ ] All pages load correctly
- [ ] Contact form works
- [ ] Images load properly
- [ ] No console errors
- [ ] Mobile responsive
- [ ] SSL certificate valid (check with https://www.ssllabs.com/ssltest/)
- [ ] Lighthouse score > 90

---

## 🚀 Quick Commands

```bash
# Local development
npm run dev

# Build for production (test locally)
npm run build
npm start

# Deploy to Netlify (manual)
netlify deploy --prod

# View deployment logs
netlify logs

# Open Netlify dashboard
netlify open

# Check build status
netlify status
```

---

## 📞 Support Resources

- **Netlify Docs**: https://docs.netlify.com
- **Netlify Support**: https://answers.netlify.com
- **Next.js on Netlify**: https://docs.netlify.com/integrations/frameworks/next-js/
- **DNS Propagation Check**: https://dnschecker.org
- **SSL Test**: https://www.ssllabs.com/ssltest/

---

## 🎉 Success!

Once deployed, your site will be live at:
- **Primary**: https://kyetologistics.com
- **Netlify URL**: https://your-site-name.netlify.app (backup)

**SSL is automatic** - Netlify handles everything!

---

## 💡 Pro Tips

1. **Enable Deploy Notifications**: Get Slack/Email alerts on deployments
2. **Set up Branch Deploys**: Test features on separate URLs
3. **Use Deploy Contexts**: Different env vars for production/preview
4. **Enable Form Detection**: Netlify can handle forms without Web3Forms
5. **Add Status Badge**: Show build status in README
6. **Set up Redirects**: Use `netlify.toml` for URL redirects
7. **Enable Asset Optimization**: Automatic image/CSS/JS optimization

---

**Your site is ready to go live! 🚀**

Just push to main branch and Netlify handles the rest.

