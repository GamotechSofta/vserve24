import React, { useState } from 'react';
import { vserveData } from '../data/vserveData';
import { Quote, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = vserveData.testimonials;
  const current = items[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative bg-[#FCFBF8] py-20 lg:py-28 border-b border-[#E7E3DA] overflow-hidden">
      
      {/* Background blueprint grid */}
      <div 
        aria-hidden 
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: 'radial-gradient(#0B192C 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200/80 text-xs tracking-widest text-[#FF5500] uppercase font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF5500]" />
              <span>08 • Verified Merchant Experiences</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#0B192C] tracking-tight">
              What merchants say about Vserve24.
            </h2>
          </div>

          {/* Carousel Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              aria-label="Previous testimonial"
              className="w-10 h-10 rounded-full bg-[#FFFFFF] border border-[#E7E3DA] flex items-center justify-center text-[#475569] hover:text-[#0B192C] hover:border-[#FF5500] transition-colors shadow-xs cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next testimonial"
              className="w-10 h-10 rounded-full bg-[#FFFFFF] border border-[#E7E3DA] flex items-center justify-center text-[#475569] hover:text-[#0B192C] hover:border-[#FF5500] transition-colors shadow-xs cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Editorial Quote Focus Box */}
        <div className="bg-[#FFFFFF] rounded-3xl p-6 sm:p-10 lg:p-12 border border-[#E7E3DA] shadow-sm relative overflow-hidden">
          
          {/* Large decorative quotation mark */}
          <Quote className="absolute right-8 bottom-4 w-28 h-28 text-[#E7E3DA]/50 pointer-events-none" />

          <div className="max-w-4xl space-y-6 relative z-10">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFFFFF] border border-[#E7E3DA] text-xs font-bold text-[#FF5500]">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#FF5500]" />
              <span>{current.highlight}</span>
            </div>

            <blockquote className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#0B192C] leading-snug tracking-tight">
              "{current.quote}"
            </blockquote>

            <div className="pt-5 border-t border-[#E7E3DA] flex flex-wrap items-center gap-3 text-xs sm:text-sm">
              <span className="font-bold text-[#0B192C]">{current.type}</span>
              <span className="text-[#707887]">•</span>
              <span className="text-[#475569] font-semibold">{current.vertical}</span>
              <span className="text-[#707887]">•</span>
              <span className="text-[#10B981] font-bold bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded text-xs">
                Verified Active Processing
              </span>
            </div>

          </div>

          {/* Carousel Step Indicators */}
          <div className="flex items-center gap-1.5 mt-6">
            {items.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  currentIndex === i ? 'w-7 bg-[#FF5500]' : 'w-2 bg-[#E7E3DA]'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
