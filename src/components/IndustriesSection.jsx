import React, { useState, useMemo, useEffect, useRef } from 'react';
import { vserveData } from '../data/vserveData';
import { 
  Search, X, CheckCircle2, ArrowRight, ShieldCheck, 
  Layers, RefreshCw, Zap, Globe, Smartphone, CreditCard, 
  Lock, Activity, Sparkles, Building2, HelpCircle, Check,
  Leaf, Truck, Wind, Shield, Trophy, GraduationCap, Gem,
  Landmark, BadgeDollarSign, Navigation, Users, Pill,
  Heart, Home, Moon, RotateCw, BarChart3, Code,
  Stethoscope, Plane, Server, Gamepad2, Award, Scale,
  Film, Package, Target, Coins, HeartPulse, UserCheck,
  Eye, TrendingUp, Download, Cpu, Play, Pause, Orbit, Grid, Radio
} from 'lucide-react';

import imgGaming from '../assets/gaming_payments_3d.jpg';
import imgTrading from '../assets/trading_forex_crypto_3d.jpg';
import imgEcosystem from '../assets/industries_ecosystem_3d.jpg';
import imgRetail from '../assets/ecommerce_retail_3d.jpg';
import imgDigital from '../assets/digital_media_saas_3d.jpg';
import imgHealth from '../assets/health_wellness_3d.jpg';
import imgTravel from '../assets/travel_fintech_3d.jpg';
import imgCbd from '../assets/cbd_wellness_3d.jpg';
import imgJewelry from '../assets/jewelry_diamonds_3d.jpg';
import imgShield from '../assets/chargeback_shield_3d.jpg';
import imgSubscription from '../assets/subscription_recovery_3d.jpg';
import imgMultichannel from '../assets/multichannel_payments_3d.jpg';
import imgAcquirer from '../assets/acquirer_routing_3d.jpg';

