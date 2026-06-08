import { Helmet } from "react-helmet-async";

import FadeIn from "../../components/common/FadeIn";
import OpenPositions from "../../components/Team/Openpositions";
import Teamfeatured from "../../components/Team/Teamfeatured";
import TeamHero from "../../components/Team/TeamHero";

export default function TeamPage() {
  return (
    <>
      <Helmet>
        <title>Our Team | Aalizah Vision</title>

        <meta
          name="description"
          content="Meet the skilled professionals behind Aalizah Vision. Learn about our team, expertise, and career opportunities."
        />

        <link
          rel="canonical"
          href="https://www.aalizahvision.com/team"
        />

        <meta property="og:title" content="Our Team | Aalizah Vision" />
        <meta
          property="og:description"
          content="Meet the experts and professionals who power Aalizah Vision."
        />
        <meta
          property="og:url"
          content="https://www.aalizahvision.com/team"
        />
        <meta
          property="og:image"
          content="https://www.aalizahvision.com/Logo.png"
        />
      </Helmet>

      <div>
        <FadeIn>
          <TeamHero />
          <Teamfeatured />
          <OpenPositions />
        </FadeIn>
      </div>
    </>
  );
}
