import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { QueryProvider } from "@/components/providers/QueryProvider";
import { ModernNavbar } from "@/components/layout/ModernNavbar";
import { Footer } from "@/components/layout/Footer";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";
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
  canonical: "https://kyetofleet.com",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS prefetch for faster external resource loading */}
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        
        <StructuredData 
          data={[organizationSchema, productSchema, localBusinessSchema]} 
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <GoogleAnalytics />
        <ThemeProvider defaultTheme="light" storageKey="klg-theme">
          <QueryProvider>
            <div className="relative flex min-h-screen flex-col">
              <ModernNavbar />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}