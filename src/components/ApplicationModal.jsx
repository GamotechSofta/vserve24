import React, { useState, useEffect } from 'react';
import { 
  X, CheckCircle2, ArrowRight, ShieldCheck, Lock, 
  Building2, User, Mail, Phone, Globe, DollarSign, 
  Layers, Sparkles, Check, Clock
} from 'lucide-react';
import { vserveData } from '../data/vserveData';

export default function ApplicationModal({ isOpen, onClose, initialParams }) {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    businessName: '',
    contactName: '',
    email: '',
    phone: '',
    website: '',
    monthlyVolume: '₹25 Lakhs – ₹1 Crore / mo',
    industry: 'Online Casino & iGaming',
    needDisputeDefense: true,
    needRecurring: false
  });

  useEffect(() => {
    if (initialParams) {
      setFormData(prev => ({
        ...prev,
        monthlyVolume: initialParams.volume || prev.monthlyVolume,
        industry: initialParams.industry || prev.industry
      }));
    }
  }, [initialParams, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div 
      onClick={onClose}
      className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm p-3 sm:p-6 flex min-h-full items-start sm:items-center justify-center animate-in fade-in duration-200"
    >
      <div 
        className="bg-[#FFFFFF] border border-[#E7E3DA] rounded-3xl max-w-xl w-full p-5 sm:p-7 md:p-9 relative shadow-2xl text-[#0B192C] my-4 sm:my-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Prominent High-Visibility Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-3.5 right-3.5 sm:top-5 sm:right-5 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#F7F4ED] hover:bg-[#E7E3DA] border border-[#E7E3DA] text-[#0B192C] flex items-center justify-center shadow-md transition-all cursor-pointer z-30"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" strokeWidth={2.5} />
        </button>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-5">
            
            {/* Modal Header */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200/80 text-[10.5px] font-bold text-[#FF5500] uppercase tracking-widest mb-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF5500] animate-pulse" />
                <span>24-Hour Underwriting Intake</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#0B192C] tracking-tight">
                Request Merchant Account
              </h3>
              <p className="text-[#475569] text-xs sm:text-sm mt-1">
                Zero setup fees • Direct Tier-1 acquiring bank placement • Daily batch payouts.
              </p>
            </div>

            {/* Input Fields Grid (2 Columns) */}
            <div className="space-y-3.5">
              
              {/* Row 1: Business Name & Contact Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="space-y-1">
                  <label className="text-xs text-[#0B192C] font-semibold flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5 text-[#FF5500]" />
                    <span>Legal Business Name</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Apex Global LLC"
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#FCFBF8] hover:bg-white focus:bg-white border border-[#E7E3DA] text-xs sm:text-sm text-[#0B192C] placeholder-slate-400 focus:outline-none focus:border-[#FF5500] focus:ring-3 focus:ring-orange-500/10 transition-all shadow-xs"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs text-[#0B192C] font-semibold flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-[#FF5500]" />
                    <span>Primary Contact Name</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Morgan"
                    value={formData.contactName}
                    onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#FCFBF8] hover:bg-white focus:bg-white border border-[#E7E3DA] text-xs sm:text-sm text-[#0B192C] placeholder-slate-400 focus:outline-none focus:border-[#FF5500] focus:ring-3 focus:ring-orange-500/10 transition-all shadow-xs"
                  />
                </div>
              </div>

              {/* Row 2: Work Email & Phone Number */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="space-y-1">
                  <label className="text-xs text-[#0B192C] font-semibold flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-[#FF5500]" />
                    <span>Work Email Address</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="alex@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#FCFBF8] hover:bg-white focus:bg-white border border-[#E7E3DA] text-xs sm:text-sm text-[#0B192C] placeholder-slate-400 focus:outline-none focus:border-[#FF5500] focus:ring-3 focus:ring-orange-500/10 transition-all shadow-xs"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs text-[#0B192C] font-semibold flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-[#FF5500]" />
                    <span>Phone Number</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#FCFBF8] hover:bg-white focus:bg-white border border-[#E7E3DA] text-xs sm:text-sm text-[#0B192C] placeholder-slate-400 focus:outline-none focus:border-[#FF5500] focus:ring-3 focus:ring-orange-500/10 transition-all shadow-xs"
                  />
                </div>
              </div>

              {/* Row 3: Monthly Volume & Merchant Industry Category */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="space-y-1">
                  <label className="text-xs text-[#0B192C] font-semibold flex items-center gap-1.5">
                    <DollarSign className="w-3.5 h-3.5 text-[#FF5500]" />
                    <span>Monthly Processing Volume</span>
                  </label>
                  <select
                    value={formData.monthlyVolume}
                    onChange={(e) => setFormData({ ...formData, monthlyVolume: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#FCFBF8] hover:bg-white focus:bg-white border border-[#E7E3DA] text-xs sm:text-sm text-[#0B192C] focus:outline-none focus:border-[#FF5500] focus:ring-3 focus:ring-orange-500/10 transition-all shadow-xs cursor-pointer"
                  >
                    <option>₹5 Lakhs – ₹25 Lakhs / mo</option>
                    <option>₹25 Lakhs – ₹1 Crore / mo</option>
                    <option>₹1 Crore – ₹5 Crores / mo</option>
                    <option>₹5 Crores – ₹20 Crores / mo</option>
                    <option>₹20 Crores+ / mo (Enterprise Scale)</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs text-[#0B192C] font-semibold flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-[#FF5500]" />
                    <span>Merchant Industry Category</span>
                  </label>
                  <select
                    value={formData.industry}
                    onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#FCFBF8] hover:bg-white focus:bg-white border border-[#E7E3DA] text-xs sm:text-sm text-[#0B192C] focus:outline-none focus:border-[#FF5500] focus:ring-3 focus:ring-orange-500/10 transition-all shadow-xs cursor-pointer"
                  >
                    {vserveData.industries.map((ind) => (
                      <option key={ind.id} value={ind.name}>{ind.name} ({ind.category})</option>
                    ))}
                  </select>
                </div>
              </div>

            </div>

            {/* Included Underwriting Protections */}
            <div className="p-3.5 rounded-xl bg-[#FCFBF8] border border-[#E7E3DA] flex items-center justify-between text-xs text-[#475569]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                <span className="text-[11px] font-semibold text-[#0B192C]">Ethoca & Verifi RDR Pre-Dispute Protection Included</span>
              </div>
              <span className="text-[10px] text-[#10B981] font-bold bg-emerald-50 px-2 py-0.5 rounded">0% Fee</span>
            </div>

            {/* Submit Action Button & Cancel Button */}
            <div className="pt-2 space-y-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 py-3.5 sm:py-4 rounded-xl bg-[#FF5500] hover:bg-[#E64A00] text-white font-bold text-xs sm:text-sm tracking-wide transition-all shadow-lg shadow-orange-500/25 hover:-translate-y-0.5 cursor-pointer disabled:opacity-75"
              >
                {isSubmitting ? (
                  <span>Encrypting & Routing to Risk Desk...</span>
                ) : (
                  <>
                    <span>Submit for 24h Underwriting Decision</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={onClose}
                className="w-full py-2.5 rounded-xl text-xs font-bold text-[#707887] hover:text-[#0B192C] hover:bg-[#F7F4ED] transition-colors text-center cursor-pointer border border-[#E7E3DA] bg-white"
              >
                ✕ Cancel &amp; Close Form
              </button>
            </div>

            {/* Bottom Security Guarantee */}
            <div className="flex items-center justify-center gap-2 text-[11px] text-[#707887]">
              <Lock className="w-3.5 h-3.5 text-[#FF5500]" />
              <span>TLS 1.3 256-Bit Encrypted Submission • Confidential Risk Review</span>
            </div>

          </form>
        ) : (
          /* Confirmation Success State */
          <div className="text-center py-6 sm:py-8 space-y-6">
            <div className="w-16 h-16 rounded-full bg-emerald-50 border-2 border-emerald-300 text-[#10B981] flex items-center justify-center mx-auto shadow-md animate-in zoom-in-95">
              <Check className="w-8 h-8 stroke-[2.5]" />
            </div>

            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[10.5px] font-bold text-[#10B981] uppercase tracking-widest mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-ping" />
                <span>Underwriting Intake Received</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#0B192C]">
                Application Successfully Submitted!
              </h3>
              <p className="text-[#475569] text-xs sm:text-sm max-w-md mx-auto mt-2 leading-relaxed">
                Thank you, <span className="font-bold text-[#0B192C]">{formData.contactName || 'Merchant'}</span>. A dedicated high-risk underwriting analyst has been assigned to your profile.
              </p>
            </div>

            {/* Reference Ticket Card */}
            <div className="p-4 rounded-2xl bg-[#FCFBF8] border border-[#E7E3DA] max-w-sm mx-auto text-left space-y-2 text-xs">
              <div className="flex items-center justify-between text-[#707887]">
                <span>Reference Ticket:</span>
                <span className="font-bold text-[#0B192C]">#VS-8924</span>
              </div>
              <div className="flex items-center justify-between text-[#707887]">
                <span>Decision SLA:</span>
                <span className="font-bold text-[#10B981]">Within 24 Hours</span>
              </div>
              <div className="flex items-center justify-between text-[#707887]">
                <span>Target MID Category:</span>
                <span className="font-bold text-[#FF5500]">{formData.industry}</span>
              </div>
            </div>

            <button
              onClick={handleReset}
              className="px-8 py-3 rounded-xl bg-[#0B192C] hover:bg-[#1A283E] text-white text-xs font-bold tracking-wide transition-all shadow-md cursor-pointer"
            >
              Return to Website
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
