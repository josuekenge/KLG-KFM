import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers - Join Our Team | KLG Logistics",
  description: "Join Kyeto Logistics Group and help build the future of logistics in Africa. Open positions in engineering, operations, analytics, and customer success.",
  keywords: [
    "KLG careers",
    "logistics jobs Africa",
    "fleet management jobs",
    "telematics jobs",
    "software engineer jobs DRC",
    "operations manager jobs",
    "data analyst jobs",
    "Kinshasa jobs",
    "tech jobs Africa"
  ],
  openGraph: {
    title: "Careers - Join Our Team | KLG Logistics",
    description: "Join Kyeto Logistics Group and help build the future of logistics in Africa.",
    url: "https://kyetologistics.com/careers",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://kyetologistics.com/careers",
  },
};

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

