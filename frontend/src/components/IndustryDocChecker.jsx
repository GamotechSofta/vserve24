import React, { useState } from 'react';
import { 
  FileCheck, ShieldCheck, CheckCircle2, AlertCircle, 
  ArrowRight, Download, Eye, Sparkles, Building, Lock, CheckSquare, Square
} from 'lucide-react';
import { vserveData } from '../data/vserveData';

export default function IndustryDocChecker({ onOpenApplication }) {
  const [selectedIndustry, setSelectedIndustry] = useState('ind-15'); // default Nutraceutical
  const [checkedDocs, setCheckedDocs] = useState({});

  const industryRequirements = {
    'ind-15': { // Nutraceutical
      title: 'Nutraceuticals & Dietary Supplements',
      badge: 'High-Volume Continuity',
      avgApprovalDays: '1-2 Days',
      rollingReserve: '0% – 5%',
      tierRates: '2.85% + $0.25',
      requiredDocs: [
        { id: 'd1', name: 'Articles of Organization / Incorporation', req: 'Required', desc: 'State-stamped corporate formation papers with active standing.' },
        { id: 'd2', name: 'Certificate of Analysis (COA) / GMP Certificate', req: 'Mandatory for Nutra', desc: 'Third-party lab testing verification for all ingestible SKUs.' },
        { id: 'd3', name: '3 Months Recent Processing Statements', req: 'Required if existing', desc: 'Must display gross volume, chargeback counts, and refund totals.' },
        { id: 'd4', name: 'Voided Check or Bank Confirmation Letter', req: 'Required', desc: 'Matching exact corporate legal name for direct settlement batches.' },
        { id: 'd5', name: 'Product Label Artwork & Ingredient Disclosure', req: 'Compliance Requirement', desc: 'Showing complete supplement facts panel without prohibited FDA drug claims.' }
      ],
      websiteChecklist: [
        'Clear terms of sale & 14-day refund policy visible on footer & checkout',
        'Customer support phone number and email prominently displayed',
        'Recurring continuity / trial terms explicitly disclosed before card entry',
        'SSL 256-bit encryption badge at checkout form'
      ]
    },
    'ind-3': { // CBD
      title: 'CBD & Hemp Wellness Products',
      badge: 'Regulated Retail',
      avgApprovalDays: '1-2 Days',
      rollingReserve: '0% – 5%',
      tierRates: '2.95% + $0.25',
      requiredDocs: [
        { id: 'd1', name: 'Corporate Entity Filing & EIN Letter', req: 'Required', desc: 'Proof of domestic or offshore corporate entity structure.' },
        { id: 'd2', name: 'Full Panel Lab COA (< 0.3% THC Verification)', req: 'Mandatory', desc: 'Certificate of Analysis showing compliant Delta-9 THC content under 0.3%.' },
        { id: 'd3', name: 'Manufacturer / Supplier Supply Agreement', req: 'Required', desc: 'Wholesale manufacturing contract or invoice verifying supply chain legitimacy.' },
        { id: 'd4', name: '3-6 Months Merchant Processing Statements', req: 'If available', desc: 'Clean baseline history without unresolved MATCH listings.' }
      ],
      websiteChecklist: [
        'Compliant age verification disclaimer (21+ or 18+ depending on product)',
        'Clear shipping policy and legal state shipping restrictions',
        'No unsubstantiated medical or therapeutic cure claims'
      ]
    },
    'ind-19': { // Recurring SaaS
      title: 'SaaS & Digital Subscription Continuity',
      badge: 'Zero-Drop Continuity',
      avgApprovalDays: '24 Hours',
      rollingReserve: '0% (Clean Standing)',
      tierRates: '2.65% + $0.20',
      requiredDocs: [
        { id: 'd1', name: 'EIN Tax Letter & Government ID of Principal', req: 'Required', desc: 'Valid Passport or Driver\'s License of 25%+ equity owners.' },
        { id: 'd2', name: 'Terms of Service (TOS) & SLA Policy', req: 'Required', desc: 'Subscription cancellation flow and automated renewal disclosures.' },
        { id: 'd3', name: 'Voided Check / Settlement Bank Account', req: 'Required', desc: 'Direct deposit routing verification.' },
        { id: 'd4', name: 'Demonstration Account Login for Underwriters', req: 'Helpful for Fast Decision', desc: 'Test credentials to inspect software member area.' }
      ],
      websiteChecklist: [
        '1-click digital cancellation option accessible from account settings',
        'Cardholder descriptor notification (e.g. "VSERVE24*SAAS PLAN" on bank statement)',
        'Immediate email confirmation sent after billing'
      ]
    },
    'ind-9': { // High-Ticket Coaching
      title: 'High-Ticket Consulting & Masterminds ($500+ AOV)',
      badge: 'Specialized High-Ticket',
      avgApprovalDays: '1-3 Days',
      rollingReserve: '5% (First 90 Days)',
      tierRates: '2.90% + $0.30',
      requiredDocs: [
        { id: 'd1', name: 'Client Service Agreement / Master Contract', req: 'Mandatory', desc: 'Sample client contract with signed payment milestone terms & refund clauses.' },
        { id: 'd2', name: 'Marketing & Advertising Collateral Sample', req: 'Required', desc: 'Webinar slides, landing page copy, or sales script used in promotion.' },
        { id: 'd3', name: '3-6 Months Processing Statements', req: 'Required for $50k+ caps', desc: 'Proving historical fulfillment and dispute resolution handling.' }
      ],
      websiteChecklist: [
        'Realistic testimonial disclaimers & income disclosure compliance',
        'Clear scope of work, milestone timelines, and deliverable schedule',
        'Electronic signature integration for contracts over $1,000'
      ]
    }
  };

  const currentReq = industryRequirements[selectedIndustry] || industryRequirements['ind-15'];

  const toggleDocCheck = (id) => {
    setCheckedDocs(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const totalRequired = currentReq.requiredDocs.length;
  const readyCount = currentReq.requiredDocs.filter(d => checkedDocs[d.id]).length;
  const isReadyToApply = readyCount >= 2;

  return (
    <section id="doc-checker" className="relative bg-[#FCFBF8] py-20 lg:py-28 border-b border-[#E7E3DA] overflow-hidden">
      
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
              <span>Underwriting Pre-Flight Inspector</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#0B192C] tracking-tight leading-[1.08]">
              Industry Underwriting & Compliance Checklist.
            </h2>

            <p className="text-[#475569] text-base lg:text-lg leading-relaxed">
              Discover exact bank document prerequisites, reserve terms, and website compliance standards for your specific commercial vertical.
            </p>
          </div>

          <div className="flex items-center gap-3 self-start lg:self-auto text-xs text-[#707887]">
            <span className="flex items-center gap-1.5 text-[#FF5500] font-bold bg-orange-50 border border-orange-200 px-3.5 py-2 rounded-xl">
              <FileCheck className="w-4 h-4 text-[#FF5500]" />
              99.2% First-Pass Bank Approval Rate
            </span>
          </div>
        </div>

        {/* Quick Industry Horizontal Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 scrollbar-none">
          {[
            { id: 'ind-15', label: 'Nutraceuticals' },
            { id: 'ind-3', label: 'CBD & Hemp' },
            { id: 'ind-19', label: 'SaaS & Subscriptions' },
            { id: 'ind-9', label: 'High-Ticket Consulting' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setSelectedIndustry(item.id);
                setCheckedDocs({});
              }}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-colors cursor-pointer border ${
                selectedIndustry === item.id
                  ? 'bg-[#FF5500] text-white border-[#FF5500] shadow-md shadow-orange-500/20'
                  : 'bg-white text-[#475569] border-[#E7E3DA] hover:border-slate-400'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Two-Column Document Inspector Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: Required Documents Checklist (7 cols) */}
          <div className="lg:col-span-7 bg-white border border-[#E7E3DA] rounded-3xl p-6 sm:p-8 space-y-6 shadow-xs">
            
            {/* Header with Readiness Gauge */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#E7E3DA]">
              <div>
                <span className="text-xs font-bold text-[#FF5500] uppercase tracking-wider block">
                  {currentReq.badge}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#0B192C] mt-0.5">
                  {currentReq.title}
                </h3>
              </div>

              <div className="flex items-center gap-2 bg-[#FCFBF8] border border-[#E7E3DA] px-3 py-1.5 rounded-xl text-xs font-semibold text-[#0B192C]">
                <span>Readiness:</span>
                <strong className="text-[#FF5500]">{readyCount} / {totalRequired} Ready</strong>
              </div>
            </div>

            {/* Checklist Items */}
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#707887] block">
                Required Corporate & Bank Documents (Click to verify your readiness):
              </span>

              {currentReq.requiredDocs.map((doc) => {
                const isChecked = checkedDocs[doc.id];
                return (
                  <div
                    key={doc.id}
                    onClick={() => toggleDocCheck(doc.id)}
                    className={`p-4 rounded-2xl border transition-all duration-150 cursor-pointer flex items-start gap-3.5 ${
                      isChecked
                        ? 'bg-emerald-50/40 border-emerald-300 shadow-2xs'
                        : 'bg-[#FCFBF8] hover:bg-white border-[#E7E3DA]'
                    }`}
                  >
                    <div className="mt-0.5 shrink-0 text-[#FF5500]">
                      {isChecked ? (
                        <CheckCircle2 className="w-5 h-5 text-[#10B981]" />
                      ) : (
                        <Square className="w-5 h-5 text-slate-300" />
                      )}
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-sm font-bold text-[#0B192C]">
                          {doc.name}
                        </span>
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                          isChecked ? 'bg-emerald-100 text-emerald-800' : 'bg-orange-50 text-[#FF5500]'
                        }`}>
                          {doc.req}
                        </span>
                      </div>
                      <p className="text-xs text-[#707887] mt-1 leading-normal">
                        {doc.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

          {/* RIGHT: Bank Term Parameters & Website Compliance (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* 1. Expected Bank Terms Box */}
            <div className="bg-[#0B192C] text-white rounded-3xl p-6 sm:p-7 space-y-4 shadow-md">
              <span className="text-xs font-bold uppercase tracking-wider text-[#FF5500] block">
                Target Underwriting Terms & Benchmarks
              </span>

              <div className="grid grid-cols-2 gap-3 pt-1">
                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 space-y-0.5">
                  <span className="text-[11px] text-slate-400">Approval Speed:</span>
                  <span className="text-sm font-bold text-white block">{currentReq.avgApprovalDays}</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 space-y-0.5">
                  <span className="text-[11px] text-slate-400">Rolling Reserve:</span>
                  <span className="text-sm font-bold text-emerald-400 block">{currentReq.rollingReserve}</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 space-y-0.5 col-span-2">
                  <span className="text-[11px] text-slate-400">Interchange-Plus Tier Rate:</span>
                  <span className="text-sm font-bold text-[#FF5500] block">{currentReq.tierRates} (No Aggregator Markup)</span>
                </div>
              </div>
            </div>

            {/* 2. Mandatory Website Compliance Box */}
            <div className="bg-white border border-[#E7E3DA] rounded-3xl p-6 sm:p-7 space-y-3.5 shadow-xs">
              <span className="text-xs font-bold uppercase tracking-wider text-[#707887] flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#10B981]" />
                Website Compliance Audit Checklist:
              </span>

              <div className="space-y-2">
                {currentReq.websiteChecklist.map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-[#0B192C]">
                    <CheckCircle2 className="w-4 h-4 text-[#FF5500] shrink-0 mt-0.5" />
                    <span className="leading-snug">{item}</span>
                  </div>
                ))}
              </div>

              {/* Ready to Apply Trigger */}
              <div className="pt-4 border-t border-[#E7E3DA]">
                <button
                  onClick={() => onOpenApplication?.({ industry: currentReq.title })}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#FF5500] hover:bg-[#E64A00] text-white font-bold text-xs sm:text-sm tracking-wide transition-all shadow-md shadow-orange-500/20 cursor-pointer"
                >
                  <span>Submit Pre-Checked Application</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
