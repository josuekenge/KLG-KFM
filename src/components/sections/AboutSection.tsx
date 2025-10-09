"use client";

import { motion } from "framer-motion";
import { Target, Users, Globe, Zap } from "lucide-react";

const stats = [
  { value: "500+", label: "Active Fleets" },
  { value: "15,000+", label: "Vehicles Tracked" },
  { value: "12", label: "African Countries" },
  { value: "99.9%", label: "Uptime Reliability" }
];

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description: "To provide enterprise-grade fleet management solutions specifically designed for frontier and emerging markets, where reliability matters most."
  },
  {
    icon: Users,
    title: "Who We Serve",
    description: "SMEs, large logistics companies, mining operations, government fleets, and specialized cargo operators across Africa."
  },
  {
    icon: Globe,
    title: "What Makes Us Different",
    description: "Unlike global competitors, KFM is built for challenging environments with satellite backup, rugged hardware, and local support teams."
  },
  {
    icon: Zap,
    title: "Our Approach",
    description: "We integrate seamlessly with KLG&apos;s logistics platform, providing end-to-end visibility from port to city with real-time tracking and AI-powered insights."
  }
];

export function AboutSection() {
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
            About KFM
          </motion.p>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Fleet Management Built for Africa
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Kyeto Fleet Management (KFM) is the leading telematics and fleet management solution 
            for frontier markets, providing reliable tracking, safety, and efficiency tools where they&apos;re needed most.
          </motion.p>
        </div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-black mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-2xl p-8 hover:border-black hover:shadow-lg transition-all duration-200">
                <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200">
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* KLG Integration Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 bg-black text-white rounded-2xl p-8 md:p-12 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Part of Kyeto Logistics Group
          </h3>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            KFM data flows seamlessly into KLG&apos;s dispatch system and marketplace, 
            improving route optimization, job allocation, and ETA accuracy. 
            This integration enables transparent operations from port to city, 
            providing real-time visibility across the entire supply chain.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

