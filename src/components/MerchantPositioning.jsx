import React, { useState } from 'react';
import { 
  ArrowRight, CheckCircle2, Globe, Smartphone, 
  RefreshCw, ShieldCheck, Zap, Layers, Check, Lock, ShieldAlert
} from 'lucide-react';

import imgGaming from '../assets/gaming_payments_3d.jpg';
import imgTrading from '../assets/trading_forex_crypto_3d.jpg';
import imgDisputeShield from '../assets/chargeback_shield_3d.jpg';

export default function MerchantPositioning({ onOpenApplication }) {
  const [activeTab, setActiveTab] = useState(0);

  const pillars = [
    {
      id: 0,
      badge: '01 • ONLINE CASINO & iGAMING',
      mobileLabel: '01 Casino',
      title: 'Instant live deposit rails for Online Casino & Gaming',
      summary: 'High-frequency player deposits, instant winning payouts, zero aggregator freeze risks, and multi-MID load balancing.',
      image: imgGaming,
      highlights: [
        'Instant real-time player deposits & live casino top-ups',
        'Direct Tier-1 bank MIDs (Zero pooled aggregator freeze)',
        'Automated pre-dispute risk and chargeback shield',
        '24/7 dedicated high-volume transaction routing'
      ],
      tag: 'Casino & Gaming Engine'
    },
    {
      id: 1,
      badge: '02 • FOREX & CRYPTO TRADING',
      mobileLabel: '02 Forex & Trading',
      title: 'High-velocity trader funding & multi-currency settlement',
      summary: 'Institutional-grade payment rails engineered for Forex brokerages, CFD trading, and crypto platforms with instant T+1 batch funding.',
      image: imgTrading,
      highlights: [
        'High-limit trader deposits (up to ₹50 Lakhs / transaction)',
        'Real-time automated cascading fallback on soft declines',
        'Multi-currency FX settlement across 135+ global pairs',
        'Direct corporate MID registered in your licensed entity'
      ],
      tag: 'Trading & Brokerage Rails'
    },
    {
      id: 2,
      badge: '03 • CHARGEBACK SHIELD & MOTO',
      mobileLabel: '03 Dispute Shield',
      title: 'Automated pre-dispute defense & virtual terminal',
      summary: 'Intercept transaction disputes within seconds before they hit your MID, plus full virtual terminal for high-ticket transactions.',
      image: imgDisputeShield,
      highlights: [
        'Ethoca & Verifi RDR automatic dispute interception',
        'Maintains merchant dispute ratio safely below 0.65%',
        'Secure enterprise virtual terminal with hosted tokenization',
        'Full PCI-DSS Level 1 compliant token vault'
      ],
      tag: 'Pre-Dispute Defense'
    }
  ];

  const current = pillars[activeTab];

  return (
    <section 
      id="positioning"
      className="relative bg-[#F9F8F3] py-10 sm:py-16 lg:py-20 border-b border-[#E7E3DA] overflow-hidden"
    >
      {/* Background blueprint dot texture */}
      <div 
        aria-hidden 
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: 'radial-gradient(#0B192C 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Top Header */}
        <div className="max-w-3xl mb-5 sm:mb-8 space-y-1.5 sm:space-y-2">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-orange-50 border border-orange-200/80 text-[10px] sm:text-[10.5px] tracking-widest text-[#FF5500] uppercase font-bold shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF5500] animate-pulse" />
            <span>02 • Specialized High-Risk Pillars</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-[#0B192C] tracking-tight leading-[1.14]">
            Built for merchants traditional processors <span className="text-[#FF5500]">reject.</span>
          </h2>

          <p className="text-[#475569] text-xs sm:text-sm lg:text-[15px] leading-relaxed">
            High-risk merchant infrastructure designed with direct acquirer routing, subscription continuity, and automated pre-dispute defense.
          </p>
        </div>

        {/* MOBILE: Clean Segmented Pill Tabs (< md) */}
        <div className="flex md:hidden items-center gap-1.5 bg-[#FFFFFF] border border-[#E7E3DA] p-1.5 rounded-2xl mb-4 shadow-xs overflow-x-auto scrollbar-none">
          {pillars.map((pillar, idx) => {
            const isActive = activeTab === idx;
            return (
              <button
                key={pillar.id}
                onClick={() => setActiveTab(idx)}
                className={`flex-1 py-2 px-2 rounded-xl text-[11px] font-bold whitespace-nowrap transition-all text-center cursor-pointer ${
                  isActive
                    ? 'bg-[#FF5500] text-white shadow-sm'
                    : 'text-[#475569] hover:text-[#0B192C]'
                }`}
              >
                {pillar.mobileLabel}
              </button>
            );
          })}
        </div>

        {/* DESKTOP: 3 Interactive Selector Tabs (>= md) */}
        <div className="hidden md:grid md:grid-cols-3 gap-4 mb-8">
          {pillars.map((pillar, idx) => {
            const isActive = activeTab === idx;

            return (
              <div
                key={pillar.id}
                onMouseEnter={() => setActiveTab(idx)}
                onClick={() => setActiveTab(idx)}
                className={`p-5 rounded-2xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between relative overflow-hidden ${
                  isActive
                    ? 'bg-[#FFFFFF] border-[#FF5500] shadow-lg shadow-orange-500/[0.08] -translate-y-1'
                    : 'bg-[#FFFFFF]/75 hover:bg-[#FFFFFF] border-[#E7E3DA] shadow-xs hover:border-orange-300'
                }`}
              >
                {/* Active Top Traveling Line */}
                <div className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#FF5500] to-[#FF7733] transition-all duration-200 ${
                  isActive ? 'opacity-100' : 'opacity-0'
                }`} />

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md transition-colors ${
                      isActive ? 'bg-orange-50 text-[#FF5500] border border-orange-200/80' : 'bg-[#FCFBF8] text-[#707887] border border-[#E7E3DA]'
                    }`}>
                      {pillar.badge}
                    </span>
                    <span className={`text-xs font-semibold transition-colors ${isActive ? 'text-[#FF5500]' : 'text-slate-400'}`}>
                      {isActive ? '● Active' : 'Hover to View'}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#0B192C] mb-1">
                    {pillar.title}
                  </h3>

                  <p className="text-xs text-[#475569] leading-relaxed line-clamp-2">
                    {pillar.summary}
                  </p>
                </div>

                <div className="pt-3 mt-3 border-t border-[#E7E3DA] flex items-center justify-between text-xs font-semibold">
                  <span className={`font-bold transition-colors ${isActive ? 'text-[#FF5500]' : 'text-[#707887]'}`}>
                    Explore Visual
                  </span>
                  <ArrowRight className={`w-3.5 h-3.5 transition-transform ${
                    isActive ? 'text-[#FF5500] translate-x-1' : 'text-slate-400'
                  }`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Visual-First Showcase Box */}
        <div className="bg-[#FFFFFF] border border-[#E7E3DA] rounded-3xl p-5 sm:p-8 lg:p-10 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
          
          {/* LEFT: Clean Punchy Content (5 cols) */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-5 order-2 lg:order-1">
            <div>
              <span className="text-[10.5px] font-bold text-[#FF5500] uppercase tracking-widest bg-orange-50 border border-orange-200/80 px-2.5 py-0.5 rounded-md">
                {current.tag}
              </span>
              <div className="min-h-0 sm:min-h-[64px] flex items-center mt-2.5">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#0B192C] leading-snug">
                  {current.title}
                </h3>
              </div>
              <div className="min-h-0 sm:min-h-[44px] flex items-start mt-1">
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  {current.summary}
                </p>
              </div>
            </div>

            {/* Quick 4-Point Checklist */}
            <div className="space-y-2.5 pt-2 border-t border-[#E7E3DA]">
              {current.highlights.map((point, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs font-medium text-[#0B192C]">
                  <CheckCircle2 className="w-4 h-4 text-[#FF5500] shrink-0 mt-0.5" />
                  <span className="leading-snug">{point}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <button
                onClick={onOpenApplication}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#0B192C] hover:bg-[#1A283E] text-white font-semibold text-xs tracking-wide transition-all shadow-md hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Request Underwriting Review</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* RIGHT: 3D Image Showcase (7 cols) */}
          <div className="lg:col-span-7 relative group order-1 lg:order-2">
            <div className="relative rounded-2xl overflow-hidden border border-[#E7E3DA] shadow-md bg-[#FCFBF8] aspect-[16/9]">
              {pillars.map((pillar, i) => (
                <img
                  key={pillar.id}
                  src={pillar.image}
                  alt={pillar.title}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-400 ease-in-out ${
                    activeTab === i ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-95 z-0'
                  }`}
                  loading="eager"
                />
              ))}
              
              {/* Bottom Glass Tag - Hidden on mobile view */}
              <div className="hidden sm:flex absolute bottom-4 left-4 bg-[#FFFFFF]/90 backdrop-blur-md border border-[#E7E3DA] px-3 py-1.5 rounded-xl text-[11px] font-semibold items-center gap-2 shadow-sm z-20">
                <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                <span className="font-bold text-[#0B192C]">{current.tag}</span>
                <span className="text-slate-300">•</span>
                <span className="text-[#475569]">Vserve24 Core</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
