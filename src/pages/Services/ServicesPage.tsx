import { Helmet } from "react-helmet-async";

import ServicesHero from "../../components/Services/ServicesHero";
import ServicesProfessional from "../../components/Services/ServicesProfessional";
import Whatweofferservices from "../../components/Services/Whatweofferservices";
import Whyservices from "../../components/Services/Whyservices";

export default function ServicesPage() {
  return (
    <>
      <Helmet>
        <title>
          Our Services | Aalizah Vision Technical & Maintenance Solutions
        </title>

        <meta
          name="description"
          content="Explore Aalizah Vision's professional services including electrical works, plumbing, AC maintenance, painting, handyman services, property maintenance, and technical solutions."
        />

        <meta
          name="keywords"
          content="electrical services, plumbing services, AC maintenance, AC repair, painting services, handyman services, property maintenance, technical services"
        />

        <meta name="robots" content="index, follow" />

        <link
          rel="canonical"
          href="https://www.aalizahvision.com/services"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Our Services | Aalizah Vision"
        />

        <meta
          property="og:description"
          content="Professional electrical, plumbing, AC maintenance, painting, handyman and property maintenance services."
        />

        <meta
          property="og:image"
          content="https://www.aalizahvision.com/Logo.png"
        />

        <meta
          property="og:url"
          content="https://www.aalizahvision.com/services"
        />

        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta
          name="twitter:title"
          content="Our Services | Aalizah Vision"
        />

        <meta
          name="twitter:description"
          content="Professional electrical, plumbing, AC maintenance, painting, handyman and property maintenance services."
        />

        <meta
          name="twitter:image"
          content="https://www.aalizahvision.com/Logo.png"
        />

        <meta
          name="twitter:card"
          content="summary_large_image"
        />
      </Helmet>

      <div>
        <ServicesHero />
        <Whatweofferservices />
        <ServicesProfessional />
        <Whyservices />
      </div>
    </>
  );
}
