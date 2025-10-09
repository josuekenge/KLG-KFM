"use client";

import { motion } from "framer-motion";
import { Truck, Radio, LineChart } from "lucide-react";

const steps = [
  {
    icon: Truck,
    number: "01",
    title: "Install Hardware",
    description: "Our team installs rugged GPS devices and sensors on your fleet vehicles.",
    color: "from-gray-900 to-black"
  },
  {
    icon: Radio,
    number: "02",
    title: "Connect & Track",
    description: "Real-time data flows to your dashboard via cellular and satellite networks.",
    color: "from-black to-gray-800"
  },
  {
    icon: LineChart,
    number: "03",
    title: "Optimize Operations",
    description: "Leverage AI insights to reduce costs, improve safety, and boost efficiency.",
    color: "from-gray-800 to-gray-900"
  }
];

export function ProcessSection() {
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
            How it Works
          </motion.p>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Get started in 3 simple steps
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            From installation to optimization, KFM makes fleet management simple. Our expert team handles the technical details so you can focus on growing your business.
          </motion.p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-gray-200 to-transparent -ml-6"></div>
              )}

              <div className="text-center relative z-10">
                {/* Icon */}
                <motion.div 
                  className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center shadow-md hover:shadow-xl`}
                  whileHover={{ scale: 1.05, y: -4 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  <step.icon className="w-10 h-10 text-white" />
                </motion.div>

                {/* Number */}
                <div className="text-6xl font-bold text-gray-100 mb-4">
                  {step.number}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
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
          className="text-center"
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

