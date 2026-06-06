"use client";

import { Link } from "react-router-dom";
import { motion, type Variants } from "framer-motion";
import {
  Wrench,
  Zap,
  Droplet,
  Wind,
  Paintbrush,
  Hammer,
  ArrowRight,
} from "lucide-react";

interface ServiceItem {
  id: string;
  title: string;
  desc: string;
  icon: React.ComponentType<{ className?: string }>;
  iconType: string;
}

/* ⚡ Animated Icon Wrapper */
const AnimatedIcon = ({
  children,
  type,
  index = 0,
}: {
  children: React.ReactNode;
  type: string;
  index?: number;
}) => {
  const animations: Record<string, any> = {
    electrical: {
      rotate: [0, -10, 10, -5, 0],
      scale: [1, 1.08, 1],
    },

    plumbing: {
      y: [0, -6, 0],
    },

    fan: {
      rotate: 360,
    },

    paint: {
      x: [0, 3, -3, 0],
    },

    hammer: {
      rotate: [0, -20, 15, -10, 0],
    },

    default: {
      scale: [1, 1.05, 1],
    },
  };

  const motionKey = animations[type] || animations.default;

  return (
    <motion.div
      initial="rest"
      whileInView="animate"
      whileHover="animate"
      viewport={{ once: false, amount: 0.6 }}
      animate={{
        ...motionKey,
      }}
      transition={{
        repeat: Infinity,
        duration: 2 + index * 0.2, // 👈 important: each item slightly different speed
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
};

export default function HomeServices() {
  const services: ServiceItem[] = [
    {
      id: "01/",
      title: "Renovation",
      desc: "Our renovation services bring new life to your property...",
      icon: Wrench,
      iconType: "default",
    },
    {
      id: "02/",
      title: "Electrical",
      desc: "From wiring to fixture installation...",
      icon: Zap,
      iconType: "electrical",
    },
    {
      id: "03/",
      title: "Plumbing",
      desc: "Our plumbing team handles installation...",
      icon: Droplet,
      iconType: "plumbing",
    },
    {
      id: "04/",
      title: "Air Conditioning",
      desc: "We provide full air conditioning services...",
      icon: Wind,
      iconType: "fan",
    },
    {
      id: "05/",
      title: "Painting",
      desc: "Our painting team provides flawless interior...",
      icon: Paintbrush,
      iconType: "paint",
    },
    {
      id: "06/",
      title: "Carpentry",
      desc: "We provide custom carpentry solutions...",
      icon: Hammer,
      iconType: "hammer",
    },
  ];

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.12 },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 60, damping: 15 },
    },
  };

  return (
    <section className="relative bg-[#f6f2eb] pt-24 pb-28 overflow-hidden">
      {/* TOP CURVE */}
      <div
        className="absolute top-0 left-0 w-full h-16 bg-white"
        style={{ clipPath: "polygon(0 0, 60% 0, 65% 100%, 0 100%)" }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* HEADER */}
        <div className="mb-16 pt-8">
          <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[#800000]">
            <span className="w-4 h-2 bg-[#800000] rounded-sm transform -skew-x-12" />
            our services
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mt-4 text-[#1a2424]">
            EXPLORE <span className="text-[#800000]">OUR</span> <br />
            EXPERT SERVICES
          </h2>
        </div>

        {/* GRID */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
                    {services.map((service, index) => {
            const IconComponent = service.icon;

            return (
                <AnimatedIcon
                key={service.id}
                type={service.iconType}
                index={index}
                >
                <IconComponent className="w-14 h-14 stroke-[1.25]" />
                </AnimatedIcon>
            );
            })}
        </motion.div>

        {/* BUTTON */}
        <div className="mt-16 flex justify-center">
          <Link to="/services">
            <motion.span
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 bg-[#1a2424] hover:bg-[#800000] text-white px-8 py-4 rounded-xl font-bold uppercase text-sm"
            >
              Explore More Services
              <ArrowRight className="w-4 h-4" />
            </motion.span>
          </Link>
        </div>
      </div>
    </section>
  );
}