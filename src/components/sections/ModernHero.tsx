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
            Fleet Management & Logistics Solution
          </div>

          {/* Clean headline with rotating location */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
            Fleet Management{" "}
            <span className="block mt-2 text-black">
              Built for{" "}
              <span className="inline-block relative min-w-[200px] md:min-w-[280px] text-left">
                <span 
                  className={`inline-block transition-all duration-500 relative ${
                    isAnimating 
                      ? 'opacity-0 -translate-y-8 scale-95' 
                      : 'opacity-100 translate-y-0 scale-100'
                  }`}
                >
                  {LOCATIONS[currentLocationIndex]}
                  {/* Subtle underline that draws attention */}
                  <span className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-black via-gray-600 to-black opacity-40"></span>
                </span>
              </span>
            </span>
          </h1>

          {/* Clean subheadline */}
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Built for frontier markets with rugged hardware, satellite backup, and AI-powered insights. 
            Reduce fuel theft, improve driver safety, and optimize your fleet operations across Africa.
          </p>

          {/* Clean CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a 
              href="#contact" 
              className="group px-8 py-4 bg-black hover:bg-gray-900 text-white font-semibold rounded-xl transition-all duration-200 flex items-center gap-2 shadow-md hover:shadow-xl hover:scale-105"
            >
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </a>

            <Link 
              href="/platform" 
              className="group px-8 py-4 bg-white border-2 border-gray-900 hover:border-black hover:bg-gray-50 text-gray-900 font-semibold rounded-xl transition-all duration-200 flex items-center gap-2 shadow-sm hover:shadow-md"
            >
              <Play className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
              Book a Demo
            </Link>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 mb-16 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="font-medium">500+ Active Fleets</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="font-medium">99.9% Uptime</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="font-medium">24/7 Support</span>
            </div>
          </div>

          {/* Mockup/Dashboard preview - No animations */}
          <div className="relative max-w-6xl mx-auto">
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
                  
                  {/* Simple Stats */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="text-xs text-gray-500 mb-1">Active Vehicles</div>
                      <div className="text-2xl font-bold text-gray-900">142</div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="text-xs text-gray-500 mb-1">km Today</div>
                      <div className="text-2xl font-bold text-gray-900">8,456</div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="text-xs text-gray-500 mb-1">Fleet Efficiency</div>
                      <div className="text-2xl font-bold text-gray-900">94%</div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="text-xs text-gray-500 mb-1">Alerts Today</div>
                      <div className="text-2xl font-bold text-gray-900">23</div>
                    </div>
                  </div>

                  {/* Main Chart */}
                  <div className="bg-gray-50 rounded-lg p-5 mb-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-sm font-medium text-gray-900">Weekly Distance</div>
                      <div className="text-xs text-gray-500">Kilometers</div>
                    </div>
                    <div className="h-40 flex items-end gap-2">
                      {[
                        { height: 65, label: "Mon", miniChart: [45, 60, 52, 65] },
                        { height: 78, label: "Tue", miniChart: [55, 70, 78, 65] },
                        { height: 55, label: "Wed", miniChart: [38, 48, 55, 42] },
                        { height: 88, label: "Thu", miniChart: [65, 80, 88, 75] },
                        { height: 72, label: "Fri", miniChart: [50, 65, 72, 68] },
                        { height: 45, label: "Sat", miniChart: [30, 38, 45, 35] },
                      ].map((day, i) => (
                        <div key={i} className="flex-1 flex flex-col items-center gap-2">
                          <div className="w-full flex flex-col justify-end h-full relative group">
                            <div 
                              className="w-full bg-black rounded-t relative overflow-hidden"
                              style={{ height: `${day.height}%` }}
                            >
                              {/* Mini chart overlay - shows hourly activity */}
                              <div className="absolute bottom-0 left-0 right-0 h-8 flex items-end justify-around gap-[1px] px-1 opacity-30">
                                {day.miniChart.map((h, idx) => (
                                  <div 
                                    key={idx} 
                                    className="flex-1 bg-white rounded-t"
                                    style={{ height: `${h}%` }}
                                  ></div>
                                ))}
                              </div>
                            </div>
                          </div>
                          <span className="text-xs text-gray-600">{day.label}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-200">
                      <div className="text-xs text-gray-600">Total: 7,687 km</div>
                      <div className="text-xs text-green-600">↑ 12% vs last week</div>
                    </div>
                  </div>

                  {/* Secondary Stats */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="text-xs text-gray-500 mb-2">Fuel Consumption</div>
                      <div className="text-xl font-bold text-gray-900 mb-3">5,152 L</div>
                      <div className="h-16 flex items-end gap-1">
                        {[70, 82, 60, 92, 75, 50].map((h, i) => (
                          <div key={i} className="flex-1 bg-gray-300 rounded-t" style={{ height: `${h}%` }}></div>
                        ))}
                      </div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="text-xs text-gray-500 mb-2">Completed Trips</div>
                      <div className="text-xl font-bold text-gray-900 mb-3">740</div>
                      <div className="h-16 flex items-end gap-1">
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
