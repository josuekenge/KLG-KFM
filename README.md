# Kyeto Logistics Group

Premier logistics and fleet management solutions for frontier markets across Africa.

**Live Site**: [kyetologistics.com](https://kyetologistics.com)

---

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Access at http://localhost:3001
```

**See [GUIDE.md](./GUIDE.md) for complete documentation**

---

## 📋 Tech Stack

### Core
- **Next.js 15** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling

### UI & Animation
- **Framer Motion** - Animations
- **Lucide React** - Icons
- **Radix UI** - Accessible components

### State & Data
- **Zustand** - State management
- **TanStack Query** - Data fetching
- **React Hook Form** - Forms
- **Zod** - Validation

### Development
- **Vitest** - Testing
- **ESLint** - Linting
- **Prettier** - Formatting
- **Husky** - Git hooks

### Deployment
- **Netlify** - Hosting & CDN
- **GitHub Actions** - CI/CD

---

## 📁 Project Structure

```
src/
├── app/                    # Pages & routing
│   ├── blog/
│   ├── careers/
│   ├── contact/
│   ├── platform/
│   ├── pricing/
│   ├── privacy/
│   ├── solutions/
│   └── layout.tsx
├── components/
│   ├── analytics/         # Google Analytics, Performance
│   ├── animations/        # PixelTrail, SilkBackground
│   ├── layout/            # Navbar, Footer
│   ├── providers/         # Theme, Query, Error, Browser
│   ├── sections/          # Page sections
│   ├── seo/               # Structured data
│   └── ui/                # Reusable components
├── data/                  # Static data
├── lib/                   # Utilities & config
├── types/                 # TypeScript types
└── middleware.ts          # HTTPS redirect

Configuration:
├── netlify.toml          # Netlify config
├── next.config.ts        # Next.js config
├── tailwind.config.ts    # Tailwind config
└── tsconfig.json         # TypeScript config
```

---

## 🛠️ Available Commands

```bash
# Development
npm run dev              # Start dev server (port 3001)
npm run build            # Build for production
npm start                # Start production server

# Code Quality
npm run lint             # Run ESLint
npm run lint:fix         # Fix linting issues
npm run type-check       # TypeScript check
npm run format           # Format with Prettier
npm run format:check     # Check formatting

# Testing
npm test                 # Run tests
npm run test:ui          # Test UI
npm run test:coverage    # Coverage report
```

---

## 🌐 Deployment

### Automatic (Recommended)
Push to `main` branch → Netlify auto-deploys

### Manual
```bash
# Via Netlify CLI
npm i -g netlify-cli
netlify login
netlify deploy --prod
```

### Environment Variables (Netlify Dashboard)
```
NODE_ENV=production
NEXT_PUBLIC_APP_URL=https://kyetologistics.com
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your-key
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

---

## 🔒 Security Features

- ✅ Automatic HTTPS (Let's Encrypt)
- ✅ HSTS (HTTP Strict Transport Security)
- ✅ Content Security Policy (CSP)
- ✅ XSS Protection
- ✅ DNS Prefetch Optimization
- ✅ Cross-Origin Policies

---

## 📊 Performance

- **Image Optimization**: AVIF, WebP formats
- **Code Splitting**: Automatic via Next.js
- **Lazy Loading**: Dynamic imports
- **CDN**: Netlify Edge Network
- **Caching**: Static assets cached 1 year

---

## 🔍 Key Features

- **Real-time GPS Tracking** - Monitor fleet location
- **Fuel Monitoring** - Track consumption & costs
- **Driver Safety Analytics** - AI-powered insights
- **Route Optimization** - Efficient path planning
- **Predictive Maintenance** - Reduce downtime
- **Multi-platform** - Web, iOS, Android

---

## 📞 Contact

- **Email**: sales@kyetologistics.com
- **Phone**: WhatsApp: +243 899 905 483 & +243 904 570 799
- **Location**: Kinshasa, Democratic Republic of Congo

---

## 📚 Documentation

- **[GUIDE.md](./GUIDE.md)** - Complete setup & deployment guide
- **[env.example](./env.example)** - Environment variables template
- **[env.production.example](./env.production.example)** - Production config

---

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'feat: add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

---

## 📄 License

Private - Kyeto Logistics Group © 2025

---

**Built with ❤️ for African logistics**
