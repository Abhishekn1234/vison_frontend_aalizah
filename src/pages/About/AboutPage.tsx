

import HeroBanner from "../../components/About/AboutBanner";
import Hero from "../../components/About/AboutHero";
// import AboutUs from "../../components/About/Aboutus";
import Bottom from "../../components/About/Bottom";

// import Services from "../../components/About/Services";
import StatsSection from "../../components/About/StatsSection";
// import VisionMission from "../../components/About/VisionMission";
import WhyChooseUs from "../../components/About/WhyChooseUs";

export default function AboutPage() {
  return (
    <main className="bg-[#f5f5f5] min-h-screen">
        <HeroBanner/>
      <Hero />
      {/* <AboutUs /> */}
      <StatsSection/>
      {/* <Services /> */}
      <WhyChooseUs />
      {/* <VisionMission /> */}
      <Bottom/>
  
    </main>
  );
}