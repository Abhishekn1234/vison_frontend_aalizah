import HomeAbout from "../../components/Home/HomeAbout";
import HomeGetTouch from "../../components/Home/HomeGetTouch";
import HomeHero from "../../components/Home/HomeHero";
// import Homeourwork from "../../components/Home/Homeourwork";
import HomeServices from "../../components/Home/HomeServices";
import HomeWhychooseus from "../../components/Home/HomeWhychooseus";
import HomeWorkprocess from "../../components/Home/HomeWorkprocess";


export default function HomePage() {
  return (
    <div>
      <HomeHero/>
      <HomeAbout/>
      <HomeServices/>
      <HomeWhychooseus/>
      {/* <Homeourwork/> */}
      <HomeWorkprocess/>
      <HomeGetTouch/>
    </div>
  )
}
