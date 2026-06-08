import { motion } from "framer-motion";
import { services } from "../common/services";

function ServiceCard({ item }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="group bg-white rounded-2xl p-6 shadow-[0_10px_30px_rgba(0,0,0,0.04)] cursor-pointer transition-all duration-500 ease-out hover:bg-[#800000] hover:shadow-[0_20px_40px_rgba(128,0,0,0.15)] flex flex-col h-full w-full"
    >
      {/* Number Label */}
      <div className="text-[#800000] group-hover:text-white/80 text-sm font-medium mb-3 tracking-wider transition-colors duration-500">
        {item.id.toString().padStart(2, '0')}/
      </div>

      {/* Responsive Image Container - Shrinks / Goes "inside" on hover */}
      <div className="w-full aspect-[4/3] overflow-hidden rounded-xl bg-gray-100 transition-all duration-500 ease-out group-hover:scale-95 group-active:scale-90 origin-center">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
      </div>

      {/* Card Content */}
      <div className="pt-6 pb-2 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-black group-hover:text-white mb-2 tracking-tight transition-colors duration-500">
          {item.title}
        </h3>
        <p className="text-[#800000] group-hover:text-white/90 text-sm leading-relaxed mt-auto transition-colors duration-500">
          {item.description || "Our team handles professional services with top-tier quality and reliability."}
        </p>
      </div>
    </motion.div>
  );
}

export default function ServicesProfessional() {
  return (
    <section className="bg-[#fcfaf7] py-16 md:py-24 min-h-screen flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
        
        {/* Header Section */}
        <div className="mb-12 md:mb-16 max-w-2xl">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-5 h-2 bg-[#2d7d46] rounded-sm transform -skew-x-12"></span>
            <p className="text-sm font-semibold tracking-wide text-[#800000] uppercase">
              comprehensive solutions
            </p>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-black uppercase tracking-tight leading-[0.95]">
            <span className="text-[#800000] block mb-1 font-normal">OUR</span>
            PROFESSIONAL <br /> SERVICES
          </h2>
        </div>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch">
          {services.map((item) => (
            <ServiceCard key={item.id} item={item} />
          ))}
        </div>

        {/* CTA Expert Team Link Section */}
        <div className="mt-16 text-center border-t border-gray-200/60 pt-10">
          <p className="text-base md:text-lg text-gray-600 font-medium tracking-tight">
            Need help choosing the right service? Call our expert team today at{" "}
          <a
  href="https://wa.me/971551084366"
  target="_blank"
  rel="noopener noreferrer"
  className="hover:text-[#800000] transition-colors duration-300"
>
  +971-551084366
</a>
          </p>
        </div>
        
      </div>
    </section>
  );
}