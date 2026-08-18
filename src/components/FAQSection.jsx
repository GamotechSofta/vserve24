import React, { useState } from 'react';
import { vserveData } from '../data/vserveData';
import { ChevronDown, Plus, Minus, HelpCircle } from 'lucide-react';

export default function FAQSection() {
  const [openFaq, setOpenFaq] = useState(0);
  const faqs = vserveData.faqs;

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <section id="faq" className="relative bg-[#FCFBF8] py-20 lg:py-28 border-b border-[#E7E3DA] overflow-hidden">
      
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
            <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFFFFF] border border-[#E7E3DA] text-xs tracking-widest text-[#475569] uppercase font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF5500]" />
              <span>09 • Underwriting & Account Knowledge</span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-bold text-[#0B192C] tracking-tight">
              Frequently Asked Questions.
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-[#475569] leading-relaxed">
              Clear answers regarding high-risk underwriting, payout schedules, chargeback controls, and fee structures.
            </p>
          </div>

          <div className="text-xs text-[#707887] uppercase tracking-widest font-semibold">
            {faqs.length} COMMONLY ASKED INQUIRIES
          </div>
        </div>

        {/* Premium Accordion */}
        <div className="max-w-4xl mx-auto divide-y divide-[#E7E3DA] border-y border-[#E7E3DA]">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;

            return (
              <div 
                key={faq.id}
                className="py-5 sm:py-6 transition-colors duration-200"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-start justify-between gap-4 text-left group cursor-pointer focus:outline-none"
                >
                  <div className="flex items-start gap-3 sm:gap-5">
                    <span className={`text-xs sm:text-sm font-bold transition-colors ${
                      isOpen ? 'text-[#FF5500]' : 'text-[#707887] group-hover:text-[#0B192C]'
                    }`}>
                      0{idx + 1}
                    </span>
                    <h3 className={`text-base sm:text-xl font-bold transition-colors ${
                      isOpen ? 'text-[#0B192C]' : 'text-[#0B192C] group-hover:text-[#FF5500]'
                    }`}>
                      {faq.question}
                    </h3>
                  </div>

                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border transition-all duration-300 ${
                    isOpen 
                      ? 'bg-[#FF5500] border-[#FF5500] text-white rotate-180 shadow-md shadow-orange-500/25' 
                      : 'bg-[#FFFFFF] border-[#E7E3DA] text-[#475569] group-hover:border-[#FF5500]'
                  }`}>
                    <ChevronDown className="w-3.5 h-3.5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="mt-3 pl-8 lg:pl-10 pr-4 text-[#475569] text-sm sm:text-base leading-relaxed animate-in fade-in slide-in-from-top-1 duration-200">
                    <p className="max-w-3xl">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
