import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { 
  ChevronDown, Phone, ArrowRight, Menu, X, 
  CreditCard, Building2, Cpu, Network, TrendingUp, ShieldAlert,
  ShieldCheck, Globe, HelpCircle, Layers, CheckCircle2
} from 'lucide-react';

export default function Navbar({ onOpenApplication }) {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    {
      label: 'Services',
      href: '#services',
      hasDropdown: true,
      items: [
        { name: 'Credit Card Processing', desc: 'Accept cards online, phone & POS', href: '#services', icon: CreditCard },
        { name: 'ACH & eCheck Clearing', desc: 'Direct bank-to-bank debit rails', href: '#services', icon: Building2 },
        { name: 'AI Fraud Detection', desc: 'Sub-80ms real-time risk filter', href: '#services', icon: Cpu },
        { name: 'Approval Optimization', desc: 'Salvage soft bank rejections', href: '#services', icon: TrendingUp },
      ]
    },
    {
      label: 'Industries',
      href: '#industries',
      hasDropdown: true,
      items: [
        { name: 'CBD & Nutraceuticals', desc: 'Compliant health & wellness MIDs', href: '#industries', icon: ShieldCheck },
        { name: 'E-Commerce & Retail', desc: 'High-volume discrete fulfillment', href: '#industries', icon: Globe },
        { name: 'Digital Media & SaaS', desc: 'Recurring subscription billing', href: '#industries', icon: Layers },
        { name: 'Specialized High-Risk', desc: 'Custom sponsor bank placement', href: '#industries', icon: ShieldAlert },
      ]
    },
    {
      label: 'Integrations',
      href: '#capabilities',
      hasDropdown: true,
      items: [
        { name: 'Shopify & WooCommerce', desc: '1-click checkout connectors', href: '#capabilities', icon: Network },
        { name: 'Direct REST API', desc: 'Developer sandboxes & webhooks', href: '#capabilities', icon: Cpu },
        { name: 'Cascading Failover', desc: 'Zero-downtime multi-MID routing', href: '#capabilities', icon: TrendingUp },
      ]
    },
    {
      label: 'Resources',
      href: '#positioning',
      hasDropdown: true,
      items: [
        { name: 'Merchant Positioning', desc: 'Built for merchants banks reject', href: '#positioning', icon: ShieldCheck },
        { name: 'Dispute Prevention', desc: 'Ethoca & Verifi RDR defense', href: '#positioning', icon: ShieldAlert },
        { name: 'Subscription Continuity', desc: 'Automated card updater rules', href: '#positioning', icon: TrendingUp },
      ]
    },
    {
      label: 'Company',
      href: '#onboarding',
      hasDropdown: true,
      items: [
        { name: 'How Onboarding Works', desc: '3-step operational timeline', href: '#onboarding', icon: CheckCircle2 },
        { name: 'Frequently Asked Questions', desc: 'Clear answers on underwriting & fees', href: '#faq', icon: HelpCircle },
        { name: 'Direct Underwriting Desk', desc: '24h risk review & live MIDs', href: '#onboarding', icon: Phone },
      ]
    }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled 
          ? 'bg-[#FFFFFF]/98 backdrop-blur-xl border-b border-[#E7E3DA] shadow-sm py-2 sm:py-2.5' 
          : 'bg-[#FCFBF8]/98 backdrop-blur-md border-b border-[#E7E3DA] py-2.5 sm:py-3'
      }`}
    >
      <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12 flex items-center justify-between">
        
        {/* LEFT: Official Logo with Vertical Separator */}
        <div className="flex items-center">
          <a href="#" className="inline-flex items-center transition-opacity hover:opacity-90">
            <Logo size="normal" />
          </a>

          {/* Vertical Separator */}
          <div className="hidden lg:block h-7 w-[1px] bg-[#E7E3DA] mx-6 xl:mx-8" />
        </div>

        {/* CENTER: Navigation Links with Dropdown Arrows */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navItems.map((item, idx) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => setActiveDropdown(idx)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <a
                href={item.href}
                className="flex items-center gap-1.5 text-[13.5px] xl:text-[14px] font-medium text-[#0B192C] hover:text-[#FF5500] py-2 transition-colors cursor-pointer group"
              >
                <span>{item.label}</span>
                <ChevronDown className={`w-3.5 h-3.5 text-[#707887] transition-transform duration-200 group-hover:text-[#FF5500] ${
                  activeDropdown === idx ? 'rotate-180 text-[#FF5500]' : ''
                }`} />
              </a>

              {/* Flyout Dropdown Menu */}
              {activeDropdown === idx && item.items && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-72 bg-[#FFFFFF] border border-[#E7E3DA] rounded-2xl p-2.5 shadow-xl shadow-black/[0.08] animate-in fade-in slide-in-from-top-1 duration-150 z-50">
                  <div className="space-y-1">
                    {item.items.map((sub, sIdx) => {
                      const SubIcon = sub.icon;
                      return (
                        <a
                          key={sIdx}
                          href={sub.href}
                          onClick={() => setActiveDropdown(null)}
                          className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#FCFBF8] hover:border-[#E7E3DA] border border-transparent transition-all group/item"
                        >
                          <div className="w-8 h-8 rounded-lg bg-orange-50 border border-orange-200/80 flex items-center justify-center text-[#FF5500] shrink-0 mt-0.5 group-hover/item:bg-[#FF5500] group-hover/item:text-white transition-colors">
                            <SubIcon className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-[#0B192C] group-hover/item:text-[#FF5500] transition-colors">
                              {sub.name}
                            </div>
                            <div className="text-[11px] text-[#707887] leading-snug mt-0.5">
                              {sub.desc}
                            </div>
                          </div>
                        </a>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* RIGHT: Separator, Circular Phone Button with Online Pulse & Amber/Gold 'Get Started ->' Button */}
        <div className="hidden sm:flex items-center">
          
          {/* Vertical Separator */}
          <div className="hidden lg:block h-7 w-[1px] bg-[#E7E3DA] mr-5 xl:mr-6" />

          {/* Circular Phone Icon Button with Active Amber/Orange Pulse */}
          <button
            onClick={onOpenApplication}
            aria-label="Contact Underwriting Specialist"
            className="w-10 h-10 rounded-full border border-orange-200/90 bg-[#FFFFFF] hover:bg-orange-50/50 flex items-center justify-center text-[#0B192C] hover:text-[#FF5500] transition-all shadow-xs cursor-pointer relative mr-4 shrink-0 group"
          >
            <Phone className="w-4 h-4 transition-transform group-hover:scale-110" />
            {/* Active Top-Right Amber Dot */}
            <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-[#E5A824] ring-2 ring-white" />
          </button>

          {/* Warm Golden/Amber 'Get Started ->' Button as in Image */}
          <button 
            onClick={onOpenApplication}
            className="flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-2.5 rounded-xl bg-gradient-to-r from-[#DF9F1C] via-[#E5A824] to-[#D89417] hover:from-[#D49312] hover:to-[#CA890D] text-[#0B192C] text-xs sm:text-[13px] font-bold font-['Plus_Jakarta_Sans',sans-serif] tracking-wide transition-all shadow-md shadow-amber-500/20 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-amber-500/30 cursor-pointer shrink-0"
          >
            <span>Get Started</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>

        {/* Mobile Toggle Button */}
        <div className="lg:hidden flex items-center gap-2.5">
          <button 
            onClick={onOpenApplication}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#E5A824] text-[#0B192C] text-xs font-bold font-sans shadow-xs"
          >
            <span>Get Started</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="p-2 rounded-xl text-[#0B192C] hover:bg-[#F7F4ED] transition-colors border border-[#E7E3DA] bg-white shadow-2xs cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FFFFFF] border-b border-[#E7E3DA] px-6 py-5 space-y-4 shadow-xl animate-in fade-in slide-in-from-top-2">
          <div className="space-y-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-3.5 py-2.5 rounded-xl hover:bg-orange-50/80 text-[#0B192C] font-semibold text-sm transition-colors"
              >
                <span>{item.label}</span>
                <ChevronDown className="w-4 h-4 text-slate-400" />
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-[#E7E3DA] space-y-2">
            <button 
              onClick={() => { setMobileMenuOpen(false); onOpenApplication?.(); }}
              className="w-full py-3.5 rounded-xl bg-[#E5A824] hover:bg-[#D89417] text-[#0B192C] font-bold text-xs font-sans tracking-wide transition-colors flex items-center justify-center gap-2 shadow-md"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
