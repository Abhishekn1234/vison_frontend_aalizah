import { Helmet } from "react-helmet-async";

import HeroBanner from "../../components/About/AboutBanner";
import Hero from "../../components/About/AboutHero";
import Bottom from "../../components/About/Bottom";
import StatsSection from "../../components/About/StatsSection";
import WhyChooseUs from "../../components/About/WhyChooseUs";

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About Us | Aalizah Vision</title>

        <meta
          name="description"
          content="Learn more about Aalizah Vision, our expertise, commitment to quality, and professional technical maintenance solutions."
        />

        <link
          rel="canonical"
          href="https://www.aalizahvision.com/about"
        />

        <meta property="og:title" content="About Us | Aalizah Vision" />
        <meta
          property="og:description"
          content="Discover our mission, expertise, and commitment to excellence."
        />
        <meta
          property="og:url"
          content="https://www.aalizahvision.com/about"
        />
        <meta
          property="og:image"
          content="https://www.aalizahvision.com/Logo.png"
        />
      </Helmet>

      <main className="bg-[#f5f5f5] min-h-screen">
        <HeroBanner />
        <Hero />
        <StatsSection />
        <WhyChooseUs />
        <Bottom />
      </main>
    </>
  );
}