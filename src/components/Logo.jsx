import React from 'react';
import logoImg from './vserve24_logo.png';

export default function Logo({ size = 'normal', className = '' }) {
  const sizeClasses = {
    small: 'h-10 sm:h-11',
    normal: 'h-14 sm:h-15 lg:h-16 max-h-[58px]',
    large: 'h-18 sm:h-22'
  };

  return (
    <div className={`inline-flex items-center ${className}`}>
      <img 
        src={logoImg} 
        alt="VSERVE24 - Endless Payments, Limitless Growth" 
        className={`${sizeClasses[size] || sizeClasses.normal} w-auto object-contain cursor-pointer transition-transform hover:scale-102`}
      />
    </div>
  );
}
