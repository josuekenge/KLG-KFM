"use client";

import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const LOCATIONS = ["Africa", "Kenya", "Congo", "Nigeria"];

export function ModernHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [currentLocationIndex, setCurrentLocationIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Rotating location text effect
  useEffect(() => {
    console.log('Setting up location rotation interval');
    const interval = setInterval(() => {
      console.log('Changing location...');
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentLocationIndex((prev) => {
          const next = (prev + 1) % LOCATIONS.length;
          console.log('New location index:', next, 'Location:', LOCATIONS[next]);
          return next;
        });
        setIsAnimating(false);
      }, 300);
    }, 3000);

    return () => {
      console.log('Cleaning up location rotation interval');
      clearInterval(interval);
    };
  }, []);

  // Canvas animation with moving trucks
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
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        size: 10,
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
        nodes.slice(i + 1, i + 3).forEach((otherNode) => {
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(otherNode.x, otherNode.y);
          ctx.stroke();
        });
      });
      ctx.setLineDash([]);

      // Draw nodes (cities/waypoints)
      nodes.forEach((node) => {
        ctx.beginPath();
        ctx.arc(node.x, node.y, 6, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(0, 0, 0, 0.1)";
        ctx.lineWidth = 1.5;
        ctx.stroke();
        
        ctx.beginPath();
        ctx.arc(node.x, node.y, 3, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(0, 0, 0, 0.2)";
        ctx.fill();
      });

      // Update and draw vehicles (trucks)
      vehicles.forEach((vehicle) => {
        vehicle.x += vehicle.vx;
        vehicle.y += vehicle.vy;

        if (vehicle.x < 0 || vehicle.x > canvas.width) vehicle.vx *= -1;
        if (vehicle.y < 0 || vehicle.y > canvas.height) vehicle.vy *= -1;

        vehicle.routeProgress += 0.5;
        if (vehicle.routeProgress > vehicle.routeLength) {
          vehicle.routeProgress = 0;
        }

        // Draw vehicle (truck icon)
        ctx.save();
        ctx.translate(vehicle.x, vehicle.y);
        
        const angle = Math.atan2(vehicle.vy, vehicle.vx);
        ctx.rotate(angle);

        ctx.shadowColor = "rgba(0, 0, 0, 0.2)";
        ctx.shadowBlur = 3;
        ctx.shadowOffsetX = 1;
        ctx.shadowOffsetY = 1;

        // Trailer
        ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
        ctx.fillRect(-vehicle.size * 1.2, -vehicle.size / 2.5, vehicle.size * 1.8, vehicle.size * 0.8);
        
        // Cab
        ctx.fillStyle = "rgba(0, 0, 0, 0.8)";
        ctx.fillRect(vehicle.size * 0.6, -vehicle.size / 2, vehicle.size * 0.8, vehicle.size);
        
        // Windshield
        ctx.fillStyle = "rgba(255, 255, 255, 0.2)";
        ctx.fillRect(vehicle.size * 0.7, -vehicle.size / 3, vehicle.size * 0.4, vehicle.size * 0.6);

        // Wheels
        ctx.shadowColor = "transparent";
        ctx.fillStyle = "rgba(0, 0, 0, 0.9)";
        ctx.beginPath();
        ctx.arc(-vehicle.size * 0.5, vehicle.size / 2.5, vehicle.size / 6, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(-vehicle.size * 0.5, -vehicle.size / 2.5, vehicle.size / 6, 0, Math.PI * 2);
        ctx.fill();
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
      {/* Animated canvas background with moving trucks */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        style={{ background: "linear-gradient(to bottom, #fafafa 0%, #ffffff 50%, #fafafa 100%)" }}
      />
      
      {/* Subtle overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/30 via-transparent to-gray-50/30 z-[1]"></div>

      <div className="container relative z-10 px-4 py-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Simple badge */}
          <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 bg-gray-100 border border-gray-200 rounded-full text-gray-900 text-sm font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Logistics & Telematics Platform
          </div>

          {/* Clean headline with rotating location - Mobile optimized */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight tracking-tight px-4 sm:px-0">
            Logistics Platform{" "}
            <span className="block mt-1 sm:mt-2 text-black">
              Built for{" "}
              <span className="inline-block relative min-w-[140px] sm:min-w-[200px] md:min-w-[280px] text-left">
                <span 
                  className={`inline-block transition-all duration-500 relative ${
                    isAnimating 
                      ? 'opacity-0 -translate-y-8 scale-95' 
                      : 'opacity-100 translate-y-0 scale-100'
                  }`}
                >
                  {LOCATIONS[currentLocationIndex]}
                  {/* Subtle underline that draws attention */}
                  <span className="absolute bottom-0 left-0 w-full h-[2px] md:h-[3px] bg-gradient-to-r from-black via-gray-600 to-black opacity-40"></span>
                </span>
              </span>
            </span>
          </h1>

          {/* Clean subheadline - Mobile optimized */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed px-4 sm:px-6 md:px-0">
            End-to-end logistics and telematics platform connecting declaration companies, truckers, and cargo. 
            Real-time tracking, API partnerships, and AI-powered insights for container transport across Africa.
          </p>

          {/* Clean CTA buttons - Mobile optimized */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 px-4 sm:px-0 w-full sm:w-auto">
            <a 
              href="#contact" 
              className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-black hover:bg-gray-900 text-white font-semibold rounded-xl transition-all duration-200 flex items-center justify-center gap-2 shadow-md hover:shadow-xl hover:scale-105 text-sm sm:text-base"
            >
              Get Started
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </a>

            <Link 
              href="/#contact" 
              className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white border-2 border-gray-900 hover:border-black hover:bg-gray-50 text-gray-900 font-semibold rounded-xl transition-all duration-200 flex items-center justify-center gap-2 shadow-sm hover:shadow-md text-sm sm:text-base"
            >
              <Play className="w-3 h-3 sm:w-4 sm:h-4 group-hover:scale-110 transition-transform duration-200" />
              Book a Demo
            </Link>
          </div>

          {/* Trust badges - Mobile optimized */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-6 mb-12 md:mb-16 text-xs sm:text-sm text-gray-600 px-4">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full"></div>
              <span className="font-medium whitespace-nowrap">500+ Active Fleets</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full"></div>
              <span className="font-medium whitespace-nowrap">99.9% Uptime</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full"></div>
              <span className="font-medium whitespace-nowrap">24/7 Support</span>
            </div>
          </div>

          {/* Mockup/Dashboard preview - Compact for mobile */}
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 md:px-0">
            <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-lg md:rounded-2xl p-2 sm:p-4 md:p-8 shadow-2xl">
              <div className="bg-white rounded-md md:rounded-xl p-2 sm:p-3 md:p-6 shadow-inner">
                {/* Dashboard mockup */}
                <div className="space-y-2 sm:space-y-3 md:space-y-4">
                  {/* Header with Real Data - Compact for mobile */}
                  <div className="flex items-center justify-between pb-2 sm:pb-3 md:pb-4 border-b border-gray-200">
                    <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-gradient-to-br from-gray-900 to-black rounded-md sm:rounded-lg flex items-center justify-center">
                        <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-xs sm:text-sm font-semibold text-gray-900">KLG Logistics Dashboard</div>
                        <div className="text-[10px] sm:text-xs text-gray-500 hidden sm:block">Last updated: 2 min ago</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 sm:gap-2">
                      <div className="flex items-center gap-1 sm:gap-1.5 px-1.5 sm:px-2 py-0.5 sm:py-1 bg-green-50 border border-green-200 rounded-md sm:rounded-lg">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-[10px] sm:text-xs font-medium text-green-700">Live</span>
                      </div>
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-900 rounded-md sm:rounded-lg flex items-center justify-center cursor-pointer">
                        <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  {/* Simple Stats - Compact for mobile */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-1.5 sm:gap-2 md:gap-3 mb-2 sm:mb-3 md:mb-4">
                    <div className="bg-gray-50 rounded-md sm:rounded-lg p-2 sm:p-3 md:p-4">
                      <div className="text-[10px] sm:text-xs text-gray-500 mb-0.5 sm:mb-1">Active Vehicles</div>
                      <div className="text-base sm:text-xl md:text-2xl font-bold text-gray-900">142</div>
                    </div>
                    <div className="bg-gray-50 rounded-md sm:rounded-lg p-2 sm:p-3 md:p-4">
                      <div className="text-[10px] sm:text-xs text-gray-500 mb-0.5 sm:mb-1">km Today</div>
                      <div className="text-base sm:text-xl md:text-2xl font-bold text-gray-900">8,456</div>
                    </div>
                    <div className="bg-gray-50 rounded-md sm:rounded-lg p-2 sm:p-3 md:p-4">
                      <div className="text-[10px] sm:text-xs text-gray-500 mb-0.5 sm:mb-1">Fleet Efficiency</div>
                      <div className="text-base sm:text-xl md:text-2xl font-bold text-gray-900">94%</div>
                    </div>
                    <div className="bg-gray-50 rounded-md sm:rounded-lg p-2 sm:p-3 md:p-4">
                      <div className="text-[10px] sm:text-xs text-gray-500 mb-0.5 sm:mb-1">Alerts Today</div>
                      <div className="text-base sm:text-xl md:text-2xl font-bold text-gray-900">23</div>
                    </div>
                  </div>

                  {/* Main Chart - Much smaller on mobile */}
                  <div className="bg-gray-50 rounded-md sm:rounded-lg p-2 sm:p-3 md:p-5 mb-2 sm:mb-3 md:mb-4">
                    <div className="flex items-center justify-between mb-2 sm:mb-3 md:mb-4">
                      <div className="text-xs sm:text-sm font-medium text-gray-900">Weekly Distance</div>
                      <div className="text-[10px] sm:text-xs text-gray-500 hidden sm:block">Total Kilometers</div>
                    </div>
                    
                    <div className="flex gap-1.5 sm:gap-2 md:gap-4">
                      {/* Y-axis with labels */}
                      <div className="flex flex-col justify-between h-24 sm:h-32 md:h-56 py-1">
                        <div className="text-right">
                          <div className="text-[10px] font-bold text-gray-900">2000</div>
                          <div className="text-[9px] text-gray-500">km</div>
                        </div>
                        <div className="text-right">
                          <div className="text-[10px] font-semibold text-gray-700">1500</div>
                          <div className="text-[9px] text-gray-400">km</div>
                        </div>
                        <div className="text-right">
                          <div className="text-[10px] font-semibold text-gray-700">1000</div>
                          <div className="text-[9px] text-gray-400">km</div>
                        </div>
                        <div className="text-right">
                          <div className="text-[10px] font-semibold text-gray-700">500</div>
                          <div className="text-[9px] text-gray-400">km</div>
                        </div>
                        <div className="text-right">
                          <div className="text-[10px] font-semibold text-gray-700">0</div>
                          <div className="text-[9px] text-gray-400">km</div>
                        </div>
                      </div>

                      {/* Chart area with bars */}
                      <div className="flex-1 h-24 sm:h-32 md:h-56 flex items-end gap-1 sm:gap-2 md:gap-4 border-l border-l-2 border-gray-300 pl-1.5 sm:pl-2 md:pl-4 relative">
                        {/* Horizontal grid lines */}
                        <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                          {[0, 1, 2, 3, 4].map((i) => (
                            <div key={i} className="w-full border-t border-gray-200 border-dashed"></div>
                          ))}
                        </div>

                        {/* Bar chart */}
                        {[
                          { height: 55, label: "Mon", bars: [45, 68, 52, 75] },
                          { height: 88, label: "Tue", bars: [70, 88, 82, 65] },
                          { height: 42, label: "Wed", bars: [30, 42, 38, 35] },
                          { height: 98, label: "Thu", bars: [85, 98, 92, 88] },
                          { height: 72, label: "Fri", bars: [58, 72, 68, 65] },
                          { height: 35, label: "Sat", bars: [20, 35, 28, 25] },
                        ].map((day, i) => (
                          <div key={i} className="flex-1 flex flex-col items-center gap-1 sm:gap-2 md:gap-3 relative z-10">
                            <div className="w-full h-full flex items-end justify-around gap-0.5 sm:gap-1">
                              {/* Full-size individual bars for each hour */}
                              {day.bars.map((barHeight, idx) => (
                                <div 
                                  key={idx} 
                                  className="flex-1 bg-gradient-to-t from-black via-gray-900 to-gray-800 rounded-t shadow-sm sm:shadow-lg hover:shadow-xl transition-all duration-200 border-t border-t-2 border-gray-700"
                                  style={{ height: `${barHeight}%` }}
                                ></div>
                              ))}
                            </div>
                            <span className="text-[9px] sm:text-[10px] md:text-xs text-gray-700 font-bold uppercase tracking-wide">{day.label}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center justify-between mt-2 sm:mt-3 md:mt-4 pt-2 sm:pt-3 border-t border-gray-200">
                      <div className="text-[10px] sm:text-xs text-gray-600">Total: 7,687 km</div>
                      <div className="text-[10px] sm:text-xs text-green-600">↑ 12% vs last week</div>
                    </div>
                  </div>

                  {/* Secondary Stats - Compact for mobile */}
                  <div className="grid grid-cols-2 gap-1.5 sm:gap-2 md:gap-3">
                    <div className="bg-gray-50 rounded-md sm:rounded-lg p-2 sm:p-3 md:p-4">
                      <div className="text-[10px] sm:text-xs text-gray-500 mb-1 sm:mb-2">Fuel Consumption</div>
                      <div className="text-sm sm:text-lg md:text-xl font-bold text-gray-900 mb-1.5 sm:mb-2 md:mb-3">5,152 L</div>
                      <div className="h-8 sm:h-12 md:h-16 flex items-end gap-0.5 sm:gap-1">
                        {[70, 82, 60, 92, 75, 50].map((h, i) => (
                          <div key={i} className="flex-1 bg-gray-300 rounded-t" style={{ height: `${h}%` }}></div>
                        ))}
                      </div>
                    </div>
                    <div className="bg-gray-50 rounded-md sm:rounded-lg p-2 sm:p-3 md:p-4">
                      <div className="text-[10px] sm:text-xs text-gray-500 mb-1 sm:mb-2">Completed Trips</div>
                      <div className="text-sm sm:text-lg md:text-xl font-bold text-gray-900 mb-1.5 sm:mb-2 md:mb-3">740</div>
                      <div className="h-8 sm:h-12 md:h-16 flex items-end gap-0.5 sm:gap-1">
                        {[68, 75, 58, 85, 70, 48].map((h, i) => (
                          <div key={i} className="flex-1 bg-gray-300 rounded-t" style={{ height: `${h}%` }}></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Simple Floating Cards - No animations */}
            <div className="absolute -top-4 -left-4 md:-left-12 bg-white rounded-xl shadow-lg p-4 max-w-[200px] hidden md:block border border-gray-200">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-gray-500">Fuel Saved</div>
                  <div className="text-lg font-bold text-gray-900">35%</div>
                </div>
              </div>
              <p className="text-xs text-gray-600">
                $12,400 saved this month
              </p>
            </div>

            <div className="absolute -bottom-4 -right-4 md:-right-12 bg-white rounded-xl shadow-lg p-4 max-w-[200px] hidden md:block border border-gray-200">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-gray-500">Live Tracking</div>
                  <div className="text-lg font-bold text-gray-900">142</div>
                </div>
              </div>
              <p className="text-xs text-gray-600">
                GPS + Satellite backup
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

