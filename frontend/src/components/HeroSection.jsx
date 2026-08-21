import React, { useEffect, useState } from 'react';
import { 
  ArrowRight, Building2, Sliders, Headphones, Activity, 
  ShieldCheck, CheckCircle2, Zap, Gamepad2, TrendingUp, 
  ChevronLeft, ChevronRight, Sparkles 
} from 'lucide-react';
import banner01Mobile from '../assets/Banner01.png';
import banner02Mobile from '../assets/Banner02.png';
import banner03Mobile from '../assets/Banner03.png';

import banner01Desktop from '../assets/desktopbanner01.png';
import banner02Desktop from '../assets/desktopbanner02.png';
import banner03Desktop from '../assets/desktopbanner03.png';

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
/* ─── Payment Intelligence Network ──────────────────────────────── */
/*
  viewBox 680 × 470
  Exact User Flow:
  
                 PAY-IN / COLLECTION
  USER ─────────► VSERVE24 ─────────► MERCHANT
                                        │
                                        ▼
                                     SETTLED

                 PAYOUT / DISBURSEMENT
  MERCHANT ──────► VSERVE24 ─────────► USER
                                        │
                                        ▼
                                     CREDITED
*/
const NODES = [
  // ── Flow 1: PAY-IN / COLLECTION
  { 
    id: 'user_in',   
    x: 95,  y: 100, r: 20, 
    label: 'USER',   
    sub: 'Payer / Player',
    track: 'payin',
    detail: 'Customer / Player initiates instant deposit via UPI, Cards, QR, NetBanking'
  },
  { 
    id: 'gateway_in',        
    x: 340, y: 100, r: 28, 
    label: 'VSERVE24',   
    sub: 'Gateway Core',
    track: 'payin',
    detail: 'AI Chargeback Shield, 3DS 2.2 Auth & Multi-Acquirer Smart Router (<50ms)'
  },
  { 
    id: 'merchant_in', 
    x: 585, y: 100, r: 20, 
    label: 'MERCHANT', 
    sub: 'Platform Account',
    track: 'payin',
    detail: 'Merchant platform receives verified payment authorization payload'
  },
  {
    id: 'settled_badge',
    x: 585, y: 176,
    isDrop: true,
    label: 'SETTLED',
    sub: 'T+0 Net Bank Funding',
    track: 'payin',
    detail: 'Direct T+0 daily batch bank settlement deposited to merchant business account'
  },

  // ── Flow 2: PAYOUT / DISBURSEMENT
  { 
    id: 'merchant_out',   
    x: 95,  y: 310, r: 20, 
    label: 'MERCHANT',   
    sub: 'Platform API',
    track: 'payout',
    detail: 'Merchant platform initiates automated instant player withdrawal or prize disbursement'
  },
  { 
    id: 'gateway_out',        
    x: 340, y: 310, r: 28, 
    label: 'VSERVE24',   
    sub: 'Gateway Core',
    track: 'payout',
    detail: '24/7 Real-Time IMPS / NEFT Rail, Multi-Bank API & Automated Name Verification'
  },
  { 
    id: 'user_out', 
    x: 585, y: 310, r: 20, 
    label: 'USER', 
    sub: 'End Customer',
    track: 'payout',
    detail: 'Player / Customer bank account or UPI VPA receives instant disbursement'
  },
  {
    id: 'credited_badge',
    x: 585, y: 386,
    isDrop: true,
    label: 'CREDITED',
    sub: 'Instant Cash Receipt',
    track: 'payout',
    detail: 'Instant cash receipt confirmed and credited directly to player account'
  },
];

const TX_PAYIN_PATH  = 'M 95,100 L 340,100 L 585,100 L 585,176';
const TX_PAYOUT_PATH = 'M 95,310 L 340,310 L 585,310 L 585,386';

