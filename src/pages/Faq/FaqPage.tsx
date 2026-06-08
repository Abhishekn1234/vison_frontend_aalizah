import { Helmet } from "react-helmet-async";

import FaqContent from "../../components/Faq/FaqContent";
import FaqHero from "../../components/Faq/FaqHero";

export default function FaqPage() {
  return (
    <>
      <Helmet>
        <title>FAQ | Aalizah Vision</title>

        <meta
          name="description"
          content="Find answers to frequently asked questions about our maintenance, plumbing, electrical, AC servicing, and technical solutions."
        />

        <link
          rel="canonical"
          href="https://www.aalizahvision.com/faq"
        />

        <meta property="og:title" content="FAQ | Aalizah Vision" />
        <meta
          property="og:description"
          content="Answers to common questions about our services and solutions."
        />
        <meta
          property="og:url"
          content="https://www.aalizahvision.com/faq"
        />
        <meta
          property="og:image"
          content="https://www.aalizahvision.com/Logo.png"
        />
      </Helmet>

      <div>
        <FaqHero />
        <FaqContent />
      </div>
    </>
  );
}