import React, { useState } from 'react';
import { 
  X, Activity, ArrowUpRight, TrendingUp, ShieldCheck, 
  Cpu, Zap, HardDrive, RefreshCw, Lock, CheckCircle2,
  DollarSign, CreditCard, Layers, Clock, AlertTriangle
} from 'lucide-react';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, 
  Tooltip, ResponsiveContainer, BarChart, Bar 
} from 'recharts';

export default function MerchantPortalModal({ isOpen, onClose, onOpenApplication }) {
  const [activeTab, setActiveTab] = useState('overview');

  if (!isOpen) return null;

  const chartData = [
    { time: '00:00', volume: 14200, authRate: 92.4, disputes: 0 },
    { time: '04:00', volume: 22800, authRate: 93.1, disputes: 1 },
    { time: '08:00', volume: 68400, authRate: 94.8, disputes: 0 },
    { time: '12:00', volume: 94200, authRate: 95.2, disputes: 2 },
    { time: '16:00', volume: 128900, authRate: 93.9, disputes: 1 },
    { time: '20:00', volume: 81400, authRate: 94.1, disputes: 0 },
    { time: '24:00', volume: 49100, authRate: 93.5, disputes: 0 },
  ];

  const midRails = [
    { name: 'US Tier-1 Direct Sponsor MID #01', cap: '$1,500,000 / mo', utilized: '68%', status: 'Active (T+1 Daily)', health: 'Optimal' },
    { name: 'US Domestic Secondary MID #02', cap: '$850,000 / mo', utilized: '44%', status: 'Active (Cascading)', health: 'Optimal' },
    { name: 'EU / UK Cross-Border MID #03', cap: '€600,000 / mo', utilized: '52%', status: 'Active (SEPA / 3DS 2.2)', health: 'Optimal' },
  ];

  const liveTransactions = [
    { id: 'tx_884910', time: 'Just now', amount: '$189.50', card: 'Visa •••• 4012', vertical: 'Nutraceuticals', risk: 8, status: 'Approved (Sub-80ms)' },
    { id: 'tx_884909', time: '12s ago', amount: '$340.00', card: 'Mastercard •••• 9241', vertical: 'SaaS Continuity', risk: 14, status: 'Approved (Tier-1 Rail)' },
    { id: 'tx_884908', time: '28s ago', amount: '$75.00', card: 'AMEX •••• 1004', vertical: 'CBD Wellness', risk: 22, status: 'Cascaded & Approved' },
    { id: 'tx_884907', time: '45s ago', amount: '$520.00', card: 'Visa •••• 8823', vertical: 'High-Ticket', risk: 11, status: '3DS 2.2 Frictionless' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/60 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto">
      <div 
        className="bg-[#0B192C] text-white border border-slate-800 rounded-3xl max-w-5xl w-full p-4 sm:p-6 md:p-8 relative shadow-2xl my-4 sm:my-6 flex flex-col max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
          aria-label="Close portal modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Portal Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[11px] font-bold text-emerald-400 uppercase tracking-widest mb-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>VSERVE24 MERCHANT GATEWAY CONSOLE (LIVE DEMO)</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Multi-MID Gateway Command Center
            </h3>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => { onClose(); onOpenApplication?.(); }}
              className="px-4 py-2 rounded-xl bg-[#FF5500] hover:bg-[#E64A00] text-white text-xs font-bold transition-all shadow-md shadow-orange-500/20 cursor-pointer"
            >
              Get Your Live Merchant ID →
            </button>
          </div>
        </div>

        {/* Live Metrics Quick Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 my-6">
          <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-1">
            <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Today's Volume</span>
            <div className="text-2xl font-bold text-white">$459,000.00</div>
            <span className="text-xs text-emerald-400 flex items-center gap-1 font-semibold">
              <TrendingUp className="w-3 h-3" /> +14.2% vs yesterday
            </span>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-1">
            <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Global Authorization Rate</span>
            <div className="text-2xl font-bold text-emerald-400">94.8%</div>
            <span className="text-xs text-slate-400">+12% over aggregator baseline</span>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-1">
            <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Chargeback Health</span>
            <div className="text-2xl font-bold text-[#FF5500]">0.32%</div>
            <span className="text-xs text-emerald-400">Safely below 0.90% limit (RDR Active)</span>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-1">
            <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Next Settlement Batch</span>
            <div className="text-2xl font-bold text-white">T+1 Daily</div>
            <span className="text-xs text-emerald-400">Direct batch to Merchant Bank</span>
          </div>
        </div>

        {/* Chart View */}
        <div className="p-5 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-4 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Activity className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-bold text-white">
                Live Processing Volume & Authorization Stability (24h)
              </span>
            </div>
            <span className="text-xs text-slate-400">Latency: 68ms avg</span>
          </div>

          <div className="h-48 w-full pt-2">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="volGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#FF5500" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="#FF5500" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                <XAxis dataKey="time" stroke="#64748b" fontSize={11} />
                <YAxis stroke="#64748b" fontSize={11} />
                <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '12px', color: '#fff', fontSize: '12px' }} />
                <Area type="monotone" dataKey="volume" stroke="#FF5500" strokeWidth={2.5} fillOpacity={1} fill="url(#volGrad)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Two-Column: Left MID Rails + Right Live Transactions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Left: Active Multi-MID Sponsor Rails */}
          <div className="p-5 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-3.5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Connected Acquirer Sponsor MIDs
              </span>
              <span className="text-[11px] text-emerald-400 font-bold">3 Rails Online</span>
            </div>

            <div className="space-y-2.5">
              {midRails.map((rail, i) => (
                <div key={i} className="p-3 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white">{rail.name}</span>
                    <span className="text-[11px] text-emerald-400 font-semibold">{rail.health}</span>
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-slate-400">
                    <span>Cap: {rail.cap} ({rail.utilized} utilized)</span>
                    <span className="text-slate-500">{rail.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Live Transactions Stream */}
          <div className="p-5 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-3.5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Live Transaction Stream (Sub-80ms AI Risk Scoring)
              </span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            </div>

            <div className="space-y-2">
              {liveTransactions.map((tx, i) => (
                <div key={i} className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800 flex items-center justify-between text-xs">
                  <div>
                    <div className="font-bold text-white flex items-center gap-2">
                      <span>{tx.amount}</span>
                      <span className="text-slate-400 font-normal">{tx.card}</span>
                    </div>
                    <span className="text-[10px] text-slate-500">{tx.vertical} • {tx.time}</span>
                  </div>

                  <span className="text-[10.5px] font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-md">
                    {tx.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
