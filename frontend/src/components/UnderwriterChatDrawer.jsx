import React, { useState, useRef, useEffect } from 'react';
import { 
  MessageSquare, X, Send, Bot, User, Sparkles, 
  ArrowRight, ShieldCheck, Phone, CheckCircle2, RefreshCw,
  FileText, Zap, AlertTriangle, ChevronRight, Lock, DollarSign,
  TrendingUp, Award, Layers
} from 'lucide-react';

export default function UnderwriterChatDrawer({ onOpenApplication }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 'm-1',
      sender: 'bot',
      text: 'Hello! I am your Vserve24 High-Risk Underwriting AI. I can check sponsor bank appetite, estimate rolling reserves, diagnose decline codes, or pre-qualify your business for a dedicated MID. What is your commercial vertical or current challenge?',
      time: 'Online',
      card: null
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [typingStatus, setTypingStatus] = useState('Analyzing bank appetite...');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const quickPrompts = [
    'Stripe/Shopify banned my account',
    'What are rolling reserves for startups?',
    'CBD & Nutra compliance requirements',
    'Do you support T+1 daily payouts?',
    'What documents do I need to apply?',
    'How does Ethoca & Verifi RDR work?'
  ];

  // Comprehensive Knowledge Engine
  const knowledgeBase = [
    {
      keywords: ['stripe', 'shopify', 'paypal', 'square', 'banned', 'shut down', 'terminated', 'frozen', 'hold', '180 day', 'match', 'tmf'],
      response: 'We specialize in emergency replacement MIDs for merchants dropped by pooled aggregators (Stripe, Shopify Payments, PayPal, Square). Because aggregators pool all sub-merchants under one master account, sudden volume spikes or high-risk MCCs trigger automated algorithmic account terminations. With Vserve24, you receive your own Dedicated MID directly registered with a Tier-1 sponsor acquiring bank in your corporate legal name, completely immune to aggregator master shutdowns.',
      card: {
        title: 'Emergency Aggregator Replacement Rail',
        badge: 'Priority Underwriting (< 24h)',
        highlights: ['Independent MID in your business name', 'Direct sponsor bank placement', 'Zero aggregator holdback'],
        actionText: 'Fast-Track Emergency MID',
        actionPayload: { volume: '$150,000 – $500,000 / mo', industry: 'E-Commerce' }
      }
    },
    {
      keywords: ['reserve', 'rolling reserve', 'holdback', 'escrow', 'deposit'],
      response: 'Our rolling reserve policies are structured based on verified processing history:\n\n• Established Merchants (3+ months clean statements, < 0.8% dispute ratio): 0% Rolling Reserve on direct US/EU Tier-1 rails.\n• Fresh High-Risk Startups or Continuity Subscriptions: Standard 5% rolling reserve held for 90–180 days, which automatically steps down to 0% as your account demonstrates healthy settlement stability.\n• High-Ticket Masterminds ($1,000+ AOV): Custom capped reserve or milestone-based settlement release.',
      card: {
        title: 'Reserve Optimization Assessment',
        badge: 'Transparent Risk Terms',
        highlights: ['0% Reserve available with clean history', 'Automated 90-day step-down review', 'Daily interest-bearing trust release'],
        actionText: 'Apply with Statements for 0% Reserve',
        actionPayload: { volume: '$50,000 – $150,000 / mo' }
      }
    },
    {
      keywords: ['cbd', 'hemp', 'delta', 'thc', 'cannabis', 'topical', 'gummies'],
      response: 'Yes! We support 100% compliant CBD, Hemp wellness, and cannabinoid products (< 0.3% THC). Requirements for fast 24-hour approval:\n\n1. Full-Panel third-party Lab Certificate of Analysis (COA) for active SKUs.\n2. Valid corporate entity (US/EU/Canada).\n3. Clean checkout with age-gate verification (18+/21+).\n4. Ethoca & Verifi RDR enabled to defend subscription continuity orders.',
      card: {
        title: 'Dedicated CBD & Hemp Merchant Rail',
        badge: 'Approved MCC 5912/5999',
        highlights: ['Tier-1 domestic bank placement', 'Interchange-Plus 2.95% + $0.25', 'Built-in COA batch verification'],
        actionText: 'Apply for CBD Merchant ID',
        actionPayload: { industry: 'CBD & Hemp Wellness Products' }
      }
    },
    {
      keywords: ['nutra', 'nutraceutical', 'supplement', 'dietary', 'skincare', 'trial', 'continuity', 'subscription', 'rebill'],
      response: 'Nutraceutical and dietary supplement continuity is our core specialty. We provide multi-MID load balanced rails built for high-volume subscriber rebilling, automated card updater (Visa VAU / Mastercard ABU), and 84% soft decline recovery.',
      card: {
        title: 'Nutraceutical Continuity Gateway',
        badge: 'Multi-MID Auto-Load Balance',
        highlights: ['84% Soft Decline Recovery Engine', 'Automated Card Updater (VAU/ABU)', 'Ethoca/Verifi RDR Pre-Dispute Interception'],
        actionText: 'Apply for Nutra MID',
        actionPayload: { industry: 'Nutraceutical' }
      }
    },
    {
      keywords: ['payout', 'settle', 'settlement', 'funding', 'schedule', 'daily', 't+1', 'wire', 'batch'],
      response: 'We support Direct Daily Batch Settlement:\n\n• Domestic US/Canada: T+1 Daily direct ACH deposit into your business bank account.\n• EU/UK: T+1 Daily SEPA / Faster Payments.\n• Cross-Border / Multi-Currency: Multi-currency daily batch with automated FX conversion in 135+ currencies or direct SWIFT wire.',
      card: {
        title: 'Direct T+1 Daily Settlement Rails',
        badge: 'Daily Bank Deposit',
        highlights: ['T+1 Daily batch payouts', 'Zero intermediate holding tanks', 'Multi-currency settlement (USD/EUR/GBP)'],
        actionText: 'Get T+1 Daily Processing',
        actionPayload: { volume: '$150,000 – $500,000 / mo' }
      }
    },
    {
      keywords: ['document', 'docs', 'requirement', 'kyc', 'kyb', 'paperwork', 'statement', 'apply'],
      response: 'To guarantee a 24-hour underwriting decision, have the following 4 core items ready:\n\n1. Articles of Organization / Corporate Filing & Tax ID (EIN).\n2. Government ID (Passport or Driver\'s License) for 25%+ owners.\n3. Voided Business Check or Bank Letter matching legal entity.\n4. Last 3 Months Merchant Processing Statements (if currently processing). Fresh startups with no prior history can submit 3 months business bank statements instead.',
      card: {
        title: '24-Hour Document Checklist',
        badge: 'Fast-Track Underwriting',
        highlights: ['Articles of Incorporation + EIN', 'Government ID of Principal', 'Voided Check + 3 Months Statements'],
        actionText: 'Start 10-Min Application',
        actionPayload: {}
      }
    },
    {
      keywords: ['mern', 'mern stack', 'node', 'nodejs', 'express', 'react', 'mongodb', 'javascript', 'backend', 'frontend', 'sdk', 'npm'],
      response: `Integrating Vserve24 into your MERN Stack project takes 3 simple steps:

1. React Frontend (Client):
Collect payment details with Vserve24 client-side tokenization (or iframe Hosted Fields) to securely convert the card number into a single-use token ('tok_live_...').

2. Express.js Backend (Server API Route):
Send a POST request to 'https://api.vserve24.com/v1/charges' using axios or fetch with your Secret API Key:

const response = await axios.post('https://api.vserve24.com/v1/charges', {
  amount: 49.99,
  currency: 'USD',
  token: req.body.token,
  customer: { email: user.email, name: user.name },
  routing: { priority: 'smart_cascade' }
}, {
  headers: { 'Authorization': 'Bearer ' + process.env.VSERVE24_SECRET_KEY }
});

3. MongoDB Database:
Store the returned 'charge_id', 'status: "approved"', and 'token_vault_id' on your User/Order document.

4. Webhook Listener (Express):
Listen to POST /api/webhooks/vserve24 for instant automated 'charge.refunded', 'rdr.pre_dispute_deflected', or 'settlement.batch_paid' events!`,
      card: {
        title: 'MERN Stack Quickstart Guide',
        badge: 'Node.js & React Ready',
        highlights: ['Client-side tokenization (Zero PCI scope)', 'Express.js backend SDK / REST API', 'MongoDB order schema & Webhook events'],
        actionText: 'View Developer API Sandbox',
        actionPayload: {}
      }
    },
    {
      keywords: ['integrate', 'integration', 'shopify', 'woocommerce', 'api', 'magento', 'nmi', 'authorizenet', 'plugin', 'wordpress'],
      response: 'Vserve24 integrates seamlessly across all major platforms and custom stacks:\n\n• MERN & Next.js: Direct REST API with sub-80ms decision latency and Node.js backend SDKs.\n• Shopify & Shopify Plus: Native custom app gateway connector.\n• WooCommerce: Official 1-click WordPress plugin.\n• Direct REST API: Full JSON API with cURL, Node.js, Python, PHP, and Go libraries.\n• NMI & Authorize.Net: Gateway emulation mode for instant plug-and-play without changing existing code.',
      card: {
        title: 'Developer REST API & Plugins',
        badge: '1-Click Checkout Connectors',
        highlights: ['Shopify & WooCommerce Connectors', 'Direct REST API (< 80ms decision)', 'NMI & Auth.Net Emulation Ready'],
        actionText: 'Explore API Sandbox',
        actionPayload: {}
      }
    },
    {
      keywords: ['rdr', 'ethoca', 'verifi', 'chargeback', 'dispute', 'deflect', 'vfmp', 'ecp', 'ratio'],
      response: 'Ethoca and Verifi Rapid Dispute Resolution (RDR) are native pre-dispute deflection networks integrated directly into Vserve24. When a cardholder contacts their issuing bank to dispute a transaction, the network intercepts the inquiry before it becomes a formal chargeback. Vserve24 automatically refunds the order within 2 seconds. The bank never registers a dispute, keeping your chargeback ratio safely below the 0.90% card association threshold and preventing penalties.',
      card: {
        title: 'Ethoca & Verifi RDR Chargeback Shield',
        badge: 'Zero Dispute Registration',
        highlights: ['Intercepts up to 90% of cardholder inquiries', 'Eliminates $50/dispute scheme fines', 'Safeguards MID longevity'],
        actionText: 'Activate Chargeback Shield',
        actionPayload: {}
      }
    },
    {
      keywords: ['rate', 'rates', 'fee', 'fees', 'pricing', 'cost', 'percentage', 'interchange', 'markup', 'interchange plus'],
      response: 'We operate on transparent Interchange-Plus pricing with zero hidden aggregator surcharges:\n\n• Tier-1 Domestic High-Risk: 2.45% – 2.95% + $0.25/tx (Interchange-Plus)\n• Cross-Border / EU Rails: 2.25% – 2.85% + €0.20/tx\n• Setup Fee: $0 (Zero upfront setup fees)\n• Monthly Gateway Maintenance: $0 on qualified active volume\n• Pre-Dispute RDR Deflection: $0 gateway setup fee',
      card: {
        title: 'Interchange-Plus Transparent Rate',
        badge: 'Zero Setup Fees',
        highlights: ['Direct acquiring pass-through', 'No predatory batch surcharges', 'Volume tier discounts over $250k/mo'],
        actionText: 'Lock In Your Interchange Rate',
        actionPayload: {}
      }
    }
  ];

  const handleSendMessage = (textToSend) => {
    const query = textToSend || inputValue;
    if (!query.trim()) return;

    // Append user message
    const userMsg = { 
      id: 'm-' + Date.now(), 
      sender: 'user', 
      text: query, 
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) 
    };
    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    const statuses = [
      'Scanning Tier-1 sponsor bank rules...',
      'Evaluating vertical risk guidelines...',
      'Synthesizing underwriting requirements...'
    ];
    setTypingStatus(statuses[Math.floor(Math.random() * statuses.length)]);

    setTimeout(() => {
      const qClean = query.toLowerCase().trim();
      let matched = null;
      let highestScore = 0;

      // Smart word-boundary and keyword scoring match
      for (const item of knowledgeBase) {
        let score = 0;
        for (const k of item.keywords) {
          const kLower = k.toLowerCase();
          // Check exact word boundary match
          const regex = new RegExp(`\\b${kLower.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')}\\b`, 'i');
          if (regex.test(qClean)) {
            // Longer phrases get higher weight (e.g. 'mern stack' > 'rate')
            score += kLower.split(' ').length * 10;
          }
        }
        if (score > highestScore) {
          highestScore = score;
          matched = item;
        }
      }

      let botResponseText = '';
      let botCard = null;

      if (matched && highestScore > 0) {
        botResponseText = matched.response;
        botCard = matched.card;
      } else {
        botResponseText = `Thank you for your question regarding "${query}". As a high-risk acquiring infrastructure provider, Vserve24 structures tailored sponsor bank placements for 24+ regulated verticals. Our risk desk evaluates monthly volume, chargeback history, and product category to issue direct dedicated MIDs with daily T+1 settlement. Would you like to check specific requirements for your industry or submit a 24-hour application?`;
        botCard = {
          title: 'Direct Underwriting Intake Desk',
          badge: 'Guaranteed 24h SLA',
          highlights: ['Dedicated MID placement', 'T+1 Daily batch payouts', 'Zero upfront setup costs'],
          actionText: 'Submit for 24h Underwriting',
          actionPayload: {}
        };
      }

      setMessages(prev => [
        ...prev, 
        { 
          id: 'm-' + (Date.now() + 1), 
          sender: 'bot', 
          text: botResponseText, 
          card: botCard,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) 
        }
      ]);
      setIsTyping(false);
    }, 700);
  };

  const handleCardAction = (payload) => {
    setIsOpen(false);
    onOpenApplication?.(payload || null);
  };

  return (
    <>
      {/* Floating Bottom-Right Launcher Button */}
      <div className="fixed bottom-6 right-6 z-40">
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            aria-label="Open Underwriting Assistant"
            className="group flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#0B192C] hover:bg-[#FF5500] text-white font-bold text-xs shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer ring-4 ring-orange-500/20"
          >
            <div className="relative">
              <Bot className="w-4 h-4 text-[#FF5500] group-hover:text-white transition-colors" />
              <span className="w-2 h-2 rounded-full bg-[#10B981] absolute -top-0.5 -right-0.5 animate-pulse" />
            </div>
            <span>Ask Underwriter AI</span>
          </button>
        )}
      </div>

      {/* Floating Chat Drawer Window */}
      {isOpen && (
        <div className="fixed bottom-4 right-3 sm:right-6 z-50 w-[calc(100vw-24px)] sm:w-[440px] h-[580px] max-h-[88vh] bg-[#FFFFFF] border border-[#E7E3DA] rounded-3xl shadow-2xl flex flex-col justify-between overflow-hidden animate-in slide-in-from-bottom-5 duration-200">
          
          {/* Top Header */}
          <div className="bg-[#0B192C] text-white p-4 flex items-center justify-between border-b border-slate-800">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-2xl bg-orange-500/20 border border-orange-500/40 flex items-center justify-center text-[#FF5500] shrink-0">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white flex items-center gap-1.5">
                  <span>VSERVE24 UNDERWRITER AI</span>
                  <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                </h4>
                <span className="text-[10px] text-slate-400">Direct Sponsor Bank Placement Intelligence</span>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages Scroll Area */}
          <div className="p-4 flex-1 overflow-y-auto space-y-4 bg-[#FCFBF8]">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'bot' && (
                  <div className="w-7 h-7 rounded-xl bg-orange-100 border border-orange-200 text-[#FF5500] flex items-center justify-center shrink-0 mt-0.5">
                    <Bot className="w-4 h-4" />
                  </div>
                )}

                <div className={`space-y-2.5 max-w-[86%] ${
                  msg.sender === 'user'
                    ? 'bg-[#FF5500] text-white font-medium rounded-2xl rounded-tr-xs p-3.5 text-xs shadow-xs'
                    : 'bg-white border border-[#E7E3DA] text-[#0B192C] shadow-2xs rounded-2xl rounded-tl-xs p-3.5 text-xs'
                }`}>
                  <div className="whitespace-pre-line leading-relaxed">
                    {msg.text}
                  </div>

                  {/* Interactive Action Card if returned by bot */}
                  {msg.card && (
                    <div className="mt-3 p-3.5 rounded-xl bg-[#0B192C] text-white space-y-2.5 border border-slate-800">
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-bold text-[11px] text-white truncate">
                          {msg.card.title}
                        </span>
                        <span className="text-[9.5px] font-bold text-[#10B981] bg-emerald-500/10 border border-emerald-500/30 px-1.5 py-0.5 rounded whitespace-nowrap">
                          {msg.card.badge}
                        </span>
                      </div>

                      <div className="space-y-1 text-[10.5px] text-slate-300">
                        {msg.card.highlights.map((h, hIdx) => (
                          <div key={hIdx} className="flex items-center gap-1.5">
                            <CheckCircle2 className="w-3 h-3 text-[#FF5500] shrink-0" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>

                      <button
                        onClick={() => handleCardAction(msg.card.actionPayload)}
                        className="w-full mt-1 py-2 rounded-lg bg-[#FF5500] hover:bg-[#E64A00] text-white text-[11px] font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-md shadow-orange-500/20"
                      >
                        <span>{msg.card.actionText}</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  )}

                  <div className={`text-[9.5px] mt-1 ${msg.sender === 'user' ? 'text-orange-100 text-right' : 'text-slate-400'}`}>
                    {msg.time}
                  </div>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-2 text-xs text-[#707887] p-2 bg-white rounded-xl border border-[#E7E3DA] w-fit">
                <RefreshCw className="w-3.5 h-3.5 animate-spin text-[#FF5500]" />
                <span className="text-[11px] font-medium">{typingStatus}</span>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompt Chips */}
          <div className="p-2.5 bg-white border-t border-[#E7E3DA] overflow-x-auto whitespace-nowrap flex gap-1.5 scrollbar-none">
            {quickPrompts.map((prompt, i) => (
              <button
                key={i}
                onClick={() => handleSendMessage(prompt)}
                className="px-2.5 py-1 rounded-lg bg-[#FCFBF8] hover:bg-orange-50 border border-[#E7E3DA] hover:border-orange-200 text-[10.5px] font-medium text-[#475569] hover:text-[#FF5500] transition-colors shrink-0 cursor-pointer"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Bottom Input Field & Direct Application CTA */}
          <div className="p-3 bg-white border-t border-[#E7E3DA] space-y-2">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                placeholder="Ask about MIDs, Stripe bans, reserves, or rates..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="flex-1 px-3.5 py-2.5 rounded-xl bg-[#FCFBF8] border border-[#E7E3DA] text-xs text-[#0B192C] placeholder-slate-400 focus:outline-none focus:border-[#FF5500] transition-colors"
              />
              <button
                type="submit"
                className="p-2.5 rounded-xl bg-[#0B192C] hover:bg-[#FF5500] text-white transition-colors cursor-pointer shrink-0"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>

            <div className="flex items-center justify-between text-[10.5px] text-[#707887] px-1">
              <span className="flex items-center gap-1">
                <Lock className="w-3 h-3 text-[#10B981]" /> 256-Bit Encrypted Underwriting
              </span>
              <span className="text-[#FF5500] font-semibold">Decisions in &lt; 24h</span>
            </div>
          </div>

        </div>
      )}
    </>
  );
}
