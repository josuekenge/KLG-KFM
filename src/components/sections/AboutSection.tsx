"use client";

import { motion } from "framer-motion";
import { Target, Users, Globe, Zap, Shield, TrendingUp, Truck, Satellite, CheckCircle2, Award } from "lucide-react";

const stats = [
  { value: "500+", label: "Active Fleets" },
  { value: "15,000+", label: "Vehicles Tracked" },
  { value: "12", label: "African Countries" },
  { value: "99.9%", label: "Uptime Reliability" }
];

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description: "To provide enterprise-grade fleet management solutions specifically designed for frontier and emerging markets, where reliability matters most. We believe African businesses deserve world-class telematics without compromising on local expertise and support."
  },
  {
    icon: Users,
    title: "Who We Serve",
    description: "SMEs, large logistics companies, mining operations, government fleets, and specialized cargo operators across Africa. From single-vehicle startups to 1,000+ vehicle enterprises, we scale with your business needs."
  },
  {
    icon: Globe,
    title: "What Makes Us Different",
    description: "Unlike global competitors like Cartrack, Samsara, and Geotab, KFM is purpose-built for challenging environments with satellite backup, rugged hardware, and local support teams who understand frontier market challenges."
  },
  {
    icon: Zap,
    title: "Our Approach",
    description: "We integrate seamlessly with KLG's logistics platform, providing end-to-end visibility from port to city with real-time tracking and AI-powered insights. Data flows directly into dispatch systems for optimized operations."
  }
];

const services = [
  {
    icon: Satellite,
    title: "GPS Tracking & Satellite Backup",
    description: "Real-time vehicle tracking with satellite fallback ensures connectivity even in the most remote areas with poor cellular coverage."
  },
  {
    icon: Shield,
    title: "Fuel Monitoring & Theft Prevention",
    description: "Advanced fuel sensors detect anomalies and theft patterns, helping reduce fuel costs by up to 35% through data-driven insights."
  },
  {
    icon: TrendingUp,
    title: "Driver Behavior & Safety",
    description: "AI-powered scorecards track harsh braking, speeding, and unsafe driving. Reduce accidents by 40% and lower insurance premiums."
  },
  {
    icon: Truck,
    title: "Maintenance & Diagnostics",
    description: "Predictive maintenance alerts based on engine hours, mileage, and diagnostic codes prevent costly breakdowns and maximize uptime."
  }
];

const achievements = [
  {
    icon: Award,
    title: "Industry Recognition",
    description: "Leading telematics provider for frontier markets with proven track record across 12 African countries."
  },
  {
    icon: CheckCircle2,
    title: "Proven Results",
    description: "$42M+ saved for clients through fuel theft prevention, route optimization, and improved operational efficiency."
  }
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-sm font-semibold text-black uppercase tracking-wider mb-4"
          >
            About Us
          </motion.p>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Who We Are & What We Do
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Headquartered in Kinshasa, Democratic Republic of Congo
          </motion.p>
        </div>

        {/* Clean Content Section */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Who We Are */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Who We Are</h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">
                Kyeto Fleet Management (KFM) is a leading telematics provider based in <strong>Kinshasa, DRC</strong>, specializing in fleet solutions for frontier markets across 12 African countries.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Part of Kyeto Logistics Group, we combine international tech expertise with deep local market knowledge to deliver solutions that actually work in challenging environments with unreliable connectivity and harsh conditions.
              </p>
            </motion.div>

            {/* What We Do */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">What We Do</h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">
                We provide enterprise-grade fleet management with GPS tracking, fuel monitoring, driver safety analysis, and predictive maintenance—all unified in one platform.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our hybrid connectivity approach automatically switches to satellite when cellular fails, ensuring continuous tracking in remote mining sites, border crossings, and rural routes where traditional telematics don&apos;t work.
              </p>
            </motion.div>
          </div>

          {/* Impact Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-12 bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 text-white"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">35%</div>
                <div className="text-sm text-gray-300">Fuel Cost Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">40%</div>
                <div className="text-sm text-gray-300">Fewer Accidents</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">$42M+</div>
                <div className="text-sm text-gray-300">Client Savings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">15K+</div>
                <div className="text-sm text-gray-300">Vehicles Tracked</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-black mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-20">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-2xl p-8 hover:border-black hover:shadow-lg transition-all duration-200">
                <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200">
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* What We Offer Section */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Fleet Solutions
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From basic GPS tracking to advanced AI-powered safety systems, we provide scalable solutions that grow with your business.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:border-black hover:shadow-md transition-all duration-200 h-full">
                  <div className="w-12 h-12 bg-gradient-to-br from-gray-900 to-black rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">
                    {service.title}
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Achievements Section */}
        <div className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-xl p-6 hover:border-black hover:shadow-lg transition-all duration-200"
              >
                <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center flex-shrink-0">
                  <achievement.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    {achievement.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

