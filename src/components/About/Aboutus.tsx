import FadeIn from "../common/FadeIn";

export default function AboutUs() {
  return (
    <section className="py-20">
        <FadeIn>
              <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl md:text-5xl font-black mb-8">
          ABOUT US
        </h2>

        <div className="bg-white rounded-3xl p-8 shadow-sm">

          <p className="text-gray-700 leading-8">
            Welcome to Aalizah Vision Technical Services,
            your trusted partner for reliable, innovative,
            and high-quality technical solutions.
          </p>

          <p className="text-gray-700 leading-8 mt-6">
            We specialize in delivering professional
            technical and maintenance services tailored
            to residential, commercial, and industrial
            needs with a commitment to excellence,
            safety, and customer satisfaction.
          </p>

        </div>

      </div>
        </FadeIn>
    
    </section>
  );
}