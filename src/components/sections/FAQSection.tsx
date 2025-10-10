"use client";

import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "What makes KFM different from other telematics providers?",
    answer: "KFM is purpose-built for frontier markets with rugged hardware, satellite backup for connectivity in remote areas, and local support teams who understand African logistics challenges. Unlike global competitors like Cartrack, Samsara, and Geotab, we specialize in environments with unreliable cellular coverage and harsh operating conditions."
  },
  {
    question: "How does the satellite backup work?",
    answer: "Our hybrid connectivity approach automatically switches to satellite communication when cellular networks are unavailable. This ensures continuous tracking even in the most remote mining sites, border crossings, and rural routes where traditional GPS devices fail."
  },
  {
    question: "Can KFM integrate with KLG's logistics platform?",
    answer: "Yes! KFM data flows seamlessly into KLG's dispatch system and marketplace, improving route optimization, job allocation, and ETA accuracy. This integration provides end-to-end visibility from port to city across the entire supply chain."
  },
  {
    question: "What kind of fuel savings can we expect?",
    answer: "Our clients typically see a 35% reduction in fuel costs through advanced fuel monitoring sensors that detect theft patterns and anomalies. The AI-powered insights help identify inefficiencies and optimize routes for maximum fuel economy."
  },
  {
    question: "How does KFM improve driver safety?",
    answer: "Our AI-powered driver scorecards track harsh braking, speeding, and unsafe driving behaviors. Clients have reduced accidents by 40% and lowered insurance premiums. The AI cameras also provide invaluable evidence when incidents do occur."
  },
  {
    question: "What type of vehicles can you track?",
    answer: "We track all types of fleet vehicles including trucks, mining equipment, delivery vans, government fleets, and specialized cargo vehicles. Our rugged hardware is designed to withstand harsh conditions and can be installed on any vehicle type."
  },
  {
    question: "Do you offer maintenance alerts?",
    answer: "Yes! Our predictive maintenance system provides alerts based on engine hours, mileage, and diagnostic codes. This helps prevent costly breakdowns, maximize uptime, and extend vehicle lifespan through data-driven maintenance scheduling."
  },
  {
    question: "What kind of support do you provide?",
    answer: "We offer local support teams across 12 African countries who understand frontier market challenges. Our expert team handles installation, provides training, and offers ongoing technical support to ensure your fleet operations run smoothly."
  }
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(1);

  return (
    <section id="faq" className="relative pt-24 pb-12 bg-white overflow-hidden">
      {/* Subtle crosshatch pattern */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `
            repeating-linear-gradient(45deg, transparent, transparent 30px, black 30px, black 31px),
            repeating-linear-gradient(-45deg, transparent, transparent 30px, black 30px, black 31px)
          `,
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-sm font-semibold text-black uppercase tracking-wider mb-4"
          >
            FAQ
          </motion.p>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Frequently Asked Questions
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <p className="text-xl text-gray-600 mb-4">
              Still have a question?
            </p>
            <a 
              href="#contact" 
              className="text-black hover:text-gray-700 font-semibold underline"
            >
              Contact us! We&apos;ll be happy to help you.
            </a>
          </motion.div>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors duration-200"
              >
                <span className="text-lg font-semibold text-gray-900 pr-8">
                  {faq.question}
                </span>
                <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-gray-100 rounded-full">
                  {openIndex === index ? (
                    <Minus className="w-4 h-4 text-black" />
                  ) : (
                    <Plus className="w-4 h-4 text-black" />
                  )}
                </div>
              </button>
              
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA after questions answered */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16 max-w-2xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Still have questions?
          </h3>
          <p className="text-gray-600 mb-8">
            Our fleet management experts are here to help you find the perfect solution
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-black hover:bg-gray-900 text-white font-semibold rounded-xl transition-all duration-200 shadow-md hover:shadow-xl hover:scale-105"
          >
            Get Your Questions Answered
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

