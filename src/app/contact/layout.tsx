import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Get in Touch with KLG Logistics",
  description: "Contact Kyeto Logistics Group for fleet management and logistics solutions. Reach us via WhatsApp, email, or visit our office in Kinshasa, DRC.",
  keywords: [
    "contact KLG",
    "logistics contact",
    "fleet management contact",
    "KLG phone number",
    "KLG email",
    "Kinshasa office",
    "contact logistics company"
  ],
  openGraph: {
    title: "Contact Us - Get in Touch with KLG Logistics",
    description: "Contact Kyeto Logistics Group for fleet management and logistics solutions.",
    url: "https://kyetologistics.com/contact",
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

