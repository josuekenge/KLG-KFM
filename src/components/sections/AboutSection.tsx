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

        {/* Detailed Content Paragraphs */}
        <div className="max-w-4xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Who We Are */}
            <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-8 hover:border-black hover:shadow-lg transition-all duration-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
                  <Target className="w-5 h-5 text-white" />
                </div>
                Who We Are
              </h3>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Kyeto Fleet Management (KFM) is a leading telematics and fleet management provider operating from the heart of Central Africa. Based in Kinshasa, Democratic Republic of Congo, we understand the unique challenges of managing vehicle fleets in frontier markets where infrastructure is unpredictable, connectivity is inconsistent, and operational demands are extreme.
                </p>
                <p>
                  We are part of the Kyeto Logistics Group (KLG), a comprehensive logistics ecosystem that connects shippers, carriers, and fleet operators across Africa. KFM serves as the technological backbone of this network, providing real-time visibility and data-driven insights that power efficient, transparent logistics operations from port to final destination.
                </p>
                <p>
                  Our team combines international expertise in telematics technology with deep local knowledge of African markets. We&apos;ve built our reputation by delivering solutions that actually work in challenging environments—where satellite backup isn&apos;t optional, where rugged hardware is essential, and where local support makes the difference between success and failure.
                </p>
              </div>
            </div>

            {/* What We Do */}
            <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-8 hover:border-black hover:shadow-lg transition-all duration-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                What We Do
              </h3>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  KFM provides enterprise-grade fleet management solutions specifically engineered for frontier and emerging markets. Our platform combines GPS tracking, fuel monitoring, driver behavior analysis, and predictive maintenance into a unified system that helps businesses reduce costs, improve safety, and optimize operations.
                </p>
                <p>
                  We serve a diverse range of clients across 12 African countries: from SME transport companies managing 5-10 vehicles, to mining operations with hundreds of heavy-duty trucks, to government fleets requiring specialized compliance and security features. Our scalable subscription model allows businesses to start with basic GPS tracking and expand into advanced analytics, AI-powered safety cameras, and comprehensive diagnostic tools as they grow.
                </p>
                <p>
                  What sets us apart is our hybrid connectivity approach. While global competitors rely solely on cellular networks, KFM devices automatically switch to satellite communication when cellular coverage fails. This ensures continuous tracking even in remote mining sites, border crossings, or rural distribution routes where traditional telematics simply don&apos;t work.
                </p>
              </div>
            </div>

            {/* Our Impact */}
            <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-8 hover:border-black hover:shadow-lg transition-all duration-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                Our Impact
              </h3>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Since launching in the DRC, we&apos;ve tracked over 15,000 vehicles across Central and East Africa, helping clients save more than $42 million through fuel theft prevention, route optimization, and reduced accident rates. Our clients typically see 35% reduction in fuel costs within the first six months, 40% fewer accidents after implementing our driver safety programs, and 20% improvement in overall fleet utilization.
                </p>
                <p>
                  Beyond the numbers, we&apos;re helping African businesses compete on a global stage. Our clients use KFM data to provide professional reporting to international partners, secure better insurance rates, improve customer service with accurate ETAs, and make data-driven decisions that were previously impossible. We&apos;re not just selling tracking devices—we&apos;re enabling the digital transformation of African logistics.
                </p>
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

        {/* KLG Integration Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-black text-white rounded-2xl p-8 md:p-12 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Part of Kyeto Logistics Group
          </h3>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-6">
            KFM data flows seamlessly into KLG&apos;s dispatch system and marketplace, 
            improving route optimization, job allocation, and ETA accuracy. 
            This integration enables transparent operations from port to city, 
            providing real-time visibility across the entire supply chain.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <a 
              href="/contact" 
              className="px-8 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200"
            >
              Learn More About Integration
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

