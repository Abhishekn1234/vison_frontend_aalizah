import Button from "../common/Button";
import FadeIn from "../common/FadeIn";
   import { motion } from "framer-motion";
import {useNavigate} from "react-router-dom";
export default function ContactFeatured() {
    const navigate=useNavigate();
  return (
    <section className="bg-gray-100 pt-16 pb-12 px-4 text-center">
        <FadeIn>
      <div className="max-w-4xl mx-auto">
        {/* Main Heading with Updated Branding */}
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight tracking-tight mb-6">
          Contact Aalizah Vision <br className="hidden md:inline" /> Technical Services Today!
        </h2>
        
        <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
          We're here to help with all your maintenance and technical needs — from MEP works 
          to emergency repairs and preventive care. Whether it's your home or business, 
          our team in Dubai is ready to deliver dependable service, every time.
        </p>

        {/* Calendar Icon Mock */}
    

<div className="flex justify-center mb-6">
  <motion.div
    animate={{
      y: [0, -8, 0],
      rotate: [0, -3, 3, 0],
    }}
    transition={{
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="border-[3px] border-black rounded-xl p-4 w-24 h-24 flex flex-col justify-between relative bg-white"
  >
    <div className="absolute -top-2.5 left-4 w-2 h-4 bg-black rounded-full"></div>
    <div className="absolute -top-2.5 right-4 w-2 h-4 bg-black rounded-full"></div>

    <div className="grid grid-cols-3 gap-2 mt-2">
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 1,
            delay: i * 0.1,
            repeat: Infinity,
          }}
          className="w-4 h-3 bg-[#800000] rounded-sm"
        />
      ))}
    </div>
  </motion.div>
</div>
        <p className="text-gray-500 text-sm font-medium mb-6">
          Your trusted maintenance partner — just a call away.
        </p>

        <Button variant="primary" onClick={()=>navigate('/services')} className="bg-[#800000] hover:bg-emerald-600 text-white font-semibold text-xs tracking-wider uppercase py-3.5 px-6 rounded-md inline-flex items-center gap-2 transition-all">
          View All Services 
          
        </Button>

        {/* Info Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 text-center border-t border-gray-200 pt-12">
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">Headquarter</h4>
            <p className="font-bold text-gray-900 text-sm md:text-base leading-snug max-w-[200px] mx-auto">
             office no :458,Al Barsha first Building(373-408) Al  Barsha 1 ,Dubai
            </p>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">Give Us a Call</h4>
            <p className="text-[#800000] font-bold text-xl md:text-2xl tracking-wide">
              +971-551084366
            </p>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">Email Us</h4>
            <p className="font-bold text-gray-900 text-sm md:text-base break-all max-w-[240px] mx-auto">
              info@aalizahvision.com
            </p>
          </div>
        </div>
      </div>
      </FadeIn>
    </section>
  );
}