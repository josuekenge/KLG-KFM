"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Blog", href: "/blog", external: false },
  { name: "Features", href: "/#features", external: false },
  { name: "About", href: "/#about", external: false },
  { name: "FAQ", href: "/#faq", external: false },
];

export function ModernNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { scrollY } = useScroll();

  // Prefetch homepage on mount for instant navigation
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = '/';
    document.head.appendChild(link);
  }, []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 10);
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-lg border-b border-gray-200 shadow-sm"
          : "bg-white/80 backdrop-blur-sm"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Fluence style */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center transition-transform group-hover:scale-110 relative overflow-hidden">
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

          {/* Desktop Navigation - Fluence style */}
          <div className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                prefetch={true}
                scroll={true}
                className="px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium text-sm rounded-lg hover:bg-gray-50"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button - Fluence style */}
          <div className="hidden md:flex items-center space-x-3">
            <Link
              href="/#contact"
              prefetch={true}
              scroll={true}
              className="px-6 py-2.5 bg-black hover:bg-gray-900 text-white font-semibold rounded-lg transition-all duration-200 text-sm shadow-sm hover:shadow-md hover:scale-105"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button - Fluence style */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5 text-gray-900" />
            ) : (
              <Menu className="w-5 h-5 text-gray-900" />
            )}
          </button>
        </div>

        {/* Mobile Menu - Fluence style */}
        <motion.div
          className="md:hidden overflow-hidden"
          initial={false}
          animate={{
            height: isMobileMenuOpen ? "auto" : 0,
            opacity: isMobileMenuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="py-4 space-y-1 border-t border-gray-100">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                prefetch={true}
                scroll={true}
                className="block px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors duration-200 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="px-4 pt-4">
              <Link
                href="/#contact"
                prefetch={true}
                scroll={true}
                className="block w-full text-center px-6 py-2.5 bg-black hover:bg-gray-800 text-white font-semibold rounded-lg transition-all duration-200 text-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}






