import React from 'react';
import { Shield, Zap, CheckCircle2, Lock, ArrowRight, Activity, RefreshCw, ArrowDown } from 'lucide-react';

export default function PaymentIntelligence({ onOpenApplication }) {
  const nodes = [
    {
      step: '01',
      title: 'Merchant Gateway',
      sub: 'Tokenized Ingestion',
      detail: 'Encrypted checkout payload generated and validated with zero cardholder data exposure.'
    },
    {
      step: '02',
      title: 'Vserve24 Core',
      sub: 'Intelligent Router',
      detail: 'Multi-MID load balancer evaluates currency, ticket size, and velocity rules.'
    },
    {
      step: '03',
      title: 'Risk Intelligence',
      sub: 'Fraud & Shield Check',
      detail: 'Machine learning scores behavioral patterns, device fingerprinting, and proxy flags.',
      highlight: true
    },
    {
      step: '04',
      title: 'Acquiring Rail',
      sub: 'Card & ACH Clearing',
      detail: 'Direct transmission to Tier-1 sponsor banks with automated cascading decline salvage.'
    },
    {
      step: '05',
      title: 'Settlement Engine',
      sub: 'Merchant Payout',
      detail: 'Automated daily batch funding deposited directly to business accounts.'
    }
  ];

  return (
    <section id="intelligence" className="relative bg-[#FCFBF8] text-[#0B192C] py-16 sm:py-20 lg:py-28 border-b border-[#E7E3DA] overflow-hidden">
      
      {/* Background blueprint grid */}
      <div 
        aria-hidden 
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: 'radial-gradient(#0B192C 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      />

      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-2.5 sm:space-y-3">
          <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200/80 text-[11px] tracking-widest text-[#FF5500] uppercase font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF5500]" />
            <span>07 • Global Processing Pipeline</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-bold text-[#0B192C] tracking-tight leading-tight">
            The infrastructure behind every transaction.
          </h2>
          <p className="text-[#475569] text-sm sm:text-base lg:text-lg">
            How Vserve24 combines high-throughput payment rails with adaptive fraud defense and intelligent multi-acquirer settlement.
          </p>
        </div>

        {/* Large Central Architecture Diagram */}
        <div className="bg-[#FFFFFF] border border-[#E7E3DA] rounded-3xl p-5 sm:p-8 lg:p-10 relative overflow-hidden shadow-sm">
          
          {/* Top Status Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 mb-6 sm:mb-8 border-b border-[#E7E3DA] text-xs font-semibold">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
              <span className="text-[#0B192C] font-bold">TRANSACTION PIPELINE: ACTIVE</span>
            </div>
            <div className="flex items-center gap-3 text-[#707887]">
              <span>ZERO-KNOWLEDGE ENCRYPTION</span>
              <span>•</span>
              <span className="text-[#10B981] font-bold">DIRECT ACQUIRER ROUTING</span>
            </div>
          </div>

          {/* 5-Node Connected Flow Grid (Responsive with arrows on mobile) */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3.5 sm:gap-4 relative">
            {nodes.map((node, i) => (
              <React.Fragment key={i}>
                <div 
                  className={`p-4 sm:p-5 rounded-2xl border transition-all duration-300 flex flex-col justify-between min-h-[170px] sm:min-h-[190px] bg-[#FFFFFF] ${
                    node.highlight 
                      ? 'border-[#FF5500] shadow-lg shadow-orange-500/[0.08] ring-1 ring-orange-500/20' 
                      : 'border-[#E7E3DA] hover:border-slate-300'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2 sm:mb-3">
                      <span className="text-[11px] font-bold text-[#FF5500]">
                        STAGE {node.step}
                      </span>
                      {node.highlight && (
                        <span className="text-[9px] font-bold text-[#10B981] bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded">
                          RISK CHECK
                        </span>
                      )}
                    </div>

                    <h4 className="text-sm sm:text-base font-bold text-[#0B192C] mb-0.5">
                      {node.title}
                    </h4>
                    <div className="text-[11px] text-[#707887] mb-2 font-medium">
                      {node.sub}
                    </div>

                    <p className="text-xs text-[#475569] leading-relaxed">
                      {node.detail}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#E7E3DA] flex items-center justify-between text-[10px] text-[#707887] mt-3 font-semibold">
                    <span>STATUS</span>
                    <span className="text-[#10B981] font-bold">VERIFIED</span>
                  </div>
                </div>

                {/* Mobile Down Arrow between stages */}
                {i < nodes.length - 1 && (
                  <div className="md:hidden flex justify-center py-0.5 text-[#FF5500]">
                    <ArrowDown className="w-4 h-4" />
                  </div>
                )}
              </React.Fragment>
            ))}

          </div>

          {/* Bottom Security Credentials Strip */}
          <div className="mt-6 sm:mt-8 pt-4 sm:pt-5 border-t border-[#E7E3DA] flex flex-wrap items-center justify-between gap-3 text-xs font-semibold text-[#475569]">
            <div className="flex items-center gap-2">
              <Lock className="w-3.5 h-3.5 text-[#FF5500]" />
              <span>TLS 1.3 End-to-End Encryption Architecture</span>
            </div>
            <div className="flex items-center gap-3 text-[11px] text-[#707887]">
              <span>ETHOCA / VERIFI COMPATIBLE</span>
              <span>•</span>
              <span className="text-[#10B981] font-bold">PCI-DSS COMPLIANT</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
