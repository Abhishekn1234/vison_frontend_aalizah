import { useEffect } from "react";
import FadeIn from "../common/FadeIn";

export default function TeamHero() {
  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700;800&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  return (
    <div className="relative w-full min-h-[50vh] md:min-h-[65vh] lg:min-h-[75vh] overflow-hidden font-barlow">

      <FadeIn>
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/Join our team.png')",
          }}
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/55" />

        {/* White angled cut */}
        <div className="absolute bottom-0 left-0 h-12 md:h-20 w-[45%] bg-white rounded-tr-[40px] md:rounded-tr-[70px] z-20" />

        {/* Content */}
        <div className="relative z-30 mt-40 flex flex-col items-center justify-center text-center h-full px-4">

          {/* Title */}
          <h1 className="
            text-white uppercase leading-none tracking-wide
            text-4xl sm:text-5xl md:text-6xl lg:text-7xl
            font-extrabold
          ">
            Join Our Team
          </h1>

          {/* Breadcrumb */}
          <div className="
            mt-5 flex items-center gap-2
            bg-white/15 border border-white/30
            rounded-full px-5 py-2
            backdrop-blur-sm
          ">
            <span className="text-white/80 uppercase text-[11px] font-bold tracking-widest">
              Home
            </span>

            <span className="text-white/60 text-xs">&gt;</span>

            <span className="text-white uppercase text-[11px] font-bold tracking-widest">
              Join Our Team
            </span>
          </div>

        </div>
      </FadeIn>
    </div>
  );
}