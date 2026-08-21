import React, { useState } from 'react';
import { 
  X, Activity, ArrowUpRight, TrendingUp, ShieldCheck, 
  Cpu, Zap, HardDrive, RefreshCw, Lock, CheckCircle2,
  DollarSign, Building2, Layers, Clock, AlertTriangle,
  ArrowRight, Key, Webhook, Link as LinkIcon, Send,
  Download, Filter, Search, Copy, Check, Eye, EyeOff,
  Sliders, ShieldAlert, Sparkles, Server, FileText, QrCode,
  Smartphone, Share2, HelpCircle, ChevronRight
} from 'lucide-react';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, 
  Tooltip, ResponsiveContainer, BarChart, Bar 
} from 'recharts';

export default function MerchantPortalModal({ isOpen, onClose, onOpenApplication }) {
  const [activeTab, setActiveTab] = useState('transactions');
  const [selectedTx, setSelectedTx] = useState(null);
  const [copiedKey, setCopiedKey] = useState(false);
  const [showLiveKey, setShowLiveKey] = useState(false);
  const [simulatingCascade, setSimulatingCascade] = useState(false);
  const [cascadeSuccess, setCascadeSuccess] = useState(false);
  
  // Payment link generator state
  const [linkAmount, setLinkAmount] = useState('25000');
  const [linkCustomer, setLinkCustomer] = useState('Rahul Sharma');
  const [linkVertical, setLinkVertical] = useState('Online Casino Deposit');
  const [generatedLink, setGeneratedLink] = useState(null);
  const [copiedLink, setCopiedLink] = useState(false);

  // Filter state for transactions
  const [txFilter, setTxFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  if (!isOpen) return null;

  const chartData = [
    { time: '00:00', volume: 142000, authRate: 92.4, transactions: 142 },
    { time: '04:00', volume: 228000, authRate: 93.1, transactions: 210 },
    { time: '08:00', volume: 684000, authRate: 94.8, transactions: 580 },
    { time: '12:00', volume: 942000, authRate: 95.2, transactions: 890 },
    { time: '16:00', volume: 1289000, authRate: 93.9, transactions: 1240 },
    { time: '20:00', volume: 814000, authRate: 94.1, transactions: 780 },
    { time: '24:00', volume: 491000, authRate: 93.5, transactions: 430 },
  ];

  const midRails = [
    { 
      id: 'MID-IN-01', 
      name: 'India Tier-1 Direct Sponsor MID #01', 
      bank: 'HDFC Acquirer Rail',
      cap: '₹12.50 Cr / mo', 
      utilized: 68, 
      status: 'Active (T+1 Daily)', 
      health: 'Optimal', 
      authRate: '95.4%',
      currencies: 'INR'
    },
    { 
      id: 'MID-IN-02', 
      name: 'Domestic High-Velocity Forex/Crypto MID #02', 
      bank: 'ICICI Sponsor Clearing',
      cap: '₹8.50 Cr / mo', 
      utilized: 42, 
      status: 'Active (Auto-Cascade)', 
      health: 'Optimal', 
      authRate: '94.8%',
      currencies: 'INR'
    },
    { 
      id: 'MID-EU-03', 
      name: 'EU / UK Cross-Border SEPA & Swift Rail #03', 
      bank: 'Barclays / SEPA Direct',
      cap: '€750,000 / mo', 
      utilized: 54, 
      status: 'Active (3DS 2.2)', 
      health: 'Optimal', 
      authRate: '93.2%',
      currencies: 'EUR, USD, GBP'
    },
  ];

  const transactionsData = [
    { 
      id: 'tx_884910', 
      time: 'Just now (15:42:08)', 
      amount: '₹25,000.00', 
      rawAmount: 25000,
      customer: 'Arjun Verma',
      email: 'arjun.v@gmail.com',
      card: 'UPI • arjun@okaxis', 
      vertical: 'Online Casino & iGaming', 
      risk: 8, 
      status: 'Approved', 
      statusType: 'success',
      authLatency: '58ms',
      midRail: 'MID-IN-01 (Direct Domestic)',
      arn: 'ARN-982419082341',
      authCode: 'AUTH_928174',
      fee: '₹465.00'
    },
    { 
      id: 'tx_884909', 
      time: '18s ago (15:41:50)', 
      amount: '₹1,50,000.00', 
      rawAmount: 150000,
      customer: 'Vikramaditya Rao',
      email: 'vikram.rao@trader.io',
      card: 'NetBanking • HDFC Direct', 
      vertical: 'Forex & Trading', 
      risk: 14, 
      status: 'Approved (Cascaded)', 
      statusType: 'success',
      authLatency: '74ms',
      midRail: 'MID-IN-02 (High-Velocity)',
      arn: 'ARN-198237401923',
      authCode: 'AUTH_449012',
      fee: '₹2,790.00'
    },
    { 
      id: 'tx_884908', 
      time: '42s ago (15:41:26)', 
      amount: '₹8,500.00', 
      rawAmount: 8500,
      customer: 'Pooja Kulkarni',
      email: 'pooja.k@outlook.com',
      card: 'Dynamic QR • Scan & Pay', 
      vertical: 'Nutraceuticals', 
      risk: 22, 
      status: 'Approved', 
      statusType: 'success',
      authLatency: '61ms',
      midRail: 'MID-IN-01 (Direct Domestic)',
      arn: 'ARN-882374910283',
      authCode: 'AUTH_331908',
      fee: '₹158.00'
    },
    { 
      id: 'tx_884907', 
      time: '1m ago (15:41:02)', 
      amount: '₹75,000.00', 
      rawAmount: 75000,
      customer: 'Rohan Deshmukh',
      email: 'rohan.d@crypto.in',
      card: 'Instant UPI • rohan@ybl', 
      vertical: 'Crypto Platform', 
      risk: 11, 
      status: 'Instant Approved', 
      statusType: 'success',
      authLatency: '67ms',
      midRail: 'MID-IN-02 (High-Velocity)',
      arn: 'ARN-773910284729',
      authCode: 'AUTH_882319',
      fee: '₹1,395.00'
    },
    { 
      id: 'tx_884906', 
      time: '3m ago (15:39:15)', 
      amount: '₹4,500.00', 
      rawAmount: 4500,
      customer: 'Fraud Bot Pattern',
      email: 'suspicious_proxy@temp.org',
      card: 'Flagged Proxy Request', 
      vertical: 'Online Casino & iGaming', 
      risk: 94, 
      status: 'Blocked by AI Shield', 
      statusType: 'blocked',
      authLatency: '32ms',
      midRail: 'AI Pre-Auth Firewall',
      arn: 'N/A (Filtered)',
      authCode: 'REJECT_SCORE_94',
      fee: '₹0.00'
    },
    { 
      id: 'tx_884905', 
      time: '6m ago (15:36:20)', 
      amount: '₹32,000.00', 
      rawAmount: 32000,
      customer: 'Sameer Joshi',
      email: 'sameer.j@gmail.com',
      card: 'Instant UPI • sameer@upi', 
      vertical: 'Forex & Trading', 
      risk: 16, 
      status: 'Auto-Deflected (RDR)', 
      statusType: 'deflected',
      authLatency: '45ms',
      midRail: 'Ethoca RDR Direct API',
      arn: 'RDR-DEFLECT-88192',
      authCode: 'RDR_ZERO_FEE',
      fee: '₹0.00'
    }
  ];

  const disputesList = [
    {
      id: 'DISP-89241',
      cardholder: 'Customer inquiry via Bank Stream',
      amount: '₹32,000.00',
      reason: 'Duplicate intent check (Casino deposit)',
      date: 'Today, 14:10 IST',
      rail: 'Direct Pre-Dispute Rail',
      status: 'Auto-Deflected & Refunded',
      statusNote: '0 Chargeback Fee • 0% Dispute Ratio Impact',
      ratioHealth: 'Protected'
    },
    {
      id: 'DISP-89240',
      cardholder: 'Bank Dispute Intercept',
      amount: '₹18,500.00',
      reason: 'Subscription renewal inquiry',
      date: 'Yesterday, 18:30 IST',
      rail: 'Rapid Dispute Resolution (RDR)',
      status: 'Pre-Dispute Resolved',
      statusNote: 'Auto-settled in 8 seconds before bank filing',
      ratioHealth: 'Protected'
    }
  ];

  const settlementsList = [
    {
      id: 'SETTLE-2026-0818',
      date: 'Today (T+1 Daily Batch)',
      grossVolume: '₹3,45,80,000.00',
      fees: '₹6,43,188.00',
      netPayout: '₹3,39,36,812.00',
      bankAccount: 'HDFC Corporate Bank •••• 9012',
      utr: 'UTR892019481028',
      status: 'Processing (Expected 18:00 IST)'
    },
    {
      id: 'SETTLE-2026-0817',
      date: 'Yesterday (17 Aug 2026)',
      grossVolume: '₹3,02,40,000.00',
      fees: '₹5,62,464.00',
      netPayout: '₹2,96,77,536.00',
      bankAccount: 'HDFC Corporate Bank •••• 9012',
      utr: 'UTR772819028374',
      status: 'Settled & Deposited'
    }
  ];

  const filteredTxs = transactionsData.filter(tx => {
    if (txFilter === 'approved' && !tx.status.includes('Approved') && !tx.status.includes('3DS')) return false;
    if (txFilter === 'blocked' && !tx.status.includes('Blocked')) return false;
    if (txFilter === 'deflected' && !tx.status.includes('Deflected')) return false;
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      return tx.id.toLowerCase().includes(q) || tx.customer.toLowerCase().includes(q) || tx.vertical.toLowerCase().includes(q);
    }
    return true;
  });

  const handleGenerateLink = (e) => {
    e.preventDefault();
    const linkId = 'lnk_' + Math.random().toString(36).substring(2, 9);
    setGeneratedLink({
      id: linkId,
      url: `https://pay.vserve24.com/checkout/${linkId}?amt=${linkAmount}&curr=INR`,
      amount: linkAmount,
      customer: linkCustomer,
      vertical: linkVertical
    });
  };

  const handleSimulateCascade = () => {
    setSimulatingCascade(true);
    setCascadeSuccess(false);
    setTimeout(() => {
      setSimulatingCascade(false);
      setCascadeSuccess(true);
    }, 1400);
  };

  return (
    <div 
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/80 backdrop-blur-md overflow-hidden animate-in fade-in duration-200"
    >
      <div 
        className="bg-[#0B192C] text-white border border-slate-800 rounded-2xl sm:rounded-3xl max-w-5xl xl:max-w-6xl w-full h-[94vh] max-h-[840px] flex flex-col relative shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* ── 1. FIXED TOP PORTAL HEADER (ALWAYS VISIBLE) ── */}
        <div className="flex items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-4 border-b border-slate-800 bg-[#0B192C] shrink-0 z-20">
          <div className="min-w-0">
            <div className="flex items-center gap-2 mb-0.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
              <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider bg-emerald-500/10 border border-emerald-500/30 px-2 py-0.5 rounded-full truncate">
                LIVE PRODUCTION GATEWAY CONSOLE
              </span>
              <span className="text-xs text-slate-500 hidden md:inline">•</span>
              <span className="text-xs text-slate-400 hidden md:inline truncate">MID: <strong className="text-white font-semibold">VS-GAMING-0941</strong></span>
            </div>
            <h2 className="text-lg sm:text-2xl font-bold tracking-tight text-white truncate">
              Vserve24 Gateway Command Center
            </h2>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => { onClose(); onOpenApplication?.(); }}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#FF5500] hover:bg-[#E64A00] text-white text-xs font-bold transition-all shadow-md shadow-orange-500/20 cursor-pointer"
            >
              <span>Get Live MIDs</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <button
              type="button"
              onClick={onClose}
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white flex items-center justify-center transition-colors cursor-pointer shadow-md"
              aria-label="Close portal modal"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={2.5} />
            </button>
          </div>
        </div>

        {/* ── 2. FIXED NAVIGATION TABS STRIP (SCROLLABLE & NO CLIPPING) ── */}
        <div className="flex items-center gap-1.5 overflow-x-auto px-4 py-2 sm:px-6 sm:py-2.5 border-b border-slate-800/80 bg-slate-950/40 shrink-0 scrollbar-none">
          <button
            onClick={() => setActiveTab('transactions')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'transactions'
                ? 'bg-[#FF5500] text-white shadow-md shadow-orange-500/20'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <Activity className="w-3.5 h-3.5" />
            <span>1. Live Transactions</span>
          </button>

          <button
            onClick={() => setActiveTab('routing')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'routing'
                ? 'bg-[#FF5500] text-white shadow-md shadow-orange-500/20'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <Server className="w-3.5 h-3.5" />
            <span>2. MIDs Routing</span>
          </button>

          <button
            onClick={() => setActiveTab('disputes')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'disputes'
                ? 'bg-[#FF5500] text-white shadow-md shadow-orange-500/20'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>3. Dispute &amp; RDR</span>
          </button>

          <button
            onClick={() => setActiveTab('settlements')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'settlements'
                ? 'bg-[#FF5500] text-white shadow-md shadow-orange-500/20'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <DollarSign className="w-3.5 h-3.5" />
            <span>4. Settlements</span>
          </button>

          <button
            onClick={() => setActiveTab('payment-links')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'payment-links'
                ? 'bg-[#FF5500] text-white shadow-md shadow-orange-500/20'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <LinkIcon className="w-3.5 h-3.5" />
            <span>5. Payment Links</span>
          </button>

          <button
            onClick={() => setActiveTab('api-keys')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'api-keys'
                ? 'bg-[#FF5500] text-white shadow-md shadow-orange-500/20'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <Key className="w-3.5 h-3.5" />
            <span>6. API &amp; Webhooks</span>
          </button>
        </div>

        {/* ── 3. SCROLLABLE MIDDLE BODY CONTENT ── */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
          
          {/* Top Metric Strip */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3">
            <div className="p-3 sm:p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800">
              <span className="text-[10.5px] text-slate-400 uppercase tracking-wider font-semibold">Today's Volume</span>
              <div className="text-lg sm:text-xl font-bold text-white mt-0.5">₹3,45,80,000.00</div>
              <span className="text-[10.5px] text-emerald-400 flex items-center gap-1 mt-0.5">
                <TrendingUp className="w-3 h-3" /> +14.2% vs yesterday
              </span>
            </div>

            <div className="p-3 sm:p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800">
              <span className="text-[10.5px] text-slate-400 uppercase tracking-wider font-semibold">Auth Rate (Tier-1)</span>
              <div className="text-lg sm:text-xl font-bold text-emerald-400 mt-0.5">94.8%</div>
              <span className="text-[10.5px] text-slate-400 mt-0.5 block">Real-time instant authorization</span>
            </div>

            <div className="p-3 sm:p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800">
              <span className="text-[10.5px] text-slate-400 uppercase tracking-wider font-semibold">Dispute Ratio (VFMP)</span>
              <div className="text-lg sm:text-xl font-bold text-[#10B981] mt-0.5">0.24%</div>
              <span className="text-[10.5px] text-emerald-400 mt-0.5 block">✓ Well below 0.90% limit</span>
            </div>

            <div className="p-3 sm:p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800">
              <span className="text-[10.5px] text-slate-400 uppercase tracking-wider font-semibold">Active Acquirer MIDs</span>
              <div className="text-lg sm:text-xl font-bold text-[#FF5500] mt-0.5">3 Rails Online</div>
              <span className="text-[10.5px] text-slate-400 mt-0.5 block">Cascading fallback active</span>
            </div>
          </div>

          {/* ── TAB SCREEN 1: LIVE TRANSACTIONS EXPLORER ── */}
          {activeTab === 'transactions' && (
            <div className="space-y-3.5">
              
              {/* Filter and Search Bar */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5">
                <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
                  <button
                    onClick={() => setTxFilter('all')}
                    className={`px-2.5 py-1 rounded-lg text-xs font-bold cursor-pointer whitespace-nowrap ${
                      txFilter === 'all' ? 'bg-[#FF5500] text-white' : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-white'
                    }`}
                  >
                    All ({transactionsData.length})
                  </button>
                  <button
                    onClick={() => setTxFilter('approved')}
                    className={`px-2.5 py-1 rounded-lg text-xs font-bold cursor-pointer whitespace-nowrap ${
                      txFilter === 'approved' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40' : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-white'
                    }`}
                  >
                    Approved
                  </button>
                  <button
                    onClick={() => setTxFilter('blocked')}
                    className={`px-2.5 py-1 rounded-lg text-xs font-bold cursor-pointer whitespace-nowrap ${
                      txFilter === 'blocked' ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40' : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-white'
                    }`}
                  >
                    Blocked Fraud
                  </button>
                  <button
                    onClick={() => setTxFilter('deflected')}
                    className={`px-2.5 py-1 rounded-lg text-xs font-bold cursor-pointer whitespace-nowrap ${
                      txFilter === 'deflected' ? 'bg-orange-500/20 text-orange-300 border border-orange-500/40' : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-white'
                    }`}
                  >
                    RDR Deflected
                  </button>
                </div>

                <div className="relative min-w-[200px]">
                  <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search TX ID, Customer..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-8 pr-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#FF5500]"
                  />
                </div>
              </div>

              {/* Transactions Data Table */}
              <div className="bg-slate-900/90 border border-slate-800 rounded-2xl overflow-x-auto shadow-sm">
                <table className="w-full text-left text-xs min-w-[650px]">
                  <thead>
                    <tr className="border-b border-slate-800 text-slate-400 uppercase text-[10px] tracking-wider bg-slate-950/60">
                      <th className="py-2.5 px-3 sm:px-4">Transaction ID</th>
                      <th className="py-2.5 px-3 sm:px-4">Customer &amp; Vertical</th>
                      <th className="py-2.5 px-3 sm:px-4">Payment Method</th>
                      <th className="py-2.5 px-3 sm:px-4">Amount (INR)</th>
                      <th className="py-2.5 px-3 sm:px-4">Status &amp; Latency</th>
                      <th className="py-2.5 px-3 sm:px-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60">
                    {filteredTxs.map((tx) => (
                      <tr 
                        key={tx.id} 
                        onClick={() => setSelectedTx(tx)}
                        className="hover:bg-slate-800/50 cursor-pointer transition-colors"
                      >
                        <td className="py-2.5 px-3 sm:px-4">
                          <div className="font-bold text-white">{tx.id}</div>
                          <div className="text-[10px] text-slate-500">{tx.time}</div>
                        </td>
                        <td className="py-2.5 px-3 sm:px-4">
                          <div className="font-semibold text-slate-200">{tx.customer}</div>
                          <div className="text-[10px] text-slate-400">{tx.vertical}</div>
                        </td>
                        <td className="py-2.5 px-3 sm:px-4 text-slate-300">
                          <div>{tx.card}</div>
                          <div className="text-[10px] text-slate-500">{tx.midRail.split(' ')[0]}</div>
                        </td>
                        <td className="py-2.5 px-3 sm:px-4 font-bold text-white">
                          {tx.amount}
                        </td>
                        <td className="py-2.5 px-3 sm:px-4">
                          <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold ${
                            tx.statusType === 'success' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30' :
                            tx.statusType === 'blocked' ? 'bg-rose-500/10 text-rose-400 border border-rose-500/30' :
                            'bg-orange-500/10 text-orange-400 border border-orange-500/30'
                          }`}>
                            <span className="w-1.5 h-1.5 rounded-full bg-current" />
                            {tx.status} • {tx.authLatency}
                          </span>
                        </td>
                        <td className="py-2.5 px-3 sm:px-4 text-right">
                          <button 
                            type="button"
                            className="px-2 py-0.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-[10.5px] font-semibold transition-colors"
                          >
                            Inspect →
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Selected Transaction Inspector Drawer */}
              {selectedTx && (
                <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-700 space-y-2.5 animate-in fade-in duration-150">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-3.5 h-3.5 text-[#FF5500]" />
                      <span className="text-xs font-bold text-white uppercase tracking-wider">
                        Telemetry Dossier: {selectedTx.id}
                      </span>
                    </div>
                    <button 
                      onClick={() => setSelectedTx(null)}
                      className="text-xs text-slate-400 hover:text-white cursor-pointer"
                    >
                      Close Dossier ✕
                    </button>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                    <div className="p-2 rounded-xl bg-slate-950/80 border border-slate-800">
                      <span className="text-[10px] text-slate-500">Auth Code</span>
                      <div className="font-bold text-white mt-0.5">{selectedTx.authCode}</div>
                    </div>
                    <div className="p-2 rounded-xl bg-slate-950/80 border border-slate-800">
                      <span className="text-[10px] text-slate-500">Acquirer ARN</span>
                      <div className="font-bold text-emerald-400 mt-0.5 truncate">{selectedTx.arn}</div>
                    </div>
                    <div className="p-2 rounded-xl bg-slate-950/80 border border-slate-800">
                      <span className="text-[10px] text-slate-500">AI Risk Score</span>
                      <div className="font-bold text-white mt-0.5">{selectedTx.risk} / 100</div>
                    </div>
                    <div className="p-2 rounded-xl bg-slate-950/80 border border-slate-800">
                      <span className="text-[10px] text-slate-500">Processing Fee</span>
                      <div className="font-bold text-slate-300 mt-0.5">{selectedTx.fee}</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-end gap-2 pt-1">
                    <button 
                      onClick={() => alert(`Issued refund for transaction ${selectedTx.id}`)}
                      className="px-2.5 py-1 rounded-lg bg-rose-500/20 hover:bg-rose-500/30 text-rose-300 border border-rose-500/40 text-xs font-semibold cursor-pointer"
                    >
                      Refund ({selectedTx.amount})
                    </button>
                    <button 
                      onClick={() => alert(`Webhook event resent for ${selectedTx.id}`)}
                      className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold cursor-pointer"
                    >
                      Resend Webhook
                    </button>
                  </div>
                </div>
              )}

            </div>
          )}

          {/* ── TAB SCREEN 2: MULTI-MID ROUTING & CASCADING FAILOVER ── */}
          {activeTab === 'routing' && (
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pb-2.5 border-b border-slate-800">
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-white">Smart Acquirer Load Balancing &amp; Cascading</h3>
                  <p className="text-xs text-slate-400">Routes charges to highest probability sponsor rails with zero aggregator freezes.</p>
                </div>
                <button 
                  onClick={handleSimulateCascade}
                  disabled={simulatingCascade}
                  className="px-3 py-1.5 rounded-xl bg-[#FF5500] hover:bg-[#E64A00] text-white text-xs font-bold transition-all shadow-md cursor-pointer disabled:opacity-50 self-start sm:self-auto"
                >
                  {simulatingCascade ? 'Simulating 62ms Cascade...' : '⚡ Test Live Cascade'}
                </button>
              </div>

              {cascadeSuccess && (
                <div className="p-3 rounded-xl bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 text-xs flex items-center justify-between animate-in fade-in duration-150">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span><strong>Simulation Passed:</strong> Soft Decline `05` on MID-01 auto-salvaged on MID-02 in 62ms! (₹45,000 retained)</span>
                  </div>
                  <button onClick={() => setCascadeSuccess(false)} className="text-slate-400 hover:text-white cursor-pointer ml-2">✕</button>
                </div>
              )}

              {/* MID Rails Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {midRails.map((rail) => (
                  <div key={rail.id} className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold text-[#FF5500] bg-orange-500/10 border border-orange-500/30 px-2 py-0.5 rounded">
                        {rail.id}
                      </span>
                      <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                        ● {rail.health}
                      </span>
                    </div>

                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-white">{rail.name}</h4>
                      <span className="text-[11px] text-slate-400">{rail.bank}</span>
                    </div>

                    <div className="space-y-1.5 pt-2 border-t border-slate-800 text-xs">
                      <div className="flex justify-between text-slate-400">
                        <span>Volume Cap:</span>
                        <span className="font-bold text-white">{rail.cap}</span>
                      </div>
                      <div className="flex justify-between text-slate-400">
                        <span>Auth Rate:</span>
                        <span className="font-bold text-emerald-400">{rail.authRate}</span>
                      </div>
                      
                      <div className="space-y-1 pt-1">
                        <div className="flex justify-between text-[10px] text-slate-500">
                          <span>Monthly Utilization</span>
                          <span>{rail.utilized}%</span>
                        </div>
                        <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-[#FF5500] to-emerald-400 rounded-full"
                            style={{ width: `${rail.utilized}%` }}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="pt-1 text-[10.5px] text-slate-400 flex items-center justify-between">
                      <span>Currencies: <strong>{rail.currencies}</strong></span>
                      <span className="text-emerald-400 font-semibold">{rail.status.split(' ')[0]}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ── TAB SCREEN 3: DISPUTES & CHARGEBACK SHIELD ── */}
          {activeTab === 'disputes' && (
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pb-2.5 border-b border-slate-800">
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-white">Direct Risk &amp; RDR Interception Hub</h3>
                  <p className="text-xs text-slate-400">Auto-resolves customer inquiries before bank escalation.</p>
                </div>
                <div className="px-2.5 py-1 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold self-start sm:self-auto">
                  ✓ Safe: 0.24% vs 0.90% Limit
                </div>
              </div>

              {/* Interception Activity List */}
              <div className="space-y-2.5">
                {disputesList.map((disp) => (
                  <div key={disp.id} className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="space-y-0.5">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold text-[#FF5500] bg-orange-500/10 border border-orange-500/30 px-2 py-0.5 rounded">
                          {disp.id}
                        </span>
                        <span className="text-xs font-bold text-white">{disp.cardholder}</span>
                      </div>
                      <p className="text-xs text-slate-400">Reason: {disp.reason} • Rail: {disp.rail}</p>
                      <div className="text-[11px] text-emerald-400 font-semibold">{disp.statusNote}</div>
                    </div>

                    <div className="sm:text-right shrink-0">
                      <div className="text-sm sm:text-base font-bold text-white">{disp.amount}</div>
                      <span className="inline-block mt-0.5 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-bold">
                        ✓ {disp.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ── TAB SCREEN 4: SETTLEMENTS & PAYOUTS LEDGER ── */}
          {activeTab === 'settlements' && (
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pb-2.5 border-b border-slate-800">
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-white">Daily Batch Net Settlements &amp; Bank Liquidity</h3>
                  <p className="text-xs text-slate-400">Automated T+1 daily batch funding direct to Indian corporate accounts.</p>
                </div>
                <button 
                  onClick={() => alert('Instant IMPS/NEFT payout triggered to registered corporate account')}
                  className="px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all shadow-md cursor-pointer self-start sm:self-auto"
                >
                  Initiate Instant Payout →
                </button>
              </div>

              {/* Settlements Table */}
              <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-x-auto shadow-sm">
                <table className="w-full text-left text-xs min-w-[650px]">
                  <thead>
                    <tr className="border-b border-slate-800 text-slate-400 uppercase text-[10px] tracking-wider bg-slate-950/60">
                      <th className="py-2.5 px-3 sm:px-4">Batch ID &amp; Date</th>
                      <th className="py-2.5 px-3 sm:px-4">Gross Processing</th>
                      <th className="py-2.5 px-3 sm:px-4">Fees</th>
                      <th className="py-2.5 px-3 sm:px-4">Net Payout (INR)</th>
                      <th className="py-2.5 px-3 sm:px-4">Bank &amp; UTR</th>
                      <th className="py-2.5 px-3 sm:px-4 text-right">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60">
                    {settlementsList.map((s) => (
                      <tr key={s.id} className="hover:bg-slate-800/40">
                        <td className="py-2.5 px-3 sm:px-4">
                          <div className="font-bold text-white">{s.id}</div>
                          <div className="text-[10px] text-slate-500">{s.date}</div>
                        </td>
                        <td className="py-2.5 px-3 sm:px-4 font-semibold text-slate-200">{s.grossVolume}</td>
                        <td className="py-2.5 px-3 sm:px-4 text-rose-400">-{s.fees}</td>
                        <td className="py-2.5 px-3 sm:px-4 font-bold text-emerald-400">{s.netPayout}</td>
                        <td className="py-2.5 px-3 sm:px-4 text-slate-300">
                          <div>{s.bankAccount}</div>
                          <div className="text-[10px] text-slate-500 font-semibold">{s.utr}</div>
                        </td>
                        <td className="py-2.5 px-3 sm:px-4 text-right">
                          <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold ${
                            s.status.includes('Settled') ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30' : 'bg-orange-500/10 text-orange-400 border border-orange-500/30'
                          }`}>
                            {s.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* ── TAB SCREEN 5: PAYMENT LINKS STUDIO ── */}
          {activeTab === 'payment-links' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start">
              
              {/* Form to create link (6 cols) */}
              <form onSubmit={handleGenerateLink} className="lg:col-span-6 p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-white">Generate Instant Payment Link (₹)</h3>
                  <p className="text-xs text-slate-400">Create hosted checkout links for VIP player deposits or high-ticket orders.</p>
                </div>

                <div className="space-y-2.5 text-xs">
                  <div>
                    <label className="text-slate-400 font-semibold block mb-1">Amount in Indian Rupees (₹)</label>
                    <input
                      type="number"
                      value={linkAmount}
                      onChange={(e) => setLinkAmount(e.target.value)}
                      required
                      placeholder="25000"
                      className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white font-bold focus:outline-none focus:border-[#FF5500]"
                    />
                  </div>

                  <div>
                    <label className="text-slate-400 font-semibold block mb-1">Customer / Player Name</label>
                    <input
                      type="text"
                      value={linkCustomer}
                      onChange={(e) => setLinkCustomer(e.target.value)}
                      required
                      placeholder="Rahul Sharma"
                      className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-[#FF5500]"
                    />
                  </div>

                  <div>
                    <label className="text-slate-400 font-semibold block mb-1">Vertical / Description</label>
                    <select
                      value={linkVertical}
                      onChange={(e) => setLinkVertical(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-[#FF5500] cursor-pointer"
                    >
                      <option>iGaming Deposit</option>
                      <option>Forex Margin Funding</option>
                      <option>Crypto Platform On-Ramp</option>
                      <option>High-Ticket B2B Invoice</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 rounded-xl bg-[#FF5500] hover:bg-[#E64A00] text-white font-bold text-xs transition-all shadow-md cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <LinkIcon className="w-3.5 h-3.5" />
                  <span>Create Active Payment Link</span>
                </button>
              </form>

              {/* Generated Link Preview Box (6 cols) */}
              <div className="lg:col-span-6 p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
                <h3 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                  <QrCode className="w-4 h-4 text-[#FF5500]" />
                  <span>Live Shareable Checkout Link</span>
                </h3>

                {generatedLink ? (
                  <div className="space-y-3 animate-in fade-in duration-150">
                    <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between text-xs gap-2">
                      <span className="font-mono text-emerald-400 truncate text-[11px]">{generatedLink.url}</span>
                      <button
                        onClick={() => {
                          navigator.clipboard.writeText(generatedLink.url);
                          setCopiedLink(true);
                          setTimeout(() => setCopiedLink(false), 2000);
                        }}
                        className="px-2 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold flex items-center gap-1 cursor-pointer shrink-0"
                      >
                        {copiedLink ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3 text-slate-300" />}
                        <span>{copiedLink ? 'Copied' : 'Copy'}</span>
                      </button>
                    </div>

                    <div className="p-3.5 rounded-xl bg-gradient-to-br from-slate-950 to-slate-900 border border-slate-800 space-y-1.5 text-xs">
                      <div className="flex justify-between">
                        <span className="text-slate-400">Total Due:</span>
                        <strong className="text-base text-white">₹{Number(generatedLink.amount).toLocaleString('en-IN')}.00</strong>
                      </div>
                      <div className="flex justify-between text-slate-400">
                        <span>Payee:</span>
                        <span className="text-white">{generatedLink.customer}</span>
                      </div>
                      <div className="flex justify-between text-slate-400">
                        <span>Reason:</span>
                        <span className="text-white">{generatedLink.vertical}</span>
                      </div>
                      <div className="flex justify-between text-slate-400">
                        <span>Methods:</span>
                        <span className="text-emerald-400">Visa, Mastercard, UPI, IMPS</span>
                      </div>
                    </div>

                    <button
                      onClick={() => alert(`Simulated payment gateway checkout for ${generatedLink.url}`)}
                      className="w-full py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <Smartphone className="w-3.5 h-3.5" />
                      <span>Simulate Mobile Checkout</span>
                    </button>
                  </div>
                ) : (
                  <div className="text-center py-8 text-slate-500 text-xs">
                    Fill in the details on the left and click "Create Active Payment Link" to generate a live hosted checkout.
                  </div>
                )}
              </div>

            </div>
          )}

          {/* ── TAB SCREEN 6: API KEYS & WEBHOOK TELEMETRY ── */}
          {activeTab === 'api-keys' && (
            <div className="space-y-4">
              <div className="pb-2.5 border-b border-slate-800">
                <h3 className="text-sm sm:text-base font-bold text-white">Production &amp; Sandbox API Credentials</h3>
                <p className="text-xs text-slate-400">Connect your server, mobile app, or cashier directly to Vserve24 rails.</p>
              </div>

              {/* Secret Key Box */}
              <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 space-y-2.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-white">Live Secret Key (Production)</span>
                  <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full font-bold">● Active</span>
                </div>
                
                <div className="flex items-center justify-between gap-2 p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs">
                  <span className="font-mono text-slate-300 truncate text-[11px]">
                    {showLiveKey ? 'vsk_live_99248102938471029384710928347102' : 'vsk_live_••••••••••••••••••••••••••••••••'}
                  </span>
                  <div className="flex items-center gap-1.5 shrink-0">
                    <button
                      onClick={() => setShowLiveKey(!showLiveKey)}
                      className="p-1 rounded-lg bg-slate-800 text-slate-400 hover:text-white cursor-pointer"
                      aria-label="Toggle secret key visibility"
                    >
                      {showLiveKey ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                    </button>
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText('vsk_live_99248102938471029384710928347102');
                        setCopiedKey(true);
                        setTimeout(() => setCopiedKey(false), 2000);
                      }}
                      className="px-2.5 py-1 rounded-lg bg-[#FF5500] hover:bg-[#E64A00] text-white font-bold flex items-center gap-1 cursor-pointer text-xs"
                    >
                      {copiedKey ? <Check className="w-3 h-3 text-white" /> : <Copy className="w-3 h-3" />}
                      <span>{copiedKey ? 'Copied' : 'Copy'}</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Webhook Endpoint Configuration */}
              <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 space-y-2.5 text-xs">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-white flex items-center gap-1.5">
                    <Webhook className="w-3.5 h-3.5 text-[#FF5500]" />
                    <span>Configured Webhook Endpoints</span>
                  </span>
                  <button 
                    onClick={() => alert('Webhook test event sent: 200 OK (38ms)')}
                    className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold cursor-pointer"
                  >
                    Send Test Ping
                  </button>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 space-y-1 font-mono text-[11px]">
                  <div className="flex flex-col sm:flex-row sm:justify-between text-slate-400 gap-1">
                    <span className="text-white font-bold truncate">https://api.gamingplatform.com/vserve/webhooks</span>
                    <span className="text-emerald-400 font-sans font-bold shrink-0">● Status: 200 OK (42ms)</span>
                  </div>
                  <div className="text-[10px] text-slate-500 font-sans">
                    Listening for: `charge.successful`, `dispute.deflected`, `payout.batch_settled`
                  </div>
                </div>
              </div>

            </div>
          )}

        </div>

        {/* ── 4. FIXED BOTTOM ACTIONS FOOTER (ALWAYS VISIBLE) ── */}
        <div className="p-3 sm:p-4 border-t border-slate-800 bg-[#0B192C] shrink-0 z-20 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 text-xs">
          <div className="flex items-center gap-1.5 text-slate-400 justify-center sm:justify-start">
            <Lock className="w-3.5 h-3.5 text-[#FF5500]" />
            <span className="truncate">256-Bit Encrypted Tier-1 Acquirer Tunnel Active</span>
          </div>

          <div className="flex items-center gap-2 justify-end">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 sm:flex-initial py-2 px-4 rounded-xl border border-slate-700 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer text-center"
            >
              Close Console
            </button>
            <button
              type="button"
              onClick={() => { onClose(); onOpenApplication?.(); }}
              className="flex-1 sm:flex-initial py-2 px-4 rounded-xl bg-[#FF5500] hover:bg-[#E64A00] text-white font-bold transition-all cursor-pointer shadow-md shadow-orange-500/20 text-center truncate"
            >
              Request Live Account →
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
