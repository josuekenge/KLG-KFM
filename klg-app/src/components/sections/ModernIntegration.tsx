"use client";

import { motion } from "framer-motion";
import { ArrowRight, Zap, BarChart3, Users, Globe, Sparkles, TrendingUp, Shield, Clock } from "lucide-react";

export function ModernIntegration() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Enhanced Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30, scale: 0.9 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-white/10 border border-white/20 rounded-full text-white backdrop-blur-xl shadow-lg"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-5 h-5 text-cyan-400" />
              </motion.div>
              <span className="text-sm font-bold tracking-wide">
                Seamless Integration
              </span>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
              viewport={{ once: true }}
              className="text-5xl md:text-6xl font-black text-white mb-8 leading-tight"
            >
              Unified{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Ecosystem
              </span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
              viewport={{ once: true }}
              className="text-xl text-gray-300 mb-12 leading-relaxed font-light"
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
                  color: "from-blue-500 to-cyan-500",
                  bgColor: "bg-blue-500/10",
                  borderColor: "border-blue-500/20"
                },
                {
                  icon: Users,
                  title: "Job Allocation",
                  description: "Intelligent assignment based on driver performance and location analytics",
                  color: "from-green-500 to-emerald-500",
                  bgColor: "bg-green-500/10",
                  borderColor: "border-green-500/20"
                },
                {
                  icon: Globe,
                  title: "ETA Accuracy",
                  description: "Precise arrival times with live tracking and traffic data integration",
                  color: "from-purple-500 to-pink-500",
                  bgColor: "bg-purple-500/10",
                  borderColor: "border-purple-500/20"
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30, scale: 0.95 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: 0.3 + index * 0.1, 
                    ease: [0.4, 0, 0.2, 1] 
                  }}
                  viewport={{ once: true }}
                  whileHover={{ x: 8, scale: 1.02 }}
                  className="group"
                >
                  <div className={`flex items-start gap-6 p-8 ${item.bgColor} border ${item.borderColor} rounded-3xl backdrop-blur-sm hover:shadow-2xl transition-all duration-500`}>
                    <motion.div 
                      className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                      whileHover={{ rotate: 5 }}
                    >
                      <item.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-300">
                        {item.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed text-lg">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Enhanced Visual Diagram */}
          <motion.div
            initial={{ opacity: 0, x: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white/10 backdrop-blur-2xl rounded-3xl p-10 border border-white/20 shadow-2xl">
              <div className="text-center mb-12">
                <motion.h3 
                  className="text-3xl font-bold text-white mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  Data Flow Integration
                </motion.h3>
                <motion.p 
                  className="text-gray-300 text-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  From Fleet Management to Logistics Operations
                </motion.p>
              </div>

              {/* Enhanced flow diagram */}
              <div className="space-y-8">
                {/* KFM */}
                <motion.div 
                  className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-2xl p-6 backdrop-blur-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center gap-4">
                    <motion.div 
                      className="w-14 h-14 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg"
                      whileHover={{ rotate: 10 }}
                    >
                      <Zap className="w-7 h-7 text-white" />
                    </motion.div>
                    <div>
                      <h4 className="text-xl font-bold text-white">KFM Fleet Management</h4>
                      <p className="text-cyan-300 font-medium">GPS, Fuel, Safety Data</p>
                    </div>
                  </div>
                </motion.div>

                {/* Enhanced Flow Arrow */}
                <div className="flex justify-center">
                  <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="relative"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
                      <ArrowRight className="w-6 h-6 text-white rotate-90" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur opacity-50 animate-pulse"></div>
                  </motion.div>
                </div>

                {/* KLG */}
                <motion.div 
                  className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-2xl p-6 backdrop-blur-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center gap-4">
                    <motion.div 
                      className="w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg"
                      whileHover={{ rotate: -10 }}
                    >
                      <Globe className="w-7 h-7 text-white" />
                    </motion.div>
                    <div>
                      <h4 className="text-xl font-bold text-white">KLG Logistics Platform</h4>
                      <p className="text-purple-300 font-medium">Dispatch & Marketplace</p>
                    </div>
                  </div>
                </motion.div>

                {/* Enhanced Benefits Grid */}
                <div className="grid grid-cols-2 gap-4 mt-8">
                  {[
                    { text: "Improved Routes", icon: TrendingUp, color: "from-blue-500 to-cyan-500" },
                    { text: "Smart Allocation", icon: Users, color: "from-green-500 to-emerald-500" }, 
                    { text: "Accurate ETAs", icon: Clock, color: "from-purple-500 to-pink-500" },
                    { text: "Transparent Ops", icon: Shield, color: "from-orange-500 to-red-500" }
                  ].map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="group flex items-center gap-3 p-4 bg-white/10 border border-white/20 rounded-2xl backdrop-blur-sm hover:bg-white/15 transition-all duration-300"
                    >
                      <div className={`w-8 h-8 bg-gradient-to-r ${benefit.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <benefit.icon className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-sm text-white font-semibold">{benefit.text}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}






