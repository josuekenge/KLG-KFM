export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: string;
  href: string;
}

export interface PricingTier {
  id: string;
  name: string;
  description: string;
  price: number;
  period: string;
  features: string[];
  popular?: boolean;
  cta: string;
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  role: string;
  content: string;
  avatar?: string;
  rating: number;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface Stat {
  id: string;
  value: string;
  label: string;
  description?: string;
}

export interface DashboardMetric {
  id: string;
  title: string;
  value: string;
  change: number;
  changeType: "increase" | "decrease";
  chartData: Array<{
    date: string;
    value: number;
  }>;
}

export interface Theme {
  mode: "light" | "dark";
  primary: string;
  secondary: string;
  accent: string;
}

export interface PixelTrailConfig {
  particleCount: number;
  particleSize: number;
  trailLength: number;
  speed: number;
  color: string;
  opacity: number;
  disabled?: boolean;
}
