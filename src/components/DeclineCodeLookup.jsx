import React, { useState, useMemo } from 'react';
import { 
  Search, ShieldAlert, CheckCircle2, ArrowRight, RefreshCw, 
  AlertTriangle, XCircle, Zap, ShieldCheck, Copy, Check, Filter, Layers
} from 'lucide-react';

export default function DeclineCodeLookup({ onOpenApplication }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('all'); // all, soft, hard
  const [selectedCode, setSelectedCode] = useState(null);
  const [copiedCode, setCopiedCode] = useState(null);

  const declineCodes = [
    {
      code: '05',
      name: 'Do Not Honor',
      type: 'soft',
      category: 'Generic Issuer Policy',
      severity: 'Medium',
      issuerReason: 'The cardholder\'s issuing bank rejected the charge due to internal fraud filters, unexpected geo-location, or sudden volume spikes without giving a specific reason.',
      recoveryRate: '68%',
      salvageStrategy: 'Automatic cascade to secondary acquiring MID with step-up 3D Secure 2.2 frictionless authentication. If recurring, retry in 24 hours at 09:30 AM local issuer time.',
      customerFix: 'Have customer verify high-ticket purchase with their bank app or authorize secondary payment method.'
    },
    {
      code: '51',
      name: 'Insufficient Funds',
      type: 'soft',
      category: 'Balance Constraint',
      severity: 'Low',
      issuerReason: 'Cardholder account balance or credit limit was momentarily exceeded at the time of authorization.',
      recoveryRate: '78%',
      salvageStrategy: 'Vserve24 Smart Retry Engine schedules automated re-billing on common national paydays (1st, 15th, and following Friday) with micro-auth check.',
      customerFix: 'Automated SMS / email payment link sent for instant balance top-up or secondary card update.'
    },
    {
      code: '62',
      name: 'Restricted Card / Invalid Service',
      type: 'soft',
      category: 'Merchant Category / Currency Restriction',
      severity: 'High',
      issuerReason: 'Issuing bank restricts transactions from specific high-risk Merchant Category Codes (MCC) or cross-border foreign currencies on standard aggregator accounts.',
      recoveryRate: '84%',
      salvageStrategy: 'Vserve24 re-routes the transaction through a dedicated domestic sponsor MID with compliant Level 2/3 data descriptor matching the card region.',
      customerFix: 'Resolved automatically via Vserve24 direct acquiring sponsorship without customer intervention.'
    },
    {
      code: '14',
      name: 'Invalid Card Number',
      type: 'hard',
      category: 'Data Entry Error',
      severity: 'Fatal',
      issuerReason: 'The 16-digit primary account number failed the Luhn checksum algorithm or does not exist in Visa/Mastercard BIN ranges.',
      recoveryRate: '0%',
      salvageStrategy: 'Real-time client-side Luhn verification catches invalid numbers before gateway payload dispatch to prevent unnecessary gateway fees.',
      customerFix: 'Prompt customer to re-enter their card number correctly.'
    },
    {
      code: '54',
      name: 'Expired Card',
      type: 'soft',
      category: 'Lifecycle Expiry',
      severity: 'Low',
      issuerReason: 'Card expiration date has passed or the issuing bank has re-issued a refreshed card with updated security dates.',
      recoveryRate: '92%',
      salvageStrategy: 'Automated Visa Account Updater (VAU) and Mastercard Automatic Billing Updater (ABU) queries card brand vaults to fetch new expiration date in real time.',
      customerFix: 'Updated automatically in background; zero subscriber churn.'
    },
    {
      code: '65',
      name: 'Activity Limit Exceeded',
      type: 'soft',
      category: 'Velocity Threshold',
      severity: 'Medium',
      issuerReason: 'Cardholder has exceeded their daily frequency or single-transaction spending limit with their bank.',
      recoveryRate: '65%',
      salvageStrategy: 'Dynamic split-billing or automated re-attempt scheduled for 00:01 AM next business day when bank velocity counters reset.',
      customerFix: 'Advise customer to request a temporary single-purchase limit increase via mobile banking app.'
    },
    {
      code: '82',
      name: 'Invalid CVV / CVC Mismatch',
      type: 'hard',
      category: 'Security Verification',
      severity: 'High',
      issuerReason: 'The 3 or 4-digit security code entered does not match the cryptographic key stored at the issuing bank.',
      recoveryRate: '15%',
      salvageStrategy: 'Trigger instant 1-click frictionless 3DS SMS OTP prompt to authenticate cardholder without losing shopping cart session.',
      customerFix: 'Request correct 3-digit CVV on back of card.'
    },
    {
      code: '91',
      name: 'Issuer Switch Inoperative',
      type: 'soft',
      category: 'Bank Network Outage',
      severity: 'Low',
      issuerReason: 'Issuing bank or core interchange network switch is temporarily experiencing downtime or network timeout.',
      recoveryRate: '95%',
      salvageStrategy: 'Instant zero-latency failover routing queues transaction in memory and re-dispatches immediately upon bank heartbeat recovery (under 45 seconds).',
      customerFix: '100% automated transparent recovery; buyer never sees an error screen.'
    },
    {
      code: '96',
      name: 'System Error / Processor Malfunction',
      type: 'soft',
      category: 'Processor Infrastructure Error',
      severity: 'Medium',
      issuerReason: 'Temporary communication breakdown between payment gateway and acquiring bank network rail.',
      recoveryRate: '90%',
      salvageStrategy: 'Rerouted instantaneously to secondary backup acquiring rail via Vserve24 Multi-MID automated failover.',
      customerFix: 'Transparent auto-recovery on backup rail.'
    },
    {
      code: 'N7',
      name: 'Decline for CVV2 Failure (Visa)',
      type: 'hard',
      category: 'Card Brand Security',
      severity: 'High',
      issuerReason: 'Card security code check failed during Visa net authorization.',
      recoveryRate: '20%',
      salvageStrategy: 'Pre-auth inline validation check prompts user instantly before payment submission.',
      customerFix: 'Customer re-enters correct CVV.'
    },
    {
      code: 'Q1',
      name: 'Cardholder Authentication Required (3DS 2.2)',
      type: 'soft',
      category: 'Regulatory / PSD2 SCA',
      severity: 'Low',
      issuerReason: 'European or UK issuing bank mandates Strong Customer Authentication (SCA) under PSD2 regulations.',
      recoveryRate: '88%',
      salvageStrategy: 'Vserve24 Dynamic 3DS 2.2 engine serves biometric or banking app verification modal in sub-80ms with zero checkout abandonment.',
      customerFix: 'Customer completes 1-second FaceID or SMS approval on banking app.'
    }
  ];

  const filteredCodes = useMemo(() => {
    return declineCodes.filter(item => {
      const matchesSearch = 
        item.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.issuerReason.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesFilter = filterType === 'all' || item.type === filterType;

      return matchesSearch && matchesFilter;
    });
  }, [searchQuery, filterType]);

  const activeDetail = selectedCode || filteredCodes[0] || declineCodes[0];

  const handleCopy = (code) => {
    navigator.clipboard.writeText(`Decline Code ${code.code}: ${code.name} - ${code.salvageStrategy}`);
    setCopiedCode(code.code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <section id="decline-lookup" className="relative bg-[#FCFBF8] py-20 lg:py-28 border-b border-[#E7E3DA] overflow-hidden">
      
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
              <span>Bank Response Intelligence</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#0B192C] tracking-tight leading-[1.08]">
              Decline Code Translator & Salvage Engine.
            </h2>

            <p className="text-[#475569] text-base lg:text-lg leading-relaxed">
              Search any issuer decline code to understand why the bank rejected the transaction and how Vserve24 automatically recovers the revenue.
            </p>
          </div>

          <div className="flex items-center gap-3 self-start lg:self-auto text-xs text-[#707887]">
            <span className="flex items-center gap-1.5 text-[#10B981] font-bold bg-emerald-50 border border-emerald-200 px-3.5 py-2 rounded-xl">
              <Zap className="w-4 h-4 text-[#10B981]" />
              Up to 84% Salvage Recovery on Soft Declines
            </span>
          </div>
        </div>

        {/* Search & Filter Bar */}
        <div className="bg-white border border-[#E7E3DA] rounded-2xl p-3.5 sm:p-4 mb-8 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Search Input */}
          <div className="relative w-full sm:w-96">
            <Search className="w-4 h-4 text-[#707887] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search code (e.g. 05, 51, 62) or error name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#FCFBF8] border border-[#E7E3DA] text-xs sm:text-sm text-[#0B192C] placeholder-slate-400 focus:outline-none focus:border-[#FF5500] transition-colors shadow-2xs"
            />
          </div>

          {/* Filter Segmented Controls */}
          <div className="flex items-center gap-1.5 w-full sm:w-auto overflow-x-auto">
            {[
              { id: 'all', label: 'All Codes' },
              { id: 'soft', label: 'Soft Declines (Salvageable)' },
              { id: 'hard', label: 'Hard Declines (Fatal)' },
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setFilterType(f.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                  filterType === f.id
                    ? 'bg-[#0B192C] text-white shadow-xs'
                    : 'bg-[#FCFBF8] hover:bg-slate-100 text-[#475569] border border-[#E7E3DA]'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

        </div>

        {/* Two-Column Interactive Explorer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* LEFT: Scrollable Code Cards List (5 cols) */}
          <div className="lg:col-span-5 space-y-2.5 max-h-[580px] overflow-y-auto pr-1">
            {filteredCodes.length > 0 ? (
              filteredCodes.map((item) => {
                const isSelected = activeDetail.code === item.code;
                const isSoft = item.type === 'soft';

                return (
                  <div
                    key={item.code}
                    onClick={() => setSelectedCode(item)}
                    className={`p-4 rounded-2xl border transition-all duration-150 cursor-pointer flex items-center justify-between group ${
                      isSelected
                        ? 'bg-white border-[#FF5500] shadow-md shadow-orange-500/[0.08] ring-1 ring-[#FF5500]'
                        : 'bg-white hover:bg-[#FCFBF8] border-[#E7E3DA] hover:border-slate-300 shadow-2xs'
                    }`}
                  >
                    <div className="flex items-center gap-3.5 min-w-0">
                      <div className={`w-11 h-11 rounded-xl flex items-center justify-center font-bold text-sm shrink-0 ${
                        isSoft
                          ? 'bg-orange-50 text-[#FF5500] border border-orange-200/80'
                          : 'bg-slate-100 text-slate-700 border border-slate-200'
                      }`}>
                        {item.code}
                      </div>

                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <h4 className="text-sm font-bold text-[#0B192C] group-hover:text-[#FF5500] transition-colors truncate">
                            {item.name}
                          </h4>
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md uppercase ${
                            isSoft
                              ? 'bg-emerald-50 text-[#10B981] border border-emerald-200'
                              : 'bg-rose-50 text-rose-600 border border-rose-200'
                          }`}>
                            {isSoft ? 'Soft' : 'Hard'}
                          </span>
                        </div>
                        <p className="text-xs text-[#707887] mt-0.5 truncate">
                          {item.category} • Recovery: {item.recoveryRate}
                        </p>
                      </div>
                    </div>

                    <ArrowRight className={`w-4 h-4 shrink-0 transition-transform ${
                      isSelected ? 'text-[#FF5500] translate-x-1' : 'text-slate-300'
                    }`} />
                  </div>
                );
              })
            ) : (
              <div className="p-8 text-center bg-white border border-[#E7E3DA] rounded-2xl text-[#707887] text-xs">
                No decline codes found matching "{searchQuery}".
              </div>
            )}
          </div>

          {/* RIGHT: Detailed Diagnostic & Salvage Blueprint Card (7 cols) */}
          <div className="lg:col-span-7 bg-white border border-[#E7E3DA] rounded-3xl p-6 sm:p-8 lg:p-10 shadow-sm space-y-6">
            
            {/* Header with Badges */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#E7E3DA]">
              <div className="flex items-center gap-3">
                <span className="text-2xl font-black text-[#FF5500] bg-orange-50 border border-orange-200/80 px-3.5 py-1 rounded-xl">
                  CODE {activeDetail.code}
                </span>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#0B192C]">
                    {activeDetail.name}
                  </h3>
                  <span className="text-xs text-[#707887] font-semibold">
                    Category: {activeDetail.category}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleCopy(activeDetail)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-[#E7E3DA] hover:bg-[#FCFBF8] text-xs font-semibold text-[#475569] transition-colors cursor-pointer"
                >
                  {copiedCode === activeDetail.code ? <Check className="w-3.5 h-3.5 text-[#10B981]" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedCode === activeDetail.code ? 'Copied' : 'Copy Blueprint'}</span>
                </button>
              </div>
            </div>

            {/* Issuer Root Cause */}
            <div className="space-y-1.5">
              <span className="text-xs font-bold uppercase tracking-wider text-[#707887] flex items-center gap-1.5">
                <AlertTriangle className="w-3.5 h-3.5 text-amber-500" />
                Why the Issuing Bank Rejected This:
              </span>
              <p className="text-xs sm:text-sm text-[#0B192C] leading-relaxed bg-[#FCFBF8] p-4 rounded-2xl border border-[#E7E3DA]">
                {activeDetail.issuerReason}
              </p>
            </div>

            {/* VSERVE24 Automated Salvage Strategy (The Core Value) */}
            <div className="space-y-2 p-5 rounded-2xl bg-[#0B192C] text-white shadow-md relative overflow-hidden">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#FF5500] flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#10B981]" />
                  Vserve24 Intelligent Auto-Salvage Action:
                </span>
                <span className="text-[11px] font-bold text-[#10B981] bg-emerald-500/10 border border-emerald-500/30 px-2 py-0.5 rounded">
                  {activeDetail.recoveryRate} Recovery Rate
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed pt-1">
                {activeDetail.salvageStrategy}
              </p>
            </div>

            {/* Customer Facing Recovery Step */}
            <div className="space-y-1.5">
              <span className="text-xs font-bold uppercase tracking-wider text-[#707887] flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" />
                Merchant / Buyer Remediation:
              </span>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                {activeDetail.customerFix}
              </p>
            </div>

            {/* Bottom Conversion CTA */}
            <div className="pt-4 border-t border-[#E7E3DA] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-[#707887]">
                Stop losing up to 20% of revenue to recoverable soft declines.
              </div>

              <button
                onClick={onOpenApplication}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#FF5500] hover:bg-[#E64A00] text-white text-xs font-bold tracking-wide transition-all shadow-md shadow-orange-500/20 cursor-pointer"
              >
                <span>Deploy Smart Routing</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
