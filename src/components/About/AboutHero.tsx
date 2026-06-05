import FadeIn from "../common/FadeIn";
import { Button } from "../common/Button";

export default function Hero() {
  return (
    <section className="bg-[#f9f8f6] py-14 md:py-20 lg:py-28 font-sans overflow-hidden select-none">
      <FadeIn>
        <div className="max-w-[1500px] mx-auto px-6 md:px-12 lg:px-16">

          {/* Section Label */}
          <div className="flex items-center gap-3 mb-8 mt-4">
            <div className="w-5 h-2 bg-[#1EA665] -skew-x-12" />
            <span className="text-black text-sm md:text-base font-semibold lowercase tracking-wide">
              who we are
            </span>
          </div>

          {/* Grid */}
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-14 items-start">

            {/* LEFT */}
            <div className="space-y-10">

              {/* Heading (reduced size + semi-bold) */}
              <h1 className="uppercase tracking-[-0.03em] leading-[0.95] text-left">

                <span className="block text-[#a3a19b] font-semibold text-[32px] sm:text-[45px] md:text-[60px] lg:text-[72px] xl:text-[86px]">
                  DELIVERING RELIABLE
                </span>

                <span className="block text-[#a3a19b] font-semibold text-[32px] sm:text-[45px] md:text-[60px] lg:text-[72px] xl:text-[86px]">
                  MAINTENANCE WITH
                </span>

                <span className="block text-black font-semibold text-[32px] sm:text-[45px] md:text-[60px] lg:text-[72px] xl:text-[86px] mt-1">
                  UNMATCHED QUALITY
                </span>

              </h1>

              {/* Image */}
              <div className="w-full">
                <img
                  src="./About us image.jpeg"
                  alt="Al Sheebani Team Portrait"
                  className="w-full rounded-[22px] object-cover h-[380px] md:h-[520px] lg:h-[580px] xl:h-[620px] shadow-sm"
                />
              </div>

            </div>

            {/* RIGHT */}
           {/* RIGHT */}
<div className="flex flex-col justify-start h-full lg:pt-5">

  {/* Logo (kept separate but reduced impact) */}
  <div className="flex justify-start lg:justify-center xl:justify-start mb-10 lg:mb-10">
    <div className="relative w-[120px] h-[120px] xl:w-[140px] xl:h-[140px] flex items-center justify-center">
      <img
        src="./AV Logo.png"
        alt="Al Sheebani Badge"
        className="w-full h-full object-contain"
      />
    </div>
  </div>

  {/* 🔥 NEW: TEXT + BUTTON SIDE ALIGNMENT BLOCK */}
<div className="flex items-center lg:items-start gap-50 lg:gap-12 lg:pl-10 xl:pl-16 lg:mt-60">

    {/* Text */}
    <div className="space-y-5 max-w-[420px]">

      <p className="text-[#4a4a45] text-[15px] md:text-[17px] leading-[1.6] font-normal">
        Welcome to Aalizah Vision Technical Services,
        your trusted partner for reliable, innovative,
        and high-quality technical solutions.
      </p>

      <p className="text-[#4a4a45] text-[15px] md:text-[17px] leading-[1.6] font-normal">
        We specialize in delivering professional
        technical and maintenance services tailored
        to residential, commercial, and industrial
        needs with a commitment to excellence,
        safety, and customer satisfaction.
      </p>

      {/* Button moved inside same row context */}
      <div className="pt-2">
        <Button className="mt-1" variant="primary">
          EXPLORE OUR SERVICES
        </Button>
      </div>

    </div>

  </div>

</div>

          </div>

        </div>
      </FadeIn>
    </section>
  );
}