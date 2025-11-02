import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing Plans - Affordable Fleet Management & Logistics Solutions | KLG",
  description: "Flexible subscription-based pricing with clear upsell paths and data-driven insights. Transparent pricing for fleet management, GPS tracking, and telematics services.",
  keywords: [
    "fleet management pricing",
    "GPS tracking pricing",
    "telematics pricing",
    "logistics platform pricing",
    "fleet management cost",
    "subscription pricing",
    "KLG pricing"
  ],
  openGraph: {
    title: "Pricing Plans - Affordable Fleet Management & Logistics Solutions | KLG",
    description: "Flexible subscription-based pricing with clear upsell paths and data-driven insights.",
    url: "https://kyetologistics.com/pricing",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://kyetologistics.com/pricing",
  },
};

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gray-900 pt-16">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Pricing Plans
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Flexible subscription-based pricing with clear upsell paths and data-driven insights.
          </p>
        </div>
        {/* Pricing cards will be added here */}
      </div>
    </div>
  );
}
