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
}: {
  children: React.ReactNode;
  type: string;
}) => {
  const animations: Record<string, any> = {
    electrical: {
      animate: {
        rotate: [0, -12, 12, -6, 0],
        scale: [1, 1.08, 1],
        transition: {
          repeat: Infinity,
          duration: 2,
          ease: "easeInOut",
        },
      },
    },

    plumbing: {
      animate: {
        y: [0, -5, 0],
        transition: {
          repeat: Infinity,
          duration: 1.4,
          ease: "easeInOut",
        },
      },
    },

    fan: {
      animate: {
        rotate: 360,
        transition: {
          repeat: Infinity,
          duration: 1.2,
          ease: "linear",
        },
      },
    },

    paint: {
      animate: {
        x: [0, 3, -3, 0],
        transition: {
          repeat: Infinity,
          duration: 2,
          ease: "easeInOut",
        },
      },
    },

    hammer: {
      animate: {
        rotate: [0, -25, 18, -10, 0],
        transition: {
          repeat: Infinity,
          duration: 1.6,
          ease: "easeInOut",
        },
      },
    },

    default: {
      animate: {
        scale: [1, 1.05, 1],
        transition: {
          repeat: Infinity,
          duration: 2,
          ease: "easeInOut",
        },
      },
    },
  };

  return <motion.div animate={animations[type]?.animate || animations.default.animate}>{children}</motion.div>;
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
          {services.map((service) => {
            const IconComponent = service.icon;

            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                className="bg-white rounded-2xl p-8 shadow-[0_4px_25px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-shadow duration-300 flex flex-col justify-between min-h-[360px] group"
              >
                {/* TOP */}
                <div>
                  <div className="flex justify-between items-center mb-10">
                    <h3 className="text-xl font-bold text-gray-900">
                      {service.title}
                    </h3>
                    <span className="text-sm font-mono text-gray-400">
                      {service.id}
                    </span>
                  </div>

                  {/* ICON */}
                  <div className="flex justify-center py-6 text-gray-800 group-hover:text-[#800000] transition-colors">
                    <AnimatedIcon type={service.iconType}>
                      <IconComponent className="w-14 h-14 stroke-[1.25]" />
                    </AnimatedIcon>
                  </div>
                </div>

                {/* DESCRIPTION */}
                <div>
                  <div className="w-full h-[1px] bg-gray-100 mb-6" />
                  <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700">
                    {service.desc}
                  </p>
                </div>
              </motion.div>
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