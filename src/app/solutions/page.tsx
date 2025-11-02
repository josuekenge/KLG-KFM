import type { Metadata } from "next";
import Link from "next/link";

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
              Our Solutions
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
              Fleet Management <span className="text-black">Solutions</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Comprehensive end-to-end fleet management solutions for commercial, industrial, and 
              governmental sectors across Africa.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            
            {/* Container Logistics Solution */}
            <div className="mb-16 bg-white p-8 rounded-xl border border-gray-200">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Container Logistics & Customs Clearance
              </h2>
              <p className="text-gray-600 mb-6 text-lg">
                Our flagship solution designed for the Matadi-Kinshasa trade corridor, connecting 
                declaration companies, importers, trucking companies, and government agencies.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">For Declaration Companies</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Real-time container tracking from port to destination</li>
                    <li>• Automated customs clearance status updates</li>
                    <li>• Multi-client dashboard management</li>
                    <li>• Document digitization and sharing</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">For Importers</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Live shipment visibility and ETA updates</li>
                    <li>• Proof of delivery with photos and timestamps</li>
                    <li>• Demurrage cost prevention through alerts</li>
                    <li>• Multi-shipment tracking and analytics</li>
                  </ul>
                </div>
              </div>
              
              <p className="text-gray-600">
                <strong>Key Features:</strong> 20ft & 40ft container tracking, customs zone monitoring, 
                route deviation alerts, checkpoint verification, and government compliance reporting.
              </p>
            </div>

            {/* Commercial Fleet Solution */}
            <div className="mb-16 bg-white p-8 rounded-xl border border-gray-200">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Commercial Fleet Management
              </h2>
              <p className="text-gray-600 mb-6 text-lg">
                Complete fleet management solution for logistics companies, delivery services, and 
                transportation providers operating across Africa.
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-black rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-bold text-gray-900">GPS Tracking & Route Optimization</h3>
                    <p className="text-gray-600">
                      Real-time vehicle location tracking with intelligent route planning to reduce 
                      fuel costs by up to 30% and improve delivery times.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-black rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-bold text-gray-900">Driver Behavior Analytics</h3>
                    <p className="text-gray-600">
                      Monitor speeding, harsh braking, idling, and unauthorized stops. Improve driver 
                      safety and reduce vehicle wear through data-driven coaching.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-black rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-bold text-gray-900">Fuel Management</h3>
                    <p className="text-gray-600">
                      Track fuel consumption, detect fuel theft, and optimize refueling schedules. 
                      Integration with fuel stations for automated expense tracking.
                    </p>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-600">
                <strong>Ideal For:</strong> Delivery companies, courier services, taxi fleets, logistics 
                providers, and any business with 10+ vehicles.
              </p>
            </div>

            {/* Government & Municipal Solution */}
            <div className="mb-16 bg-white p-8 rounded-xl border border-gray-200">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Government & Municipal Fleet Solution
              </h2>
              <p className="text-gray-600 mb-6 text-lg">
                Specialized solution for government agencies, municipalities, and public sector 
                organizations managing official vehicle fleets.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Transparency & Accountability</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Complete vehicle usage logs and audit trails</li>
                    <li>• Unauthorized movement alerts</li>
                    <li>• After-hours usage monitoring</li>
                    <li>• Public service route verification</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Asset Management</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Maintenance scheduling and tracking</li>
                    <li>• Vehicle lifecycle management</li>
                    <li>• Budget optimization analytics</li>
                    <li>• Cross-departmental fleet sharing</li>
                  </ul>
                </div>
              </div>
              
              <p className="text-gray-600">
                <strong>Compliance Features:</strong> Regulatory reporting, geofence enforcement for 
                restricted zones, emergency vehicle priority tracking, and public transparency dashboards.
              </p>
            </div>

            {/* Industrial & Mining Solution */}
            <div className="bg-white p-8 rounded-xl border border-gray-200">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Industrial & Mining Operations
              </h2>
              <p className="text-gray-600 mb-6 text-lg">
                Heavy-duty fleet management for mining companies, construction firms, and industrial 
                operations with specialized equipment needs.
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-black rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-bold text-gray-900">Heavy Equipment Tracking</h3>
                    <p className="text-gray-600">
                      Track excavators, dump trucks, loaders, and other heavy machinery. Monitor 
                      engine hours, fuel consumption, and equipment utilization rates.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-black rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-bold text-gray-900">Site Safety & Geofencing</h3>
                    <p className="text-gray-600">
                      Define restricted zones, monitor safety protocol compliance, and receive alerts 
                      for unauthorized area access. Critical for mining safety regulations.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-black rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-bold text-gray-900">Predictive Maintenance</h3>
                    <p className="text-gray-600">
                      AI-powered analytics predict equipment failures before they occur, reducing 
                      downtime by up to 40% and extending asset lifespan.
                    </p>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-600">
                <strong>Industry Applications:</strong> Mining operations, construction sites, 
                agriculture, forestry, and any business with heavy equipment fleets.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Technology That Works in Africa
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              All our solutions are built to handle Africa&apos;s unique challenges: poor road infrastructure, 
              limited connectivity, harsh weather conditions, and diverse regulatory environments.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-2">Offline Mode</h3>
                <p className="text-gray-600 text-sm">
                  Continue tracking even in areas with no cellular coverage. Data syncs automatically 
                  when connectivity returns.
                </p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-2">Multi-Language</h3>
                <p className="text-gray-600 text-sm">
                  Available in English, French, and Swahili with more languages coming soon for 
                  pan-African operations.
                </p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-2">Local Support</h3>
                <p className="text-gray-600 text-sm">
                  On-ground technical support in Kinshasa, Nairobi, Lagos, and other major African cities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Find the Right Solution for Your Business
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let our team help you choose the perfect fleet management solution for your specific needs.
          </p>
          <Link 
            href="/#contact"
            className="inline-block px-8 py-4 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
