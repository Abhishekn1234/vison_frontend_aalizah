"use client";

import {Link} from "react-router-dom";
import { motion, type Variants } from "framer-motion";
import { 
  Wrench, 
  Zap, 
  Droplet, 
  Wind, 
  Paintbrush, 
  Hammer, 
  ArrowRight 
} from "lucide-react";

interface ServiceItem {
  id: string;
  title: string;
  desc: string;
  icon: React.ComponentType<{ className?: string }>;
}

export default function HomeServices() {
  const services: ServiceItem[] = [
    {
      id: "01/",
      title: "Renovation",
      desc: "Our renovation services bring new life to your property. From modernizing interiors to enhancing functionality, we provide end-to-end solutions that transform spaces efficiently and professionally.",
      icon: Wrench,
    },
    {
      id: "02/",
      title: "Electrical",
      desc: "From wiring to fixture installation, our electrical services cover all needs. Safety and precision are our top priorities on every single project we manage.",
      icon: Zap,
    },
    {
      id: "03/",
      title: "Plumbing",
      desc: "Our plumbing team handles installation, repairs, and maintenance efficiently. We ensure your water and drainage systems work perfectly without interruptions.",
      icon: Droplet,
    },
    {
      id: "04/",
      title: "Air Conditioning",
      desc: "We provide full air conditioning services, from setup to preventive maintenance. Keeping your indoor climate optimized and healthy all year long.",
      icon: Wind,
    },
    {
      id: "05/",
      title: "Painting",
      desc: "Our painting team provides flawless interior and exterior painting. Using premium coatings to deliver vibrant, long-lasting color transformations.",
      icon: Paintbrush,
    },
    {
      id: "06/",
      title: "Carpentry",
      desc: "We provide custom carpentry solutions including furniture design, custom cabinets, structural framing, and precision wood modifications.",
      icon: Hammer,
    },
  ];

  // Animation configuration constants
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 60, damping: 15 } 
    },
  };

  const iconVariants: Variants = {
    initial: { scale: 1, rotate: 0 },
    hover: { 
      scale: 1.12, 
      rotate: [0, -5, 5, 0],
      transition: { duration: 0.4, ease: "easeInOut" }
    }
  };

  return (
    <section className="relative bg-[#f6f2eb] pt-24 pb-28 overflow-hidden">
      
      {/* 📐 THE TOP ANGLED BACKGROUND CURVE SEPARATOR */}
      <div 
        className="absolute top-0 left-0 w-full h-16 bg-white" 
        style={{ clipPath: "polygon(0 0, 60% 0, 65% 100%, 0 100%)" }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* 📢 HEADER SECTION */}
        <div className="mb-16 pt-8">
          <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[#800000]">
            <span className="w-4 h-2 bg-[#800000] rounded-sm transform -skew-x-12" />
            our services
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mt-4 leading-tight tracking-tight text-[#1a2424]">
            EXPLORE <span className="text-[#800000]">OUR</span> <br />
            EXPERT SERVICES
          </h2>
        </div>

        {/* 🧩 SERVICES GRID MAPPED CARDS */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service: ServiceItem) => {
            const IconComponent = service.icon;

            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                whileHover="hover"
                className="bg-white rounded-2xl p-8 shadow-[0_4px_25px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-shadow duration-300 flex flex-col justify-between min-h-[360px] group border border-transparent hover:border-gray-100"
              >
                <div>
                  {/* Top Header inside card row */}
                  <div className="flex justify-between items-center mb-10">
                    <h3 className="text-xl font-bold text-gray-900 tracking-tight">
                      {service.title}
                    </h3>
                    <span className="text-sm font-medium text-gray-400 font-mono">
                      {service.id}
                    </span>
                  </div>

                  {/* ⚡ HOVER ANIMATING ICON BLOCK */}
                  <div className="flex justify-center items-center py-6">
                    <motion.div 
                      variants={iconVariants}
                      initial="initial"
                      className="text-gray-800 group-hover:text-emerald-600 transition-colors duration-300"
                    >
                      <IconComponent className="w-14 h-14 stroke-[1.25]" />
                    </motion.div>
                  </div>
                </div>

                {/* Lower Paragraph Segment */}
                <div>
                  <div className="w-full h-[1px] bg-gray-100 mb-6" />
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-4 group-hover:text-gray-700 transition-colors">
                    {service.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* 🔗 UNDERNEATH LINK ACTION CONTAINER */}
        <div className="mt-16 flex justify-center">
          <Link to="/services">
            <motion.span
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 bg-[#1a2424] hover:bg-[#800000] text-white px-8 py-4 rounded-xl font-bold tracking-wide uppercase text-sm shadow-lg hover:shadow-xl transition-all cursor-pointer duration-300"
            >
              Explore More Services
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </motion.span>
          </Link>
        </div>

      </div>
    </section>
  );
}