"use client";

import { motion } from "framer-motion";
import Button from "../common/Button";

// Explicit structure for Step object
interface WorkStep {
  id: string;
  title: string;
  desc: string;
  img: string;
  isDark: boolean;
  bullets: string[];
}

export default function HomeWorkprocess() {
  const steps: WorkStep[] = [
    {
      id: "01",
      title: "INITIAL CONSULTATION & INSPECTION",
      desc: "We start by understanding your needs and inspecting the project site to provide the most efficient plan.",
      img: "/5star.jpg",
      isDark: true,
      bullets: ["On-site Evaluation by Our Experts", "Transparent Pricing and Clear Timeline"],
    },
    {
      id: "02",
      title: "EXECUTION & QUALITY CONTROL",
      desc: "Once approved, our team gets to work executing your vision with premium quality materials and advanced tools.",
      img: "/4star.jpg",
      isDark: false,
      bullets: ["Skilled Professionals for Every Stage", "Regular Supervision to Maintain Standards"],
    },
    {
      id: "03",
      title: "FINAL REVIEW & CLIENT SATISFACTION",
      desc: "After completion, we review every detail to ensure perfection and client satisfaction before project handover.",
      img: "/3star.jpg",
      isDark: true,
      bullets: ["Comprehensive Inspection Before Delivery", "Client Feedback and After-Service Support"],
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      x: -30, 
      y: 30,   
      scale: 0.96
    },
    visible: { 
      opacity: 1, 
      x: 0, 
      y: 0, 
      scale: 1,
      transition: { 
        type: "spring",
        stiffness: 60,
        damping: 15,
        duration: 0.6
      }
    },
  }as const;

  return (
    <section className="relative bg-[#f6f2eb] py-16 sm:py-24 lg:py-28 overflow-hidden min-h-screen">
      
      {/* Background Header Text Wrapper */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 md:mb-16">
        <div>
          <p className="text-[#800000] font-semibold tracking-wider uppercase text-xs sm:text-sm">
            our work process
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mt-3 sm:mt-4 leading-tight tracking-tight text-[#1a2424]">
            FROM <br />
            START <span className="text-[#800000] font-normal">TO</span> FINISH
          </h2>
        </div>
        <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row items-start sm:items-end md:items-start lg:items-end justify-between gap-6">
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-md">
            At Aalizah Vision Technical Services, we follow a streamlined
            process that ensures every project is delivered on time,
            within budget, and to the highest standards.
          </p>

          <Button
            variant="primary"
            className="w-full sm:w-auto whitespace-nowrap flex items-center justify-center py-3 px-6 text-sm"
          >
            Get a Free Quote
          </Button>
        </div>
      </div>

      {/* 🧩 STACKED CARDS WRAPPER */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.05 }}
        // Layout: Blocks flex stacked on mobile, Absolute offset paths layout on desktop maps
        className="relative mt-8 md:mt-12 h-auto md:h-[880px] max-w-5xl mx-auto px-4 flex flex-col gap-6 md:block"
      >
        {steps.map((step: WorkStep, index: number) => {
          // Dynamic absolute alignment matrix array exclusively assigned to desktop break points
          const positions = [
            "md:top-0 md:left-[5%]",
            "md:top-[160px] md:left-[15%]",
            "md:top-[320px] md:left-[25%]",
          ];

          return (
            <motion.div
              key={step.id}
              variants={cardVariants}
              className={`relative md:absolute ${positions[index]} w-full md:w-[65%] shadow-xl md:shadow-[0_20px_50px_rgba(0,0,0,0.12)] rounded-2xl overflow-hidden flex flex-col`}
              style={{ md: { zIndex: index + 1 } } as any} 
            >
              {/* IMAGE HEADER */}
              <div className="h-36 sm:h-44 w-full relative overflow-hidden shrink-0">
                <img
                  src={step.img}
                  className="w-full h-full object-cover object-center"
                  alt={step.title}
                />
                <div className="absolute inset-0 bg-black/10" />
              </div>

              {/* CARD BLOCK MAIN CONTENT */}
              <div className={`p-6 sm:p-8 flex-1 relative ${step.isDark ? 'bg-[#2b3535] text-white' : 'bg-white text-[#2b3535]'}`}>
                
                {/* Giant Step Indicator Number */}
                <div className="flex items-baseline gap-3 sm:gap-4">
                  <span className={`text-4xl sm:text-6xl font-black leading-none tracking-tighter shrink-0 ${step.isDark ? 'text-white/15' : 'text-black/10'}`}>
                    {step.id}
                  </span>
                  <h4 className="text-base sm:text-lg font-bold uppercase tracking-wide leading-tight">
                    {step.title}
                  </h4>
                </div>

                <p className={`mt-3 text-xs sm:text-sm leading-relaxed ${step.isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  {step.desc}
                </p>

                <div className={`w-full h-[1px] my-4 sm:my-6 ${step.isDark ? 'bg-white/10' : 'bg-black/10'}`} />

                {/* Checked Bullet Point Node list */}
                <ul className="space-y-2.5 sm:space-y-3.5">
                  {step.bullets.map((bullet: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-2.5 sm:gap-3 text-xs sm:text-sm font-medium">
                      <span className="flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#800000] flex items-center justify-center text-white text-[10px] sm:text-xs">
                        ✓
                      </span>
                      <span className={step.isDark ? 'text-gray-200' : 'text-gray-700'}>
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}