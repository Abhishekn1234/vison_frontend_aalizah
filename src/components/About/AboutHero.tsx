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
         <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-center">
  {/* LEFT */}
  <div className="flex flex-col justify-center">
    <h1 className="uppercase tracking-[-0.03em] leading-[0.95] text-center lg:text-left">
      <span className="block text-[#800000] font-semibold text-[34px] sm:text-[48px] md:text-[62px] lg:text-[72px] xl:text-[86px]">
        DELIVERING RELIABLE
      </span>

      <span className="block text-[#800000] font-semibold text-[34px] sm:text-[48px] md:text-[62px] lg:text-[72px] xl:text-[86px]">
        MAINTENANCE WITH
      </span>

      <span className="block text-black font-semibold text-[34px] sm:text-[48px] md:text-[62px] lg:text-[72px] xl:text-[86px] mt-2">
        UNMATCHED QUALITY
      </span>
    </h1>

    {/*
    <img
      src="/About us team.png"
      alt="Technical Services"
      className="w-full max-w-[720px] mt-10 rounded-3xl object-cover"
    />
    */}
  </div>

  {/* RIGHT */}
  <div className="flex flex-col items-center lg:items-start">
    {/* Rotating Logo */}
    <div
      ref={containerRef}
      className="relative w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] md:w-[360px] md:h-[360px]"
    >
      <svg
        viewBox="0 0 400 400"
        className="absolute inset-0 w-full h-full"
        style={{
          transform: `rotate(${rotation}deg)`,
          transition: "transform .1s linear",
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
          <textPath href="#circlePath">
            AALIZAH VISION TECHNICAL SERVICES •
          </textPath>
        </text>
      </svg>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[170px] h-[170px] md:w-[220px] md:h-[220px] rounded-full bg-white shadow-2xl border border-gray-100 flex items-center justify-center">
          <img
            src="/Logo.png"
            alt="Aalizah Vision Technical Services"
            className="w-[120px] md:w-[155px] object-contain"
          />
        </div>
      </div>
    </div>

    {/* Content */}
    <div className="max-w-[500px] mt-10 space-y-6 text-center lg:text-left">
      <p className="text-[#4a4a45] text-[15px] md:text-[17px] leading-8">
        Welcome to <strong>Aalizah Vision Technical Services</strong>, your
        trusted partner for reliable, innovative, and high-quality technical
        solutions. We specialize in delivering professional technical and
        maintenance services tailored to residential, commercial, and
        industrial needs with a commitment to excellence, safety, and customer
        satisfaction.
      </p>

      <p className="text-[#4a4a45] text-[15px] md:text-[17px] leading-8">
        We believe in building long-term relationships through trust,
        transparency, and exceptional workmanship. Whether it's installation,
        maintenance, repair, or technical support, we provide dependable
        solutions that add value and exceed expectations.
      </p>

      <Link
        to="/services"
        className="
          inline-flex items-center justify-center
          rounded-xl
          bg-[#800000]
          px-8 py-4
          text-white
          font-semibold
          uppercase
          tracking-wider
          shadow-lg
          transition-all duration-300
          hover:bg-[#650000]
          hover:-translate-y-1
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