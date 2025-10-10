"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import { services } from "@/data/services";
import { 
  MapPin, 
  Fuel, 
  Shield, 
  Camera, 
  Wrench, 
  Package, 
  Users, 
  FileCheck,
  ArrowRight,
  Sparkles,
  Zap
} from "lucide-react";

const iconMap = {
  MapPin,
  Fuel,
  Shield,
  Camera,
  Wrench,
  Package,
  Users,
  FileCheck,
};

const colorVariants = [
  "from-gray-900 to-black",
  "from-gray-800 to-gray-900", 
  "from-black to-gray-800",
  "from-gray-900 to-gray-700",
  "from-black to-gray-900",
  "from-gray-800 to-black",
  "from-gray-900 to-black",
  "from-black to-gray-800"
];

export function ModernServices() {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-72 h-72 bg-gray-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gray-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-gray-100 border border-gray-200 rounded-full text-gray-900 shadow-lg"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-5 h-5 text-black" />
            </motion.div>
            <span className="text-sm font-bold tracking-wide">
              Comprehensive Solutions
            </span>
            <div className="w-2 h-2 bg-black rounded-full animate-pulse"></div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-black text-gray-900 mb-8 leading-tight"
          >
            Fleet{" "}
            <span className="text-black">
              Solutions
            </span>{" "}
            Redefined
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light"
          >
            KFM provides end-to-end solutions across commercial, industrial, and governmental sectors, 
            positioning itself as the digital backbone for vehicle and logistics operations.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap];
            const colorVariant = colorVariants[index % colorVariants.length];
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.1, 
                  ease: [0.4, 0, 0.2, 1] 
                }}
                viewport={{ once: true }}
                whileHover={{ y: -12, scale: 1.02 }}
                className="group"
              >
                <Card className="relative h-full border-0 bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-500 shadow-lg hover:shadow-2xl rounded-3xl overflow-hidden">
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${colorVariant} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  
                  {/* Animated border */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${colorVariant} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl p-[1px]`}>
                    <div className="w-full h-full bg-white rounded-3xl"></div>
                  </div>

                  <CardHeader className="relative z-10 pb-6 pt-8">
                    <motion.div 
                      className={`w-16 h-16 bg-gradient-to-r ${colorVariant} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                      whileHover={{ rotate: 5 }}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </motion.div>
                    <CardTitle className="text-xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-gray-700 group-hover:bg-clip-text transition-all duration-300">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="relative z-10 pt-0 pb-8">
                    <ul className="space-y-3 mb-8">
                      {service.features.slice(0, 3).map((feature, featureIndex) => (
                        <motion.li 
                          key={featureIndex} 
                          className="flex items-center text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: (index * 0.1) + (featureIndex * 0.05) }}
                          viewport={{ once: true }}
                        >
                          <motion.div 
                            className={`w-2 h-2 bg-gradient-to-r ${colorVariant} rounded-full mr-3 flex-shrink-0`}
                            whileHover={{ scale: 1.5 }}
                          />
                          {feature}
                        </motion.li>
                      ))}
                      {service.features.length > 3 && (
                        <motion.li 
                          className={`text-sm font-semibold bg-gradient-to-r ${colorVariant} bg-clip-text text-transparent`}
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ duration: 0.4, delay: (index * 0.1) + 0.2 }}
                          viewport={{ once: true }}
                        >
                          +{service.features.length - 3} more features
                        </motion.li>
                      )}
                    </ul>
                    
                    <Link
                      href={service.href}
                      className={`group/btn relative inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r ${colorVariant} text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        Learn More
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </span>
                      <div className={`absolute inset-0 bg-gradient-to-r ${colorVariant} rounded-2xl blur opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300`}></div>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link 
            href="/solutions" 
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-black hover:bg-gray-800 text-white font-bold rounded-2xl shadow-2xl hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <span className="relative z-10 flex items-center gap-3">
              <Zap className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              View All Solutions
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
            <div className="absolute inset-0 bg-black rounded-2xl blur opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

