import React, { useState } from 'react';
import { 
  Code2, Play, Copy, Check, Terminal, Cpu, 
  ShieldCheck, Zap, Lock, RefreshCw, Layers, ArrowRight,
  Sparkles, CheckCircle2, Server, ArrowDownUp, Shield, Activity, DollarSign
} from 'lucide-react';

export default function ApiPlayground({ onOpenApplication }) {
  const [selectedLanguage, setSelectedLanguage] = useState('curl');
  const [selectedEndpoint, setSelectedEndpoint] = useState('deposit');
  const [copied, setCopied] = useState(false);
  const [copiedResponse, setCopiedResponse] = useState(false);
  const [executing, setExecuting] = useState(false);
  const [chargeAmount, setChargeAmount] = useState('25000');
  const [selectedVertical, setSelectedVertical] = useState('gaming_trading');
  const [simulatedResponse, setSimulatedResponse] = useState(null);
  const [activeTab, setActiveTab] = useState('response'); // 'response' | 'telemetry' | 'headers'

  const endpoints = [
    {
      id: 'deposit',
      method: 'POST',
      path: '/v1/charges/direct-acquirer',
      title: 'Direct Acquirer Deposit',
      badge: 'Sub-80ms',
      desc: 'Tokenized high-velocity auth with 3DS 2.2 biometric filter for Gaming & Trading'
    },
    {
      id: 'payout',
      method: 'POST',
      path: '/v1/payouts/instant-transfer',
      title: 'Instant Payouts / Withdrawals',
      badge: '24/7 IMPS/NEFT',
      desc: 'Automated 1-second player winnings & trader withdrawal dispatch directly to bank accounts'
    },
    {
      id: 'failover',
      method: 'POST',
      path: '/v1/routing/cascading-salvage',
      title: 'Cascading Failover Route',
      badge: '84% Recovery',
      desc: 'Smart retry across secondary sponsor bank MIDs when primary bank soft-declines'
    },
    {
      id: 'rdr',
      method: 'POST',
      path: '/v1/webhooks/rdr-pre-dispute',
      title: 'RDR Pre-Dispute Intercept',
      badge: 'Zero Ratio Impact',
      desc: 'Ethoca & Verifi instant auto-refund to shield merchant dispute ratio below 0.90%'
    }
  ];

  const parsedAmount = parseInt(chargeAmount, 10) || 25000;
  const inrFormatted = `₹${parsedAmount.toLocaleString('en-IN')}.00`;
  const inrPaisa = parsedAmount * 100;

  const codeSnippets = {
    deposit: {
      curl: `curl -X POST https://api.vserve24.com/v1/charges/direct-acquirer \\
  -H "Authorization: Bearer vs_live_9482bf109284" \\
  -H "Content-Type: application/json" \\
  -d '{
    "amount": ${inrPaisa},
    "currency": "INR",
    "token": "tok_vault_encrypted_884920",
    "risk_vertical": "${selectedVertical}",
    "three_d_secure": "frictionless_2_2",
    "settlement_rail": "tier1_inr_direct_mid"
  }'`,
      node: `import { Vserve24Client } from '@vserve24/sdk';

const vserve = new Vserve24Client('vs_live_9482bf109284');

const charge = await vserve.charges.createDirectAcquirer({
  amount: ${inrPaisa}, // ${inrFormatted}
  currency: 'INR',
  token: 'tok_vault_encrypted_884920',
  riskVertical: '${selectedVertical}',
  threeDSecure: 'frictionless_2_2',
  settlementRail: 'tier1_inr_direct_mid'
});

console.log('Approved Auth Code:', charge.authorization_code);
console.log('Direct Bank Batch:', charge.settlement_status);`,
      python: `import vserve24

vserve24.api_key = "vs_live_9482bf109284"

charge = vserve24.Charges.create_direct(
    amount=${inrPaisa},
    currency="INR",
    token="tok_vault_encrypted_884920",
    risk_vertical="${selectedVertical}",
    three_d_secure="frictionless_2_2"
)

print(f"Status: {charge.status}, Auth: {charge.authorization_code}")
print(f"Net Merchant Settlement: ₹{charge.net_payout:,.2f}")`,
      php: `<?php
require_once('vendor/autoload.php');

$vserve = new \\Vserve24\\Client('vs_live_9482bf109284');

$charge = $vserve->charges->create([
    'amount' => ${inrPaisa},
    'currency' => 'INR',
    'token' => 'tok_vault_encrypted_884920',
    'risk_vertical' => '${selectedVertical}',
    'three_d_secure' => 'frictionless_2_2'
]);

echo "Approved Auth: " . $charge->authorization_code;`,
      go: `package main

import (
    "fmt"
    "github.com/vserve24/vserve24-go"
)

func main() {
    client := vserve24.NewClient("vs_live_9482bf109284")
    charge, err := client.Charges.CreateDirect(&vserve24.ChargeParams{
        Amount:       ${inrPaisa},
        Currency:     "INR",
        Token:        "tok_vault_encrypted_884920",
        RiskVertical: "${selectedVertical}",
    })
    fmt.Printf("Charge Approved: %s (Auth: %s)\\n", charge.ID, charge.AuthCode)
}`
    },
    payout: {
      curl: `curl -X POST https://api.vserve24.com/v1/payouts/instant-transfer \\
  -H "Authorization: Bearer vs_live_9482bf109284" \\
  -H "Content-Type: application/json" \\
  -d '{
    "beneficiary_account": "918204928104",
    "ifsc_code": "HDFC0000128",
    "amount": ${inrPaisa},
    "currency": "INR",
    "rail": "IMPS_DIRECT_SETTLE",
    "purpose": "player_winnings_withdrawal"
  }'`,
      node: `const payout = await vserve.payouts.createInstantTransfer({
  beneficiaryAccount: '918204928104',
  ifscCode: 'HDFC0000128',
  amount: ${inrPaisa}, // ${inrFormatted}
  currency: 'INR',
  rail: 'IMPS_DIRECT_SETTLE',
  purpose: 'trader_profit_withdrawal'
});

console.log('Dispatched UTR:', payout.bank_utr);`,
      python: `payout = vserve24.Payouts.instant_transfer(
    account="918204928104",
    ifsc="HDFC0000128",
    amount=${inrPaisa},
    currency="INR",
    rail="IMPS_DIRECT_SETTLE"
)
print(f"Payout Settled in 850ms, UTR: {payout.bank_utr}")`,
      php: `$payout = $vserve->payouts->instant([
    'account' => '918204928104',
    'ifsc' => 'HDFC0000128',
    'amount' => ${inrPaisa},
    'currency' => 'INR',
    'rail' => 'IMPS_DIRECT_SETTLE'
]);`,
      go: `payout, err := client.Payouts.InstantTransfer(&vserve24.PayoutParams{
    Account:  "918204928104",
    IFSC:     "HDFC0000128",
    Amount:   ${inrPaisa},
    Currency: "INR",
})`
    },
    failover: {
      curl: `curl -X POST https://api.vserve24.com/v1/routing/cascading-salvage \\
  -H "Authorization: Bearer vs_live_9482bf109284" \\
  -H "Content-Type: application/json" \\
  -d '{
    "original_transaction_id": "tx_declined_soft_99182",
    "primary_mid": "mid_inr_tier1_01",
    "fallback_mids": ["mid_inr_tier1_02", "mid_offshore_04"],
    "retry_policy": "intelligent_decline_salvage"
  }'`,
      node: `const failover = await vserve.routing.cascadingSalvage({
  originalTransactionId: 'tx_declined_soft_99182',
  fallbackMids: ['mid_inr_tier1_02', 'mid_offshore_04'],
  autoSalvageSoftDeclines: true
});

console.log('Salvaged Auth:', failover.authorization_code);`,
      python: `salvaged = vserve24.Routing.cascade_failover(
    transaction_id="tx_declined_soft_99182",
    fallback_mids=["mid_inr_tier1_02", "mid_offshore_04"]
)
print(f"Recovered Revenue: ₹{salvaged.recovered_amount:,.2f}")`,
      php: `$failover = $vserve->routing->cascade([
    'transaction_id' => 'tx_declined_soft_99182',
    'fallback_mids' => ['mid_inr_tier1_02', 'mid_offshore_04']
]);`,
      go: `salvaged, err := client.Routing.CascadeFailover("tx_declined_soft_99182")`
    },
    rdr: {
      curl: `curl -X POST https://api.vserve24.com/v1/webhooks/rdr-pre-dispute \\
  -H "Authorization: Bearer vs_live_9482bf109284" \\
  -H "Content-Type: application/json" \\
  -d '{
    "alert_source": "VERIFI_RDR_ETHOCA_NETWORK",
    "transaction_id": "tx_88392019",
    "deflection_rule": "auto_refund_prevent_chargeback",
    "ratio_impact": "0.00%"
  }'`,
      node: `// Handled automatically via Vserve24 RDR Webhook
vserve.webhooks.on('dispute.pre_alert', async (alert) => {
  console.log('Deflected before bank chargeback threshold:', alert.transactionId);
  console.log('Dispute Ratio Impact: 0.00%');
});`,
      python: `@app.route('/vserve-webhook', methods=['POST'])
def handle_rdr_alert():
    event = vserve24.Webhook.construct_event(request.data)
    # Intercept dispute and prevent scheme fines
    return {"status": "deflected_and_saved", "ratio_impact": "0.00%"}`,
      php: `$event = \\Vserve24\\Webhook::constructEvent($payload, $sigHeader);
if ($event->type === 'dispute.pre_alert') {
    // Zero chargeback penalty applied
}`,
      go: `event, err := webhook.ConstructEvent(payload, sig)`
    }
  };

  const sampleResponses = {
    deposit: {
      status: "approved",
      id: "ch_live_8941098230",
      amount: inrPaisa,
      currency: "INR",
      amount_formatted: inrFormatted,
      risk_score: 8,
      risk_evaluation: "LOW_RISK_GAMING_TRADING_APPROVED",
      three_d_secure: {
        version: "2.2.0",
        frictionless: true,
        liability_shifted: true,
        auth_protocol: "BIOMETRIC_DEVICE_BOUND"
      },
      acquirer_rail: "Direct Sponsor Bank MID #01 (INR Rails)",
      authorization_code: "VS-AUTH-882941",
      latency_ms: 68,
      net_settlement: {
        gross: inrFormatted,
        gateway_fee: `₹${(parsedAmount * 0.0285 + 15).toFixed(2)}`,
        net_merchant_payout: `₹${(parsedAmount - (parsedAmount * 0.0285 + 15)).toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
        batch_funding: "T+1 Daily Direct Bank Funding"
      }
    },
    payout: {
      status: "transferred_and_settled",
      payout_id: "po_live_7719280491",
      amount: inrPaisa,
      currency: "INR",
      amount_formatted: inrFormatted,
      rail: "IMPS_INSTANT_TRANSFER",
      bank_utr: "CMS" + Math.floor(100000000000 + Math.random() * 900000000000),
      beneficiary_status: "SUCCESS_CREDITED_TO_ACCOUNT",
      latency_ms: 820,
      timestamp: new Date().toISOString()
    },
    failover: {
      status: "salvaged_and_approved",
      original_code: "05_DO_NOT_HONOR_SOFT_DECLINE",
      failover_route: "mid_inr_tier1_02_secondary",
      salvage_latency_ms: 74,
      recovered_revenue: inrFormatted,
      authorization_code: "AUTH_SALVAGE_9941",
      bank_route: "High-Velocity Secondary Domestic Rail"
    },
    rdr: {
      status: "deflected",
      alert_network: "Verifi RDR & Ethoca Consumer Clarity",
      chargeback_prevented: true,
      merchant_ratio_impact: "0.00%",
      resolution: "Instant descriptor credit issued; 0 dispute penalty registered.",
      fee_avoidance: "₹4,000 saved in card brand scheme fines"
    }
  };

  const handleCopyCode = () => {
    const code = codeSnippets[selectedEndpoint][selectedLanguage];
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCopyResponse = () => {
    const res = JSON.stringify(simulatedResponse || sampleResponses[selectedEndpoint], null, 2);
    navigator.clipboard.writeText(res);
    setCopiedResponse(true);
    setTimeout(() => setCopiedResponse(false), 2000);
  };

  const handleExecuteRequest = () => {
    setExecuting(true);
    setSimulatedResponse(null);
    setTimeout(() => {
      setExecuting(false);
      setSimulatedResponse(sampleResponses[selectedEndpoint]);
    }, 620);
  };

  return (
    <section id="api" className="relative bg-[#070F1E] text-white py-20 lg:py-28 overflow-hidden border-b border-slate-800">
      
      {/* Dynamic Ambient Background Glow */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-orange-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Blueprint Grid Overlay */}
      <div 
        aria-hidden 
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: 'radial-gradient(#FFFFFF 1px, transparent 1px)',
          backgroundSize: '28px 28px'
        }}
      />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Top Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 lg:mb-12">
          <div className="max-w-3xl space-y-3.5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-xs tracking-widest text-[#FF5500] uppercase font-bold">
              <span className="w-2 h-2 rounded-full bg-[#FF5500] animate-pulse" />
              <span>DEVELOPER REST API & SANDBOX</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-bold text-white tracking-tight leading-[1.08]">
              Engineered for seamless developer integration.
            </h2>

            <p className="text-slate-400 text-base lg:text-lg leading-relaxed">
              Accept tokenized player/trader deposits, dispatch instant 24/7 bank payouts via IMPS, orchestrate automated multi-MID cascading, and auto-deflect chargebacks with sub-80ms response latency.
            </p>
          </div>

          {/* Quick Metrics Badge */}
          <div className="flex flex-wrap items-center gap-3 self-start lg:self-auto text-xs">
            <span className="flex items-center gap-1.5 text-emerald-400 font-bold bg-emerald-500/10 border border-emerald-500/30 px-3.5 py-2 rounded-xl">
              <Zap className="w-4 h-4 text-emerald-400" />
              Sub-80ms Auth Latency
            </span>
            <span className="flex items-center gap-1.5 text-cyan-400 font-bold bg-cyan-500/10 border border-cyan-500/30 px-3.5 py-2 rounded-xl">
              <Code2 className="w-4 h-4 text-cyan-400" />
              5 Native SDKs
            </span>
          </div>
        </div>

        {/* Interactive Parameter Control Bar */}
        <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/90 border border-slate-800 mb-6 grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
          
          {/* Vertical Selector */}
          <div className="space-y-1">
            <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Risk Vertical / Platform</label>
            <select
              value={selectedVertical}
              onChange={(e) => setSelectedVertical(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-slate-800 border border-slate-700 text-xs font-bold text-white focus:outline-none focus:border-[#FF5500]"
            >
              <option value="gaming_trading">🎮 iGaming, Esports & Forex/Crypto Trading</option>
              <option value="high_ticket_b2b">📈 High-Ticket B2B & Commercial Wholesale</option>
              <option value="nutraceuticals">🌿 Nutraceuticals & Continuity Subscriptions</option>
              <option value="digital_media">💻 Digital Media, SaaS & Gaming Micro-items</option>
            </select>
          </div>

          {/* Amount Simulator */}
          <div className="space-y-1">
            <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Test Transaction Value (₹ INR)</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400">₹</span>
              <input
                type="number"
                value={chargeAmount}
                onChange={(e) => setChargeAmount(e.target.value)}
                step="500"
                className="w-full pl-7 pr-3 py-2 rounded-xl bg-slate-800 border border-slate-700 text-xs font-bold text-white focus:outline-none focus:border-[#FF5500]"
                placeholder="25000"
              />
            </div>
          </div>

          {/* Real-time Environment Status */}
          <div className="flex sm:justify-end items-center gap-3">
            <div className="text-right hidden sm:block">
              <span className="text-[10px] text-slate-400 font-bold block uppercase">API Environment</span>
              <span className="text-xs font-bold text-emerald-400 flex items-center gap-1.5 justify-end">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Live Sandbox Ready
              </span>
            </div>
            <button
              onClick={handleExecuteRequest}
              disabled={executing}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#FF5500] hover:bg-[#E64A00] text-white text-xs font-bold transition-all shadow-lg shadow-orange-500/25 cursor-pointer disabled:opacity-75"
            >
              <Play className={`w-3.5 h-3.5 ${executing ? 'animate-spin' : ''}`} />
              <span>{executing ? 'Simulating...' : 'Run Test Request'}</span>
            </button>
          </div>

        </div>

        {/* Endpoint Selector Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 scrollbar-none">
          {endpoints.map((ep) => {
            const isActive = selectedEndpoint === ep.id;
            return (
              <button
                key={ep.id}
                onClick={() => {
                  setSelectedEndpoint(ep.id);
                  setSimulatedResponse(null);
                }}
                className={`px-4 py-3 rounded-2xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-3 border cursor-pointer ${
                  isActive
                    ? 'bg-slate-800/90 text-white border-orange-500/80 shadow-lg shadow-orange-500/10'
                    : 'bg-slate-900/60 text-slate-400 border-slate-800 hover:border-slate-700 hover:text-slate-200'
                }`}
              >
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                  isActive ? 'bg-[#FF5500] text-white' : 'bg-slate-800 text-slate-300'
                }`}>
                  {ep.method}
                </span>
                <span className="font-semibold">{ep.title}</span>
                <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${
                  isActive ? 'bg-orange-500/20 text-orange-300' : 'bg-slate-800 text-slate-400'
                }`}>
                  {ep.badge}
                </span>
              </button>
            );
          })}
        </div>

        {/* Two-Column Code Request & Live Output Console */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* LEFT: Code Request Editor (7 cols) */}
          <div className="lg:col-span-7 bg-slate-900/90 rounded-3xl border border-slate-800 flex flex-col justify-between overflow-hidden shadow-2xl">
            
            {/* Top Language Bar & Action Controls */}
            <div className="px-5 py-3.5 bg-slate-950/80 border-b border-slate-800 flex items-center justify-between gap-4">
              
              {/* Language Tabs */}
              <div className="flex items-center gap-1.5 overflow-x-auto">
                {['curl', 'node', 'python', 'php', 'go'].map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setSelectedLanguage(lang)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                      selectedLanguage === lang
                        ? 'bg-[#FF5500] text-white shadow-xs'
                        : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                    }`}
                  >
                    {lang === 'curl' ? 'cURL' : lang}
                  </button>
                ))}
              </div>

              {/* Copy Code */}
              <button
                onClick={handleCopyCode}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition-colors cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>

            </div>

            {/* Code Block Container */}
            <div className="p-5 sm:p-6 flex-1 overflow-x-auto text-slate-200 text-xs sm:text-[13px] leading-relaxed font-mono bg-slate-950/40">
              <pre className="whitespace-pre">
                {codeSnippets[selectedEndpoint][selectedLanguage]}
              </pre>
            </div>

            {/* Bottom Endpoint Info Bar */}
            <div className="px-5 py-3 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <span className="flex items-center gap-2">
                <Lock className="w-3.5 h-3.5 text-emerald-400" />
                <span>TLS 1.3 Strict Encrypted • PCI DSS Level-1 Vault</span>
              </span>
              <span className="text-orange-400 font-semibold flex items-center gap-1">
                <Sparkles className="w-3 h-3" /> REST API v1.4
              </span>
            </div>

          </div>

          {/* RIGHT: Live Simulated Response & Telemetry (5 cols) */}
          <div className="lg:col-span-5 bg-slate-900/90 rounded-3xl border border-slate-800 p-5 sm:p-6 flex flex-col justify-between shadow-2xl">
            
            <div className="space-y-4">
              
              {/* Header Status & Tab Switcher */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-[#FF5500]" />
                  <span className="text-xs font-bold uppercase tracking-wider text-white">
                    Live Response
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-2.5 py-0.5 rounded-lg flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    HTTP 200 OK
                  </span>
                  <button
                    onClick={handleCopyResponse}
                    title="Copy response JSON"
                    className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
                  >
                    {copiedResponse ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              {/* Execution Telemetry Cards */}
              <div className="grid grid-cols-3 gap-2.5">
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-0.5">
                  <span className="text-[10px] text-slate-400 font-semibold block uppercase">Auth Latency</span>
                  <span className="text-xs sm:text-sm font-bold text-emerald-400 flex items-center gap-1">
                    <Zap className="w-3 h-3" /> 68ms
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-0.5">
                  <span className="text-[10px] text-slate-400 font-semibold block uppercase">3DS 2.2 Auth</span>
                  <span className="text-xs sm:text-sm font-bold text-cyan-400 flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3" /> Frictionless
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-0.5">
                  <span className="text-[10px] text-slate-400 font-semibold block uppercase">Sponsor MID</span>
                  <span className="text-xs sm:text-sm font-bold text-white flex items-center gap-1 truncate">
                    Tier-1 INR #01
                  </span>
                </div>
              </div>

              {/* JSON Response Area */}
              <div className="bg-slate-950 text-emerald-400 p-4 rounded-2xl border border-slate-800 text-xs font-mono overflow-x-auto min-h-[240px] max-h-[320px]">
                {executing ? (
                  <div className="flex flex-col items-center justify-center h-full min-h-[220px] text-slate-400 space-y-3">
                    <RefreshCw className="w-6 h-6 text-[#FF5500] animate-spin" />
                    <span className="text-xs font-semibold">Routing across Tier-1 Sponsor Bank Rails...</span>
                    <div className="w-36 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                      <div className="w-full h-full bg-[#FF5500] animate-pulse" />
                    </div>
                  </div>
                ) : (
                  <pre className="whitespace-pre text-[12px] leading-relaxed">
                    {JSON.stringify(simulatedResponse || sampleResponses[selectedEndpoint], null, 2)}
                  </pre>
                )}
              </div>

            </div>

            {/* Bottom API Access CTA */}
            <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-3">
              <span className="text-xs text-slate-400">
                Need production API credentials?
              </span>

              <button
                onClick={onOpenApplication}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#FF5500] hover:bg-[#E64A00] text-white text-xs font-bold tracking-wide transition-all shadow-md shadow-orange-500/20 cursor-pointer"
              >
                <span>Request Live API Keys</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
