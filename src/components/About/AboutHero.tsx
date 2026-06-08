import FadeIn from "../common/FadeIn";

import { useEffect, useRef, useState } from "react";
import { Link} from "react-router-dom";

export default function Hero() {
  const [rotation, setRotation] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      // Calculate how far down the page the element is
      const rect = containerRef.current.getBoundingClientRect();
       console.log("Element top relative to viewport:", rect.top);
      const scrollPosition = window.scrollY;

      // Adjust the multiplier (0.2) to make the text spin faster or slower
      const newRotation = scrollPosition * 0.15; 
      
      setRotation(newRotation);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <section className="bg-[#f9f8f6] py-14 md:py-20 lg:py-28 font-sans overflow-hidden select-none">
      <FadeIn>
        <div className="max-w-[1500px] mx-auto px-6 md:px-12 lg:px-16">
          {/* Section Label */}
          <div className="flex items-center gap-3 mb-8 mt-4">
            <div className="w-5 h-2 bg-[#800000] -skew-x-12" />
            <span className="text-black text-sm md:text-base font-semibold lowercase tracking-wide">
              who we are
            </span>
          </div>

          {/* Main Grid */}
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-14 items-center">
            {/* LEFT */}
            <div className="space-y-10">
              <h1 className="uppercase tracking-[-0.03em] leading-[0.95] text-left">
                <span className="block text-[#800000] font-semibold text-[32px] sm:text-[45px] md:text-[60px] lg:text-[72px] xl:text-[86px]">
                  DELIVERING RELIABLE
                </span>

                <span className="block text-[#800000] font-semibold text-[32px] sm:text-[45px] md:text-[60px] lg:text-[72px] xl:text-[86px]">
                  MAINTENANCE WITH
                </span>

                <span className="block text-black font-semibold text-[32px] sm:text-[45px] md:text-[60px] lg:text-[72px] xl:text-[86px] mt-1">
                  UNMATCHED QUALITY
                </span>
              </h1>
              <img
              src="/About us team.png"
              alt="Technical Services"
              className="w-98 h-40 md:w-72 md:h-28 lg:w-[720px] lg:h-[420px] object-cover "
            />
            </div>

            {/* RIGHT */}
            <div className="flex flex-col items-center lg:items-start gap-10">
              {/* Rotating Logo Circle */}
              <div 
      ref={containerRef}
      className="relative w-[280px] h-[280px] md:w-[360px] md:h-[360px]"
    >
      {/* SVG Text Wrapper */}
      <svg
        viewBox="0 0 400 400"
        className="absolute inset-0 w-full h-full will-change-transform"
        style={{
          transform: `rotate(${rotation}deg)`,
          transition: "transform 0.1s ease-out" // Keeps the rotation smooth
        }}
      >
        <defs>
          <path
            id="circlePath"
            d="
              M 200,200
              m -150,0
              a 150,150 0 1,1 300,0
              a 150,150 0 1,1 -300,0
            "
          />
        </defs>

        <text
          fill="#354145"
          fontSize="16"
          fontWeight="700"
          letterSpacing="4"
        >
          <textPath href="#circlePath" startOffset="0%">
            AALIZAH VISION TECHNICAL SERVICES 
          </textPath>
        </text>
      </svg>

      {/* Center Logo (Stays static/does not rotate) */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[180px] h-[180px] md:w-[220px] md:h-[220px] rounded-full bg-white shadow-xl flex items-center justify-center">
          <img
            src="./Logo.png"
            alt="Aalizah Vision Technical Services"
            className="w-[130px] md:w-[160px] object-contain"
          />
        </div>
      </div>
    </div>

              {/* Content */}
              <div className="max-w-[420px] space-y-5 text-center lg:text-left">
                <p className="text-[#4a4a45] text-[15px] md:text-[17px] leading-[1.6]">
                Welcome to Aalizah Vision Technical Services, your trusted partner
                  for reliable, innovative, and high-quality technical solutions. We
                  specialize in delivering professional technical and maintenance
                  services tailored to residential, commercial, and industrial needs
                  with a commitment to excellence, safety, and customer satisfaction,
                  our experienced team ensures every project is completed with
                  precision and efficiency.

                </p>

                <p className="text-[#4a4a45] text-[15px] md:text-[17px] leading-[1.6]">
                  At Aalizah Vision Technical Services, we believe in building longterm relationships through trust, transparency, and exceptional
                    workmanship. Whether it’s installation, maintenance, repair, or
                    technical support, we strive to provide solutions that add value and
                    exceed expectations.
                </p>

             <Link
  to="/services"
  className="
    mt-4 inline-flex items-center justify-center
    bg-[#800000]
    text-white
    px-8 py-4
    rounded-xl
    font-bold
    uppercase
    tracking-wider
    shadow-lg
    hover:bg-[#650000]
    transition-all duration-300
  "
>
  Explore Our Services
</Link>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}