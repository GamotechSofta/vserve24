import React from 'react';
import { 
  LayoutDashboard, 
  Server, 
  Sparkles, 
  Cpu, 
  ShieldAlert, 
  Settings, 
  Zap,
  Globe,
  Terminal
} from 'lucide-react';

export default function Sidebar({ activeTab, setActiveTab }) {
  const menuItems = [
    { id: 'dashboard', label: 'Cloud Overview', icon: LayoutDashboard, badge: null },
    { id: 'deployments', label: 'Services & Apps', icon: Server, badge: '12 Active' },
    { id: 'gallery', label: 'Tailwind v4 UI Kit', icon: Sparkles, badge: 'v4.0' },
    { id: 'telemetry', label: 'System Metrics', icon: Cpu, badge: null },
  ];

  return (
    <aside className="w-64 glass-header border-r border-slate-800/80 flex flex-col justify-between hidden md:flex shrink-0 min-h-[calc(100vh-57px)] p-4">
      <div className="space-y-6">
        {/* Brand Banner */}
        <div className="p-3.5 rounded-2xl bg-gradient-to-br from-cyan-950/40 via-slate-900 to-purple-950/40 border border-cyan-500/20 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/10 rounded-full blur-xl group-hover:bg-cyan-500/20 transition-all"></div>
          <div className="flex items-center space-x-2.5 relative z-10">
            <div className="p-2 bg-gradient-to-tr from-cyan-500 to-purple-600 rounded-xl text-white shadow-lg glow-cyan">
              <Zap className="w-4 h-4" />
            </div>
            <div>
              <h1 className="text-sm font-bold text-white tracking-wide">Apex Cloud</h1>
              <p className="text-[10px] text-cyan-400 font-mono">React 19 + Tailwind v4</p>
            </div>
          </div>
        </div>

        {/* Navigation Items */}
        <nav className="space-y-1.5">
          <div className="px-3 pb-2 text-[10px] font-mono font-semibold uppercase tracking-wider text-slate-500">
            Platform Core
          </div>
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-medium transition-all ${
                  isActive
                    ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 shadow-md glow-cyan'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/60 border border-transparent'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <Icon className={`w-4 h-4 ${isActive ? 'text-cyan-400' : 'text-slate-400'}`} />
                  <span>{item.label}</span>
                </div>
                {item.badge && (
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
                    isActive ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30' : 'bg-slate-800 text-slate-400'
                  }`}>
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Bottom Footer Info */}
      <div className="p-3 rounded-xl bg-slate-900/50 border border-slate-800/80 space-y-2">
        <div className="flex items-center justify-between text-[11px] font-mono">
          <span className="text-slate-400 flex items-center">
            <Globe className="w-3.5 h-3.5 mr-1 text-slate-500" />
            Region
          </span>
          <span className="text-cyan-400 font-medium">us-east-1</span>
        </div>
        <div className="flex items-center justify-between text-[11px] font-mono">
          <span className="text-slate-400 flex items-center">
            <Terminal className="w-3.5 h-3.5 mr-1 text-slate-500" />
            Vite HMR
          </span>
          <span className="text-emerald-400 font-medium">Active (12ms)</span>
        </div>
      </div>
    </aside>
  );
}
