"use client";

import { motion } from "framer-motion";

export default function ContactHero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative h-[300px] md:h-[400px] bg-cover bg-center flex flex-col justify-center items-center text-white px-4 overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,.7), rgba(0,0,0,.7)), url('/contact.jpg')",
      }}
    >
      {/* Content */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-4xl md:text-6xl font-bold tracking-tight text-center mb-4"
      >
        GET IN TOUCH
      </motion.h1>

      {/* Breadcrumb */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="flex items-center gap-2 bg-black/40 backdrop-blur-sm px-4 py-2 rounded-md text-xs font-semibold tracking-wider uppercase border border-white/10"
      >
        <span className="text-gray-400">Home</span>
        <span className="text-gray-400">&gt;</span>
        <span className="text-white">Get In Touch</span>
      </motion.div>

      {/* Bottom Left Curve */}
      <div
        className="absolute bottom-0 left-0 bg-gray-100"
        style={{
          width: "180px",
          height: "90px",
          borderTopRightRadius: "100px",
        }}
      />

      {/* Optional Small Maroon Accent */}
      <div
        className="absolute bottom-0 left-0 bg-[#800000]"
        style={{
          width: "70px",
          height: "8px",
          borderTopRightRadius: "20px",
        }}
      />
    </motion.div>
  );
}