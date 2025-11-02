"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "KLG's API integration gave us instant access to 400+ container trucks without buying a single GPS device. Game changer for our customs brokerage.",
    author: "David Mwangi",
    role: "Operations Director",
    company: "Declaration Company",
    rating: 5
  },
  {
    quote: "The platform connects our trucks directly with declaration companies. We're getting more container loads than ever before.",
    author: "Amara Okafor",
    role: "Fleet Owner",
    company: "Container Transport",
    rating: 5
  },
  {
    quote: "Real-time visibility from Matadi to Kinshasa has transformed our container operations. No more guessing where cargo is.",
    author: "James Kimani",
    role: "Customs Broker",
    company: "Declaration Services",
    rating: 5
  },
  {
    quote: "As a telematics provider, partnering with KLG opened new revenue streams while we kept our core GPS business intact.",
    author: "Sarah Mutua",
    role: "CEO",
    company: "PowerTrack DRC",
    rating: 5
  },
  {
    quote: "Government-backed platform gave us confidence to invest. The API integration was seamless and fast.",
    author: "Patrick Nkosi",
    role: "Technical Director",
    company: "Frotcom Partner",
    rating: 5
  },
  {
    quote: "We onboarded 200 trucks in one week through KLG's API. Would have taken us 6 months doing it manually.",
    author: "Grace Achieng",
    role: "Logistics Manager",
    company: "Import/Export Company",
    rating: 5
  }
];

// Duplicate testimonials for infinite scroll effect
const infiniteTestimonials = [...testimonials, ...testimonials, ...testimonials];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative py-24 bg-white overflow-hidden">
      {/* Subtle wave pattern */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 50px, black 50px, black 51px)`,
        }}
      />
      
      <div className="container mx-auto px-4 mb-12 relative z-10">
        {/* Section Header */}
        <div className="text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-sm font-semibold text-black uppercase tracking-wider mb-4"
          >
            Success Stories
          </motion.p>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Trusted by fleets across Africa
          </motion.h2>
        </div>
      </div>

      {/* Infinite Horizontal Scroll */}
      <div className="relative">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

        {/* Scrolling Container */}
        <motion.div
          className="flex gap-6"
          animate={{
            x: [0, -1920], // Adjust based on card width * number of original testimonials
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 40,
              ease: "linear",
            },
          }}
        >
          {infiniteTestimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0 w-[380px] bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-lg hover:border-black/20 transition-all duration-300"
              whileHover={{ y: -4 }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-gray-700 mb-6 leading-relaxed text-sm">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="border-t border-gray-100 pt-4">
                <div className="font-bold text-gray-900">{testimonial.author}</div>
                <div className="text-sm text-gray-600">{testimonial.role}</div>
                <div className="text-xs text-gray-500 mt-1">{testimonial.company}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Stats */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-4xl mx-auto mb-16">
          {[
            { value: "500+", label: "Active Fleets" },
            { value: "15K+", label: "Vehicles Tracked" },
            { value: "99.9%", label: "Uptime Reliability" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-black mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA after social proof */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Ready to transform your fleet?
          </h3>
          <p className="text-gray-600 mb-8">
            Join hundreds of companies already saving costs and improving safety
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-black hover:bg-gray-900 text-white font-semibold rounded-xl transition-all duration-200 shadow-md hover:shadow-xl hover:scale-105"
            >
              Join Our Success Stories
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
