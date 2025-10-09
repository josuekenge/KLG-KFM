"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useState, useEffect } from "react";

const testimonials = [
  {
    quote: "KFM has transformed our mining fleet operations. The satellite backup keeps us connected even in the most remote areas, and fuel theft has dropped by 35% since implementation.",
    author: "David Mwangi",
    role: "Fleet Manager, Mining Operations",
    rating: 5
  },
  {
    quote: "The integration with KLG's dispatch system has been seamless. We now have real-time visibility from port to city, which has improved our customer satisfaction dramatically.",
    author: "Amara Okafor",
    role: "Logistics Director, Regional Distributor",
    rating: 5
  },
  {
    quote: "Driver safety scores have helped us reduce accidents by 40% and lower our insurance premiums. The AI-powered cameras provide invaluable evidence when incidents do occur.",
    author: "James Kimani",
    role: "Operations Manager, Transport Company",
    rating: 5
  }
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-gray-50 to-white">
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

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 100 }}
                animate={{ 
                  opacity: currentIndex === index ? 1 : 0,
                  x: currentIndex === index ? 0 : 100,
                  display: currentIndex === index ? "block" : "none"
                }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl p-12 shadow-xl border border-gray-100"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>

                {/* Author */}
                <div>
                  <div className="font-bold text-gray-900">{testimonial.author}</div>
                  <div className="text-gray-600">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index ? "bg-black w-8" : "bg-gray-300"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-4xl mx-auto">
          {[
            { value: "80+", label: "Businesses are Happy" },
            { value: "4980+", label: "Data-driven decisions" },
            { value: "80%", label: "Customer Satisfied" }
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
      </div>
    </section>
  );
}

