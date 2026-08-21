import React, { useState } from 'react';
import { 
  Building2, Cpu, Network, TrendingUp, 
  ShieldAlert, ArrowRight, CheckCircle2, Zap, ShieldCheck, 
  Lock, Check, Sparkles, AlertCircle, Coins, ArrowUpRight
} from 'lucide-react';

const SERVICES_DATA = [
  {
    id: 'payin-collections',
    num: '01',
    mobileShort: 'Casino Pay-In',
    title: 'Instant Casino UPI & Pay-In Collections',
    summary: 'Accept dynamic UPI, QR, and NetBanking player deposits with instant clearance and zero drop-offs.',
    icon: Zap,
    headline: 'Instant 1-click casino deposits & player wallet reloads with zero drop-offs.',
    problemSolution: 'Engineered for high-volume online casino, slots, live dealers, and skill gaming. Collect instantaneous player deposits via UPI Intent, dynamic QR, and NetBanking with dedicated sponsor bank underwriting.',
    steps: [
      { num: '1', title: 'Player Scans UPI / QR', desc: 'Instant UPI Intent or Dynamic QR deposit' },
      { num: '2', title: 'Bank Network Routing', desc: 'Direct Sponsor Bank Authorization' },
      { num: '3', title: 'Instant Clearance', desc: 'Real-time bank clearance & approval' },
      { num: '4', title: 'Wallet Credited', desc: 'Direct player balance update & T+0 settlement' }
    ],
    benefits: [
      'Dynamic UPI Intent & QR collection',
      'High-limit casino deposits with zero drop-offs',
      'Instant T+0 / T+1 direct bank settlement',
      'Custom limits for VIP & high-roller players'
    ],
    highlightPill: '⚡ 99.99% Casino Pay-In SLA'
  },
  {
    id: 'payout-disbursements',
    num: '02',
    mobileShort: 'Player Payouts',
    title: 'Instant Casino Payouts & Disbursements',
    summary: '24/7 automated real-time IMPS and NEFT player winning withdrawals and instant disbursements.',
    icon: Building2,
    headline: 'Disburse casino player winnings instantly into bank accounts 24/7.',
    problemSolution: 'Automated 24/7 instant payout engine for casino winning withdrawals, jackpot disbursements, and VIP cashouts with automated beneficiary name validation and multi-bank load balancing.',
    steps: [
      { num: '1', title: 'Player Requests Cashout', desc: 'API or batch winning disbursement trigger' },
      { num: '2', title: 'Name & VPA Verification', desc: 'Automated beneficiary account validation' },
      { num: '3', title: 'Direct IMPS Rail Routing', desc: 'Sub-second bank rail clearance' },
      { num: '4', title: 'Player Account Credited', desc: 'Instant cashout delivery to user bank' }
    ],
    benefits: [
      '24/7 Sub-second IMPS & NEFT winning payouts',
      'Real-time UPI VPA & bank account verification',
      'Automated retry and multi-bank failover',
      'High-capacity daily disbursement limits for big wins'
    ],
    highlightPill: '⚡ 24/7 Instant Winning Payouts'
  },
  {
    id: 'ai-fraud',
    num: '03',
    mobileShort: 'Bot & Risk Guard',
    title: 'Casino AI Risk & Bot Fraud Detection',
    summary: 'Stop bonus abusers, multi-accounting bots, and fraudulent deposits without blocking genuine players.',
    icon: Cpu,
    headline: 'Block syndicate bonus abusers & bot farms while approving genuine players.',
    problemSolution: 'Machine learning analyzes device fingerprints, IP proxy/VPN flags, and player deposit velocity in real time. It filters out syndicate bots and bad actors while providing a frictionless deposit experience for VIP players.',
    steps: [
      { num: '1', title: 'Player Deposit Initiated', desc: 'Deposit request submitted at cashier' },
      { num: '2', title: 'AI Scans 140+ Signals', desc: 'Device fingerprint, proxy & velocity checks' },
      { num: '3', title: 'Bot & Fraud Filtered', desc: 'Suspicious syndicate attempts blocked' },
      { num: '4', title: 'Genuine Players Approved', desc: 'Smooth frictionless approval in real time' }
    ],
    benefits: [
      'Real-time casino deposit decisioning speed',
      'Syndicate bot & multi-accounting detection',
      'Custom velocity rules for high-roller gaming',
      'Zero false declines on genuine players'
    ],
    highlightPill: '🛡️ Real-Time Casino Fraud Guard'
  },
  {
    id: 'payment-gateways',
    num: '04',
    mobileShort: 'iGaming APIs',
    title: 'iGaming Gateway & Seamless API Integration',
    summary: 'Connect your casino platform, iGaming scripts, or custom web/mobile app in minutes.',
    icon: Network,
    headline: 'Plug into custom iGaming platforms, turnkey casino scripts & mobile apps in minutes.',
    problemSolution: 'High-performance REST APIs, SDKs, and webhooks engineered for online casino software, live dealer platforms, and gaming portals with built-in multi-MID load balancing and zero aggregator lockouts.',
    steps: [
      { num: '1', title: 'Integrate Cashier API', desc: 'REST API & webhook setup for casino cashier' },
      { num: '2', title: 'Connect API Keys', desc: 'Secure gateway credentials synced' },
      { num: '3', title: 'Sandbox Testing', desc: 'Test end-to-end player deposits & payouts' },
      { num: '4', title: 'Go Live & Scale', desc: 'Accept live production gaming payments' }
    ],
    benefits: [
      'Custom REST APIs & webhooks for iGaming platforms',
      'Multi-MID load balancing across Tier-1 sponsor banks',
      'Dedicated corporate MIDs for casino & gaming entities',
      'Unified single dashboard for all deposits & cashouts'
    ],
    highlightPill: '🔌 Turnkey iGaming APIs'
  },
  {
    id: 'approval-optimization',
    num: '05',
    mobileShort: 'Deposit Rescue',
    title: 'Deposit Approval Optimization & Cascading',
    summary: 'Automatically recover legitimate player deposits that get falsely declined by banks.',
    icon: TrendingUp,
    headline: 'Automatically rescue player deposits when an issuing bank falsely soft-declines.',
    problemSolution: 'When an issuing bank soft-declines a genuine player deposit due to temporary network load or high-risk flags, our intelligent cascading engine instantly reroutes the payment through secondary sponsor rails to ensure approval.',
    steps: [
      { num: '1', title: 'Bank A Soft-Declines', desc: 'Temporary bank network congestion' },
      { num: '2', title: 'Smart Cascading Reroute', desc: 'Vserve24 optimizes deposit routing' },
      { num: '3', title: 'Secondary Bank Approves', desc: 'Backup sponsor bank rail clears deposit' },
      { num: '4', title: 'Player Balance Loaded', desc: 'Zero drop-off, gameplay uninterrupted' }
    ],
    benefits: [
      '+18% average recovered casino deposit volume',
      'Automated soft-decline cascading routing',
      'Zero friction or re-entry for the player',
      'Smart cascading across sponsor bank rails'
    ],
    highlightPill: '⚡ +18% Deposit Success Lift'
  },
  {
    id: 'chargeback-protection',
    num: '06',
    mobileShort: 'Risk Shield',
    title: 'Automated Pre-Dispute & Risk Shield',
    summary: 'Intervene and resolve player transaction disputes before they hurt your merchant account.',
    icon: ShieldAlert,
    headline: 'Protect your casino merchant account longevity with automated pre-dispute defense.',
    problemSolution: 'Direct sponsor bank risk monitoring and automated reconciliation allow instant dispute deflection to keep your casino merchant processing account spotless and stable.',
    steps: [
      { num: '1', title: 'Dispute Warning Triggered', desc: 'Bank alert received via direct bank rail' },
      { num: '2', title: 'Pre-Dispute Alert', desc: 'Vserve24 intercepts dispute in real time' },
      { num: '3', title: 'Automatic Resolution', desc: 'Automated refund & deflection triggers instantly' },
      { num: '4', title: 'MID Health Preserved', desc: 'Clean dispute ratio & account health protected' }
    ],
    benefits: [
      'Automated pre-dispute deflection & alerts',
      '24–48 hour resolution grace window',
      'Maintains dispute ratio strictly below 0.65%',
      'Protects long-term high-volume processing stability'
    ],
    highlightPill: '🛡️ Ratio < 0.65% Guard'
  }
];

