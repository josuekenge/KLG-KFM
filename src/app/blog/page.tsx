"use client";

import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Calendar, Clock } from "lucide-react";
import Link from "next/link";

const blogPosts = [
  {
    id: 1,
    title: "Fleet Management Systems in Africa: A Complete Guide",
    description: "Navigating the transportation and logistics industry challenges requires a strategic approach. This comprehensive guide covers key components, challenges, and strategies for maximizing fleet management systems across Africa.",
    excerpt: "Discover how effective fleet management systems unlock efficiency for logistics and transportation businesses across Africa, from route optimization to vehicle maintenance and driver safety.",
    url: "https://supplychainnuggets.com/fleet-management-systems/?utm_source=kyetologistics",
    source: "Supply Chain Nuggets",
    readTime: "7 min read",
    date: "June 16, 2023",
    category: "Fleet Management",
    tags: ["Africa", "Logistics", "Technology"],
  },
  {
    id: 2,
    title: "How to Implement IoT in Fleet Management: Complete Guide",
    description: "Learn how IoT technology revolutionizes fleet management with real-time tracking, predictive maintenance, and enhanced safety features. A practical guide to implementing IoT solutions for your fleet operations.",
    excerpt: "Explore the power of IoT in fleet management - from GPS tracking to predictive maintenance. Discover how connected vehicles enable smoother operations, reduced costs, and safer rides.",
    url: "https://volpis.com/blog/how-to-implement-iot-in-fleet-management/?utm_source=kyetologistics",
    source: "Volpis",
    readTime: "12 min read",
    date: "October 8, 2024",
    category: "Technology",
    tags: ["IoT", "Innovation", "Software"],
  },
  {
    id: 3,
    title: "IoT Fleet Management: The Future of Connected Vehicles",
    description: "Understand how IoT sensors and telematics transform fleet operations with data-driven insights, fuel efficiency tracking, and driver behavior monitoring for improved safety and productivity.",
    excerpt: "The Internet of Things is reshaping fleet management. Learn about key IoT components, use cases, and how connected vehicles are driving the future of logistics.",
    url: "https://www.geotab.com/blog/iot-fleet-management/?utm_source=kyetologistics",
    source: "Geotab",
    readTime: "8 min read",
    date: "2024",
    category: "Telematics",
    tags: ["IoT", "GPS Tracking", "Analytics"],
  },
  {
    id: 4,
    title: "Sensors and IoT in Fleet Management: A Practical Overview",
    description: "Dive deep into how sensors and IoT devices monitor vehicle health, track assets, and optimize fleet performance. Learn about implementation strategies and real-world applications.",
    excerpt: "From temperature sensors to GPS trackers, discover how IoT sensors provide real-time fleet visibility and enable predictive maintenance to reduce downtime.",
    url: "https://upkeep.com/learning/sensors-and-iot-in-fleet-management/?utm_source=kyetologistics",
    source: "UpKeep",
    readTime: "6 min read",
    date: "2024",
    category: "Maintenance",
    tags: ["Sensors", "Predictive Maintenance", "IoT"],
  },
  {
    id: 5,
    title: "South African Fleets: 4 Key Struggles and How to Overcome Them",
    description: "Explore the unique challenges facing fleet operations in South Africa - from fuel theft to road conditions - and discover proven solutions to overcome these obstacles.",
    excerpt: "Learn how South African fleet managers tackle fuel theft, poor infrastructure, driver safety, and compliance issues with modern fleet management solutions.",
    url: "https://www.frotcom.com/blog/2025/04/south-african-fleets-4-key-struggles-and-how-overcome-them?utm_source=kyetologistics",
    source: "Frotcom",
    readTime: "5 min read",
    date: "April 2025",
    category: "Regional Insights",
    tags: ["South Africa", "Challenges", "Solutions"],
  },
  {
    id: 6,
    title: "FleetRabbit Blog: Fleet Management Insights & Best Practices",
    description: "Access a comprehensive collection of fleet management articles covering industry trends, technology updates, and operational best practices for modern fleet operations.",
    excerpt: "Stay updated with the latest fleet management insights, from telematics innovations to driver safety programs and cost optimization strategies.",
    url: "https://fleetrabbit.com/blogs/?utm_source=kyetologistics",
    source: "FleetRabbit",
    readTime: "Various",
    date: "2024",
    category: "Industry News",
    tags: ["Best Practices", "Trends", "Innovation"],
  },
  {
    id: 7,
    title: "Africa Fleet Management Market: Growth & Opportunities",
    description: "Comprehensive market analysis of Africa's fleet management industry, covering market size, growth drivers, key players, and future opportunities across the continent.",
    excerpt: "Explore the booming African fleet management market with insights on technology adoption, market trends, and investment opportunities in this rapidly growing sector.",
    url: "https://mobilityforesights.com/product/africa-fleet-management-market?utm_source=kyetologistics",
    source: "Mobility Foresights",
    readTime: "10 min read",
    date: "2024",
    category: "Market Analysis",
    tags: ["Market Research", "Africa", "Growth"],
  },
  {
    id: 8,
    title: "Tech-Powered Fleets: Safer, Smarter Transport Solutions",
    description: "Discover how technology is revolutionizing fleet safety and efficiency with AI-powered dashcams, telematics, and real-time monitoring for smarter transport operations.",
    excerpt: "Learn about cutting-edge technologies transforming fleet safety - from collision avoidance systems to driver behavior analytics and predictive maintenance.",
    url: "https://focusontransport.co.za/tech-powered-fleets-safer-smarter-transport/?utm_source=kyetologistics",
    source: "Focus on Transport",
    readTime: "6 min read",
    date: "2024",
    category: "Safety Tech",
    tags: ["Safety", "AI", "Technology"],
  },
  {
    id: 9,
    title: "The Rise of Logistics Startups in Africa & Marketing Platforms",
    description: "Explore how logistics startups are transforming African supply chains with innovative solutions and the critical role of marketing platforms in their growth.",
    excerpt: "Discover the boom in African logistics startups and how digital marketing platforms are helping them scale operations and reach new markets across the continent.",
    url: "https://yournotify.com/blog/the-rise-of-logistics-startups-in-africa-and-the-role-of-marketing-platforms/?utm_source=kyetologistics",
    source: "YourNotify",
    readTime: "8 min read",
    date: "2024",
    category: "Startups",
    tags: ["Logistics", "Africa", "Marketing"],
  },
  {
    id: 10,
    title: "Africa's Vehicle Fleet Could Double by 2050: EV Implications",
    description: "Analysis of Africa's projected vehicle fleet growth and the critical implications for electric vehicle adoption, infrastructure, and sustainable transport solutions.",
    excerpt: "With Africa's fleet set to double by 2050, explore the opportunities and challenges for EV adoption, charging infrastructure, and the future of sustainable transport.",
    url: "https://energyforgrowth.org/article/africas-vehicle-fleet-could-double-by-2050-what-does-this-mean-for-evs/?utm_source=kyetologistics",
    source: "Energy for Growth",
    readTime: "9 min read",
    date: "2024",
    category: "Sustainability",
    tags: ["Electric Vehicles", "Future", "Environment"],
  },
];

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
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 mb-8 px-4 py-2 bg-gray-100 border border-gray-200 rounded-full text-gray-900 text-sm font-medium"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-black"></span>
              </span>
              Industry Insights & Resources
            </motion.div>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
              Fleet Management <span className="text-black">Insights</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-4 max-w-3xl mx-auto leading-relaxed">
              Expert articles, guides, and industry insights on fleet management, telematics, and logistics technology across Africa and beyond.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
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
              </motion.article>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="inline-block bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to Transform Your Fleet?
              </h3>
              <p className="text-gray-600 mb-6 max-w-xl">
                Get expert insights and discover how our fleet management solutions can optimize your operations.
              </p>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-black hover:bg-gray-900 text-white font-semibold rounded-lg transition-all duration-200 shadow-md hover:shadow-lg group"
              >
                Contact Our Team
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

