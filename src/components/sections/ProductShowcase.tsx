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
                      {/* Flow diagram */}
                      <div className="space-y-4">
                        {/* Nodes */}
                        {[
                          { label: "Port", icon: MapPin, delay: 0 },
                          { label: "Warehouse", icon: MapPin, delay: 0.2 },
                          { label: "Distribution", icon: Zap, delay: 0.4 },
                          { label: "Delivery", icon: TrendingUp, delay: 0.6 }
                        ].map((node, i) => (
                          <motion.div
                            key={node.label}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: node.delay }}
                            viewport={{ once: true }}
                            className="flex items-center gap-4"
                          >
                            <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center flex-shrink-0">
                              <node.icon className="w-6 h-6 text-white" />
                            </div>
                            <div className="flex-1">
                              <div className="text-sm font-semibold text-gray-900 mb-1">{node.label}</div>
                              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                                <motion.div
                                  className="h-full bg-gradient-to-r from-gray-900 to-black"
                                  initial={{ width: 0 }}
                                  whileInView={{ width: `${Math.random() * 40 + 60}%` }}
                                  transition={{ duration: 1.5, delay: node.delay + 0.3 }}
                                  viewport={{ once: true }}
                                />
                              </div>
                            </div>
                            {i < 3 && (
                              <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: [0.2, 1, 0.2] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="text-gray-400"
                              >
                                ↓
                              </motion.div>
                            )}
                          </motion.div>
                        ))}
                      </div>
                      
                      <div className="mt-6 pt-4 border-t border-gray-100">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-600">Integration Status</span>
                          <span className="font-semibold text-green-600">Active</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {item.visualType === "stats" && (
                  <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 shadow-2xl">
                    <div className="bg-white rounded-xl p-6">
                      {/* Stats grid */}
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          className="bg-gray-50 rounded-lg p-4 border border-gray-200"
                        >
                          <Fuel className="w-6 h-6 text-black mb-2" />
                          <div className="text-2xl font-bold text-gray-900">-35%</div>
                          <div className="text-xs text-gray-600">Fuel Costs</div>
                        </motion.div>
                        
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          className="bg-gray-50 rounded-lg p-4 border border-gray-200"
                        >
                          <Shield className="w-6 h-6 text-black mb-2" />
                          <div className="text-2xl font-bold text-gray-900">-40%</div>
                          <div className="text-xs text-gray-600">Accidents</div>
                        </motion.div>
                        
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          className="bg-gray-50 rounded-lg p-4 border border-gray-200"
                        >
                          <TrendingUp className="w-6 h-6 text-black mb-2" />
                          <div className="text-2xl font-bold text-gray-900">+28%</div>
                          <div className="text-xs text-gray-600">Efficiency</div>
                        </motion.div>
                        
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          className="bg-gray-50 rounded-lg p-4 border border-gray-200"
                        >
                          <Zap className="w-6 h-6 text-black mb-2" />
                          <div className="text-2xl font-bold text-gray-900">99.9%</div>
                          <div className="text-xs text-gray-600">Uptime</div>
                        </motion.div>
                      </div>
                      
                      {/* Line chart visualization */}
                      <div className="bg-gray-50 rounded-lg p-4 h-24 flex items-end gap-1">
                        {[40, 55, 45, 70, 60, 85, 75, 90, 80, 95].map((height, i) => (
                          <motion.div
                            key={i}
                            initial={{ height: 0 }}
                            whileInView={{ height: `${height}%` }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="flex-1 bg-gradient-to-t from-gray-900 to-black rounded-t"
                          />
                        ))}
                      </div>
                      
                      <div className="mt-3 text-center text-xs text-gray-500">
                        Performance Improvement Over Time
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
