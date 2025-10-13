/**
 * Performance utilities for optimizing React components and animations
 */

// Reduced motion variants for users with motion preferences
export const getMotionConfig = () => {
  if (typeof window === "undefined") return { reduceMotion: false };
  
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  return {
    reduceMotion: prefersReducedMotion,
  };
};

// Optimized animation variants for Framer Motion
export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4, ease: "easeOut" }, // Reduced from 0.6s
};

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.3, ease: "easeOut" }, // Reduced from 0.6s
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.05, // Reduced from 0.1s
    },
  },
};

// Intersection Observer options for lazy loading
export const observerOptions: IntersectionObserverInit = {
  rootMargin: "50px 0px", // Start loading 50px before entering viewport
  threshold: 0.01, // Trigger as soon as element is slightly visible
};

// Debounce function for scroll events
export function debounce<T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null;
  
  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      timeout = null;
      func(...args);
    };
    
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Throttle function for scroll events
export function throttle<T extends (...args: unknown[]) => unknown>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;
  
  return function executedFunction(...args: Parameters<T>) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

// Preload critical resources
export const preloadResource = (href: string, as: string) => {
  if (typeof document === "undefined") return;
  
  const link = document.createElement("link");
  link.rel = "preload";
  link.href = href;
  link.as = as;
  document.head.appendChild(link);
};

// Prefetch next section for smooth navigation
export const prefetchSection = (sectionId: string) => {
  if (typeof document === "undefined") return;
  
  const section = document.getElementById(sectionId);
  if (section) {
    // Trigger any lazy-loaded content in the section
    const images = section.querySelectorAll("img[loading='lazy']");
    images.forEach((img) => {
      (img as HTMLImageElement).loading = "eager";
    });
  }
};

