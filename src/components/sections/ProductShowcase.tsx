"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Satellite, Shield, Zap } from "lucide-react";

const showcaseItems = [
  {
    id: 1,
    title: "Real-Time Fleet Visibility",
    description: "Track every vehicle in your fleet with GPS and satellite connectivity. Know exactly where your assets are, even in remote areas with poor network coverage.",
    features: [
      "Live GPS tracking with geofencing",
      "Satellite fallback for remote areas",
      "Historical route playback and analytics"
    ],
    icon: Satellite
  },
  {
    id: 2,
    title: "Seamless KLG Integration",
    description: "KFM data flows directly into KLG's logistics platform, enabling transparent operations from port to city with optimized routes and accurate ETAs.",
    features: [
      "Automated dispatch optimization",
      "Real-time job allocation",
      "Supply chain transparency"
    ],
    icon: Zap
  },
  {
    id: 3,
    title: "AI-Powered Safety & Efficiency",
    description: "Reduce accidents and fuel costs with driver behavior monitoring, in-cabin cameras, and predictive maintenance alerts powered by machine learning.",
    features: [
      "Driver safety scorecards",
      "Fuel theft detection & analytics",
      "Predictive maintenance scheduling"
    ],
    icon: Shield
  }
];

export function ProductShowcase() {
  return (
    <section className="py-24 bg-white">
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

        {/* Simple Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {showcaseItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-200 rounded-2xl p-8 hover:border-black hover:shadow-lg transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center mb-6">
                <item.icon className="w-8 h-8 text-white" />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                {item.description}
              </p>

              {/* Features */}
              <ul className="space-y-3">
                {item.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-black flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
