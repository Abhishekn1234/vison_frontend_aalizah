import  { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Button from '../common/Button';
import FadeIn from '../common/FadeIn';

export default function Homeourwork() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  // Projects data from image_8a8dc4.png
  const projects = [
    {
      title: "The Residences 1 Apartment Renovation",
      tags: "carpentry, electrical, flooring, painting, plumbing, renovation",
      image: "/path-to-residences-image.jpg"
    },
    {
      title: "Marina Apartments Renovation",
      tags: "carpentry, electrical, flooring, painting, plumbing, renovation",
      image: "/path-to-marina-image.jpg"
    },
    {
      title: "Palm Jumeirah Villa Renovation",
      tags: "carpentry, electrical, flooring, painting, plumbing, renovation",
      image: "/path-to-palm-villa-image.jpg"
    },
    {
      title: "W Residence Apartment Renovation",
      tags: "carpentry, electrical, flooring, painting, plumbing, renovation",
      image: "/path-to-w-residence-image.jpg"
    }
  ];

  return (
    <section className="w-full bg-[#f9f8f6] py-16 md:py-24 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
        {/* ================= HEADER SECTION ================= */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          {/* Centered Badge */}
          <div className="flex items-center gap-3 text-slate-900 font-bold text-xs md:text-sm tracking-widest uppercase">
            <span className="w-4 h-2 bg-emerald-500 rounded-xs transform -skew-x-12 inline-block"></span>
            our work
            <span className="w-4 h-2 bg-emerald-500 rounded-xs transform -skew-x-12 inline-block"></span>
          </div>

          {/* Three-Line Luxury Title Layout */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-black leading-[1.05] uppercase max-w-3xl">
            Excellence In <br />
            <span className="text-gray-400 block my-1">Every Project</span>
            We Deliver
          </h2>
        </div>

        {/* ================= SCROLL ANIMATED CARDS GRID ================= */}
        <div 
          ref={containerRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              // Starts invisible and offset to the right
              initial={{ x: 100, opacity: 0 }}
              // Animates to center and fully visible when scrolled into view
              animate={isInView ? { x: 0, opacity: 1 } : {}}
              transition={{
                duration: 0.8,
                delay: index * 0.15, // Creates the sequential right-to-left cascade effect
                ease: [0.16, 1, 0.3, 1] // Ultra smooth clean deceleration curve
              }}
              whileHover={{ y: -8 }} // Clean subtle lift effect on hover
              className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-md bg-zinc-900 group cursor-pointer"
            >
              {/* Card Project Image */}
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 brightness-[0.65]"
              />

              {/* Dark Gradient Overlay to match image_8a8dc4.png */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80" />

              {/* Content Card Layout */}
             <div className="absolute inset-0 p-6 flex flex-col justify-between text-white z-10">
  
  {/* Top */}
  <div className="space-y-2">
    <p className="text-gray-300 text-xs sm:text-sm font-medium leading-relaxed tracking-wide lowercase line-clamp-2 max-w-[90%]">
      {project.tags}
    </p>
    <div className="w-12 h-[1px] bg-white/30" />
  </div>

  {/* Bottom */}
  <div>
    <h3 className="text-xl md:text-2xl font-black tracking-tight leading-snug uppercase max-w-[90%] transition-all duration-500 group-hover:-translate-y-4">
      {project.title}
    </h3>

    {/* View Details Button */}
    <div className="overflow-hidden">
      <Button
        className="
          mt-4
          px-5
          py-2.5
          bg-emerald-500
          text-white
          text-sm
          font-semibold
          rounded-full
          transition-all
          duration-500
          opacity-0
          translate-y-6
          group-hover:opacity-100
          group-hover:translate-y-0
          hover:bg-emerald-600
        "
      >
        View Details
      </Button>
    </div>
  </div>

</div>
            </motion.div>
          ))}
        </div>
        </FadeIn>

      </div>
    </section>
  );
}