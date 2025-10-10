import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { QueryProvider } from "@/components/providers/QueryProvider";
import { ModernNavbar } from "@/components/layout/ModernNavbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Kyeto Logistics Group - Fleet Management & Transportation Solutions",
  description: "Digitizing and optimizing transportation operations in frontier and emerging markets with integrated logistics, telematics, AI, and data analytics.",
  keywords: [
    "fleet management",
    "GPS tracking",
    "telematics",
    "logistics",
    "transportation",
    "KFM",
    "KLG",
    "Kyeto Logistics",
  ],
  authors: [{ name: "Kyeto Logistics Group" }],
  openGraph: {
    title: "Kyeto Logistics Group - Fleet Management Solutions",
    description: "Integrated logistics, telematics, AI, and data analytics for transparent, efficient supply chain operations.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kyeto Logistics Group - Fleet Management Solutions",
    description: "Integrated logistics, telematics, AI, and data analytics for transparent, efficient supply chain operations.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider>
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