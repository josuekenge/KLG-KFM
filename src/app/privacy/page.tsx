"use client";

import { motion } from "framer-motion";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <section className="relative py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 mb-8 px-4 py-2 bg-gray-100 border border-gray-200 rounded-full text-gray-900 text-sm font-medium"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-black"></span>
              </span>
              Legal & Privacy Information
            </motion.div>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
              Privacy <span className="text-black">Policy</span>
            </h1>
            <p className="text-xl text-gray-600 mb-4 max-w-3xl mx-auto leading-relaxed">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
            </p>
            <p className="text-sm text-gray-500">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="prose prose-lg max-w-none"
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">1. Information We Collect</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-4">1.1 Personal Information</h3>
              <p className="text-gray-600 mb-4">
                We collect information you provide directly to us, such as when you:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>Create an account or profile</li>
                <li>Use our fleet management services</li>
                <li>Contact us for support</li>
                <li>Subscribe to our newsletter</li>
                <li>Apply for employment</li>
              </ul>
              
              <p className="text-gray-600 mb-4">
                This information may include:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>Name, email address, phone number</li>
                <li>Company information and fleet details</li>
                <li>Payment and billing information</li>
                <li>Driver and vehicle information</li>
                <li>Location data from GPS devices</li>
                <li>Communication preferences</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">1.2 Automatically Collected Information</h3>
              <p className="text-gray-600 mb-4">
                We automatically collect certain information when you use our services:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>Device information (IP address, browser type, operating system)</li>
                <li>Usage data (pages visited, features used, time spent)</li>
                <li>Fleet telematics data (vehicle location, speed, fuel consumption)</li>
                <li>Performance and diagnostic data</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">2. How We Use Your Information</h2>
              
              <p className="text-gray-600 mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>Provide, maintain, and improve our fleet management services</li>
                <li>Process transactions and send related information</li>
                <li>Send technical notices, updates, and support messages</li>
                <li>Respond to your comments and questions</li>
                <li>Monitor and analyze trends and usage</li>
                <li>Detect, investigate, and prevent security incidents</li>
                <li>Comply with legal obligations</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">3. Information Sharing and Disclosure</h2>
              
              <p className="text-gray-600 mb-4">
                We may share your information in the following circumstances:
              </p>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-4">3.1 Service Providers</h3>
              <p className="text-gray-600 mb-4">
                We may share information with third-party service providers who assist us in operating our platform, such as:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>Cloud hosting providers</li>
                <li>Payment processors</li>
                <li>Analytics services</li>
                <li>Customer support tools</li>
                <li>Communication platforms</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">3.2 Legal Requirements</h3>
              <p className="text-gray-600 mb-4">
                We may disclose information if required by law or to:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>Comply with legal processes or government requests</li>
                <li>Enforce our terms of service</li>
                <li>Protect our rights, property, or safety</li>
                <li>Protect the rights, property, or safety of our users</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">4. Data Security</h2>
              
              <p className="text-gray-600 mb-4">
                We implement appropriate technical and organizational measures to protect your information:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>Encryption of data in transit and at rest</li>
                <li>Regular security assessments and updates</li>
                <li>Access controls and authentication</li>
                <li>Employee training on data protection</li>
                <li>Incident response procedures</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">5. Data Retention</h2>
              
              <p className="text-gray-600 mb-4">
                We retain your information for as long as necessary to:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>Provide our services to you</li>
                <li>Comply with legal obligations</li>
                <li>Resolve disputes and enforce agreements</li>
                <li>Improve our services and develop new features</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">6. Your Rights and Choices</h2>
              
              <p className="text-gray-600 mb-4">
                Depending on your location, you may have the following rights:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Delete your personal information</li>
                <li>Restrict or object to processing</li>
                <li>Data portability</li>
                <li>Withdraw consent where applicable</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">7. Cookies and Tracking Technologies</h2>
              
              <p className="text-gray-600 mb-4">
                We use cookies and similar technologies to:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>Remember your preferences and settings</li>
                <li>Analyze how you use our services</li>
                <li>Provide personalized content and advertisements</li>
                <li>Improve our services and user experience</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">8. International Data Transfers</h2>
              
              <p className="text-gray-600 mb-4">
                Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your information in accordance with this privacy policy.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">9. Children&apos;s Privacy</h2>
              
              <p className="text-gray-600 mb-4">
                Our services are not directed to children under 13 years of age. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">10. Changes to This Policy</h2>
              
              <p className="text-gray-600 mb-4">
                We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the &quot;Last updated&quot; date. We encourage you to review this policy periodically.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">11. Contact Us</h2>
              
              <p className="text-gray-600 mb-4">
                If you have any questions about this privacy policy or our data practices, please contact us:
              </p>
              
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <p className="text-gray-700 mb-2"><strong>Kyeto Logistics Group</strong></p>
                <p className="text-gray-600 mb-2">Email: sales@kyetologistics.com</p>
                <div className="text-gray-600 mb-2">
                  <p className="font-medium mb-1">WhatsApp:</p>
                  <p className="ml-2">+243 899 905 483</p>
                  <p className="ml-2">+243 904 570 799</p>
                </div>
                <p className="text-gray-600">Address: Kinshasa, Democratic Republic of Congo</p>
              </div>

              <div className="border-t border-gray-200 pt-6 mt-8">
                <p className="text-sm text-gray-500">
                  This privacy policy is effective as of {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })} and will remain in effect except with respect to any changes in its provisions in the future, which will be in effect immediately after being posted on this page.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
