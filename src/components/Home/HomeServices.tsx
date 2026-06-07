"use client";

import { Link, useNavigate } from "react-router-dom";
import { motion} from "framer-motion";
import {
 
  ArrowRight,
  
} from "lucide-react";
import { services } from "../common/services";

export default function HomeServices(){
  const navigate=useNavigate();
  return (
    <section className="relative bg-[#f6f2eb] pt-24 pb-28 overflow-hidden">
      {/* CURVE */}
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.slice(0,6).map((service, index) => {
          

            return (
              <motion.div
  key={service.id}
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{
    duration: 0.8,
    delay: index * 0.1,
  }}
  whileHover={{
    y: -12,
  }}
  className="relative h-[420px] overflow-hidden rounded-3xl cursor-pointer group"
>
  {/* Background Image */}
  <motion.img
    src={service.image}
    alt={service.title}
    initial={{ scale: 1.2 }}
    whileInView={{ scale: 1 }}
    whileHover={{ scale: 1.12 }}
    transition={{
      duration: 1.2,
      ease: "easeOut",
    }}
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/10" />

  {/* Maroon Hover Overlay */}
  <div className="absolute inset-0 bg-[#800000]/0 group-hover:bg-[#800000]/20 transition-all duration-500" />

  {/* Service ID */}
  <div className="absolute top-6 right-6 z-20">
    <span className="text-white/80 text-sm font-mono">
      {service.id}
    </span>
  </div>

  {/* Content */}
  <div className="absolute bottom-0 left-0 right-0 z-20 p-8">
    <h3 className="text-3xl font-bold text-white mb-4">
      {service.title}
    </h3>

    <div className="w-12 h-[3px] bg-[#800000] mb-5 group-hover:w-24 transition-all duration-500" />

    <p className="text-white/80 leading-relaxed text-sm">
      {service.desc}
    </p>

    <motion.div
      initial={{ x: -20, opacity: 0 }}
      whileHover={{ x: 0, opacity: 1 }}
      className="mt-6 flex items-center gap-2 text-white font-semibold"
      onClick={()=>navigate('/services')}
    >
      Learn More →
    </motion.div>
  </div>
</motion.div>
            );
          })}
        </div>

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