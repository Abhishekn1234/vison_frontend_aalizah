import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Button from "../common/Button";
import {useNavigate} from "react-router-dom";
export default function Whatweofferservices() {
  const ref = useRef<HTMLDivElement>(null);
  const navigate=useNavigate();
  // Optimized trigger margin for better scroll behavior on all screens
  const isInView = useInView(ref, {
    once: true,
    margin: "-20%", 
  });

  return (
    <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden bg-gray-100">
      <div
        ref={ref}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 lg:gap-20 items-center"
      >
        {/* LEFT IMAGE CONTAINER */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          // order-2 on mobile pushes image below text, order-1 brings it left on desktop
          className="w-full h-full flex items-center justify-center order-2 md:order-1"
        >
          {/* Overflow-hidden wrapper keeps the image zoom constrained within its borders */}
          <div className="w-full h-full overflow-hidden rounded-2xl shadow-lg group cursor-pointer">
            <img
              src="https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=80"
              alt="Reliable technical and maintenance services in Dubai"
              // Added transition-transform and group-hover scaling for a sleek hover effect
              className="w-full max-h-[350px] sm:max-h-[450px] md:max-h-[550px] object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />
          </div>
        </motion.div>

        {/* RIGHT CONTENT CONTAINER */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          className="flex flex-col items-start order-1 md:order-2"
        >
          {/* Small label with Maroon Slash Accent */}
          <div className="flex items-center gap-2 mb-4 md:mb-5">
            <span className="w-3 h-[5px] bg-[#800000] rounded-sm transform -skew-x-12" />
            <p className="text-xs sm:text-sm font-semibold text-gray-800 tracking-wide uppercase">
              what we offer
            </p>
          </div>

          {/* Responsive Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-black">
            <span className="text-[#800000] block">RELIABLE</span>
            <span className="text-[#800000] block">TECHNICAL &</span>
            <span className="block">MAINTENANCE</span>
            <span className="block">SERVICES IN</span>
            <span className="block">DUBAI</span>
          </h2>

          {/* Paragraph */}
          <p className="mt-4 sm:mt-5 md:mt-6 text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed font-normal max-w-xl">
            From plumbing to renovation,{" "}
            <span className="font-semibold text-gray-900">
              Aalizah Vision Technical Services
            </span>{" "}
            delivers quality-driven, affordable solutions for homes and
            businesses across Dubai and the UAE.
          </p>

          {/* Button Container */}
          <div className="mt-6 sm:mt-8 w-full sm:w-auto">
            <Button
            onClick={()=>navigate('/contact')}
              variant="primary"
              className="w-full sm:w-auto bg-[#2D3748] hover:bg-[#1A202C] text-white px-8 py-3.5 sm:py-4 rounded-lg flex items-center justify-center gap-2 text-xs sm:text-sm font-bold tracking-wider transition-all duration-200 shadow-sm hover:shadow-md"
            >
              GET A FREE QUOTE
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}