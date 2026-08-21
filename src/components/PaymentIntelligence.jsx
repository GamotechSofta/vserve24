import React, { useState } from 'react';
import { 
  Building2, UserCheck, ShieldCheck, Zap, Landmark, 
  Lock, ArrowRight, ArrowLeft, CheckCircle2, Activity, 
  ChevronRight, Sparkles 
} from 'lucide-react';

export default function PaymentIntelligence({ onOpenApplication }) {
  const [activeMobileStep, setActiveMobileStep] = useState(2); // Default to Core Engine (Stage 3)

  const nodes = [
    {
      step: '01',
      shortName: '1. Ingestion',
      title: 'Merchant Integration',
      sub: 'API & Webhook Ingestion',
      icon: Building2,
      detail: 'Online Casino, Forex, and iGaming platforms connect securely via REST APIs, SDKs, or server-to-server webhooks.',
      metric: 'REST API & SDK',
      badgeColor: 'text-blue-600 bg-blue-50 border-blue-200'
    },
    {
      step: '02',
      shortName: '2. Checkout',
      title: 'End User / Player',
      sub: 'Frictionless Checkout',
      icon: UserCheck,
      detail: 'Players initiate instant UPI, Dynamic QR, or NetBanking deposits with zero drop-off and instant payment verification.',
      metric: '1-Tap Dynamic QR',
      badgeColor: 'text-indigo-600 bg-indigo-50 border-indigo-200'
    },
    {
      step: '03',
      shortName: '3. AI Engine',
      title: 'Vserve24 Core Engine',
      sub: 'AI Risk & Smart Routing',
      icon: ShieldCheck,
      detail: 'Machine learning scores fraud risk, filters malicious bots, and dynamically cascades transactions to optimal sponsor bank MIDs.',
      metric: 'Real-Time Risk AI',
      highlight: true,
      badgeColor: 'text-[#FF5500] bg-orange-50 border-orange-200'
    },
    {
      step: '04',
      shortName: '4. Live Rails',
      title: 'Pay-In & Payout Rails',
      sub: 'Instant Multi-Channel Clearing',
      icon: Zap,
      detail: 'High-frequency collections paired with 24/7 automated IMPS player winning payouts and immediate fund authorization.',
      metric: '24/7 IMPS Payouts',
      badgeColor: 'text-emerald-600 bg-emerald-50 border-emerald-200'
    },
    {
      step: '05',
      shortName: '5. Settlement',
      title: 'Settlement Engine',
      sub: 'T+0 Automated Net Funding',
      icon: Landmark,
      detail: 'Direct T+0 daily bank settlements and liquidity deposited directly into your registered merchant business bank account.',
      metric: 'T+0 Direct Bank Credit',
      badgeColor: 'text-purple-600 bg-purple-50 border-purple-200'
    }
  ];

  const currentMobileNode = nodes[activeMobileStep];
  const CurrentIcon = currentMobileNode.icon;

  return (
    <section id="intelligence" className="relative bg-[#FCFBF8] text-[#0B192C] py-10 sm:py-16 lg:py-24 border-b border-[#E7E3DA] overflow-hidden">
      
      {/* Background blueprint grid */}
      <div 
        aria-hidden 
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: 'radial-gradient(#0B192C 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-10 space-y-1.5 sm:space-y-2.5">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-orange-50 border border-orange-200/80 text-[10px] sm:text-[10.5px] tracking-widest text-[#FF5500] uppercase font-bold shadow-xs mb-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF5500] animate-pulse" />
            <span>05 • Global Processing Pipeline</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-[40px] font-bold text-[#0B192C] tracking-tight leading-tight">
            The infrastructure behind every transaction.
          </h2>
          <p className="text-[#475569] text-xs sm:text-base lg:text-lg leading-relaxed">
            How Vserve24 powers real-time player deposits, AI risk filtering, and direct bank payouts in a seamless 5-stage pipeline.
          </p>
        </div>

        {/* ════ MOBILE-ONLY: Interactive 5-Step Visual Navigator (< md) ════ */}
        <div className="md:hidden space-y-4">
          
          {/* 1. Horizontal Step Selector Bar */}
          <div className="bg-[#FFFFFF] border border-[#E7E3DA] p-1.5 rounded-2xl shadow-xs">
            <div className="flex items-center justify-between gap-1 overflow-x-auto scrollbar-none">
              {nodes.map((node, i) => {
                const isActive = activeMobileStep === i;
                const NodeIcon = node.icon;
                return (
                  <button
                    key={i}
                    onClick={() => setActiveMobileStep(i)}
                    className={`flex-1 py-2 px-2 rounded-xl text-[11px] font-bold transition-all flex flex-col items-center gap-1 cursor-pointer shrink-0 min-w-[62px] ${
                      isActive
                        ? 'bg-[#FF5500] text-white shadow-sm shadow-orange-500/25'
                        : 'bg-transparent text-[#707887] hover:text-[#0B192C]'
                    }`}
                  >
                    <NodeIcon className="w-4 h-4" />
                    <span className="text-[10px]">{node.step}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 2. Focused Active Stage Showcase Card */}
          <div className="bg-[#FFFFFF] border border-[#E7E3DA] rounded-3xl p-5 shadow-sm relative overflow-hidden">
            {/* Top Badge Strip */}
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#E7E3DA]">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-md bg-orange-50 border border-orange-200 text-[#FF5500]">
                  STAGE {currentMobileNode.step} OF 05
                </span>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md border ${currentMobileNode.badgeColor}`}>
                  {currentMobileNode.metric}
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-[10.5px] font-bold text-[#10B981]">
                <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                <span>ACTIVE</span>
              </div>
            </div>

            {/* Stage Title & Icon */}
            <div className="flex items-start gap-3.5 mb-3">
              <div className="w-11 h-11 rounded-2xl bg-orange-50 border border-orange-200 text-[#FF5500] flex items-center justify-center shrink-0 shadow-xs">
                <CurrentIcon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base font-bold text-[#0B192C] leading-snug">
                  {currentMobileNode.title}
                </h3>
                <div className="text-xs text-[#FF5500] font-semibold mt-0.5">
                  {currentMobileNode.sub}
                </div>
              </div>
            </div>

            {/* Stage Explanation */}
            <p className="text-xs text-[#475569] leading-relaxed mb-4 bg-[#FCFBF8] p-3 rounded-xl border border-[#E7E3DA]">
              {currentMobileNode.detail}
            </p>

            {/* Previous / Next Stage Step Switchers */}
            <div className="flex items-center justify-between gap-2 pt-1">
              <button
                disabled={activeMobileStep === 0}
                onClick={() => setActiveMobileStep((prev) => Math.max(0, prev - 1))}
                className={`flex-1 py-2 px-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${
                  activeMobileStep === 0
                    ? 'border-[#E7E3DA] text-slate-300 opacity-40 cursor-not-allowed'
                    : 'border-[#E7E3DA] bg-white text-[#0B192C] hover:bg-[#F7F4ED] cursor-pointer shadow-xs'
                }`}
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Prev Stage</span>
              </button>

              <button
                disabled={activeMobileStep === nodes.length - 1}
                onClick={() => setActiveMobileStep((prev) => Math.min(nodes.length - 1, prev + 1))}
                className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${
                  activeMobileStep === nodes.length - 1
                    ? 'border border-[#E7E3DA] text-slate-300 opacity-40 cursor-not-allowed'
                    : 'bg-[#FF5500] hover:bg-[#E64A00] text-white shadow-sm shadow-orange-500/20 cursor-pointer'
                }`}
              >
                <span>Next Stage</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* 3. Compact 5-Step Connected Flow Snapshot */}
          <div className="bg-[#FFFFFF] border border-[#E7E3DA] rounded-2xl p-3 shadow-xs">
            <div className="text-[10px] font-bold text-[#707887] uppercase tracking-wider mb-2">
              COMPLETE TRANSACTION FLOW:
            </div>
            <div className="space-y-1.5 divide-y divide-[#E7E3DA]/50">
              {nodes.map((node, i) => (
                <div 
                  key={i}
                  onClick={() => setActiveMobileStep(i)}
                  className={`flex items-center justify-between text-xs py-1.5 cursor-pointer rounded-lg px-1.5 transition-colors ${
                    activeMobileStep === i ? 'bg-orange-50/80 font-bold text-[#FF5500]' : 'text-[#475569]'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className={`w-4 h-4 rounded-full text-[9px] font-bold flex items-center justify-center ${
                      activeMobileStep === i ? 'bg-[#FF5500] text-white' : 'bg-slate-100 text-slate-600'
                    }`}>
                      {node.step}
                    </span>
                    <span className="truncate max-w-[200px]">{node.title}</span>
                  </div>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* ════ DESKTOP-ONLY: 5-Node Connected Architecture Grid (>= md) ════ */}
        <div className="hidden md:block bg-[#FFFFFF] border border-[#E7E3DA] rounded-3xl p-6 lg:p-8 relative overflow-hidden shadow-sm">
          
          {/* Top Status Bar */}
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#E7E3DA] text-xs font-semibold">
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

          {/* 5-Node Connected Flow Grid */}
          <div className="grid grid-cols-5 gap-3.5 lg:gap-4 relative">
            {nodes.map((node, i) => {
              const NodeIcon = node.icon;
              return (
                <div 
                  key={i} 
                  className={`p-4 rounded-2xl border transition-all duration-200 flex flex-col justify-between min-h-[200px] bg-[#FFFFFF] ${
                    node.highlight 
                      ? 'border-[#FF5500] shadow-lg shadow-orange-500/[0.08] ring-1 ring-orange-500/20' 
                      : 'border-[#E7E3DA] hover:border-orange-300 shadow-2xs'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2.5">
                      <span className="text-[11px] font-bold text-[#FF5500]">
                        STAGE {node.step}
                      </span>
                      <div className="w-7 h-7 rounded-lg bg-orange-50 border border-orange-200/80 text-[#FF5500] flex items-center justify-center">
                        <NodeIcon className="w-3.5 h-3.5" />
                      </div>
                    </div>

                    <h4 className="text-sm font-bold text-[#0B192C] mb-0.5">
                      {node.title}
                    </h4>
                    <div className="text-[10.5px] text-[#FF5500] mb-2 font-semibold">
                      {node.sub}
                    </div>

                    <p className="text-xs text-[#475569] leading-relaxed">
                      {node.detail}
                    </p>
                  </div>

                  <div className="pt-2.5 border-t border-[#E7E3DA] flex items-center justify-between text-[10px] text-[#707887] mt-3 font-semibold">
                    <span>METRIC</span>
                    <span className="text-[#10B981] font-bold">{node.metric}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Security Credentials Strip */}
          <div className="mt-6 pt-4 border-t border-[#E7E3DA] flex flex-wrap items-center justify-between gap-3 text-xs font-semibold text-[#475569]">
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