// Enriched industry metadata with MCC codes, reserve terms, volume caps, and dedicated 3D artwork
const INDUSTRY_CONFIG = {
  'ind-1': { image: imgDigital, icon: Film, color: '#FF5500', bg: 'bg-orange-50', border: 'border-orange-200', mcc: 'MCC 5967', cap: '₹25 Cr/mo', speed: '24h Approval', reserve: '0% - 5%' },
  'ind-2': { image: imgAcquirer, icon: Scale, color: '#0B192C', bg: 'bg-slate-100', border: 'border-slate-300', mcc: 'MCC 7322', cap: '₹15 Cr/mo', speed: '48h Approval', reserve: '0% Rolling' },
  'ind-3': { image: imgCbd, icon: Leaf, color: '#10B981', bg: 'bg-emerald-50', border: 'border-emerald-200', mcc: 'MCC 5993', cap: '₹12 Cr/mo', speed: '24h Approval', reserve: '0% Rolling' },
  'ind-4': { image: imgRetail, icon: Package, color: '#FF5500', bg: 'bg-orange-50', border: 'border-orange-200', mcc: 'MCC 5969', cap: '₹20 Cr/mo', speed: '24h Approval', reserve: '0% - 3%' },
  'ind-5': { image: imgRetail, icon: Wind, color: '#6366F1', bg: 'bg-indigo-50', border: 'border-indigo-200', mcc: 'MCC 5993', cap: '₹10 Cr/mo', speed: '48h Approval', reserve: '0% - 5%' },
  'ind-6': { image: imgShield, icon: Award, color: '#0B192C', bg: 'bg-slate-100', border: 'border-slate-300', mcc: 'MCC 5968', cap: '₹40 Cr/mo', speed: '24h Approval', reserve: '0% Rolling' },
  'ind-7': { image: imgShield, icon: Target, color: '#0B192C', bg: 'bg-slate-100', border: 'border-slate-300', mcc: 'MCC 5941', cap: '₹8 Cr/mo', speed: '48h Approval', reserve: '0% Rolling' },
  'ind-8': { image: imgGaming, icon: Trophy, color: '#FF5500', bg: 'bg-orange-50', border: 'border-orange-200', mcc: 'MCC 7999', cap: '₹50 Cr/mo', speed: '24h Approval', reserve: '0% Rolling' },
  'ind-9': { image: imgAcquirer, icon: GraduationCap, color: '#FF5500', bg: 'bg-orange-50', border: 'border-orange-200', mcc: 'MCC 8299', cap: '₹15 Cr/mo', speed: '24h Approval', reserve: '0% Rolling' },
  'ind-10': { image: imgJewelry, icon: Gem, color: '#06B6D4', bg: 'bg-cyan-50', border: 'border-cyan-200', mcc: 'MCC 5944', cap: '₹30 Cr/mo', speed: '24h Approval', reserve: '0% Rolling' },
  'ind-11': { image: imgTravel, icon: Landmark, color: '#0B192C', bg: 'bg-slate-100', border: 'border-slate-300', mcc: 'MCC 5045', cap: '₹80 Cr/mo', speed: '24h Approval', reserve: '0% Rolling' },
  'ind-12': { image: imgTrading, icon: BadgeDollarSign, color: '#10B981', bg: 'bg-emerald-50', border: 'border-emerald-200', mcc: 'MCC 6211', cap: '₹60 Cr/mo', speed: '24h Approval', reserve: '0% Rolling' },
  'ind-13': { image: imgTravel, icon: Truck, color: '#FF5500', bg: 'bg-orange-50', border: 'border-orange-200', mcc: 'MCC 4214', cap: '₹20 Cr/mo', speed: '24h Approval', reserve: '0% Rolling' },
  'ind-14': { image: imgMultichannel, icon: Users, color: '#8B5CF6', bg: 'bg-purple-50', border: 'border-purple-200', mcc: 'MCC 5960', cap: '₹35 Cr/mo', speed: '48h Approval', reserve: '0% - 5%' },
  'ind-15': { image: imgHealth, icon: Pill, color: '#10B981', bg: 'bg-emerald-50', border: 'border-emerald-200', mcc: 'MCC 5912', cap: '₹40 Cr/mo', speed: '24h Approval', reserve: '0% Rolling' },
  'ind-16': { image: imgDigital, icon: Heart, color: '#EC4899', bg: 'bg-pink-50', border: 'border-pink-200', mcc: 'MCC 7273', cap: '₹25 Cr/mo', speed: '24h Approval', reserve: '0% Rolling' },
  'ind-17': { image: imgRetail, icon: Home, color: '#854D0E', bg: 'bg-yellow-50', border: 'border-yellow-200', mcc: 'MCC 5712', cap: '₹15 Cr/mo', speed: '24h Approval', reserve: '0% Rolling' },
  'ind-18': { image: imgDigital, icon: Moon, color: '#8B5CF6', bg: 'bg-purple-50', border: 'border-purple-200', mcc: 'MCC 7299', cap: '₹12 Cr/mo', speed: '24h Approval', reserve: '0% Rolling' },
  'ind-19': { image: imgSubscription, icon: RotateCw, color: '#FF5500', bg: 'bg-orange-50', border: 'border-orange-200', mcc: 'MCC 5734', cap: '₹50 Cr/mo', speed: '24h Approval', reserve: '0% Rolling' },
  'ind-20': { image: imgDigital, icon: TrendingUp, color: '#10B981', bg: 'bg-emerald-50', border: 'border-emerald-200', mcc: 'MCC 7311', cap: '₹15 Cr/mo', speed: '24h Approval', reserve: '0% Rolling' },
  'ind-21': { image: imgDigital, icon: Code, color: '#3B82F6', bg: 'bg-blue-50', border: 'border-blue-200', mcc: 'MCC 5817', cap: '₹30 Cr/mo', speed: '24h Approval', reserve: '0% Rolling' },
  'ind-22': { image: imgHealth, icon: HeartPulse, color: '#EF4444', bg: 'bg-red-50', border: 'border-red-200', mcc: 'MCC 8099', cap: '₹25 Cr/mo', speed: '24h Approval', reserve: '0% Rolling' },
  'ind-23': { image: imgTravel, icon: Plane, color: '#0284C7', bg: 'bg-sky-50', border: 'border-sky-200', mcc: 'MCC 4722', cap: '₹40 Cr/mo', speed: '24h Approval', reserve: '0% - 5%' },
  'ind-24': { image: imgDigital, icon: Server, color: '#0B192C', bg: 'bg-slate-100', border: 'border-slate-300', mcc: 'MCC 7374', cap: '₹25 Cr/mo', speed: '24h Approval', reserve: '0% Rolling' },
};

