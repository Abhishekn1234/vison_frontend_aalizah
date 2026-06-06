
import { useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, useInView, animate } from 'framer-motion';

// Reusable Counter Component for running numbers
interface CounterProps {
  value: number;
}

export function Counter({ value }: CounterProps) {
  const ref = useRef<HTMLDivElement>(null);

  const motionValue = useMotionValue(0);

  const rounded = useTransform(
    motionValue,
    (latest) => Math.round(latest)
  );

  const isInView = useInView(ref, {
    once: true,
    amount: 0.3,
  });

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(motionValue, value, {
      duration: 2,
      ease: "easeOut",
    });

    return () => controls.stop();
  }, [isInView, motionValue, value]);

  return (
    <div ref={ref}>
      <motion.span>{rounded}</motion.span>
    </div>
  );
}

export default function HomeWhychooseus() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  // Points configuration for slide-in animations
  const points = [
    {
      title: "Trusted Expertise",
      desc: "With years of hands-on experience, our skilled team delivers reliable and high-quality technical solutions every time."
    },
    {
      title: "Prompt & Professional Service",
      desc: "We value your time. Our technicians arrive on schedule, get the job done efficiently, and leave your space spotless."
    },
    {
      title: "Lasting Quality Assurance",
      desc: "We don't just fix problems — we ensure they stay fixed, giving you peace of mind long after the job is done."
    }
  ];

  return (
    <section 
      ref={containerRef}
      className="relative w-full min-h-screen bg-slate-950 text-white overflow-hidden flex flex-col justify-between py-16 md:py-24 font-sans"
    >
      {/* 1. Dark, Rich Textured Background Image Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center mix-blend-luminosity opacity-40 pointer-events-none"
        style={{ 
          backgroundImage: `url('/why aalizah stand above the rest.png')` 
        }}
      />
      {/* Dark Vignette to match the heavy luxury tone */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-90 via-slate-900/80 to-slate-950/90 pointer-events-none" />

      {/* 2. Top/Middle Content Grid */}
      <div className="relative max-w-7xl mx-auto px-6 w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center my-auto">
        
        {/* Left Column: Heading Layout */}
        <div className="lg:col-span-6 flex flex-col space-y-4">
          {/* Badge */}
          <div className="flex items-center gap-2 text-[#800000] font-bold text-xs md:text-sm tracking-widest uppercase">
            <span className="w-4 h-2 bg-[#800000] rounded-xs transform -skew-x-12 inline-block"></span>
            why choose us
          </div>

          {/* Main Massive Header */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-[1.05] uppercase max-w-xl">
            Why Aalizah Vision <br />
            Technical Services<br />
            Stands Above <br />
            The Rest
          </h2>
        </div>

        {/* Right Column: Slide-in Points */}
        <div className="lg:col-span-6 flex flex-col space-y-6">
          {points.map((point, index) => (
            <motion.div
              key={index}
              initial={{ x: 150, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : {}}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.25, 
                ease: [0.16, 1, 0.3, 1] // Custom smooth fast-to-slow cubic bezier
              }}
              className="flex items-start gap-4 p-5 md:p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 transition-colors"
            >
              {/* Checklist Checked Badge */}
              <div className="w-8 h-8 rounded-full bg-[#800000] flex items-center justify-center shrink-0 shadow-md shadow-emerald-500/20 text-slate-950 mt-1">
                <svg className="w-4 h-4 text-white font-bold" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>

              {/* Point Typography */}
              <div className="space-y-1">
                <h3 className="text-lg md:text-xl font-bold tracking-tight text-white">
                  {point.title}
                </h3>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed font-normal">
                  {point.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* 3. Bottom Row: Animated Counter Stats Section */}
      <div className="relative max-w-7xl mx-auto px-6 w-full z-10 pt-12 md:pt-16 border-t border-white/10 mt-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-left">
          
          {/* Stat Item 1 */}
          <div className="space-y-1">
            <span className="block text-[#800000] text-xs md:text-sm font-bold tracking-widest uppercase">
              Projects Completed
            </span>
            <div className="text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter flex items-center">
              <Counter value={100} />
              <span className="text-[#800000] font-medium ml-1">+</span>
            </div>
          </div>

          {/* Stat Item 2 */}
          <div className="space-y-1">
            <span className="block text-[#800000] text-xs md:text-sm font-bold tracking-widest uppercase">
              Satisfied Clients
            </span>
            <div className="text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter flex items-center">
              <Counter value={500} />
              <span className="text-[#800000] font-medium ml-1">+</span>
            </div>
          </div>

          {/* Stat Item 3 */}
          <div className="space-y-1">
            <span className="block text-[#800000] text-xs md:text-sm font-bold tracking-widest uppercase">
              Years of Experience
            </span>
            <div className="text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter flex items-center">
              <Counter value={10} />
              <span className="text-[#800000] font-medium ml-1">+</span>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}