"use client";

import { motion } from "framer-motion";
import { DollarSign, TrendingUp, Shield, Clock, Wrench, Globe } from "lucide-react";

const benefits = [
  {
    icon: DollarSign,
    title: "Reduce Operating Costs",
    description: "Cut fuel theft, optimize routes, and reduce insurance premiums through proven safety improvements",
    color: "black"
  },
  {
    icon: TrendingUp,
    title: "Data-Driven Growth",
    description: "Transform telematics data into recurring revenue opportunities and operational intelligence",
    color: "black"
  },
  {
    icon: Shield,
    title: "Enhanced Safety",
    description: "AI-powered driver coaching and real-time alerts reduce accidents and liability",
    color: "black"
  },
  {
    icon: Clock,
    title: "Improve Reliability",
    description: "Predictive maintenance and live tracking ensure on-time deliveries and higher customer satisfaction",
    color: "black"
  },
  {
    icon: Wrench,
    title: "Rugged & Reliable",
    description: "Hardware built for harsh conditions with satellite backup when cellular networks fail",
    color: "black"
  },
  {
    icon: Globe,
    title: "Local Expertise",
    description: "Dedicated support teams who understand frontier market challenges and provide hands-on assistance",
    color: "black"
  }
];

const colorClasses = {
  black: "from-gray-900 to-black"
};

export function BenefitsSection() {
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
            Why KFM?
          </motion.p>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Purpose-built for emerging markets
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            While global leaders like Cartrack, Samsara, and Geotab excel in developed markets, KFM provides specialized solutions for challenging environments with unreliable connectivity and harsh conditions.
          </motion.p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:border-gray-900 hover:shadow-lg transition-all duration-200 shadow-sm">
                {/* Icon */}
                <div className={`w-14 h-14 bg-gradient-to-br ${colorClasses[benefit.color as keyof typeof colorClasses]} rounded-xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-200`}>
                  <benefit.icon className="w-7 h-7 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-black transition-colors duration-200">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed text-base">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="px-8 py-4 bg-black hover:bg-gray-800 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Get Started
            </a>
            <a 
              href="/platform" 
              className="px-8 py-4 bg-white border-2 border-gray-900 hover:bg-gray-50 text-gray-900 font-semibold rounded-xl transition-all duration-200"
            >
              Book a Demo
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

