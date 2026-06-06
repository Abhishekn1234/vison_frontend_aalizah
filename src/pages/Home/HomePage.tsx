import HomeAbout from "../../components/Home/HomeAbout";
import HomeHero from "../../components/Home/HomeHero";
import Homeourwork from "../../components/Home/Homeourwork";
import HomeWhychooseus from "../../components/Home/HomeWhychooseus";
import HomeWorkprocess from "../../components/Home/HomeWorkprocess";


export default function HomePage() {
  return (
    <div>
      <HomeHero/>
      <HomeAbout/>
      <HomeWhychooseus/>
      <Homeourwork/>
      <HomeWorkprocess/>
    </div>
  )
}
