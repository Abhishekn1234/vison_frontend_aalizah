import { Helmet } from "react-helmet-async";

import ContactFeatured from "../../components/Contact/ContactFeatured";
import ContactForm from "../../components/Contact/ContactForm";
import ContactHero from "../../components/Contact/ContactHero";

export default function ContactPage() {
  return (
    <>
      <Helmet>
        <title>Contact Us | Aalizah Vision</title>

        <meta
          name="description"
          content="Contact Aalizah Vision for technical services, maintenance solutions, plumbing, electrical works, AC servicing, and handyman services."
        />

        <link
          rel="canonical"
          href="https://www.aalizahvision.com/contact"
        />

        <meta property="og:title" content="Contact Us | Aalizah Vision" />
        <meta
          property="og:description"
          content="Get in touch with Aalizah Vision for professional maintenance and technical services."
        />
        <meta
          property="og:url"
          content="https://www.aalizahvision.com/contact"
        />
        <meta
          property="og:image"
          content="https://www.aalizahvision.com/Logo.png"
        />
      </Helmet>

      <div>
        <ContactHero />
        <ContactFeatured />
        <ContactForm />
      </div>
    </>
  );
}