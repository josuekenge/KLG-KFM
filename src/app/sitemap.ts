import { MetadataRoute } from "next";

/**
 * Next.js App Router Sitemap
 * This works alongside next-sitemap for comprehensive SEO coverage
 * Optimized for Kyeto Logistics Group - Logistics & Fleet Management
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://kyetologistics.com";
  const currentDate = new Date();

  return [
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
}




