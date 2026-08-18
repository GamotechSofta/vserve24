import React, { useState } from 'react';
import { 
  CreditCard, Building2, Cpu, Network, TrendingUp, 
  ShieldAlert, ArrowRight, CheckCircle2, Zap, ShieldCheck, 
  Lock, Check, Sparkles, AlertCircle, Coins, ArrowUpRight
} from 'lucide-react';

const SERVICES_DATA = [
  {
    id: 'credit-card',
    num: '01',
    mobileShort: 'Cards',
    title: 'Credit Card Processing',
    summary: 'Accept Visa, Mastercard, and global cards with fast next-day payouts.',
    icon: CreditCard,
    headline: 'Accept credit & debit cards everywhere with zero friction.',
    problemSolution: 'Designed for high-risk merchants who get rejected by standard processors. Accept online payments, phone orders, and mobile checkouts with direct acquiring bank placement.',
    steps: [
      { num: '1', title: 'Customer Enters Card', desc: 'Encrypted web / phone checkout' },
      { num: '2', title: 'Bank Network Routing', desc: 'Direct Tier-1 bank authorization' },
      { num: '3', title: 'Instant Approval', desc: 'Authorized in under 120ms' },
      { num: '4', title: 'Daily Payout', desc: 'Direct deposit to bank account' }
    ],
    benefits: [
      'Accepts 135+ global currencies',
      'Virtual terminal for phone & MOTO orders',
      'Next-day batch payout schedule',
      'Custom monthly volume caps'
    ],
    highlightPill: '⚡ 99.99% Card Rail SLA'
  },
  {
    id: 'ach-processing',
    num: '02',
    mobileShort: 'ACH Rails',
    title: 'ACH & eCheck Processing',
    summary: 'Lower processing costs with direct bank-to-bank electronic transfers.',
    icon: Building2,
    headline: 'Cut processing fees with direct bank-to-bank debit rails.',
    problemSolution: 'Collect funds directly from customer bank accounts. Ideal for B2B, subscriptions, and high-ticket sales with lower costs than card interchange fees.',
    steps: [
      { num: '1', title: 'Bank Account Intake', desc: 'Routing & account numbers entered' },
      { num: '2', title: 'Instant Verification', desc: 'Automated bank account validation' },
      { num: '3', title: 'Direct NACHA Rail', desc: 'Electronic clearing without card fees' },
      { num: '4', title: 'Direct Settlement', desc: 'Deposited directly to your bank' }
    ],
    benefits: [
      'Up to 70% lower transaction fees',
      'Same-Day ACH clearance capability',
      'No card expiration or lost card declines',
      'High transaction amount limits'
    ],
    highlightPill: '💰 Up to 70% Lower Fees'
  },
  {
    id: 'ai-fraud',
    num: '03',
    mobileShort: 'AI Fraud',
    title: 'AI Fraud Detection',
    summary: 'Stop malicious orders and stolen cards in real time without blocking good buyers.',
    icon: Cpu,
    headline: 'Block real fraudsters without stopping legitimate customers.',
    problemSolution: 'Machine learning analyzes device signals, IP location, and purchase velocity in under 80ms. It stops stolen cards while keeping the checkout smooth for good customers.',
    steps: [
      { num: '1', title: 'Order Submitted', desc: 'Customer initiates purchase' },
      { num: '2', title: 'AI Scans 140+ Signals', desc: 'Device, IP & velocity checks' },
      { num: '3', title: 'Fraud Blocked', desc: 'Suspicious attempts filtered out' },
      { num: '4', title: 'Real Buyers Approved', desc: 'Smooth frictionless approval' }
    ],
    benefits: [
      'Sub-80ms decisioning speed',
      'Dynamic 3D Secure 2.2 step-up challenge',
      'Custom rule builder for your industry',
      'Zero false positives on good orders'
    ],
    highlightPill: '🛡️ Sub-80ms Fraud Filter'
  },
  {
    id: 'payment-gateways',
    num: '04',
    mobileShort: 'Gateways',
    title: 'Payment Gateways & Integrations',
    summary: 'Connect with Shopify, WooCommerce, Magento, or custom REST APIs.',
    icon: Network,
    headline: 'Plug into 50+ shopping carts or custom websites in minutes.',
    problemSolution: 'Turnkey plugins and developer REST APIs that connect your store to multiple bank accounts with built-in load balancing and zero cardholder data liability.',
    steps: [
      { num: '1', title: 'Install Plugin', desc: '1-click setup on Shopify/WooCommerce' },
      { num: '2', title: 'Connect API Keys', desc: 'Secure gateway credentials synced' },
      { num: '3', title: 'Sandbox Testing', desc: 'Test end-to-end payments safely' },
      { num: '4', title: 'Go Live', desc: 'Accept live production payments' }
    ],
    benefits: [
      'Pre-built plugins for Shopify & WooCommerce',
      'Direct REST APIs & webhooks for developers',
      'Multi-MID load balancing across banks',
      'Unified single dashboard for all sales'
    ],
    highlightPill: '🔌 50+ Turnkey Carts'
  },
  {
    id: 'approval-optimization',
    num: '05',
    mobileShort: 'Recover',
    title: 'Approval Optimization',
    summary: 'Automatically recover good orders that get falsely declined by banks.',
    icon: TrendingUp,
    headline: 'Automatically rescue sales when an issuing bank falsely declines.',
    problemSolution: 'When an issuing bank soft-declines a real customer due to network busy or high-risk flags, our system instantly reroutes the sale to a backup bank rail to approve it.',
    steps: [
      { num: '1', title: 'Bank A Soft-Declines', desc: 'Issuer temporary network rejection' },
      { num: '2', title: 'Smart Reroute', desc: 'Vserve24 optimizes payment data' },
      { num: '3', title: 'Backup Bank Approves', desc: 'Secondary rail accepts sale' },
      { num: '4', title: 'Revenue Saved', desc: 'Sale completed seamlessly' }
    ],
    benefits: [
      '+18% average recovered revenue',
      'Automatic soft-decline salvage routing',
      'Zero extra effort required by customer',
      'Smart account updater for expired cards'
    ],
    highlightPill: '⚡ +18% Revenue Recovered'
  },
  {
    id: 'chargeback-protection',
    num: '06',
    mobileShort: 'Disputes',
    title: 'Chargeback Protection',
    summary: 'Intervene and resolve customer disputes before they hurt your merchant account.',
    icon: ShieldAlert,
    headline: 'Stop chargebacks before they damage your bank relationship.',
    problemSolution: 'Direct Ethoca and Verifi RDR alerts give you a 24–48 hour grace window when a customer contacts their bank, allowing automatic refunds to keep your dispute ratio below 0.65%.',
    steps: [
      { num: '1', title: 'Customer Calls Bank', desc: 'Inquiry started with Visa / Mastercard' },
      { num: '2', title: 'Pre-Dispute Alert', desc: 'Vserve24 receives instant alert' },
      { num: '3', title: 'Automatic Resolution', desc: 'Automated refund triggers immediately' },
      { num: '4', title: 'Record Preserved', desc: 'Dispute averted, MID protected' }
    ],
    benefits: [
      'Ethoca & Verifi RDR automated deflection',
      '24–48 hour resolution grace window',
      'Maintains dispute ratio strictly below 0.65%',
      'Protects your merchant account longevity'
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
      className="relative bg-[#FCFBF8] text-[#0B192C] py-16 sm:py-20 lg:py-28 border-b border-[#E7E3DA] overflow-hidden"
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
        
        {/* Section Top Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 sm:gap-5 mb-7 sm:mb-10">
          <div className="max-w-2xl space-y-2 sm:space-y-2.5">
            <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200/80 text-[10.5px] tracking-widest text-[#FF5500] uppercase font-bold shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF5500] animate-pulse" />
              <span>05 • Core Payment Services</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-bold text-[#0B192C] tracking-tight leading-[1.14]">
              Payment infrastructure built around <span className="text-[#FF5500]">your business.</span>
            </h2>

            <p className="text-[#475569] text-xs sm:text-sm lg:text-[15px] leading-relaxed">
              Select any payment service below to understand how it works and how it protects your revenue.
            </p>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-xs text-[#0B192C] bg-[#FFFFFF] border border-[#E7E3DA] px-4 py-2 rounded-xl shadow-xs self-start lg:self-auto font-semibold">
            <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
            <span className="font-bold">6 Purpose-Built Payment Rails</span>
          </div>
        </div>

        {/* MOBILE: Horizontal Scrollable Service Tabs (< lg) */}
        <div className="flex lg:hidden items-center gap-2 overflow-x-auto pb-3 mb-5 scrollbar-none">
          {SERVICES_DATA.map((item, idx) => {
            const Icon = item.icon;
            const isActive = activeService === idx;

            return (
              <button
                key={item.id}
                onClick={() => setActiveService(idx)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer shrink-0 border ${
                  isActive
                    ? 'bg-[#FF5500] text-white border-[#FF5500] shadow-md shadow-orange-500/20'
                    : 'bg-[#FFFFFF] text-[#475569] border-[#E7E3DA] hover:border-slate-300'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-[#FF5500]'}`} />
                <span>{item.num} {item.mobileShort}</span>
              </button>
            );
          })}
        </div>

        {/* Two-Column Grid: Left 6 Selectors (Desktop) + Right Showcase Box (All devices) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* DESKTOP LEFT: 6 Service Cards (Hidden on mobile) */}
          <div className="hidden lg:flex lg:col-span-5 flex-col gap-2.5">
            {SERVICES_DATA.map((item, idx) => {
              const Icon = item.icon;
              const isActive = activeService === idx;

              return (
                <div
                  key={item.id}
                  onClick={() => setActiveService(idx)}
                  onMouseEnter={() => setActiveService(idx)}
                  className={`p-3.5 sm:p-4 rounded-2xl border transition-all duration-150 cursor-pointer flex items-center justify-between group relative overflow-hidden min-h-[68px] ${
                    isActive
                      ? 'bg-[#FFFFFF] border-[#FF5500] shadow-md shadow-orange-500/[0.08] -translate-y-0.5'
                      : 'bg-[#FFFFFF]/80 hover:bg-[#FFFFFF] border-[#E7E3DA] hover:border-orange-300 shadow-xs'
                  }`}
                >
                  {/* Active Orange Indicator */}
                  <div className={`absolute left-0 top-0 bottom-0 w-[3.5px] bg-[#FF5500] transition-opacity duration-150 ${
                    isActive ? 'opacity-100' : 'opacity-0'
                  }`} />

                  <div className="flex items-center gap-3.5 pl-1.5 min-w-0">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors shrink-0 shadow-xs ${
                      isActive ? 'bg-[#FF5500] text-white shadow-md shadow-orange-500/25' : 'bg-orange-50 text-[#FF5500] border border-orange-200/80'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>

                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className={`text-[10px] font-bold ${
                          isActive ? 'text-[#FF5500]' : 'text-slate-400'
                        }`}>
                          {item.num}
                        </span>
                        <h3 className="font-bold text-[#0B192C] text-sm group-hover:text-[#FF5500] transition-colors truncate">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-xs text-[#475569] mt-0.5 truncate">
                        {item.summary}
                      </p>
                    </div>
                  </div>

                  <ArrowRight className={`w-4 h-4 shrink-0 transition-transform ${
                    isActive ? 'text-[#FF5500] translate-x-1' : 'text-slate-300 opacity-0 group-hover:opacity-100'
                  }`} />
                </div>
              );
            })}
          </div>

          {/* RIGHT: Detail Showcase Box (7 cols on desktop, full width on mobile) */}
          <div className="lg:col-span-7 bg-[#FFFFFF] border border-[#E7E3DA] rounded-3xl p-5 sm:p-8 flex flex-col justify-between shadow-sm space-y-5 sm:space-y-6">
            
            {/* 1. Header with Plain-English Headline */}
            <div>
              <div className="flex flex-wrap items-center justify-between gap-3 pb-3.5 border-b border-[#E7E3DA]">
                <div className="flex items-center gap-2">
                  <span className="text-[10.5px] font-bold text-[#FF5500] bg-orange-50 border border-orange-200/80 px-2.5 py-0.5 rounded-md uppercase">
                    SERVICE {current.num} OF 06
                  </span>
                  <span className="text-[11px] font-bold text-[#10B981] bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-md">
                    {current.highlightPill}
                  </span>
                </div>

                <button 
                  onClick={onOpenApplication}
                  className="flex items-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-xl bg-[#FF5500] hover:bg-[#E64A00] text-white text-xs font-bold tracking-wide transition-all shadow-md shadow-orange-500/20 hover:-translate-y-0.5 cursor-pointer"
                >
                  <span>REQUEST SERVICE</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <h3 className="text-lg sm:text-2xl font-bold text-[#0B192C] leading-snug mt-3">
                {current.headline}
              </h3>

              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mt-1.5">
                {current.problemSolution}
              </p>
            </div>

            {/* 2. Clear Visual Step-by-Step Flow ("How it works") */}
            <div className="bg-[#FCFBF8] border border-[#E7E3DA] rounded-2xl p-4 sm:p-5">
              <div className="text-[10px] sm:text-[10.5px] font-bold text-[#707887] uppercase tracking-wider mb-2.5 sm:mb-3">
                HOW THIS WORKS IN PRACTICE:
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-2.5">
                {current.steps.map((st, i) => (
                  <div 
                    key={i} 
                    className="bg-[#FFFFFF] border border-[#E7E3DA] p-2.5 sm:p-3 rounded-xl flex flex-col justify-between min-h-[76px] sm:min-h-[82px] shadow-2xs"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-orange-50 border border-orange-200 text-[#FF5500] font-bold text-[9px] sm:text-[10px] flex items-center justify-center">
                        {st.num}
                      </span>
                      {i < 3 && (
                        <ArrowRight className="w-3 h-3 text-slate-300 hidden sm:block" />
                      )}
                    </div>
                    <div>
                      <div className="text-[11px] sm:text-xs font-bold text-[#0B192C] leading-snug">
                        {st.title}
                      </div>
                      <div className="text-[9.5px] sm:text-[10px] text-[#707887] mt-0.5 leading-tight font-medium">
                        {st.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. Merchant Benefits (Plain English Checklist) */}
            <div className="pt-2 border-t border-[#E7E3DA]">
              <div className="text-[10px] sm:text-[10.5px] font-bold text-[#707887] uppercase tracking-wider mb-2">
                WHAT YOUR BUSINESS GETS:
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {current.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs font-medium text-[#0B192C]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#FF5500] shrink-0" />
                    <span>{benefit}</span>
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
