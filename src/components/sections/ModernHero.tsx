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

    // Fleet Management Visualization - Moving trucks on routes
    const vehicles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      routeProgress: number;
      routeLength: number;
    }> = [];

    // Road network nodes (representing cities/waypoints)
    const nodes: Array<{ x: number; y: number }> = [];
    const nodeCount = 15;
    
    // Create nodes
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
      });
    }

    // Create vehicles (trucks)
    const vehicleCount = 25;
    for (let i = 0; i < vehicleCount; i++) {
      vehicles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        size: 6,
        routeProgress: Math.random() * 100,
        routeLength: Math.random() * 200 + 100,
      });
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw subtle road network (connecting nodes)
      ctx.strokeStyle = "rgba(0, 0, 0, 0.06)";
      ctx.lineWidth = 1;
      nodes.forEach((node, i) => {
        // Connect to nearest neighbors
        nodes.slice(i + 1, i + 4).forEach((otherNode) => {
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(otherNode.x, otherNode.y);
          ctx.stroke();
        });
      });

      // Draw nodes (cities/waypoints)
      nodes.forEach((node) => {
        ctx.beginPath();
        ctx.arc(node.x, node.y, 3, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(0, 0, 0, 0.2)";
        ctx.fill();
      });

      // Update and draw vehicles (trucks)
      vehicles.forEach((vehicle) => {
        // Update position
        vehicle.x += vehicle.vx;
        vehicle.y += vehicle.vy;

        // Bounce off edges
        if (vehicle.x < 0 || vehicle.x > canvas.width) vehicle.vx *= -1;
        if (vehicle.y < 0 || vehicle.y > canvas.height) vehicle.vy *= -1;

        // Update route progress
        vehicle.routeProgress += 0.5;
        if (vehicle.routeProgress > vehicle.routeLength) {
          vehicle.routeProgress = 0;
        }

        // Draw vehicle (truck icon)
        ctx.save();
        ctx.translate(vehicle.x, vehicle.y);
        
        // Rotate based on direction
        const angle = Math.atan2(vehicle.vy, vehicle.vx);
        ctx.rotate(angle);

        // Draw truck shape
        ctx.fillStyle = "rgba(0, 0, 0, 0.8)";
        ctx.fillRect(-vehicle.size, -vehicle.size / 2, vehicle.size * 1.5, vehicle.size);
        
        // Cab (front of truck)
        ctx.fillStyle = "rgba(0, 0, 0, 0.9)";
        ctx.fillRect(vehicle.size * 0.5, -vehicle.size / 2.5, vehicle.size * 0.8, vehicle.size * 0.8);

        ctx.restore();

        // Draw route trail
        ctx.beginPath();
        ctx.arc(vehicle.x, vehicle.y, vehicle.size * 2, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(0, 0, 0, 0.03)";
        ctx.fill();
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
                  
                  {/* Fleet Stats */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="h-8 w-8 bg-black rounded-lg flex items-center justify-center">
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      </div>
                      <div className="text-2xl font-bold text-gray-900">142</div>
                      <div className="text-xs text-gray-600">Active Vehicles</div>
                    </div>

                    <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="h-8 w-8 bg-black rounded-lg flex items-center justify-center">
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                          </svg>
                        </div>
                      </div>
                      <div className="text-2xl font-bold text-gray-900">8,456</div>
                      <div className="text-xs text-gray-600">km Today</div>
                    </div>

                    <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="h-8 w-8 bg-black rounded-lg flex items-center justify-center">
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                          </svg>
                        </div>
                      </div>
                      <div className="text-2xl font-bold text-gray-900">94%</div>
                      <div className="text-xs text-gray-600">Fleet Efficiency</div>
                    </div>

                    <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="h-8 w-8 bg-black rounded-lg flex items-center justify-center">
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                      </div>
                      <div className="text-2xl font-bold text-gray-900">23</div>
                      <div className="text-xs text-gray-600">Alerts Today</div>
                    </div>
                  </div>

                  {/* Fuel Consumption Chart */}
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-sm font-semibold text-gray-900">Fuel Consumption (L/100km)</div>
                      <div className="text-xs text-gray-500">Last 7 Days</div>
                    </div>
                    <div className="h-32 flex items-end gap-2">
                      {[
                        { value: 45, label: "Mon" },
                        { value: 72, label: "Tue" },
                        { value: 58, label: "Wed" },
                        { value: 85, label: "Thu" },
                        { value: 68, label: "Fri" },
                        { value: 92, label: "Sat" },
                        { value: 55, label: "Sun" },
                      ].map((day, i) => (
                        <div key={i} className="flex-1 flex flex-col items-center gap-1">
                          <div
                            className="w-full bg-gradient-to-t from-gray-900 to-black rounded-t-lg transition-all duration-500 hover:opacity-80"
                            style={{ height: `${day.value}%` }}
                          ></div>
                          <span className="text-[10px] text-gray-600">{day.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Fleet Metric Cards */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -left-4 md:-left-12 bg-white rounded-xl shadow-xl p-4 max-w-[220px] hidden md:block border border-gray-200"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-gradient-to-br from-gray-900 to-black rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-gray-500">Fuel Savings</div>
                  <div className="text-lg font-bold text-gray-900">35% ↓</div>
                </div>
              </div>
              <p className="text-xs text-gray-600">
                Reduced fuel theft by $12,400 this month
              </p>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -bottom-4 -right-4 md:-right-12 bg-white rounded-xl shadow-xl p-4 max-w-[220px] hidden md:block border border-gray-200"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-gradient-to-br from-gray-900 to-black rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-gray-500">Live Tracking</div>
                  <div className="text-lg font-bold text-gray-900">142 Vehicles</div>
                </div>
              </div>
              <p className="text-xs text-gray-600">
                Real-time GPS + Satellite backup active
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}






