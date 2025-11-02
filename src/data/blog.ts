/**
 * Blog Posts Data
 * Centralized blog content for reusability across pages and sitemap
 * Optimized for SEO with rich metadata
 */

export interface BlogPost {
  id: number;
  title: string;
  slug: string; // URL-friendly version for internal routing
  description: string;
  excerpt: string;
  url: string; // External URL
  source: string;
  readTime: string;
  date: string;
  category: string;
  tags: string[];
  lastModified?: Date;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Fleet Management Systems in Africa: A Complete Guide",
    slug: "fleet-management-systems-africa-guide",
    description: "Navigating the transportation and logistics industry challenges requires a strategic approach. This comprehensive guide covers key components, challenges, and strategies for maximizing fleet management systems across Africa.",
    excerpt: "Discover how effective fleet management systems unlock efficiency for logistics and transportation businesses across Africa, from route optimization to vehicle maintenance and driver safety.",
    url: "https://supplychainnuggets.com/fleet-management-systems/?utm_source=kyetologistics",
    source: "Supply Chain Nuggets",
    readTime: "7 min read",
    date: "June 16, 2023",
    category: "Fleet Management",
    tags: ["Africa", "Logistics", "Technology"],
    lastModified: new Date("2023-06-16"),
  },
  {
    id: 2,
    title: "How to Implement IoT in Fleet Management: Complete Guide",
    slug: "implement-iot-fleet-management-guide",
    description: "Learn how IoT technology revolutionizes fleet management with real-time tracking, predictive maintenance, and enhanced safety features. A practical guide to implementing IoT solutions for your fleet operations.",
    excerpt: "Explore the power of IoT in fleet management - from GPS tracking to predictive maintenance. Discover how connected vehicles enable smoother operations, reduced costs, and safer rides.",
    url: "https://volpis.com/blog/how-to-implement-iot-in-fleet-management/?utm_source=kyetologistics",
    source: "Volpis",
    readTime: "12 min read",
    date: "October 8, 2024",
    category: "Technology",
    tags: ["IoT", "Innovation", "Software"],
    lastModified: new Date("2024-10-08"),
  },
  {
    id: 3,
    title: "IoT Fleet Management: The Future of Connected Vehicles",
    slug: "iot-fleet-management-connected-vehicles",
    description: "Understand how IoT sensors and telematics transform fleet operations with data-driven insights, fuel efficiency tracking, and driver behavior monitoring for improved safety and productivity.",
    excerpt: "The Internet of Things is reshaping fleet management. Learn about key IoT components, use cases, and how connected vehicles are driving the future of logistics.",
    url: "https://www.geotab.com/blog/iot-fleet-management/?utm_source=kyetologistics",
    source: "Geotab",
    readTime: "8 min read",
    date: "2024",
    category: "Telematics",
    tags: ["IoT", "GPS Tracking", "Analytics"],
    lastModified: new Date("2024-01-01"),
  },
  {
    id: 4,
    title: "Sensors and IoT in Fleet Management: A Practical Overview",
    slug: "sensors-iot-fleet-management-overview",
    description: "Dive deep into how sensors and IoT devices monitor vehicle health, track assets, and optimize fleet performance. Learn about implementation strategies and real-world applications.",
    excerpt: "From temperature sensors to GPS trackers, discover how IoT sensors provide real-time fleet visibility and enable predictive maintenance to reduce downtime.",
    url: "https://upkeep.com/learning/sensors-and-iot-in-fleet-management/?utm_source=kyetologistics",
    source: "UpKeep",
    readTime: "6 min read",
    date: "2024",
    category: "Maintenance",
    tags: ["Sensors", "Predictive Maintenance", "IoT"],
    lastModified: new Date("2024-01-01"),
  },
  {
    id: 5,
    title: "South African Fleets: 4 Key Struggles and How to Overcome Them",
    slug: "south-african-fleets-struggles-solutions",
    description: "Explore the unique challenges facing fleet operations in South Africa - from fuel theft to road conditions - and discover proven solutions to overcome these obstacles.",
    excerpt: "Learn how South African fleet managers tackle fuel theft, poor infrastructure, driver safety, and compliance issues with modern fleet management solutions.",
    url: "https://www.frotcom.com/blog/2025/04/south-african-fleets-4-key-struggles-and-how-overcome-them?utm_source=kyetologistics",
    source: "Frotcom",
    readTime: "5 min read",
    date: "April 2025",
    category: "Regional Insights",
    tags: ["South Africa", "Challenges", "Solutions"],
    lastModified: new Date("2025-04-01"),
  },
  {
    id: 6,
    title: "FleetRabbit Blog: Fleet Management Insights & Best Practices",
    slug: "fleetrabbit-fleet-management-insights",
    description: "Access a comprehensive collection of fleet management articles covering industry trends, technology updates, and operational best practices for modern fleet operations.",
    excerpt: "Stay updated with the latest fleet management insights, from telematics innovations to driver safety programs and cost optimization strategies.",
    url: "https://fleetrabbit.com/blogs/?utm_source=kyetologistics",
    source: "FleetRabbit",
    readTime: "Various",
    date: "2024",
    category: "Industry News",
    tags: ["Best Practices", "Trends", "Innovation"],
    lastModified: new Date("2024-01-01"),
  },
  {
    id: 7,
    title: "Africa Fleet Management Market: Growth & Opportunities",
    slug: "africa-fleet-management-market-growth",
    description: "Comprehensive market analysis of Africa's fleet management industry, covering market size, growth drivers, key players, and future opportunities across the continent.",
    excerpt: "Explore the booming African fleet management market with insights on technology adoption, market trends, and investment opportunities in this rapidly growing sector.",
    url: "https://mobilityforesights.com/product/africa-fleet-management-market?utm_source=kyetologistics",
    source: "Mobility Foresights",
    readTime: "10 min read",
    date: "2024",
    category: "Market Analysis",
    tags: ["Market Research", "Africa", "Growth"],
    lastModified: new Date("2024-01-01"),
  },
  {
    id: 8,
    title: "Tech-Powered Fleets: Safer, Smarter Transport Solutions",
    slug: "tech-powered-fleets-safer-transport",
    description: "Discover how technology is revolutionizing fleet safety and efficiency with AI-powered dashcams, telematics, and real-time monitoring for smarter transport operations.",
    excerpt: "Learn about cutting-edge technologies transforming fleet safety - from collision avoidance systems to driver behavior analytics and predictive maintenance.",
    url: "https://focusontransport.co.za/tech-powered-fleets-safer-smarter-transport/?utm_source=kyetologistics",
    source: "Focus on Transport",
    readTime: "6 min read",
    date: "2024",
    category: "Safety Tech",
    tags: ["Safety", "AI", "Technology"],
    lastModified: new Date("2024-01-01"),
  },
  {
    id: 9,
    title: "The Rise of Logistics Startups in Africa & Marketing Platforms",
    slug: "logistics-startups-africa-marketing",
    description: "Explore how logistics startups are transforming African supply chains with innovative solutions and the critical role of marketing platforms in their growth.",
    excerpt: "Discover the boom in African logistics startups and how digital marketing platforms are helping them scale operations and reach new markets across the continent.",
    url: "https://yournotify.com/blog/the-rise-of-logistics-startups-in-africa-and-the-role-of-marketing-platforms/?utm_source=kyetologistics",
    source: "YourNotify",
    readTime: "8 min read",
    date: "2024",
    category: "Startups",
    tags: ["Logistics", "Africa", "Marketing"],
    lastModified: new Date("2024-01-01"),
  },
  {
    id: 10,
    title: "Africa's Vehicle Fleet Could Double by 2050: EV Implications",
    slug: "africa-vehicle-fleet-2050-ev-implications",
    description: "Analysis of Africa's projected vehicle fleet growth and the critical implications for electric vehicle adoption, infrastructure, and sustainable transport solutions.",
    excerpt: "With Africa's fleet set to double by 2050, explore the opportunities and challenges for EV adoption, charging infrastructure, and the future of sustainable transport.",
    url: "https://energyforgrowth.org/article/africas-vehicle-fleet-could-double-by-2050-what-does-this-mean-for-evs/?utm_source=kyetologistics",
    source: "Energy for Growth",
    readTime: "9 min read",
    date: "2024",
    category: "Sustainability",
    tags: ["Electric Vehicles", "Future", "Environment"],
    lastModified: new Date("2024-01-01"),
  },
  {
    id: 11,
    title: "Telematics Development in Africa: Orange Business Océan Insights",
    slug: "telematics-development-africa-orange",
    description: "Discover how embedded telematics is experiencing strong development across Africa with Orange Cameroon's experience and market trends in fleet management solutions.",
    excerpt: "Orange Cameroon shares insights on the African telematics market evolution, customer needs beyond basic GPS tracking, and emerging use cases in transportation and logistics.",
    url: "https://ocean.fr/telematique-embarquee-un-fort-developpement-en-afrique/?utm_source=kyetologistics",
    source: "Océan by Orange Business",
    readTime: "7 min read",
    date: "2024",
    category: "Market Trends",
    tags: ["Telematics", "Africa", "Orange"],
    lastModified: new Date("2024-01-01"),
  },
  {
    id: 12,
    title: "Fleet Management in Kenya: Market Insights & Opportunities",
    slug: "fleet-management-kenya-market-insights",
    description: "Explore the Kenyan fleet management market with Wialon's comprehensive guide covering local challenges, opportunities, and the growing adoption of telematics solutions.",
    excerpt: "A detailed look at Kenya's fleet management landscape, from matatu transport to logistics companies, and how telematics is transforming East African operations.",
    url: "https://wialon.com/fr/blog/trip-to-kenya?utm_source=kyetologistics",
    source: "Wialon",
    readTime: "10 min read",
    date: "2024",
    category: "Regional Focus",
    tags: ["Kenya", "East Africa", "Market Analysis"],
    lastModified: new Date("2024-01-01"),
  },
  {
    id: 13,
    title: "Fleeti Blog: Fleet Management Best Practices & Innovation",
    slug: "fleeti-fleet-management-best-practices",
    description: "Access comprehensive fleet management resources covering best practices, technology innovations, and operational strategies for modern fleet operations.",
    excerpt: "Explore articles on fleet optimization, driver safety, maintenance management, and the latest innovations shaping the future of fleet management.",
    url: "https://www.fleeti.co/blog?utm_source=kyetologistics",
    source: "Fleeti",
    readTime: "Various",
    date: "2024",
    category: "Resources",
    tags: ["Best Practices", "Innovation", "Operations"],
    lastModified: new Date("2024-01-01"),
  },
  {
    id: 14,
    title: "Globo Afrique: Transportation & Logistics Insights for Africa",
    slug: "globo-afrique-transportation-logistics-africa",
    description: "Comprehensive blog covering transportation, logistics, and fleet management across African markets with local expertise and industry insights.",
    excerpt: "Stay informed about African transportation trends, logistics innovations, and fleet management solutions tailored for the continent's unique challenges.",
    url: "https://globoafrique.com/blog/?utm_source=kyetologistics",
    source: "Globo Afrique",
    readTime: "Various",
    date: "2024",
    category: "African Logistics",
    tags: ["Africa", "Transportation", "Logistics"],
    lastModified: new Date("2024-01-01"),
  },
  {
    id: 15,
    title: "Telematics Solution Against Rising Fuel Prices in Africa",
    slug: "telematics-solution-fuel-prices-africa",
    description: "How embedded telematics helps African companies combat rising fuel costs through consumption monitoring, theft prevention, and efficiency optimization.",
    excerpt: "Discover practical strategies using telematics to reduce fuel expenses, detect theft, and optimize consumption in African fleet operations.",
    url: "https://ocean.fr/la-telematique-embarquee-une-solution-face-a-la-hausse-des-prix-du-carburant-en-afrique/?utm_source=kyetologistics",
    source: "Océan by Orange Business",
    readTime: "6 min read",
    date: "2024",
    category: "Cost Optimization",
    tags: ["Fuel Management", "Cost Reduction", "Africa"],
    lastModified: new Date("2024-01-01"),
  },
  {
    id: 16,
    title: "SLI Afrika: Transport & Logistics Intelligence",
    slug: "sli-afrika-transport-logistics-intelligence",
    description: "Industry intelligence and analysis for African transport and logistics sectors, covering market trends, regulations, and operational strategies.",
    excerpt: "Expert insights on African transport markets, regulatory developments, and strategic approaches to logistics challenges across the continent.",
    url: "https://www.sliafrika.com/public/index.php/fr/articles/38?utm_source=kyetologistics",
    source: "SLI Afrika",
    readTime: "8 min read",
    date: "2024",
    category: "Industry Intelligence",
    tags: ["Market Intelligence", "Regulations", "Strategy"],
    lastModified: new Date("2024-01-01"),
  },
  {
    id: 17,
    title: "Essential Fleet Management Technologies 2025: STG Analysis",
    slug: "fleet-management-technologies-2025",
    description: "In-depth analysis of must-have fleet management technologies for 2025, including AI, IoT, predictive analytics, and emerging innovations from STG Telematics.",
    excerpt: "Explore the cutting-edge technologies shaping fleet management in 2025, from artificial intelligence to connected vehicles and data-driven decision making.",
    url: "https://stgtelematics.com/les-technologies-incontournables-de-gestion-de-flotte-en-2025-analyse-et-perspectives-de-stg-telematics/?utm_source=kyetologistics",
    source: "STG Telematics",
    readTime: "11 min read",
    date: "2025",
    category: "Future Tech",
    tags: ["2025 Trends", "AI", "Technology"],
    lastModified: new Date("2025-01-01"),
  },
];

/**
 * Get all blog post slugs for sitemap generation
 */
export function getAllBlogSlugs(): string[] {
  return blogPosts.map(post => post.slug);
}

/**
 * Get blog post by slug
 */
export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}

/**
 * Get all blog categories
 */
export function getAllCategories(): string[] {
  return Array.from(new Set(blogPosts.map(post => post.category)));
}

/**
 * Get all blog tags
 */
export function getAllTags(): string[] {
  return Array.from(new Set(blogPosts.flatMap(post => post.tags)));
}

