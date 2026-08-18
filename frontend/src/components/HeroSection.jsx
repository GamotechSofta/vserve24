import React, { useEffect, useState } from 'react';
import { 
  ArrowRight, Building2, Sliders, Headphones, Activity, 
  ShieldCheck, CheckCircle2, Zap, Gamepad2, TrendingUp, 
  ChevronLeft, ChevronRight, Sparkles 
} from 'lucide-react';
import banner01Img from '../assets/desktopbanner01.png';
import banner02Img from '../assets/desktopbanner02.png';
import banner03Img from '../assets/desktopbanner03.png';

/* ─── prefers-reduced-motion hook ───────────────────────────────── */
function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(mq.matches);
    const h = (e) => setReduced(e.matches);
    mq.addEventListener('change', h);
    return () => mq.removeEventListener('change', h);
  }, []);
  return reduced;
}

/* ─── Payment Intelligence Network ──────────────────────────────── */
/*
  viewBox 640 × 500
  Five nodes: Merchant → Hub → Risk / Processing → Settlement
  Theme: Exact Logo Colors (Deep Navy #0B192C + Electric Orange #FF5500)
*/
const NODES = [
  { 
    id: 'merchant',   
    x: 68,  y: 250, r: 18, 
    label: 'MERCHANT',   
    sub: 'Authorization',
    detail: 'Terminal & POS Gateway Connection'
  },
  { 
    id: 'hub',        
    x: 264, y: 250, r: 34, 
    label: 'VSERVE24',   
    sub: 'Gateway Core',
    detail: 'Direct Bank Underwriting & API Router'
  },
  { 
    id: 'risk',       
    x: 450, y: 132, r: 18, 
    label: 'RISK CHECK', 
    sub: 'Intelligence',
    detail: 'AI Chargeback Shield & Fraud Filter'
  },
  { 
    id: 'processing', 
    x: 450, y: 368, r: 18, 
    label: 'PROCESSING', 
    sub: 'Clearing',
    detail: 'Multi-Acquirer Global Clearing Rail'
  },
  { 
    id: 'settlement', 
    x: 592, y: 250, r: 22, 
    label: 'SETTLEMENT', 
    sub: 'Completed',
    detail: 'Automated Daily Merchant Payouts'
  },
];

const EDGES = [
  'M 68,250 L 264,250',
  'M 264,250 C 336,250 382,132 450,132',
  'M 264,250 C 336,250 382,368 450,368',
  'M 450,132 C 514,132 558,198 592,250',
  'M 450,368 C 514,368 558,302 592,250',
];
const TX_A = 'M 68,250 L 264,250 C 336,250 382,132 450,132 C 514,132 558,198 592,250';
const TX_B = 'M 68,250 L 264,250 C 336,250 382,368 450,368 C 514,368 558,302 592,250';

