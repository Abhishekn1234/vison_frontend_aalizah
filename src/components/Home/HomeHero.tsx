import Button from "../common/Button";
import FadeIn from "../common/FadeIn";




export default function HomeHero() {
  return (
    <section className="relative w-full min-h-[90vh] bg-slate-900 text-white overflow-hidden flex items-center">
      <FadeIn>
      {/* 1. Main Background Image (Skyscrapers & Workers) */}
      <div 
        className="absolute inset-0 bg-cover bg-center md:bg-[right_center]"
        style={{ 
          backgroundImage: `url('/path-to-your-dubai-skyline-image.jpg')` 
        }}
      />

      {/* 2. Dark Geometric Overlay (Left Side Angle) */}
      {/* Uses a responsive clip-path to match the sharp diagonal cutout */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-slate-950 via-[#0B1528] to-[#050B14] opacity-95 md:opacity-100"
        style={{
          clipPath: 'polygon(0 0, 100% 0, 65% 100%, 0% 100%)'
        }}
      />

      {/* 3. Hero Content Container */}
      <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-32 w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Side: Texts & Call to Actions */}
        <div className="lg:col-span-8 flex flex-col justify-center space-y-6 max-w-3xl">
          
          {/* Tagline */}
          <p className="text-[#800000] font-medium tracking-wide text-sm md:text-base uppercase">
            reliable maintenance & technical solutions in dubai.
          </p>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1] text-white font-sans uppercase">
            Keeping Your <br className="hidden sm:inline" />
            Home And <br />
            Business <br />
            Running <br />
            Smoothly
          </h1>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
            {/* Green Button */}
            <Button className="flex items-center justify-center gap-2 bg-[#800000] hover:bg-[#059669] text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 text-sm md:text-base tracking-wider uppercase shadow-lg">
              Get A Free Quote 
             
            </Button>

            {/* White Button */}
            <Button className="flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-slate-900 font-bold px-8 py-4 rounded-xl transition-all duration-300 text-sm md:text-base tracking-wider uppercase shadow-lg" variant="none">
              Explore Our Services
           
            </Button>
          </div>

        </div>

        {/* Right Side: Bottom Angled Inset Image (Toolbelt/Worker details) */}
        {/* This matches the floating cut-out preview at the bottom center of the screenshot */}
        <div className="hidden lg:block absolute bottom-0 left-[35%] w-[25rem] h-[15rem] overflow-hidden z-20 shadow-2xl border-t-4 border-l-4 border-slate-950"
             style={{ clipPath: 'polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%)' }}>
          <img 
            src="/path-to-your-handyman-image.jpg" 
            alt="Maintenance worker close up" 
            className="w-full h-full object-cover"
          />
        </div>

      </div>

      {/* Decorative Bottom Curve Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-white hidden md:block"
           style={{ clipPath: 'polygon(0 100%, 35% 100%, 38% 0, 0 0)' }}>
      </div>
   </FadeIn>
    </section>
  );
}