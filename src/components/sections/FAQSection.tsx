"use client";

import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "What makes KLG different from other logistics platforms?",
    answer: "KLG is a government-backed platform that partners with existing telematics companies via API, avoiding costly hardware purchases. We rapidly onboard 1,300+ container trucks by integrating with providers like PowerTrack, Tramigo, and Frotcom, focusing on declaration companies and container transport."
  },
  {
    question: "How do telematics API partnerships work?",
    answer: "KLG integrates with telematics providers' APIs to access real-time GPS data, vehicle status, and route progress for container trucks. This allows us to display and manage fleet data without purchasing hardware, while telematics companies retain their core revenue and gain new business opportunities."
  },
  {
    question: "Which routes does KLG focus on?",
    answer: "KLG focuses on major container transport routes like Matadi-Kinshasa and other key import/export corridors across the DRC and 12 African countries. We prioritize routes with high container volume and existing telematics coverage."
  },
  {
    question: "How quickly can trucks be onboarded?",
    answer: "Through API partnerships, trucks can be onboarded instantly once telematics providers grant access. No hardware installation needed—we leverage existing GPS devices already installed on container trucks."
  },
  {
    question: "What types of clients does KLG serve?",
    answer: "KLG primarily serves declaration companies (customs brokers) who need reliable container transport, and trucking companies with 20ft/40ft container trucks. We also work with telematics providers seeking new revenue streams through our API partnership model."
  },
  {
    question: "What data analytics does KLG provide?",
    answer: "KLG provides comprehensive analytics including route optimization, ETA accuracy, container tracking, and operational efficiency metrics. Our integrated dashboards serve declaration companies, truckers, and government agencies with real-time visibility."
  },
  {
    question: "How do you ensure data security?",
    answer: "KLG implements enterprise-grade security measures including data encryption, secure APIs, and compliance with regional regulations. As a government-backed platform, we meet industry standards for data protection and regulatory tracking."
  },
  {
    question: "What kind of support do you provide?",
    answer: "We provide dedicated support for declaration companies and telematics partners, including API integration assistance, onboarding coordination, and ongoing technical support. Our local teams in Kinshasa understand frontier market challenges."
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

