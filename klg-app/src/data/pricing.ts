import { PricingTier } from "@/types";

export const pricingTiers: PricingTier[] = [
  {
    id: "gps-only",
    name: "GPS Only",
    description: "Essential GPS tracking for basic fleet management needs",
    price: 29,
    period: "per vehicle/month",
    features: [
      "Real-time GPS tracking",
      "Basic route monitoring",
      "Geofencing alerts",
      "Trip history (30 days)",
      "Mobile app access",
      "Email support",
    ],
    cta: "Start Free Trial",
  },
  {
    id: "gps-sensors",
    name: "GPS + Sensors",
    description: "Advanced tracking with fuel monitoring and driver behavior analytics",
    price: 59,
    period: "per vehicle/month",
    popular: true,
    features: [
      "Everything in GPS Only",
      "Fuel monitoring & analytics",
      "Driver behavior scoring",
      "Harsh event detection",
      "Maintenance alerts",
      "Advanced reporting",
      "Priority support",
    ],
    cta: "Start Free Trial",
  },
  {
    id: "premium-safety",
    name: "Premium Safety",
    description: "Complete solution with AI cameras and comprehensive safety features",
    price: 99,
    period: "per vehicle/month",
    features: [
      "Everything in GPS + Sensors",
      "AI-powered safety cameras",
      "Live streaming capabilities",
      "In-cabin monitoring",
      "Cargo surveillance",
      "Incident recording",
      "24/7 dedicated support",
    ],
    cta: "Contact Sales",
  },
];

export const addOnModules = [
  {
    name: "Asset Tracking",
    description: "Long-life tracking for trailers and assets",
    price: 15,
    period: "per asset/month",
  },
  {
    name: "Workforce Optimization",
    description: "Advanced task assignment and route planning",
    price: 25,
    period: "per user/month",
  },
  {
    name: "Risk & Compliance",
    description: "Comprehensive risk management and compliance tracking",
    price: 20,
    period: "per vehicle/month",
  },
  {
    name: "Custom Integrations",
    description: "API access and custom system integrations",
    price: "Custom",
    period: "one-time setup",
  },
];