export default function ServicesSection({ onOpenApplication }) {
  const [activeService, setActiveService] = useState(0);
  const current = SERVICES_DATA[activeService];

  return (
    <section 
      id="services" 
      className="relative bg-[#FCFBF8] text-[#0B192C] py-10 sm:py-12 lg:py-16 border-b border-[#E7E3DA] overflow-hidden"
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

      <div className="max-w-[1360px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Top Header - Compact single frame */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-3 sm:gap-4 mb-4 sm:mb-6">
          <div className="max-w-2xl space-y-1.5 sm:space-y-2">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-orange-50 border border-orange-200/80 text-[10px] sm:text-[10.5px] tracking-widest text-[#FF5500] uppercase font-bold shadow-xs mb-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF5500] animate-pulse" />
              <span>03 • Core Payment Services</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#0B192C] tracking-tight leading-[1.14]">
              Payment infrastructure built for <span className="text-[#FF5500]">Casino &amp; Gaming.</span>
            </h2>

            <p className="text-[#475569] text-xs sm:text-sm lg:text-[14px] leading-relaxed">
              Select any purpose-built rail below to see how our high-capacity Pay-In, 24/7 winning payouts, and risk shields power your gaming operations.
            </p>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-xs text-[#0B192C] bg-[#FFFFFF] border border-[#E7E3DA] px-3.5 py-1.5 rounded-xl shadow-xs self-start lg:self-auto font-semibold shrink-0">
            <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
            <span className="font-bold">6 Purpose-Built Gaming Rails</span>
          </div>
        </div>

        {/* MOBILE: Horizontal Scrollable Service Tabs (< lg) */}
        <div className="flex lg:hidden items-center gap-2 overflow-x-auto pb-2.5 mb-4 scrollbar-none">
          {SERVICES_DATA.map((item, idx) => {
            const Icon = item.icon;
            const isActive = activeService === idx;

            return (
              <button
                key={item.id}
                onClick={() => setActiveService(idx)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 cursor-pointer shrink-0 border ${
                  isActive
                    ? 'bg-[#FF5500] text-white border-[#FF5500] shadow-sm shadow-orange-500/20'
                    : 'bg-[#FFFFFF] text-[#475569] border-[#E7E3DA] hover:border-slate-300'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-[#FF5500]'}`} />
                <span>{item.num} {item.mobileShort}</span>
              </button>
            );
          })}
        </div>

        {/* Two-Column Grid: Left 6 Selectors + Right Showcase Box (Unified Single Frame) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-stretch">
          
          {/* DESKTOP LEFT: 6 Equal-Height Service Cards */}
          <div className="hidden lg:flex lg:col-span-5 flex-col justify-between gap-2 h-full">
            {SERVICES_DATA.map((item, idx) => {
              const Icon = item.icon;
              const isActive = activeService === idx;

              return (
                <div
                  key={item.id}
                  onClick={() => setActiveService(idx)}
                  onMouseEnter={() => setActiveService(idx)}
                  className={`p-2.5 xl:p-3 rounded-2xl border transition-all duration-150 cursor-pointer flex items-center justify-between group relative overflow-hidden flex-1 ${
                    isActive
                      ? 'bg-[#FFFFFF] border-[#FF5500] shadow-sm shadow-orange-500/[0.08] translate-x-1'
                      : 'bg-[#FFFFFF]/80 hover:bg-[#FFFFFF] border-[#E7E3DA] hover:border-orange-300 shadow-2xs'
                  }`}
                >
                  {/* Active Orange Indicator */}
                  <div className={`absolute left-0 top-0 bottom-0 w-[3.5px] bg-[#FF5500] transition-opacity duration-150 ${
                    isActive ? 'opacity-100' : 'opacity-0'
                  }`} />

                  <div className="flex items-center gap-3 pl-1 min-w-0">
                    <div className={`w-8 h-8 xl:w-9 xl:h-9 rounded-xl flex items-center justify-center transition-colors shrink-0 shadow-2xs ${
                      isActive ? 'bg-[#FF5500] text-white shadow-sm shadow-orange-500/25' : 'bg-orange-50 text-[#FF5500] border border-orange-200/80'
                    }`}>
                      <Icon className="w-4 h-4" />
                    </div>

                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5">
                        <span className={`text-[10px] font-bold ${
                          isActive ? 'text-[#FF5500]' : 'text-slate-400'
                        }`}>
                          {item.num}
                        </span>
                        <h3 className="font-bold text-[#0B192C] text-xs xl:text-[13px] group-hover:text-[#FF5500] transition-colors truncate">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-[11px] text-[#475569] mt-0.5 truncate max-w-[280px] xl:max-w-[340px]">
                        {item.summary}
                      </p>
                    </div>
                  </div>

                  <ArrowRight className={`w-3.5 h-3.5 shrink-0 transition-transform pr-0.5 ${
                    isActive ? 'text-[#FF5500] translate-x-0.5' : 'text-slate-300 opacity-0 group-hover:opacity-100'
                  }`} />
                </div>
              );
            })}
          </div>

          {/* RIGHT: Detail Showcase Box - Locked Height & Synchronized */}
          <div className="lg:col-span-7 bg-[#FFFFFF] border border-[#E7E3DA] rounded-3xl p-4 sm:p-6 lg:p-6 flex flex-col justify-between shadow-sm space-y-4 h-full">
            
            {/* 1. Header with Badges and CTA */}
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-[#E7E3DA]">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold text-[#FF5500] bg-orange-50 border border-orange-200/80 px-2 py-0.5 rounded-md uppercase">
                    SERVICE {current.num} OF 06
                  </span>
                  <span className="text-[10.5px] font-bold text-[#10B981] bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-md">
                    {current.highlightPill}
                  </span>
                </div>

                <button 
                  onClick={onOpenApplication}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#FF5500] hover:bg-[#E64A00] text-white text-[11px] font-bold tracking-wide transition-all shadow-sm shadow-orange-500/20 hover:-translate-y-0.5 cursor-pointer"
                >
                  <span>REQUEST SERVICE</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>

              <div className="min-h-[48px] sm:min-h-[56px] flex items-center mt-2.5">
                <h3 className="text-base sm:text-xl lg:text-[22px] font-bold text-[#0B192C] leading-snug">
                  {current.headline}
                </h3>
              </div>

              <div className="min-h-[38px] sm:min-h-[44px] flex items-start mt-1">
                <p className="text-xs sm:text-[13px] text-[#475569] leading-relaxed">
                  {current.problemSolution}
                </p>
              </div>
            </div>

            {/* 2. Step-by-Step Flow ("How it works in practice") */}
            <div className="bg-[#FCFBF8] sm:bg-[#FCFBF8] border border-[#E7E3DA] rounded-2xl p-3 sm:p-4">
              <div className="text-[9.5px] sm:text-[10px] font-bold text-[#707887] uppercase tracking-wider mb-2">
                HOW THIS WORKS IN PRACTICE:
              </div>

              {/* Mobile View: Clean Connected Step Timeline (Zero nested box clutter) */}
              <div className="sm:hidden space-y-2 divide-y divide-[#E7E3DA]/60">
                {current.steps.map((st, i) => (
                  <div key={i} className={`flex items-center gap-2.5 ${i > 0 ? 'pt-2' : ''}`}>
                    <span className="w-5 h-5 rounded-full bg-orange-50 border border-orange-200 text-[#FF5500] font-bold text-[10px] flex items-center justify-center shrink-0">
                      {st.num}
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="text-xs font-bold text-[#0B192C] leading-snug">
                        {st.title}
                      </div>
                      <div className="text-[10px] text-[#707887] leading-tight font-medium">
                        {st.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Desktop View: 4-Column Flow Cards */}
              <div className="hidden sm:grid sm:grid-cols-4 gap-2">
                {current.steps.map((st, i) => (
                  <div 
                    key={i} 
                    className="bg-[#FFFFFF] border border-[#E7E3DA] p-2.5 rounded-xl flex flex-col justify-between min-h-[70px] sm:min-h-[74px] shadow-2xs"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="w-4 h-4 rounded-full bg-orange-50 border border-orange-200 text-[#FF5500] font-bold text-[9px] flex items-center justify-center">
                        {st.num}
                      </span>
                      {i < 3 && (
                        <ArrowRight className="w-3 h-3 text-slate-300 hidden sm:block" />
                      )}
                    </div>
                    <div>
                      <div className="text-[11px] sm:text-[11.5px] font-bold text-[#0B192C] leading-snug">
                        {st.title}
                      </div>
                      <div className="text-[9px] sm:text-[9.5px] text-[#707887] mt-0.5 leading-tight font-medium">
                        {st.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. Merchant Benefits (Checklist) */}
            <div className="pt-2.5 border-t border-[#E7E3DA]">
              <div className="text-[9.5px] sm:text-[10px] font-bold text-[#707887] uppercase tracking-wider mb-1.5">
                WHAT YOUR BUSINESS GETS:
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                {current.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-center gap-2 text-[11.5px] sm:text-xs font-medium text-[#0B192C]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#FF5500] shrink-0" />
                    <span className="truncate">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
