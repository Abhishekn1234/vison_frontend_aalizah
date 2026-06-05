import React from 'react';
import FadeIn from '../common/FadeIn';
import AboutButton from './AboutButton';

export const Bottom: React.FC = () => {
  const handleContactClick = () => {
    console.log("Contact button clicked!");
  };

  return (
    <div className="relative w-full h-[500px] md:h-[650px] lg:h-[750px] overflow-hidden font-sans select-none">
      <FadeIn>
        {/* Background Image */}
        <img
          src="https://images.unsplash.com/photo-1504148455328-c376907d081c?q=80&w=1920&auto=format&fit=crop"
          alt="Carpenter working in workshop"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark Overlay matching design density */}
        <div className="absolute inset-0 bg-black/55" />

        {/* Center Content */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 text-center">
          
          <h1 className="uppercase font-bold tracking-[-0.04em] leading-[0.9] text-white">
            <span className="block text-[38px] sm:text-[55px] md:text-[75px] lg:text-[85px] xl:text-[102px]">
              NEED HELP?
            </span>
            <span className="block text-[38px] sm:text-[55px] md:text-[75px] lg:text-[85px] xl:text-[102px]">
              WE'RE JUST ONE
            </span>
            <span className="block text-[38px] sm:text-[55px] md:text-[75px] lg:text-[85px] xl:text-[102px]">
              CALL AWAY!
            </span>
          </h1>

          {/* Button Callout */}
          <div className="mt-12" onClick={handleContactClick}>
            <AboutButton variant="primary">
              CONTACT US NOW
            </AboutButton>
          </div>

        </div>
      </FadeIn>
    </div>
  );
};

export default Bottom;