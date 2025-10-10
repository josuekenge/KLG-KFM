"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
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
  ArrowRight 
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

export function ServicesSection() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            Comprehensive{" "}
            <span className="text-gradient">Fleet Solutions</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            KFM provides end-to-end solutions across commercial, industrial, and governmental sectors, 
            positioning itself as the digital backbone for vehicle and logistics operations.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap];
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-gray-800 border-gray-700 hover:border-brand-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-brand-primary/10">
                  <CardHeader>
                    <div className="w-12 h-12 bg-brand-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <IconComponent className="w-6 h-6 text-brand-primary" />
                    </div>
                    <CardTitle className="text-white text-lg">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-gray-400">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {service.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <div className="w-1.5 h-1.5 bg-brand-primary rounded-full mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                      {service.features.length > 3 && (
                        <li className="text-sm text-gray-400">
                          +{service.features.length - 3} more features
                        </li>
                      )}
                    </ul>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full border-gray-600 text-gray-300 hover:bg-brand-primary hover:border-brand-primary hover:text-white"
                      asChild
                    >
                      <Link href={service.href}>
                        Learn More
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button 
            size="lg" 
            className="bg-brand-primary hover:bg-brand-accent"
            asChild
          >
            <Link href="/solutions">
              View All Solutions
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
