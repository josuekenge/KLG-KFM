"use client";

import Link from "next/link";
import { Truck, Shield } from "lucide-react";

const footerLinks = {
  solutions: [
    { name: "GPS Tracking", href: "#", clickable: false },
    { name: "Fuel Monitoring", href: "#", clickable: false },
    { name: "Driver Safety", href: "#", clickable: false },
    { name: "AI Cameras", href: "#", clickable: false },
  ],
  platform: [
    { name: "Dashboard", href: "/platform" },
    { name: "Analytics", href: "#", clickable: false },
    { name: "Reports", href: "#", clickable: false },
    { name: "API", href: "#", clickable: false },
  ],
  company: [
    { name: "About", href: "#about", clickable: true },
    { name: "Careers", href: "/careers", clickable: true },
    { name: "Contact", href: "#contact", clickable: true },
    { name: "Support", href: "#", clickable: false, comingSoon: true },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy", clickable: true },
    { name: "Terms of Service", href: "/terms", clickable: true },
    { name: "Cookie Policy", href: "/cookies", clickable: true },
    { name: "GDPR", href: "/gdpr", clickable: true },
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
              <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                <span className="text-white font-bold text-xs">KLG</span>
              </div>
              <span className="font-bold text-lg text-gray-900">
                Kyeto Logistics
              </span>
            </Link>
            <p className="text-gray-600 mb-6 text-sm max-w-sm">
              Fleet management solutions built for frontier markets with rugged hardware and AI-powered insights.
            </p>
            <div className="flex gap-3">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Truck className="w-4 h-4" />
                <span>KLG Logistics</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Shield className="w-4 h-4" />
                <span>KFM Fleet</span>
              </div>
            </div>
          </div>

          {/* Features */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Features</h3>
            <ul className="space-y-2 text-sm">
              {footerLinks.solutions.slice(0, 4).map((link) => (
                <li key={link.name}>
                  <span className="text-gray-600 cursor-default">
                    {link.name}
                  </span>
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
                  {link.clickable ? (
                    <Link href={link.href} className="text-gray-600 hover:text-black transition-colors">
                      {link.name}
                      {link.comingSoon && <span className="text-xs text-orange-500 ml-1">(Coming Soon)</span>}
                    </Link>
                  ) : (
                    <span className="text-gray-600 cursor-default">
                      {link.name}
                      {link.comingSoon && <span className="text-xs text-orange-500 ml-1">(Coming Soon)</span>}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/support" className="text-gray-600 hover:text-black transition-colors">Support <span className="text-xs text-orange-500">(Coming Soon)</span></Link></li>
              <li><Link href="/privacy" className="text-gray-600 hover:text-black transition-colors">Privacy Policy</Link></li>
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
