import Button from "../common/Button";
import FadeIn from "../common/FadeIn";
import { useEffect, useRef, useState } from "react";
import {
  motion,
  animate,
  useInView,
  useScroll,
  
  useMotionValue,
} from "framer-motion";

export default function HomeAbout() {
  const containerRef = useRef<HTMLDivElement>(null);
  const countRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
const [direction, setDirection] = useState<"up" | "down">("down");

useEffect(() => {
  let last = 0;

  return scrollY.on("change", (v) => {
    setDirection(v > last ? "down" : "up");
    last = v;
  });
}, [scrollY]);
  const isInView = useInView(containerRef, {
  margin: "-100px",
});
const x = useMotionValue(80);
useEffect(() => {
  if (isInView) {
    // Scroll INTO view → right to left
    animate(x, -80, {
      duration: 0.3,
      ease: "easeOut",
    });
  } else {
    // Scroll OUT of view → direction-based behavior
    animate(x, direction === "down" ? 80 : 80, {
      duration: 0.6,
      ease: "easeInOut",
    });
  }
}, [isInView, direction]);
  const [currentCount, setCurrentCount] = useState(0);

  const isCountInView = useInView(countRef, {
    once: true,
    margin: "-100px",
  });

  useEffect(() => {
    if (!isCountInView) return;

    const controls = animate(0, 500, {
      duration: 1,
      ease: "easeOut",
      onUpdate: (value) => {
        setCurrentCount(Math.floor(value));
      },
    });

    return () => controls.stop();
  }, [isCountInView]);

 
  // Balanced parallax translation for a smoother feel across viewports


  return (
    <section className="w-full bg-[#f9f8f6] py-16 md:py-24 lg:py-28 font-sans overflow-hidden">
      <FadeIn>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 xl:gap-16 items-center">

          {/* LEFT SIDE (Media Stack) */}
          <div
            ref={containerRef}
            className="lg:col-span-5 relative w-full flex flex-col justify-center"
          >
            {/* Main Composition Box */}
            <div className="relative w-full aspect-[4/3] sm:aspect-square bg-zinc-100 rounded-2xl md:rounded-3xl overflow-hidden shadow-sm">
              <img
                src="/kitchen home page.jpeg"
                alt="Kitchen interior background"
                className="w-full h-full object-cover brightness-50"
              />

              {/* Counter - Adaptive Sizing */}
              <div
                ref={countRef}
                className="absolute bottom-0 left-0 bg-black/40 backdrop-blur-md p-5 sm:p-6 md:p-8 text-white w-full sm:w-64 md:w-72 rounded-tr-2xl md:rounded-tr-3xl"
              >
                <div className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight flex items-end leading-none">
                  {currentCount}
                  <span className="ml-1 text-3xl sm:text-4xl md:text-5xl font-medium text-emerald-400 mb-1">
                    +
                  </span>
                </div>
              </div>
            </div>

            {/* Handyman Layer - Using robust responsive bounds */}
            <motion.div
              style={{ x }}
              className="absolute right-[-4%] bottom-[-12%] sm:bottom-[-16%] md:bottom-[-20%] lg:bottom-[-15%] z-10 w-[60%] sm:w-[50%] md:w-[48%] lg:w-[65%] pointer-events-none"
            >
              <img
                src="/handyman.PNG"
                alt="Handyman"
                className="w-full h-auto object-contain drop-shadow-2xl"
              />
            </motion.div>

            {/* Caption Text Below Block */}
            <div className="mt-6 md:mt-8 text-slate-900 font-bold text-lg sm:text-xl md:text-2xl leading-tight tracking-tight max-w-[280px]">
              Satisfied <br />
              Customers <br />
              Across Dubai
            </div>
          </div>

          {/* RIGHT SIDE (Content Stack) */}
          <div className="lg:col-span-7 flex flex-col space-y-6 md:space-y-8">
            {/* Tagline */}
            <div className="flex items-center gap-2 text-slate-900 font-bold text-xs sm:text-sm tracking-wider uppercase">
              <span className="w-3.5 h-2 bg-[#800000] rounded-sm -skew-x-12 inline-block"></span>
              about us
            </div>

            {/* Typography Heading Hierarchy */}
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-black leading-[1.1] uppercase">
              Delivering <br />
              Quality <br />
              <span className="text-[#800000] inline-block my-0.5 md:my-1">
                Service
              </span>{" "}
              <br className="sm:hidden" />
              Every Time
            </h2>

            {/* Inner Grid (Mission & Vision) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 pt-2">
              {/* Our Mission */}
              <div className="space-y-2 md:space-y-3">
                <h3 className="text-lg md:text-xl font-bold tracking-tight text-black">
                  Our Mission
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed font-normal">
                  Our mission is to deliver reliable, affordable, and high-standard home maintenance solutions while building lasting relationships with our customers through honesty and excellence.
                </p>
              </div>
              
              {/* Our Vision */}
              <div className="space-y-2 md:space-y-3">
                <h3 className="text-lg md:text-xl font-bold tracking-tight text-black">
                  Our Vision
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed font-normal">
                  To become Dubai's most trusted home services provider by ensuring quality, safety, and satisfaction in every project we undertake.
                </p>
              </div>
            </div>

            {/* Divider Line */}
            <hr className="border-gray-200 w-full pt-2" />

            {/* Quote & Phone Number Actions Container */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 sm:gap-4 lg:gap-6">
              {/* Quote Block */}
              <p className="text-[#800000] text-xs md:text-sm italic leading-relaxed max-w-sm md:max-w-md font-medium">
                “We believe every home deserves expert care. From repairs to cleaning, we make your life easier. Contact our team today for reliable service done right.”
              </p>
              
              {/* Phone Number Callout Link */}
              <a 
                href="tel:+97142945001" 
                className="flex items-center gap-3 shrink-0 group self-start sm:self-center"
              >
                <div className="w-11 h-11 md:w-12 md:h-12 bg-[#232E3A] text-white rounded-full flex items-center justify-center transition-transform group-hover:scale-105 shadow-md">
                  <svg className="w-4 h-4 md:w-5 md:h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M21.384 17.791l-3.75-3.437a1.251 1.251 0 0 0-1.743.044l-1.545 1.545c-.443-.24-1.045-.613-1.68-1.248-.634-.634-1.008-1.236-1.247-1.68l1.545-1.545a1.245 1.245 0 0 0 .044-1.743L9.571 4.02a1.25 1.25 0 0 0-1.724-.034l-2.02 1.834c-.818.744-1.157 1.87-.872 2.955.748 2.85 2.801 6.275 6.078 9.552 3.277 3.277 6.702 5.33 9.552 6.078a3.11 3.11 0 0 0 2.955-.872l1.834-2.02a1.25 1.25 0 0 0-.03-.172z"/>
                  </svg>
                </div>
                <span className="text-xl md:text-2xl font-black text-[#800000] tracking-tight whitespace-nowrap">
                  +971 4 294 5001
                </span>
              </a>
            </div>

            {/* Contact Button Base Wrapper */}
            <div className="pt-2">
              <Button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#232E3A] hover:bg-slate-800 text-white font-bold px-7 py-3.5 md:py-4 rounded-lg transition-colors text-xs md:text-sm tracking-wider uppercase">
                Contact Our Team
              </Button>
            </div>
          </div>

        </div>
      </FadeIn>
    </section>
  );
}