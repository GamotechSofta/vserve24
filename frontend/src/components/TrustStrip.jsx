import React, { useEffect, useState, useRef } from 'react';
import { vserveData } from '../data/vserveData';
import { Building2, Sliders, Headphones } from 'lucide-react';

export default function TrustStrip() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  const icons = [Building2, Sliders, Headphones];

  return (
    <section 
      ref={sectionRef}
      className="relative bg-[#FFFFFF] border-y border-[#E7E3DA] py-10 lg:py-12 overflow-hidden"
    >
      {/* Subtle background grid pattern */}
      <div 
        aria-hidden 
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: 'radial-gradient(#0B192C 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Top header eyebrow */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 mb-6 border-b border-[#E7E3DA] text-[11px] tracking-wider text-[#707887] uppercase font-semibold">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF5500]" />
            <span className="font-bold text-[#0B192C]">FINANCIAL INFRASTRUCTURE BENCHMARKS</span>
          </div>
          <div>ESTABLISHED HIGH-RISK MERCHANT DIRECTORY</div>
        </div>

        {/* 3 Information Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10 divide-y md:divide-y-0 md:divide-x divide-[#E7E3DA]">
          {vserveData.trustMetrics.map((item, index) => {
            const Icon = icons[index];
            return (
              <div 
                key={index} 
                className={`pt-4 md:pt-0 ${index > 0 ? 'md:pl-8 lg:pl-10' : ''} group cursor-default transition-all duration-300`}
              >
                <div className="flex items-start justify-between mb-2.5">
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-[#FF5500] bg-orange-50 border border-orange-200/60 px-2.5 py-0.5 rounded-md">
                    {item.tag}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-orange-50/50 border border-orange-200/60 flex items-center justify-center text-[#FF5500] group-hover:bg-[#FF5500] group-hover:text-white transition-all duration-200">
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <div className="flex items-baseline gap-2.5">
                    <span className="text-3xl lg:text-4xl font-bold text-[#0B192C] tracking-tight tabular-nums">
                      {item.stat}
                    </span>
                    <span className="text-base lg:text-lg font-bold text-[#0B192C]">
                      {item.label}
                    </span>
                  </div>

                  <p className="text-xs lg:text-sm text-[#475569] leading-relaxed max-w-sm">
                    {item.subtext}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
