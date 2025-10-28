"use client";

import { useEffect } from "react";

// Browser detection utilities
const browserUtils = {
  // Detect browser type
  getBrowserInfo: () => {
    if (typeof window === "undefined") return { name: "unknown", version: "unknown" };
    
    const userAgent = navigator.userAgent;
    const browsers = [
      { name: "Chrome", regex: /Chrome\/(\d+)/ },
      { name: "Firefox", regex: /Firefox\/(\d+)/ },
      { name: "Safari", regex: /Safari\/(\d+)/ },
      { name: "Edge", regex: /Edg\/(\d+)/ },
      { name: "Opera", regex: /OPR\/(\d+)/ },
      { name: "Internet Explorer", regex: /MSIE|Trident/ },
    ];
    
    for (const browser of browsers) {
      const match = userAgent.match(browser.regex);
      if (match) {
        return { name: browser.name, version: match[1] || "unknown" };
      }
    }
    
    return { name: "unknown", version: "unknown" };
  },
  
  // Check if browser supports specific features
  supportsFeature: (feature: string) => {
    if (typeof window === "undefined") return false;
    
    const features = {
      webgl: () => {
        try {
          const canvas = document.createElement("canvas");
          return !!(canvas.getContext("webgl") || canvas.getContext("experimental-webgl"));
        } catch {
          return false;
        }
      },
      webgl2: () => {
        try {
          const canvas = document.createElement("canvas");
          return !!canvas.getContext("webgl2");
        } catch {
          return false;
        }
      },
      webp: () => {
        const canvas = document.createElement("canvas");
        canvas.width = 1;
        canvas.height = 1;
        return canvas.toDataURL("image/webp").indexOf("data:image/webp") === 0;
      },
      avif: () => {
        const canvas = document.createElement("canvas");
        canvas.width = 1;
        canvas.height = 1;
        return canvas.toDataURL("image/avif").indexOf("data:image/avif") === 0;
      },
      intersectionObserver: () => "IntersectionObserver" in window,
      performanceObserver: () => "PerformanceObserver" in window,
      requestIdleCallback: () => "requestIdleCallback" in window,
      passiveEvents: () => {
        let supportsPassive = false;
        try {
          const opts = Object.defineProperty({}, "passive", {
            get() {
              supportsPassive = true;
              return false;
            },
          });
          window.addEventListener("testPassive", null as unknown as EventListener, opts);
          window.removeEventListener("testPassive", null as unknown as EventListener, opts);
        } catch {
          // ignore
        }
        return supportsPassive;
      },
    };
    
    return features[feature as keyof typeof features]?.() || false;
  },
  
  // Get browser-specific optimizations
  getOptimizations: () => {
    const browser = browserUtils.getBrowserInfo();
    const optimizations = {
      Chrome: {
        webgl: true,
        webgl2: true,
        webp: true,
        avif: true,
        intersectionObserver: true,
        performanceObserver: true,
        requestIdleCallback: true,
        passiveEvents: true,
      },
      Firefox: {
        webgl: true,
        webgl2: true,
        webp: true,
        avif: true,
        intersectionObserver: true,
        performanceObserver: true,
        requestIdleCallback: false,
        passiveEvents: true,
      },
      Safari: {
        webgl: true,
        webgl2: true,
        webp: true,
        avif: true,
        intersectionObserver: true,
        performanceObserver: true,
        requestIdleCallback: false,
        passiveEvents: true,
      },
      Edge: {
        webgl: true,
        webgl2: true,
        webp: true,
        avif: true,
        intersectionObserver: true,
        performanceObserver: true,
        requestIdleCallback: true,
        passiveEvents: true,
      },
      Opera: {
        webgl: true,
        webgl2: true,
        webp: true,
        avif: true,
        intersectionObserver: true,
        performanceObserver: true,
        requestIdleCallback: true,
        passiveEvents: true,
      },
      "Internet Explorer": {
        webgl: false,
        webgl2: false,
        webp: false,
        avif: false,
        intersectionObserver: false,
        performanceObserver: false,
        requestIdleCallback: false,
        passiveEvents: false,
      },
    };
    
    return optimizations[browser.name as keyof typeof optimizations] || optimizations.Chrome;
  },
};

