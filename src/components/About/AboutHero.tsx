import FadeIn from "../common/FadeIn";



export default function Hero() {
  return (
    <section className="bg-[#f5f5f5] py-16 lg:py-24">
        <FadeIn>
          <div className="max-w-[1500px] mx-auto px-5 md:px-10">

        {/* Who we are */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-5 h-2 bg-[#2BC77A] -skew-x-12" />
          <span className="text-black text-lg md:text-xl font-medium">
            who we are
          </span>
        </div>

        {/* Top Row */}
        <div className="grid lg:grid-cols-[1fr_350px] gap-10 items-center">

          <div>
            <h1 className="uppercase font-black leading-[0.9] tracking-[-0.04em]">

              <span className="block text-[#B7B7B7] text-[40px] xs:text-[50px] sm:text-[70px] md:text-[90px] lg:text-[110px] xl:text-[125px]">
                DELIVERING RELIABLE
              </span>

              <span className="block text-[#B7B7B7] text-[40px] xs:text-[50px] sm:text-[70px] md:text-[90px] lg:text-[110px] xl:text-[125px]">
                MAINTENANCE WITH
              </span>

              <span className="block text-black text-[40px] xs:text-[50px] sm:text-[70px] md:text-[90px] lg:text-[110px] xl:text-[125px]">
                UNMATCHED QUALITY
              </span>

            </h1>
          </div>

         <div className="hidden lg:flex justify-center">
  <div
    className="
      w-[220px]
      h-[220px]
      rounded-full
      bg-white
      flex
      items-center
      justify-center
      shadow-md
      overflow-hidden
    "
  >
    <img
      src="./AV Logo.png"
      alt="logo"
      className="w-[160px] h-[160px] object-contain"
    />
  </div>
</div>

        </div>

        {/* Bottom Row */}
        <div className="grid lg:grid-cols-[1.3fr_0.7fr] gap-12 mt-16 items-center">

          <div>
            <img
              src="./About us image.jpeg"
              alt="About"
              className="
                w-full
                rounded-[24px]
                object-cover
                shadow-md
                h-[300px]
                md:h-[500px]
                lg:h-[650px]
              "
            />
          </div>

          <div className="flex flex-col h-full">

  <p className="text-[#434343] text-lg md:text-xl leading-relaxed">
    At Aalizah Vision Technical Services, we take
    pride in providing dependable, high-quality
    maintenance and technical solutions for
    residential and commercial clients.
  </p>

  <p className="text-[#434343] text-lg md:text-xl leading-relaxed mt-6">
    Our mission is to keep your property running
    smoothly, safely, and efficiently through
    professional technical services.
  </p>

  <button
    className="
      mt-10
      bg-[#354145]
      text-white
      px-10
      py-5
      rounded-2xl
      font-bold
      uppercase
      tracking-wide
      hover:bg-[#2f393d]
      transition
      w-fit
    "
  >
    Explore Our Services →
  </button>

  {/* Bottom Image */}
  <div className="mt-16">
    <img
      src="./About 2.png"
      alt="Service Vehicle"
      className="
        w-full
        rounded-[24px]
        object-cover
        shadow-md
        h-[220px]
        md:h-[280px]
        lg:h-[320px]
      "
    />
  </div>

</div>

        </div>

      </div>
        </FadeIn>
     
    </section>
  );
}