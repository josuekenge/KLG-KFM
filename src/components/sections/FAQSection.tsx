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
    <section id="faq" className="py-24 bg-white">
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
      </div>
    </section>
  );
}

