import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { QueryProvider } from "@/components/providers/QueryProvider";
import { ErrorBoundary } from "@/components/providers/ErrorBoundary";
import { BrowserOptimizer } from "@/components/providers/BrowserOptimizer";
import { ModernNavbar } from "@/components/layout/ModernNavbar";
import { Footer } from "@/components/layout/Footer";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";
import { PerformanceMonitor } from "@/components/analytics/PerformanceMonitor";
import { StructuredData } from "@/components/seo/StructuredData";
import { constructMetadata, organizationSchema, productSchema, localBusinessSchema } from "@/lib/seo";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap", // Optimize font loading
  preload: true,
});

export const metadata: Metadata = constructMetadata({
  title: "Kyeto Logistics | GPS Tracking, Fleet Management & Container Logistics Africa",
  description: "Government-backed logistics platform providing real-time GPS tracking, fleet management, container tracking, and customs clearance solutions for businesses across Africa. API integration with PowerTrack, Tramigo, Frotcom. Serving DRC, Kenya, Tanzania, and 12+ African countries.",
  canonical: "https://kyetologistics.com",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Critical resource hints for cross-browser optimization */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://api.web3forms.com" />
        
        {/* DNS prefetch for faster external resource loading - universal optimization */}
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://api.web3forms.com" />
        
        {/* Google Site Verification - CRITICAL: DO NOT REMOVE */}
        <meta name="google-site-verification" content="R4HtcILKXcw9f7gz1Ho2GQWlpIummGKoFBHAWbqtS7I" />
        
        {/* Universal meta tags for all browsers */}
        <meta name="theme-color" content="#000000" />
        <meta name="color-scheme" content="light dark" />
        <meta name="format-detection" content="telephone=no" />
        
        {/* Mobile-specific optimizations */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes, viewport-fit=cover" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Kyeto Logistics" />
        
        {/* Performance hints for modern browsers */}
        <meta httpEquiv="Accept-CH" content="DPR, Viewport-Width, Width" />
        
        <StructuredData 
          data={[organizationSchema, productSchema, localBusinessSchema]} 
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <GoogleAnalytics />
        <PerformanceMonitor />
        <BrowserOptimizer />
        <ErrorBoundary>
          <ThemeProvider defaultTheme="light" storageKey="klg-theme">
            <QueryProvider>
              <div className="relative flex min-h-screen flex-col">
                <ModernNavbar />
                <main className="flex-1">{children}</main>
                <Footer />
              </div>
            </QueryProvider>
          </ThemeProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}