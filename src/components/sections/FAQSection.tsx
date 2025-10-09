"use client";

import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "What is Kyeto Logistics?",
    answer: "Kyeto Logistics is an AI-powered fleet management platform that helps businesses connect, manage, and optimize their fleet operations effortlessly. We provide integrated logistics, telematics, AI, and data analytics solutions."
  },
  {
    question: "Can I integrate Kyeto Logistics with my existing tools?",
    answer: "Yes! Kyeto Logistics supports integration with a wide range of tools and platforms. Our flexible APIs allow you to connect with your data sources effortlessly, enabling a smooth workflow."
  },
  {
    question: "How does Kyeto Logistics automate tasks?",
    answer: "Our platform uses advanced AI algorithms to identify repetitive tasks and create automated workflows. You can set up custom automation rules, triggers, and conditions to streamline your operations and save time."
  },
  {
    question: "Is my data secure with Kyeto Logistics?",
    answer: "Absolutely. We take data security very seriously. All data is encrypted in transit and at rest using industry-standard encryption protocols. We're compliant with major security standards and regulations including GDPR and SOC 2."
  },
  {
    question: "What kind of support do you offer?",
    answer: "We offer 24/7 customer support through multiple channels including email, chat, and phone. All plans include access to our comprehensive documentation and knowledge base. Enterprise customers also get dedicated account managers and priority support."
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
              href="/contact" 
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

