import React from 'react';
import FadeIn from '../common/FadeIn';

interface StatItemProps {
  icon: React.ReactNode;
  labelTag: string;
  number: string;
  suffix: string;
  description: string;
}

const StatItem: React.FC<StatItemProps> = ({ icon, labelTag, number, suffix, description }) => {
  return (
    <div className="flex flex-col w-full font-sans">
      {/* Top Header Row: Icon and Small Tag right-aligned */}
      <div className="flex items-end justify-between pb-3 border-b border-gray-200">
        <div className="text-emerald-500 w-12 h-12 flex items-center justify-start">
          {icon}
        </div>
        <span className="text-[11px] font-bold text-gray-400 tracking-[0.25em] uppercase select-none">
          {labelTag}
        </span>
      </div>

      {/* Main Large Count Display */}
      <div className="mt-6 flex items-baseline select-none">
        <h2 className="text-[64px] sm:text-[72px] font-black text-black leading-none tracking-tight">
          {number}
        </h2>
        <span className="text-[32px] sm:text-[38px] font-extrabold text-[#1EA665] ml-1 select-none self-start pt-1">
          {suffix}
        </span>
      </div>

      {/* Underneath Context Description Text */}
      <p className="mt-3 text-black text-base md:text-[17px] font-medium tracking-normal">
        {description}
      </p>
    </div>
  );
};

export const StatsSection: React.FC = () => {
  const statsData: StatItemProps[] = [
    {
      labelTag: "Experiences",
      number: "10",
      suffix: "+",
      description: "Years of Experience",
      icon: (
        /* Custom Hammer/Screwdriver Outline SVG */
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.83-5.83m-3.75 3.75L4.81 7.42a1.652 1.652 0 00-2.33 2.33l7.42 7.42m3.75-3.75l-1.66-1.66m1.66 1.66lA2.25 2.25 0 1021 6.75l-1.5-1.5m-3 3l-1.5-1.5m0 0L6.75 12M13.5 4.5L12 3m0 0L4.5 10.5M12 3v7.5" />
        </svg>
      )
    },
    {
      labelTag: "Work",
      number: "200",
      suffix: "+",
      description: "Completed Projects",
      icon: (
        /* Custom Gear/Wrench Outline SVG */
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.827m11.379-8.16l1.15-.827M8.14 21.27l.707-1.03m6.308-9.19l.707-1.03M12 3v1.5m0 15V21m-3.077-2.457l-.513 1.41m5.13-14.095l-.513 1.41M6.215 18.894l-.827 1.15m11.379-11.379l-.827 1.15m-9.19-6.308l-1.03.707m9.19 6.308l-1.03.707" />
        </svg>
      )
    },
    {
      labelTag: "Clients",
      number: "98",
      suffix: "%",
      description: "Client Satisfaction",
      icon: (
        /* Custom Thumbs Up/Stars Outline SVG */
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.1-1.414-.294l-1.494-.648a16.516 16.516 0 01-2.24-1.142l-.25-.165A1.5 1.5 0 006 18V10.5h.633zM3 18v-7.5a1.5 1.5 0 00-1.5 1.5v4.5A1.5 1.5 0 003 18z" />
        </svg>
      )
    }
  ];

  return (
    <div className="w-full  py-12 md:py-16">
        <FadeIn>
              <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-16">
          {statsData.map((stat, idx) => (
            <StatItem key={idx} {...stat} />
          ))}
        </div>
      </div>
        </FadeIn>
    
    </div>
  );
};

export default StatsSection;