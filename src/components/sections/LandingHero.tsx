"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import { PixelTrail } from "@/components/animations/PixelTrail";

export function LandingHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Pixel Trail Background */}
      <PixelTrail
        particleCount={60}
        particleSize={1.5}
        trailLength={25}
        speed={0.3}
        color="#10b981"
        opacity={0.4}
        className="absolute inset-0"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/20 to-gray-900/40" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-brand-primary/10 border border-brand-primary/20 rounded-full px-4 py-2 mb-8"
          >
            <div className="w-2 h-2 bg-brand-primary rounded-full animate-pulse" />
            <span className="text-brand-primary text-sm font-medium">
              Fleet Management & Logistics Technology
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Digitizing{" "}
            <span className="text-gradient bg-gradient-to-r from-brand-primary to-brand-accent bg-clip-text text-transparent">
              Transportation
            </span>{" "}
            Operations
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Kyeto Logistics Group provides integrated logistics, telematics, AI, and data analytics solutions for transparent, efficient, and secure supply chain operations in frontier and emerging markets.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Link
              href="/contact"
              className="group relative inline-flex items-center justify-center px-8 py-4 bg-brand-primary text-white rounded-xl font-semibold text-lg hover:bg-brand-accent transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-brand-primary/25"
            >
              <span>Get Started</span>
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              {/* Ripple effect */}
              <div className="absolute inset-0 rounded-xl bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-300" />
            </Link>

            <Link
              href="/platform"
              className="inline-flex items-center justify-center px-8 py-4 border border-gray-600 text-white rounded-xl font-semibold text-lg hover:bg-gray-800 transition-all duration-300 hover:scale-105"
            >
              <Play className="mr-2 w-5 h-5" />
              View Platform
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto"
          >
            {[
              { value: "500+", label: "Fleet Vehicles" },
              { value: "99.9%", label: "Uptime" },
              { value: "24/7", label: "Monitoring" },
              { value: "50+", label: "Countries" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-gray-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
