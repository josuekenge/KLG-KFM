# Kyeto Logistics Group - Complete Guide

## 🚀 Quick Start

### Local Development
```bash
npm install
npm run dev
```
Access at: **http://localhost:3001**

### Production Deployment (Netlify)
1. Push to GitHub (auto-deploys)
2. Add environment variables in Netlify Dashboard:
   ```
   NODE_ENV=production
   NEXT_PUBLIC_APP_URL=https://kyetologistics.com
   NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your-key-here
   ```
3. Site goes live at: **https://kyetologistics.com**

---

## 📋 Environment Setup

### Development (.env.local)
```bash
NODE_ENV=development
NEXT_PUBLIC_APP_URL=http://localhost:3001
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your-key
NEXT_PUBLIC_BROWSER_OPTIMIZATION=true
NEXT_PUBLIC_PERFORMANCE_MONITORING=true
```

### Production (Netlify Dashboard)
```bash
NODE_ENV=production
NEXT_PUBLIC_APP_URL=https://kyetologistics.com
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your-production-key
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

---

## 🌐 Domain & DNS

- **Domain**: kyetologistics.com (Squarespace)
- **Hosting**: Netlify
- **SSL**: Automatic (Let's Encrypt)
- **DNS**: Configured via Squarespace → Netlify

### DNS Records
```
Type    Name    Value
A       @       75.2.60.5
CNAME   www     your-site.netlify.app
```

---

## 🔒 Security

### Features
- ✅ Automatic HTTPS redirect
- ✅ HSTS (HTTP Strict Transport Security)
- ✅ Content Security Policy (CSP)
- ✅ XSS Protection
- ✅ DNS Prefetch Optimization
- ✅ Cross-Origin Policies

### Configuration
- `next.config.ts` - Security headers
- `src/middleware.ts` - HTTPS redirect
- `netlify.toml` - CDN-level security

---

## 🛠️ Commands

```bash
# Development
npm run dev              # Start dev server
npm run build            # Build for production
npm start                # Start production server

# Code Quality
npm run lint             # Run ESLint
npm run lint:fix         # Fix linting issues
npm run type-check       # TypeScript check
npm run format           # Format with Prettier

# Testing
npm test                 # Run tests
npm run test:coverage    # Test coverage
```

---

## 📁 Project Structure

```
KLG-KFM/
├── src/
│   ├── app/                    # Next.js pages
│   │   ├── blog/
│   │   ├── careers/
│   │   ├── contact/
│   │   ├── platform/
│   │   ├── pricing/
│   │   ├── privacy/
│   │   ├── solutions/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── sitemap.ts
│   ├── components/
│   │   ├── analytics/         # GA, Performance monitoring
│   │   ├── animations/        # PixelTrail, SilkBackground
│   │   ├── layout/            # Navbar, Footer
│   │   ├── providers/         # Theme, Query, Error, Browser
│   │   ├── sections/          # Page sections
│   │   ├── seo/               # Structured data
│   │   └── ui/                # Reusable components
│   ├── data/                  # Static data
│   ├── lib/                   # Utilities, SEO config
│   ├── types/                 # TypeScript types
│   └── middleware.ts          # HTTPS redirect
├── public/                    # Static assets
├── netlify.toml              # Netlify config
├── next.config.ts            # Next.js config
├── tailwind.config.ts        # Tailwind config
└── package.json              # Dependencies
```

---

## 🔧 Troubleshooting

### ERR_SSL_PROTOCOL_ERROR
**Cause**: Trying to access production domain locally
**Fix**: Use `http://localhost:3001` for development

### Build Fails
**Cause**: Missing environment variables or merge conflicts
**Fix**: 
1. Check build logs in Netlify
2. Verify environment variables
3. Run `npm run build` locally

### Site Not Updating
**Fix**:
1. Hard refresh: `Ctrl+F5`
2. Clear Netlify cache
3. Check deployment logs

### Port Already in Use
```bash
# Windows
netstat -ano | findstr :3001
taskkill /PID <PID> /F

# Mac/Linux
lsof -ti:3001 | xargs kill -9
```

---

## 📊 Performance

- **Image Optimization**: AVIF, WebP
- **Code Splitting**: Automatic via Next.js
- **Lazy Loading**: Dynamic imports
- **CDN**: Netlify Edge Network
- **Caching**: Static assets cached 1 year

---

## 🔗 Resources

- **Netlify Dashboard**: https://app.netlify.com
- **Domain (Squarespace)**: https://account.squarespace.com
- **GitHub Repo**: https://github.com/josuekenge/KLG-KFM
- **Web3Forms**: https://web3forms.com
- **Next.js Docs**: https://nextjs.org/docs

