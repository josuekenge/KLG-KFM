"use client";

import { motion } from "framer-motion";
import { ArrowRight, Zap, BarChart3, Users, Globe } from "lucide-react";

export function IntegrationSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-white mb-6"
            >
              Seamless{" "}
              <span className="text-gradient">Integration</span>{" "}
              Story
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-gray-300 mb-8"
            >
              KFM data flows seamlessly into KLG&apos;s dispatch system and marketplace, 
              creating a unified ecosystem that improves operations from port to city.
            </motion.p>

            <div className="space-y-6">
              {[
                {
                  icon: BarChart3,
                  title: "Route Optimization",
                  description: "Real-time data improves route planning and reduces fuel consumption",
                },
                {
                  icon: Users,
                  title: "Job Allocation",
                  description: "Intelligent assignment based on driver performance and location",
                },
                {
                  icon: Globe,
                  title: "ETA Accuracy",
                  description: "Precise arrival times with live tracking and traffic data",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
                  <div className="w-12 h-12 bg-brand-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-brand-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-400">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Visual Diagram */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
              <div className="text-center mb-8">
                <h3 className="text-xl font-semibold text-white mb-2">
                  Data Flow Integration
                </h3>
                <p className="text-gray-400">
                  From Fleet Management to Logistics Operations
                </p>
              </div>

              {/* Flow Diagram */}
              <div className="space-y-6">
                {/* KFM */}
                <div className="bg-brand-primary/10 rounded-lg p-4 border border-brand-primary/20">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center">
                      <Zap className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">KFM Fleet Management</h4>
                      <p className="text-sm text-gray-400">GPS, Fuel, Safety Data</p>
                    </div>
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex justify-center">
                  <ArrowRight className="w-6 h-6 text-brand-primary" />
                </div>

                {/* KLG */}
                <div className="bg-gray-700 rounded-lg p-4 border border-gray-600">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gray-600 rounded-lg flex items-center justify-center">
                      <Globe className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">KLG Logistics Platform</h4>
                      <p className="text-sm text-gray-400">Dispatch & Marketplace</p>
                    </div>
                  </div>
                </div>

                {/* Benefits */}
                <div className="grid grid-cols-1 gap-3 mt-6">
                  {[
                    "Improved Route Optimization",
                    "Enhanced Job Allocation", 
                    "Accurate ETA Predictions",
                    "Transparent Operations"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-2 text-sm text-gray-300">
                      <div className="w-1.5 h-1.5 bg-brand-primary rounded-full" />
                      <span>{benefit}</span>
                    </div>
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
