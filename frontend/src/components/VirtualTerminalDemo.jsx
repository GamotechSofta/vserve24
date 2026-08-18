import React, { useState } from 'react';
import { 
  CreditCard, Lock, CheckCircle2, RefreshCw, 
  ArrowRight, ShieldCheck, Printer, Check, DollarSign, User, Calendar, KeyRound
} from 'lucide-react';

export default function VirtualTerminalDemo({ onOpenApplication }) {
  const [formData, setFormData] = useState({
    amount: '450.00',
    currency: 'USD',
    cardNumber: '4532 •••• •••• 8841',
    expiry: '08/28',
    cvv: '912',
    cardholderName: 'Apex Commercial Wholesale LLC',
    midRail: 'mid_tier1_us_sponsor',
    threeDsOption: 'frictionless_2_2'
  });

  const [processing, setProcessing] = useState(false);
  const [transactionResult, setTransactionResult] = useState(null);

  const handleCharge = (e) => {
    e.preventDefault();
    setProcessing(true);
    setTransactionResult(null);

    setTimeout(() => {
      setProcessing(false);
      setTransactionResult({
        authCode: 'VS-AUTH-' + Math.floor(100000 + Math.random() * 900000),
        status: 'Approved & Settled',
        timestamp: new Date().toLocaleString(),
        amount: `$${formData.amount}`,
        currency: formData.currency,
        cardMasked: 'Visa ending in 8841',
        tokenVaultId: 'tok_vault_encrypted_' + Math.random().toString(36).substring(7),
        rail: 'Direct Tier-1 Sponsor MID #01',
        batchSettlement: 'T+1 Daily Funding'
      });
    }, 700);
  };

  const handleReset = () => {
    setTransactionResult(null);
  };

  return (
    <section id="virtual-terminal" className="relative bg-[#FFFFFF] py-20 lg:py-28 border-b border-[#E7E3DA] overflow-hidden">
      
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
              <span>MOTO Virtual Terminal Simulator</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#0B192C] tracking-tight leading-[1.08]">
              Secure Virtual Terminal for Phone & B2B Invoicing.
            </h2>

            <p className="text-[#475569] text-base lg:text-lg leading-relaxed">
              Test drive our browser-based MOTO virtual terminal engineered for high-ticket telephone orders, commercial invoices, and instant card vaulting.
            </p>
          </div>

          <div className="flex items-center gap-3 self-start lg:self-auto text-xs text-[#707887]">
            <span className="flex items-center gap-1.5 text-[#10B981] font-bold bg-emerald-50 border border-emerald-200 px-3.5 py-2 rounded-xl">
              <Lock className="w-4 h-4 text-[#10B981]" />
              Level 2/3 Data & PCI-DSS Compliant Vault
            </span>
          </div>
        </div>

        {/* Two-Column Terminal Simulator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
          
          {/* LEFT: Virtual Terminal Input Interface (7 cols) */}
          <div className="lg:col-span-7 bg-[#FCFBF8] border border-[#E7E3DA] rounded-3xl p-6 sm:p-8 space-y-5 shadow-xs">
            
            <div className="flex items-center justify-between pb-3 border-b border-[#E7E3DA]">
              <div className="flex items-center gap-2">
                <CreditCard className="w-4 h-4 text-[#FF5500]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#0B192C]">
                  Virtual Terminal Ingestion Console
                </span>
              </div>
              <span className="text-[11px] font-semibold text-[#10B981] bg-emerald-50 px-2 py-0.5 rounded">
                Live Gateway Ready
              </span>
            </div>

            <form onSubmit={handleCharge} className="space-y-4">
              
              {/* Amount & Currency */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="sm:col-span-2 space-y-1">
                  <label className="text-xs text-[#707887] font-semibold">Charge Amount ($ USD)</label>
                  <div className="relative">
                    <DollarSign className="w-4 h-4 text-[#707887] absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      value={formData.amount}
                      onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-white border border-[#E7E3DA] text-sm font-bold text-[#0B192C] focus:outline-none focus:border-[#FF5500]"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs text-[#707887] font-semibold">MID Routing Rail</label>
                  <select
                    value={formData.midRail}
                    onChange={(e) => setFormData({ ...formData, midRail: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-white border border-[#E7E3DA] text-xs font-semibold text-[#0B192C] focus:outline-none focus:border-[#FF5500]"
                  >
                    <option value="mid_tier1_us_sponsor">Tier-1 US MID</option>
                    <option value="mid_eu_uk_crossborder">EU/UK SEPA MID</option>
                    <option value="mid_offshore_discrete">Offshore MID</option>
                  </select>
                </div>
              </div>

              {/* Cardholder Business Name */}
              <div className="space-y-1">
                <label className="text-xs text-[#707887] font-semibold">Cardholder Name / Entity</label>
                <div className="relative">
                  <User className="w-4 h-4 text-[#707887] absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    value={formData.cardholderName}
                    onChange={(e) => setFormData({ ...formData, cardholderName: e.target.value })}
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-white border border-[#E7E3DA] text-xs sm:text-sm text-[#0B192C] focus:outline-none focus:border-[#FF5500]"
                  />
                </div>
              </div>

              {/* Card Number */}
              <div className="space-y-1">
                <label className="text-xs text-[#707887] font-semibold">Card Number (Simulated Direct MID Entry)</label>
                <div className="relative">
                  <CreditCard className="w-4 h-4 text-[#707887] absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    value={formData.cardNumber}
                    onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })}
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-white border border-[#E7E3DA] text-xs sm:text-sm font-semibold text-[#0B192C] focus:outline-none focus:border-[#FF5500]"
                  />
                </div>
              </div>

              {/* Expiry & CVV */}
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs text-[#707887] font-semibold">Expiration (MM/YY)</label>
                  <input
                    type="text"
                    required
                    value={formData.expiry}
                    onChange={(e) => setFormData({ ...formData, expiry: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-white border border-[#E7E3DA] text-xs sm:text-sm text-[#0B192C] focus:outline-none focus:border-[#FF5500]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs text-[#707887] font-semibold">Security Code (CVV)</label>
                  <input
                    type="password"
                    required
                    maxLength={4}
                    value={formData.cvv}
                    onChange={(e) => setFormData({ ...formData, cvv: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-white border border-[#E7E3DA] text-xs sm:text-sm text-[#0B192C] focus:outline-none focus:border-[#FF5500]"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={processing}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#FF5500] hover:bg-[#E64A00] text-white font-bold text-xs sm:text-sm tracking-wide transition-all shadow-md shadow-orange-500/20 cursor-pointer disabled:opacity-75"
                >
                  {processing ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      <span>Encrypting Payload & Authorizing...</span>
                    </>
                  ) : (
                    <>
                      <span>Process MOTO Virtual Terminal Payment</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

            </form>

          </div>

          {/* RIGHT: Live Generated Receipt & Vault Card (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {transactionResult ? (
              <div className="bg-[#0B192C] text-white rounded-3xl p-6 sm:p-7 space-y-5 shadow-xl animate-in fade-in zoom-in-95 duration-200 border border-slate-800">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                      Authorization Successful
                    </span>
                  </div>
                  <span className="text-[10.5px] text-slate-400">Sub-80ms</span>
                </div>

                <div className="space-y-3 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Auth Code:</span>
                    <strong className="text-white font-mono">{transactionResult.authCode}</strong>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Amount Charged:</span>
                    <strong className="text-emerald-400 text-sm">{transactionResult.amount} {transactionResult.currency}</strong>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Card Payment:</span>
                    <span className="text-slate-200">{transactionResult.cardMasked}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Settlement Rail:</span>
                    <span className="text-slate-200">{transactionResult.rail}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Tokenized Vault ID:</span>
                    <span className="text-[#FF5500] font-mono text-[11px]">{transactionResult.tokenVaultId}</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800 flex items-center justify-between gap-3">
                  <button
                    onClick={handleReset}
                    className="text-xs text-slate-400 hover:text-white transition-colors cursor-pointer"
                  >
                    Reset Terminal
                  </button>

                  <button
                    onClick={onOpenApplication}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#FF5500] text-white text-xs font-bold transition-colors cursor-pointer"
                  >
                    <span>Request Production Terminal</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ) : (
              <div className="bg-[#FCFBF8] border border-[#E7E3DA] rounded-3xl p-6 sm:p-7 space-y-4 text-center">
                <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-200 text-[#FF5500] flex items-center justify-center mx-auto">
                  <Lock className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-[#0B192C]">
                  Live Encrypted Authorization Receipt
                </h4>
                <p className="text-xs text-[#707887] leading-relaxed">
                  Submit a test payment on the left to inspect the instant authorization code, tokenized vault ID, and sponsor rail routing details.
                </p>
                <div className="p-3 rounded-xl bg-white border border-[#E7E3DA] text-[11px] text-[#475569] text-left space-y-1">
                  <div>✓ Direct Level 2 / Level 3 commercial corporate card data</div>
                  <div>✓ Instant customer digital receipt dispatch</div>
                  <div>✓ Recurring schedule tokenization ready</div>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
