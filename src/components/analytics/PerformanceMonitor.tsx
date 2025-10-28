"use client";

import { useEffect, useState } from "react";

interface PerformanceMetrics {
  fcp?: number; // First Contentful Paint
  lcp?: number; // Largest Contentful Paint
  fid?: number; // First Input Delay
  cls?: number; // Cumulative Layout Shift
  ttfb?: number; // Time to First Byte
}

export function PerformanceMonitor() {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({});
  const [isChrome, setIsChrome] = useState(false);

  useEffect(() => {
    // Check if Chrome and performance monitoring is enabled
    const chromeDetected = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
    const monitoringEnabled = process.env.NEXT_PUBLIC_PERFORMANCE_MONITORING === "true";
    
    setIsChrome(chromeDetected);
    
    if (!chromeDetected || !monitoringEnabled) return;

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

        // Log performance metrics for Chrome
        console.log("Chrome Performance Metrics:", newMetrics);
        
        // Report to analytics if available
        if (window.gtag) {
          window.gtag("event", "performance_metrics", {
            event_category: "performance",
            event_label: "chrome_metrics",
            custom_map: {
              fcp: newMetrics.fcp,
              lcp: newMetrics.lcp,
              ttfb: newMetrics.ttfb,
            },
          });
        }

        // Report slow performance
        if (newMetrics.fcp && newMetrics.fcp > 2500) {
          console.warn("Slow First Contentful Paint detected:", newMetrics.fcp);
        }
        
        if (newMetrics.lcp && newMetrics.lcp > 4000) {
          console.warn("Slow Largest Contentful Paint detected:", newMetrics.lcp);
        }

      } catch (error) {
        console.error("Error measuring performance:", error);
      }
    };

    // Measure after page load
    if (document.readyState === "complete") {
      measurePerformance();
    } else {
      window.addEventListener("load", measurePerformance);
    }

    // Monitor for performance issues
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === "largest-contentful-paint") {
          const lcp = Math.round(entry.startTime);
          setMetrics(prev => ({ ...prev, lcp }));
          
          if (lcp > 4000) {
            console.warn("LCP exceeded threshold:", lcp);
          }
        }
      }
    });

    try {
      observer.observe({ entryTypes: ["largest-contentful-paint"] });
    } catch (error) {
      console.warn("Performance Observer not supported:", error);
    }

    return () => {
      window.removeEventListener("load", measurePerformance);
      observer.disconnect();
    };
  }, []);

  // Show performance metrics in development
  if (process.env.NODE_ENV === "development" && isChrome && Object.keys(metrics).length > 0) {
    return (
      <div className="fixed bottom-4 right-4 bg-black text-white p-3 rounded-lg text-xs font-mono z-50">
        <div className="font-bold mb-1">Chrome Performance</div>
        {metrics.fcp && <div>FCP: {metrics.fcp}ms</div>}
        {metrics.lcp && <div>LCP: {metrics.lcp}ms</div>}
        {metrics.ttfb && <div>TTFB: {metrics.ttfb}ms</div>}
      </div>
    );
  }

  return null;
}

// Chrome-specific performance utilities
export const chromePerformance = {
  // Check if Chrome supports performance monitoring
  isSupported: () => {
    return typeof window !== "undefined" && 
           window.performance && 
           window.PerformanceObserver &&
           /Chrome/.test(navigator.userAgent);
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

  // Report performance issue
  reportIssue: (metric: string, value: number, threshold: number) => {
    console.warn(`Performance issue: ${metric} = ${value}ms (threshold: ${threshold}ms)`);
    
    if (window.gtag) {
      window.gtag("event", "performance_issue", {
        event_category: "performance",
        event_label: metric,
        value: value,
        custom_map: {
          threshold: threshold,
        },
      });
    }
  }
};
