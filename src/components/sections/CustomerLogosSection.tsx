"use client";

import { motion } from "framer-motion";

// Customer logos as SVG components for better performance
const customerLogos = [
  {
    name: "Total Energies",
    description: "Energy sector fleet",
  },
  {
    name: "DHL",
    description: "International logistics",
  },
  {
    name: "MONUSCO",
    description: "UN operations",
  },
  {
    name: "Vodacom",
    description: "Telecommunications",
  },
  {
    name: "Equity Bank",
    description: "Financial services",
  },
  {
    name: "Rawbank",
    description: "Banking sector",
  },
];

export function CustomerLogosSection() {
  return (
    <section className="relative py-16 bg-gray-50 border-y border-gray-200">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-sm font-semibold text-gray-600 uppercase tracking-wider mb-2">
            Trusted By
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Leading Organizations Across Africa
          </h2>
        </motion.div>

        {/* Customer Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center max-w-6xl mx-auto">
          {customerLogos.map((customer, index) => (
            <motion.div
              key={customer.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center justify-center group"
            >
              <div className="w-full h-20 bg-white rounded-lg border border-gray-200 hover:border-black hover:shadow-md transition-all duration-300 flex items-center justify-center p-4 group-hover:scale-105">
                <div className="text-center">
                  <div className="font-bold text-gray-900 text-sm mb-1">
                    {customer.name}
                  </div>
                  <div className="text-xs text-gray-500">
                    {customer.description}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-8 bg-white rounded-full px-8 py-4 border border-gray-200 shadow-sm">
            <div>
              <div className="text-2xl font-bold text-black">500+</div>
              <div className="text-xs text-gray-600">Companies</div>
            </div>
            <div className="w-px h-8 bg-gray-200"></div>
            <div>
              <div className="text-2xl font-bold text-black">12</div>
              <div className="text-xs text-gray-600">Countries</div>
            </div>
            <div className="w-px h-8 bg-gray-200"></div>
            <div>
              <div className="text-2xl font-bold text-black">15K+</div>
              <div className="text-xs text-gray-600">Vehicles</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

