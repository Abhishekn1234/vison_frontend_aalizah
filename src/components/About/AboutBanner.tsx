import FadeIn from "../common/FadeIn";

export default function HeroBanner() {
  return (
    <section className="relative h-[280px] md:h-[400px] lg:h-[470px] overflow-hidden">

      <FadeIn>

        {/* Background Image */}
        <img
          src="./about (2).png"
          alt="About Banner"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* Overlay with clip-path */}
        <div
          className="absolute inset-0  opacity-75 md:opacity-100"
          style={{
            clipPath: "polygon(0 0, 100% 0, 65% 100%, 0% 100%)",
          }}
        />

        {/* Center Content */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-4 text-center">

          {/* Title */}
          <h1 className="
            text-white
            uppercase
            font-black
            tracking-tight
            text-4xl
            md:text-6xl
            lg:text-[110px]
            leading-none
          ">
            About
          </h1>

          {/* Breadcrumb */}
          <div className="
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
          ">
            <span className="text-white font-semibold uppercase text-sm">
              Home
            </span>

            <span className="text-white font-bold">{">"}</span>

            <span className="text-white font-semibold uppercase text-sm">
              About
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

    </section>
  );
}