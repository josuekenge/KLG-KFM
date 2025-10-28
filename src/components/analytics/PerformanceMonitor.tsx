"use client";

import { useEffect, useState } from "react";
import { browserOptimizer } from "@/components/providers/BrowserOptimizer";

interface PerformanceMetrics {
  fcp?: number; // First Contentful Paint
  lcp?: number; // Largest Contentful Paint
  fid?: number; // First Input Delay
  cls?: number; // Cumulative Layout Shift
  ttfb?: number; // Time to First Byte
}

export function PerformanceMonitor() {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({});
  const [browserInfo, setBrowserInfo] = useState({ name: "unknown", version: "unknown" });

  useEffect(() => {
    // Get browser info and check if performance monitoring is enabled
    const browser = browserOptimizer.getBrowserInfo();
    const monitoringEnabled = process.env.NEXT_PUBLIC_PERFORMANCE_MONITORING === "true";
    const optimizations = browserOptimizer.getOptimizations();
    
    setBrowserInfo(browser);
    
    // Only enable monitoring if browser supports it and it's enabled
    if (!optimizations.performanceObserver || !monitoringEnabled) {
      console.log(`Performance monitoring disabled for ${browser.name} (not supported or disabled)`);
      return;
    }

    // Wait for page load
    const measurePerformance = () => {
      if (typeof window === "undefined" || !window.performance) return;

      try {
        // Get Core Web Vitals
        const navigation = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming;
        const paintEntries = performance.getEntriesByType("paint");
        
        const fcp = paintEntries.find(entry => entry.name === "first-contentful-paint")?.startTime;
        const lcp = performance.getEntriesByType("largest-contentful-paint")[0]?.startTime;
        
        const newMetrics: PerformanceMetrics = {
          fcp: fcp ? Math.round(fcp) : undefined,
          lcp: lcp ? Math.round(lcp) : undefined,
          ttfb: navigation ? Math.round(navigation.responseStart - navigation.requestStart) : undefined,
        };

        setMetrics(newMetrics);

        // Log performance metrics for current browser
        console.log(`${browser.name} Performance Metrics:`, newMetrics);
        
        // Report to analytics if available
        if (window.gtag) {
          window.gtag("event", "performance_metrics", {
            event_category: "performance",
            event_label: `${browser.name.toLowerCase()}_metrics`,
            custom_map: {
              fcp: newMetrics.fcp,
              lcp: newMetrics.lcp,
              ttfb: newMetrics.ttfb,
              browser: browser.name,
            },
          });
        }

        // Report slow performance with browser-specific thresholds
        const thresholds = getBrowserThresholds(browser.name);
        
        if (newMetrics.fcp && newMetrics.fcp > thresholds.fcp) {
          console.warn(`Slow First Contentful Paint detected for ${browser.name}:`, newMetrics.fcp);
        }
        
        if (newMetrics.lcp && newMetrics.lcp > thresholds.lcp) {
          console.warn(`Slow Largest Contentful Paint detected for ${browser.name}:`, newMetrics.lcp);
        }

      } catch (error) {
        console.error(`Error measuring performance for ${browser.name}:`, error);
      }
    };

    // Measure after page load
    if (document.readyState === "complete") {
      measurePerformance();
    } else {
      window.addEventListener("load", measurePerformance);
    }

    // Monitor for performance issues with browser-specific support
    let observer: PerformanceObserver | null = null;
    
    try {
      observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === "largest-contentful-paint") {
            const lcp = Math.round(entry.startTime);
            setMetrics(prev => ({ ...prev, lcp }));
            
            const thresholds = getBrowserThresholds(browser.name);
            if (lcp > thresholds.lcp) {
              console.warn(`LCP exceeded threshold for ${browser.name}:`, lcp);
            }
          }
        }
      });

      observer.observe({ entryTypes: ["largest-contentful-paint"] });
    } catch (error) {
      console.warn(`Performance Observer not supported in ${browser.name}:`, error);
    }

    return () => {
      window.removeEventListener("load", measurePerformance);
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  // Show performance metrics in development for any browser
  if (process.env.NODE_ENV === "development" && Object.keys(metrics).length > 0) {
    return (
      <div className="fixed bottom-4 right-4 bg-black text-white p-3 rounded-lg text-xs font-mono z-50">
        <div className="font-bold mb-1">{browserInfo.name} Performance</div>
        {metrics.fcp && <div>FCP: {metrics.fcp}ms</div>}
        {metrics.lcp && <div>LCP: {metrics.lcp}ms</div>}
        {metrics.ttfb && <div>TTFB: {metrics.ttfb}ms</div>}
      </div>
    );
  }

  return null;
}

// Browser-specific performance thresholds
function getBrowserThresholds(browserName: string) {
  const thresholds = {
    Chrome: { fcp: 2500, lcp: 4000, ttfb: 800 },
    Firefox: { fcp: 3000, lcp: 4500, ttfb: 1000 },
    Safari: { fcp: 3000, lcp: 4500, ttfb: 1000 },
    Edge: { fcp: 2500, lcp: 4000, ttfb: 800 },
    Opera: { fcp: 2500, lcp: 4000, ttfb: 800 },
    "Internet Explorer": { fcp: 5000, lcp: 6000, ttfb: 2000 },
  };
  
  return thresholds[browserName as keyof typeof thresholds] || thresholds.Chrome;
}

// Universal performance utilities
export const universalPerformance = {
  // Check if current browser supports performance monitoring
  isSupported: () => {
    return typeof window !== "undefined" && 
           window.performance && 
           window.PerformanceObserver &&
           browserOptimizer.supportsFeature("performanceObserver");
  },

  // Get current performance metrics
  getMetrics: (): PerformanceMetrics => {
    if (typeof window === "undefined" || !window.performance) return {};

    try {
      const navigation = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming;
      const paintEntries = performance.getEntriesByType("paint");
      
      return {
        fcp: paintEntries.find(entry => entry.name === "first-contentful-paint")?.startTime,
        lcp: performance.getEntriesByType("largest-contentful-paint")[0]?.startTime,
        ttfb: navigation ? navigation.responseStart - navigation.requestStart : undefined,
      };
    } catch (error) {
      console.error("Error getting performance metrics:", error);
      return {};
    }
  },

  // Report performance issue with browser context
  reportIssue: (metric: string, value: number, threshold: number) => {
    const browser = browserOptimizer.getBrowserInfo();
    console.warn(`Performance issue in ${browser.name}: ${metric} = ${value}ms (threshold: ${threshold}ms)`);
    
    if (window.gtag) {
      window.gtag("event", "performance_issue", {
        event_category: "performance",
        event_label: metric,
        value: value,
        custom_map: {
          threshold: threshold,
          browser: browser.name,
        },
      });
    }
  },

  // Get browser-specific performance thresholds
  getThresholds: (browserName?: string) => {
    const browser = browserName || browserOptimizer.getBrowserInfo().name;
    return getBrowserThresholds(browser);
  }
};
