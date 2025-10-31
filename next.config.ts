import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Performance optimizations
  reactStrictMode: true,

  // Image optimization with cross-browser support
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    // Cross-browser optimizations
    unoptimized: process.env.NODE_ENV === "development",
    loader: "default",
  },

  // Compression
  compress: true,

  // Production optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === "production" ? {
      exclude: ["error", "warn"],
    } : false,
    // Cross-browser optimizations
    styledComponents: true,
  },

  // Enhanced headers for cross-browser compatibility and security
  async headers() {
    const isProduction = process.env.NODE_ENV === "production";
    
    const securityHeaders = [
      // DNS and performance headers
      {
        key: "X-DNS-Prefetch-Control",
        value: "on",
      },
      
      // Basic security headers
      {
        key: "X-Content-Type-Options",
        value: "nosniff",
      },
      {
        key: "X-Frame-Options",
        value: "DENY",
      },
      {
        key: "X-XSS-Protection",
        value: "1; mode=block",
      },
      {
        key: "Referrer-Policy",
        value: "strict-origin-when-cross-origin",
      },
      {
        key: "Permissions-Policy",
        value: "camera=(), microphone=(), geolocation=(), payment=(), usb=(), magnetometer=(), gyroscope=(), accelerometer=()",
      },
      
      // Content Security Policy for all browsers
      {
        key: "Content-Security-Policy",
        value: isProduction
          ? "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com data:; img-src 'self' data: https:; connect-src 'self' https://api.web3forms.com https://www.google-analytics.com; frame-src 'none'; object-src 'none'; base-uri 'self'; form-action 'self' https://api.web3forms.com; upgrade-insecure-requests;"
          : "default-src 'self' 'unsafe-inline' 'unsafe-eval'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; font-src 'self' data:; img-src 'self' data: https:; connect-src 'self' ws: wss: http: https:;",
      },
      
      // Performance headers for modern browsers
      {
        key: "Accept-CH",
        value: "DPR, Viewport-Width, Width",
      },
    ];

    // Only add HSTS in production (requires HTTPS)
    if (isProduction) {
      securityHeaders.push(
        {
          key: "Strict-Transport-Security",
          value: "max-age=63072000; includeSubDomains; preload",
        },
        {
          key: "Cross-Origin-Embedder-Policy",
          value: "credentialless",
        },
        {
          key: "Cross-Origin-Opener-Policy",
          value: "same-origin-allow-popups",
        },
        {
          key: "Cross-Origin-Resource-Policy",
          value: "cross-origin",
        }
      );
    }

    return [
      {
        source: "/:path*",
<<<<<<< HEAD
        headers: [
          // DNS and performance headers
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          
          // Security headers
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), payment=(), usb=(), magnetometer=(), gyroscope=(), accelerometer=()",
          },
          
          // Cross-browser security headers
          {
            key: "Cross-Origin-Embedder-Policy",
            value: "require-corp",
          },
          {
            key: "Cross-Origin-Opener-Policy",
            value: "same-origin",
          },
          {
            key: "Cross-Origin-Resource-Policy",
            value: "same-origin",
          },
          
          // Content Security Policy for all browsers
          {
            key: "Content-Security-Policy",
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://api.web3forms.com https://www.google-analytics.com; frame-src 'none'; object-src 'none'; base-uri 'self'; form-action 'self';",
          },
          
          // Performance headers for modern browsers
          {
            key: "Accept-CH",
            value: "DPR, Viewport-Width, Width",
          },
          {
            key: "Accept-CH-Lifetime",
            value: "86400",
          },
        ],
=======
        headers: securityHeaders,
>>>>>>> 3e5f54c3ea03210cf1edf6c079ba1d722cf03fc9
      },
      {
        source: "/fonts/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
          {
            key: "Cross-Origin-Resource-Policy",
            value: "cross-origin",
          },
        ],
      },
      {
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/api/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "no-store, no-cache, must-revalidate, proxy-revalidate",
          },
          {
            key: "Pragma",
            value: "no-cache",
          },
          {
            key: "Expires",
            value: "0",
          },
        ],
      },
    ];
  },

  // Optimize external packages
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion", "@radix-ui/react-slot"],
    // Cross-browser optimizations
    esmExternals: true,
  },
  
  // External packages for server components
  serverExternalPackages: ["three", "@react-three/fiber"],

  // Performance optimizations
  poweredByHeader: false, // Remove X-Powered-By header

  // Production source maps (disable for faster builds)
  productionBrowserSourceMaps: false,

  // Output standalone for faster deploys
  output: "standalone",

  // Cross-browser webpack optimizations
  webpack: (config, { dev, isServer }) => {
    // Cross-browser optimizations
    if (!dev && !isServer) {
      config.optimization.splitChunks = {
        chunks: "all",
        cacheGroups: {
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true,
          },
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: "vendors",
            priority: -10,
            chunks: "all",
          },
          framerMotion: {
            test: /[\\/]node_modules[\\/]framer-motion[\\/]/,
            name: "framer-motion",
            priority: 10,
            chunks: "all",
          },
          three: {
            test: /[\\/]node_modules[\\/](three|@react-three)[\\/]/,
            name: "three",
            priority: 10,
            chunks: "all",
          },
        },
      };
    }
    
    return config;
  },
};

export default nextConfig;
