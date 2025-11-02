import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "KLG Platform - API-Integrated Logistics & Fleet Management",
  description: "Integrated dashboards for customs brokers, importers, truckers, and government agencies. API partnerships with PowerTrack, Tramigo, Frotcom for instant truck onboarding.",
  keywords: [
    "logistics platform",
    "fleet management dashboard",
    "customs broker platform",
    "telematics API integration",
    "container tracking platform",
    "declaration company software",
    "truck management system",
    "KLG platform"
  ],
  openGraph: {
    title: "KLG Platform - API-Integrated Logistics & Fleet Management",
    description: "Integrated dashboards for customs brokers, importers, truckers, and government agencies.",
    url: "https://kyetologistics.com/platform",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://kyetologistics.com/platform",
  },
};

export default function PlatformPage() {
  return (
    <div className="min-h-screen bg-gray-900 pt-16">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Fleet Management Platform
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Integrated dashboards for brokers, importers, drivers, and government agencies.
          </p>
        </div>
        {/* Dashboard preview will be added here */}
      </div>
    </div>
  );
}
