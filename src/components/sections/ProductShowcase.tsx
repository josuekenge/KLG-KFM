"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const showcaseItems = [
  {
    id: 1,
    title: "Real-Time Fleet Visibility",
    description: "Track every vehicle in your fleet with GPS and satellite connectivity. Know exactly where your assets are, even in remote areas with poor network coverage.",
    features: [
      "Live GPS tracking with geofencing",
      "Satellite fallback for remote areas",
      "Historical route playback and analytics"
    ]
  },
  {
    id: 2,
    title: "Seamless KLG Integration",
    description: "KFM data flows directly into KLG's logistics platform, enabling transparent operations from port to city with optimized routes and accurate ETAs.",
    features: [
      "Automated dispatch optimization",
      "Real-time job allocation",
      "Supply chain transparency"
    ]
  },
  {
    id: 3,
    title: "AI-Powered Safety & Efficiency",
    description: "Reduce accidents and fuel costs with driver behavior monitoring, in-cabin cameras, and predictive maintenance alerts powered by machine learning.",
    features: [
      "Driver safety scorecards",
      "Fuel theft detection & analytics",
      "Predictive maintenance scheduling"
    ]
  }
];

export function ProductShowcase() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-sm font-semibold text-black uppercase tracking-wider mb-4"
          >
            Comprehensive Fleet Management
          </motion.p>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Built for the toughest conditions
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            From GPS tracking to AI-powered safety cameras, KFM delivers enterprise-grade fleet management designed specifically for frontier and emerging markets.
          </motion.p>
        </div>

        {/* Showcase Items */}
        <div className="space-y-24">
          {showcaseItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
            >
              {/* Content */}
              <div className="flex-1">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  {item.description}
                </p>
                <ul className="space-y-3">
                  {item.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-black flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Dashboard Mockup */}
              <div className="flex-1">
                <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8 shadow-xl">
                  <div className="bg-white rounded-xl p-6 shadow-inner">
                    <div className="space-y-4">
                      {/* Dashboard header */}
                      <div className="flex items-center justify-between pb-3 border-b border-gray-200">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-black rounded-lg"></div>
                          <div className="h-3 w-24 bg-gray-200 rounded"></div>
                        </div>
                        <div className="flex gap-1">
                          <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                          <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                          <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                        </div>
                      </div>
                      
                      {/* Content area */}
                      <div className="grid grid-cols-2 gap-3">
                        {[1, 2, 3, 4].map((i) => (
                          <div key={i} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-3">
                            <div className="h-2 w-16 bg-gray-200 rounded mb-2"></div>
                            <div className="h-4 w-12 bg-black rounded"></div>
                          </div>
                        ))}
                      </div>
                      
                      {/* Chart */}
                      <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-4 h-32 flex items-end gap-1">
                        {[30, 60, 40, 70, 50, 80, 60].map((height, i) => (
                          <div
                            key={i}
                            className="flex-1 bg-gradient-to-t from-gray-900 to-black rounded-t"
                            style={{ height: `${height}%` }}
                          ></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

