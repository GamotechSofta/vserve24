import React, { useState, useMemo } from 'react';
import { 
  Calculator, DollarSign, TrendingUp, ShieldCheck, 
  ArrowRight, Sparkles, RefreshCw, CheckCircle2, HelpCircle,
  Zap, Lock, Percent
} from 'lucide-react';

export default function FeeCalculator({ onOpenApplication }) {
  const [monthlyVolume, setMonthlyVolume] = useState(2500000); // ₹25,00,000
  const [avgTicket, setAvgTicket] = useState(3500); // ₹3,500
  const [industryTier, setIndustryTier] = useState('gaming');
  const [disputeDeflectionEnabled, setDisputeDeflectionEnabled] = useState(true);

  const tiers = {
    gaming: { name: 'iGaming, Esports & Skill Gaming', rate: 2.85, baselineAuth: 74, vserveAuth: 93, disputeReduction: 0.76 },
    trading: { name: 'Forex, Prop Firms & Crypto Trading', rate: 2.75, baselineAuth: 76, vserveAuth: 94, disputeReduction: 0.78 },
    nutra: { name: 'Nutraceuticals & Supplements', rate: 2.85, baselineAuth: 76, vserveAuth: 91, disputeReduction: 0.72 },
    cbd: { name: 'CBD & Hemp Wellness', rate: 2.95, baselineAuth: 74, vserveAuth: 89, disputeReduction: 0.68 },
    saas: { name: 'SaaS & Subscription Continuity', rate: 2.65, baselineAuth: 82, vserveAuth: 94, disputeReduction: 0.78 },
    travel: { name: 'Travel & Hospitality', rate: 2.75, baselineAuth: 78, vserveAuth: 92, disputeReduction: 0.70 },
    adult: { name: 'Digital Content & Streaming', rate: 3.10, baselineAuth: 72, vserveAuth: 88, disputeReduction: 0.65 },
    coaching: { name: 'High-Ticket Consulting / Coaching', rate: 2.90, baselineAuth: 75, vserveAuth: 90, disputeReduction: 0.75 },
    dropship: { name: 'E-Commerce & Dropshipping', rate: 2.80, baselineAuth: 79, vserveAuth: 92, disputeReduction: 0.74 },
  };

  const currentTier = tiers[industryTier];

  const calculations = useMemo(() => {
    const txCount = Math.round(monthlyVolume / avgTicket);
    const authLiftPercent = currentTier.vserveAuth - currentTier.baselineAuth; // e.g. 19%
    const salvagedVolume = Math.round(monthlyVolume * (authLiftPercent / 100));
    
    // Dispute savings calculation
    const estimatedDisputesWithoutRDR = Math.round(txCount * 0.012); // ~1.2% dispute rate
    const preventedChargebacks = disputeDeflectionEnabled ? Math.round(estimatedDisputesWithoutRDR * currentTier.disputeReduction) : 0;
    const chargebackFeeSavings = preventedChargebacks * 3500; // ₹3,500 avg bank dispute fee + operational loss
    
    // Processor fees
    const estimatedProcessingFee = Math.round((monthlyVolume * (currentTier.rate / 100)) + (txCount * 15));
    const netPayout = monthlyVolume - estimatedProcessingFee;
    
    // Total monthly value generated
    const totalMonthlyGain = salvagedVolume + chargebackFeeSavings;

    return {
      txCount,
      authLiftPercent,
      salvagedVolume,
      preventedChargebacks,
      chargebackFeeSavings,
      estimatedProcessingFee,
      netPayout,
      totalMonthlyGain,
      effectiveRate: ((estimatedProcessingFee / monthlyVolume) * 100).toFixed(2)
    };
  }, [monthlyVolume, avgTicket, industryTier, disputeDeflectionEnabled]);

  const handleApplyWithParams = () => {
    if (onOpenApplication) {
      onOpenApplication({
        volume: `₹${(monthlyVolume / 100000).toFixed(0)} Lakhs/mo`,
        industry: currentTier.name
      });
    }
  };

  return (
    <section id="calculator" className="relative bg-[#FFFFFF] py-20 lg:py-28 border-b border-[#E7E3DA] overflow-hidden">
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
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 lg:mb-16">
          <div className="max-w-2xl space-y-3">
            <div className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200/80 text-xs tracking-widest text-[#FF5500] uppercase font-bold shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#FF5500] animate-pulse" />
              <span>Interactive ROI & Interchange Tool</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#0B192C] tracking-tight leading-[1.08]">
              Calculate your recovered revenue and net payouts in INR.
            </h2>

            <p className="text-[#475569] text-base lg:text-lg leading-relaxed">
              Estimate authorization rate improvements, salvaged bank declines, and pre-dispute savings tailored to your exact merchant volume.
            </p>
          </div>

          <div className="flex items-center gap-3 self-start lg:self-auto text-xs text-[#707887]">
            <span className="flex items-center gap-1.5 text-[#FF5500] font-bold bg-orange-50 border border-orange-200 px-3.5 py-2 rounded-xl">
              <Calculator className="w-4 h-4 text-[#FF5500]" />
              Real-Time Dynamic Estimator (INR)
            </span>
          </div>
        </div>

        {/* Two-Column Interactive Calculator Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* LEFT: Input Sliders & Selectors (6 cols) */}
          <div className="lg:col-span-6 bg-[#FCFBF8] border border-[#E7E3DA] rounded-3xl p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-xs">
            
            <div className="space-y-6">
              
              {/* Gaming & Trading Quick Presets */}
              <div className="space-y-2">
                <label className="text-[11px] font-bold uppercase tracking-wider text-[#707887] flex items-center justify-between">
                  <span>⚡ Quick Model Presets</span>
                  <span className="text-[#FF5500] font-semibold text-[10.5px]">1-Click Modeling</span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  <button
                    type="button"
                    onClick={() => { setIndustryTier('gaming'); setMonthlyVolume(5000000); setAvgTicket(1500); }}
                    className={`px-2.5 py-2 rounded-xl text-left border text-xs font-bold transition-all cursor-pointer ${
                      industryTier === 'gaming' && monthlyVolume === 5000000
                        ? 'bg-[#FF5500] text-white border-[#FF5500] shadow-xs'
                        : 'bg-white text-[#0B192C] border-[#E7E3DA] hover:border-[#FF5500]/50'
                    }`}
                  >
                    <div className="truncate">🎮 iGaming</div>
                    <div className={`text-[10px] font-normal ${industryTier === 'gaming' && monthlyVolume === 5000000 ? 'text-white/80' : 'text-[#707887]'}`}>₹50L • ₹1.5k AOV</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => { setIndustryTier('trading'); setMonthlyVolume(15000000); setAvgTicket(15000); }}
                    className={`px-2.5 py-2 rounded-xl text-left border text-xs font-bold transition-all cursor-pointer ${
                      industryTier === 'trading' && monthlyVolume === 15000000
                        ? 'bg-[#FF5500] text-white border-[#FF5500] shadow-xs'
                        : 'bg-white text-[#0B192C] border-[#E7E3DA] hover:border-[#FF5500]/50'
                    }`}
                  >
                    <div className="truncate">📈 Forex Trading</div>
                    <div className={`text-[10px] font-normal ${industryTier === 'trading' && monthlyVolume === 15000000 ? 'text-white/80' : 'text-[#707887]'}`}>₹1.5 Cr • ₹15k AOV</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => { setIndustryTier('trading'); setMonthlyVolume(8000000); setAvgTicket(8000); }}
                    className={`px-2.5 py-2 rounded-xl text-left border text-xs font-bold transition-all cursor-pointer ${
                      industryTier === 'trading' && monthlyVolume === 8000000
                        ? 'bg-[#FF5500] text-white border-[#FF5500] shadow-xs'
                        : 'bg-white text-[#0B192C] border-[#E7E3DA] hover:border-[#FF5500]/50'
                    }`}
                  >
                    <div className="truncate">⚡ Crypto Rail</div>
                    <div className={`text-[10px] font-normal ${industryTier === 'trading' && monthlyVolume === 8000000 ? 'text-white/80' : 'text-[#707887]'}`}>₹80L • ₹8k AOV</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => { setIndustryTier('gaming'); setMonthlyVolume(2500000); setAvgTicket(2500); }}
                    className={`px-2.5 py-2 rounded-xl text-left border text-xs font-bold transition-all cursor-pointer ${
                      industryTier === 'gaming' && monthlyVolume === 2500000
                        ? 'bg-[#FF5500] text-white border-[#FF5500] shadow-xs'
                        : 'bg-white text-[#0B192C] border-[#E7E3DA] hover:border-[#FF5500]/50'
                    }`}
                  >
                    <div className="truncate">🏆 Esports League</div>
                    <div className={`text-[10px] font-normal ${industryTier === 'gaming' && monthlyVolume === 2500000 ? 'text-white/80' : 'text-[#707887]'}`}>₹25L • ₹2.5k AOV</div>
                  </button>
                </div>
              </div>

              {/* 1. Industry Risk Vertical Select */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-[#707887] flex items-center justify-between">
                  <span>1. Industry Risk Category</span>
                  <span className="text-[#FF5500] font-semibold text-[11px]">Interchange-Plus Tier</span>
                </label>
                <select
                  value={industryTier}
                  onChange={(e) => setIndustryTier(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-white border border-[#E7E3DA] text-sm font-semibold text-[#0B192C] focus:outline-none focus:border-[#FF5500] focus:ring-3 focus:ring-orange-500/10 shadow-xs cursor-pointer"
                >
                  {Object.entries(tiers).map(([key, t]) => (
                    <option key={key} value={key}>{t.name} (from {t.rate}% + ₹15/tx)</option>
                  ))}
                </select>
              </div>

              {/* 2. Monthly Processing Volume Slider */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#707887]">
                    2. Monthly Processing Volume
                  </label>
                  <span className="text-lg font-bold text-[#FF5500] bg-orange-50 border border-orange-200/80 px-3 py-1 rounded-xl">
                    ₹{monthlyVolume.toLocaleString('en-IN')} / mo
                  </span>
                </div>
                <input
                  type="range"
                  min="200000"
                  max="20000000"
                  step="100000"
                  value={monthlyVolume}
                  onChange={(e) => setMonthlyVolume(Number(e.target.value))}
                  className="w-full h-2.5 bg-[#E7E3DA] rounded-lg appearance-none cursor-pointer accent-[#FF5500]"
                />
                <div className="flex justify-between text-[11px] text-[#707887] font-medium">
                  <span>₹2 Lakhs</span>
                  <span>₹50 Lakhs</span>
                  <span>₹1 Crore</span>
                  <span>₹2 Crores+</span>
                </div>
              </div>

              {/* 3. Average Ticket Value Slider */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#707887]">
                    3. Average Order Value (Ticket Size)
                  </label>
                  <span className="text-base font-bold text-[#0B192C] bg-white border border-[#E7E3DA] px-3 py-1 rounded-xl">
                    ₹{avgTicket.toLocaleString('en-IN')} per order
                  </span>
                </div>
                <input
                  type="range"
                  min="500"
                  max="50000"
                  step="250"
                  value={avgTicket}
                  onChange={(e) => setAvgTicket(Number(e.target.value))}
                  className="w-full h-2.5 bg-[#E7E3DA] rounded-lg appearance-none cursor-pointer accent-[#FF5500]"
                />
                <div className="flex justify-between text-[11px] text-[#707887] font-medium">
                  <span>₹500 (Micro)</span>
                  <span>₹5,000 (Mid-Ticket)</span>
                  <span>₹25,000 (High-Ticket)</span>
                  <span>₹50,000+</span>
                </div>
              </div>

              {/* 4. Pre-Dispute Ethoca / Verifi Toggle */}
              <div className="p-4 rounded-2xl bg-white border border-[#E7E3DA] flex items-center justify-between shadow-2xs">
                <div className="space-y-0.5">
                  <div className="text-xs font-bold text-[#0B192C] flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-[#10B981]" />
                    <span>Ethoca &amp; Verifi RDR Deflection</span>
                  </div>
                  <p className="text-[11px] text-[#707887]">
                    Intercept chargebacks before they register with card brands
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setDisputeDeflectionEnabled(!disputeDeflectionEnabled)}
                  className={`w-12 h-7 rounded-full transition-colors relative cursor-pointer ${
                    disputeDeflectionEnabled ? 'bg-[#10B981]' : 'bg-[#E7E3DA]'
                  }`}
                >
                  <span className={`w-5 h-5 rounded-full bg-white absolute top-1 transition-transform shadow-sm ${
                    disputeDeflectionEnabled ? 'right-1' : 'left-1'
                  }`} />
                </button>
              </div>

            </div>

            {/* Bottom Volume Summary Badge */}
            <div className="pt-4 border-t border-[#E7E3DA] flex items-center justify-between text-xs text-[#707887]">
              <span>Estimated Orders: <strong className="text-[#0B192C]">{calculations.txCount.toLocaleString('en-IN')} / mo</strong></span>
              <span>Tier-1 Acquirer Rail: <strong className="text-[#10B981]">Dedicated MID</strong></span>
            </div>

          </div>

          {/* RIGHT: Results Breakdown Card (6 cols) */}
          <div className="lg:col-span-6 bg-[#0B192C] text-white rounded-3xl p-6 sm:p-8 lg:p-10 flex flex-col justify-between shadow-xl relative overflow-hidden">
            
            {/* Top Glowing Orb */}
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-[#FF5500]/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-6">
              
              {/* Header Status */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#FF5500]" />
                  <span className="text-xs font-bold tracking-wider uppercase text-slate-300">
                    Calculated Monthly Value Lift
                  </span>
                </div>
                <span className="text-[11px] font-bold text-[#10B981] bg-emerald-500/10 border border-emerald-500/30 px-2.5 py-0.5 rounded-full">
                  +{calculations.authLiftPercent}% Auth Rate
                </span>
              </div>

              {/* Big Highlighted Total Value */}
              <div>
                <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
                  Total Monthly Revenue Retained &amp; Salvaged
                </span>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#FF5500] mt-1 tracking-tight">
                  +₹{calculations.totalMonthlyGain.toLocaleString('en-IN')} <span className="text-sm font-normal text-slate-400">/ mo</span>
                </div>
                <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                  Combining decline salvage cascading with pre-dispute fee protection on direct acquiring rails.
                </p>
              </div>

              {/* 3 Metric Breakdown Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                
                {/* 1. Salvaged Revenue */}
                <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-1">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span>Salvaged Declines</span>
                    <TrendingUp className="w-3.5 h-3.5 text-[#10B981]" />
                  </div>
                  <div className="text-lg font-bold text-white">
                    +₹{calculations.salvagedVolume.toLocaleString('en-IN')}
                  </div>
                  <div className="text-[11px] text-slate-500">
                    From {currentTier.baselineAuth}% → {currentTier.vserveAuth}% approval rate
                  </div>
                </div>

                {/* 2. Dispute Deflection Savings */}
                <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-1">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span>Dispute Deflection</span>
                    <ShieldCheck className="w-3.5 h-3.5 text-[#FF5500]" />
                  </div>
                  <div className="text-lg font-bold text-white">
                    +₹{calculations.chargebackFeeSavings.toLocaleString('en-IN')}
                  </div>
                  <div className="text-[11px] text-slate-500">
                    ~{calculations.preventedChargebacks} disputes auto-resolved
                  </div>
                </div>

                {/* 3. Estimated Processing Fee */}
                <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-1">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span>Transparent Cost</span>
                    <Percent className="w-3.5 h-3.5 text-slate-400" />
                  </div>
                  <div className="text-lg font-bold text-slate-200">
                    ₹{calculations.estimatedProcessingFee.toLocaleString('en-IN')}
                  </div>
                  <div className="text-[11px] text-slate-500">
                    Effective rate: {calculations.effectiveRate}% (no holdbacks)
                  </div>
                </div>

                {/* 4. Estimated Net Merchant Payout */}
                <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-1">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span>Net Daily Settlement</span>
                    <Zap className="w-3.5 h-3.5 text-[#FF5500]" />
                  </div>
                  <div className="text-lg font-bold text-emerald-400">
                    ₹{calculations.netPayout.toLocaleString('en-IN')}
                  </div>
                  <div className="text-[11px] text-slate-500">
                    Direct batch to merchant bank
                  </div>
                </div>

              </div>

            </div>

            {/* CTA Button */}
            <div className="pt-6 mt-6 border-t border-slate-800 space-y-3 relative z-10">
              <button
                onClick={handleApplyWithParams}
                className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-[#FF5500] hover:bg-[#E64A00] text-white font-bold text-xs sm:text-sm tracking-wide transition-all shadow-lg shadow-orange-500/30 hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Lock In This Rate &amp; Apply for Dedicated MID</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              
              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400">
                <Lock className="w-3.5 h-3.5 text-[#FF5500]" />
                <span>Zero setup fee guarantee • 24h underwriting review • No reserve holds</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
