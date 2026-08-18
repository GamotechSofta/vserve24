import React, { useState } from 'react';
import { 
  ShieldCheck, CheckCircle2, AlertCircle, ArrowRight, 
  RotateCcw, Sparkles, Building2, Globe, CreditCard, 
  TrendingUp, Clock, Check, HelpCircle
} from 'lucide-react';

export default function UnderwritingEligibility({ onOpenApplication }) {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({
    vertical: '',
    history: '',
    disputeRatio: '',
    geo: ''
  });

  const questions = [
    {
      id: 'vertical',
      step: 1,
      title: 'What is your primary commercial vertical?',
      subtitle: 'Select the operational model that best reflects your revenue.',
      options: [
        { label: 'Nutraceuticals & Dietary Supplements', icon: '💊', desc: 'Capsules, powders, botanicals, wellness tinctures' },
        { label: 'CBD, Hemp & Vape Products', icon: '🌿', desc: 'Topicals, compliant ingestibles, hardware, e-liquids' },
        { label: 'Subscription Continuity & SaaS', icon: '🔄', desc: 'Recurring club memberships, software, digital box plans' },
        { label: 'High-Ticket Consulting / Coaching', icon: '📈', desc: 'Masterminds, courses, commercial wholesale ($500+ AOV)' },
        { label: 'E-Commerce / Direct Fulfillment', icon: '📦', desc: 'Dropshipping, apparel, luxury jewelry, furniture' },
        { label: 'Specialized High-Risk & Regulated', icon: '🛡️', desc: 'Travel, gaming, collections, adult entertainment' }
      ]
    },
    {
      id: 'history',
      step: 2,
      title: 'What is your current payment processing status?',
      subtitle: 'Helps our underwriting team match the right acquiring sponsor bank.',
      options: [
        { label: 'Active processing & looking to scale or lower fees', icon: '⚡', desc: 'Currently have live processing looking for secondary MID' },
        { label: 'Processor shut down or frozen (Stripe / Shopify / PayPal)', icon: '⚠️', desc: 'Need urgent replacement MID rail without holdbacks' },
        { label: 'Brand new startup / launching first merchant account', icon: '🚀', desc: 'Clean corporate record, seeking first dedicated MID' },
        { label: 'Multi-MID load balancing expansion (> $250k/mo)', icon: '🌐', desc: 'Volume diversification across multiple domestic & offshore rails' }
      ]
    },
    {
      id: 'disputeRatio',
      step: 3,
      title: 'What is your current estimated chargeback ratio?',
      subtitle: 'Vserve24 natively integrates pre-dispute networks to protect any ratio.',
      options: [
        { label: 'Under 0.8% (Healthy & Compliant)', icon: '🟢', desc: 'Eligible for lowest Tier-1 interchange-plus fee bracket' },
        { label: '0.9% – 1.5% (Elevated Inquiries)', icon: '🟡', desc: 'Needs Ethoca & Verifi RDR automated dispute interception' },
        { label: 'Above 1.5% (Urgent Salvage Needed)', icon: '🟠', desc: 'Requires instant pre-chargeback deflection & cascading routing' },
        { label: 'Unknown / New Processing Venture', icon: '⚪', desc: 'Clean slate setup with zero baseline chargeback history' }
      ]
    },
    {
      id: 'geo',
      step: 4,
      title: 'What is your target customer geography & currency?',
      subtitle: 'Determines domestic sponsor banks vs multi-currency offshore routing.',
      options: [
        { label: 'United States & Canada (USD / CAD)', icon: '🇺🇸', desc: 'Same-day ACH and domestic Tier-1 sponsor bank MID' },
        { label: 'United Kingdom & European Union (GBP / EUR)', icon: '🇪🇺', desc: 'SEPA, Direct Debit & frictionless 3DS 2.2 processing' },
        { label: 'Global Cross-Border (30+ Currencies)', icon: '🌍', desc: 'Multi-currency settlement directly to international business bank' },
        { label: 'Offshore & High-Volume Discrete Settlement', icon: '🏝️', desc: 'Dedicated offshore MID sponsorship with zero reserve holds' }
      ]
    }
  ];

  const handleSelectOption = (field, value) => {
    setAnswers(prev => ({ ...prev, [field]: value }));
    if (step < 4) {
      setStep(step + 1);
    } else {
      setStep(5); // Show result
    }
  };

  const handleReset = () => {
    setAnswers({ vertical: '', history: '', disputeRatio: '', geo: '' });
    setStep(1);
  };

  const currentQ = questions[step - 1];

  return (
    <section id="eligibility" className="relative bg-[#FCFBF8] py-20 lg:py-28 border-b border-[#E7E3DA] overflow-hidden">
      
      {/* Background blueprint grid */}
      <div 
        aria-hidden 
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: 'radial-gradient(#0B192C 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      />

      <div className="max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Top Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200/80 text-xs tracking-widest text-[#FF5500] uppercase font-bold shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#FF5500] animate-pulse" />
            <span>Instant Underwriting Diagnostic</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#0B192C] tracking-tight leading-[1.12]">
            Check your MID eligibility in 60 seconds.
          </h2>

          <p className="text-[#475569] text-base lg:text-lg leading-relaxed">
            Answer 4 rapid questions to discover your sponsor bank match score, recommended acquiring rails, and fee estimate.
          </p>
        </div>

        {/* Wizard Container Card */}
        <div className="bg-[#FFFFFF] border border-[#E7E3DA] rounded-3xl p-6 sm:p-10 lg:p-12 shadow-sm max-w-4xl mx-auto relative overflow-hidden">
          
          {step <= 4 ? (
            <div className="space-y-8">
              
              {/* Progress Steps Header */}
              <div>
                <div className="flex items-center justify-between text-xs font-semibold text-[#707887] mb-3">
                  <span>STEP {step} OF 4: {currentQ.title}</span>
                  <span className="text-[#FF5500]">{Math.round((step / 4) * 100)}% Complete</span>
                </div>
                
                {/* Visual Progress Bar */}
                <div className="w-full h-2 bg-[#E7E3DA] rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-[#FF5500] to-[#FF7733] transition-all duration-300 rounded-full"
                    style={{ width: `${(step / 4) * 100}%` }}
                  />
                </div>
              </div>

              {/* Question Headline */}
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#0B192C]">
                  {currentQ.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] mt-1">
                  {currentQ.subtitle}
                </p>
              </div>

              {/* Options Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {currentQ.options.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => handleSelectOption(currentQ.id, opt.label)}
                    className="p-4 sm:p-5 rounded-2xl border border-[#E7E3DA] hover:border-[#FF5500] bg-[#FFFFFF] hover:bg-orange-50/20 text-left transition-all duration-200 group shadow-2xs hover:shadow-md cursor-pointer flex items-start gap-3.5"
                  >
                    <span className="text-2xl shrink-0 group-hover:scale-110 transition-transform">
                      {opt.icon}
                    </span>
                    <div className="min-w-0">
                      <div className="text-sm font-bold text-[#0B192C] group-hover:text-[#FF5500] transition-colors leading-snug">
                        {opt.label}
                      </div>
                      <div className="text-xs text-[#707887] mt-1 leading-normal">
                        {opt.desc}
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              {/* Step Navigation Back Button */}
              <div className="flex items-center justify-between pt-4 border-t border-[#E7E3DA]">
                {step > 1 ? (
                  <button
                    onClick={() => setStep(step - 1)}
                    className="text-xs font-semibold text-[#707887] hover:text-[#0B192C] transition-colors cursor-pointer"
                  >
                    ← Back to Previous Step
                  </button>
                ) : (
                  <span className="text-xs text-[#707887]">No credit check required</span>
                )}
                
                <span className="text-xs text-[#10B981] font-semibold flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Encrypted Diagnostic
                </span>
              </div>

            </div>
          ) : (
            /* Diagnostic Result View */
            <div className="space-y-8 animate-in fade-in zoom-in-95 duration-300">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#E7E3DA]">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-bold text-[#10B981] uppercase tracking-wider mb-2">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Underwriting Profile Match Confirmed</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#0B192C]">
                    98.4% Match with Tier-1 Direct Sponsor Banks
                  </h3>
                  <p className="text-xs sm:text-sm text-[#475569] mt-1">
                    Based on your profile, your business qualifies for dedicated high-capacity MID sponsorship.
                  </p>
                </div>

                <div className="shrink-0 bg-orange-50 border border-orange-200/80 p-4 rounded-2xl text-center min-w-[140px]">
                  <span className="text-xs font-bold text-[#FF5500] uppercase tracking-wider block">Decision SLA</span>
                  <span className="text-2xl font-extrabold text-[#0B192C] mt-0.5 block">&lt; 24 Hours</span>
                  <span className="text-[10.5px] text-[#707887]">Fast-Track Review</span>
                </div>
              </div>

              {/* Matched Rail Details Breakdown */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                
                <div className="p-4 rounded-2xl bg-[#FCFBF8] border border-[#E7E3DA] space-y-1.5">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#707887]">Recommended Rail</div>
                  <div className="text-base font-bold text-[#0B192C]">Direct MID Sponsorship</div>
                  <p className="text-xs text-[#475569]">
                    Eliminates aggregator holdbacks; dedicated volume cap for {answers.vertical}.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#FCFBF8] border border-[#E7E3DA] space-y-1.5">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#707887]">Chargeback Strategy</div>
                  <div className="text-base font-bold text-[#10B981]">Ethoca & Verifi RDR Active</div>
                  <p className="text-xs text-[#475569]">
                    Pre-dispute auto-deflection preserves healthy merchant ratio.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#FCFBF8] border border-[#E7E3DA] space-y-1.5">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#707887]">Settlement Schedule</div>
                  <div className="text-base font-bold text-[#FF5500]">T+1 Daily Batch Funding</div>
                  <p className="text-xs text-[#475569]">
                    Direct clearing to your {answers.geo || 'domestic'} bank account with zero reserve holds.
                  </p>
                </div>

              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#E7E3DA]">
                <button
                  onClick={handleReset}
                  className="flex items-center gap-1.5 text-xs font-semibold text-[#707887] hover:text-[#0B192C] transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Restart Diagnostic</span>
                </button>

                <button
                  onClick={() => onOpenApplication?.({ industry: answers.vertical })}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-[#FF5500] hover:bg-[#E64A00] text-white font-bold text-xs sm:text-sm tracking-wide transition-all shadow-lg shadow-orange-500/25 hover:-translate-y-0.5 cursor-pointer"
                >
                  <span>Submit Pre-Approved Application (10 Min)</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
}
