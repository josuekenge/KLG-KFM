"use client";

import { motion } from "framer-motion";
import { Shield, Lock, Eye, Database, UserCheck, FileText, MapPin, Mail } from "lucide-react";
import Link from "next/link";

const privacySections = [
  {
    icon: Shield,
    title: "Information We Collect",
    content: [
      {
        subtitle: "Fleet and Vehicle Data",
        text: "We collect GPS location data, vehicle diagnostics, fuel consumption metrics, driver behavior analytics, maintenance records, and trip histories to provide our fleet management services. This data is essential for tracking, monitoring, and optimizing your fleet operations."
      },
      {
        subtitle: "Account Information",
        text: "When you create an account, we collect your name, email address, phone number, company name, billing information, and other details necessary to provide and support our services."
      },
      {
        subtitle: "Usage Data",
        text: "We automatically collect information about how you interact with our platform, including IP addresses, browser types, device information, access times, and pages viewed to improve our services and user experience."
      },
      {
        subtitle: "Communications",
        text: "When you contact us for support or sales inquiries, we collect the information you provide in those communications to assist you effectively."
      }
    ]
  },
  {
    icon: Database,
    title: "How We Use Your Information",
    content: [
      {
        subtitle: "Service Delivery",
        text: "We use your data to provide GPS tracking, fuel monitoring, driver safety analysis, predictive maintenance alerts, and all other features of our fleet management platform."
      },
      {
        subtitle: "Analytics and Insights",
        text: "Your fleet data is processed to generate actionable insights, reports, and recommendations that help you optimize fleet performance, reduce costs, and improve safety."
      },
      {
        subtitle: "Platform Improvement",
        text: "We analyze usage patterns and feedback to enhance our platform, develop new features, fix bugs, and improve overall user experience."
      },
      {
        subtitle: "Communication",
        text: "We use your contact information to send service updates, technical alerts, billing notices, security notifications, and respond to your inquiries."
      },
      {
        subtitle: "Compliance and Safety",
        text: "We process data to ensure compliance with applicable laws, prevent fraud, maintain security, and protect the rights and safety of our users."
      }
    ]
  },
  {
    icon: Lock,
    title: "Data Security",
    content: [
      {
        subtitle: "Encryption",
        text: "All data transmitted between your devices and our servers is encrypted using industry-standard TLS/SSL protocols. Data at rest is encrypted using AES-256 encryption to ensure maximum security."
      },
      {
        subtitle: "Access Controls",
        text: "We implement strict access controls, multi-factor authentication, and role-based permissions to ensure only authorized personnel can access your data."
      },
      {
        subtitle: "Infrastructure Security",
        text: "Our systems are hosted on secure cloud infrastructure with regular security audits, intrusion detection systems, firewalls, and 24/7 monitoring to protect against unauthorized access."
      },
      {
        subtitle: "Data Backups",
        text: "We perform regular automated backups of all data to prevent data loss and ensure business continuity in case of system failures."
      },
      {
        subtitle: "Incident Response",
        text: "We maintain a comprehensive incident response plan and will notify you promptly in the unlikely event of a data breach affecting your information."
      }
    ]
  },
  {
    icon: Eye,
    title: "Data Sharing and Disclosure",
    content: [
      {
        subtitle: "No Sale of Data",
        text: "We do not sell, rent, or trade your personal information or fleet data to third parties for their marketing purposes."
      },
      {
        subtitle: "Service Providers",
        text: "We may share data with trusted service providers who assist us in operating our platform (e.g., cloud hosting, payment processing, customer support). These providers are contractually obligated to protect your data and use it only for specified purposes."
      },
      {
        subtitle: "Legal Requirements",
        text: "We may disclose information when required by law, court order, or government regulation, or when we believe disclosure is necessary to protect our rights, your safety, or the safety of others."
      },
      {
        subtitle: "Business Transfers",
        text: "In the event of a merger, acquisition, or sale of assets, your information may be transferred to the acquiring entity, subject to the same privacy protections."
      },
      {
        subtitle: "With Your Consent",
        text: "We may share your information with third parties when you explicitly consent to such sharing."
      }
    ]
  },
  {
    icon: MapPin,
    title: "Location Data",
    content: [
      {
        subtitle: "GPS Tracking",
        text: "Our services require continuous collection of vehicle location data via GPS and satellite tracking. This data is essential for fleet monitoring, route optimization, and safety features."
      },
      {
        subtitle: "Data Retention",
        text: "Location history is retained for the duration of your subscription and may be retained longer for compliance, dispute resolution, or as required by law."
      },
      {
        subtitle: "Access Control",
        text: "You control who within your organization can access location data through our role-based permission system."
      },
      {
        subtitle: "Data Accuracy",
        text: "Location data accuracy depends on GPS signal availability, environmental conditions, and hardware performance. We use hybrid connectivity (cellular and satellite) to ensure continuous tracking in frontier markets."
      }
    ]
  },
  {
    icon: UserCheck,
    title: "Your Rights and Choices",
    content: [
      {
        subtitle: "Access and Portability",
        text: "You have the right to access your personal information and fleet data stored in our systems. You can export your data in standard formats at any time through our platform."
      },
      {
        subtitle: "Correction and Updates",
        text: "You can update your account information and fleet settings directly through the platform. Contact us if you need assistance correcting any inaccurate information."
      },
      {
        subtitle: "Data Deletion",
        text: "You may request deletion of your personal information, subject to legal retention requirements and contractual obligations. Fleet data may be retained for compliance purposes even after account closure."
      },
      {
        subtitle: "Marketing Communications",
        text: "You can opt out of promotional emails at any time by clicking the unsubscribe link in our emails or updating your communication preferences in your account settings."
      },
      {
        subtitle: "Account Closure",
        text: "You may close your account at any time. Upon closure, we will delete or anonymize your personal information in accordance with our retention policies and legal obligations."
      }
    ]
  },
  {
    icon: FileText,
    title: "Data Retention",
    content: [
      {
        subtitle: "Active Accounts",
        text: "We retain your account information and fleet data for as long as your account remains active and for the duration of your subscription."
      },
      {
        subtitle: "Inactive Accounts",
        text: "After account closure or subscription termination, we may retain certain data for up to 7 years as required for legal compliance, tax purposes, dispute resolution, and fraud prevention."
      },
      {
        subtitle: "Anonymized Data",
        text: "We may retain anonymized and aggregated data indefinitely for analytics, research, and platform improvement purposes. This data cannot be used to identify individuals or specific fleets."
      },
      {
        subtitle: "Backup Data",
        text: "Deleted data may persist in backup systems for up to 90 days before permanent deletion from all systems."
      }
    ]
  }
];

