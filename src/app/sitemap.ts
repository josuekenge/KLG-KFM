import { MetadataRoute } from "next";
import { blogPosts } from "@/data/blog";

/**
 * Next.js App Router Sitemap
 * Dynamically generates sitemap with all pages and blog posts
 * Optimized for Kyeto Logistics Group - Logistics & Fleet Management
 * 
 * SEO Benefits:
 * - All blog posts indexed with keywords from titles, descriptions, and tags
 * - Proper priorities for different page types
 * - Last modified dates for better crawl efficiency
 * - Change frequencies to guide search engine crawlers
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://kyetologistics.com";
  const currentDate = new Date();

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    // Homepage - Highest priority, updated daily
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 1.0,
    },
    
    // Core Platform Pages - High priority
    {
      url: `${baseUrl}/platform`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/solutions`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    
    // Business Pages - High priority
    {
      url: `${baseUrl}/pricing`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    
    // Content Pages - Medium priority
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/careers`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.6,
    },
    
    // Legal Pages - Lower priority
    {
      url: `${baseUrl}/privacy`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];

  // Dynamic blog post pages
  // Each blog post gets its own entry with SEO-rich metadata
  // Keywords from title, description, category, and tags will be indexed
  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.lastModified || currentDate,
    changeFrequency: "monthly" as const,
    priority: 0.6, // Medium priority for blog content
  }));

  // Combine all pages
  return [...staticPages, ...blogPages];
}




