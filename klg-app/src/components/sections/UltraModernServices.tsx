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
  Sparkles
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

export function UltraModernServices() {
  return (
    <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="container">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-6"
          >
            <Sparkles className="w-5 h-5 text-brand-primary" />
            <span className="text-sm font-semibold text-brand-primary uppercase tracking-wider">
              Comprehensive Solutions
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
          >
            Fleet{" "}
            <span className="gradient-text">Solutions</span>{" "}
            Redefined
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            KFM provides end-to-end solutions across commercial, industrial, and governmental sectors, 
            positioning itself as the digital backbone for vehicle and logistics operations.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap];
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1, 
                  ease: [0.4, 0, 0.2, 1] 
                }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <Card className="card-modern h-full border-0 bg-white/70 backdrop-blur-xl hover:bg-white/80 transition-all duration-500">
                  <CardHeader className="pb-4">
                    <motion.div 
                      className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                      whileHover={{ rotate: 5 }}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </motion.div>
                    <CardTitle className="text-xl font-bold text-gray-900 mb-3 group-hover:text-brand-primary transition-colors duration-300">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <ul className="space-y-3 mb-8">
                      {service.features.slice(0, 3).map((feature, featureIndex) => (
                        <motion.li 
                          key={featureIndex} 
                          className="flex items-center text-sm text-gray-600"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: (index * 0.1) + (featureIndex * 0.05) }}
                          viewport={{ once: true }}
                        >
                          <div className="w-2 h-2 gradient-primary rounded-full mr-3 flex-shrink-0" />
                          {feature}
                        </motion.li>
                      ))}
                      {service.features.length > 3 && (
                        <li className="text-sm text-brand-primary font-medium">
                          +{service.features.length - 3} more features
                        </li>
                      )}
                    </ul>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Link
                        href={service.href}
                        className="group/btn inline-flex items-center justify-center w-full rounded-xl border border-gray-200 bg-gray-50 px-6 py-3 text-sm font-semibold text-gray-700 hover:bg-brand-primary hover:border-brand-primary hover:text-white transition-all duration-300"
                      >
                        Learn More
                        <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </Link>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/solutions"
              className="inline-flex items-center justify-center btn-primary"
            >
              <span>View All Solutions</span>
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