const regionalCompliance = [
  {
    region: "Africa",
    description: "We comply with data protection laws in the Democratic Republic of Congo and all 12 African countries where we operate, ensuring local data sovereignty and privacy standards."
  },
  {
    region: "GDPR (Europe)",
    description: "For European customers, we comply with the General Data Protection Regulation (GDPR), including rights to access, rectification, erasure, and data portability."
  },
  {
    region: "International",
    description: "We adhere to international privacy standards and frameworks, including ISO 27001 information security management practices."
  }
];

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-gray-50 to-white border-b border-gray-200 pt-24 pb-16">
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              repeating-linear-gradient(45deg, transparent, transparent 30px, black 30px, black 31px),
              repeating-linear-gradient(-45deg, transparent, transparent 30px, black 30px, black 31px)
            `,
          }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-white" />
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Privacy Policy
            </h1>
            
            <p className="text-xl text-gray-600 mb-8">
              Your privacy and data security are our top priorities. This policy explains how Kyeto Fleet Management (KFM) collects, uses, protects, and shares your information.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-black rounded-full"></div>
                <span>Last Updated: October 12, 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-black rounded-full"></div>
                <span>Effective Date: October 12, 2025</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Kyeto Fleet Management (KFM), part of Kyeto Logistics Group, operates a fleet management and telematics platform serving customers across 12 African countries. We are headquartered in Kinshasa, Democratic Republic of Congo.
                </p>
                <p>
                  This Privacy Policy describes how we collect, use, store, share, and protect information when you use our GPS tracking, fuel monitoring, driver safety, and fleet management services. By using our services, you agree to the practices described in this policy.
                </p>
                <p>
                  We take data privacy seriously and implement robust security measures to protect your information. This policy is designed to be transparent about our data practices and your rights.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Privacy Sections */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {privacySections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="border border-gray-200 rounded-2xl p-8 hover:border-gray-300 transition-colors"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center flex-shrink-0">
                    <section.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
                  </div>
                </div>
                
                <div className="space-y-6">
                  {section.content.map((item, idx) => (
                    <div key={idx}>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {item.subtitle}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Regional Compliance */}
      <section className="py-16 bg-gray-50 border-y border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                International Compliance
              </h2>
              <p className="text-lg text-gray-600">
                We comply with data protection regulations in all regions where we operate
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {regionalCompliance.map((item, index) => (
                <motion.div
                  key={item.region}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white border border-gray-200 rounded-xl p-6"
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{item.region}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Children's Privacy */}
      <section className="py-16 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="border border-gray-200 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Children&apos;s Privacy</h2>
              <p className="text-gray-700 leading-relaxed">
                Our services are designed for businesses and fleet operators. We do not knowingly collect personal information from individuals under 18 years of age. If we become aware that we have collected personal information from a child under 18, we will take steps to delete that information promptly.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Changes to Policy */}
      <section className="py-16 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="border border-gray-200 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Policy</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  We may update this Privacy Policy from time to time to reflect changes in our practices, services, legal requirements, or for other operational reasons.
                </p>
                <p>
                  When we make material changes, we will notify you by email (to the address associated with your account) and/or by posting a prominent notice on our platform at least 30 days before the changes take effect.
                </p>
                <p>
                  We encourage you to review this policy periodically. Your continued use of our services after changes become effective constitutes acceptance of the updated policy.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-black text-white rounded-2xl p-8 md:p-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">Questions About Privacy?</h2>
                <p className="text-gray-300 text-lg">
                  If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Email</div>
                    <a href="mailto:privacy@kyetofleet.com" className="text-gray-300 hover:text-white transition-colors">
                      privacy@kyetofleet.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Address</div>
                    <div className="text-gray-300">
                      Kyeto Logistics Group<br />
                      Kinshasa, Democratic Republic of Congo
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <Link 
                  href="/#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-gray-100 text-black font-semibold rounded-lg transition-all duration-200"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Back to Home */}
      <section className="py-8 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Link 
              href="/"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-black transition-colors"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

