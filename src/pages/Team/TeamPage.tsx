import FadeIn from "../../components/common/FadeIn";
import OpenPositions from "../../components/Team/Openpositions";
import Teamfeatured from "../../components/Team/Teamfeatured";
import TeamHero from "../../components/Team/TeamHero";

export default function TeamPage() {
  return (
    <div>
        <FadeIn>
          <TeamHero/>
        <Teamfeatured/>
        <OpenPositions/>
        </FadeIn>
        
    </div>
  )
}
