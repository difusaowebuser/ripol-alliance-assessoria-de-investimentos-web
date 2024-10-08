import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import { HeroSection } from "@/components/ecosystems/HeroSection";
import { SectionProfessionals } from "@/components/ecosystems/SectionProfessionals";
import { SectionPhrase } from "@/components/ecosystems/SectionPhrase";
import { SectionSolutions } from "@/components/ecosystems/SectionSolutions";
import { SectionServices } from "@/components/ecosystems/SectionServices";
import { Header } from "@/components/ecosystems/Header";
import { SectionWhoWeAre } from "@/components/ecosystems/SectionWhoWeAre";
import { Section3 } from "@/components/ecosystems/Section3";
import { Footer } from "@/components/ecosystems/Footer";
import { SectionFaq } from "@/components/ecosystems/SectionFaq";
import { SectionContact } from "@/components/ecosystems/SectionContact";

export default function Home() {
  return (
    <>
      <Header />
      <main className="overflow-x-hidden">
        <HeroSection />
        <SectionWhoWeAre />
        <Section3 />
        <SectionServices />
        <SectionSolutions />
        <SectionProfessionals />
        <SectionPhrase />
        <SectionFaq />
        <SectionContact />
      </main>
      <Footer />
    </>
  );
}
