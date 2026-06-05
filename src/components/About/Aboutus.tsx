import FadeIn from "../common/FadeIn";

export default function AboutUs() {
  return (
    <section className="py-20 bg-[#f5f5f5] font-sans">
      <FadeIn>
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black mb-8 text-black uppercase tracking-tight">ABOUT US</h2>
          <div className="bg-white rounded-3xl p-8 shadow-sm">
            <p className="text-[#4E5659] text-lg md:text-xl leading-relaxed font-medium">
              Welcome to Aalizah Vision Technical Services, your trusted partner
              for reliable, innovative, and high-quality technical solutions.
            </p>
            <p className="text-[#4E5659] text-lg md:text-xl leading-relaxed mt-6 font-medium">
              We specialize in delivering professional technical and maintenance
              services tailored to residential, commercial, and industrial needs
              with a commitment to excellence, safety, and customer
              satisfaction.
            </p>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}