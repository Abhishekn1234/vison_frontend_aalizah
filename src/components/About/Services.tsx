import FadeIn from "../common/FadeIn";

const services = [
  "Plumbing & Sanitary Contracting",
  "Floor and Wall Tiling Works",
  "Carpentry & Flooring Contracting",
  "Partitions & False Ceiling",
  "Electrical Fittings Services",
  "Sanitary Installation",
  "Building Cleaning Services",
  "Facilities Management",
  "Air Conditioning Maintenance"
];

export default function Services() {
  return (
    <section className="pb-20 bg-[#f5f5f5] font-sans">
      <FadeIn>
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black mb-10 text-black uppercase tracking-tight">OUR SERVICES</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service}
                className="bg-white rounded-2xl p-6 shadow-sm text-[#2E373A] font-bold text-lg hover:bg-[#1EA665] hover:text-white transition-all duration-300 cursor-default"
              >
                {service}
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}