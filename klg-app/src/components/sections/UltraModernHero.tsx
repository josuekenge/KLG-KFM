"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Play, Sparkles, Zap } from "lucide-react";
import { SilkBackground } from "@/components/animations/SilkBackground";

export function UltraModernHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Silk Background Animation */}
      <SilkBackground 
        speed={3}
        scale={1.2}
        color="#10b981"
        noiseIntensity={1.2}
        rotation={0}
        className="opacity-40"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-white/10" />

      <div className="container relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Ultra-modern badge */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="inline-flex items-center gap-2 glass-dark rounded-full px-6 py-3 mb-8 border border-white/10"
          >
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-brand-primary" />
              <span className="text-sm font-medium text-white/90">
                Fleet Management & Logistics Technology
              </span>
            </div>
            <div className="w-2 h-2 bg-brand-primary rounded-full animate-pulse" />
          </motion.div>

          {/* Ultra-modern headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-[0.9] tracking-tight"
          >
            Digitizing{" "}
            <span className="relative">
              <span className="gradient-text">Transportation</span>
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.6, ease: [0.4, 0, 0.2, 1] }}
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-brand-primary to-brand-accent rounded-full"
              />
            </span>{" "}
            Operations
          </motion.h1>

          {/* Ultra-modern subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="text-xl md:text-2xl text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed font-light"
          >
            Kyeto Logistics Group provides integrated logistics, telematics, AI, and data analytics solutions 
            for transparent, efficient, and secure supply chain operations in frontier and emerging markets.
          </motion.p>

          {/* Ultra-modern CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center btn-primary"
              >
                <span className="relative z-10">Get Started</span>
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                {/* Ripple effect */}
                <div className="absolute inset-0 rounded-xl bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-500" />
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/platform"
                className="group inline-flex items-center justify-center glass-dark rounded-xl px-8 py-4 font-semibold text-white border border-white/20 hover:border-white/30 transition-all duration-300"
              >
                <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                View Platform
              </Link>
            </motion.div>
          </motion.div>

          {/* Ultra-modern stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            {[
              { value: "500+", label: "Fleet Vehicles", icon: Zap },
              { value: "99.9%", label: "Uptime", icon: Sparkles },
              { value: "24/7", label: "Monitoring", icon: Zap },
              { value: "50+", label: "Countries", icon: Sparkles },
            ].map((stat, index) => (
              <motion.div 
                key={index} 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
              >
                <div className="glass-dark rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300">
                  <stat.icon className="w-8 h-8 text-brand-primary mx-auto mb-3" />
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-white/70 text-sm font-medium">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Ultra-modern scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center backdrop-blur-sm"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-3 bg-brand-primary rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

