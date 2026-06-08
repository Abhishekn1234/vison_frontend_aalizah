import FadeIn from "../common/FadeIn";
import { Link } from "react-router-dom";

export default function HomeHero() {
  return (
    <section className="relative w-full min-h-[90vh] bg-slate-900 text-white overflow-hidden flex items-center">
      <FadeIn>
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center md:bg-[right_center] opacity-60 pointer-events-none"
          style={{
            backgroundImage: `url('/home.jpeg')`,
          }}
        />

        {/* Overlay */}
        <div
          className="absolute inset-0 opacity-75 md:opacity-100 pointer-events-none"
          style={{
            clipPath: "polygon(0 0, 100% 0, 65% 100%, 0% 100%)",
          }}
        />

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-32 w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 flex flex-col justify-center space-y-6 max-w-3xl">
            <p className="text-[#800000] font-medium tracking-wide text-sm md:text-base uppercase">
              Reliable Technical Expertise for Every Property in Dubai.
            </p>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1] text-white font-sans uppercase">
              Your One-Stop <br className="hidden sm:inline" />
              Solution for <br />
              Home And
              <br />
              Business
              <br />
              Maintenance
            </h1>

            {/* CTA Links */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <Link
                to="/contact"
                className="flex items-center justify-center gap-2 bg-[#800000] hover:bg-[#059669] text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 text-sm md:text-base tracking-wider uppercase shadow-lg text-center"
              >
                Get A Free Quote
              </Link>

              <Link
                to="/services"
                className="flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-slate-900 font-bold px-8 py-4 rounded-xl transition-all duration-300 text-sm md:text-base tracking-wider uppercase shadow-lg text-center"
              >
                Explore Our Services
              </Link>
            </div>
          </div>

          {/* Decorative Angled Box */}
          {/* <div
            className="hidden lg:block absolute bottom-0 left-[35%] w-[25rem] h-[15rem] overflow-hidden z-20 shadow-2xl border-t-4 border-l-4 border-slate-950 pointer-events-none"
            style={{
              clipPath: "polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%)",
            }}
          /> */}
        </div>

        {/* Bottom Shape */}
        <div
          className="absolute bottom-0 left-0 right-0 h-12 bg-white hidden md:block pointer-events-none"
          style={{
            clipPath: "polygon(0 100%, 35% 100%, 38% 0, 0 0)",
          }}
        />
      </FadeIn>
    </section>
  );
}