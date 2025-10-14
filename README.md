# Kyeto Logistics Group - Fleet Management Platform

A modern, premium TypeScript React application for Kyeto Logistics Group (KLG) and Kyeto Fleet Management (KFM), featuring integrated logistics, telematics, AI, and data analytics solutions.

## 🚀 Features

- **Modern Tech Stack**: Next.js 15 with App Router, TypeScript, Tailwind CSS
- **Premium UI**: shadcn/ui components with Radix primitives and Framer Motion animations
- **Pixel Trail Animation**: Custom animated background with accessibility support
- **Dark Theme**: Custom theme system with Tailwind tokens
- **State Management**: Zustand for global state, TanStack Query for data fetching
- **Form Handling**: React Hook Form with Zod validation
- **Testing**: Vitest with React Testing Library
- **Developer Experience**: ESLint, Prettier, Husky, commitlint
- **CI/CD**: GitHub Actions workflow
- **Containerization**: Docker support with docker-compose

## 🏗️ Project Structure

```
klg-app/
├── src/
│   ├── app/                    # Next.js App Router pages
│   ├── components/
│   │   ├── animations/         # Custom animations (PixelTrail)
│   │   ├── layout/            # Navigation, Footer
│   │   ├── providers/         # Theme, Query providers
│   │   ├── sections/          # Page sections
│   │   └── ui/                # Reusable UI components
│   ├── data/                  # Static data and content
│   ├── hooks/                 # Custom React hooks
│   ├── lib/                   # Utilities and configurations
│   ├── styles/                # Global styles
│   ├── test/                  # Test setup and utilities
│   └── types/                 # TypeScript type definitions
├── .github/workflows/         # GitHub Actions CI/CD
├── docker-compose.yml         # Local development setup
├── Dockerfile                 # Production container
└── README.md                  # This file
```

## 🛠️ Tech Stack

### 🚀 Core Framework & Runtime
- **Next.js 15.5.4** - React framework with App Router for server-side rendering and static generation
- **React 18** - Modern UI library with concurrent features and hooks
- **TypeScript** - Type-safe JavaScript with advanced type checking and IntelliSense
- **Node.js** - JavaScript runtime environment
- **Turbopack** - Ultra-fast bundler for development (Next.js default)

### 🎨 UI & Styling
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- **Framer Motion** - Production-ready motion library for smooth animations and transitions
- **Lucide React** - Beautiful & consistent icon toolkit with 1000+ icons
- **Custom CSS** - Global styles and component-specific styling
- **Tailwind Merge** - Utility for intelligently merging Tailwind CSS classes

### 🔄 State Management & Data Fetching
- **Zustand** - Lightweight, scalable state management with minimal boilerplate
- **TanStack Query (React Query)** - Powerful data synchronization for React applications
- **Motion DOM** - Framer Motion's DOM utilities for enhanced performance

### 🛠️ Development Tools & Quality
- **ESLint** - Static code analysis and linting for JavaScript/TypeScript
- **Prettier** - Opinionated code formatter for consistent code style
- **Husky** - Git hooks made easy for pre-commit and pre-push validation
- **Commitlint** - Lint commit messages to ensure conventional commit format
- **Vitest** - Fast unit testing framework powered by Vite
- **npm** - Package manager for dependency management

### ⚡ Performance & Optimization
- **Dynamic Imports** - Code splitting for optimal bundle sizes and faster loading
- **Next.js Image Optimization** - Automatic image optimization with WebP/AVIF support
- **Smart Prefetching** - Intelligent resource prefetching for improved navigation
- **Standalone Output** - Optimized production builds for containerized deployments
- **Lazy Loading** - Component and image lazy loading for better performance

### 🔍 SEO & Analytics
- **Google Analytics GA4** - Advanced web analytics and user behavior tracking
- **JSON-LD Structured Data** - Rich snippets for better search engine understanding
- **Open Graph & Twitter Cards** - Enhanced social media sharing with rich previews
- **Meta Tags** - Comprehensive SEO meta tags for search engine optimization
- **XML Sitemap** - Automatic sitemap generation for search engine indexing
- **robots.txt** - Search engine crawler directives and sitemap references

### 🔒 Security & Headers
- **Security Headers** - Comprehensive security headers (CSP, HSTS, XSS protection)
- **Content Security Policy** - Protection against XSS attacks
- **Strict Transport Security** - HTTPS enforcement and security
- **X-Frame-Options** - Clickjacking protection
- **Referrer Policy** - Control referrer information leakage

### 🐳 Containerization & Deployment
- **Docker** - Containerization for consistent development and production environments
- **Docker Compose** - Multi-container Docker application management
- **Standalone Build** - Optimized production builds for cloud deployment

### 📱 Features & Capabilities
- **Responsive Design** - Mobile-first approach with breakpoint-based layouts
- **Dark/Light Theme** - Custom theme system with seamless switching
- **Accessibility** - WCAG compliant components with keyboard navigation
- **Progressive Web App** - Modern web app capabilities with offline support
- **Internationalization Ready** - Built with i18n support for multiple languages

