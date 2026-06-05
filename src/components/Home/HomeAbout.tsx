import Button from "../common/Button";
import FadeIn from "../common/FadeIn";


export default function HomeAbout() {
  return (
    <section className="w-full bg-[#f9f8f6] py-16 md:py-24 font-sans text-slate-900 overflow-hidden">
            <FadeIn>
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
  
        {/* ================= LEFT SIDE: IMAGES & STATS ================= */}
        <div className="lg:col-span-5 relative w-full flex flex-col">
          {/* Background Kitchen Image Box */}
          <div className="relative w-full aspect-[4/3] sm:aspect-square bg-zinc-100 rounded-2xl overflow-hidden shadow-sm">
            <img 
              src="/path-to-kitchen-background.jpg" 
              alt="Kitchen interior background" 
              className="w-full h-full object-cover brightness-75"
            />
            
            {/* The 500+ Stats Overlay Box inside the image */}
            <div className="absolute bottom-0 left-0 bg-slate-950/40 backdrop-blur-xs p-6 md:p-8 text-white w-full sm:w-72 rounded-tr-2xl">
              <div className="text-5xl md:text-6xl font-black tracking-tight flex items-center">
                500<span className="text-emerald-400 ml-1 font-light">+</span>
              </div>
            </div>
          </div>

          {/* Handyman Cutout Layered on Top */}
          {/* Negative margins allow the drill and tools to break outside constraints seamlessly */}
          <div className="absolute inset-x-0 -bottom-10 flex justify-center pointer-events-none z-10">
            <img 
              src="/path-to-handyman-cutout.png" 
              alt="Smiling professional handyman holding a drill" 
              className="w-auto h-[110%] sm:h-[120%] object-contain drop-shadow-xl translate-y-4"
            />
          </div>

          {/* Text under the 500+ stat, aligned with the left edge */}
          <div className="mt-14 sm:mt-16 text-slate-900 font-bold text-lg md:text-xl leading-snug tracking-tight max-w-[200px]">
            Satisfied <br />
            Customers <br />
            Across Dubai
          </div>
        </div>


        {/* ================= RIGHT SIDE: CONTENT ================= */}
        <div className="lg:col-span-7 flex flex-col space-y-8">
          
          {/* Small Badge */}
          <div className="flex items-center gap-2 text-slate-900 font-bold text-sm tracking-wider uppercase">
            <span className="w-4 h-2 bg-emerald-500 rounded-xs transform -skew-x-12 inline-block"></span>
            about us
          </div>

          {/* Main Giant Heading */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-black leading-[1.05] uppercase">
            Delivering <br />
            Quality <br />
            <span className="text-gray-400 block my-1">Service</span>
            Every Time
          </h2>

          {/* Mission & Vision Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
            {/* Our Mission */}
            <div className="space-y-3">
              <h3 className="text-xl font-bold tracking-tight text-black">Our Mission</h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed font-normal">
                Our mission is to deliver reliable, affordable, and high-standard home 
                maintenance solutions while building lasting relationships with our 
                customers through honesty and excellence.
              </p>
            </div>

            {/* Our Vision */}
            <div className="space-y-3">
              <h3 className="text-xl font-bold tracking-tight text-black">Our Vision</h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed font-normal">
                To become Dubai's most trusted home services provider by ensuring quality, 
                safety, and satisfaction in every project we undertake.
              </p>
            </div>
          </div>

          {/* Thin Divider Line */}
          <hr className="border-gray-200 w-full pt-2" />

          {/* Quote & Phone Number Row */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            {/* Quote Block */}
            <p className="text-gray-400 text-xs md:text-sm italic leading-relaxed max-w-md font-medium">
              “We believe every home deserves expert care. From repairs to cleaning, we make 
              your life easier. Contact our team today for reliable service done right.”
            </p>

            {/* Phone Number Callout */}
            <a 
              href="tel:+97142945001" 
              className="flex items-center gap-3 shrink-0 group"
            >
              <div className="w-12 h-12 bg-[#232E3A] text-white rounded-full flex items-center justify-center transition-transform group-hover:scale-105 shadow-md">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M21.384 17.791l-3.75-3.437a1.251 1.251 0 0 0-1.743.044l-1.545 1.545c-.443-.24-1.045-.613-1.68-1.248-.634-.634-1.008-1.236-1.247-1.68l1.545-1.545a1.245 1.245 0 0 0 .044-1.743L9.571 4.02a1.25 1.25 0 0 0-1.724-.034l-2.02 1.834c-.818.744-1.157 1.87-.872 2.955.748 2.85 2.801 6.275 6.078 9.552 3.277 3.277 6.702 5.33 9.552 6.078a3.11 3.11 0 0 0 2.955-.872l1.834-2.02a1.25 1.25 0 0 0-.03-.172z"/>
                </svg>
              </div>
              <span className="text-xl md:text-2xl font-black text-[#10B981] tracking-tight whitespace-nowrap">
                +971 4 294 5001
              </span>
            </a>
          </div>

          {/* Contact Button */}
          <div className="pt-4">
            <Button className="inline-flex items-center justify-center gap-2 bg-[#232E3A] hover:bg-slate-800 text-white font-bold px-7 py-4 rounded-lg transition-colors text-sm tracking-wider uppercase">
              Contact Our Team
             
            </Button>
          </div>

        </div>
        
      </div>
      </FadeIn>
    </section>
  );
}
