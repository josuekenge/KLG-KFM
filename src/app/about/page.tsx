import type { Metadata } from "next";
import { AboutSection } from "@/components/sections/AboutSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";

export const metadata: Metadata = {
  title: "About Kyeto Logistics | Our Mission and Vision",
  description: "Learn how Kyeto Logistics helps transform fleet management across Africa through innovation and technology.",
  keywords: [
    "about Kyeto Logistics",
    "fleet management Africa",
    "logistics innovation",
    "GPS tracking company",
    "Africa technology",
    "company mission"
  ],
  openGraph: {
    title: "About Kyeto Logistics | Our Mission and Vision",
    description: "Learn how Kyeto Logistics helps transform fleet management across Africa through innovation and technology.",
    url: "https://kyetologistics.com/about",
    siteName: "Kyeto Logistics",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://kyetologistics.com/about",
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-white overflow-hidden border-b border-gray-200">
        <div 
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `
              repeating-linear-gradient(45deg, transparent, transparent 30px, black 30px, black 31px),
              repeating-linear-gradient(-45deg, transparent, transparent 30px, black 30px, black 31px)
            `,
          }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 bg-gray-100 border border-gray-200 rounded-full text-gray-900 text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="relative inline-flex rounded-full h-2 w-2 bg-black"></span>
              </span>
              About Us
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
              Our <span className="text-black">Mission & Vision</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-4 max-w-3xl mx-auto leading-relaxed">
              Transforming fleet management across Africa through cutting-edge GPS tracking, 
              analytics, and innovative logistics technology.
            </p>
          </div>
        </div>
      </section>

      {/* Main About Content */}
      <AboutSection />
      
      {/* Testimonials */}
      <TestimonialsSection />
    </div>
  );
}

