"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function ModernHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [activeChart, setActiveChart] = useState(0);

  // Rotate charts every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveChart((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

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
    const nodeCount = 12;
    
    // Create nodes with even better centering
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: (Math.random() * 0.6 + 0.2) * canvas.width,
        y: (Math.random() * 0.6 + 0.2) * canvas.height,
      });
    }

    // Create vehicles (trucks) - fewer and more centered
    const vehicleCount = 8;
    for (let i = 0; i < vehicleCount; i++) {
      vehicles.push({
        x: (Math.random() * 0.6 + 0.2) * canvas.width,
        y: (Math.random() * 0.6 + 0.2) * canvas.height,
        vx: (Math.random() - 0.5) * 0.6, // Slower movement
        vy: (Math.random() - 0.5) * 0.6,
        size: 10, // Slightly smaller for subtlety
        routeProgress: Math.random() * 100,
        routeLength: Math.random() * 200 + 100,
      });
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw subtle road network with dashed lines
      ctx.strokeStyle = "rgba(0, 0, 0, 0.08)";
      ctx.lineWidth = 1.5;
      ctx.setLineDash([8, 8]);
      nodes.forEach((node, i) => {
        // Connect to nearest neighbors
        nodes.slice(i + 1, i + 3).forEach((otherNode) => {
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(otherNode.x, otherNode.y);
          ctx.stroke();
        });
      });
      ctx.setLineDash([]); // Reset dash

      // Draw nodes (cities/waypoints) - subtle
      nodes.forEach((node) => {
        // Outer ring
        ctx.beginPath();
        ctx.arc(node.x, node.y, 6, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(0, 0, 0, 0.1)";
        ctx.lineWidth = 1.5;
        ctx.stroke();
        
        // Inner dot
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

        // Draw vehicle (truck icon) - larger and more detailed
        ctx.save();
        ctx.translate(vehicle.x, vehicle.y);
        
        // Rotate based on direction
        const angle = Math.atan2(vehicle.vy, vehicle.vx);
        ctx.rotate(angle);

        // Subtle shadow for depth
        ctx.shadowColor = "rgba(0, 0, 0, 0.2)";
        ctx.shadowBlur = 3;
        ctx.shadowOffsetX = 1;
        ctx.shadowOffsetY = 1;

        // Trailer (back of truck) - more subtle
        ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
        ctx.fillRect(-vehicle.size * 1.2, -vehicle.size / 2.5, vehicle.size * 1.8, vehicle.size * 0.8);
        
        // Cab (front of truck)
        ctx.fillStyle = "rgba(0, 0, 0, 0.8)";
        ctx.fillRect(vehicle.size * 0.6, -vehicle.size / 2, vehicle.size * 0.8, vehicle.size);
        
        // Windshield - very subtle
        ctx.fillStyle = "rgba(255, 255, 255, 0.2)";
        ctx.fillRect(vehicle.size * 0.7, -vehicle.size / 3, vehicle.size * 0.4, vehicle.size * 0.6);

        // Wheels - simplified
        ctx.shadowColor = "transparent";
        ctx.fillStyle = "rgba(0, 0, 0, 0.9)";
        // Back wheels
        ctx.beginPath();
        ctx.arc(-vehicle.size * 0.5, vehicle.size / 2.5, vehicle.size / 6, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(-vehicle.size * 0.5, -vehicle.size / 2.5, vehicle.size / 6, 0, Math.PI * 2);
        ctx.fill();
        // Front wheels
        ctx.beginPath();
        ctx.arc(vehicle.size * 0.9, vehicle.size / 2.5, vehicle.size / 6, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(vehicle.size * 0.9, -vehicle.size / 2.5, vehicle.size / 6, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
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
                  {/* Header with Real Data */}
                  <div className="flex items-center justify-between pb-4 border-b border-gray-200">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-gray-900 to-black rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-gray-900">KFM Fleet Dashboard</div>
                        <div className="text-xs text-gray-500">Last updated: 2 min ago</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1.5 px-2 py-1 bg-green-50 border border-green-200 rounded-lg">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-xs font-medium text-green-700">Live</span>
                      </div>
                      <div className="w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center justify-center cursor-pointer">
                        <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                        </svg>
                      </div>
                      <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center cursor-pointer">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  {/* Fleet Stats - More Natural Layout */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-3">
                    <div className="bg-white border border-gray-200 rounded-lg p-3">
                      <div className="flex items-center justify-between mb-2">
                        <div className="text-xs text-gray-500 font-medium">Active Vehicles</div>
                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div className="text-2xl font-bold text-gray-900">142</div>
                      <div className="text-xs text-gray-500 mt-1">of 156 total</div>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-lg p-3">
                      <div className="flex items-center justify-between mb-2">
                        <div className="text-xs text-gray-500 font-medium">Distance Today</div>
                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                      </div>
                      <div className="text-2xl font-bold text-gray-900">8,456</div>
                      <div className="text-xs text-green-600 mt-1">+12% vs yesterday</div>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-lg p-3">
                      <div className="flex items-center justify-between mb-2">
                        <div className="text-xs text-gray-500 font-medium">Fleet Efficiency</div>
                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="text-2xl font-bold text-gray-900">94%</div>
                      <div className="text-xs text-gray-500 mt-1">Target: 95%</div>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-lg p-3">
                      <div className="flex items-center justify-between mb-2">
                        <div className="text-xs text-gray-500 font-medium">Active Alerts</div>
                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                        </svg>
                      </div>
                      <div className="text-2xl font-bold text-gray-900">23</div>
                      <div className="text-xs text-gray-500 mt-1">5 critical</div>
                    </div>
                  </div>

                  {/* Realistic Performance Charts */}
                  <div className="bg-white border border-gray-200 rounded-lg p-4 mb-3">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <div className="text-sm font-semibold text-gray-900">Fleet Performance Overview</div>
                        <div className="text-xs text-gray-500 mt-1">Last 12 hours</div>
                      </div>
                      <div className="flex items-center gap-4 text-xs">
                        <div className="flex items-center gap-1.5">
                          <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
                          <span className="text-gray-600">Active</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                          <span className="text-gray-600">Idle</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="h-32 flex items-end gap-1">
                      {[
                        { active: 85, idle: 12 },
                        { active: 92, idle: 8 },
                        { active: 88, idle: 10 },
                        { active: 95, idle: 5 },
                        { active: 90, idle: 8 },
                        { active: 78, idle: 18 },
                        { active: 82, idle: 15 },
                        { active: 88, idle: 10 },
                        { active: 93, idle: 7 },
                        { active: 87, idle: 11 },
                        { active: 91, idle: 8 },
                        { active: 94, idle: 6 },
                      ].map((data, i) => (
                        <div key={i} className="flex-1 flex flex-col gap-0.5 items-end h-full justify-end">
                          <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: `${data.active}%` }}
                            transition={{ 
                              duration: 1.2, 
                              delay: i * 0.08,
                              ease: [0.4, 0, 0.2, 1]
                            }}
                            className="w-full bg-gray-900 rounded-t"
                          />
              <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: `${data.idle}%` }}
                            transition={{ 
                              duration: 1.2, 
                              delay: i * 0.08 + 0.1,
                              ease: [0.4, 0, 0.2, 1]
                            }}
                            className="w-full bg-gray-400 rounded-t"
                          />
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-100">
                      <div className="text-xs text-gray-600">00:00</div>
                      <div className="text-xs text-gray-600">06:00</div>
                      <div className="text-xs text-gray-600">12:00</div>
                      <div className="text-xs text-gray-900 font-medium">Now</div>
                    </div>
                  </div>

                  {/* Rotating Charts with Mock Data */}
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 relative overflow-hidden">
                    <AnimatePresence mode="wait">
                      {activeChart === 0 && (
                        <motion.div
                          key="distance"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ duration: 0.5 }}
                        >
                          <div className="flex items-center justify-between mb-4">
                            <div className="text-sm font-semibold text-gray-900">Weekly Distance</div>
                            <div className="flex items-center gap-1">
                              <div className="w-2 h-2 bg-black rounded-full"></div>
                              <span className="text-xs text-gray-500">Kilometers</span>
                            </div>
                          </div>
                          <div className="h-32 flex items-end justify-between gap-1.5">
                            {[
                              { value: 65, label: "Mon", data: "1,245" },
                              { value: 78, label: "Tue", data: "1,486" },
                              { value: 55, label: "Wed", data: "1,050" },
                              { value: 88, label: "Thu", data: "1,678" },
                              { value: 72, label: "Fri", data: "1,372" },
                              { value: 45, label: "Sat", data: "856" },
                            ].map((day, i) => (
                              <div key={i} className="flex-1 flex flex-col items-center gap-1 group relative">
                                <motion.div
                                  initial={{ height: 0 }}
                                  animate={{ height: `${day.value}%` }}
                                  transition={{ 
                                    duration: 0.8, 
                                    delay: i * 0.08,
                                    repeat: Infinity,
                                    repeatType: "reverse",
                                    repeatDelay: 1.5
                                  }}
                                  className="w-full bg-gradient-to-t from-gray-900 to-black rounded-t-lg"
                                ></motion.div>
                                <span className="text-[9px] text-gray-600 font-medium">{day.label}</span>
                              </div>
                            ))}
                          </div>
                          <div className="mt-4 pt-4 border-t border-gray-200 flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              <div>
                                <div className="text-xs text-gray-500">Total</div>
                                <div className="text-sm font-bold text-gray-900">7,687 km</div>
                              </div>
                              <div>
                                <div className="text-xs text-gray-500">Avg/Day</div>
                                <div className="text-sm font-bold text-gray-900">1,281 km</div>
                              </div>
                            </div>
                            <div className="text-xs text-gray-500 flex items-center gap-1">
                              <span className="text-green-600 font-semibold">↑ 12%</span> vs last week
                            </div>
                          </div>
                        </motion.div>
                      )}

                      {activeChart === 1 && (
                        <motion.div
                          key="fuel"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ duration: 0.5 }}
                        >
                          <div className="flex items-center justify-between mb-4">
                            <div className="text-sm font-semibold text-gray-900">Fuel Consumption</div>
                            <div className="flex items-center gap-1">
                              <div className="w-2 h-2 bg-black rounded-full"></div>
                              <span className="text-xs text-gray-500">Liters</span>
                            </div>
                          </div>
                          <div className="h-32 flex items-end justify-between gap-1.5">
                            {[
                              { value: 70, label: "Mon", data: "842" },
                              { value: 82, label: "Tue", data: "986" },
                              { value: 60, label: "Wed", data: "720" },
                              { value: 92, label: "Thu", data: "1,104" },
                              { value: 75, label: "Fri", data: "900" },
                              { value: 50, label: "Sat", data: "600" },
                            ].map((day, i) => (
                              <div key={i} className="flex-1 flex flex-col items-center gap-1 group relative">
                                <motion.div
                                  initial={{ height: 0 }}
                                  animate={{ height: `${day.value}%` }}
                                  transition={{ 
                                    duration: 0.8, 
                                    delay: i * 0.08,
                                    repeat: Infinity,
                                    repeatType: "reverse",
                                    repeatDelay: 1.5
                                  }}
                                  className="w-full bg-gradient-to-t from-gray-900 to-black rounded-t-lg"
                                ></motion.div>
                                <span className="text-[9px] text-gray-600 font-medium">{day.label}</span>
                              </div>
                            ))}
                          </div>
                          <div className="mt-4 pt-4 border-t border-gray-200 flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              <div>
                                <div className="text-xs text-gray-500">Total</div>
                                <div className="text-sm font-bold text-gray-900">5,152 L</div>
                              </div>
                              <div>
                                <div className="text-xs text-gray-500">Avg/Day</div>
                                <div className="text-sm font-bold text-gray-900">859 L</div>
                              </div>
                            </div>
                            <div className="text-xs text-gray-500 flex items-center gap-1">
                              <span className="text-green-600 font-semibold">↓ 8%</span> vs last week
                            </div>
                          </div>
                        </motion.div>
                      )}

                      {activeChart === 2 && (
                        <motion.div
                          key="trips"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ duration: 0.5 }}
                        >
                          <div className="flex items-center justify-between mb-4">
                            <div className="text-sm font-semibold text-gray-900">Completed Trips</div>
                            <div className="flex items-center gap-1">
                              <div className="w-2 h-2 bg-black rounded-full"></div>
                              <span className="text-xs text-gray-500">Count</span>
                            </div>
                          </div>
                          <div className="h-32 flex items-end justify-between gap-1.5">
                            {[
                              { value: 68, label: "Mon", data: "124" },
                              { value: 75, label: "Tue", data: "138" },
                              { value: 58, label: "Wed", data: "106" },
                              { value: 85, label: "Thu", data: "156" },
                              { value: 70, label: "Fri", data: "128" },
                              { value: 48, label: "Sat", data: "88" },
                            ].map((day, i) => (
                              <div key={i} className="flex-1 flex flex-col items-center gap-1 group relative">
                                <motion.div
                                  initial={{ height: 0 }}
                                  animate={{ height: `${day.value}%` }}
                                  transition={{ 
                                    duration: 0.8, 
                                    delay: i * 0.08,
                                    repeat: Infinity,
                                    repeatType: "reverse",
                                    repeatDelay: 1.5
                                  }}
                                  className="w-full bg-gradient-to-t from-gray-900 to-black rounded-t-lg"
                                ></motion.div>
                                <span className="text-[9px] text-gray-600 font-medium">{day.label}</span>
                              </div>
                            ))}
                          </div>
                          <div className="mt-4 pt-4 border-t border-gray-200 flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              <div>
                                <div className="text-xs text-gray-500">Total</div>
                                <div className="text-sm font-bold text-gray-900">740 trips</div>
                              </div>
                              <div>
                                <div className="text-xs text-gray-500">Avg/Day</div>
                                <div className="text-sm font-bold text-gray-900">123 trips</div>
                              </div>
                            </div>
                            <div className="text-xs text-gray-500 flex items-center gap-1">
                              <span className="text-green-600 font-semibold">↑ 15%</span> vs last week
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Chart Indicators */}
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
                      {[0, 1, 2].map((index) => (
                        <button
                          key={index}
                          onClick={() => setActiveChart(index)}
                          className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                            activeChart === index ? "bg-black w-4" : "bg-gray-300"
                          }`}
                          aria-label={`View chart ${index + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Fleet Metric Cards with Mini Charts */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -left-4 md:-left-12 bg-white rounded-xl shadow-xl p-4 max-w-[240px] hidden md:block border border-gray-200"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-gradient-to-br from-gray-900 to-black rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-gray-500">Fuel Efficiency</div>
                  <div className="text-lg font-bold text-gray-900">+35%</div>
                </div>
              </div>
              {/* Mini Chart */}
              <div className="h-12 flex items-end gap-1 mb-2">
                {[60, 45, 70, 55, 80, 65, 90].map((height, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${height}%` }}
                    transition={{ 
                      duration: 0.8, 
                      delay: i * 0.1,
                      repeat: Infinity,
                      repeatType: "reverse",
                      repeatDelay: 2
                    }}
                    className="flex-1 bg-gradient-to-t from-gray-900 to-black rounded-t"
                  />
                ))}
              </div>
              <p className="text-xs text-gray-600">
                Saved $12,400 in fuel costs this month
              </p>
              </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -bottom-4 -right-4 md:-right-12 bg-white rounded-xl shadow-xl p-4 max-w-[240px] hidden md:block border border-gray-200"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-gradient-to-br from-gray-900 to-black rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-gray-500">Active Vehicles</div>
                  <div className="text-lg font-bold text-gray-900">142</div>
                </div>
              </div>
              {/* Mini Chart */}
              <div className="h-12 flex items-end gap-1 mb-2">
                {[50, 75, 60, 85, 70, 90, 65].map((height, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${height}%` }}
                    transition={{ 
                      duration: 0.8, 
                      delay: i * 0.1 + 0.5,
                      repeat: Infinity,
                      repeatType: "reverse",
                      repeatDelay: 2
                    }}
                    className="flex-1 bg-gradient-to-t from-gray-900 to-black rounded-t"
                  />
                ))}
              </div>
              <p className="text-xs text-gray-600">
                Real-time GPS + Satellite backup
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}






