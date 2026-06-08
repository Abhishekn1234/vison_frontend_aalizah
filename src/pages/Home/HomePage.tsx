import { Helmet } from "react-helmet-async";

import HomeAbout from "../../components/Home/HomeAbout";
import HomeGetTouch from "../../components/Home/HomeGetTouch";
import HomeHero from "../../components/Home/HomeHero";
// import Homeourwork from "../../components/Home/Homeourwork";
import HomeServices from "../../components/Home/HomeServices";
import HomeWhychooseus from "../../components/Home/HomeWhychooseus";
import HomeWorkprocess from "../../components/Home/HomeWorkprocess";

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>
          Aalizah Vision | Technical Services & Maintenance Solutions
        </title>

        <meta
          name="description"
          content="Aalizah Vision provides professional technical services, maintenance, plumbing, electrical works, AC servicing, painting, handyman solutions, and property maintenance services."
        />

        <meta
          name="keywords"
          content="technical services, maintenance services, handyman services, AC repair, plumbing, electrical services, painting services, property maintenance"
        />

        <meta name="robots" content="index, follow" />

        <link
          rel="canonical"
          href="https://www.aalizahvision.com/"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Aalizah Vision | Technical Services & Maintenance Solutions"
        />

        <meta
          property="og:description"
          content="Professional technical services and maintenance solutions by Aalizah Vision."
        />

        <meta
          property="og:image"
          content="https://www.aalizahvision.com/Logo.png"
        />

        <meta
          property="og:url"
          content="https://www.aalizahvision.com/"
        />

        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta
          name="twitter:title"
          content="Aalizah Vision | Technical Services & Maintenance Solutions"
        />

        <meta
          name="twitter:description"
          content="Professional technical services and maintenance solutions by Aalizah Vision."
        />

        <meta
          name="twitter:image"
          content="https://www.aalizahvision.com/Logo.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <div>
        <HomeHero />
        <HomeAbout />
        <HomeServices />
        <HomeWhychooseus />
        {/* <Homeourwork /> */}
        <HomeWorkprocess />
        <HomeGetTouch />
      </div>
    </>
  );
}