### 🔧 Build & Development
- **Hot Module Replacement** - Instant feedback during development
- **TypeScript Compilation** - Real-time type checking and error reporting
- **CSS-in-JS** - Scoped styling with Tailwind CSS
- **Module Federation** - Micro-frontend architecture support
- **Tree Shaking** - Dead code elimination for smaller bundle sizes

### 📊 Monitoring & Debugging
- **React DevTools** - Browser extension for React component debugging
- **Next.js DevTools** - Built-in development tools for performance monitoring
- **Error Boundaries** - Graceful error handling and user experience
- **Performance Monitoring** - Built-in performance metrics and optimization

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Git

### Installation & Running

1. **Navigate to the project directory**
   ```bash 
   cd klg-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### 🎯 **SUPER EASY WAY (Windows)**
Double-click the `start.bat` file in the `klg-app` folder - it will do everything automatically!

### ⚠️ Important Directory Note
The project is located in the `klg-app` folder. Make sure you're in the correct directory:
- ✅ Correct: `C:\Users\josue\OneDrive\Desktop\KFM-KLG\klg-app`
- ❌ Wrong: `C:\Users\josue\OneDrive\Desktop\KFM-KLG`

## 📜 Available Scripts

```bash
# Development
npm run dev              # Start development server with Turbopack
npm run build           # Build for production
npm run start           # Start production server

# Code Quality
npm run lint            # Run ESLint
npm run lint:fix        # Fix ESLint errors
npm run format          # Format code with Prettier
npm run format:check    # Check code formatting
npm run type-check      # Run TypeScript type checking

# Testing
npm run test            # Run tests with Vitest
npm run test:ui         # Run tests with UI
npm run test:coverage   # Run tests with coverage

# Git Hooks
npm run prepare         # Install Husky hooks
```

## 🐳 Docker Development

### Using Docker Compose

1. **Start development environment**
   ```bash
   docker-compose up dev
   ```

2. **Start production environment**
   ```bash
   docker-compose up app
   ```

3. **Access the application**
   - Development: [http://localhost:3000](http://localhost:3000)
   - Production: [http://localhost:3000](http://localhost:3000)

### Manual Docker Build

```bash
# Build the image
docker build -t klg-app .

# Run the container
docker run -p 3000:3000 klg-app
```

## 🎨 Customization

### Theme Configuration

The application uses a custom theme system with Tailwind CSS. Theme tokens are defined in `tailwind.config.ts`:

```typescript
colors: {
  brand: {
    primary: "hsl(var(--brand-primary))",
    secondary: "hsl(var(--brand-secondary))",
    accent: "hsl(var(--brand-accent))",
  },
  // ... other colors
}
```

### Adding New Components

1. Create component in appropriate directory:
   - `src/components/ui/` - Reusable UI components
   - `src/components/sections/` - Page sections
   - `src/components/layout/` - Layout components

2. Export from component file
3. Import and use in pages

### Content Management

Static content is managed in `src/data/`:
- `services.ts` - Service definitions
- `pricing.ts` - Pricing tiers
- `faqs.ts` - FAQ content

## 🧪 Testing

### Running Tests

```bash
# Run all tests
npm run test

# Run tests in watch mode
npm run test -- --watch

# Run tests with coverage
npm run test:coverage

# Run tests with UI
npm run test:ui
```

### Writing Tests

Tests should be placed alongside components with `.test.tsx` or `.spec.tsx` extensions:

```typescript
import { render, screen } from '@testing-library/react';
import { Button } from './Button';

test('renders button with text', () => {
  render(<Button>Click me</Button>);
  expect(screen.getByText('Click me')).toBeInTheDocument();
});
```

## 📦 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Configure environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Docker Production

1. **Build production image**
   ```bash
   docker build -t klg-app:production .
   ```

2. **Run production container**
   ```bash
   docker run -p 3000:3000 klg-app:production
   ```

### Environment Variables

Required environment variables for production:

```bash
NEXT_PUBLIC_APP_NAME="Kyeto Logistics Group"
NEXT_PUBLIC_APP_URL="https://your-domain.com"
NODE_ENV="production"
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Commit Convention

This project uses [Conventional Commits](https://conventionalcommits.org/):

```
feat: add new feature
fix: bug fix
docs: documentation changes
style: formatting changes
refactor: code refactoring
test: add tests
chore: maintenance tasks
```

## 📄 License

This project is proprietary software of Kyeto Logistics Group.

## 🆘 Support & Troubleshooting

### Common Issues

**❌ Error: "Could not read package.json"**
- **Solution**: Make sure you're in the `klg-app` directory, not the parent directory
- **Check**: Run `ls` or `dir` to see if you can see `package.json` file

**❌ Error: "Command not found"**
- **Solution**: Make sure Node.js and npm are installed
- **Check**: Run `node --version` and `npm --version`

**❌ Error: "Port 3000 already in use"**
- **Solution**: Kill the process using port 3000 or use a different port
- **Alternative**: Run `npm run dev -- -p 3001`

### Getting Help
For support and questions:
- Create an issue in the repository
- Contact the development team
- Check the documentation

## 🗺️ Roadmap

- [ ] Dashboard with real-time data
- [ ] User authentication and authorization
- [ ] API integration
- [ ] Mobile app
- [ ] Advanced analytics
- [ ] Multi-language support

---

Built with ❤️ by the Kyeto Logistics Group team.