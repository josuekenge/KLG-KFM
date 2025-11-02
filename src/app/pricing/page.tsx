import type { Metadata } from "next";
import { pricingTiers, addOnModules } from "@/data/pricing";
import { Check } from "lucide-react";

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
              Transparent Pricing
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
              Simple, <span className="text-black">Scalable</span> Pricing
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Flexible subscription-based pricing with clear upsell paths and data-driven insights. 
              No hidden fees, cancel anytime.
            </p>
            
            <div className="flex items-center justify-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-600" />
                <span>14-day free trial</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-600" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-600" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {pricingTiers.map((tier) => (
                <div 
                  key={tier.id}
                  className={`bg-white rounded-xl border ${
                    tier.popular 
                      ? 'border-black shadow-xl relative' 
                      : 'border-gray-200'
                  } p-8`}
                >
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-black text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {tier.name}
                  </h3>
                  <p className="text-gray-600 mb-6 text-sm">
                    {tier.description}
                  </p>
                  
                  <div className="mb-6">
                    <span className="text-5xl font-bold text-gray-900">
                      ${tier.price}
                    </span>
                    <span className="text-gray-600 ml-2">
                      /{tier.period}
                    </span>
                  </div>
                  
                  <a
                    href="#contact"
                    className={`block text-center py-3 rounded-lg font-semibold mb-8 transition-colors ${
                      tier.popular
                        ? 'bg-black text-white hover:bg-gray-800'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    {tier.cta}
                  </a>
                  
                  <ul className="space-y-3">
                    {tier.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            
            {/* Add-on Modules */}
            <div className="bg-white rounded-xl border border-gray-200 p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                Optional Add-On Modules
              </h2>
              <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
                Enhance your fleet management with specialized modules designed for specific business needs. 
                Add or remove modules anytime without commitment.
              </p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {addOnModules.map((addon, index) => (
                  <div key={index} className="p-6 bg-gray-50 rounded-lg">
                    <h3 className="font-bold text-gray-900 mb-2">{addon.name}</h3>
                    <p className="text-gray-600 text-sm mb-4">{addon.description}</p>
                    <div className="text-lg font-bold text-gray-900">
                      {typeof addon.price === 'number' ? `$${addon.price}` : addon.price}
                      <span className="text-sm font-normal text-gray-600 ml-1">
                        /{addon.period}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Details */}
      <section className="py-20 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              What&apos;s Included in All Plans
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="flex items-start gap-4">
                <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Hardware Included</h3>
                  <p className="text-gray-600 text-sm">
                    GPS tracking devices shipped directly to your location. Installation support 
                    included with onboarding package.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Mobile & Web Access</h3>
                  <p className="text-gray-600 text-sm">
                    Track your fleet from iOS, Android apps, or web dashboard. Unlimited users 
                    and real-time data syncing.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">API Access</h3>
                  <p className="text-gray-600 text-sm">
                    Connect Kyeto Logistics with your existing systems. Full API documentation 
                    and developer support available.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Regular Updates</h3>
                  <p className="text-gray-600 text-sm">
                    Free software updates, new features, and security patches included. 
                    No additional upgrade fees.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Volume Discounts */}
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise Volume Discounts</h3>
              <p className="text-gray-600 mb-6">
                Managing a large fleet? We offer special pricing for organizations with 50+ vehicles. 
                Volume discounts start at 15% and scale up to 40% for enterprise fleets.
              </p>
              
              <div className="grid grid-cols-3 gap-6 text-center mb-6">
                <div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">50+</div>
                  <div className="text-sm text-gray-600">15% discount</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">200+</div>
                  <div className="text-sm text-gray-600">25% discount</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">500+</div>
                  <div className="text-sm text-gray-600">40% discount</div>
                </div>
              </div>
              
              <a
                href="#contact"
                className="block text-center py-3 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors"
              >
                Request Enterprise Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-2">Do I need to sign a contract?</h3>
                <p className="text-gray-600 text-sm">
                  No long-term contracts required. All plans are month-to-month and you can 
                  cancel anytime without penalties.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-2">What if I need to add more vehicles?</h3>
                <p className="text-gray-600 text-sm">
                  You can add vehicles at any time through your dashboard. New devices ship within 
                  48 hours and billing is prorated for the current month.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-2">Is training included?</h3>
                <p className="text-gray-600 text-sm">
                  Yes! Every plan includes onboarding training for administrators and drivers. 
                  We provide video tutorials, documentation, and live support sessions.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-2">What happens to my data if I cancel?</h3>
                <p className="text-gray-600 text-sm">
                  You can export all your historical data before canceling. We retain data for 
                  90 days after cancellation in case you want to reactivate.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-2">Do you offer custom enterprise plans?</h3>
                <p className="text-gray-600 text-sm">
                  Yes! For fleets over 500 vehicles or organizations with specific requirements, 
                  we create custom enterprise solutions with dedicated support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Start your 14-day free trial today. No credit card required, no commitment.
          </p>
          <a 
            href="#contact"
            className="inline-block px-8 py-4 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors"
          >
            Start Free Trial
          </a>
        </div>
      </section>
    </div>
  );
}
