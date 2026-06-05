import { Check, ArrowRight } from "lucide-react";
import FadeIn from "../common/FadeIn";

const points = [
  "Experienced and Skilled Professionals",
  "Reliable Project Execution",
  "High-Quality Materials and Workmanship",
  "Commitment to Safety and Excellence",
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-[#f1efea] py-16 md:py-24 lg:py-32 mb-20">
      <FadeIn>
        {/* Top White Curved/Slanted Shape */}
      <div className="absolute top-0 left-0 w-full h-[70px] md:h-[110px] lg:h-[140px] z-0 pointer-events-none">
        <svg
          className="w-full h-full"
          preserveAspectRatio="none"
          viewBox="0 0 1440 140"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 0 0 
               L 800 0 
               C 830 0, 850 30, 865 55 
               L 900 115 
               C 915 132, 935 140, 960 140 
               L 1440 140 
               L 1440 0 
               Z"
            fill="white"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-[1500px] mx-auto px-5 md:px-10">

        {/* Section Label */}
        <div className="flex items-center gap-3 mb-10 mt-8">
          <div className="w-5 h-2 bg-[#2BC77A] -skew-x-12" />
          <span className="text-black text-base md:text-xl font-medium uppercase tracking-wider">
            why choose us
          </span>
        </div>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-center">

          {/* Left Side */}
          <div>
            <h2 className="uppercase font-black tracking-[-0.05em] leading-[0.88]">
              <span className="block text-[#b3b1ab] text-[36px] xs:text-[45px] sm:text-[65px] md:text-[80px] lg:text-[95px] xl:text-[115px]">
                YOUR TRUSTED
              </span>
              <span className="block text-[#b3b1ab] text-[36px] xs:text-[45px] sm:text-[65px] md:text-[80px] lg:text-[95px] xl:text-[115px]">
                PARTNER FOR
              </span>
              <span className="block text-[#b3b1ab] text-[36px] xs:text-[45px] sm:text-[65px] md:text-[80px] lg:text-[95px] xl:text-[115px]">
                EVERY
              </span>
              <span className="block text-black text-[36px] xs:text-[45px] sm:text-[65px] md:text-[80px] lg:text-[95px] xl:text-[115px]">
                MAINTENANCE
              </span>
              <span className="block text-black text-[36px] xs:text-[45px] sm:text-[65px] md:text-[80px] lg:text-[95px] xl:text-[115px]">
                NEED
              </span>
            </h2>

            <p className="mt-10 max-w-[700px] text-[#555] text-lg md:text-[22px] leading-[1.7]">
              From quick fixes to large-scale technical projects, we bring
              precision, expertise, and care to every job. Our skilled
              technicians and dedicated management team ensure every task is
              completed to the highest standards of quality, safety, and
              professionalism.
            </p>

            <button className="mt-10 bg-white text-black px-8 md:px-10 py-5 rounded-2xl font-bold uppercase flex items-center gap-3 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              View Our Projects
              <ArrowRight size={22} className="text-[#2BC77A]" />
            </button>
          </div>

          {/* Right Side */}
          <div className="relative">
            <img
              src="./About.png"
              alt="Technician"
              className="w-full h-[450px] md:h-[650px] lg:h-[850px] object-cover rounded-[30px]"
            />

            {/* Floating Cards */}
            <div className="mt-6 lg:mt-0 lg:absolute lg:left-8 lg:right-8 lg:bottom-8 space-y-4">
              {points.map((item) => (
                <div
                  key={item}
                  className="bg-white rounded-2xl px-5 md:px-7 py-4 shadow-lg flex items-center gap-4"
                >
                  <div className="w-14 h-14 rounded-full bg-[#2BC77A] flex items-center justify-center text-white shrink-0">
                    <Check size={24} />
                  </div>
                  <span className="font-semibold text-base md:text-xl text-black">
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