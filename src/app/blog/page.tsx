import { ExternalLink, Calendar, Clock } from "lucide-react";
import Link from "next/link";
import { blogPosts } from "@/data/blog";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Logistics Blog | GPS Tracking & Fleet Management Insights Africa",
  description: "Expert insights on GPS tracking, fleet management, container logistics, and supply chain technology for African businesses. Read case studies, industry trends, and implementation guides.",
  keywords: [
    "logistics blog Africa",
    "GPS tracking insights DRC",
    "fleet management articles",
    "container tracking blog",
    "transportation technology Africa",
    "supply chain insights Congo",
    "customs clearance guides",
    "telematics blog",
    "Kyeto Logistics blog",
    "Africa logistics trends",
    "fleet optimization tips",
    "cargo tracking articles"
  ],
  openGraph: {
    title: "Kyeto Blog | Insights on Logistics, GPS, and Transportation",
    description: "Explore logistics trends, GPS tracking innovations, and success stories from Kyeto Logistics.",
    url: "https://kyetologistics.com/blog",
    siteName: "Kyeto Logistics",
    type: "website",
    images: [
      {
        url: "https://kyetologistics.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Kyeto Blog - Logistics Insights",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kyeto Blog | Insights on Logistics, GPS, and Transportation",
    description: "Explore logistics trends, GPS tracking innovations, and success stories from Kyeto Logistics.",
    images: ["https://kyetologistics.com/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://kyetologistics.com/blog",
  },
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-white overflow-hidden border-b border-gray-200">
        {/* Subtle crosshatch pattern */}
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
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 bg-gray-100 border border-gray-200 rounded-full text-gray-900 text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="relative inline-flex rounded-full h-2 w-2 bg-black"></span>
              </span>
              Industry Insights & Resources
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
              Logistics & Fleet Management <span className="text-black">Insights</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto leading-relaxed">
              Expert articles, implementation guides, and industry insights on GPS tracking, fleet management, 
              container logistics, customs clearance, and supply chain technology across Africa. Learn from 
              real-world case studies, best practices, and success stories from leading logistics operations 
              in the DRC, Kenya, Tanzania, and across Sub-Saharan Africa.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full">
                <span className="font-semibold">Topics:</span>
                <span>GPS Tracking • Fleet Optimization • Container Logistics • Customs Tech</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Page indicator */}
          <div className="text-center mb-8">
            <p className="text-sm text-gray-600">
              Showing {blogPosts.length} articles
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                {/* Category Badge */}
                <div className="p-6 pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-block px-3 py-1 bg-black text-white text-xs font-semibold rounded-full">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </div>
                  </div>

                  {/* Title */}
                  <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-black transition-colors line-clamp-2">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Meta Info */}
                  <div className="flex items-center gap-3 mb-4 pb-4 border-b border-gray-100">
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </div>
                    <span className="text-gray-300">•</span>
                    <span className="text-xs font-medium text-gray-700">{post.source}</span>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Read More Link */}
                  <Link
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-black font-semibold text-sm group-hover:gap-3 transition-all duration-200"
                  >
                    Read Full Article
                    <ExternalLink className="w-4 h-4 text-blue-600" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
