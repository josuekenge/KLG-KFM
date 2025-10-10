"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X, Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "@/contexts/ThemeContext";

const navigation = [
  { name: "Features", href: "/#features" },
  { name: "About", href: "/#about" },
  { name: "Testimonials", href: "/#testimonials" },
  { name: "FAQ", href: "/#faq" },
];

export function ModernNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

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
            ? "bg-white/95 dark:bg-black/95 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800 shadow-sm"
            : "bg-white/80 dark:bg-black/80 backdrop-blur-sm"
        )}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Fluence style */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-black dark:bg-white rounded-lg flex items-center justify-center transition-transform group-hover:scale-110">
              <span className="text-white dark:text-black font-bold text-xs">KLG</span>
            </div>
            <span className="font-bold text-lg text-gray-900 dark:text-white">
              Kyeto Logistics
            </span>
          </Link>

          {/* Desktop Navigation - Fluence style */}
          <div className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 font-medium text-sm rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button & Theme Toggle - Fluence style */}
          <div className="hidden md:flex items-center space-x-3">
            {/* Theme Toggle - Uber-style */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-lg bg-gray-100 dark:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-800 transition-all duration-200"
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <Moon className="w-5 h-5 text-gray-900 dark:text-white" />
              ) : (
                <Sun className="w-5 h-5 text-gray-900 dark:text-white" />
              )}
            </button>

            <a
              href="#contact"
              className="px-6 py-2.5 bg-black dark:bg-white hover:bg-gray-900 dark:hover:bg-gray-100 text-white dark:text-black font-semibold rounded-lg transition-all duration-200 text-sm shadow-sm hover:shadow-md hover:scale-105"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button & Theme Toggle - Fluence style */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Theme Toggle Mobile */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors duration-200"
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <Moon className="w-5 h-5 text-gray-900 dark:text-white" />
              ) : (
                <Sun className="w-5 h-5 text-gray-900 dark:text-white" />
              )}
            </button>

            <button
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 text-gray-900 dark:text-white" />
              ) : (
                <Menu className="w-5 h-5 text-gray-900 dark:text-white" />
              )}
            </button>
          </div>
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
          <div className="py-4 space-y-1 border-t border-gray-100 dark:border-gray-800">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-900 rounded-lg transition-colors duration-200 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="px-4 pt-4">
              <a
                href="#contact"
                className="block w-full text-center px-6 py-2.5 bg-black dark:bg-white hover:bg-gray-900 dark:hover:bg-gray-100 text-white dark:text-black font-semibold rounded-lg transition-all duration-200 text-sm"
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






