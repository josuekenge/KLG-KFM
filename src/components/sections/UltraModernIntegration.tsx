"use client";

import { motion } from "framer-motion";
import { ArrowRight, Zap, BarChart3, Users, Globe, Sparkles } from "lucide-react";

export function UltraModernIntegration() {
  return (
    <section className="section-padding bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-50">
        <div className="w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:60px_60px]" />
      </div>
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 mb-6"
            >
              <Sparkles className="w-5 h-5 text-brand-primary" />
              <span className="text-sm font-semibold text-brand-primary uppercase tracking-wider">
                Seamless Integration
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight"
            >
              Unified{" "}
              <span className="gradient-text">Ecosystem</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
              viewport={{ once: true }}
              className="text-xl text-gray-300 mb-12 leading-relaxed"
            >
              KFM data flows seamlessly into KLG&apos;s dispatch system and marketplace, 
              creating a unified ecosystem that improves operations from port to city.
            </motion.p>

            <div className="space-y-8">
              {[
                {
                  icon: BarChart3,
                  title: "Route Optimization",
                  description: "Real-time data improves route planning and reduces fuel consumption by up to 15%",
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  icon: Users,
                  title: "Job Allocation",
                  description: "Intelligent assignment based on driver performance and location analytics",
                  color: "from-purple-500 to-pink-500"
                },
                {
                  icon: Globe,
                  title: "ETA Accuracy",
                  description: "Precise arrival times with live tracking and traffic data integration",
                  color: "from-green-500 to-emerald-500"
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.3 + index * 0.1, 
                    ease: [0.4, 0, 0.2, 1] 
                  }}
                  viewport={{ once: true }}
                  className="group flex items-start gap-6 p-6 glass-dark rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-primary transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Visual Diagram */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="glass-dark rounded-3xl p-8 border border-white/10 backdrop-blur-xl">
              <div className="text-center mb-12">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Data Flow Integration
                </h3>
                <p className="text-gray-300">
                  From Fleet Management to Logistics Operations
                </p>
              </div>

              {/* Ultra-modern flow diagram */}
              <div className="space-y-8">
                {/* KFM */}
                <motion.div 
                  className="glass-dark rounded-2xl p-6 border border-brand-primary/30 bg-brand-primary/10"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white">KFM Fleet Management</h4>
                      <p className="text-sm text-brand-primary">GPS, Fuel, Safety Data</p>
                    </div>
                  </div>
                </motion.div>

                {/* Flow Arrow */}
                <div className="flex justify-center">
                  <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <ArrowRight className="w-8 h-8 text-brand-primary rotate-90" />
                  </motion.div>
                </div>

                {/* KLG */}
                <motion.div 
                  className="glass-dark rounded-2xl p-6 border border-white/20"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                      <Globe className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white">KLG Logistics Platform</h4>
                      <p className="text-sm text-blue-400">Dispatch & Marketplace</p>
                    </div>
                  </div>
                </motion.div>

                {/* Benefits Grid */}
                <div className="grid grid-cols-2 gap-4 mt-8">
                  {[
                    "Improved Routes",
                    "Smart Allocation", 
                    "Accurate ETAs",
                    "Transparent Ops"
                  ].map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3 p-4 glass-dark rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300"
                    >
                      <div className="w-2 h-2 bg-brand-primary rounded-full" />
                      <span className="text-sm text-gray-300 font-medium">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-brand-primary to-brand-accent rounded-full opacity-60"
            />
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full opacity-60"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