function PaymentNetwork({ reduced }) {
  const [hoveredNode, setHoveredNode] = useState(null);
  const [txIndex, setTxIndex] = useState(0);

  const liveEvents = [
    { label: '🎮 iGaming Instant Deposit:', amount: '₹25,000.00', speed: '✓ 58ms AUTH', rail: 'Direct Domestic MID' },
    { label: '📈 Forex Trader Margin Fund:', amount: '₹1,50,000.00', speed: '✓ 74ms SETTLED', rail: 'IMPS/NEFT Rail' },
    { label: '⚡ Crypto Platform On-Ramp:', amount: '₹85,000.00', speed: '✓ 61ms AUTH', rail: '3DS 2.2 Frictionless' },
    { label: '🏆 Esports Tournament Payout:', amount: '₹45,000.00', speed: '✓ 52ms BATCH', rail: 'Instant Player Credit' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setTxIndex((prev) => (prev + 1) % liveEvents.length);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  const currentTx = liveEvents[txIndex];

  return (
    <div className="relative w-full flex flex-col items-center justify-center h-full select-none">
      
      {/* ── Top Live Network Telemetry Pill ── */}
      <div 
        className="mb-2 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-slate-200/80 shadow-sm backdrop-blur-md text-[10px] tracking-wide text-slate-700 transition-all font-medium"
        style={{ animation: 'fadeIn 0.6s ease-out' }}
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        <span className="font-bold text-[#0B192C]">LIVE NETWORK ACTIVE</span>
        <span className="text-slate-300">•</span>
        <span className="text-slate-500">99.999% Direct Rail</span>
      </div>

      {/* Subtle hub glow - matching brand orange */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          top: '50%', left: '42%',
          transform: 'translate(-50%,-50%)',
          width: '460px', height: '460px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,85,0,0.08) 0%, transparent 68%)',
          pointerEvents: 'none',
        }}
      />

      <svg
        viewBox="0 0 640 500"
        className="w-full h-auto relative z-10"
        style={{ display: 'block', maxHeight: '580px', width: '100%' }}
        aria-label="Payment intelligence network — Merchant to Settlement flow"
        role="img"
      >
        <defs>
          {/* Intense particle glow filter */}
          <filter id="v24-intense-glow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="4" result="b1" />
            <feGaussianBlur stdDeviation="2" result="b2" />
            <feMerge>
              <feMergeNode in="b1" />
              <feMergeNode in="b2" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Node drop shadow */}
          <filter id="v24-nshadow" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy="3" stdDeviation="6" floodColor="#0B192C" floodOpacity="0.09" />
          </filter>

          <radialGradient id="v24-hub-fill" cx="50%" cy="35%" r="65%">
            <stop offset="0%"   stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#F1F5F9" />
          </radialGradient>
          <radialGradient id="v24-node-fill" cx="50%" cy="35%" r="65%">
            <stop offset="0%"   stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#F8FAFC" />
          </radialGradient>

          <path id="v24-pa" d={TX_A} fill="none" />
          <path id="v24-pb" d={TX_B} fill="none" />
        </defs>

        {/* ── Background depth circles ── */}
        <circle cx="264" cy="250" r="180" fill="none" stroke="#0B192C" strokeWidth="0.5" strokeOpacity="0.06" />
        <circle cx="264" cy="250" r="275" fill="none" stroke="#0B192C" strokeWidth="0.4" strokeOpacity="0.035" />

        {/* Slow rotating geometric radar ring around hub */}
        {!reduced && (
          <g style={{ transformOrigin: '264px 250px' }}>
            <circle
              cx="264" cy="250" r="112"
              fill="none"
              stroke="#0B192C"
              strokeWidth="0.6"
              strokeOpacity="0.09"
              strokeDasharray="4 14"
            >
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 264 250"
                to="360 264 250"
                dur="30s"
                repeatCount="indefinite"
              />
            </circle>
          </g>
        )}

        {/* Hub crosshair ticks */}
        {[[264,195,264,208],[264,292,264,305],[208,250,221,250],[307,250,320,250]].map(([x1,y1,x2,y2],i)=>(
          <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#0B192C" strokeWidth="0.8" strokeOpacity="0.14" />
        ))}

        {/* ── Base edge architectural lines ── */}
        {EDGES.map((d,i)=>(
          <path key={i} d={d} fill="none" stroke="#0B192C" strokeWidth="1" strokeOpacity="0.12" />
        ))}

        {/* ── Static Orange Accent paths ── */}
        <path d={TX_A} fill="none" stroke="#FF5500" strokeWidth="1.2" strokeOpacity="0.35" />
        <path d={TX_B} fill="none" stroke="#FF5500" strokeWidth="1.0" strokeOpacity="0.22" />

        {/* ── Animated Continuous Energy Pulse Beams (Dash Streams) ── */}
        {!reduced && (
          <>
            {/* Route A flowing beam */}
            <path
              d={TX_A}
              fill="none"
              stroke="#FF5500"
              strokeWidth="2.2"
              strokeDasharray="16 110"
              strokeLinecap="round"
              strokeOpacity="0.80"
              filter="url(#v24-intense-glow)"
            >
              <animate
                attributeName="stroke-dashoffset"
                from="252"
                to="0"
                dur="3.2s"
                repeatCount="indefinite"
              />
            </path>

            {/* Route B flowing beam (offset) */}
            <path
              d={TX_B}
              fill="none"
              stroke="#FF5500"
              strokeWidth="1.8"
              strokeDasharray="14 130"
              strokeLinecap="round"
              strokeOpacity="0.70"
              filter="url(#v24-intense-glow)"
            >
              <animate
                attributeName="stroke-dashoffset"
                from="288"
                to="0"
                dur="3.6s"
                begin="1.6s"
                repeatCount="indefinite"
              />
            </path>
          </>
        )}

        {/* Mid-path architectural ticks */}
        <line x1="166" y1="244" x2="166" y2="256" stroke="#0B192C" strokeWidth="0.8" strokeOpacity="0.18" />
        <line x1="345" y1="184" x2="351" y2="178" stroke="#0B192C" strokeWidth="0.7" strokeOpacity="0.14" />
        <line x1="345" y1="316" x2="351" y2="322" stroke="#0B192C" strokeWidth="0.7" strokeOpacity="0.14" />
        <line x1="524" y1="214" x2="530" y2="220" stroke="#0B192C" strokeWidth="0.7" strokeOpacity="0.14" />
        <line x1="524" y1="286" x2="530" y2="280" stroke="#0B192C" strokeWidth="0.7" strokeOpacity="0.14" />

        {/* ── Process State Indicator Badges with Live Status ── */}
        {/* RISK CHECK badge */}
        <g>
          <rect x="382" y="60" width="136" height="24" rx="12"
            fill="#FFFFFF" stroke="#0B192C" strokeWidth="0.6" strokeOpacity="0.18" filter="url(#v24-nshadow)" />
          <circle cx="396" cy="72" r="3" fill="#10B981">
            {!reduced && (
              <animate attributeName="opacity" values="1;0.3;1" dur="1.8s" repeatCount="indefinite" />
            )}
          </circle>
          <text x="450" y="76" textAnchor="middle" fontSize="7.5"
            fontFamily="ui-monospace, 'Cascadia Code', monospace"
            fontWeight="700" letterSpacing="0.12em" fill="#0B192C" fillOpacity="0.85">
            RISK CHECK: PASSED
          </text>
        </g>

        {/* PROCESSING badge */}
        <g>
          <rect x="382" y="434" width="136" height="24" rx="12"
            fill="#FFFFFF" stroke="#0B192C" strokeWidth="0.6" strokeOpacity="0.18" filter="url(#v24-nshadow)" />
          <circle cx="396" cy="446" r="3" fill="#FF5500">
            {!reduced && (
              <animate attributeName="opacity" values="1;0.4;1" dur="1.5s" repeatCount="indefinite" />
            )}
          </circle>
          <text x="450" y="450" textAnchor="middle" fontSize="7.5"
            fontFamily="ui-monospace, 'Cascadia Code', monospace"
            fontWeight="700" letterSpacing="0.12em" fill="#0B192C" fillOpacity="0.85">
            PROCESSING: ACTIVE
          </text>
        </g>

        {/* ── Expanding Radar Pulse Ripples on Hub & Settlement ── */}
        {!reduced && (
          <>
            {/* Hub expanding radar ripple */}
            <circle cx="264" cy="250" r="34" fill="none" stroke="#FF5500" strokeWidth="1.2">
              <animate attributeName="r" values="34;66" dur="2.8s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.45;0" dur="2.8s" repeatCount="indefinite" />
            </circle>

            {/* Settlement expanding radar ripple */}
            <circle cx="592" cy="250" r="22" fill="none" stroke="#FF5500" strokeWidth="1">
              <animate attributeName="r" values="22;48" dur="2.8s" begin="1.4s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.40;0" dur="2.8s" begin="1.4s" repeatCount="indefinite" />
            </circle>
          </>
        )}

        {/* ── Interactive Nodes ── */}
        {NODES.map((n) => {
          const isHub  = n.id === 'hub';
          const isSett = n.id === 'settlement';
          const isHovered = hoveredNode === n.id;

          return (
            <g 
              key={n.id} 
              filter="url(#v24-nshadow)" 
              className="cursor-pointer transition-all duration-200"
              onMouseEnter={() => setHoveredNode(n.id)}
              onMouseLeave={() => setHoveredNode(null)}
            >
              {/* Outermost decorative ring */}
              <circle cx={n.x} cy={n.y} r={n.r + (isHub ? 15 : 10)}
                fill="none"
                stroke={isHovered ? '#FF5500' : (isHub ? '#FF5500' : '#0B192C')}
                strokeWidth={isHovered ? '1.5' : (isHub ? '1' : '0.5')}
                strokeOpacity={isHovered ? 0.6 : (isHub ? 0.32 : 0.08)}
                strokeDasharray={isHub ? '4 6' : '2 5'} 
              />

              {/* Main node body */}
              <circle cx={n.x} cy={n.y} r={n.r}
                fill={isHub ? 'url(#v24-hub-fill)' : 'url(#v24-node-fill)'}
                stroke={isHovered ? '#FF5500' : '#0B192C'}
                strokeWidth={isHovered ? '1.8' : (isHub ? '1.3' : '0.8')}
                strokeOpacity={isHovered ? 0.8 : (isHub ? 0.28 : 0.16)} 
              />

              {/* Hub interior system with Logo colors */}
              {isHub && (<>
                <circle cx={n.x} cy={n.y} r={19} fill="none" stroke="#0B192C" strokeWidth="0.6" strokeOpacity="0.15" />
                <circle cx={n.x} cy={n.y} r={11} fill="none" stroke="#FF5500" strokeWidth="0.9" strokeOpacity="0.45" />
                <circle cx={n.x} cy={n.y} r={7.5}  fill="#0B192C" fillOpacity="0.95" />
                {/* Breathing Core */}
                <circle cx={n.x} cy={n.y} r={3.2} fill="#FF5500" fillOpacity="1">
                  {!reduced && (
                    <animate attributeName="r" values="3.2;4.2;3.2" dur="2.4s" repeatCount="indefinite" />
                  )}
                </circle>
              </>)}

              {/* Settlement Orange ring */}
              {isSett && (<>
                <circle cx={n.x} cy={n.y} r={n.r + 6}
                  fill="none" stroke="#FF5500" strokeWidth="1" strokeOpacity="0.42" />
                <circle cx={n.x} cy={n.y} r={6} fill="#0B192C" fillOpacity="0.85" />
              </>)}

              {/* Regular nodes inner dot */}
              {!isHub && !isSett && (
                <circle cx={n.x} cy={n.y} r={4.5} fill={isHovered ? '#FF5500' : '#0B192C'} fillOpacity={isHovered ? 0.9 : 0.55} />
              )}

              {/* Label */}
              <text x={n.x} y={n.y + n.r + (isHub ? 22 : 18)}
                textAnchor="middle"
                fontSize={isHub ? '9.5' : '8.5'}
                fontFamily="ui-monospace, 'Cascadia Code', monospace"
                fontWeight="700" letterSpacing="0.15em"
                fill={isHovered ? '#FF5500' : '#0B192C'} 
                fillOpacity="0.88">
                {n.label}
              </text>
              <text x={n.x} y={n.y + n.r + (isHub ? 34 : 29)}
                textAnchor="middle" fontSize="7"
                fontFamily="ui-monospace, monospace" letterSpacing="0.06em"
                fill="#475569" fillOpacity="0.68">
                {n.sub}
              </text>
            </g>
          );
        })}

        {/* Connection endpoint squares */}
        {[{x:68,y:250},{x:450,y:132},{x:450,y:368},{x:592,y:250}].map((pt,i)=>(
          <rect key={i} x={pt.x-2.5} y={pt.y-2.5} width="5" height="5"
            fill="#0B192C" fillOpacity="0.14" rx="0.8" />
        ))}

        {/* ── Multi-Particle High-Speed Transaction Stream ── */}
        {!reduced && (<>
          {/* Primary Main Packet — Route A */}
          <circle r="5.2" fill="#FF5500" fillOpacity="0" filter="url(#v24-intense-glow)">
            <animateMotion dur="4.8s" repeatCount="indefinite" begin="0s"
              calcMode="spline" keySplines="0.42 0 0.58 1">
              <mpath href="#v24-pa" />
            </animateMotion>
            <animate attributeName="fill-opacity"
              values="0;1;1;1;1;0"
              keyTimes="0;0.05;0.40;0.90;0.97;1"
              dur="4.8s" repeatCount="indefinite" begin="0s" />
          </circle>

          {/* Primary Main Packet — Route B */}
          <circle r="4.6" fill="#FF5500" fillOpacity="0" filter="url(#v24-intense-glow)">
            <animateMotion dur="4.8s" repeatCount="indefinite" begin="2.4s"
              calcMode="spline" keySplines="0.42 0 0.58 1">
              <mpath href="#v24-pb" />
            </animateMotion>
            <animate attributeName="fill-opacity"
              values="0;0.95;0.95;0.95;0.95;0"
              keyTimes="0;0.05;0.40;0.90;0.97;1"
              dur="4.8s" repeatCount="indefinite" begin="2.4s" />
          </circle>

          {/* Fast Stream Micro Packet — Route A */}
          <circle r="3.2" fill="#FF7733" fillOpacity="0" filter="url(#v24-intense-glow)">
            <animateMotion dur="4.8s" repeatCount="indefinite" begin="0.8s">
              <mpath href="#v24-pa" />
            </animateMotion>
            <animate attributeName="fill-opacity"
              values="0;0.80;0.80;0.80;0.80;0"
              keyTimes="0;0.08;0.42;0.90;0.96;1"
              dur="4.8s" repeatCount="indefinite" begin="0.8s" />
          </circle>

          {/* Fast Stream Micro Packet — Route B */}
          <circle r="2.8" fill="#FF7733" fillOpacity="0" filter="url(#v24-intense-glow)">
            <animateMotion dur="4.8s" repeatCount="indefinite" begin="3.2s">
              <mpath href="#v24-pb" />
            </animateMotion>
            <animate attributeName="fill-opacity"
              values="0;0.75;0.75;0.75;0.75;0"
              keyTimes="0;0.08;0.42;0.90;0.96;1"
              dur="4.8s" repeatCount="indefinite" begin="3.2s" />
          </circle>

          {/* Comet Tail Tracer — Route A */}
          <circle r="2" fill="#FFA366" fillOpacity="0">
            <animateMotion dur="4.8s" repeatCount="indefinite" begin="0.15s">
              <mpath href="#v24-pa" />
            </animateMotion>
            <animate attributeName="fill-opacity"
              values="0;0.55;0.55;0.55;0.55;0"
              keyTimes="0;0.08;0.42;0.90;0.96;1"
              dur="4.8s" repeatCount="indefinite" begin="0.15s" />
          </circle>

          {/* Comet Tail Tracer — Route B */}
          <circle r="1.8" fill="#FFA366" fillOpacity="0">
            <animateMotion dur="4.8s" repeatCount="indefinite" begin="2.55s">
              <mpath href="#v24-pb" />
            </animateMotion>
            <animate attributeName="fill-opacity"
              values="0;0.50;0.50;0.50;0.50;0"
              keyTimes="0;0.08;0.42;0.90;0.96;1"
              dur="4.8s" repeatCount="indefinite" begin="2.55s" />
          </circle>
        </>)}
      </svg>

      {/* ── Interactive Node Details & Live Gaming/Trading Telemetry ── */}
      <div className="mt-2 w-full pt-2 border-t border-[#E7E3DA] flex flex-col gap-1.5">
        <div className="flex items-center justify-between text-[10px] text-slate-500 font-medium">
          <span className="flex items-center gap-1 text-emerald-600 font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
            LIVE TELEMETRY STREAM:
          </span>
          <span className="font-semibold text-slate-600">Sub-80ms Routing</span>
        </div>

        <div className="bg-slate-50 border border-slate-200/80 rounded-xl px-3 py-1.5 flex items-center justify-between text-[11px] overflow-hidden min-h-[34px]">
          {hoveredNode ? (
            <div className="font-medium text-slate-700 transition-all animate-in fade-in">
              <span className="text-[#FF5500] font-bold">NODE: </span>
              {NODES.find(n => n.id === hoveredNode)?.detail}
            </div>
          ) : (
            <div key={txIndex} className="flex items-center justify-between w-full font-semibold text-slate-700 transition-all duration-300 animate-in fade-in slide-in-from-bottom-1">
              <span className="flex items-center gap-1.5 text-[#0B192C]">
                <span>{currentTx.label}</span>
                <span className="text-[#FF5500] font-bold">{currentTx.amount}</span>
              </span>
              <div className="flex items-center gap-1.5">
                <span className="text-[9.5px] text-slate-500 hidden sm:inline">{currentTx.rail}</span>
                <span className="text-[10px] text-emerald-600 bg-emerald-50 border border-emerald-200 px-1.5 py-0.5 rounded font-mono font-bold">
                  {currentTx.speed}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>

    </div>
  );
}

/* ─── Hero Promo Banners (Gaming, Trading & Dispute Shield) ──────── */
const HERO_SLIDES = [
  {
    id: 'gaming',
    image: banner01Img,
    tag: '🎮 Gaming & Esports Payment Gateway',
    title: 'Gaming & Esports Payment Gateway — Dedicated High-Risk MIDs',
    shortLabel: 'Gaming & Esports',
    ctaText: 'Get Gaming MIDs',
    accentColor: '#FF5500',
    borderGlow: 'border-orange-500/40 shadow-orange-500/10 ring-1 ring-orange-500/20',
  },
  {
    id: 'trading',
    image: banner02Img,
    tag: '📈 Forex & Crypto Trading Rails',
    title: 'Forex & Crypto Trading Payment Gateway — Direct Bank Rails',
    shortLabel: 'Forex & Crypto',
    ctaText: 'Get Trading Rails',
    accentColor: '#0284C7',
    borderGlow: 'border-cyan-500/40 shadow-cyan-500/10 ring-1 ring-cyan-500/20',
  },
  {
    id: 'defense',
    image: banner03Img,
    tag: '⚡ Smart Cascading & RDR Dispute Shield',
    title: 'Smart Acquirer Cascading & RDR Shield — Deflect 90% Chargebacks',
    shortLabel: 'Dispute & RDR Shield',
    ctaText: 'Protect Your Business',
    accentColor: '#10B981',
    borderGlow: 'border-emerald-500/40 shadow-emerald-500/10 ring-1 ring-emerald-500/20',
  }
];

/* ─── Hero ───────────────────────────────────────────────────────── */
export default function HeroSection({ onOpenApplication }) {
  const reduced = usePrefersReducedMotion();
  const [activeSlide, setActiveSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [isSwiping, setIsSwiping] = useState(false);

  // Auto-scroll banners every 5s (pauses on desktop hover)
  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isHovered, activeSlide]);

  // Mobile Hand Swipe Gestures
  const handleTouchStart = (e) => {
    setIsSwiping(false);
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
    if (touchStart && Math.abs(touchStart - e.targetTouches[0].clientX) > 10) {
      setIsSwiping(true);
    }
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > 35) {
      // Swipe left ➡️ Next Slide
      setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    } else if (distance < -35) {
      // Swipe right ⬅️ Previous Slide
      setActiveSlide((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1));
    }
    setTimeout(() => setIsSwiping(false), 80);
  };

  const handleBannerClick = () => {
    if (!isSwiping && onOpenApplication) {
      onOpenApplication();
    }
  };

  const currentSlide = HERO_SLIDES[activeSlide];

  return (
    <section
      style={{
        background: '#FCFBF8',
        position: 'relative',
        overflow: 'hidden',
        minHeight: 'calc(100vh - 80px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      {/* Subtle Engineering Dot Grid Texture */}
      <div 
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: 'radial-gradient(#0B192C 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* Ambient radial warmth behind right visual */}
      <div
        aria-hidden
        style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'radial-gradient(ellipse 55% 55% at 75% 48%, rgba(255,85,0,0.045) 0%, transparent 70%)',
        }}
      />

      {/* ════ WIDE CONTAINER ══════════════════════════════════════
          max-width: 1400px (Golden Proportion Layout)
      ═══════════════════════════════════════════════════════════ */}
      <div
        className="px-4 sm:px-8 lg:px-12 relative z-10 w-full flex-1 flex flex-col justify-between"
        style={{ maxWidth: '1400px', margin: '0 auto' }}
      >

        {/* ════ TOP HERO DYNAMIC BANNER SLIDER (BANNER01, BANNER02, BANNER03) ════ */}
        <div 
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="w-full pt-3 sm:pt-4 pb-2 relative z-20"
        >
          {/* Banner Outer Card */}
          <div className={`relative group overflow-hidden rounded-2xl sm:rounded-3xl border ${currentSlide.borderGlow || 'border-orange-500/40'} bg-white shadow-xl transition-all duration-500 select-none`}>
            {/* Clickable Banner Canvas with Touch Swipe */}
            <div 
              onClick={handleBannerClick}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              className="relative w-full cursor-pointer overflow-hidden block h-[190px] sm:h-[245px] md:h-[285px] bg-slate-950 touch-pan-y"
              title="Click to apply or talk to an underwriting specialist"
            >
              {HERO_SLIDES.map((slide, idx) => (
                <div
                  key={slide.id}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                    activeSlide === idx ? 'opacity-100 z-10 scale-100' : 'opacity-0 z-0 pointer-events-none scale-[1.006]'
                  }`}
                >
                  <img
                    src={slide.image}
                    alt={slide.title}
                    draggable="false"
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.012] pointer-events-none"
                    loading={idx === 0 ? 'eager' : 'lazy'}
                  />
                </div>
              ))}

              {/* Subtle Gradient Bottom Vignette (Desktop only) */}
              <div className="hidden sm:block absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-black/45 via-black/15 to-transparent pointer-events-none z-15" />
            </div>

            {/* Bottom Floating Selector Pills (Desktop only - Hidden on Mobile) */}
            <div className="hidden sm:flex absolute bottom-2 sm:bottom-3.5 left-1/2 -translate-x-1/2 z-20 items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-1.5 rounded-full bg-black/55 backdrop-blur-md border border-white/15 shadow-md">
              {HERO_SLIDES.map((slide, idx) => (
                <button
                  key={slide.id}
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveSlide(idx);
                  }}
                  className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] sm:text-[11px] font-bold transition-all duration-200 cursor-pointer ${
                    activeSlide === idx
                      ? 'bg-white text-[#0B192C] shadow-sm'
                      : 'text-white/75 hover:text-white hover:bg-white/15'
                  }`}
                  aria-label={`Go to slide ${idx + 1}: ${slide.shortLabel}`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full transition-colors ${activeSlide === idx ? 'bg-[#FF5500]' : 'bg-white/40'}`} />
                  <span className="hidden xs:inline">{slide.shortLabel}</span>
                  <span className="xs:hidden">{idx + 1}</span>
                </button>
              ))}
            </div>

            {/* Top-Right Badge: Live Carousel Tracker (Desktop only) */}
            <div className="absolute top-2.5 right-3 z-20 hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/45 backdrop-blur-md border border-white/15 text-[10px] text-white/90 font-medium tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>{activeSlide + 1} / {HERO_SLIDES.length}</span>
            </div>
          </div>
        </div>

        {/* ════ HERO MAIN GRID ═══════════════════════════════════ */}
        <div
          className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.95fr)] items-center flex-1 py-3 sm:py-5 lg:py-6"
          style={{
            columnGap: 'clamp(24px, 3vw, 48px)',
          }}
        >

          {/* ══ LEFT COLUMN ════════════════════════════════════ */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              justifyContent: 'center',
            }}
          >
            {/* Eyebrow with refined pill (Hidden on Mobile View) */}
            <div
              className="hidden sm:inline-flex items-center gap-1.5 sm:gap-2 bg-orange-50/90 border border-orange-200/80 px-3 py-1 rounded-full shadow-xs backdrop-blur-sm mb-3 sm:mb-4"
            >
              <span className="w-2 h-2 rounded-full bg-[#FF5500] shrink-0 animate-pulse" />
              <span className="text-[10px] sm:text-[10.5px] font-bold tracking-wider uppercase text-slate-800">
                🎮 Gaming &amp; 📈 Trading Direct Payment Gateway <span className="text-orange-300 font-light mx-1">•</span> 24h MIDs
              </span>
            </div>

            {/* ── HEADLINE (Proportioned for crisp 100% Zoom) ── */}
            <h1
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: 'clamp(26px, 3.6vw, 48px)',
                fontWeight: 750,
                letterSpacing: '-0.024em',
                lineHeight: 1.12,
                color: '#0B192C',
                hyphens: 'none',
                overflowWrap: 'normal',
                wordBreak: 'keep-all',
                marginBottom: 'clamp(12px, 1.5vh, 16px)',
              }}
            >
              <span className="lg:block lg:whitespace-nowrap">
                High-risk payment
              </span>
              <span className="inline lg:hidden"> </span>
              <span className="lg:block lg:whitespace-nowrap">
                gateway built for
              </span>
              <span className="inline lg:hidden"> </span>
              <span
                className="lg:block lg:whitespace-nowrap"
                style={{ color: '#FF5500', fontWeight: 800 }}
              >
                Gaming &amp; Trading.
              </span>
            </h1>

            {/* Description */}
            <p
              style={{
                fontSize: 'clamp(13.5px, 0.95vw, 15.5px)',
                color: '#475569',
                lineHeight: 1.58,
                maxWidth: '560px',
                fontWeight: 400,
                marginBottom: 'clamp(14px, 1.6vh, 18px)',
              }}
            >
              Dedicated Tier-1 merchant accounts for <strong>iGaming, Esports, Forex &amp; Crypto Trading</strong> platforms. Process instant high-volume player deposits &amp; trader payouts with sub-80ms authorization, zero aggregator freezes, and automated dispute defense.
            </p>

            {/* Quick Industry Feature Badges */}
            <div className="flex flex-wrap items-center gap-2 mb-5 sm:mb-6 w-full">
              <div className="inline-flex items-center gap-2 px-2.5 py-1.5 rounded-xl bg-white border border-[#E7E3DA] text-[11px] sm:text-xs font-semibold text-[#0B192C] shadow-2xs">
                <span className="w-5 h-5 rounded-lg bg-orange-50 border border-orange-200/80 flex items-center justify-center text-[#FF5500] shrink-0">
                  <Gamepad2 className="w-3.5 h-3.5" />
                </span>
                <span>iGaming &amp; Esports MIDs</span>
              </div>

              <div className="inline-flex items-center gap-2 px-2.5 py-1.5 rounded-xl bg-white border border-[#E7E3DA] text-[11px] sm:text-xs font-semibold text-[#0B192C] shadow-2xs">
                <span className="w-5 h-5 rounded-lg bg-blue-50 border border-blue-200/80 flex items-center justify-center text-blue-600 shrink-0">
                  <TrendingUp className="w-3.5 h-3.5" />
                </span>
                <span>Forex &amp; Crypto Rails</span>
              </div>

              <div className="inline-flex items-center gap-2 px-2.5 py-1.5 rounded-xl bg-emerald-50/90 border border-emerald-200 text-[11px] sm:text-xs font-bold text-[#10B981] shadow-2xs">
                <span className="w-5 h-5 rounded-lg bg-emerald-100/90 border border-emerald-300/80 flex items-center justify-center text-[#10B981] shrink-0">
                  <Zap className="w-3.5 h-3.5" />
                </span>
                <span>Sub-80ms Live Deposits</span>
              </div>
            </div>

            {/* CTA Buttons - Full Width on Mobile */}
            <div
              className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 mb-5 sm:mb-6"
            >
              {/* Primary — Brand Electric Orange */}
              <button
                onClick={onOpenApplication}
                className="group relative overflow-hidden flex items-center justify-center gap-2 cursor-pointer transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 shadow-md shadow-orange-500/25 py-3 px-5.5 rounded-xl bg-[#FF5500] hover:bg-[#E64A00] text-white font-bold text-xs sm:text-sm tracking-wide"
              >
                <span>Get Gaming / Trading MID</span>
                <ArrowRight
                  className="transition-transform duration-200 group-hover:translate-x-1 w-4 h-4"
                  strokeWidth={2.2}
                />
              </button>

              {/* Secondary — Deep Navy Outline */}
              <button
                onClick={onOpenApplication}
                className="cursor-pointer transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 py-3 px-5 rounded-xl bg-white hover:bg-[#F7F4ED] text-[#0B192C] font-semibold text-xs sm:text-sm tracking-wide border border-[#E7E3DA] text-center shadow-xs"
              >
                Talk to Underwriting Specialist
              </button>
            </div>

            {/* Trust row */}
            <div
              style={{
                paddingTop: 'clamp(14px, 2vh, 20px)',
                borderTop: '1px solid rgba(11, 25, 44, 0.09)',
                width: '100%',
              }}
            >
              <p
                style={{
                  fontSize: '9.5px',
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  color: '#475569',
                  opacity: 0.65,
                  marginBottom: '10px',
                  fontWeight: 600
                }}
              >
                Gaming &amp; Trading Settlement Rails Supported
              </p>
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  gap: '16px 24px',
                  opacity: 0.55,
                }}
              >
                <span style={{ fontSize: '17px', fontWeight: 900, fontFamily: 'Georgia, "Times New Roman", serif', color: '#0B192C', letterSpacing: '0.06em' }}>
                  VISA
                </span>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{ width: '16px', height: '16px', borderRadius: '50%', background: '#0B192C' }} />
                  <div style={{ width: '16px', height: '16px', borderRadius: '50%', background: '#475569', marginLeft: '-6px' }} />
                  <span className="inline" style={{ fontSize: '10px', fontWeight: 700, color: '#0B192C', marginLeft: '5px', letterSpacing: '0.04em' }}>mastercard</span>
                </div>
                <span style={{ fontSize: '11px', fontWeight: 700, color: '#0B192C', letterSpacing: '0.10em' }}>DISCOVER</span>
                <span style={{ fontSize: '9px', fontWeight: 700, color: '#0B192C', border: '0.8px solid rgba(11, 25, 44, 0.55)', borderRadius: '3px', padding: '2px 6px', letterSpacing: '0.06em' }}>AMEX</span>
                <span style={{ fontSize: '9.5px', fontWeight: 700, fontFamily: "'Plus Jakarta Sans', sans-serif", color: '#0B192C', letterSpacing: '0.08em' }}>SEPA / ACH / CRYPTO</span>
              </div>
            </div>
          </div>

          {/* ══ RIGHT COLUMN — Payment Intelligence Network ════ */}
          <div
            className="mt-6 lg:mt-0 bg-[#FFFFFF] border border-[#E7E3DA] rounded-3xl p-3.5 sm:p-5 shadow-sm relative"
            style={{
              minHeight: 'clamp(280px, 32vw, 420px)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
            }}
          >
            {/* Top Status Header */}
            <div className="w-full flex items-center justify-between pb-2 mb-2 border-b border-[#E7E3DA] text-[10.5px] text-[#707887]">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                <span className="font-bold text-[#0B192C]">GAMING &amp; TRADING PROCESSING ENGINE</span>
              </div>
              <span className="text-[#FF5500] font-semibold">Tier-1 Direct Rails</span>
            </div>

            <PaymentNetwork reduced={reduced} />
          </div>

        </div>

      </div>

      {/* ════ STATS BAR ═════════════════════════════════════════
          Enterprise trust strip (Hidden on mobile)
      ═══════════════════════════════════════════════════════ */}
      <div
        className="w-full relative z-10 hidden sm:block"
        style={{
          borderTop: '1px solid rgba(11, 25, 44, 0.09)',
          background: 'rgba(255, 255, 255, 0.60)',
          backdropFilter: 'blur(8px)',
        }}
      >
        <div
          className="grid grid-cols-1 sm:grid-cols-3 px-6 sm:px-10 lg:px-14"
          style={{ maxWidth: '1560px', margin: '0 auto' }}
        >
          {[
            { icon: Building2,  stat: '100+', label: 'Industries',   desc: 'Custom underwriting for hard-to-place verticals'  },
            { icon: Sliders,    stat: '50+',  label: 'Integrations', desc: 'Gateways, carts, and recurring billing platforms' },
            { icon: Headphones, stat: '24/7', label: 'Support',      desc: 'Onboarding and risk response when you need it'   },
          ].map(({ icon: Icon, stat, label, desc }, i) => (
            <div
              key={i}
              className={`group hover:bg-orange-50/40 transition-colors duration-200 ${i < 2 ? 'border-b sm:border-b-0 sm:border-r' : ''}`}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'clamp(14px, 1.3vw, 20px)',
                padding: 'clamp(18px, 2.2vh, 26px) clamp(14px, 1.8vw, 28px)',
                borderColor: 'rgba(11, 25, 44, 0.08)',
              }}
            >
              <div
                style={{
                  width: 'clamp(34px, 2.4vw, 42px)',
                  height: 'clamp(34px, 2.4vw, 42px)',
                  borderRadius: '7px',
                  background: 'rgba(255, 85, 0, 0.06)',
                  border: '0.8px solid rgba(255, 85, 0, 0.18)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                }}
                className="group-hover:border-orange-400 group-hover:bg-orange-100/60 transition-all duration-200"
              >
                <Icon
                  style={{ width: 'clamp(16px, 1.2vw, 19px)', height: 'clamp(16px, 1.2vw, 19px)', color: '#FF5500', opacity: 0.90 }}
                  strokeWidth={1.8}
                />
              </div>
              <div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px', marginBottom: '2px' }}>
                  <span style={{ fontSize: 'clamp(20px, 1.8vw, 28px)', fontWeight: 800, fontFamily: "'Plus Jakarta Sans', sans-serif", color: '#0B192C', letterSpacing: '-0.01em', lineHeight: 1 }}>
                    {stat}
                  </span>
                  <span style={{ fontSize: 'clamp(13px, 1vw, 16px)', fontWeight: 700, color: '#0B192C', lineHeight: 1 }}>
                    {label}
                  </span>
                </div>
                <p style={{ fontSize: 'clamp(11px, 0.85vw, 13.5px)', color: '#475569', lineHeight: 1.45, margin: 0 }}>
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
