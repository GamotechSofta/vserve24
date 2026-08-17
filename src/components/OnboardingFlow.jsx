import React, { useState } from 'react';
import { 
  ArrowRight, CheckCircle2, Clock, ShieldCheck, Zap, 
  FileText, Building2, Rocket, Lock, Check, Sparkles, FileCheck, ArrowUpRight
} from 'lucide-react';

export default function OnboardingFlow({ onOpenApplication }) {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      step: '01',
      phase: 'STEP 01',
      title: 'Digital Application & Document Upload',
      subtitle: 'Fast 10-Minute Intake',
      time: '< 10 Minutes',
      icon: FileCheck,
      badge: 'Fast-Track Intake',
      description: 'Submit your basic business profile, processing history, and ownership details via our bank-grade encrypted intake form.',
      deliverables: [
        'Secure 256-bit encrypted document upload',
        'Automated risk classification & MCC pre-screening',
        'Instant verification receipt & dedicated analyst assignment'
      ],
      tag: 'Step 1 • Intake Complete'
    },
    {
      step: '02',
      phase: 'STEP 02',
      title: 'Underwriting Review & Direct MID Issuance',
      subtitle: '24-Hour Decisioning',
      time: '24 Hours',
      icon: ShieldCheck,
      badge: 'Direct Bank Placement',
      description: 'Our high-risk underwriting specialists negotiate directly with domestic and offshore sponsor acquiring banks to secure your dedicated MID.',
      deliverables: [
        'Dedicated Merchant ID (MID) with custom monthly caps',
        'Transparent interchange-plus pricing schedule',
        'Automated Ethoca & Verifi dispute shield activation'
      ],
      tag: 'Step 2 • Approved & Placed'
    },
    {
      step: '03',
      phase: 'STEP 03',
      title: 'Gateway Integration & Live Payouts',
      subtitle: 'Same-Day Production Launch',
      time: 'Same-Day Live',
      icon: Rocket,
      badge: 'Daily Settlements',
      description: 'Connect via Shopify/WooCommerce plugins or developer REST APIs, run sandbox test authorizations, and start accepting live payments.',
      deliverables: [
        'Production API keys & shopping cart webhook connectors',
        'Automated daily and next-day batch settlement schedule',
        '24/7 dedicated risk desk & account manager support'
      ],
      tag: 'Step 3 • Live & Scaling'
    }
  ];

  return (
    <section 
      id="onboarding" 
      className="relative bg-[#FCFBF8] py-20 lg:py-28 border-b border-[#E7E3DA] overflow-hidden"
    >
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
        
        {/* Section Top Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200/80 text-xs font-mono tracking-widest text-[#FF5500] uppercase font-bold shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#FF5500] animate-pulse" />
              <span>04 • Operational Timeline</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#0B192C] tracking-tight leading-[1.08]">
              How onboarding works: <span className="text-[#FF5500]">from form to live MID.</span>
            </h2>

            <p className="text-base lg:text-lg text-[#475569] leading-relaxed">
              Transparent terms, dedicated underwriting analysts, and zero upfront fees from application to production gateway launch.
            </p>
          </div>

          <button
            onClick={onOpenApplication}
            className="self-start lg:self-auto flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#FF5500] hover:bg-[#E64A00] text-white font-bold text-xs font-mono tracking-wide transition-all shadow-md shadow-orange-500/20 hover:-translate-y-0.5 cursor-pointer"
          >
            <span>Start 10-Min Application</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 3-Step Interactive Connected Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-10">
          {steps.map((item, idx) => {
            const isActive = activeStep === idx;
            const IconComponent = item.icon;

            return (
              <div
                key={idx}
                onMouseEnter={() => setActiveStep(idx)}
                onClick={() => setActiveStep(idx)}
                className={`relative bg-[#FFFFFF] rounded-3xl p-6 sm:p-8 border transition-all duration-300 cursor-pointer flex flex-col justify-between overflow-hidden ${
                  isActive
                    ? 'border-[#FF5500] shadow-xl shadow-orange-500/[0.08] -translate-y-1.5'
                    : 'border-[#E7E3DA] hover:border-slate-300 shadow-xs'
                }`}
              >
                {/* Top Accent Traveling Line on Hover */}
                <div className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#FF5500] to-[#FF7733] transition-all duration-300 ${
                  isActive ? 'opacity-100' : 'opacity-0'
                }`} />

                <div>
                  {/* Step Icon, Number & Timeline Pill */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-3">
                      <div className={`w-11 h-11 rounded-2xl flex items-center justify-center font-mono font-bold text-base transition-colors ${
                        isActive
                          ? 'bg-[#FF5500] text-white shadow-md shadow-orange-500/25'
                          : 'bg-orange-50 text-[#FF5500] border border-orange-200/80'
                      }`}>
                        <IconComponent className="w-5 h-5" />
                      </div>
                      
                      <div>
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#FF5500]">
                          {item.phase}
                        </span>
                        <div className="text-xs font-mono font-semibold text-[#707887]">
                          {item.subtitle}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-1 text-[11px] font-mono text-[#0B192C] font-semibold bg-[#FCFBF8] border border-[#E7E3DA] px-2.5 py-1 rounded-full shadow-xs">
                      <Clock className="w-3 h-3 text-[#FF5500]" />
                      <span>{item.time}</span>
                    </div>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-[#0B192C] mb-2 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-[#475569] text-xs sm:text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Deliverables Checklist */}
                <div className="pt-4 border-t border-[#E7E3DA] space-y-2.5">
                  <div className="text-[9.5px] font-mono uppercase tracking-widest text-[#707887] font-bold">
                    PHASE DELIVERABLES
                  </div>
                  
                  {item.deliverables.map((del, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs font-mono text-[#0B192C]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#FF5500] shrink-0 mt-0.5" />
                      <span className="leading-snug">{del}</span>
                    </div>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom Ready-to-Apply Summary Banner */}
        <div className="bg-[#FFFFFF] border border-[#E7E3DA] rounded-2xl p-5 sm:p-6 shadow-xs flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-[#10B981]" />
            </div>
            <div>
              <div className="text-xs font-bold text-[#0B192C] flex items-center gap-2">
                <span>What you need to prepare:</span>
                <span className="text-[11px] font-mono text-[#10B981] font-semibold bg-emerald-50 px-2 py-0.5 rounded">Zero Upfront Setup Fees</span>
              </div>
              <p className="text-xs text-[#475569] font-mono mt-0.5">
                1. Government ID • 2. Voided Check / Bank Letter • 3. 3 Months Processing Statements (if available)
              </p>
            </div>
          </div>

          <button
            onClick={onOpenApplication}
            className="flex items-center gap-1.5 text-xs font-mono font-bold text-[#FF5500] hover:text-[#E64A00] whitespace-nowrap cursor-pointer group"
          >
            <span>Submit Application Documents</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

      </div>
    </section>
  );
}
