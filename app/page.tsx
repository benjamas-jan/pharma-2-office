import { ContactSection } from "./_components/ContactSection";
import { FAQ } from "./_components/FAQ";
import { Footer } from "./_components/Footer";
import { Hero } from "./_components/Hero";
import { LegalMoat } from "./_components/LegalMoat";
import { Nav } from "./_components/Nav";
import { Problems } from "./_components/Problems";
import { Process } from "./_components/Process";
import { ProofBar } from "./_components/ProofBar";
import { ServiceInclusions } from "./_components/ServiceInclusions";
import { WhyUs } from "./_components/WhyUs";

export default function HomePage() {
  return (
    <>
      <Nav />
      <Hero />
      <ProofBar />
      <Problems />
      <LegalMoat />
      <ServiceInclusions />
      <Process />
      <WhyUs />
      <FAQ />
      <ContactSection />
      <Footer />
    </>
  );
}
