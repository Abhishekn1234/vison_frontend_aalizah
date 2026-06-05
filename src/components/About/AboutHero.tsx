import FadeIn from "../common/FadeIn";
import AboutButton from "./AboutButton";

export default function Hero() {
  return (
    <section className="bg-[#f9f8f6] py-16 md:py-24 lg:py-32 font-sans overflow-hidden select-none">
      <FadeIn>
        <div className="max-w-[1500px] mx-auto px-6 md:px-12 lg:px-16">

          {/* Section Indicator Label: 'who we are' */}
          <div className="flex items-center gap-3 mb-10 mt-6">
            <div className="w-5 h-2 bg-[#1EA665] -skew-x-12" />
            <span className="text-black text-sm md:text-base font-semibold lowercase tracking-wide">
              who we are
            </span>
          </div>

          {/* Layout Structure Matching Image Grid Layout */}
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Title & Main Team Graphic */}
            <div className="space-y-12">
              <h1 className="uppercase font-bold tracking-[-0.04em] leading-[0.9] text-left">
                <span className="block text-[#a3a19b] text-[38px] sm:text-[55px] md:text-[75px] lg:text-[85px] xl:text-[102px]">
                  DELIVERING RELIABLE
                </span>
                <span className="block text-[#a3a19b] text-[38px] sm:text-[55px] md:text-[75px] lg:text-[85px] xl:text-[102px]">
                  MAINTENANCE WITH
                </span>
                <span className="block text-black text-[38px] sm:text-[55px] md:text-[75px] lg:text-[85px] xl:text-[102px] mt-1">
                  UNMATCHED QUALITY
                </span>
              </h1>

              <div className="w-full">
                <img
                  src="./About us image.jpeg"
                  alt="Al Sheebani Team Portrait"
                  className="w-full rounded-[24px] object-cover h-[400px] md:h-[55px] lg:h-[620px] xl:h-[680px] shadow-sm"
                />
              </div>
            </div>

            {/* Right Column: Badge & Content Narrative Block */}
            <div className="flex flex-col justify-between h-full lg:pt-4 xl:pt-8">
              
              {/* Circular Badge Alignment Block */}
              <div className="flex justify-start lg:justify-center xl:justify-start lg:pl-12 xl:pl-20 mb-14 lg:mb-20">
                <div className="relative w-[160px] h-[160px] xl:w-[190px] xl:h-[190px] flex items-center justify-center">
                  <img
                    src="./AV Logo.png"
                    alt="Al Sheebani Technical Services Badge"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* Bottom Context Descriptions */}
              <div className="lg:pl-12 xl:pl-20 flex flex-col justify-end">
                <div className="space-y-6 max-w-[540px]">
                  <p className="text-[#4a4a45] text-base md:text-[19px] leading-[1.6] tracking-tight font-normal">
                    Welcome to Aalizah Vision Technical Services,

      your trusted partner for reliable, innovative,

      and high-quality technical solutions.
                  </p>
                  <p className="text-[#4a4a45] text-base md:text-[19px] leading-[1.6] tracking-tight font-normal">
                      We specialize in delivering professional

      technical and maintenance services tailored

      to residential, commercial, and industrial

      needs with a commitment to excellence,

      safety, and customer satisfaction.
                  </p>
                </div>

                <div className="mt-10">
                  <AboutButton className="mt-2" variant="primary">
                    EXPLORE OUR SERVICES
                  </AboutButton>
                </div>
              </div>

            </div>

          </div>

        </div>
      </FadeIn>
    </section>
  );
}