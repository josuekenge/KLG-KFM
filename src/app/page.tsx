import { ModernHero } from "@/components/sections/ModernHero";
import dynamic from "next/dynamic";

// Lazy load sections below the fold for faster initial load
const FeaturesSection = dynamic(() => import("@/components/sections/FeaturesSection").then(mod => ({ default: mod.FeaturesSection })), {
  loading: () => <div className="h-screen" />
});

const ProductShowcase = dynamic(() => import("@/components/sections/ProductShowcase").then(mod => ({ default: mod.ProductShowcase })), {
  loading: () => <div className="h-screen" />
});

const AboutSection = dynamic(() => import("@/components/sections/AboutSection").then(mod => ({ default: mod.AboutSection })), {
  loading: () => <div className="h-screen" />
});

const BenefitsSection = dynamic(() => import("@/components/sections/BenefitsSection").then(mod => ({ default: mod.BenefitsSection })), {
  loading: () => <div className="h-screen" />
});

const TestimonialsSection = dynamic(() => import("@/components/sections/TestimonialsSection").then(mod => ({ default: mod.TestimonialsSection })), {
  loading: () => <div className="h-screen" />
});

const ProcessSection = dynamic(() => import("@/components/sections/ProcessSection").then(mod => ({ default: mod.ProcessSection })), {
  loading: () => <div className="h-screen" />
});

const FAQSection = dynamic(() => import("@/components/sections/FAQSection").then(mod => ({ default: mod.FAQSection })), {
  loading: () => <div className="h-screen" />
});

const ContactSection = dynamic(() => import("@/components/sections/ContactSection").then(mod => ({ default: mod.ContactSection })), {
  loading: () => <div className="h-screen" />
});

export default function HomePage() {
  return (
    <>
      <ModernHero />
      <FeaturesSection />
      <ProductShowcase />
      <AboutSection />
      <BenefitsSection />
      <TestimonialsSection />
      <ProcessSection />
      <FAQSection />
      <ContactSection />
    </>
  );
}
