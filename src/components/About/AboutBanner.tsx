
import FadeIn from "../common/FadeIn";


export default function HeroBanner() {
  return (
    <section className="relative h-[280px] md:h-[400px] lg:h-[470px] overflow-hidden">
     <FadeIn>
      {/* Background */}
      <img
        src="./About us banner.png"
        alt="About Banner"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">

        <h1
          className="
            text-white
            uppercase
            font-black
            tracking-tight
            text-5xl
            md:text-7xl
            lg:text-[110px]
            leading-none
          "
        >
          About
        </h1>

        {/* Breadcrumb Box */}
        <div
          className="
            mt-5
            flex
            items-center
            gap-4
            px-6
            py-4
            rounded-2xl
            border
            border-white/20
            bg-[#6c3027]/70
            backdrop-blur-sm
          "
        >
          <span className="text-white font-semibold uppercase text-sm">
            Home
          </span>

          <span className="text-white font-bold">{">"}</span>

          <span className="text-white font-semibold uppercase text-sm">
            About
          </span>
        </div>
      </div>

      {/* Bottom White Shape */}
      <div
        className="
          absolute
          bottom-0
          left-0
          h-12
          md:h-16
          w-[40%]
          bg-white
          rounded-tr-[40px]
          md:rounded-tr-[70px]
          z-20
        "
      />
      </FadeIn>
    </section>
  );
}