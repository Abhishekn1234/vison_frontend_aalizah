import { Check } from "lucide-react";
import FadeIn from "../common/FadeIn";
import Button from "../common/Button";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const points = [
  "Expert Technicians You Can Trust",
  "Fast & Reliable Service",
  "Comprehensive Maintenance Solutions",
  "Affordable & Transparent Pricing",
  "Committed to Quality & Safety",
];
const AnimatedPoint = ({ item, index }: { item: string; index: number }) => {
  const [visible, setVisible] = useState(false);


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    const el = document.getElementById(`point-${index}`);
    if (el) observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      id={`point-${index}`}
      className={`
        bg-white rounded-xl px-4 py-3 shadow-md flex items-center gap-3
        transition-all duration-700 ease-out
        ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}
      `}
      style={{
        transitionDelay: `${index * 120}ms`,
      }}
    >
      <div className="w-6 h-6 rounded-full bg-[#800000] flex items-center justify-center text-white shrink-0">
        <Check size={14} strokeWidth={3} />
      </div>

      <span className="font-semibold text-[13px] md:text-[15px] text-black tracking-tight whitespace-nowrap">
        {item}
      </span>
    </div>
  );
};
export default function WhyChooseUs() {
  const navigate=useNavigate();
  return (
    <section className="relative overflow-hidden bg-[#f1efea] py-14 md:py-20 lg:py-28 font-sans select-none">

      <FadeIn>

        {/* Top Curve */}
        <div className="absolute top-0 left-0 w-full h-[60px] sm:h-[90px] md:h-[120px] lg:h-[150px] z-0 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 1440 150" fill="none">
            <path
              d="M 0 0 L 760 0 C 790 0, 805 25, 820 50 L 855 115 C 870 140, 890 150, 920 150 L 1440 150 L 1440 0 Z"
              fill="white"
            />
          </svg>
        </div>

        <div className="relative z-10 max-w-[1500px] mx-auto px-6 md:px-12 lg:px-16">

          {/* Label */}
          <div className="flex items-center gap-3 mb-8 mt-5">
            <div className="w-5 h-2 bg-[#800000] -skew-x-12" />
            <span className="text-black text-sm md:text-base font-semibold lowercase tracking-wide">
              why choose us
            </span>
          </div>

          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-14 items-start">

            {/* LEFT */}
            <div className="flex flex-col justify-between h-full">

              <div>

                {/* 🔥 Reduced Heading Size + Better Weight */}
                <h2 className="uppercase font-semibold tracking-[-0.03em] leading-[0.95] text-left">

                  <span className="block text-[#800000] text-[28px] sm:text-[40px] md:text-[55px] lg:text-[65px] xl:text-[78px]">
                    YOUR TRUSTED
                  </span>

                  <span className="block text-[#800000] text-[28px] sm:text-[40px] md:text-[55px] lg:text-[65px] xl:text-[78px]">
                    PARTNER FOR
                  </span>

                  <span className="block text-[#800000] text-[28px] sm:text-[40px] md:text-[55px] lg:text-[65px] xl:text-[78px]">
                    EVERY
                  </span>

                  <span className="block text-black font-semibold text-[28px] sm:text-[40px] md:text-[55px] lg:text-[65px] xl:text-[78px] mt-1">
                    MAINTENANCE
                  </span>

                  <span className="block text-black font-semibold text-[28px] sm:text-[40px] md:text-[55px] lg:text-[65px] xl:text-[78px]">
                    NEED
                  </span>

                </h2>

                {/* 🔥 Better paragraph sizing */}
                <p className="mt-30 max-w-[620px] text-[#4a4a45] text-[15px] md:text-[17px] leading-[1.65] font-normal">
                  From quick fixes to large-scale technical projects, we bring
                  precision, expertise, and care to every job. Our skilled
                  technicians and dedicated management team ensure every task is
                  completed to the highest standards of quality, safety, and
                  professionalism.
                </p>

              </div>

              <div className="mt-4">
                <Button className="mt-1" variant="none" onClick={()=>navigate('/services')}>
                  VIEW OUR PROJECTS
                </Button>
              </div>

            </div>

            {/* RIGHT */}
            <div className="relative w-full">

              <img
                src="./About.png"
                alt="Technician"
                className="w-full h-[460px] md:h-[620px] lg:h-[720px] xl:h-[780px] object-cover rounded-[24px]"
              />

              {/* 🔥 Floating Cards - refined text */}
             <div className="absolute left-5 bottom-5 flex flex-col items-start gap-3 max-w-[92%] z-20">

  {points.map((item, index) => (
    <AnimatedPoint key={item} item={item} index={index} />
  ))}

</div>

            </div>

          </div>
        </div>

      </FadeIn>
    </section>
  );
}