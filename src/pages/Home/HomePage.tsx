import HomeAbout from "../../components/Home/HomeAbout";
import HomeHero from "../../components/Home/HomeHero";
import Homeourwork from "../../components/Home/Homeourwork";
import HomeWhychooseus from "../../components/Home/HomeWhychooseus";


export default function HomePage() {
  return (
    <div>
      <HomeHero/>
      <HomeAbout/>
      <HomeWhychooseus/>
      <Homeourwork/>
    </div>
  )
}
