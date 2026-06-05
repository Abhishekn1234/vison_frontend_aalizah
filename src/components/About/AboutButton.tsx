import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'none';
  className?: string;
}

export const AboutButton: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  className = '',
  ...props
}) => {
  
  // 1. Define color styles based on the variant prop
  const variantStyles = {
    // Original dark button -> turns green
    primary: `
      bg-[#2E373A] text-white
      hover:bg-[#1EA665] 
      active:bg-[#178551]
    `,
    // New White button from screenshot -> turns green on hover/click (text turns white)
    secondary: `
      bg-white text-black border border-transparent
      hover:bg-[#1EA665] hover:text-white
      active:bg-[#178551] active:text-white
      shadow-sm
    `,
    none: `
      bg-white hover:bg-[#1EA665] hover:text-white
      active:bg-[#178551] active:text-white
    `
  };

  // 2. Define arrow color states matching the variant
  const arrowStyles = {
    primary: 'text-white',
    // The arrow is green initially, then turns white when the background goes green on hover
    secondary: 'text-[#1EA665] group-hover:text-white transition-colors duration-300',
    none: ''
  };

  return (
    <button
      {...props}
      className={`
        /* Layout Structure */
        flex items-center justify-center gap-3 w-fit group
        
        /* Sizing & Typography */
        px-8 py-4 rounded-[12px] 
        font-extrabold text-xs tracking-widest uppercase 
        
        /* Interactive State Management */
        transition-all duration-300 ease-in-out select-none
        
        /* Dynamic Styles logic */
        ${variantStyles[variant]}
        ${className}
      `}
    >
      {/* Dynamic text */}
      <span>{children}</span>
      
      {/* Dynamic Arrow Icon */}
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24" 
        strokeWidth={3} 
        stroke="currentColor" 
        className={`w-3.5 h-3.5 ${arrowStyles[variant]}`}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5l6 6m0 0l-6 6m6-6H4.5" />
      </svg>
    </button>
  );
};

export default AboutButton;