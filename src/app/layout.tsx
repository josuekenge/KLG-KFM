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
  title: "Kyeto Fleet Management - GPS Tracking & Fleet Solutions for Africa",
  description: "Fleet management solutions built for frontier markets. Real-time GPS tracking, fuel monitoring, driver safety, and AI cameras across 12 African countries.",
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
        
        {/* Universal meta tags for all browsers */}
        <meta name="theme-color" content="#000000" />
        <meta name="color-scheme" content="light dark" />
        <meta name="format-detection" content="telephone=no" />
        
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