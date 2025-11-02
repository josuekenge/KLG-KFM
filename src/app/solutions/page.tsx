import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fleet Management Solutions - Logistics & Telematics Services | KLG",
  description: "Comprehensive end-to-end fleet management solutions for commercial, industrial, and governmental sectors. Container tracking, customs clearance, and port-to-city visibility.",
  keywords: [
    "fleet management solutions",
    "logistics services Africa",
    "container tracking solutions",
    "customs clearance solutions",
    "telematics solutions",
    "government fleet management",
    "commercial fleet solutions",
    "industrial fleet management"
  ],
  openGraph: {
    title: "Fleet Management Solutions - Logistics & Telematics Services | KLG",
    description: "Comprehensive end-to-end fleet management solutions for commercial, industrial, and governmental sectors.",
    url: "https://kyetologistics.com/solutions",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://kyetologistics.com/solutions",
  },
};

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-gray-900 pt-16">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Fleet Management Solutions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive end-to-end solutions for commercial, industrial, and governmental sectors.
          </p>
        </div>
        {/* Solutions content will be added here */}
      </div>
    </div>
  );
}
