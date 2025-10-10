"use client";

import { motion } from "framer-motion";
import { Satellite, Shield, Zap } from "lucide-react";

const features = [
  {
    icon: Satellite,
    title: "GPS Tracking",
    description: "Real-time visibility with satellite backup for remote areas"
  },
  {
    icon: Zap,
    title: "KLG Integration",
    description: "Seamless data flow from port to city operations"
  },
  {
    icon: Shield,
    title: "AI Safety",
    description: "Reduce accidents and fuel costs with smart insights"
  }
];

export function ProductShowcase() {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Subtle crosshatch pattern - same as FAQ */}
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
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-sm font-semibold text-black uppercase tracking-wider mb-4"
          >
            Our Solutions
          </motion.p>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Built for tough conditions
          </motion.h2>
        </div>

        {/* Simple 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
