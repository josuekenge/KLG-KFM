import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Data Protection & Security | KLG",
  description: "Learn how Kyeto Logistics Group collects, uses, and protects your information. Our commitment to data privacy and security in fleet management services.",
  keywords: [
    "privacy policy",
    "data protection",
    "GDPR compliance",
    "data security",
    "privacy practices",
    "KLG privacy",
    "fleet data privacy"
  ],
  openGraph: {
    title: "Privacy Policy - Data Protection & Security | KLG",
    description: "Learn how Kyeto Logistics Group collects, uses, and protects your information.",
    url: "https://kyetologistics.com/privacy",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://kyetologistics.com/privacy",
  },
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

