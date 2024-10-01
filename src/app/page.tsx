import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import { HeroSection } from "@/components/ecosystems/HeroSection";
import { SectionGestaoPatrimonial } from "@/components/ecosystems/SectionGestaoPatrimonial";
import { SectionProfessionals } from "@/components/ecosystems/SectionProfessionals";
import { SectionPhrase } from "@/components/ecosystems/SectionPhrase";
import { SectionSolutions } from "@/components/ecosystems/SectionSolutions";
import { SectionServices } from "@/components/ecosystems/SectionServices";
import { Header } from "@/components/ecosystems/Header";
import { SectionWhoWeAre } from "@/components/ecosystems/SectionWhoWeAre";
import { Section3 } from "@/components/ecosystems/Section3";
import { Footer } from "@/components/ecosystems/Footer";
import { Section9 } from "@/components/ecosystems/Section9";
import { SectionContact } from "@/components/ecosystems/SectionContact";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <SectionWhoWeAre />
        <Section3 />
        <SectionServices />
        <SectionSolutions />
        <SectionGestaoPatrimonial />
        <SectionProfessionals />
        <SectionPhrase />
        <Section9 />
        <SectionContact />
      </main>
      <Footer />
    </>
  );
}
