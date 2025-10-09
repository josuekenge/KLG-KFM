"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import { useEffect, useRef } from "react";

export function ModernHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    // Particle system - adapted to black/white theme
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
    }> = [];

    const particleCount = 80;
    const connectionDistance = 150;

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1,
      });
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle, i) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        // Draw particle - black dots
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(0, 0, 0, 0.3)";
        ctx.fill();

        // Draw connections - subtle black lines
        particles.slice(i + 1).forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            const opacity = (1 - distance / connectionDistance) * 0.15;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = `rgba(0, 0, 0, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", setCanvasSize);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Animated particle background - Dark Veil effect adapted to black/white */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        style={{ background: "linear-gradient(to bottom, #fafafa 0%, #ffffff 50%, #fafafa 100%)" }}
      />
      
      {/* Subtle overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/30 via-transparent to-gray-50/30 z-[1]"></div>

      <div className="container relative z-10 px-4 py-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Simple badge - Fluence style */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-8 px-4 py-2 bg-gray-100 border border-gray-200 rounded-full text-gray-900 text-sm font-medium"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-black"></span>
            </span>
            Fleet Management & Logistics Solution
          </motion.div>

          {/* Clean headline - Fluence style */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight tracking-tight"
          >
            Fleet Management{" "}
            <span className="block mt-2 text-black">
              Built for Africa
            </span>
          </motion.h1>

          {/* Clean subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Built for frontier markets with rugged hardware, satellite backup, and AI-powered insights. 
            Reduce fuel theft, improve driver safety, and optimize your fleet operations across Africa.
          </motion.p>

          {/* Clean CTA buttons - Fluence style */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <a 
              href="#contact" 
              className="group px-8 py-4 bg-black hover:bg-gray-900 text-white font-semibold rounded-xl transition-all duration-200 flex items-center gap-2 shadow-md hover:shadow-xl hover:scale-105"
            >
              Get Started
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </a>

            <Link 
              href="/platform" 
              className="group px-8 py-4 bg-white border-2 border-gray-900 hover:border-black hover:bg-gray-50 text-gray-900 font-semibold rounded-xl transition-all duration-200 flex items-center gap-2 shadow-sm hover:shadow-md"
            >
              <Play className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
              Book a Demo
            </Link>
          </motion.div>

          {/* Mockup/Dashboard preview - Fluence style */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative max-w-6xl mx-auto"
          >
            <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 shadow-2xl">
              <div className="bg-white rounded-xl p-6 shadow-inner">
                {/* Dashboard mockup */}
                <div className="space-y-4">
                  {/* Header */}
                  <div className="flex items-center justify-between pb-4 border-b border-gray-200">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-gray-900 to-black rounded-lg"></div>
                      <div>
                        <div className="h-3 w-32 bg-gray-200 rounded"></div>
                        <div className="h-2 w-24 bg-gray-100 rounded mt-2"></div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <div className="w-8 h-8 bg-black rounded-lg"></div>
                      <div className="w-8 h-8 bg-gray-200 rounded-lg"></div>
                      <div className="w-8 h-8 bg-gray-200 rounded-lg"></div>
                    </div>
                  </div>
                  
                  {/* Stats grid */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-4">
                        <div className="h-8 w-8 bg-black rounded-lg mb-3"></div>
                        <div className="h-6 w-16 bg-gray-200 rounded mb-2"></div>
                        <div className="h-3 w-20 bg-gray-100 rounded"></div>
                      </div>
                    ))}
                  </div>

                  {/* Chart area */}
                      <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 h-48 flex items-end gap-2">
                    {[40, 70, 45, 80, 60, 90, 65, 85, 55, 75, 50, 70].map((height, i) => (
                      <div
                        key={i}
                        className="flex-1 bg-gradient-to-t from-gray-900 to-black rounded-t-lg transition-all duration-500"
                        style={{ height: `${height}%` }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating cards */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -left-4 md:-left-12 bg-white rounded-xl shadow-xl p-4 max-w-[200px] hidden md:block"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white font-bold">✓</div>
                <div>
                  <div className="h-2 w-20 bg-gray-200 rounded mb-1"></div>
                  <div className="h-2 w-16 bg-gray-100 rounded"></div>
                </div>
              </div>
              <div className="text-xs text-gray-600">Real-time tracking active</div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -bottom-4 -right-4 md:-right-12 bg-white rounded-xl shadow-xl p-4 max-w-[200px] hidden md:block"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-black rounded-lg"></div>
                <div className="text-2xl font-bold text-gray-900">24/7</div>
              </div>
              <div className="text-xs text-gray-600">Monitoring & Support</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}