export function BrowserOptimizer() {
  useEffect(() => {
    // Universal browser optimizations
    if (typeof window !== "undefined") {
      const browser = browserUtils.getBrowserInfo();
      const optimizations = browserUtils.getOptimizations();
      
      console.log(`Browser detected: ${browser.name} ${browser.version}`);
      console.log("Applied optimizations:", optimizations);
      
      // Universal performance optimizations
      document.documentElement.style.scrollBehavior = "smooth";
      document.documentElement.style.textRendering = "optimizeLegibility";
      
      // Browser-specific font rendering
      if (browser.name === "Chrome" || browser.name === "Edge") {
        document.documentElement.style.webkitFontSmoothing = "antialiased";
      } else if (browser.name === "Firefox") {
        document.documentElement.style.mozOsxFontSmoothing = "grayscale";
      }
      
      // Optimize image loading for all browsers
      const images = document.querySelectorAll("img");
      images.forEach((img) => {
        img.loading = "lazy";
        img.decoding = "async";
        
        // Browser-specific optimizations
        if (optimizations.webp && !img.src.includes("webp")) {
          // Could implement WebP fallback here
        }
      });
      
      // Optimize animations based on browser capabilities
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReducedMotion) {
        document.documentElement.style.setProperty("--animation-duration", "0.01ms");
      }
      
      // Browser-specific memory management
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
  }, []);

  return null;
}

// Universal browser utility functions
export const browserOptimizer = {
  // Check if running in specific browser
  isBrowser: (browserName: string) => {
    const browser = browserUtils.getBrowserInfo();
    return browser.name.toLowerCase() === browserName.toLowerCase();
  },
  
  // Get current browser info
  getBrowserInfo: browserUtils.getBrowserInfo,
  
  // Check feature support
  supportsFeature: browserUtils.supportsFeature,
  
  // Get browser-specific optimizations
  getOptimizations: browserUtils.getOptimizations,
  
  // Optimize images for current browser
  optimizeImages: () => {
    if (typeof window === "undefined") return;
    
    const images = document.querySelectorAll("img");
    const optimizations = browserUtils.getOptimizations();
    
    images.forEach((img) => {
      img.loading = "lazy";
      img.decoding = "async";
      
      if (optimizations.requestIdleCallback) {
        img.fetchPriority = "auto";
      }
    });
  },
  
  // Optimize fonts for current browser
  optimizeFonts: () => {
    if (typeof window === "undefined") return;
    
    const browser = browserUtils.getBrowserInfo();
    
    document.documentElement.style.textRendering = "optimizeLegibility";
    
    if (browser.name === "Chrome" || browser.name === "Edge") {
      document.documentElement.style.webkitFontSmoothing = "antialiased";
    } else if (browser.name === "Firefox") {
      document.documentElement.style.mozOsxFontSmoothing = "grayscale";
    }
  },
  
  // Force repaint for current browser
  forceRepaint: () => {
    if (typeof window === "undefined") return;
    
    document.body.style.display = "none";
    void document.body.offsetHeight; // Trigger reflow
    document.body.style.display = "";
  },
  
  // Universal error reporting
  reportError: (error: Error, context?: string) => {
    const browser = browserUtils.getBrowserInfo();
    console.error(`Browser Error (${browser.name})${context ? ` in ${context}` : ""}:`, error);
    
    // Browser-specific error reporting
    if (browser.name === "Chrome" && window.chrome && window.chrome.runtime) {
      // Chrome extension context
      window.chrome.runtime.lastError = error;
    }
    
    // Could add other browser-specific error reporting here
  }
};

// Declare global types for browser-specific features
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
    mozOsxFontSmoothing?: string;
  }
}
