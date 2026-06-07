"use client";

import { motion } from "framer-motion";
import Button from "../common/Button";

// 1. Fix TypeScript errors by explicitly defining the Step object structure
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

  // 2. Container variants orchestrating the dynamic scroll choreography
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2, // Staggers 1 -> 2 -> 3 going down
      },
    },
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      x: -140, // Elegant slide-in from the left side
      y: 40,   
      scale: 0.92 
    },
    visible: { 
      opacity: 1, 
      x: 0, 
      y: 0, 
      scale: 1,
      transition: { 
        type: "spring",
        stiffness: 50,
        damping: 14,
        duration: 0.75 
      }
    },
  } as const;

  return (
    <section className="relative bg-[#f6f2eb] py-28 overflow-hidden min-h-screen">
      
      {/* Background Header Text Wrapper */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8 mb-16">
        <div>
          <p className="text-[#800000] font-semibold tracking-wider uppercase text-sm">our work process</p>
          <h2 className="text-5xl font-black mt-4 leading-tight tracking-tight text-[#1a2424]">
            FROM <br />
            START <span className="text-[#800000] font-normal">TO</span> FINISH
          </h2>
        </div>
       <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
  <p className="text-gray-600 leading-relaxed max-w-md">
    At Aalizah Vision Technical Services, we follow a streamlined
    process that ensures every project is delivered on time,
    within budget, and to the highest standards.
  </p>

  <Button
    variant="primary"
    className="whitespace-nowrap flex items-center justify-center"
  >
    Get a Free Quote
  </Button>
</div>
      </div>

      {/* 🧩 STACKED CARDS WRAPPER */}
      {/* Replaced manual trigger logic with Framer Motion's native view viewport viewport checker */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.15 }} // once: false forces recalculation when scrolling back up
        className="relative mt-12 h-[850px] max-w-5xl mx-auto px-4"
      >
        {steps.map((step: WorkStep, index: number) => {
          const positions = [
            "top-0 left-0 md:left-[5%]",
            "top-[120px] left-0 md:left-[15%]",
            "top-[240px] left-0 md:left-[25%]",
          ];

          return (
            <motion.div
              key={step.id}
              variants={cardVariants}
              className={`absolute ${positions[index]} w-full md:w-[65%] shadow-[0_20px_50px_rgba(0,0,0,0.15)] rounded-[20px] overflow-hidden flex flex-col`}
              style={{ zIndex: index + 1 }} 
            >
              {/* IMAGE HEADER */}
              <div className="h-44 w-full relative overflow-hidden">
                <img
                  src={step.img}
                  className="w-full h-full object-cover object-center"
                  alt={step.title}
                />
                <div className="absolute inset-0 bg-black/10" />
              </div>

              {/* CARD BLOCK MAIN CONTENT */}
              <div className={`p-8 flex-1 relative ${step.isDark ? 'bg-[#2b3535] text-white' : 'bg-white text-[#2b3535]'}`}>
                
                {/* Giant Step Indicator Number */}
                <div className="flex items-baseline gap-4">
                  <span className={`text-6xl font-black leading-none tracking-tighter ${step.isDark ? 'text-white/15' : 'text-black/10'}`}>
                    {step.id}
                  </span>
                  <h4 className="text-lg font-bold uppercase tracking-wide leading-tight">
                    {step.title}
                  </h4>
                </div>

                <p className={`mt-4 text-sm leading-relaxed ${step.isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  {step.desc}
                </p>

                <div className={`w-full h-[1px] my-6 ${step.isDark ? 'bg-white/10' : 'bg-black/10'}`} />

                {/* Checked Bullet Point Node list */}
                <ul className="space-y-3.5">
                  {step.bullets.map((bullet: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-3 text-sm font-medium">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#800000] flex items-center justify-center text-white text-xs">
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