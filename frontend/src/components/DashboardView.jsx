import React from 'react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';
import { 
  Cpu, 
  Zap, 
  ShieldCheck, 
  Globe, 
  ArrowUpRight, 
  TrendingUp,
  Activity,
  HardDrive,
  Clock,
  Sparkles
} from 'lucide-react';

const chartData = [
  { time: '00:00', cpu: 32, memory: 45, requests: 1200 },
  { time: '04:00', cpu: 45, memory: 52, requests: 2400 },
  { time: '08:00', cpu: 78, memory: 84, requests: 6800 },
  { time: '12:00', cpu: 65, memory: 72, requests: 5400 },
  { time: '16:00', cpu: 88, memory: 91, requests: 8900 },
  { time: '20:00', cpu: 54, memory: 68, requests: 4100 },
  { time: '24:00', cpu: 42, memory: 58, requests: 3100 },
];

export default function DashboardView({ setActiveTab }) {
  const stats = [
    { title: 'Global Throughput', value: '42.8k req/s', change: '+18.4%', icon: Zap, color: 'from-cyan-500 to-blue-600', glow: 'glow-cyan' },
    { title: 'Cluster CPU Load', value: '64.2%', change: '-4.1%', icon: Cpu, color: 'from-purple-500 to-indigo-600', glow: 'glow-purple' },
    { title: 'RAM Allocation', value: '128.4 GB / 256GB', change: '+2.8%', icon: HardDrive, color: 'from-emerald-500 to-teal-600', glow: 'glow-emerald' },
    { title: 'Uptime SLA', value: '99.998%', change: 'Optimal', icon: ShieldCheck, color: 'from-amber-500 to-orange-600', glow: '' },
  ];

  return (
    <div className="space-y-6">
      {/* Hero Welcome Banner */}
      <div className="glass-card rounded-3xl p-6 sm:p-8 relative overflow-hidden border border-cyan-500/20">
        <div className="absolute top-0 right-0 -mt-12 -mr-12 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-1/3 -mb-12 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center space-x-2 bg-cyan-500/10 border border-cyan-500/30 px-3 py-1 rounded-full text-cyan-300 text-xs font-mono">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Tailwind CSS v4 Engine Standard</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Cloud Infrastructure Dashboard
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              Real-time monitoring platform powered by React 19 and Tailwind CSS v4 CSS-first design system.
            </p>
          </div>

          <div className="flex items-center space-x-3">
            <button 
              onClick={() => setActiveTab('deployments')}
              className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold px-5 py-2.5 rounded-xl text-xs flex items-center space-x-2 transition-all shadow-lg glow-cyan active:scale-95 cursor-pointer"
            >
              <span>Manage Services</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <button 
              onClick={() => setActiveTab('gallery')}
              className="bg-slate-900 border border-slate-700 hover:border-slate-600 text-slate-200 font-medium px-4 py-2.5 rounded-xl text-xs transition-all cursor-pointer"
            >
              UI Kit Gallery
            </button>
          </div>
        </div>
      </div>

      {/* Stats Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div key={idx} className={`glass-card p-5 rounded-2xl border border-slate-800 hover:border-slate-700 transition-all ${stat.glow}`}>
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-400 font-medium">{stat.title}</span>
                <div className={`p-2 rounded-xl bg-gradient-to-tr ${stat.color} text-white shadow-md`}>
                  <Icon className="w-4 h-4" />
                </div>
              </div>
              <div className="mt-4 flex items-baseline justify-between">
                <span className="text-xl font-bold text-white font-mono">{stat.value}</span>
                <span className="text-xs font-semibold text-emerald-400 font-mono flex items-center">
                  <TrendingUp className="w-3 h-3 mr-0.5" />
                  {stat.change}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Chart & Live Activity Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Chart */}
        <div className="lg:col-span-2 glass-card p-6 rounded-3xl border border-slate-800 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-bold text-white flex items-center">
                <Activity className="w-4 h-4 text-cyan-400 mr-2" />
                Live Telemetry & Resource Load
              </h3>
              <p className="text-slate-400 text-xs mt-0.5">CPU load vs Memory allocation over 24h period</p>
            </div>
            <div className="flex items-center space-x-3 text-xs font-mono">
              <span className="flex items-center text-cyan-400">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 mr-1.5 inline-block"></span>
                CPU %
              </span>
              <span className="flex items-center text-purple-400">
                <span className="w-2.5 h-2.5 rounded-full bg-purple-400 mr-1.5 inline-block"></span>
                RAM %
              </span>
            </div>
          </div>

          <div className="h-64 w-full pt-4">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="colorCpu" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="#06b6d4" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorMem" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#a855f7" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="#a855f7" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                <XAxis dataKey="time" stroke="#64748b" fontSize={11} />
                <YAxis stroke="#64748b" fontSize={11} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '12px', color: '#fff', fontSize: '12px' }}
                />
                <Area type="monotone" dataKey="cpu" stroke="#06b6d4" strokeWidth={2} fillOpacity={1} fill="url(#colorCpu)" />
                <Area type="monotone" dataKey="memory" stroke="#a855f7" strokeWidth={2} fillOpacity={1} fill="url(#colorMem)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Activity Feed */}
        <div className="glass-card p-6 rounded-3xl border border-slate-800 space-y-4">
          <h3 className="text-sm font-bold text-white flex items-center justify-between">
            <span className="flex items-center">
              <Clock className="w-4 h-4 text-purple-400 mr-2" />
              Real-time Logs
            </span>
            <span className="text-[10px] text-cyan-400 font-mono bg-cyan-500/10 border border-cyan-500/20 px-2 py-0.5 rounded-full">
              Live Stream
            </span>
          </h3>

          <div className="space-y-3">
            {[
              { time: '13:04:12', msg: 'Tailwind v4 CSS pipeline compiled', type: 'success' },
              { time: '13:02:45', msg: 'GPU Worker node-04 scaled up', type: 'info' },
              { time: '12:58:10', msg: 'PostgreSQL backup snapshot created', type: 'success' },
              { time: '12:45:00', msg: 'Redis cache hit ratio 98.4%', type: 'info' },
              { time: '12:30:22', msg: 'SSL Certificate renewed for *.apex.cloud', type: 'success' },
            ].map((log, i) => (
              <div key={i} className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 flex items-start space-x-2.5 text-xs">
                <span className="font-mono text-[10px] text-slate-500 pt-0.5">{log.time}</span>
                <p className="text-slate-300 flex-1 leading-snug">{log.msg}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
