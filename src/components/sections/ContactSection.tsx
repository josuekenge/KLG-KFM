"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { useState } from "react";
import { LucideIcon } from "lucide-react";

interface ContactInfo {
  icon: LucideIcon;
  title: string;
  detail: string | string[];
  subtitle: string;
  isMultiLine: boolean;
}

const contactInfo: ContactInfo[] = [
  {
    icon: Phone,
    title: "WhatsApp",
    detail: ["+243 899 905 483", "+243 904 570 799"],
    subtitle: "Mon-Fri 8AM-6PM WAT",
    isMultiLine: true
  },
  {
    icon: Mail,
    title: "Email Us",
    detail: "sales@kyetologistics.com",
    subtitle: "We reply within 24 hours",
    isMultiLine: false
  },
  {
    icon: MapPin,
    title: "Visit Us",
    detail: "Kinshasa, DRC",
    subtitle: "Democratic Republic of Congo",
    isMultiLine: false
  }
];

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    companyType: "",
    fleetSize: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted!", formData);
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "9e6c1a0f-b7ea-4007-a1f1-4ea05180b3d1";
    console.log("Access key loaded:", accessKey ? "Yes" : "No");

    try {
      const payload = {
        access_key: accessKey,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        company_type: formData.companyType,
        fleet_size: formData.fleetSize,
        message: formData.message,
        from_name: "Kyeto Logistics Website",
        subject: "🚛 New Fleet Inquiry - Kyeto Logistics",
      };
      
      console.log("Sending payload:", payload);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      console.log("Response status:", response.status);

      const result = await response.json();
      console.log("API Response:", result);
      
      if (result.success) {
        console.log("✅ Form submitted successfully!");
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          companyType: "",
          fleetSize: "",
          message: ""
        });
        
        // Hide success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus("idle");
        }, 5000);
      } else {
        console.error("❌ Form submission failed:", result);
        setSubmitStatus("error");
        setTimeout(() => {
          setSubmitStatus("idle");
        }, 5000);
      }
    } catch (error) {
      console.error("❌ Form submission error:", error);
      setSubmitStatus("error");
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);
    } finally {
      setIsSubmitting(false);
      console.log("Form submission complete");
    }
  };

  return (
    <section id="contact" className="relative pt-12 pb-24 bg-white overflow-hidden">
      {/* Subtle crosshatch pattern - same as FAQ */}
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
            Get in Touch
          </motion.p>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Contact Us
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Have questions? We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
          </motion.p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-4xl mx-auto">
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:border-black hover:shadow-md transition-all duration-200"
            >
              <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center mb-4 mx-auto">
                <info.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">{info.title}</h3>
              {Array.isArray(info.detail) ? (
                <div className="text-sm font-medium text-black mb-1 space-y-1">
                  {info.detail.map((line, idx) => (
                    <div key={idx}>{line}</div>
                  ))}
                </div>
              ) : (
                <p className="text-sm font-medium text-black mb-1">{info.detail as string}</p>
              )}
              <p className="text-xs text-gray-600">{info.subtitle}</p>
            </motion.div>
          ))}
        </div>

        {/* Simple Contact Form - Mobile optimized */}
        <div className="max-w-2xl mx-auto px-4 sm:px-6 md:px-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg border border-gray-200">
              {/* Success/Error Notifications */}
              {submitStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mb-6 p-4 bg-black text-white rounded-lg flex items-center gap-3"
                >
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-sm font-medium">Thank you! We&apos;ll get back to you shortly.</p>
                </motion.div>
              )}
              
              {submitStatus === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mb-6 p-4 bg-red-50 border border-red-200 text-red-800 rounded-lg flex items-center gap-3"
                >
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <p className="text-sm font-medium">Something went wrong. Please try again.</p>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-black focus:ring-1 focus:ring-black focus:outline-none transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-black focus:ring-1 focus:ring-black focus:outline-none transition-colors"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Phone (WhatsApp) *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-black focus:ring-1 focus:ring-black focus:outline-none transition-colors"
                      placeholder="+243 899 905 483"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-black focus:ring-1 focus:ring-black focus:outline-none transition-colors"
                      placeholder="Your Company"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Type of Company *
                    </label>
                    <select
                      required
                      value={formData.companyType}
                      onChange={(e) => setFormData({ ...formData, companyType: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-black focus:ring-1 focus:ring-black focus:outline-none transition-colors bg-white"
                    >
                      <option value="">Select Type</option>
                      <option value="Logistics Company">Logistics Company</option>
                      <option value="Mining Company">Mining Company</option>
                      <option value="Transportation Company">Transportation Company</option>
                      <option value="Construction Company">Construction Company</option>
                      <option value="Government/Public Sector">Government/Public Sector</option>
                      <option value="Manufacturing">Manufacturing</option>
                      <option value="Agriculture">Agriculture</option>
                      <option value="Retail/Distribution">Retail/Distribution</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Fleet Size *
                    </label>
                    <select
                      required
                      value={formData.fleetSize}
                      onChange={(e) => setFormData({ ...formData, fleetSize: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-black focus:ring-1 focus:ring-black focus:outline-none transition-colors bg-white"
                    >
                      <option value="">Select Fleet Size</option>
                      <option value="1-10 vehicles">1-10 vehicles</option>
                      <option value="11-25 vehicles">11-25 vehicles</option>
                      <option value="26-50 vehicles">26-50 vehicles</option>
                      <option value="51-100 vehicles">51-100 vehicles</option>
                      <option value="101-250 vehicles">101-250 vehicles</option>
                      <option value="251-500 vehicles">251-500 vehicles</option>
                      <option value="500+ vehicles">500+ vehicles</option>
                      <option value="Planning to expand">Planning to expand</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Message *
                  </label>
                  <textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-black focus:ring-1 focus:ring-black focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your fleet management needs..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group w-full px-8 py-4 bg-black hover:bg-gray-900 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                    </>
                  )}
                </button>

                {/* Trust signals - matching website aesthetic */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                    <span className="font-medium">Reply within 24 hours</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                    <span className="font-medium">Your data is secure</span>
                  </div>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

