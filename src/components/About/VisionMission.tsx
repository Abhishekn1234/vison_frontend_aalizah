import FadeIn from "../common/FadeIn";

export default function VisionMission() {
  return (
    <section className="pb-24 bg-[#f5f5f5] font-sans">
      <FadeIn>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-sm">
              <h3 className="text-3xl md:text-4xl font-black mb-6 text-black uppercase tracking-tight">
                OUR VISION
              </h3>
              <p className="text-[#4E5659] text-lg leading-relaxed font-medium">
                To become a leading technical services company recognized for
                innovation, quality workmanship and customer-focused solutions.
              </p>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-sm">
              <h3 className="text-3xl md:text-4xl font-black mb-6 text-black uppercase tracking-tight">
                OUR MISSION
              </h3>
              <ul className="space-y-4 text-[#4E5659] text-lg font-medium">
                <li>Provide dependable technical services.</li>
                <li>Maintain highest safety standards.</li>
                <li>Deliver timely solutions.</li>
                <li>Build lasting client relationships.</li>
              </ul>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}