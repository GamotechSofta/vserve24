import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';

export default function FinalCTA({ onOpenApplication }) {
  return (
    <section className="relative bg-[#FCFBF8] text-[#0B192C] py-20 lg:py-28 overflow-hidden border-t border-[#E7E3DA]">
      
      {/* Background blueprint grid */}
      <div 
        aria-hidden 
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: 'radial-gradient(#0B192C 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      />

      {/* Warm orange radial glow behind center */}
      <div 
        aria-hidden
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(255,85,0,0.25) 0%, transparent 70%)'
        }}
      />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10 text-center">
        
        <div className="max-w-2xl mx-auto space-y-6">
          
          <div className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFFFFF] border border-[#D9D4C8] text-xs font-mono tracking-widest text-[#FF5500] uppercase font-bold shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#FF5500] animate-pulse" />
            <span>10 • Instant Intake Onboarding</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B192C] tracking-tight leading-[1.1]">
            Ready to get started?
          </h2>

          <p className="text-base sm:text-lg text-[#475569] leading-relaxed max-w-xl mx-auto">
            Let our team build a payment solution that works for your high-risk business.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={onOpenApplication}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#FF5500] hover:bg-[#E64A00] text-white font-bold text-sm font-mono tracking-wide transition-all shadow-xl shadow-orange-500/25 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenApplication}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#FFFFFF] hover:bg-[#F7F4ED] border border-[#D9D4C8] text-[#0B192C] font-semibold text-sm font-mono tracking-wide transition-colors cursor-pointer shadow-xs"
            >
              Talk to an Expert
            </button>
          </div>

          {/* Underwriting Guarantee Strip */}
          <div className="pt-8 border-t border-[#D9D4C8] flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-[#707887]">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#FF5500]" />
              <span className="text-[#0B192C]">No Setup Fees</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#FF5500]" />
              <span className="text-[#0B192C]">Daily Batch Payouts</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#FF5500]" />
              <span className="text-[#0B192C]">24-Hour Approval Pipeline</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
