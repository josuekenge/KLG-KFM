import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Disable built-in Image Optimization as we are using raw HTML/CDN setup
  images: {
    unoptimized: true,
  },
  // Ensure no redirects interfere with Netlify
  async redirects() {
    return [];
  },
};

export default nextConfig;
