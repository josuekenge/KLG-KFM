"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Satellite, Shield, Zap, MapPin, Fuel, TrendingUp } from "lucide-react";

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
    icon: Satellite,
    visualType: "map"
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
    icon: Zap,
    visualType: "flow"
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
    icon: Shield,
    visualType: "stats"
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
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">
                    {item.title}
                  </h3>
                </div>
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

              {/* Visual Mockup - Different for each */}
              <div className="flex-1">
                {item.visualType === "map" && (
                  <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 shadow-2xl">
                    <div className="bg-white rounded-xl p-6">
                      {/* Map-style visualization */}
                      <div className="relative h-64 bg-gray-100 rounded-lg overflow-hidden">
                        {/* Grid pattern */}
                        <div className="absolute inset-0 grid grid-cols-8 grid-rows-6 gap-px bg-gray-200">
                          {Array.from({ length: 48 }).map((_, i) => (
                            <div key={i} className="bg-gray-50"></div>
                          ))}
                        </div>
                        
                        {/* Vehicle markers */}
                        <motion.div
                          animate={{ x: [20, 180], y: [30, 100] }}
                          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                          className="absolute w-8 h-8 bg-black rounded-lg flex items-center justify-center shadow-lg z-10"
                        >
                          <MapPin className="w-5 h-5 text-white" />
                        </motion.div>
                        
                        <motion.div
                          animate={{ x: [200, 60], y: [50, 150] }}
                          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                          className="absolute w-8 h-8 bg-black rounded-lg flex items-center justify-center shadow-lg z-10"
                        >
                          <MapPin className="w-5 h-5 text-white" />
                        </motion.div>
                        
                        <motion.div
                          animate={{ x: [100, 220], y: [140, 60] }}
                          transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
                          className="absolute w-8 h-8 bg-black rounded-lg flex items-center justify-center shadow-lg z-10"
                        >
                          <MapPin className="w-5 h-5 text-white" />
                        </motion.div>
                        
                        {/* Route lines */}
                        <svg className="absolute inset-0 w-full h-full z-0" style={{ pointerEvents: 'none' }}>
                          <motion.path
                            d="M 20 30 Q 100 80 180 100"
                            stroke="black"
                            strokeWidth="2"
                            strokeDasharray="5,5"
                            fill="none"
                            opacity="0.3"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 2, repeat: Infinity }}
                          />
                        </svg>
                      </div>
                      
                      {/* Status indicators */}
                      <div className="mt-4 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                          <span className="text-sm text-gray-600">12 Active</span>
                        </div>
                        <div className="text-sm font-semibold text-gray-900">Real-time Tracking</div>
                      </div>
                    </div>
                  </div>
                )}

                {item.visualType === "flow" && (
                  <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 shadow-2xl">
                    <div className="bg-white rounded-xl p-6">
                      {/* Simple 3-node flow */}
                      <div className="flex items-center justify-between py-8">
                        {[
                          { label: "Port", icon: MapPin },
                          { label: "Dispatch", icon: Zap },
                          { label: "Delivery", icon: TrendingUp }
                        ].map((node, i) => (
                          <div key={node.label} className="flex items-center gap-4">
                            <motion.div
                              initial={{ scale: 0, opacity: 0 }}
                              whileInView={{ scale: 1, opacity: 1 }}
                              transition={{ duration: 0.5, delay: i * 0.3 }}
                              viewport={{ once: true }}
                              className="flex flex-col items-center gap-2"
                            >
                              <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center">
                                <node.icon className="w-8 h-8 text-white" />
                              </div>
                              <span className="text-sm font-semibold text-gray-900">{node.label}</span>
                            </motion.div>
                            
                            {i < 2 && (
                              <motion.div
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                transition={{ duration: 0.8, delay: i * 0.3 + 0.4 }}
                                viewport={{ once: true }}
                                className="w-12 h-0.5 bg-black origin-left mx-2"
                              />
                            )}
                          </div>
                        ))}
                      </div>
                      
                      <div className="text-center pt-4 border-t border-gray-100">
                        <div className="flex items-center justify-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                          <span className="text-sm font-semibold text-gray-900">Real-time Sync</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {item.visualType === "stats" && (
                  <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 shadow-2xl">
                    <div className="bg-white rounded-xl p-6">
                      {/* Simple 3 key metrics */}
                      <div className="flex items-center justify-around py-8">
                        {[
                          { icon: Fuel, value: "-35%", label: "Fuel Costs" },
                          { icon: Shield, value: "-40%", label: "Accidents" },
                          { icon: TrendingUp, value: "+28%", label: "Efficiency" }
                        ].map((stat, i) => (
                          <motion.div
                            key={stat.label}
                            initial={{ scale: 0, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5, delay: i * 0.2 }}
                            viewport={{ once: true }}
                            className="flex flex-col items-center gap-3"
                          >
                            <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center">
                              <stat.icon className="w-8 h-8 text-white" />
                            </div>
                            <div className="text-center">
                              <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                              <div className="text-xs text-gray-600 mt-1">{stat.label}</div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                      
                      <div className="text-center pt-4 border-t border-gray-100">
                        <div className="flex items-center justify-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                          <span className="text-sm font-semibold text-gray-900">AI-Powered Insights</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
