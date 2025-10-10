"use client";

import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <section id="about" className="relative py-24 bg-white overflow-hidden">
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
            About Us
          </motion.p>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Fleet Management for Africa
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Headquartered in Kinshasa, Democratic Republic of Congo
          </motion.p>
        </div>

        {/* Simple Content */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16"
          >
            {/* Who We Are */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">Who We Are</h3>
              <p className="text-gray-700 leading-relaxed">
                Kyeto Fleet Management (KFM) is a leading telematics provider specializing in fleet solutions for frontier markets across 12 African countries.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Part of Kyeto Logistics Group, we deliver solutions that work in challenging environments with unreliable connectivity and harsh conditions.
              </p>
            </div>

            {/* What We Do */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">What We Do</h3>
              <p className="text-gray-700 leading-relaxed">
                We provide GPS tracking, fuel monitoring, driver safety analysis, and predictive maintenance—all in one platform.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our hybrid connectivity automatically switches to satellite when cellular fails, ensuring continuous tracking in remote areas.
              </p>
            </div>
          </motion.div>

          {/* Simple Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-black text-white rounded-2xl p-8 text-center mb-12"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <div className="text-3xl font-bold mb-1">500+</div>
                <div className="text-sm text-gray-300">Active Fleets</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-1">15K+</div>
                <div className="text-sm text-gray-300">Vehicles</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-1">12</div>
                <div className="text-sm text-gray-300">Countries</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-1">99.9%</div>
                <div className="text-sm text-gray-300">Uptime</div>
              </div>
            </div>
          </motion.div>

          {/* CTA after credibility */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-gray-600 mb-6 text-lg">
              Join 500+ fleets across 12 African countries
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-black hover:bg-gray-900 text-white font-semibold rounded-xl transition-all duration-200 shadow-md hover:shadow-xl hover:scale-105"
            >
              Start Your Fleet Transformation
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
