import React from 'react';
import Logo from './Logo';
import { Mail, ArrowUpRight, ShieldCheck, Lock } from 'lucide-react';

export default function Footer({ onOpenApplication }) {
  return (
    <footer className="relative bg-[#FCFBF8] text-[#0B192C] pt-16 pb-10 border-t border-[#E7E3DA] overflow-hidden">
      
      {/* Background world network coordinate lines */}
      <div 
        aria-hidden 
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: 'radial-gradient(#0B192C 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-12 border-b border-[#E7E3DA]">
          
          {/* Brand & Description (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="p-0.5 rounded-xl inline-block">
              <Logo size="normal" />
            </div>

            <p className="text-[#475569] text-xs sm:text-sm leading-relaxed max-w-sm">
              Specialized merchant accounts for high-risk categories with gateway flexibility, fraud tools, and dispute support.
            </p>

            <div className="space-y-1.5 text-xs text-[#707887]">
              <div className="flex items-center gap-2 text-[#0B192C]">
                <Mail className="w-3.5 h-3.5 text-[#FF5500]" />
                <a href="mailto:hello@vserve24.com" className="hover:text-[#FF5500] transition-colors font-bold">
                  hello@vserve24.com
                </a>
              </div>
              <div className="text-[#707887] text-[11px]">
                Direct Underwriting Desk & Merchant Inquiries
              </div>
            </div>
          </div>

          {/* Core Services (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <div className="text-[11px] font-bold uppercase tracking-widest text-[#FF5500]">
              CORE SERVICES
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-[#475569]">
              <li><a href="#services" className="hover:text-[#0B192C] transition-colors">Instant UPI & Pay-In</a></li>
              <li><a href="#services" className="hover:text-[#0B192C] transition-colors">Instant Payout Rails</a></li>
              <li><a href="#services" className="hover:text-[#0B192C] transition-colors">Multi-Bank Direct Routing</a></li>
              <li><a href="#services" className="hover:text-[#0B192C] transition-colors">AI Risk & Fraud Detection</a></li>
              <li><a href="#services" className="hover:text-[#0B192C] transition-colors">Approval Optimization</a></li>
              <li><a href="#services" className="hover:text-[#0B192C] transition-colors">T+0 Settlement Engine</a></li>
            </ul>
          </div>

          {/* Company Links (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <div className="text-[11px] font-bold uppercase tracking-widest text-[#FF5500]">
              ENTERPRISE PLATFORM
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-[#475569]">
              <li><a href="#industries" className="hover:text-[#0B192C] transition-colors">Supported Industries</a></li>
              <li><a href="#resources" className="hover:text-[#0B192C] transition-colors">Guides & Decline Codes</a></li>
              <li><a href="#faq" className="hover:text-[#0B192C] transition-colors">FAQ & Knowledge Base</a></li>
              <li>
                <button 
                  onClick={onOpenApplication}
                  className="hover:text-[#FF5500] text-left transition-colors cursor-pointer font-bold"
                >
                  Request Merchant Account →
                </button>
              </li>
              <li><a href="#faq" className="hover:text-[#0B192C] transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright & Security Strip */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-[#707887]">
          <div>
            © {new Date().getFullYear()} VSERVE24. All rights reserved. Payment infrastructure for complex merchants.
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-[#475569]">
              <Lock className="w-3 h-3 text-[#FF5500]" />
              <span>TLS 1.3 Secure Socket</span>
            </span>
            <span>•</span>
            <span className="text-[#475569]">No Setup Fees • Daily Payouts</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
