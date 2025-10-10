"use client";

import { motion } from "framer-motion";
import { Satellite, HardDrive, TrendingUp, Users } from "lucide-react";

const features = [
  {
    icon: Satellite,
    title: "Frontier Market Ready",
    description: "Rugged devices with satellite fallback designed for challenging environments and unreliable connectivity",
    gradient: "from-gray-900 to-black"
  },
  {
    icon: HardDrive,
    title: "Data-Driven Insights",
    description: "Transform raw telematics data into actionable intelligence for optimized operations and cost reduction",
    gradient: "from-gray-800 to-gray-900"
  },
  {
    icon: TrendingUp,
    title: "Scalable Solutions",
    description: "Flexible subscription model that grows with your fleet, from GPS-only to premium safety packages",
    gradient: "from-black to-gray-800"
  },
  {
    icon: Users,
    title: "Local Support",
    description: "Dedicated support infrastructure with local expertise for SMEs, enterprises, and government fleets",
    gradient: "from-gray-900 to-gray-700"
  }
];

export function FeaturesSection() {
  return (
    <section id="features" className="relative py-24 bg-white overflow-hidden">
      {/* Subtle dot grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle, black 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
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
            Built for Frontier Markets
          </motion.p>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            The digital backbone for vehicle operations
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            KFM provides end-to-end fleet management designed for emerging markets. From rugged hardware to AI-powered analytics, we deliver solutions that work in the toughest conditions.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="text-center group">
                {/* Icon with gradient background */}
                <motion.div 
                  className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center shadow-md group-hover:shadow-2xl`}
                  whileHover={{ scale: 1.05, y: -4 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-black transition-colors duration-200">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed text-base">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

