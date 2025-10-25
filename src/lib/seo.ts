import { Metadata } from "next";

export const siteConfig = {
  name: "Kyeto Fleet Management",
  shortName: "KFM",
  description: "Fleet management solutions built for frontier markets with rugged hardware, GPS tracking, fuel monitoring, and AI-powered insights across 12 African countries.",
  url: "https://kyetofleet.com",
  ogImage: "https://kyetofleet.com/og-image.jpg",
  keywords: [
    "fleet management Africa",
    "GPS tracking DRC",
    "telematics Africa",
    "fuel monitoring system",
    "driver safety analytics",
    "AI fleet cameras",
    "satellite tracking Africa",
    "fleet management Congo",
    "logistics technology",
    "vehicle tracking system",
    "fleet optimization",
    "KFM",
    "Kyeto Fleet Management",
    "frontier markets logistics"
  ],
  authors: [
    {
      name: "Kyeto Logistics Group",
      url: "https://kyetofleet.com"
    }
  ],
  creator: "Kyeto Logistics Group",
  publisher: "Kyeto Logistics Group",
  contact: {
    email: "sales@kyetologistics.com",
    phone: "WhatsApp: +243 899 905 483 & +243 904 570 799",
    address: "Kinshasa, Democratic Republic of Congo"
  }
};

export function constructMetadata({
  title = siteConfig.name,
  description = siteConfig.description,
  image = siteConfig.ogImage,
  canonical,
  noIndex = false,
  keywords,
}: {
  title?: string;
  description?: string;
  image?: string;
  canonical?: string;
  noIndex?: boolean;
  keywords?: string[];
} = {}): Metadata {
  return {
    title: {
      default: title,
      template: `%s | ${siteConfig.shortName}`
    },
    description,
    keywords: keywords || siteConfig.keywords,
    authors: siteConfig.authors,
    creator: siteConfig.creator,
    publisher: siteConfig.publisher,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: canonical || siteConfig.url,
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: canonical || siteConfig.url,
      title,
      description,
      siteName: siteConfig.name,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@kyetofleet",
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    verification: {
      // Add your verification tokens here when ready
      google: "google-site-verification-token",
      // yandex: "yandex-verification-token",
      // bing: "bing-verification-token",
    },
  };
}

// Structured Data for Organization
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Kyeto Fleet Management",
  alternateName: "KFM",
  url: siteConfig.url,
  logo: `${siteConfig.url}/logo.png`,
  description: siteConfig.description,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kinshasa",
    addressCountry: "CD",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    contactType: "Sales",
    areaServed: ["CD", "ZM", "AO", "TZ", "KE", "UG", "RW", "BI"],
  },
  sameAs: [
    // Add social media links when available
    "https://linkedin.com/company/kyeto-logistics",
    "https://twitter.com/kyetofleet",
  ],
};

// Structured Data for Software/Product
export const productSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Kyeto Fleet Management Platform",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web, iOS, Android",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    ratingCount: "127",
  },
  description: "GPS tracking, fuel monitoring, and fleet management for frontier markets",
  screenshot: `${siteConfig.url}/screenshots/dashboard.jpg`,
  featureList: [
    "Real-time GPS tracking",
    "Fuel consumption monitoring",
    "Driver safety analytics",
    "AI-powered dashcam",
    "Predictive maintenance",
    "Route optimization",
    "Hybrid cellular/satellite connectivity",
  ],
};

// Local Business Schema for SEO
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Kyeto Fleet Management",
  image: `${siteConfig.url}/logo.png`,
  "@id": siteConfig.url,
  url: siteConfig.url,
  telephone: siteConfig.contact.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Kinshasa",
    addressLocality: "Kinshasa",
    addressCountry: "CD",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -4.3276,
    longitude: 15.3136,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:00",
    closes: "18:00",
  },
  sameAs: [
    "https://linkedin.com/company/kyeto-logistics",
    "https://twitter.com/kyetofleet",
  ],
};