function PaymentNetwork({ reduced }) {
  const [hoveredNode, setHoveredNode] = useState(null);

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
        <span className="font-bold text-[#0B192C]">LIVE PROCESSING ENGINE ACTIVE</span>
        <span className="text-slate-300">•</span>
        <span className="text-slate-500">Collection &amp; Disbursement Rails</span>
      </div>

      {/* Subtle background glow */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          top: '25%', left: '50%',
          transform: 'translate(-50%,-50%)',
          width: '340px', height: '240px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(16,185,129,0.07) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <div
        aria-hidden
        style={{
          position: 'absolute',
          top: '75%', left: '50%',
          transform: 'translate(-50%,-50%)',
          width: '340px', height: '240px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,85,0,0.07) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <svg
        viewBox="0 0 680 470"
        className="w-full h-auto relative z-10"
        style={{ display: 'block', maxHeight: '580px', width: '100%' }}
        aria-label="Payment Intelligence Network — Pay-In & Pay-Out Processing Flow"
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

          {/* Arrow markers */}
          <marker id="v24-arrow-emerald" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#10B981" fillOpacity="0.9" />
          </marker>
          <marker id="v24-arrow-orange" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#FF5500" fillOpacity="0.9" />
          </marker>

          <path id="v24-tx-payin"  d={TX_PAYIN_PATH}  fill="none" />
          <path id="v24-tx-payout" d={TX_PAYOUT_PATH} fill="none" />
        </defs>

        {/* ── Background Lane Containers ── */}
        {/* Pay-In Container */}
        <rect x="25" y="16" width="630" height="195" rx="16" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="0.9" fillOpacity="0.75" />
        {/* Payout Container */}
        <rect x="25" y="226" width="630" height="195" rx="16" fill="#FFFBF7" stroke="#FED7AA" strokeWidth="0.9" fillOpacity="0.75" />

        {/* ── FLOW 1: PAY-IN / COLLECTION HEADER ── */}
        <g>
          <rect x="240" y="28" width="200" height="26" rx="13" fill="#ECFDF5" stroke="#A7F3D0" strokeWidth="1" filter="url(#v24-nshadow)" />
          <circle cx="256" cy="41" r="3.5" fill="#10B981">
            {!reduced && <animate attributeName="opacity" values="1;0.4;1" dur="1.8s" repeatCount="indefinite" />}
          </circle>
          <text x="344" y="45" textAnchor="middle" fontSize="9.5" fontFamily="ui-monospace, monospace" fontWeight="800" fill="#065F46" letterSpacing="0.14em">
            PAY-IN / COLLECTION
          </text>
        </g>

        {/* ── FLOW 2: PAYOUT / DISBURSEMENT HEADER ── */}
        <g>
          <rect x="230" y="238" width="220" height="26" rx="13" fill="#FFF7ED" stroke="#FFEDD5" strokeWidth="1" filter="url(#v24-nshadow)" />
          <circle cx="246" cy="251" r="3.5" fill="#FF5500">
            {!reduced && <animate attributeName="opacity" values="1;0.4;1" dur="1.6s" repeatCount="indefinite" />}
          </circle>
          <text x="344" y="255" textAnchor="middle" fontSize="9.5" fontFamily="ui-monospace, monospace" fontWeight="800" fill="#9A3412" letterSpacing="0.14em">
            PAYOUT / DISBURSEMENT
          </text>
        </g>

        {/* ── Track 1 Flow Lines: USER ──► VSERVE24 ──► MERCHANT ──► SETTLED ── */}
        {/* User to VServe24 */}
        <line x1="120" y1="100" x2="306" y2="100" stroke="#10B981" strokeWidth="1.8" strokeOpacity="0.45" markerEnd="url(#v24-arrow-emerald)" />
        {/* VServe24 to Merchant */}
        <line x1="372" y1="100" x2="558" y2="100" stroke="#10B981" strokeWidth="1.8" strokeOpacity="0.45" markerEnd="url(#v24-arrow-emerald)" />
        {/* Merchant down to Settled */}
        <line x1="585" y1="124" x2="585" y2="160" stroke="#10B981" strokeWidth="1.8" strokeOpacity="0.55" markerEnd="url(#v24-arrow-emerald)" />

        {/* ── Track 2 Flow Lines: MERCHANT ──► VSERVE24 ──► USER ──► CREDITED ── */}
        {/* Merchant to VServe24 */}
        <line x1="120" y1="310" x2="306" y2="310" stroke="#FF5500" strokeWidth="1.8" strokeOpacity="0.45" markerEnd="url(#v24-arrow-orange)" />
        {/* VServe24 to User */}
        <line x1="372" y1="310" x2="558" y2="310" stroke="#FF5500" strokeWidth="1.8" strokeOpacity="0.45" markerEnd="url(#v24-arrow-orange)" />
        {/* User down to Credited */}
        <line x1="585" y1="334" x2="585" y2="370" stroke="#FF5500" strokeWidth="1.8" strokeOpacity="0.55" markerEnd="url(#v24-arrow-orange)" />

        {/* ── Animated Continuous Flowing Beams ── */}
        {!reduced && (
          <>
            {/* Pay-In Flow Beam */}
            <path
              d={TX_PAYIN_PATH}
              fill="none"
              stroke="#10B981"
              strokeWidth="2.5"
              strokeDasharray="24 110"
              strokeLinecap="round"
              strokeOpacity="0.95"
              filter="url(#v24-intense-glow)"
            >
              <animate attributeName="stroke-dashoffset" from="300" to="0" dur="3.0s" repeatCount="indefinite" />
            </path>

            {/* Payout Flow Beam */}
            <path
              d={TX_PAYOUT_PATH}
              fill="none"
              stroke="#FF5500"
              strokeWidth="2.5"
              strokeDasharray="24 110"
              strokeLinecap="round"
              strokeOpacity="0.95"
              filter="url(#v24-intense-glow)"
            >
              <animate attributeName="stroke-dashoffset" from="300" to="0" dur="3.0s" begin="0.8s" repeatCount="indefinite" />
            </path>
          </>
        )}

        {/* ── Rotating Radar Ripple on VServe24 Cores ── */}
        {!reduced && (
          <>
            <circle cx="340" cy="100" r="28" fill="none" stroke="#10B981" strokeWidth="1">
              <animate attributeName="r" values="28;50" dur="2.5s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.45;0" dur="2.5s" repeatCount="indefinite" />
            </circle>
            <circle cx="340" cy="310" r="28" fill="none" stroke="#FF5500" strokeWidth="1">
              <animate attributeName="r" values="28;50" dur="2.5s" begin="1.2s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.45;0" dur="2.5s" begin="1.2s" repeatCount="indefinite" />
            </circle>
          </>
        )}

        {/* ── Interactive Flow Nodes ── */}
        {NODES.map((n) => {
          const isGateway = n.id.startsWith('gateway');
          const isPayInTrack = n.track === 'payin';
          const isHovered = hoveredNode === n.id;
          const accentColor = isPayInTrack ? '#10B981' : '#FF5500';

          // Render Drop Badges (SETTLED and CREDITED)
          if (n.isDrop) {
            const isSettled = n.id === 'settled_badge';
            return (
              <g 
                key={n.id} 
                className="cursor-pointer transition-all duration-200"
                onMouseEnter={() => setHoveredNode(n.id)}
                onMouseLeave={() => setHoveredNode(null)}
              >
                <rect 
                  x={n.x - 52} 
                  y={n.y - 12} 
                  width="104" 
                  height="26" 
                  rx="13" 
                  fill={isSettled ? '#ECFDF5' : '#FFF7ED'} 
                  stroke={isHovered ? '#0B192C' : accentColor} 
                  strokeWidth={isHovered ? '1.5' : '1'} 
                  filter="url(#v24-nshadow)" 
                />
                <circle cx={n.x - 38} cy={n.y + 1} r="3" fill={accentColor} />
                <text 
                  x={n.x + 4} 
                  y={n.y + 5} 
                  textAnchor="middle" 
                  fontSize="8.5" 
                  fontFamily="ui-monospace, monospace" 
                  fontWeight="800" 
                  fill={isSettled ? '#065F46' : '#9A3412'} 
                  letterSpacing="0.10em"
                >
                  ✓ {n.label}
                </text>
              </g>
            );
          }

          // Render Main Circular Nodes
          return (
            <g 
              key={n.id} 
              filter="url(#v24-nshadow)" 
              className="cursor-pointer transition-all duration-200"
              onMouseEnter={() => setHoveredNode(n.id)}
              onMouseLeave={() => setHoveredNode(null)}
            >
              {/* Outer decorative dashed ring */}
              <circle cx={n.x} cy={n.y} r={n.r + (isGateway ? 10 : 7)}
                fill="none"
                stroke={isHovered ? accentColor : (isGateway ? accentColor : '#0B192C')}
                strokeWidth={isHovered ? '1.5' : (isGateway ? '1.1' : '0.6')}
                strokeOpacity={isHovered ? 0.75 : (isGateway ? 0.40 : 0.12)}
                strokeDasharray={isGateway ? '4 5' : '2 4'} 
              />

              {/* Main node body */}
              <circle cx={n.x} cy={n.y} r={n.r}
                fill={isGateway ? 'url(#v24-hub-fill)' : 'url(#v24-node-fill)'}
                stroke={isHovered ? accentColor : (isGateway ? accentColor : '#0B192C')}
                strokeWidth={isHovered ? '1.8' : (isGateway ? '1.4' : '0.9')}
                strokeOpacity={isHovered ? 0.9 : (isGateway ? 0.45 : 0.25)} 
              />

              {/* Gateway Core Interior */}
              {isGateway && (<>
                <circle cx={n.x} cy={n.y} r={15} fill="none" stroke="#0B192C" strokeWidth="0.6" strokeOpacity="0.15" />
                <circle cx={n.x} cy={n.y} r={8.5} fill="none" stroke={accentColor} strokeWidth="1" strokeOpacity="0.55" />
                <circle cx={n.x} cy={n.y} r={5.5} fill="#0B192C" fillOpacity="0.95" />
                <circle cx={n.x} cy={n.y} r={2.6} fill={accentColor} fillOpacity="1">
                  {!reduced && (
                    <animate attributeName="r" values="2.6;3.5;2.6" dur="2.2s" repeatCount="indefinite" />
                  )}
                </circle>
              </>)}

              {/* Regular Node Inner Dot */}
              {!isGateway && (
                <circle cx={n.x} cy={n.y} r={4.5} fill={isHovered ? accentColor : (isPayInTrack ? '#10B981' : '#FF5500')} fillOpacity={isHovered ? 1 : 0.8} />
              )}

              {/* Node Title Label */}
              <text x={n.x} y={n.y + n.r + (isGateway ? 17 : 15)}
                textAnchor="middle"
                fontSize={isGateway ? '9.5' : '8.5'}
                fontFamily="ui-monospace, 'Cascadia Code', monospace"
                fontWeight="700" letterSpacing="0.10em"
                fill={isHovered ? accentColor : '#0B192C'} 
                fillOpacity="0.90">
                {n.label}
              </text>
              <text x={n.x} y={n.y + n.r + (isGateway ? 27 : 24)}
                textAnchor="middle" fontSize="6.8"
                fontFamily="ui-monospace, monospace" letterSpacing="0.03em"
                fill="#475569" fillOpacity="0.75">
                {n.sub}
              </text>
            </g>
          );
        })}

        {/* ── High-Speed Stream Packets with Trail ── */}
        {!reduced && (<>
          {/* Pay-In Stream Packet */}
          <circle r="5.2" fill="#10B981" fillOpacity="0" filter="url(#v24-intense-glow)">
            <animateMotion dur="3.6s" repeatCount="indefinite" begin="0s" calcMode="spline" keySplines="0.42 0 0.58 1">
              <mpath href="#v24-tx-payin" />
            </animateMotion>
            <animate attributeName="fill-opacity" values="0;1;1;1;1;0" keyTimes="0;0.06;0.45;0.88;0.96;1" dur="3.6s" repeatCount="indefinite" begin="0s" />
          </circle>

          {/* Payout Stream Packet */}
          <circle r="5.2" fill="#FF5500" fillOpacity="0" filter="url(#v24-intense-glow)">
            <animateMotion dur="3.6s" repeatCount="indefinite" begin="1.8s" calcMode="spline" keySplines="0.42 0 0.58 1">
              <mpath href="#v24-tx-payout" />
            </animateMotion>
            <animate attributeName="fill-opacity" values="0;1;1;1;1;0" keyTimes="0;0.06;0.45;0.88;0.96;1" dur="3.6s" repeatCount="indefinite" begin="1.8s" />
          </circle>
        </>)}
      </svg>

    </div>
  );
}

/* ─── Hero Promo Banners (Gaming, Trading & Dispute Shield) ──────── */
const HERO_SLIDES = [
  {
    id: 'gaming',
    imageDesktop: banner01Desktop,
    imageMobile: banner01Mobile,
    tag: '🎰 Casino, RMG & iGaming Gateway',
    title: 'Casino & Real Money Gaming Payment Gateway — Dedicated High-Risk MIDs',
    shortLabel: 'Casino & Real Money Gaming',
    ctaText: 'Get Casino MIDs',
    accentColor: '#FF5500',
    borderGlow: 'border-orange-500/40 shadow-orange-500/10 ring-1 ring-orange-500/20',
  },
  {
    id: 'trading',
    imageDesktop: banner02Desktop,
    imageMobile: banner02Mobile,
    tag: '📈 Forex & Crypto Trading Rails',
    title: 'Forex & Crypto Trading Payment Gateway — Direct Bank Rails',
    shortLabel: 'Forex & Crypto',
    ctaText: 'Get Trading Rails',
    accentColor: '#0284C7',
    borderGlow: 'border-cyan-500/40 shadow-cyan-500/10 ring-1 ring-cyan-500/20',
  },
  {
    id: 'defense',
    imageDesktop: banner03Desktop,
    imageMobile: banner03Mobile,
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
              className="relative w-full cursor-pointer overflow-hidden block aspect-[1.95/1] sm:aspect-auto sm:h-[245px] md:h-[285px] bg-slate-950 touch-pan-y"
              title="Click to apply or talk to an underwriting specialist"
            >
              {HERO_SLIDES.map((slide, idx) => (
                <div
                  key={slide.id}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                    activeSlide === idx ? 'opacity-100 z-10 scale-100' : 'opacity-0 z-0 pointer-events-none scale-[1.006]'
                  }`}
                >
                  {/* Mobile Banner Image (Visible on Mobile only) */}
                  <img
                    src={slide.imageMobile}
                    alt={slide.title}
                    draggable="false"
                    className="sm:hidden w-full h-full object-cover object-center transition-transform duration-700 ease-out pointer-events-none"
                    loading={idx === 0 ? 'eager' : 'lazy'}
                  />

                  {/* Desktop Banner Image (Visible on Tablet/Desktop only) */}
                  <img
                    src={slide.imageDesktop}
                    alt={slide.title}
                    draggable="false"
                    className="hidden sm:block w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.012] pointer-events-none"
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
                🎰 Casino, Real Money Gaming &amp; 📈 Trading Gateway <span className="text-orange-300 font-light mx-1">•</span> 24h MIDs
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
                Casino, Gaming &amp; Trading.
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
              Dedicated Tier-1 merchant accounts for <strong>Online Casino, Real Money Gaming (RMG), iGaming, Forex &amp; Crypto Trading</strong> platforms. Process instant high-volume player deposits &amp; winning payouts with instant real-time authorization, zero aggregator freezes, and automated dispute defense.
            </p>

            {/* Quick Industry Feature Badges */}
            <div className="flex flex-wrap items-center gap-2 mb-5 sm:mb-6 w-full">
              <div className="inline-flex items-center gap-2 px-2.5 py-1.5 rounded-xl bg-white border border-[#E7E3DA] text-[11px] sm:text-xs font-semibold text-[#0B192C] shadow-2xs">
                <span className="w-5 h-5 rounded-lg bg-orange-50 border border-orange-200/80 flex items-center justify-center text-[#FF5500] shrink-0">
                  <Gamepad2 className="w-3.5 h-3.5" />
                </span>
                <span>Casino &amp; RMG MIDs</span>
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
                <span>Instant Player Payouts</span>
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
                <span>Get Casino / Gaming MID</span>
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
