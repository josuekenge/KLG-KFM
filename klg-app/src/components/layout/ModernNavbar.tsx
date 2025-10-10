"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Features", href: "/#features" },
  { name: "About", href: "/#about" },
  { name: "Testimonials", href: "/#testimonials" },
  { name: "FAQ", href: "/#faq" },
];

export function ModernNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { scrollY } = useScroll();

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
            <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center transition-transform group-hover:scale-110">
              <span className="text-white font-bold text-xs">KLG</span>
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
                className="px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium text-sm rounded-lg hover:bg-gray-50"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button - Fluence style */}
          <div className="hidden md:flex items-center space-x-3">
            <a
              href="#contact"
              className="px-6 py-2.5 bg-black hover:bg-gray-900 text-white font-semibold rounded-lg transition-all duration-200 text-sm shadow-sm hover:shadow-md hover:scale-105"
            >
              Contact
            </a>
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
                className="block px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors duration-200 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="px-4 pt-4">
              <a
                href="#contact"
                className="block w-full text-center px-6 py-2.5 bg-black hover:bg-gray-800 text-white font-semibold rounded-lg transition-all duration-200 text-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}






