import { Check } from "lucide-react";
import FadeIn from "../common/FadeIn";
import AboutButton from "./AboutButton";

const points = [
  "Expert Technicians You Can Trust",
  "Fast & Reliable Service",
  "Comprehensive Maintenance Solutions",
  "Affordable & Transparent Pricing",
  "Committed to Quality & Safety",
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-[#f1efea] py-16 md:py-24 lg:py-32 mb-0 font-sans select-none">
      <FadeIn>
        {/* Top White Curved/Slanted Shape */}
        <div className="absolute top-0 left-0 w-full h-[60px] sm:h-[90px] md:h-[120px] lg:h-[150px] z-0 pointer-events-none">
          <svg
            className="w-full h-full"
            preserveAspectRatio="none"
            viewBox="0 0 1440 150"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M 0 0 
                 L 760 0 
                 C 790 0, 805 25, 820 50 
                 L 855 115 
                 C 870 140, 890 150, 920 150 
                 L 1440 150 
                 L 1440 0 
                 Z"
              fill="white"
            />
          </svg>
        </div>

        <div className="relative z-10 max-w-[1500px] mx-auto px-6 md:px-12 lg:px-16">
          {/* Section Label */}
          <div className="flex items-center gap-3 mb-10 mt-6">
            <div className="w-5 h-2 bg-[#2BC77A] -skew-x-12" />
            <span className="text-black text-sm md:text-base font-semibold lowercase tracking-wide">
              why choose us
            </span>
          </div>

          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-start">
            {/* Left Side Content */}
            <div className="flex flex-col justify-between h-full">
              <div>
                <h2 className="uppercase font-bold tracking-[-0.04em] leading-[0.9] text-left">
                  <span className="block text-[#a3a19b] text-[38px] sm:text-[55px] md:text-[75px] lg:text-[85px] xl:text-[102px]">
                    YOUR TRUSTED
                  </span>
                  <span className="block text-[#a3a19b] text-[38px] sm:text-[55px] md:text-[75px] lg:text-[85px] xl:text-[102px]">
                    PARTNER FOR
                  </span>
                  <span className="block text-[#a3a19b] text-[38px] sm:text-[55px] md:text-[75px] lg:text-[85px] xl:text-[102px]">
                    EVERY
                  </span>
                  <span className="block text-black text-[38px] sm:text-[55px] md:text-[75px] lg:text-[85px] xl:text-[102px] mt-1">
                    MAINTENANCE
                  </span>
                  <span className="block text-black text-[38px] sm:text-[55px] md:text-[75px] lg:text-[85px] xl:text-[102px]">
                    NEED
                  </span>
                </h2>

                <p className="mt-8 max-w-[620px] text-[#4a4a45] text-base md:text-[19px] leading-[1.6] tracking-tight font-normal">
                     From quick fixes to large-scale technical projects, we bring

              precision, expertise, and care to every job. Our skilled

              technicians and dedicated management team ensure every task is

              completed to the highest standards of quality, safety, and

              professionalism.
                </p>
              </div>

              <div className="mt-10">
                <AboutButton className="mt-2" variant="none">
                  VIEW OUR PROJECTS
                </AboutButton>
              </div>
            </div>

            {/* Right Side Image & Snack Cards */}
            <div className="relative w-full">
              <img
                src="./About.png"
                alt="Technician"
                className="w-full h-[500px] md:h-[680px] lg:h-[780px] xl:h-[840px] object-cover rounded-[24px] shadow-sm"
              />

              {/* Floating Dynamic-Width Stack */}
              <div className="absolute left-6 bottom-6 flex flex-col items-start gap-3 max-w-[90%] z-20">
                {points.map((item) => (
                  <div
                    key={item}
                    className="bg-white rounded-xl px-5 py-3.5 shadow-md flex items-center gap-3.5 transition-all duration-200 hover:scale-[1.02]"
                  >
                    <div className="w-7 h-7 rounded-full bg-[#800000] flex items-center justify-center text-white shrink-0">
                      <Check size={16} strokeWidth={3} />
                    </div>
                    <span className="font-bold text-sm md:text-base lg:text-[17px] text-black tracking-tight whitespace-nowrap pr-2">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}