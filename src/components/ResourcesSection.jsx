import React, { useState } from 'react';
import { vserveData } from '../data/vserveData';
import { ArrowRight, BookOpen, Clock, FileText } from 'lucide-react';

export default function ResourcesSection({ onOpenApplication }) {
  const [hoveredRow, setHoveredRow] = useState(null);
  const resources = vserveData.resources;

  return (
    <section id="resources" className="relative bg-[#FCFBF8] py-20 lg:py-28 border-b border-[#E7E3DA] overflow-hidden">
      
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
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFFFFF] border border-[#E7E3DA] text-xs font-mono tracking-widest text-[#475569] uppercase font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF5500]" />
              <span>08 • Knowledge Base & Underwriting Guides</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#0B192C] tracking-tight">
              Guides and resources.
            </h2>
            <p className="text-base lg:text-lg text-[#475569] leading-relaxed">
              Technical guides, decline recovery strategies, and underwriting documentation for high-risk merchant operators.
            </p>
          </div>

          <div className="text-xs font-mono text-[#707887] uppercase tracking-widest">
            {resources.length} TECHNICAL PUBLICATIONS
          </div>
        </div>

        {/* Horizontal Article Rows */}
        <div className="space-y-3.5">
          {resources.map((item, idx) => {
            const isHovered = hoveredRow === idx;

            return (
              <div
                key={item.id}
                onMouseEnter={() => setHoveredRow(idx)}
                onMouseLeave={() => setHoveredRow(null)}
                onClick={onOpenApplication}
                className={`group p-6 lg:p-7 rounded-2xl bg-[#FFFFFF] border transition-all duration-300 cursor-pointer relative overflow-hidden flex flex-col lg:flex-row lg:items-center justify-between gap-4 ${
                  isHovered
                    ? 'border-[#FF5500] shadow-lg shadow-orange-500/[0.06] -translate-y-0.5'
                    : 'border-[#E7E3DA] hover:border-slate-300 shadow-xs'
                }`}
              >
                {/* Left Orange Animated Line */}
                <div 
                  className={`absolute top-0 left-0 bottom-0 w-[3px] bg-[#FF5500] transition-all duration-300 ${
                    isHovered ? 'opacity-100' : 'opacity-0'
                  }`}
                />

                <div className="space-y-2 max-w-3xl">
                  <div className="flex items-center gap-2.5">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#FF5500] bg-orange-50 border border-orange-200/80 px-2 py-0.5 rounded">
                      {item.category}
                    </span>
                    <span className="text-xs font-mono text-[#707887] flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#FF5500]" />
                      {item.readTime}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#0B192C] group-hover:text-[#FF5500] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-[#475569] text-xs sm:text-sm leading-relaxed">
                    {item.summary}
                  </p>
                </div>

                <div className="shrink-0 flex items-center gap-1.5 text-xs font-mono font-bold text-[#0B192C] group-hover:text-[#FF5500] transition-colors">
                  <span>Read Guide</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
