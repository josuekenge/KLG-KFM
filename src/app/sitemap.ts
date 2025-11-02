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

  // Only include pages that actually exist and are used
  const staticPages: MetadataRoute.Sitemap = [
    // Homepage - Highest priority, contains all main content
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 1.0,
    },
    
    // Blog listing page - High priority
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  // Dynamic blog post pages
  // Each blog post gets its own entry with SEO-rich metadata
  // Keywords from title, description, category, and tags will be indexed
  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.lastModified || currentDate,
    changeFrequency: "monthly" as const,
    priority: 0.8, // High priority for blog content
  }));

  // Return only Home + Blog + Blog Posts
  return [...staticPages, ...blogPages];
}