export default function IndustriesSection({ onOpenApplication }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeModalIndustry, setActiveModalIndustry] = useState(null);
  const [activeHoverId, setActiveHoverId] = useState('ind-8'); // iGaming & Esports Default
  const [viewMode, setViewMode] = useState('circular'); // 'circular' | 'hex' | 'grid'
  const [isRotating, setIsRotating] = useState(true);
  const [rotationAngle, setRotationAngle] = useState(0);
  const animationRef = useRef(null);

  const categories = [
    { id: 'All', label: 'All Verticals', count: 24 },
    { id: 'Digital', label: 'Digital & Media', count: 5 },
    { id: 'Subscription', label: 'Subscriptions', count: 5 },
    { id: 'Retail', label: 'Retail & E-comm', count: 5 },
    { id: 'Financial', label: 'Financial & B2B', count: 3 },
    { id: 'Specialized', label: 'Specialized High-Risk', count: 6 },
  ];

  const filteredIndustries = useMemo(() => {
    return vserveData.industries.filter((item) => {
      const matchesCat = selectedCategory === 'All' || item.category === selectedCategory;
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            item.desc.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCat && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  // Smooth orbital rotation animation loop
  useEffect(() => {
    if (viewMode !== 'circular') return;
    
    let lastTime = performance.now();
    const rotate = (currentTime) => {
      const delta = currentTime - lastTime;
      lastTime = currentTime;
      if (isRotating) {
        setRotationAngle((prev) => (prev + (delta * 0.012)) % 360);
      }
      animationRef.current = requestAnimationFrame(rotate);
    };

    animationRef.current = requestAnimationFrame(rotate);
    return () => cancelAnimationFrame(animationRef.current);
  }, [isRotating, viewMode]);

  // Get active industry object for central showcase
  const activeIndustry = useMemo(() => {
    return vserveData.industries.find((i) => i.id === activeHoverId) || vserveData.industries[0];
  }, [activeHoverId]);

  const activeConfig = INDUSTRY_CONFIG[activeIndustry.id] || INDUSTRY_CONFIG['ind-1'];
  const ActiveIconComponent = activeConfig.icon;

  return (
    <section id="industries" className="relative bg-[#FCFBF8] text-[#0B192C] py-20 lg:py-28 border-b border-[#E7E3DA] overflow-hidden">
      
      {/* Background blueprint tech grid */}
      <div 
        aria-hidden 
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: 'radial-gradient(#0B192C 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        {/* TOP SECTION HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-5 mb-7 sm:mb-9">
          <div className="max-w-2xl space-y-2 sm:space-y-2.5">
            <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200/80 text-[10.5px] tracking-widest text-[#FF5500] uppercase font-bold shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#FF5500] animate-pulse" />
              <span>06 • Specialized Verticals Ecosystem</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-bold text-[#0B192C] tracking-tight leading-[1.12]">
              Interactive High-Risk <span className="text-[#FF5500]">Banking Matrix.</span>
            </h2>

            <p className="text-[#475569] text-xs sm:text-sm lg:text-[15px] leading-relaxed">
              Explore 24+ high-risk categories placed across direct Tier-1 sponsor banks with pre-dispute protection and automated underwriting.
            </p>
          </div>

          {/* Interactive Layout View Switcher */}
          <div className="flex items-center gap-1.5 p-1.5 rounded-2xl bg-[#FFFFFF] border border-[#E7E3DA] shadow-xs overflow-x-auto scrollbar-none w-full sm:w-auto self-start lg:self-auto">
            <button
              onClick={() => setViewMode('circular')}
              className={`flex items-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                viewMode === 'circular'
                  ? 'bg-[#FF5500] text-white shadow-md shadow-orange-500/20'
                  : 'text-[#475569] hover:text-[#0B192C] hover:bg-[#F7F4ED]'
              }`}
            >
              <Orbit className="w-3.5 h-3.5" />
              <span>3D Orbit</span>
            </button>

            <button
              onClick={() => setViewMode('hex')}
              className={`flex items-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                viewMode === 'hex'
                  ? 'bg-[#FF5500] text-white shadow-md shadow-orange-500/20'
                  : 'text-[#475569] hover:text-[#0B192C] hover:bg-[#F7F4ED]'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Hex Matrix</span>
            </button>

            <button
              onClick={() => setViewMode('grid')}
              className={`flex items-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                viewMode === 'grid'
                  ? 'bg-[#FF5500] text-white shadow-md shadow-orange-500/20'
                  : 'text-[#475569] hover:text-[#0B192C] hover:bg-[#F7F4ED]'
              }`}
            >
              <Grid className="w-3.5 h-3.5" />
              <span>Cards Grid</span>
            </button>
          </div>
        </div>

        {/* Filter Controls & Search */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 mb-8 pb-5 border-b border-[#E7E3DA]">
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wider uppercase whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 ${
                  selectedCategory === cat.id
                    ? 'bg-[#FF5500] text-white shadow-md shadow-orange-500/25'
                    : 'bg-[#FFFFFF] hover:bg-[#F3F0E8] text-[#475569] border border-[#E7E3DA]'
                }`}
              >
                <span>{cat.label}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  selectedCategory === cat.id ? 'bg-white/25 text-white' : 'bg-slate-200 text-slate-700'
                }`}>
                  {cat.count}
                </span>
              </button>
            ))}
          </div>

          <div className="relative min-w-[240px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
            <input
              type="text"
              placeholder="Search (e.g. CBD, Dating)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3.5 py-2 rounded-xl bg-[#FFFFFF] border border-[#E7E3DA] text-xs text-[#0B192C] placeholder-slate-400 focus:outline-none focus:border-[#FF5500] transition-colors shadow-xs"
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
                <X className="w-3 h-3" />
              </button>
            )}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* MODE 1: ADVANCED 3D CIRCULAR ORBITAL SHOWCASE HUB                         */}
        {/* ========================================================================= */}
        {viewMode === 'circular' && (
          <div className="bg-[#FFFFFF] border border-[#E7E3DA] rounded-3xl p-6 sm:p-8 lg:p-12 shadow-sm relative overflow-hidden">
            
            {/* Top Orbit Controls Bar */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#E7E3DA]">
              <div className="flex items-center gap-2 text-xs text-[#707887]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] animate-pulse" />
                <span className="font-bold text-[#0B192C]">360° Circular Radar Active</span>
                <span>•</span>
                <span className="text-[#FF5500] font-semibold">Hover any node to inspect underwriting</span>
              </div>

              <button
                onClick={() => setIsRotating(!isRotating)}
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl border border-[#E7E3DA] bg-[#F7F4ED] hover:bg-[#FFFFFF] text-xs font-bold text-[#0B192C] transition-colors cursor-pointer shadow-xs"
              >
                {isRotating ? <Pause className="w-3.5 h-3.5 text-[#FF5500]" /> : <Play className="w-3.5 h-3.5 text-[#10B981]" />}
                <span>{isRotating ? 'Pause Orbit' : 'Resume Orbit'}</span>
              </button>
            </div>

            {/* Orbit Layout: Split into Central Interactive Showcase (Left) + Circular Orbit Matrix (Right on Desktop) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
              
              {/* MOBILE ONLY: Clean Horizontal Industry Quick Selector */}
              <div className="lg:hidden w-full space-y-2">
                <span className="text-[11px] font-bold text-[#707887] uppercase tracking-wider">
                  Select Industry Vertical
                </span>
                <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
                  {filteredIndustries.map((ind) => {
                    const isActive = (activeHoverId === ind.id);
                    const config = INDUSTRY_CONFIG[ind.id] || INDUSTRY_CONFIG['ind-1'];
                    const Icon = config.icon;

                    return (
                      <button
                        key={ind.id}
                        type="button"
                        onClick={() => setActiveHoverId(ind.id)}
                        className={`px-3 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer shrink-0 border ${
                          isActive
                            ? 'bg-[#FF5500] text-white border-[#FF5500] shadow-sm'
                            : 'bg-white text-[#0B192C] border-[#E7E3DA]'
                        }`}
                      >
                        <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-[#FF5500]'}`} />
                        <span>{ind.name}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Central Live Underwriting Inspector (Left 5 cols on desktop, full width on mobile) */}
              <div className="w-full lg:col-span-5 space-y-5 bg-[#F7F4ED] border border-[#E7E3DA] p-5 sm:p-7 rounded-3xl relative shadow-md">
                
                {/* 3D Visual Header for Active Vertical with Smooth Crossfade */}
                <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-[#E7E3DA] shadow-md bg-white">
                  <img
                    src={activeConfig.image}
                    alt={activeIndustry.name}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-106"
                  />
                  
                  {/* Floating Pill Badges */}
                  <div className="absolute top-3 left-3 bg-[#0B192C]/90 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-lg uppercase tracking-wider shadow-sm">
                    {activeIndustry.category}
                  </div>

                  <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md border border-[#E7E3DA] text-[#FF5500] text-[10px] font-bold px-2.5 py-1 rounded-lg shadow-sm">
                    {activeConfig.mcc}
                  </div>

                  <div className={`absolute bottom-3 right-3 w-10 h-10 rounded-xl ${activeConfig.bg} border ${activeConfig.border} flex items-center justify-center shadow-md`}>
                    <ActiveIconComponent className="w-5 h-5" style={{ color: activeConfig.color }} />
                  </div>
                </div>

                {/* Title & Desc */}
                <div>
                  <div className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-[#FF5500] bg-orange-50 border border-orange-200/80 px-2.5 py-0.5 rounded">
                    <Radio className="w-3 h-3 animate-pulse" />
                    <span>LIVE UNDERWRITING DOSSIER</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#0B192C] mt-2">
                    {activeIndustry.name}
                  </h3>
                  <p className="text-xs text-[#475569] mt-1.5 leading-relaxed">
                    {activeIndustry.desc}
                  </p>
                </div>

                {/* Live Underwriting Quick Specs Matrix */}
                <div className="grid grid-cols-3 gap-2 pt-2 border-t border-[#E7E3DA] text-xs">
                  <div className="p-2.5 rounded-xl bg-white border border-[#E7E3DA]">
                    <span className="text-[#707887] text-[9.5px]">Volume Cap</span>
                    <div className="font-bold text-[#0B192C] mt-0.5">{activeConfig.cap}</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white border border-[#E7E3DA]">
                    <span className="text-[#707887] text-[9.5px]">Approval</span>
                    <div className="font-bold text-[#10B981] mt-0.5">{activeConfig.speed}</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white border border-[#E7E3DA]">
                    <span className="text-[#707887] text-[9.5px]">Rolling Reserve</span>
                    <div className="font-bold text-[#0B192C] mt-0.5">{activeConfig.reserve}</div>
                  </div>
                </div>

                {/* Action CTA */}
                <div className="pt-2 flex items-center gap-3">
                  <button
                    onClick={() => setActiveModalIndustry(activeIndustry)}
                    className="flex-1 py-3 px-4 rounded-xl bg-[#0B192C] hover:bg-[#1A283E] text-white text-xs font-bold tracking-wide transition-all text-center cursor-pointer shadow-sm"
                  >
                    View Underwriting Sheet
                  </button>
                  <button
                    onClick={onOpenApplication}
                    className="py-3 px-5 rounded-xl bg-[#FF5500] hover:bg-[#E64A00] text-white text-xs font-bold tracking-wide transition-all flex items-center gap-1.5 cursor-pointer shadow-md shadow-orange-500/20 hover:-translate-y-0.5"
                  >
                    <span>Apply</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>

              {/* 360° Circular Orbital Galaxy of 24 High-Risk Nodes (Active on Mobile and Desktop) */}
              <div 
                className="w-full lg:col-span-7 relative flex items-center justify-center min-h-[420px] sm:min-h-[520px] lg:min-h-[580px] select-none scale-[0.68] xs:scale-[0.78] sm:scale-90 lg:scale-100 origin-center my-4 lg:my-0 overflow-visible"
                onMouseEnter={() => setIsRotating(false)}
                onMouseLeave={() => setIsRotating(true)}
                onTouchStart={() => setIsRotating(false)}
              >
                {/* Radar Sweep Effect */}
                <div 
                  className="absolute w-[460px] h-[460px] rounded-full pointer-events-none opacity-20"
                  style={{
                    background: 'conic-gradient(from 0deg, transparent 0deg, rgba(255, 85, 0, 0.25) 60deg, transparent 65deg)',
                    transform: `rotate(${rotationAngle * 2}deg)`
                  }}
                />

                {/* Orbit Guideline Dashed Rings */}
                <div className="absolute w-[460px] h-[460px] rounded-full border border-dashed border-[#E7E3DA] pointer-events-none opacity-80" />
                <div className="absolute w-[310px] h-[310px] rounded-full border border-dashed border-[#FF5500]/30 pointer-events-none opacity-60" />
                <div className="absolute w-[160px] h-[160px] rounded-full border border-[#E7E3DA] pointer-events-none" />

                {/* Central Vserve24 Core Hub */}
                <div className="relative z-20 w-32 h-32 rounded-full bg-gradient-to-br from-[#0B192C] to-[#1A283E] border-4 border-white shadow-2xl flex flex-col items-center justify-center text-white text-center p-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF5500] animate-ping mb-1" />
                  <span className="text-[12px] font-bold tracking-wider text-[#FF5500]">VSERVE24</span>
                  <span className="text-[9px] text-slate-300">BANKING HUB</span>
                  <span className="text-[8px] text-[#10B981] mt-0.5">● 24 MIDs ONLINE</span>
                </div>

                {/* 24 Orbiting Interactive Nodes positioned along outer & inner radii */}
                {filteredIndustries.map((ind, idx) => {
                  const total = filteredIndustries.length;
                  // Split into outer and inner orbit tracks for perfect visual distribution
                  const isOuter = idx % 2 === 0;
                  const radius = isOuter ? 225 : 155;
                  const angle = (idx * (360 / total) + rotationAngle) * (Math.PI / 180);
                  const x = Math.cos(angle) * radius;
                  const y = Math.sin(angle) * radius;

                  const config = INDUSTRY_CONFIG[ind.id] || INDUSTRY_CONFIG['ind-1'];
                  const Icon = config.icon;
                  const isActive = activeHoverId === ind.id;

                  return (
                    <div
                      key={ind.id}
                      onMouseEnter={() => setActiveHoverId(ind.id)}
                      onClick={() => {
                        setActiveHoverId(ind.id);
                        setActiveModalIndustry(ind);
                      }}
                      onTouchEnd={() => {
                        setActiveHoverId(ind.id);
                      }}
                      style={{
                        transform: `translate(${x}px, ${y}px)`,
                        transition: 'transform 0.1s linear'
                      }}
                      className="absolute z-30 group cursor-pointer flex items-center justify-center"
                    >
                      <div className={`p-2 sm:p-2.5 rounded-2xl border transition-all duration-300 flex items-center gap-1.5 sm:gap-2 shadow-md ${
                        isActive
                          ? 'bg-[#0B192C] text-white border-[#FF5500] scale-125 shadow-2xl shadow-orange-500/30 z-40'
                          : 'bg-[#FFFFFF] text-[#0B192C] border-[#E7E3DA] hover:border-[#FF5500] hover:scale-115'
                      }`}>
                        <div className={`w-6 h-6 sm:w-7 sm:h-7 rounded-lg ${isActive ? 'bg-[#FF5500] text-white' : config.bg} flex items-center justify-center shadow-xs shrink-0`}>
                          <Icon className="w-3 sm:w-3.5 h-3 sm:h-3.5" style={{ color: isActive ? '#FFFFFF' : config.color }} />
                        </div>
                        
                        <span className="text-[9.5px] sm:text-[10px] font-bold whitespace-nowrap pr-1">
                          {ind.name}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>

          </div>
        )}

        {/* ========================================================================= */}
        {/* MODE 2: HEXAGONAL HONEYCOMB MATRIX SHOWCASE                               */}
        {/* ========================================================================= */}
        {viewMode === 'hex' && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
            {filteredIndustries.map((ind) => {
              const config = INDUSTRY_CONFIG[ind.id] || INDUSTRY_CONFIG['ind-1'];
              const Icon = config.icon;

              return (
                <div
                  key={ind.id}
                  onClick={() => setActiveModalIndustry(ind)}
                  className="group relative bg-[#FFFFFF] border border-[#E7E3DA] hover:border-[#FF5500] p-4 rounded-2xl text-center flex flex-col items-center justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-orange-500/[0.08] cursor-pointer min-h-[165px]"
                >
                  <div className={`w-12 h-12 rounded-2xl ${config.bg} border ${config.border} flex items-center justify-center transition-transform duration-300 group-hover:scale-115 group-hover:rotate-6 shadow-xs`}>
                    <Icon className="w-6 h-6" style={{ color: config.color }} />
                  </div>

                  <div>
                    <div className="text-[9px] text-[#FF5500] uppercase font-bold tracking-widest mt-2">
                      {ind.category}
                    </div>
                    <h4 className="text-xs font-bold text-[#0B192C] group-hover:text-[#FF5500] transition-colors mt-0.5 leading-snug">
                      {ind.name}
                    </h4>
                  </div>

                  <div className="text-[9.5px] text-[#10B981] font-bold mt-1 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                    <span>{config.speed}</span>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* ========================================================================= */}
        {/* MODE 3: 24 EXECUTIVE CARDS WITH 3D IMAGE HEADERS                         */}
        {/* ========================================================================= */}
        {viewMode === 'grid' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
            {filteredIndustries.map((ind) => {
              const config = INDUSTRY_CONFIG[ind.id] || INDUSTRY_CONFIG['ind-1'];
              const IconComponent = config.icon;

              return (
                <div
                  key={ind.id}
                  onClick={() => setActiveModalIndustry(ind)}
                  className="group rounded-2xl bg-[#FFFFFF] border border-[#E7E3DA] hover:border-[#FF5500] transition-all duration-300 cursor-pointer flex flex-col justify-between overflow-hidden shadow-xs hover:-translate-y-1.5 hover:shadow-xl hover:shadow-orange-500/[0.08]"
                >
                  {/* Dedicated 3D Category Image Header */}
                  <div className="relative aspect-[16/9] overflow-hidden bg-slate-100 border-b border-[#E7E3DA]">
                    <img
                      src={config.image}
                      alt={ind.name}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                      loading="lazy"
                    />
                    
                    <div className="absolute top-2.5 left-2.5 bg-[#0B192C]/85 backdrop-blur-md text-white text-[9.5px] font-bold px-2 py-0.5 rounded-md uppercase tracking-wider shadow-sm">
                      {ind.category}
                    </div>

                    <div className="absolute top-2.5 right-2.5 bg-white/90 backdrop-blur-md text-[#FF5500] text-[9.5px] font-bold px-2 py-0.5 rounded-md shadow-xs">
                      {config.mcc}
                    </div>

                    <div className={`absolute bottom-2 right-2 w-8 h-8 rounded-lg ${config.bg} border ${config.border} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform`}>
                      <IconComponent className="w-4 h-4" style={{ color: config.color }} />
                    </div>
                  </div>

                  <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-2">
                    <div>
                      <h3 className="text-base font-bold text-[#0B192C] group-hover:text-[#FF5500] transition-colors leading-snug">
                        {ind.name}
                      </h3>
                      <p className="text-xs text-[#475569] mt-1 line-clamp-2 leading-relaxed">
                        {ind.desc}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-[#E7E3DA] flex items-center justify-between text-[11px] text-[#707887] group-hover:text-[#0B192C] transition-colors">
                      <span className="font-semibold flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                        {config.speed}
                      </span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#FF5500] transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>

      {/* Comprehensive Industry Underwriting Light Modal */}
      {activeModalIndustry && (
        <div 
          onClick={() => setActiveModalIndustry(null)} 
          className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm p-3 sm:p-6 flex min-h-full items-start sm:items-center justify-center animate-in fade-in duration-200"
        >
          <div 
            className="bg-[#FFFFFF] border border-[#E7E3DA] rounded-3xl max-w-xl w-full overflow-hidden relative shadow-2xl space-y-0 text-[#0B192C] my-4 sm:my-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal 3D Image Header Banner */}
            <div className="relative aspect-[21/9] overflow-hidden bg-slate-100 border-b border-[#E7E3DA]">
              <img
                src={INDUSTRY_CONFIG[activeModalIndustry.id]?.image || imgRetail}
                alt={activeModalIndustry.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              
              {/* Prominent Circular Close Button */}
              <button 
                type="button"
                onClick={() => setActiveModalIndustry(null)}
                className="absolute top-3.5 right-3.5 bg-black/60 hover:bg-black/90 text-white w-9 h-9 rounded-full flex items-center justify-center transition-colors cursor-pointer z-30 shadow-md border border-white/20"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" strokeWidth={2.5} />
              </button>

              <div className="absolute bottom-3 left-4 right-4 text-white">
                <div className="text-[10px] font-bold uppercase tracking-widest text-[#FF5500] bg-black/50 backdrop-blur-md px-2.5 py-0.5 rounded inline-block mb-1 border border-white/10">
                  {activeModalIndustry.category} • {INDUSTRY_CONFIG[activeModalIndustry.id]?.mcc}
                </div>
                <h3 className="text-xl font-bold text-white drop-shadow-sm">
                  {activeModalIndustry.name} Merchant Account
                </h3>
              </div>
            </div>

            <div className="p-5 sm:p-7 space-y-5">
              <p className="text-[#475569] text-xs sm:text-sm leading-relaxed">
                {activeModalIndustry.desc}
              </p>

              {/* Structured Specifications Grid */}
              <div className="grid grid-cols-2 gap-2.5 text-xs">
                <div className="p-3 rounded-xl bg-[#F7F4ED] border border-[#E7E3DA]">
                  <div className="text-[#707887]">Approval Time</div>
                  <div className="text-sm font-bold text-[#10B981] mt-0.5">{INDUSTRY_CONFIG[activeModalIndustry.id]?.speed || '24 – 48 Hours'}</div>
                </div>
                <div className="p-3 rounded-xl bg-[#F7F4ED] border border-[#E7E3DA]">
                  <div className="text-[#707887]">Monthly Volume Cap</div>
                  <div className="text-sm font-bold text-[#0B192C] mt-0.5">{INDUSTRY_CONFIG[activeModalIndustry.id]?.cap || '₹12 Cr – ₹80 Cr/mo'}</div>
                </div>
                <div className="p-3 rounded-xl bg-[#F7F4ED] border border-[#E7E3DA]">
                  <div className="text-[#707887]">Rolling Reserve</div>
                  <div className="text-sm font-bold text-[#0B192C] mt-0.5">{INDUSTRY_CONFIG[activeModalIndustry.id]?.reserve || '0% Rolling'}</div>
                </div>
                <div className="p-3 rounded-xl bg-[#F7F4ED] border border-[#E7E3DA]">
                  <div className="text-[#707887]">Currencies</div>
                  <div className="text-sm font-bold text-[#0B192C] mt-0.5">INR, USD, EUR, GBP+</div>
                </div>
              </div>

              {/* Included Controls Checklist */}
              <div className="space-y-2 pt-2 border-t border-[#E7E3DA] text-xs">
                <div className="text-[#707887] font-bold uppercase tracking-wider mb-1">
                  INCLUDED INFRASTRUCTURE SAFEGUARDS
                </div>
                <div className="flex items-center gap-2 text-[#475569]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#FF5500] shrink-0" />
                  <span>Dedicated Merchant ID (MID) with No Arbitrary Volume Caps</span>
                </div>
                <div className="flex items-center gap-2 text-[#475569]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#FF5500] shrink-0" />
                  <span>Automated Pre-Dispute Interception Prior to Bank Filing</span>
                </div>
                <div className="flex items-center gap-2 text-[#475569]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#FF5500] shrink-0" />
                  <span>Zero Account Setup Fees & Dedicated Risk Desk Analyst</span>
                </div>
              </div>

              {/* Modal Actions */}
              <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
                <button
                  type="button"
                  onClick={() => {
                    const ind = activeModalIndustry;
                    setActiveModalIndustry(null);
                    onOpenApplication?.({ industry: ind.name, volume: INDUSTRY_CONFIG[ind.id]?.cap });
                  }}
                  className="flex-1 py-3.5 px-5 rounded-xl bg-[#FF5500] hover:bg-[#E64A00] text-white text-xs font-bold tracking-wide transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-orange-500/20"
                >
                  <span>Apply for {activeModalIndustry.name} MID</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setActiveModalIndustry(null)}
                  className="py-3 px-4 rounded-xl border border-[#E7E3DA] text-xs font-bold text-[#707887] hover:text-[#0B192C] hover:bg-[#F7F4ED] transition-colors cursor-pointer text-center"
                >
                  Close Window
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
