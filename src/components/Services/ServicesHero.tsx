
export default function ServicesHero() {
  return (
    <section className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden">
      
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1600&q=80')",
        }}
      />

      {/* Dark Overlay */}
      
      <div
          className="absolute inset-0 opacity-75 md:opacity-100 z-10"
          style={{
            clipPath: "polygon(0 0, 100% 0, 65% 100%, 0% 100%)",
          }}
        />

      {/* Content */}
      <div className="relative z-10 text-center text-white">
        <h1 className="text-5xl md:text-6xl font-bold tracking-widest">
          SERVICES
        </h1>

        {/* Breadcrumb */}
        <div className="mt-4 inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md text-sm">
          <span className="opacity-80">HOME</span>
          <span>›</span>
          <span className="font-semibold">SERVICES</span>
        </div>
      </div>
        <div
          className="absolute bottom-0 left-0 right-0 h-14 bg-white hidden md:block z-10"
          style={{
            clipPath: "polygon(0 100%, 35% 100%, 38% 0, 0 0)",
          }}
        />

      {/* Bottom White Curve */}
      
    </section>
  );
}