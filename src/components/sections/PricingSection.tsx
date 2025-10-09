"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useState } from "react";

const pricingPlans = [
  {
    name: "Starter",
    description: "Get started with Kyeto Logistics at no cost",
    monthlyPrice: "Free",
    yearlyPrice: "Free",
    features: [
      "400 AI credits at signup",
      "20,000 AI token inputs",
      "Calendar integration & syncing",
      "Guest sharing and links"
    ],
    popular: false
  },
  {
    name: "Plus",
    description: "Unlock more powerful features",
    monthlyPrice: "$22",
    yearlyPrice: "$19",
    features: [
      "Unlimited AI credits",
      "50,000 AI token inputs",
      "Calendar integration & syncing",
      "Guest sharing and links"
    ],
    popular: true
  },
  {
    name: "Pro",
    description: "Take your business to the next level",
    monthlyPrice: "$69",
    yearlyPrice: "$59",
    features: [
      "Unlimited AI creation",
      "100,000 AI token inputs",
      "Calendar integration & syncing",
      "Guest sharing and links"
    ],
    popular: false
  }
];

export function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-white to-gray-50">
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
            Pricing
          </motion.p>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Simple, Flexible Pricing
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"
          >
            Pricing plans for businesses at every stage of growth.
          </motion.p>

          {/* Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4"
          >
            <span className={`font-semibold ${!isYearly ? 'text-gray-900' : 'text-gray-400'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className={`relative w-16 h-8 rounded-full transition-colors duration-200 ${
                isYearly ? 'bg-black' : 'bg-gray-300'
              }`}
            >
              <span
                className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-transform duration-200 ${
                  isYearly ? 'translate-x-8' : 'translate-x-0'
                }`}
              ></span>
            </button>
            <span className={`font-semibold ${isYearly ? 'text-gray-900' : 'text-gray-400'}`}>
              Yearly
            </span>
          </motion.div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="relative"
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-black text-white px-4 py-1 rounded-full text-sm font-semibold">
                    popular
                  </span>
                </div>
              )}

              <div className={`bg-white rounded-2xl p-8 shadow-lg border-2 h-full flex flex-col ${
                plan.popular ? 'border-black' : 'border-gray-200'
              }`}>
                {/* Plan Name */}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-6">
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-bold text-gray-900">
                      {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                    </span>
                    {plan.monthlyPrice !== "Free" && (
                      <span className="text-gray-600">/month, per user</span>
                    )}
                  </div>
                </div>

                {/* CTA Button */}
                <a
                  href="/contact"
                  className={`w-full py-3 rounded-xl font-semibold text-center transition-all duration-200 mb-8 ${
                    plan.popular
                      ? 'bg-black hover:bg-gray-800 text-white'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                  }`}
                >
                  Get Started
                </a>

                {/* Features */}
                <div className="flex-1">
                  <p className="text-sm font-semibold text-gray-900 mb-4">
                    What&apos;s Included
                  </p>
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-black flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a 
            href="/contact"
            className="inline-block px-8 py-4 bg-white border-2 border-black text-black hover:bg-gray-50 font-semibold rounded-xl transition-all duration-200"
          >
            Request a demo
          </a>
        </motion.div>
      </div>
    </section>
  );
}

