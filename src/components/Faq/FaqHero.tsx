import { Link } from "react-router-dom";
import FadeIn from "../common/FadeIn";

export default function FaqHero() {
  return (
   <div className="relative w-full h-[60vh] overflow-hidden">
  <FadeIn>
    {/* Background Image */}
    <div className="absolute inset-0 z-0">
      <img
        src="/FAQ.jpeg"
        alt="FAQ Background"
        className="w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      
      <div
          className="absolute inset-0 opacity-75 md:opacity-100 z-10"
          style={{
            clipPath: "polygon(0 0, 100% 0, 65% 100%, 0% 100%)",
          }}
        />
    </div>

    {/* Content */}
    <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 mt-40">
      <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tight uppercase mb-4">
        FAQS
      </h1>

      <div className="inline-flex items-center gap-2 border border-white/20 bg-black/40 backdrop-blur-sm px-5 py-2.5 rounded-xl">
        <Link
          to="/"
          className="text-[11px] font-black tracking-widest text-gray-300 uppercase hover:text-white"
        >
          HOME
        </Link>

        <span className="text-gray-400">&gt;</span>

        <span className="text-[11px] font-black tracking-widest text-white uppercase">
          FAQS
        </span>
      </div>
    </div>
      <div
          className="absolute bottom-0 left-0 right-0 h-14 bg-white hidden md:block z-10"
          style={{
            clipPath: "polygon(0 100%, 35% 100%, 38% 0, 0 0)",
          }}
        />

  </FadeIn>
</div>
  );
}
