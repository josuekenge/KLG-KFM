"use client";

import { useEffect } from "react";

export function ChromeOptimizer() {
  useEffect(() => {
    // Chrome-specific optimizations
    if (typeof window !== "undefined") {
      // Detect Chrome browser
      const isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
      
      if (isChrome) {
        // Chrome-specific performance optimizations
        console.log("Chrome detected - applying optimizations");
        
        // Optimize scroll performance
        document.documentElement.style.scrollBehavior = "smooth";
        
        // Optimize font rendering
        document.documentElement.style.textRendering = "optimizeLegibility";
        
        // Optimize image loading
        const images = document.querySelectorAll("img");
        images.forEach((img) => {
          img.loading = "lazy";
          img.decoding = "async";
        });
        
        // Optimize animations for Chrome
        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (prefersReducedMotion) {
          document.documentElement.style.setProperty("--animation-duration", "0.01ms");
        }
        
        // Chrome-specific memory management
        const cleanup = () => {
          // Force garbage collection if available (Chrome DevTools)
          if (window.gc) {
            window.gc();
          }
        };
        
        // Cleanup on page unload
        window.addEventListener("beforeunload", cleanup);
        
        return () => {
          window.removeEventListener("beforeunload", cleanup);
        };
      }
    }
  }, []);

  return null;
}

// Chrome-specific utility functions
export const chromeUtils = {
  // Check if running in Chrome
  isChrome: () => {
    if (typeof window === "undefined") return false;
    return /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
  },
  
  // Optimize images for Chrome
  optimizeImages: () => {
    if (typeof window === "undefined") return;
    
    const images = document.querySelectorAll("img");
    images.forEach((img) => {
      img.loading = "lazy";
      img.decoding = "async";
      img.fetchPriority = "auto";
    });
  },
  
  // Optimize fonts for Chrome
  optimizeFonts: () => {
    if (typeof window === "undefined") return;
    
    document.documentElement.style.textRendering = "optimizeLegibility";
    document.documentElement.style.webkitFontSmoothing = "antialiased";
  },
  
  // Force repaint for Chrome
  forceRepaint: () => {
    if (typeof window === "undefined") return;
    
    document.body.style.display = "none";
    void document.body.offsetHeight; // Trigger reflow
    document.body.style.display = "";
  },
  
  // Chrome-specific error reporting
  reportError: (error: Error, context?: string) => {
    console.error(`Chrome Error${context ? ` in ${context}` : ""}:`, error);
    
    // Chrome-specific error reporting
    if (window.chrome && window.chrome.runtime) {
      // Chrome extension context
      window.chrome.runtime.lastError = error;
    }
  }
};

// Declare global types for Chrome-specific features
declare global {
  interface Window {
    gc?: () => void;
    chrome?: {
      runtime?: {
        lastError?: Error;
      };
    };
  }
  
  interface CSSStyleDeclaration {
    webkitFontSmoothing?: string;
  }
}
