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
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-white overflow-hidden border-b border-gray-200">
        <div 
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `
              repeating-linear-gradient(45deg, transparent, transparent 30px, black 30px, black 31px),
              repeating-linear-gradient(-45deg, transparent, transparent 30px, black 30px, black 31px)
            `,
          }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 bg-gray-100 border border-gray-200 rounded-full text-gray-900 text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="relative inline-flex rounded-full h-2 w-2 bg-black"></span>
              </span>
              Platform Overview
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
              Fleet Management <span className="text-black">Platform</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Integrated dashboards for customs brokers, importers, truckers, and government agencies. 
              Real-time visibility across the entire logistics chain.
            </p>
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Platform Capabilities
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {/* API Integration */}
              <div className="bg-white p-8 rounded-xl border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  API-First Architecture
                </h3>
                <p className="text-gray-600 mb-4">
                  Connect seamlessly with existing telematics providers through our robust API integration. 
                  Partner with PowerTrack, Tramigo, Frotcom, and other leading GPS tracking systems to 
                  onboard 1,300+ container trucks instantly without purchasing new hardware.
                </p>
                <p className="text-gray-600">
                  Our platform aggregates data from multiple sources, providing a unified view of your 
                  entire fleet regardless of which tracking devices are installed.
                </p>
              </div>

              {/* Declaration Company Dashboard */}
              <div className="bg-white p-8 rounded-xl border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Customs Broker Dashboard
                </h3>
                <p className="text-gray-600 mb-4">
                  Designed specifically for declaration companies managing container shipments. Track 
                  cargo from port to destination with real-time GPS updates, customs clearance status, 
                  and estimated arrival times.
                </p>
                <p className="text-gray-600">
                  Manage multiple importers, coordinate with trucking companies, and provide clients 
                  with transparent shipment visibility throughout the Matadi-Kinshasa corridor.
                </p>
              </div>

              {/* Trucker Portal */}
              <div className="bg-white p-8 rounded-xl border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Trucker Mobile App
                </h3>
                <p className="text-gray-600 mb-4">
                  Drivers receive job assignments, route guidance, and real-time communication through 
                  our mobile application. Digital proof of delivery, cargo photos, and checkpoint 
                  verification ensure accountability at every stage.
                </p>
                <p className="text-gray-600">
                  Offline mode allows drivers to continue working in areas with poor connectivity, 
                  syncing data automatically when back online.
                </p>
              </div>

              {/* Government Dashboard */}
              <div className="bg-white p-8 rounded-xl border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Government Visibility Portal
                </h3>
                <p className="text-gray-600 mb-4">
                  Provide regulatory oversight with real-time container tracking, border crossing 
                  notifications, and compliance monitoring. Government agencies gain transparency 
                  into freight movements without deploying their own tracking infrastructure.
                </p>
                <p className="text-gray-600">
                  Automated alerts for route deviations, unauthorized stops, and customs zone entries 
                  help prevent smuggling and ensure regulatory compliance.
                </p>
              </div>
            </div>

            {/* Key Benefits */}
            <div className="bg-white p-8 rounded-xl border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Platform Benefits
              </h3>
              <ul className="grid md:grid-cols-2 gap-4">
                <li className="flex items-start gap-3">
                  <span className="text-black font-bold">•</span>
                  <span className="text-gray-600">
                    <strong>20ft & 40ft container tracking</strong> - Specialized for freight logistics
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black font-bold">•</span>
                  <span className="text-gray-600">
                    <strong>Instant truck onboarding</strong> - No hardware purchase required
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black font-bold">•</span>
                  <span className="text-gray-600">
                    <strong>Multi-stakeholder visibility</strong> - Importers, brokers, truckers, government
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black font-bold">•</span>
                  <span className="text-gray-600">
                    <strong>Port-to-destination tracking</strong> - Complete supply chain visibility
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black font-bold">•</span>
                  <span className="text-gray-600">
                    <strong>Government backing</strong> - Trusted infrastructure for regulatory compliance
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black font-bold">•</span>
                  <span className="text-gray-600">
                    <strong>Matadi-Kinshasa focus</strong> - Optimized for DRC&apos;s primary trade route
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Logistics Operations?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join declaration companies and trucking firms already using Kyeto Logistics 
            Group to track containers across Africa.
          </p>
          <a 
            href="#contact"
            className="inline-block px-8 py-4 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors"
          >
            Request Platform Demo
          </a>
        </div>
      </section>
    </div>
  );
}
