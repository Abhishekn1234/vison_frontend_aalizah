import { motion } from "framer-motion";

const reasons = [
  {
    id: "01",
    title: "Quality Workmanship",
    description:
      "Every service we provide meets the highest standards of quality, ensuring lasting results that speak for themselves.",
    image:
      "https://plus.unsplash.com/premium_photo-1661601269411-9fbd599988ff?q=80&w=600&auto=format&fit=crop", // Link to Woman/Plumber Image
  },
  {
    id: "02",
    title: "Skilled & Certified Team",
    description:
      "Our experienced technicians are trained to handle all kinds of maintenance, installation, and repair tasks safely and efficiently.",
    image:
      "https://plus.unsplash.com/premium_photo-1683141151608-20d046f4044b?q=80&w=600&auto=format&fit=crop", // Link to Tech/Clipboard Image
  },
  {
    id: "03",
    title: "Fast & Dependable Service",
    description:
      "We respect your time — that's why we arrive on schedule and complete every job quickly without compromising quality.",
    image:
      "https://plus.unsplash.com/premium_photo-1661306536966-d3065c697858?q=80&w=600&auto=format&fit=crop", // Link to Handshake Image
  },
];

// Reusable animated container with a slight parallax depth effect on image container
function ReasonCard({ item }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="group flex flex-col items-center text-center focus:outline-none focus:ring-2 focus:ring-[#800000] focus:ring-offset-2 rounded-3xl p-4 transition-all duration-300"
    >
      {/* Circular Image Container with Hover Effects */}
      <div className="relative mb-[-12px] md:mb-[-16px] z-10 transition-transform duration-500 ease-out group-hover:scale-105">
        <div className="aspect-square w-40 h-40 md:w-56 md:h-56 overflow-hidden rounded-full border-[8px] border-white shadow-xl shadow-[#800000]/10 transition-transform duration-500 ease-out group-hover:shadow-[#800000]/15">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
          />
        </div>

        {/* Number Badge - Now in Maroon */}
        <div className="absolute left-1/2 -bottom-4 -translate-x-1/2 bg-[#800000] text-white rounded-full p-2.5 md:p-3 shadow-lg flex items-center justify-center font-bold text-xs md:text-base w-9 h-9 md:w-11 md:h-11">
          {item.id}
        </div>
      </div>

      {/* Card Content - Transition bg to Maroon on hover */}
      <div className="bg-white px-6 md:px-10 pt-10 pb-8 md:pt-14 md:pb-12 rounded-[24px] shadow-sm flex flex-col flex-grow w-full h-full transition-colors duration-500 hover:bg-[#800000] group-hover:shadow-[0_20px_40px_rgba(128,0,0,0.15)]">
        <h3 className="text-xl md:text-2xl font-extrabold text-gray-950 mb-3 md:mb-4 group-hover:text-white transition-colors duration-500">
          {item.title}
        </h3>
        <p className="text-sm md:text-base text-gray-700/90 leading-relaxed font-medium mt-auto group-hover:text-white/90 transition-colors duration-500">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function Whyservices() {
  return (
    <section className="bg-gray-100 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
        {/* Header Section */}
        <header className="mb-14 md:mb-20 text-center flex flex-col items-center">
          {/* Tagline Badge */}
          <div className="flex items-center gap-2 mb-4">
            <span className="w-5 h-2 bg-[#800000] rounded-sm transform -skew-x-12"></span>
            <p className="text-sm font-semibold tracking-wide text-[#800000] uppercase">
              why homeowners & businesses trust us
            </p>
          </div>

          {/* Large Hero Title - Bold, Tight Tracking */}
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-gray-950 uppercase tracking-tighter leading-[0.9] max-w-4xl mx-auto">
            Delivering <span className="text-[#800000]">Excellence</span> <br /> Through Every Project
          </h2>
        </header>

        {/* Dynamic Grid Layout (Match the reference) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-16 gap-x-8 md:gap-x-10 items-stretch">
          {reasons.map((item) => (
            <ReasonCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}