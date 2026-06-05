

import { TrendingUp, Handshake, Banknote, Trophy } from 'lucide-react';
import FadeIn from '../common/FadeIn';

export default function Teamfeatured() {
  const features = [
    {
      icon: <TrendingUp className="w-8 h-8 text-white" />,
      iconBg: "bg-[#10a37f]", // Vibrant green
      title: "Professional Growth",
      description: "We provide continuous learning and on-the-job training to help you improve your skills and advance your career."
    },
    {
      icon: <Handshake className="w-8 h-8 text-white" />,
      iconBg: "bg-[#2d3748]", // Dark slate/charcoal
      title: "Supportive Environment",
      description: "Work with a friendly, cooperative team that values respect, teamwork, and open communication."
    },
    {
      icon: <Banknote className="w-8 h-8 text-white" />,
      iconBg: "bg-[#10a37f]", // Vibrant green
      title: "Competitive Benefits",
      description: "Enjoy fair pay, overtime opportunities, and job stability in a growing technical services company."
    },
    {
      icon: <Trophy className="w-8 h-8 text-white" />,
      iconBg: "bg-[#2d3748]", // Dark slate/charcoal
      title: "Commitment to Excellence",
      description: "Be part of a company that takes pride in delivering top-quality service and building client trust across the UAE."
    }
  ];

  return (
    <div className="relative min-h-screen  font-sans px-6 py-16 md:py-24">
      <FadeIn>
        {/* Top Small Header */}
      <div className="flex items-center justify-center gap-2 mb-6">
        <span className="text-[#10a37f] text-sm font-semibold">◆</span>
        <span className="text-sm font-semibold text-gray-700 tracking-wider">
          join ahmed aalizah vision technical services
        </span>
        <span className="text-[#10a37f] text-sm font-semibold">◆</span>
      </div>

      {/* Main Heading */}
      <div className="text-center max-w-4xl mx-auto mb-20">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-400 uppercase leading-tight">
          JOIN OUR GROWING <br />
          <span className="text-black font-extrabold block mt-2">TEAM OF</span>
          <span className="text-black font-extrabold block mt-1">MAINTENANCE</span>
          <span className="text-black font-extrabold block mt-1">EXPERTS</span>
        </h2>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
        {features.map((item, index) => (
          <div 
            key={index} 
            className="relative bg-white border border-gray-100 rounded-2xl p-8 pt-14 shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            {/* Floating Icon Container */}
            <div className={`absolute -top-7 left-8 w-14 h-14 ${item.iconBg} rounded-full flex items-center justify-center shadow-lg`}>
              {item.icon}
            </div>

            {/* Content */}
            <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-snug">
              {item.title}
            </h3>
            <p className="text-gray-500 text-base leading-relaxed font-normal">
              {item.description}
            </p>
          </div>
        ))}
      </div>
      </FadeIn>
      

      {/* Bottom Right Back to Top Button */}
      
       
    </div>
    
  );
}
