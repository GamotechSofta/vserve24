import React, { useState, useMemo } from 'react';
import { 
  ShieldAlert, ShieldCheck, AlertTriangle, ArrowRight, 
  DollarSign, TrendingDown, Percent, Sparkles, Lock, CheckCircle2
} from 'lucide-react';

export default function ChargebackCalculator({ onOpenApplication }) {
  const [monthlyTxCount, setMonthlyTxCount] = useState(4500);
  const [monthlyDisputes, setMonthlyDisputes] = useState(38);
  const [rdrDeflectionPercent, setRdrDeflectionPercent] = useState(75);

  const stats = useMemo(() => {
    // Current Baseline Ratio without RDR
    const baselineRatio = (monthlyDisputes / monthlyTxCount) * 100;
    
    // Deflected Disputes through Ethoca/Verifi RDR
    const deflectedCount = Math.round(monthlyDisputes * (rdrDeflectionPercent / 100));
    const finalRegisteredDisputes = Math.max(0, monthlyDisputes - deflectedCount);
    
    // Protected Ratio after RDR Deflection
    const protectedRatio = (finalRegisteredDisputes / monthlyTxCount) * 100;

    // Card Scheme Fines Estimate (Visa VFMP / Mastercard ECP triggers at 0.90% with ₹4,000-₹8,000 fine/dispute + ₹4,00,000 monthly audit fines)
    const isExceedingBaseline = baselineRatio >= 0.90;
    const isProtected = protectedRatio < 0.90;
    
    const baselineFineRisk = isExceedingBaseline 
      ? (monthlyDisputes * 5000) + 400000 
      : (baselineRatio >= 0.65 ? monthlyDisputes * 2000 : 0);

    const protectedFineRisk = isProtected 
      ? 0 
      : (finalRegisteredDisputes * 5000);

    const totalMoneySaved = baselineFineRisk - protectedFineRisk + (deflectedCount * 3500); // savings on fines + representment fees

    return {
      baselineRatio: baselineRatio.toFixed(2),
      protectedRatio: protectedRatio.toFixed(2),
      deflectedCount,
      finalRegisteredDisputes,
      isExceedingBaseline,
      isProtected,
      baselineFineRisk,
      protectedFineRisk,
      totalMoneySaved
    };
  }, [monthlyTxCount, monthlyDisputes, rdrDeflectionPercent]);

  return (
    <section id="chargeback-calculator" className="relative bg-[#FFFFFF] py-20 lg:py-28 border-b border-[#E7E3DA] overflow-hidden">
      
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
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 lg:mb-14">
          <div className="max-w-2xl space-y-3">
            <div className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200/80 text-xs tracking-widest text-[#FF5500] uppercase font-bold shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#FF5500] animate-pulse" />
              <span>Card Scheme Compliance Tool</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#0B192C] tracking-tight leading-[1.08]">
              Chargeback Ratio & Fine Safety Calculator.
            </h2>

            <p className="text-[#475569] text-base lg:text-lg leading-relaxed">
              Model your Visa & Mastercard dispute ratio against the 0.90% Excessive Dispute threshold and simulate automated Ethoca & Verifi RDR deflection.
            </p>
          </div>

          <div className="flex items-center gap-3 self-start lg:self-auto text-xs text-[#707887]">
            <span className="flex items-center gap-1.5 text-[#10B981] font-bold bg-emerald-50 border border-emerald-200 px-3.5 py-2 rounded-xl">
              <ShieldCheck className="w-4 h-4 text-[#10B981]" />
              Ethoca & Verifi RDR Native Interception
            </span>
          </div>
        </div>

        {/* Two-Column Calculator Simulator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* LEFT: Sliders & Controls (6 cols) */}
          <div className="lg:col-span-6 bg-[#FCFBF8] border border-[#E7E3DA] rounded-3xl p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-xs">
            
            <div className="space-y-6">
              
              {/* 1. Monthly Transaction Volume */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#707887]">
                    1. Monthly Transaction Count (Orders)
                  </label>
                  <span className="text-base font-bold text-[#0B192C] bg-white border border-[#E7E3DA] px-3 py-1 rounded-xl">
                    {monthlyTxCount.toLocaleString()} orders
                  </span>
                </div>
                <input
                  type="range"
                  min="500"
                  max="50000"
                  step="500"
                  value={monthlyTxCount}
                  onChange={(e) => setMonthlyTxCount(Number(e.target.value))}
                  className="w-full h-2.5 bg-[#E7E3DA] rounded-lg appearance-none cursor-pointer accent-[#FF5500]"
                />
                <div className="flex justify-between text-[11px] text-[#707887]">
                  <span>500 orders</span>
                  <span>10,000</span>
                  <span>25,000</span>
                  <span>50,000+</span>
                </div>
              </div>

              {/* 2. Monthly Disputes Received */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#707887]">
                    2. Monthly Disputes / Inquiries Received
                  </label>
                  <span className="text-base font-bold text-[#FF5500] bg-orange-50 border border-orange-200/80 px-3 py-1 rounded-xl">
                    {monthlyDisputes} disputes
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="350"
                  step="1"
                  value={monthlyDisputes}
                  onChange={(e) => setMonthlyDisputes(Number(e.target.value))}
                  className="w-full h-2.5 bg-[#E7E3DA] rounded-lg appearance-none cursor-pointer accent-[#FF5500]"
                />
                <div className="flex justify-between text-[11px] text-[#707887]">
                  <span>1 dispute</span>
                  <span>50 disputes</span>
                  <span>150 disputes</span>
                  <span>350+</span>
                </div>
              </div>

              {/* 3. Ethoca & Verifi RDR Deflection Efficiency */}
              <div className="space-y-3 p-4 rounded-2xl bg-white border border-[#E7E3DA] shadow-2xs">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <label className="text-xs font-bold text-[#0B192C] flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-[#10B981]" />
                      <span>Ethoca & Verifi RDR Deflection Rate</span>
                    </label>
                    <p className="text-[11px] text-[#707887]">Percentage of cardholder inquiries automatically refunded before registration</p>
                  </div>
                  <span className="text-sm font-bold text-[#10B981] bg-emerald-50 px-2.5 py-1 rounded-lg">
                    {rdrDeflectionPercent}% Auto-Deflected
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="95"
                  step="5"
                  value={rdrDeflectionPercent}
                  onChange={(e) => setRdrDeflectionPercent(Number(e.target.value))}
                  className="w-full h-2.5 bg-[#E7E3DA] rounded-lg appearance-none cursor-pointer accent-[#10B981]"
                />
              </div>

            </div>

            {/* Threshold Reference Card */}
            <div className="p-4 rounded-2xl bg-white border border-[#E7E3DA] space-y-2 text-xs">
              <div className="flex items-center justify-between">
                <span className="font-bold text-[#0B192C]">Visa VFMP / Mastercard ECP Threshold:</span>
                <span className="font-extrabold text-rose-600">0.90% Limit</span>
              </div>
              <p className="text-[11px] text-[#707887]">
                Exceeding 0.90% dispute ratio triggers ₹4,000/dispute scheme penalties, mandatory rolling reserves, and risk of MATCH/TMF listing.
              </p>
            </div>

          </div>

          {/* RIGHT: Ratio Health & Savings Output (6 cols) */}
          <div className="lg:col-span-6 bg-[#0B192C] text-white rounded-3xl p-6 sm:p-8 lg:p-10 flex flex-col justify-between shadow-xl relative overflow-hidden">
            
            {/* Ambient Warmth */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF5500]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-6">
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Real-Time Ratio Compliance Simulation
                </span>
                <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${
                  stats.isProtected 
                    ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30' 
                    : 'bg-rose-500/10 text-rose-400 border border-rose-500/30'
                }`}>
                  {stats.isProtected ? '● Compliant & Safe' : '⚠️ Action Required'}
                </span>
              </div>

              {/* Before vs After Ratio Comparison */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                
                {/* Baseline Without Deflection */}
                <div className={`p-4 sm:p-5 rounded-2xl border ${
                  stats.isExceedingBaseline 
                    ? 'bg-rose-950/30 border-rose-800/80 text-rose-200' 
                    : 'bg-slate-900/80 border-slate-800 text-slate-300'
                }`}>
                  <span className="text-[10.5px] uppercase font-bold tracking-wider block opacity-75">
                    Without RDR Protection
                  </span>
                  <div className={`text-3xl sm:text-4xl font-extrabold mt-1 ${
                    stats.isExceedingBaseline ? 'text-rose-400' : 'text-slate-200'
                  }`}>
                    {stats.baselineRatio}%
                  </div>
                  <div className="text-[11px] mt-1 opacity-80">
                    {stats.isExceedingBaseline ? '⚠️ Violates 0.90% Threshold' : 'Within Normal Range'}
                  </div>
                </div>

                {/* Protected with Vserve24 RDR */}
                <div className="p-4 sm:p-5 rounded-2xl bg-emerald-950/30 border border-emerald-800/80 text-emerald-200">
                  <span className="text-[10.5px] uppercase font-bold tracking-wider text-emerald-400 block">
                    With Vserve24 Auto-Deflect
                  </span>
                  <div className="text-3xl sm:text-4xl font-extrabold text-emerald-400 mt-1">
                    {stats.protectedRatio}%
                  </div>
                  <div className="text-[11px] text-emerald-300 mt-1">
                    ✓ Clean &amp; Healthy MID Standing
                  </div>
                </div>

              </div>

              {/* Detailed Numbers Breakdown */}
              <div className="space-y-2.5 pt-2">
                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between text-xs">
                  <span className="text-slate-400">Pre-Disputes Auto-Deflected (Zero Penalty):</span>
                  <span className="text-emerald-400 font-bold">~{stats.deflectedCount} disputes stopped</span>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between text-xs">
                  <span className="text-slate-400">Card Brand Fine Avoidance / Month:</span>
                  <span className="text-[#FF5500] font-bold">+₹{stats.totalMoneySaved.toLocaleString('en-IN')} saved / mo</span>
                </div>
              </div>

            </div>

            {/* Bottom Shield Guarantee & CTA */}
            <div className="pt-6 mt-6 border-t border-slate-800 space-y-3 relative z-10">
              <button
                onClick={onOpenApplication}
                className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-[#FF5500] hover:bg-[#E64A00] text-white font-bold text-xs sm:text-sm tracking-wide transition-all shadow-lg shadow-orange-500/30 hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Activate Ethoca & Verifi Chargeback Shield</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400">
                <Lock className="w-3.5 h-3.5 text-[#FF5500]" />
                <span>Zero chargeback registration on deflected inquiries • Protects your business MIDs</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
