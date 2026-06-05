

import FadeIn from "../common/FadeIn";
import AboutButton from "./AboutButton";

export default function Hero() {
  return (
    // Light grey background as requested
    <section className="bg-[#f5f5f5] py-16 lg:py-24 font-sans overflow-hidden">
      <FadeIn>
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16">

          {/* Section Indicator Label: 'who we are' */}
          <div className="flex items-center gap-2 mb-10">
            <div className="w-5 h-2 bg-[#1EA665] -skew-x-12" />
            <span className="text-black text-sm md:text-base font-bold tracking-wider uppercase">
              who we are
            </span>
          </div>

          {/* Top Title Section & Circular Badge */}
          <div className="grid lg:grid-cols-[1fr_260px] gap-8 items-start mb-14">
            <div>
              <h1 className="uppercase font-black tracking-[-0.03em] leading-[0.95] text-[36px] xs:text-[48px] sm:text-[68px] md:text-[85px] lg:text-[100px] xl:text-[115px]">
                <span className="block text-[#959595]">
                  Delivering Reliable
                </span>
                <span className="block text-[#959595]">
                  Maintenance With
                </span>
                <span className="block text-black">
                  Unmatched Quality
                </span>
              </h1>
            </div>

            {/* Circular Stamp / Badge */}
            <div className="hidden lg:flex justify-end pt-4">
              <div className="relative w-[180px] h-[180px] flex items-center justify-center">
                {/* Simulated Spinning Circular text background or logo file wrapper */}
                <img
                  src="./AV Logo.png"
                  alt="Al Sheebani Technical Services Badge"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>

          {/* Bottom Grid Layout: Media Box left vs Narrative content right */}
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-20 items-start">
            
            {/* Left Main Team Picture */}
            <div className="w-full">
              <img
                src="./About us image.jpeg"
                alt="Al Sheebani Team Portrait"
                className="w-full rounded-[16px] object-cover h-[320px] md:h-[480px] lg:h-[580px] shadow-sm"
              />
            </div>

            {/* Right Side Content Block */}
            <div className="flex flex-col justify-center h-full lg:min-h-[240px] pt-2 font-sans">
  
  <div className="space-y-6">
    <p className="text-[#4E5659] text-base md:text-[19px] leading-[1.65] tracking-wide">
      Welcome to Aalizah Vision Technical Services,
      your trusted partner for reliable, innovative,
      and high-quality technical solutions.
    </p>

    <p className="text-[#4E5659] text-base md:text-[19px] leading-[1.65] tracking-wide">
      We specialize in delivering professional
      technical and maintenance services tailored
      to residential, commercial, and industrial
      needs with a commitment to excellence,
      safety, and customer satisfaction.
    </p>
  </div>

  <div className="mt-6">
    <AboutButton variant="primary">
      EXPLORE OUR SERVICES
    </AboutButton>
  </div>

</div>

          </div>

        </div>
      </FadeIn>
    </section>
  );
}