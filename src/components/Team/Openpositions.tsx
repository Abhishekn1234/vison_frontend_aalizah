
import { MapPin } from 'lucide-react';
import FadeIn from '../common/FadeIn';
import Button from '../common/Button';


export default function OpenPositions() {
  const jobs = [
    {
      type: "FULL TIME",
      title: "Plumbers",
      location: "Dubai, UAE"
    },
    {
      type: "FULL TIME",
      title: "Gas & heating engineers",
      location: "Dubai, UAE"
    }
  ];

  return (
    <div className=" px-6 py-16 md:py-24 font-sans">
        <FadeIn>
           <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Left Column: Job Openings List */}
        <div className="lg:col-span-7 xl:col-span-8">
          {/* Section Heading */}
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-black mb-10">
            <span className="text-gray-400 font-bold">OPEN </span>POSITIONS
          </h2>

          {/* Jobs Table/List */}
          <div className="divide-y divide-gray-200 border-t border-gray-200">
            {jobs.map((job, index) => (
              <div 
                key={index} 
                className="flex flex-col sm:flex-row sm:items-center justify-between py-6 gap-4"
              >
                {/* Left Side: Type Badge & Job Title */}
                <div className="flex items-center gap-6 md:gap-12 min-w-0">
                  <span className="inline-block text-[11px] font-semibold tracking-wider text-black border border-gray-300 rounded px-4 py-2 bg-white shrink-0 whitespace-nowrap">
                    {job.type}
                  </span>
                  <h3 className="text-xl md:text-2xl font-semibold text-black truncate">
                    {job.title}
                  </h3>
                </div>

                {/* Right Side: Location Pin */}
                <div className="flex items-center gap-2 text-[#10a37f] shrink-0 sm:text-right">
                  <MapPin className="w-5 h-5 stroke-[2.5]" />
                  <span className="text-lg font-semibold text-black">
                    {job.location}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: CTA & Info Section */}
        <div className="lg:col-span-5 xl:col-span-4 flex flex-col items-start lg:pl-4">
          
          {/* Hard Hat Illustration Placeholder (Replace src with your actual blue helmet image asset) */}
          <div className="w-full max-w-[320px] mx-auto lg:mx-0 mb-8">
            <img 
              src="/path-to-your-blue-helmet.png" 
              alt="Ahmed Al Sheebani Technical Services Helmet" 
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Description Text */}
          <p className="text-gray-600 text-[17px] leading-relaxed font-normal mb-4">
            If you're passionate about quality work and want to grow in a supportive environment, we'd love to hear from you. Send your CV and application to the email below &mdash; our HR team will get in touch if your profile matches our openings.
          </p>

          {/* Email Link */}
          <a 
            href="mailto:info@alsheebanitechnical.ae" 
            className="text-black font-semibold text-lg md:text-xl underline decoration-2 underline-offset-4 hover:text-gray-700 transition-colors mb-8 block"
          >
            info@alsheebanitechnical.ae
          </a>

          {/* Contact Us Button */}
          <Button variant="primary" className="mt-auto">
            CONTACT US
          </Button>
          
        </div>

      </div>
        </FadeIn>
     
    </div>
  );
}