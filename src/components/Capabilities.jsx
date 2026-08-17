import React, { useState } from 'react';
import { 
  ArrowRight, CheckCircle2, ShieldCheck, Cpu, 
  Layers, Zap, RefreshCw, Lock, Check, Radio, Network, Server
} from 'lucide-react';

import imgAcquirer from '../assets/acquirer_routing_3d.jpg';
import imgFraudScreening from '../assets/ai_fraud_screening_3d.jpg';
import imgFailover from '../assets/cascading_failover_3d.jpg';

export default function Capabilities() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const architecturePillars = [
    {
      id: 'rails',
      step: '01',
      badge: 'DIRECT ACQUIRING',
      title: 'Direct Acquirer Bank Routing',
      subtitle: 'Dedicated Tier-1 Bank Connections',
      description: 'Direct MID sponsorship eliminates aggregator freezing and maximizes authorization approval rates.',
      image: imgAcquirer,
      points: [
        'Dedicated Merchant ID (MID) with custom volume cap',
        'Direct connection to domestic & offshore sponsor banks',
        'Zero intermediate middleman holdbacks or reserves',
        'Same-day and next-day batch settlement options'
      ],
      metric: 'Zero Middleman Reserves',
      sla: 'Tier-1 Direct Rail'
    },
    {
      id: 'ai-shield',
      step: '02',
      badge: 'AI FRAUD ENGINE',
      title: 'Real-Time AI Risk Screening',
      subtitle: 'Sub-80ms Biometric & Velocity Filter',
      description: 'Machine learning scores fraud indicators in milliseconds without creating false declines for good buyers.',
      image: imgFraudScreening,
      points: [
        'Dynamic 3D Secure 2.2 frictionless authentication',
        'Device fingerprinting, proxy, bot & IP geolocation',
        'Custom velocity and high-ticket security thresholds',
        'Continuous compliance scoring across card brands'
      ],
      metric: '< 80ms Decisioning',
      sla: '0% False Declines'
    },
    {
      id: 'failover',
      step: '03',
      badge: 'CASCADING FAILOVER',
      title: 'Multi-MID Zero-Downtime Routing',
      subtitle: 'Automated Smart Failover Network',
      description: 'If an acquiring rail experiences latency, transactions automatically cascade to a backup rail instantly.',
      image: imgFailover,
      points: [
        'Intelligent load balancing across multiple acquiring MIDs',
        'Instant zero-latency failover routing on bank downtime',
        'Cascading decline salvage for soft bank rejections',
        'Continuous 99.99% transaction uptime guaranteed'
      ],
      metric: '99.99% SLA Uptime',
      sla: 'Auto-Salvage Active'
    }
  ];

  return (
    <section 
      id="capabilities"
      className="relative bg-[#FCFBF8] text-[#0B192C] py-20 lg:py-28 overflow-hidden border-b border-[#E7E3DA]"
    >
      {/* Background blueprint grid texture */}
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
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200/80 text-xs font-mono tracking-widest text-[#FF5500] uppercase font-bold shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#FF5500]" />
              <span>03 • Core Architecture</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#0B192C] tracking-tight leading-[1.08]">
              Engineered for high volume and strict compliance.
            </h2>

            <p className="text-[#475569] text-base lg:text-lg leading-relaxed">
              Direct acquirer connectivity, intelligent billing automations, and instant dispute mitigation unified under one resilient payment rail.
            </p>
          </div>

          <div className="flex items-center gap-3 self-start lg:self-auto text-xs font-mono text-[#707887]">
            <span className="flex items-center gap-1.5 text-[#10B981] font-bold bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-xl">
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
              99.99% Global Rail SLA
            </span>
          </div>
        </div>

        {/* 3-Column Bento Architecture Cards Grid (Completely Different Layout from Section 02) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {architecturePillars.map((pillar, idx) => {
            const isHovered = hoveredCard === idx;

            return (
              <div
                key={pillar.id}
                onMouseEnter={() => setHoveredCard(idx)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`group rounded-3xl bg-[#FFFFFF] border transition-all duration-300 flex flex-col justify-between overflow-hidden relative ${
                  isHovered
                    ? 'border-[#FF5500] shadow-xl shadow-orange-500/[0.08] -translate-y-1.5 bg-[#FFFFFF]'
                    : 'border-[#E7E3DA] hover:border-slate-300 shadow-xs'
                }`}
              >
                {/* Top Accent Orange Border on Hover */}
                <div className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#FF5500] to-[#FF7733] transition-all duration-300 ${
                  isHovered ? 'opacity-100' : 'opacity-0'
                }`} />

                {/* 1. TOP: 3D Visual Illustration Frame */}
                <div className="p-4 sm:p-5 pb-0">
                  <div className="relative rounded-2xl overflow-hidden border border-[#E7E3DA] bg-white aspect-[16/10] shadow-xs group-hover:shadow-sm transition-all">
                    <img
                      src={pillar.image}
                      alt={pillar.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-106"
                      loading="lazy"
                    />
                    
                    {/* Floating Step Badge */}
                    <div className="absolute top-3 left-3 bg-[#0B192C]/90 backdrop-blur-md text-white px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold tracking-wider">
                      PILLAR {pillar.step}
                    </div>

                    {/* Live Metric Pill */}
                    <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-md border border-[#E7E3DA] text-[#0B192C] px-2.5 py-1 rounded-lg text-[10.5px] font-mono font-bold flex items-center gap-1.5 shadow-xs">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                      <span>{pillar.metric}</span>
                    </div>
                  </div>
                </div>

                {/* 2. MIDDLE: Architecture Title & Description */}
                <div className="p-6 sm:p-7 flex-1 space-y-4">
                  <div>
                    <span className="text-[10.5px] font-mono font-bold uppercase tracking-wider text-[#FF5500] bg-orange-50 border border-orange-200/80 px-2.5 py-0.5 rounded-md">
                      {pillar.badge}
                    </span>
                    
                    <h3 className="text-xl sm:text-2xl font-bold text-[#0B192C] mt-2.5 group-hover:text-[#FF5500] transition-colors leading-snug">
                      {pillar.title}
                    </h3>

                    <div className="text-xs font-mono font-semibold text-[#707887] mt-0.5">
                      {pillar.subtitle}
                    </div>

                    <p className="text-xs sm:text-sm text-[#475569] mt-2 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>

                  {/* 3. Deliverables / Technical Checklist */}
                  <div className="space-y-2 pt-3 border-t border-[#E7E3DA]">
                    {pillar.points.map((point, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs font-mono text-[#0B192C]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#FF5500] shrink-0 mt-0.5" />
                        <span className="leading-snug">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 4. BOTTOM: Card Footer Status Bar */}
                <div className="px-6 py-4 border-t border-[#E7E3DA] bg-white/60 group-hover:bg-white flex items-center justify-between text-xs font-mono transition-colors">
                  <span className="text-[#707887] flex items-center gap-1">
                    <Lock className="w-3 h-3 text-[#FF5500]" />
                    <span>{pillar.sla}</span>
                  </span>
                  
                  <span className="text-[#FF5500] font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>Explore Rail</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
