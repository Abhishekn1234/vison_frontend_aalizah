import Button from "../common/Button";
import FadeIn from "../common/FadeIn";
import { services } from "../common/services";

export default function ContactForm() {
  return (
    <section className="bg-gray-100 pb-20 px-4">
        <FadeIn>
      <div className="max-w-4xl mx-auto bg-[#F7F4EE] rounded-2xl p-6 md:p-12 shadow-sm">
        <div className="text-center max-w-xl mx-auto mb-10">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            Send Us a Message
          </h3>
          <p className="text-gray-500 text-sm leading-relaxed">
            Have a question or want a quote? Fill out the form below, and our team will get back to you shortly with the best solution for your needs.
          </p>
        </div>

        <form className="space-y-6">
          {/* Full Name */}
          <div>
            <label className="block text-xs font-bold text-gray-900 uppercase tracking-wide mb-1">
              Full Name*
            </label>
            <input 
              type="text" 
              placeholder="Full Name" 
              className="w-full bg-transparent border-b border-gray-300 py-2.5 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-emerald-500 text-sm"
              required
            />
          </div>

          {/* Email & Phone Flex Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-bold text-gray-900 uppercase tracking-wide mb-1">
                Email*
              </label>
              <input 
                type="email" 
                placeholder="name@example.com" 
                className="w-full bg-transparent border-b border-gray-300 py-2.5 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-emerald-500 text-sm"
                required
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-900 uppercase tracking-wide mb-1">
                Phone Number*
              </label>
              <input 
                type="tel" 
                placeholder="000-000-000" 
                className="w-full bg-transparent border-b border-gray-300 py-2.5 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-emerald-500 text-sm"
                required
              />
            </div>
          </div>

          {/* Address */}
          <div>
            <label className="block text-xs font-bold text-gray-900 uppercase tracking-wide mb-1">
              Address*
            </label>
            <input 
              type="text" 
              placeholder="Your location" 
              className="w-full bg-transparent border-b border-gray-300 py-2.5 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-emerald-500 text-sm"
              required
            />
          </div>

          {/* Type of Service Dropdown */}
          <div>
            <label className="block text-xs font-bold text-gray-900 uppercase tracking-wide mb-1">
              Type of service
            </label>
            <div className="relative">
              <select 
                className="w-full bg-transparent border-b border-gray-300 py-2.5 text-gray-500 focus:outline-none focus:border-emerald-500 text-sm appearance-none cursor-pointer"
                defaultValue=""
              >
            {services.map((service, index) => (
              <option key={index} value={service.title}>
                {service.title}
              </option>
            ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none text-gray-500 text-xs">
                ▼
              </div>
            </div>
          </div>

          {/* Message Textarea */}
          <div>
            <label className="block text-xs font-bold text-gray-900 uppercase tracking-wide mb-1">
              Message
            </label>
            <textarea 
              rows={3}
              placeholder="Describe Service Needed" 
              className="w-full bg-transparent border-b border-gray-300 py-2.5 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-emerald-500 text-sm resize-y"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center pt-4">
            <Button 
              type="submit" 
              className="bg-[#800000] hover:bg-emerald-600 text-white font-bold text-xs tracking-wider uppercase py-3.5 px-8 rounded-lg inline-flex items-center gap-2 transition-all shadow-md"
            >
              SUBMIT 
            </Button>
          </div>
        </form>
      </div>
      </FadeIn>
    </section>
  );
}