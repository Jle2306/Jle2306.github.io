import { AudienceSection } from "@/components/sections/AudienceSection";
import { CommonScenariosSection } from "@/components/sections/CommonScenariosSection";
import { ContactCtaSection } from "@/components/sections/ContactCtaSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { FeaturedProjectsSection } from "@/components/sections/FeaturedProjectsSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { NeedPathsSection } from "@/components/sections/NeedPathsSection";
import { PricingPreviewSection } from "@/components/sections/PricingPreviewSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ServicePathsSection } from "@/components/sections/ServicePathsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { StudentSupportSection } from "@/components/sections/StudentSupportSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicePathsSection />
      <CommonScenariosSection />
      <StudentSupportSection />
      <NeedPathsSection />
      <AudienceSection />
      <ServicesSection />
      <FeaturedProjectsSection />
      <ProcessSection />
      <PricingPreviewSection />
      <FaqSection />
      <ContactCtaSection />
    </>
  );
}
