import React, { useState } from 'react';
import { 
  Sparkles, 
  Zap, 
  Check, 
  ShieldCheck, 
  Sliders, 
  Bell, 
  Layers, 
  Terminal,
  Code,
  CheckCircle2,
  Copy
} from 'lucide-react';

export default function ComponentGallery() {
  const [toggleActive, setToggleActive] = useState(true);
  const [sliderValue, setSliderValue] = useState(65);
  const [copiedCode, setCopiedCode] = useState(false);

  const copyCSSImports = () => {
    navigator.clipboard.writeText('@import "tailwindcss";');
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center space-x-2 bg-purple-500/10 border border-purple-500/30 px-3 py-1 rounded-full text-purple-300 text-xs font-mono mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Tailwind CSS v4 Showcase</span>
          </div>
          <h2 className="text-xl font-bold text-white">Tailwind CSS v4 Component Gallery</h2>
          <p className="text-slate-400 text-xs mt-0.5">Explore modern UI components built using the Vite CSS-first engine</p>
        </div>

        <button 
          onClick={copyCSSImports}
          className="bg-slate-900 border border-slate-700 hover:border-slate-600 text-slate-200 text-xs font-mono px-3.5 py-2 rounded-xl flex items-center space-x-2 transition-all cursor-pointer self-start sm:self-auto"
        >
          {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-slate-400" />}
          <span>@import "tailwindcss";</span>
        </button>
      </div>

      {/* Component Sections Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Card 1: Buttons & Actions */}
        <div className="glass-card p-6 rounded-3xl border border-slate-800 space-y-4">
          <h3 className="text-sm font-bold text-white flex items-center">
            <Zap className="w-4 h-4 text-cyan-400 mr-2" />
            Vibrant Buttons & Glow States
          </h3>
          <p className="text-slate-400 text-xs">Gradient backgrounds, focus rings, and hover animations</p>

          <div className="flex flex-wrap gap-3 pt-2">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-medium px-4 py-2 rounded-xl text-xs shadow-lg glow-cyan transition-all transform active:scale-95 cursor-pointer">
              Primary Glow Button
            </button>

            <button className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 text-white font-medium px-4 py-2 rounded-xl text-xs shadow-lg glow-purple transition-all transform active:scale-95 cursor-pointer">
              Purple Gradient
            </button>

            <button className="bg-slate-900 border border-slate-700 hover:border-cyan-500/50 text-cyan-300 font-medium px-4 py-2 rounded-xl text-xs transition-all cursor-pointer">
              Glass Outline
            </button>

            <button className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-medium px-4 py-2 rounded-xl text-xs flex items-center space-x-1.5 cursor-pointer">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Active State</span>
            </button>
          </div>
        </div>

        {/* Card 2: Interactive Switches & Sliders */}
        <div className="glass-card p-6 rounded-3xl border border-slate-800 space-y-4">
          <h3 className="text-sm font-bold text-white flex items-center">
            <Sliders className="w-4 h-4 text-purple-400 mr-2" />
            Interactive Form Controls
          </h3>
          <p className="text-slate-400 text-xs">Custom switches, range sliders, and inputs</p>

          <div className="space-y-4 pt-2">
            {/* Toggle Switch */}
            <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-900/60 border border-slate-800">
              <span className="text-xs text-slate-300 font-medium">Real-time Telemetry Sync</span>
              <button 
                onClick={() => setToggleActive(!toggleActive)}
                className={`w-11 h-6 flex items-center rounded-full p-1 transition-colors cursor-pointer ${
                  toggleActive ? 'bg-cyan-500 justify-end glow-cyan' : 'bg-slate-800 justify-start'
                }`}
              >
                <div className="w-4 h-4 rounded-full bg-white shadow-md"></div>
              </button>
            </div>

            {/* Slider */}
            <div className="space-y-1.5 p-3 rounded-2xl bg-slate-900/60 border border-slate-800">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-slate-400">Cluster Capacity Limit</span>
                <span className="text-cyan-400">{sliderValue}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={sliderValue}
                onChange={(e) => setSliderValue(e.target.value)}
                className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
              />
            </div>
          </div>
        </div>

        {/* Card 3: Status Pills & Badges */}
        <div className="glass-card p-6 rounded-3xl border border-slate-800 space-y-4">
          <h3 className="text-sm font-bold text-white flex items-center">
            <ShieldCheck className="w-4 h-4 text-emerald-400 mr-2" />
            Status Badges & Pills
          </h3>
          <p className="text-slate-400 text-xs">Monospace micro-badges with glowing indicators</p>

          <div className="flex flex-wrap gap-2.5 pt-2">
            <span className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full text-xs font-mono flex items-center">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-2 animate-ping"></span>
              Operational 99.99%
            </span>

            <span className="bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-xs font-mono">
              Tailwind v4.0.6
            </span>

            <span className="bg-purple-500/10 border border-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-xs font-mono">
              React 19 Core
            </span>

            <span className="bg-amber-500/10 border border-amber-500/20 text-amber-400 px-3 py-1 rounded-full text-xs font-mono">
              Auto-Scale Triggered
            </span>
          </div>
        </div>

        {/* Card 4: Glassmorphic Container Showcase */}
        <div className="glass-card p-6 rounded-3xl border border-slate-800 space-y-4">
          <h3 className="text-sm font-bold text-white flex items-center">
            <Layers className="w-4 h-4 text-amber-400 mr-2" />
            Glassmorphic Card Utility
          </h3>
          <p className="text-slate-400 text-xs">Backdrop blur (16px), subtle border transparency, and dark background</p>

          <div className="p-4 rounded-2xl bg-gradient-to-br from-slate-900/80 to-cyan-950/30 border border-cyan-500/20 font-mono text-xs text-slate-300 space-y-1.5">
            <p className="text-cyan-400 font-bold">// Tailwind v4 CSS utility class</p>
            <p className="text-slate-400">.glass-card &#123;</p>
            <p className="pl-4 text-purple-300">background: rgba(15, 23, 42, 0.65);</p>
            <p className="pl-4 text-cyan-300">backdrop-filter: blur(16px);</p>
            <p className="pl-4 text-emerald-300">border: 1px solid rgba(255, 255, 255, 0.08);</p>
            <p className="text-slate-400">&#125;</p>
          </div>
        </div>

      </div>
    </div>
  );
}
