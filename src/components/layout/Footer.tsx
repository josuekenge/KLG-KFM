"use client";

import Link from "next/link";
import { Truck, Shield, Linkedin, Twitter, Mail } from "lucide-react";

const footerLinks = {
  features: [
    { name: "GPS Tracking", href: "/#features" },
    { name: "Fleet Management", href: "/#features" },
    { name: "Container Tracking", href: "/#features" },
    { name: "API Integration", href: "/#features" },
  ],
  company: [
    { name: "About", href: "/#about" },
    { name: "Contact", href: "/#contact" },
    { name: "FAQ", href: "/#faq" },
  ],
  resources: [
    { name: "Blog", href: "/blog" },
    { name: "Articles", href: "/blog" },
    { name: "Insights", href: "/blog" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4 group">
              <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200 relative overflow-hidden">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Truck icon for fleet management */}
                  <path
                    d="M16 6H3C2.44772 6 2 6.44772 2 7V16C2 16.5523 2.44772 17 3 17H4M16 6V17M16 6H18L21 9V16C21 16.5523 20.5523 17 20 17H19M16 17H4M16 17H19M4 17C4 18.1046 4.89543 19 6 19C7.10457 19 8 18.1046 8 17M19 17C19 18.1046 18.1046 19 17 19C15.8954 19 15 18.1046 15 17M8 17H15"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  {/* GPS pin on truck */}
                  <circle cx="11" cy="10" r="1.5" fill="white" opacity="0.8" />
                </svg>
              </div>
              <span className="font-bold text-lg text-gray-900">
                Kyeto Logistics
              </span>
            </Link>
            <p className="text-gray-600 mb-6 text-sm max-w-sm">
              Government-backed logistics platform connecting declaration companies, truckers, and cargo across Africa through API partnerships.
            </p>
            
            {/* Features Badges */}
            <div className="flex flex-wrap gap-3 mb-6">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Truck className="w-4 h-4" />
                <span>Container Transport</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Shield className="w-4 h-4" />
                <span>API Integration</span>
              </div>
            </div>
            
            {/* Social Media Links */}
            <div className="flex items-center gap-3">
              <a 
                href="https://www.linkedin.com/company/drc-iae-chamber-of-commerce/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-100 hover:bg-black rounded-lg flex items-center justify-center transition-all duration-200 group"
                aria-label="Follow us on LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" />
              </a>
              <a 
                href="https://twitter.com/kyetologistics" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-100 hover:bg-black rounded-lg flex items-center justify-center transition-all duration-200 group"
                aria-label="Follow us on Twitter"
              >
                <Twitter className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" />
              </a>
              <a 
                href="mailto:sales@kyetologistics.com" 
                className="w-10 h-10 bg-gray-100 hover:bg-black rounded-lg flex items-center justify-center transition-all duration-200 group"
                aria-label="Email us"
              >
                <Mail className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          {/* Features */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Features</h3>
            <ul className="space-y-2 text-sm">
              {footerLinks.features.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-600 hover:text-black transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-600 hover:text-black transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  {link.href.startsWith('/blog') ? (
                    <Link href={link.href} className="text-gray-600 hover:text-black transition-colors">
                      {link.name}
                    </Link>
                  ) : (
                    <a href={link.href} className="text-gray-600 hover:text-black transition-colors">
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-600 text-sm">
                © {new Date().getFullYear()} Kyeto Logistics Group. All rights reserved.
              </p>
              <div className="text-gray-600 text-sm">
                Kinshasa, Democratic Republic of Congo
              </div>
            </div>
      </div>
    </footer>
  );
}
