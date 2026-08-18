import React, { useState } from 'react';
import { 
  Code2, Play, Copy, Check, Terminal, Cpu, 
  ShieldCheck, Zap, Lock, RefreshCw, Layers, ArrowRight 
} from 'lucide-react';

export default function ApiPlayground({ onOpenApplication }) {
  const [selectedLanguage, setSelectedLanguage] = useState('curl');
  const [selectedEndpoint, setSelectedEndpoint] = useState('authorize');
  const [copied, setCopied] = useState(false);
  const [executing, setExecuting] = useState(false);
  const [simulatedResponse, setSimulatedResponse] = useState(null);

  const endpoints = [
    {
      id: 'authorize',
      method: 'POST',
      path: '/v1/charges/direct-acquirer',
      title: 'Direct Acquirer Charge',
      desc: 'Tokenized frictionless auth with 3DS 2.2 biometric filter'
    },
    {
      id: 'failover',
      method: 'POST',
      path: '/v1/routing/cascading-salvage',
      title: 'Cascading Failover Route',
      desc: 'Smart retry across secondary sponsor bank MIDs on soft decline'
    },
    {
      id: 'rdr',
      method: 'POST',
      path: '/v1/webhooks/rdr-pre-dispute',
      title: 'RDR Pre-Dispute Intercept',
      desc: 'Ethoca & Verifi instant auto-refund to shield merchant ratio'
    }
  ];

  const codeSnippets = {
    authorize: {
      curl: `curl -X POST https://api.vserve24.com/v1/charges/direct-acquirer \\
  -H "Authorization: Bearer vs_live_9482bf109284" \\
  -H "Content-Type: application/json" \\
  -d '{
    "amount": 14950,
    "currency": "USD",
    "token": "tok_vault_encrypted_884920",
    "risk_vertical": "nutraceutical",
    "three_d_secure": "frictionless_2_2",
    "settlement_rail": "tier1_sponsor_mid_01"
  }'`,
      node: `import { Vserve24Client } from '@vserve24/sdk';

const vserve = new Vserve24Client('vs_live_9482bf109284');

const charge = await vserve.charges.createDirectAcquirer({
  amount: 14950, // $149.50
  currency: 'USD',
  token: 'tok_vault_encrypted_884920',
  riskVertical: 'nutraceutical',
  threeDSecure: 'frictionless_2_2',
  settlementRail: 'tier1_sponsor_mid_01'
});

console.log('Approved Auth Code:', charge.authorization_code);`,
      python: `import vserve24

vserve24.api_key = "vs_live_9482bf109284"

charge = vserve24.Charges.create_direct(
    amount=14950,
    currency="USD",
    token="tok_vault_encrypted_884920",
    risk_vertical="nutraceutical",
    three_d_secure="frictionless_2_2"
)

print(f"Status: {charge.status}, Net Settlement: {charge.net_payout}")`,
      php: `<?php
require_once('vendor/autoload.php');

$vserve = new \\Vserve24\\Client('vs_live_9482bf109284');

$charge = $vserve->charges->create([
    'amount' => 14950,
    'currency' => 'USD',
    'token' => 'tok_vault_encrypted_884920',
    'risk_vertical' => 'nutraceutical',
    'three_d_secure' => 'frictionless_2_2'
]);

echo "Charge Approved: " . $charge->id;`,
      go: `package main

import (
    "fmt"
    "github.com/vserve24/vserve24-go"
)

func main() {
    client := vserve24.NewClient("vs_live_9482bf109284")
    charge, err := client.Charges.CreateDirect(&vserve24.ChargeParams{
        Amount:       14950,
        Currency:     "USD",
        Token:        "tok_vault_encrypted_884920",
        RiskVertical: "nutraceutical",
    })
    fmt.Printf("Charge Approved: %s\\n", charge.ID)
}`
    },
    failover: {
      curl: `curl -X POST https://api.vserve24.com/v1/routing/cascading-salvage \\
  -H "Authorization: Bearer vs_live_9482bf109284" \\
  -d '{
    "original_transaction_id": "tx_declined_soft_99182",
    "primary_mid": "mid_us_tier1_01",
    "fallback_mids": ["mid_us_tier1_02", "mid_offshore_04"],
    "retry_policy": "intelligent_decline_salvage"
  }'`,
      node: `const failover = await vserve.routing.cascadingSalvage({
  originalTransactionId: 'tx_declined_soft_99182',
  fallbackMids: ['mid_us_tier1_02', 'mid_offshore_04'],
  autoSalvageSoftDeclines: true
});`,
      python: `salvaged = vserve24.Routing.cascade_failover(
    transaction_id="tx_declined_soft_99182",
    fallback_mids=["mid_us_tier1_02", "mid_offshore_04"]
)`,
      php: `$failover = $vserve->routing->cascade([
    'transaction_id' => 'tx_declined_soft_99182',
    'fallback_mids' => ['mid_us_tier1_02', 'mid_offshore_04']
]);`,
      go: `salvaged, err := client.Routing.CascadeFailover("tx_declined_soft_99182")`
    },
    rdr: {
      curl: `curl -X POST https://api.vserve24.com/v1/webhooks/rdr-pre-dispute \\
  -H "Authorization: Bearer vs_live_9482bf109284" \\
  -d '{
    "alert_source": "VERIFI_RDR_ETHOCA_NETWORK",
    "transaction_id": "tx_88392019",
    "deflection_rule": "auto_refund_prevent_chargeback",
    "ratio_impact": "0.00%"
  }'`,
      node: `// Handled automatically via Vserve24 RDR Webhook
vserve.webhooks.on('dispute.pre_alert', async (alert) => {
  console.log('Deflected before bank threshold:', alert.transactionId);
});`,
      python: `@app.route('/vserve-webhook', methods=['POST'])
def handle_rdr_alert():
    event = vserve24.Webhook.construct_event(request.data)
    # Intercept dispute and prevent ratio damage
    return {"status": "deflected_and_saved"}`,
      php: `$event = \\Vserve24\\Webhook::constructEvent($payload, $sigHeader);
if ($event->type === 'dispute.pre_alert') {
    // Zero chargeback penalty applied
}`,
      go: `event, err := webhook.ConstructEvent(payload, sig)`
    }
  };

  const sampleResponses = {
    authorize: {
      status: "approved",
      id: "ch_live_8941098230",
      amount: 14950,
      currency: "USD",
      risk_score: 12,
      risk_evaluation: "LOW_RISK_APPROVED",
      three_d_secure: {
        version: "2.2.0",
        frictionless: true,
        liability_shifted: true
      },
      acquirer_rail: "Direct Sponsor Bank MID #04",
      authorization_code: "AUTH_882941",
      latency_ms: 68,
      net_settlement: {
        gross: 149.50,
        fee: 4.51,
        net_merchant_payout: 144.99,
        batch_funding: "T+1 Daily"
      }
    },
    failover: {
      status: "salvaged_and_approved",
      original_code: "05_DO_NOT_HONOR",
      failover_route: "mid_us_tier1_02",
      salvage_latency_ms: 74,
      recovered_revenue: 149.50,
      authorization_code: "AUTH_SALVAGE_9941"
    },
    rdr: {
      status: "deflected",
      alert_network: "Verifi RDR & Ethoca Consumer Clarity",
      chargeback_prevented: true,
      merchant_ratio_impact: "0.00%",
      resolution: "Instant descriptor credit issued; 0 dispute penalty registered."
    }
  };

  const handleCopyCode = () => {
    const code = codeSnippets[selectedEndpoint][selectedLanguage];
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleExecuteRequest = () => {
    setExecuting(true);
    setSimulatedResponse(null);
    setTimeout(() => {
      setExecuting(false);
      setSimulatedResponse(sampleResponses[selectedEndpoint]);
    }, 650);
  };

  return (
    <section id="api" className="relative bg-[#FFFFFF] py-20 lg:py-28 border-b border-[#E7E3DA] overflow-hidden">
      
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
              <span>Developer REST API Sandbox</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#0B192C] tracking-tight leading-[1.08]">
              Engineered for seamless developer integration.
            </h2>

            <p className="text-[#475569] text-base lg:text-lg leading-relaxed">
              Accept tokenized charges, orchestrate automated multi-MID cascading, and handle pre-dispute webhooks with sub-80ms response times.
            </p>
          </div>

          <div className="flex items-center gap-3 self-start lg:self-auto text-xs text-[#707887]">
            <span className="flex items-center gap-1.5 text-[#10B981] font-bold bg-emerald-50 border border-emerald-200 px-3.5 py-2 rounded-xl">
              <Code2 className="w-4 h-4 text-[#10B981]" />
              SDKs in 5 Core Languages
            </span>
          </div>
        </div>

        {/* Endpoint Selector Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-6 scrollbar-none">
          {endpoints.map((ep) => {
            const isActive = selectedEndpoint === ep.id;
            return (
              <button
                key={ep.id}
                onClick={() => {
                  setSelectedEndpoint(ep.id);
                  setSimulatedResponse(null);
                }}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-2.5 border cursor-pointer ${
                  isActive
                    ? 'bg-[#0B192C] text-white border-[#0B192C] shadow-md'
                    : 'bg-[#FCFBF8] text-[#475569] border-[#E7E3DA] hover:border-slate-400'
                }`}
              >
                <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                  isActive ? 'bg-[#FF5500] text-white' : 'bg-orange-50 text-[#FF5500]'
                }`}>
                  {ep.method}
                </span>
                <span>{ep.title}</span>
              </button>
            );
          })}
        </div>

        {/* Two-Column Code & Live Output Terminal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* LEFT: Code Request Editor (7 cols) */}
          <div className="lg:col-span-7 bg-[#0B192C] rounded-3xl border border-slate-800 flex flex-col justify-between overflow-hidden shadow-xl">
            
            {/* Top Language Bar & Action Controls */}
            <div className="px-5 py-3.5 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between gap-4">
              
              {/* Language Tabs */}
              <div className="flex items-center gap-1.5 overflow-x-auto">
                {['curl', 'node', 'python', 'php', 'go'].map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setSelectedLanguage(lang)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer ${
                      selectedLanguage === lang
                        ? 'bg-[#FF5500] text-white shadow-xs'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {lang === 'curl' ? 'cURL' : lang}
                  </button>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopyCode}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition-colors cursor-pointer"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>

                <button
                  onClick={handleExecuteRequest}
                  disabled={executing}
                  className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-[#FF5500] hover:bg-[#E64A00] text-white text-xs font-bold transition-all shadow-md shadow-orange-500/20 cursor-pointer disabled:opacity-75"
                >
                  <Play className={`w-3.5 h-3.5 ${executing ? 'animate-spin' : ''}`} />
                  <span>{executing ? 'Simulating...' : 'Run Test Request'}</span>
                </button>
              </div>

            </div>

            {/* Code Block Container */}
            <div className="p-5 sm:p-6 flex-1 overflow-x-auto text-slate-200 text-xs sm:text-[13px] leading-relaxed font-mono">
              <pre className="whitespace-pre">
                {codeSnippets[selectedEndpoint][selectedLanguage]}
              </pre>
            </div>

            {/* Bottom Endpoint Info Bar */}
            <div className="px-5 py-3 bg-slate-950/60 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <span className="flex items-center gap-2">
                <Lock className="w-3.5 h-3.5 text-[#10B981]" />
                <span>TLS 1.3 Encryption • PCI DSS Level 1 Certified</span>
              </span>
              <span className="text-[#FF5500] font-semibold">Sandbox Active</span>
            </div>

          </div>

          {/* RIGHT: Live Simulated Response & Telemetry (5 cols) */}
          <div className="lg:col-span-5 bg-[#FCFBF8] rounded-3xl border border-[#E7E3DA] p-5 sm:p-6 flex flex-col justify-between shadow-xs">
            
            <div className="space-y-4">
              
              {/* Header Status */}
              <div className="flex items-center justify-between pb-3 border-b border-[#E7E3DA]">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-[#FF5500]" />
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0B192C]">
                    Simulated Response Payload
                  </span>
                </div>

                <span className="text-[11px] font-bold text-[#10B981] bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-md">
                  HTTP 200 OK
                </span>
              </div>

              {/* Execution Latency Telemetry */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 rounded-xl bg-white border border-[#E7E3DA] space-y-0.5">
                  <span className="text-[10.5px] text-[#707887] font-semibold block">Decision Latency</span>
                  <span className="text-base font-bold text-[#10B981] flex items-center gap-1">
                    <Zap className="w-3.5 h-3.5" /> 68ms (Sub-80ms)
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-white border border-[#E7E3DA] space-y-0.5">
                  <span className="text-[10.5px] text-[#707887] font-semibold block">Auth Status</span>
                  <span className="text-base font-bold text-[#0B192C]">
                    Approved & Settled
                  </span>
                </div>
              </div>

              {/* JSON Response Area */}
              <div className="bg-[#0B192C] text-emerald-400 p-4 rounded-2xl border border-slate-800 text-xs font-mono overflow-x-auto min-h-[220px]">
                {executing ? (
                  <div className="flex flex-col items-center justify-center h-full min-h-[200px] text-slate-400 space-y-2">
                    <RefreshCw className="w-5 h-5 text-[#FF5500] animate-spin" />
                    <span>Evaluating Risk & Ingesting via Sponsor Bank...</span>
                  </div>
                ) : (
                  <pre className="whitespace-pre text-[12px] leading-relaxed">
                    {JSON.stringify(simulatedResponse || sampleResponses[selectedEndpoint], null, 2)}
                  </pre>
                )}
              </div>

            </div>

            {/* Bottom API Access CTA */}
            <div className="pt-4 border-t border-[#E7E3DA] flex items-center justify-between gap-3">
              <span className="text-xs text-[#707887]">
                Ready for production credentials?
              </span>

              <button
                onClick={onOpenApplication}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#0B192C] hover:bg-[#1A283E] text-white text-xs font-bold tracking-wide transition-all shadow-xs cursor-pointer"
              >
                <span>Request API Keys</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
