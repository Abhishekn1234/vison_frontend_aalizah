import React from 'react';
import FadeIn from '../common/FadeIn';
import AboutButton from './AboutButton';


export const Bottom: React.FC = () => {
  const handleContactClick = () => {
    console.log("Contact button clicked!");
  };

  return (
    <div className="relative w-full h-[600px] overflow-hidden font-sans">

      <FadeIn>

        {/* Background Image */}
        <img
          src="https://images.unsplash.com/photo-1504148455328-c376907d081c?q=80&w=1920&auto=format&fit=crop"
          alt="Carpenter working in workshop"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]" />

        {/* Center Content */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4 text-center">

          <h1 className="text-white text-4xl md:text-6xl font-extrabold tracking-wide uppercase max-w-4xl leading-tight select-none drop-shadow-md">
            Need Help? <br />
            We’re Just One <br />
            Call Away!
          </h1>

          {/* Button */}
          <div className="mt-8" onClick={handleContactClick}>
            <AboutButton variant="primary">
              Contact Us Now
            </AboutButton>
          </div>

        </div>

      </FadeIn>

    </div>
  );
};

export default Bottom;