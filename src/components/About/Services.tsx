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
    <section className="pb-20">
        <FadeIn>
             <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl md:text-5xl font-black mb-10">
          OUR SERVICES
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {services.map((service) => (
            <div
              key={service}
              className="bg-white rounded-3xl p-6 shadow-sm"
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