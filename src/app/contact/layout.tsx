import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Kyeto Logistics | Talk to Our Fleet Management Team",
  description: "Get in touch with Kyeto Logistics for partnerships, support, or fleet tracking solutions.",
  keywords: [
    "contact Kyeto Logistics",
    "fleet management contact",
    "GPS tracking support",
    "logistics partnership",
    "Kyeto support team"
  ],
  openGraph: {
    title: "Contact Kyeto Logistics | Talk to Our Fleet Management Team",
    description: "Get in touch with Kyeto Logistics for partnerships, support, or fleet tracking solutions.",
    url: "https://kyetologistics.com/contact",
    siteName: "Kyeto Logistics",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://kyetologistics.com/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

