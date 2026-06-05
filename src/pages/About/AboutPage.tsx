

import HeroBanner from "../../components/About/AboutBanner";
import Hero from "../../components/About/AboutHero";
import AboutUs from "../../components/About/Aboutus";
import ScrollToTop from "../../components/About/ScrollToTop";
import Services from "../../components/About/Services";
import VisionMission from "../../components/About/VisionMission";
import WhyChooseUs from "../../components/About/WhyChooseUs";

export default function AboutPage() {
  return (
    <main className="bg-[#f5f5f5] min-h-screen">
        <HeroBanner/>
      <Hero />
      <AboutUs />
      <Services />
      <WhyChooseUs />
      <VisionMission />
      <ScrollToTop />
    </main>
  );
}