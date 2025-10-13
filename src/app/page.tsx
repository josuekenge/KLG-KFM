import { ModernHero } from "@/components/sections/ModernHero";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { ProductShowcase } from "@/components/sections/ProductShowcase";
import { AboutSection } from "@/components/sections/AboutSection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { ContactSection } from "@/components/sections/ContactSection";

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