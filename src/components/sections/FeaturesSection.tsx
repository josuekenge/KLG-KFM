"use client";

import { Satellite, HardDrive, TrendingUp, Users } from "lucide-react";
import { DataFlowAnimation } from "@/components/animations";

const features = [
  {
    icon: Satellite,
    title: "Frontier Market Ready",
    description: "Rugged devices with satellite fallback designed for challenging environments and unreliable connectivity",
    gradient: "from-gray-900 to-black"
  },
  {
    icon: HardDrive,
    title: "Data-Driven Insights",
    description: "Transform raw telematics data into actionable intelligence for optimized operations and cost reduction",
    gradient: "from-gray-800 to-gray-900"
  },
  {
    icon: TrendingUp,
    title: "Scalable Solutions",
    description: "Flexible subscription model that grows with your fleet, from GPS-only to premium safety packages",
    gradient: "from-black to-gray-800"
  },
  {
    icon: Users,
    title: "Local Support",
    description: "Dedicated support infrastructure with local expertise for SMEs, enterprises, and government fleets",
    gradient: "from-gray-900 to-gray-700"
  }
];

export function FeaturesSection() {
  return (
    <section id="features" className="relative py-12 sm:py-16 md:py-24 bg-white overflow-hidden">
      {/* API Data Flow Animation */}
      <DataFlowAnimation />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header - Mobile optimized */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs sm:text-sm font-semibold text-black uppercase tracking-wider mb-3 sm:mb-4">
            Built for Frontier Markets
          </p>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-4 sm:px-0">
            The digital backbone for vehicle operations
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4 sm:px-6 md:px-0">
            KLG provides end-to-end logistics and telematics solutions for emerging markets. From API integrations with existing GPS providers to government-backed container transport, we connect the entire supply chain.
          </p>
        </div>

        {/* Features Grid - Mobile optimized */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="group">
              <div className="text-center group">
                {/* Icon with gradient background */}
                <div className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center shadow-md group-hover:shadow-2xl transition-shadow duration-200`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-black transition-colors duration-200">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed text-base">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
