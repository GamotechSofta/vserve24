export const vserveData = {
  brand: {
    name: 'VSERVE24',
    tagline: 'No setup fees • Daily payouts • 24h approvals',
    headline: 'Powering high-risk businesses with payment confidence',
    description: 'Vserve24 helps complex businesses process instant UPI, dynamic QR, NetBanking, and automated payouts with stronger approval performance, adaptive risk controls, and dispute defense.',
    positioning: 'Built for merchants traditional processors reject',
    positioningDesc: 'A high-risk merchant account is designed for businesses with elevated fraud, dispute, or regulatory complexity. Vserve24 combines payment infrastructure and risk strategy so you can scale sustainably.'
  },

  trustMetrics: [
    {
      stat: '100+',
      label: 'Industries',
      subtext: 'Custom underwriting for hard-to-place verticals',
      tag: 'Global Coverage'
    },
    {
      stat: '50+',
      label: 'Integrations',
      subtext: 'Gateways, carts, and recurring billing platforms',
      tag: 'Turnkey API'
    },
    {
      stat: '24/7',
      label: 'Support',
      subtext: 'Onboarding and risk response when you need it',
      tag: 'Dedicated Team'
    }
  ],

  positioningPoints: [
    {
      letter: 'A',
      title: 'Multi-channel acceptance',
      description: 'Instant UPI, Dynamic QR, NetBanking, and automated payout support for complex sales channels.',
      badge: 'Omnichannel Routing',
      metric: 'Omnichannel'
    },
    {
      letter: 'B',
      title: 'Subscription ready',
      description: 'Recurring billing workflows and automated retry tools for continuity.',
      badge: 'Continuity Billing',
      metric: 'Automated Lifecycle'
    },
    {
      letter: 'C',
      title: 'Dispute controls',
      description: 'Pre-dispute alerts, direct sponsor risk shields, and automated representment support.',
      badge: 'Shield Architecture',
      metric: 'Pre-Dispute Alerts'
    }
  ],

  capabilitiesData: [
    {
      id: 'multi-channel',
      tabTitle: 'Multi-channel Acceptance',
      headline: 'Process instant Pay-In collections and Payout disbursements across all touchpoints',
      description: 'Accept payments through hosted checkout forms, developer REST APIs, dynamic QR codes, and automated payout rails under one unified processing gateway.',
      channels: [
        { label: 'Instant UPI Intent', desc: 'Embedded checkout with instant UPI app redirection', status: 'API Connected' },
        { label: 'Dynamic QR', desc: 'Real-time dynamic QR code generation with sub-second callbacks', status: 'Active Console' },
        { label: 'Instant Payouts', desc: '24/7 automated IMPS and NEFT disbursement rails', status: 'Continuous' }
      ],
      flowSteps: ['Customer Order', 'Instant UPI / QR', 'Gateway Encryption', 'Direct Bank Routing', 'Settled & Credited']
    },
    {
      id: 'subscription',
      tabTitle: 'Subscription Ready',
      headline: 'Built specifically for high-velocity recurring billing continuity',
      description: 'Engineered with intelligent decline salvage rules, automated bank retry algorithms, and cascading fallback to eliminate involuntary subscriber churn.',
      channels: [
        { label: 'Smart Retry Logic', desc: 'Dynamic timing algorithm based on issuer bank patterns', status: 'Automated' },
        { label: 'Bank Cascading', desc: 'Multi-sponsor fallback routing with zero player drop-offs', status: 'Zero-Drop' },
        { label: 'Proration Engine', desc: 'Multi-tier plans, metered billing & custom trial intervals', status: 'Flexible' }
      ],
      flowSteps: ['Initial Signup', 'Recurring Cycle', 'Dynamic Cascading', 'Bank Settlement', 'Settlement Engine']
    },
    {
      id: 'dispute-controls',
      tabTitle: 'Dispute Controls',
      headline: 'Automated pre-dispute deflection to preserve healthy merchant ratios',
      description: 'Intercept customer inquiries before they convert into formal disputes through native integration with bank risk monitoring and rapid dispute resolution.',
      channels: [
        { label: 'Bank Alerts', desc: 'Early warning signals direct from partner sponsor banks', status: 'Pre-Dispute' },
        { label: 'Rapid Resolution', desc: 'Automated instant refund rules configured by descriptor', status: 'Auto-Deflect' },
        { label: 'Evidence Builder', desc: 'Templated representment packets with transaction proof', status: 'Rapid Reversal' }
      ],
      flowSteps: ['Transaction Flagged', 'Pre-Dispute Alert', 'Automated Evaluation', 'Instant Resolution', 'Ratio Protected']
    }
  ],

  onboardingSteps: [
    {
      step: '01',
      title: 'Submit application',
      time: 'Less than 10 minutes',
      description: 'Complete our secure digital underwriting form with your business information, processing volume, and ownership details.',
      deliverables: ['Encrypted document upload', 'Custom risk category assignment', 'Instant intake verification']
    },
    {
      step: '02',
      title: 'Underwriting review',
      time: '24-hour decisioning',
      description: 'Our high-risk underwriting specialists review your profile to secure direct acquiring bank terms, tailored MID caps, and fee structures.',
      deliverables: ['Direct bank MID issuance', 'Transparent interchange-plus rates', 'Custom volume processing tier']
    },
    {
      step: '03',
      title: 'Go live quickly',
      time: 'Same-day gateway setup',
      description: 'Connect via pre-built shopping cart plugins or REST API keys, test sandboxes, and begin live payment processing with daily payouts.',
      deliverables: ['Production API credentials', 'Shopping cart webhook setup', 'Automated daily payout activation']
    }
  ],

  services: [
    {
      id: 'payin-collections',
      num: '01',
      title: 'Instant UPI & Pay-In Collections',
      summary: 'Accept dynamic UPI, QR, and NetBanking with instant authentication and immediate clearance.',
      description: 'High-capacity dynamic UPI Intent, dynamic QR codes, and NetBanking collections engineered for complex business verticals with robust authorization and daily T+0 settlement.',
      flowNodes: ['UPI / QR Scan', 'Encrypted Payload', 'Bank Routing', 'Instant Approval'],
      features: ['Dynamic QR & UPI Intent support', 'Multi-currency settlement support', 'Direct Tier-1 sponsor bank connections']
    },
    {
      id: 'payout-disbursements',
      num: '02',
      title: 'Instant Payouts & Disbursements',
      summary: '24/7 automated real-time IMPS and NEFT player withdrawals.',
      description: 'Direct bank-to-bank electronic fund transfers with automated beneficiary verification, sub-second clearance, and predictable clearing schedules.',
      flowNodes: ['Bank Verification', 'IMPS Network Rail', 'Clearing House', 'Player Credited'],
      features: ['24/7 Instant IMPS capability', 'Instant beneficiary micro-verification', 'High-capacity daily disbursement limits']
    },
    {
      id: 'ai-fraud',
      num: '03',
      title: 'AI Fraud Detection',
      summary: 'Adaptive rules to stop suspicious behavior.',
      description: 'Machine learning fraud defense that evaluates device fingerprints, IP geolocation, proxy signals, and velocity anomalies in real time without creating false positives.',
      flowNodes: ['Transaction Payload', 'Behavioral Analysis', 'AI Risk Assessment', 'Instant Decision'],
      features: ['Real-time risk scoring', 'Custom velocity and proxy rules', 'Device reputation database indexing']
    },
    {
      id: 'payment-gateways',
      num: '04',
      title: 'Payment Gateways',
      summary: 'Connect with trusted gateway ecosystems.',
      description: 'Enterprise gateway infrastructure featuring multi-MID load balancing, smart cascading, tokenized customer vaults, and zero downtime API redundancy.',
      flowNodes: ['Merchant Storefront', 'Tokenized Gateway', 'Multi-MID Router', 'Payment Network'],
      features: ['Multi-MID volume load balancing', 'Over 50+ shopping cart integrations', 'Secure encrypted vault']
    },
    {
      id: 'approval-optimization',
      num: '05',
      title: 'Approval Optimization',
      summary: 'Recover good orders that are falsely declined.',
      description: 'Intelligent cascading architecture that reroutes soft declines through secondary acquiring bank networks with optimized transaction data to capture legitimate revenue.',
      flowNodes: ['Soft Decline', 'Risk Re-Analysis', 'Acquirer Cascading', 'Transaction Approved'],
      features: ['Automated decline salvage routing', 'Bank-level routing optimization', 'Smart retry scheduling for subscriptions']
    },
    {
      id: 'chargeback-protection',
      num: '06',
      title: 'Dispute Protection',
      summary: 'Dispute prevention and faster response cycles.',
      description: 'Comprehensive dispute defense combining early alerts, automated merchant refunds, and representment evidence automation to keep dispute ratios well below bank thresholds.',
      flowNodes: ['Payment In Dispute', 'Pre-Dispute Alert', 'Protection Workflow', 'Deflected & Resolved'],
      features: ['Real-time early warning integration', 'Automated threshold monitoring alerts', 'End-to-end representment support']
    }
  ],

  industries: [
    { id: 'ind-1', name: 'Adult', category: 'Digital', desc: 'High-volume discrete digital content & streaming platforms with chargeback defense.' },
    { id: 'ind-2', name: 'Collection Agencies', category: 'Financial', desc: 'Debt collection & recovery services requiring strict compliance and virtual terminal MOTO.' },
    { id: 'ind-3', name: 'CBD', category: 'Retail', desc: 'Compliant hemp, delta, and wellness products with direct bank relationships.' },
    { id: 'ind-4', name: 'Dropshipping', category: 'Retail', desc: 'E-commerce fulfillment models with multi-supplier velocity controls and dispute management.' },
    { id: 'ind-5', name: 'E-Cig & Vape', category: 'Retail', desc: 'Regulated online age-verified consumer vape & e-liquid distribution.' },
    { id: 'ind-6', name: 'Extended Warranty', category: 'Subscription', desc: 'Consumer protection plans, recurring continuity warranties, and policy billing.' },
    { id: 'ind-7', name: 'Firearms & Guns', category: 'Specialized', desc: 'Licensed online sporting goods, accessories, and FFL retailer processing.' },
    { id: 'ind-8', name: 'Online Casino & iGaming', category: 'Digital', desc: 'Live dealer casino, slots, roulette, instant player deposits & real-time winning payouts.' },
    { id: 'ind-9', name: 'High-Ticket Coaching', category: 'Specialized', desc: 'Consulting, masterminds, and professional executive courses with high order values.' },
    { id: 'ind-10', name: 'Jewelry', category: 'Retail', desc: 'Luxury diamonds, precious metals, and high-value physical goods e-commerce.' },
    { id: 'ind-11', name: 'Large Ticket Accounts', category: 'Financial', desc: 'B2B enterprise transactions, commercial wholesale, and invoice settlements over ₹10 Lakhs.' },
    { id: 'ind-12', name: 'Lending', category: 'Financial', desc: 'Peer-to-peer lending platforms, installment loans, and consumer micro-finance.' },
    { id: 'ind-13', name: 'Moving & Transportation', category: 'Specialized', desc: 'Long-distance logistics, freight carriers, and scheduled deposit workflows.' },
    { id: 'ind-14', name: 'Multi-Level Marketing', category: 'Subscription', desc: 'Direct selling organizations with distributor commissions and recurring memberships.' },
    { id: 'ind-15', name: 'Nutraceutical', category: 'Subscription', desc: 'Dietary supplements, health continuity subscriptions, and botanical formulations.' },
    { id: 'ind-16', name: 'Online Dating', category: 'Subscription', desc: 'Social connection platforms, recurring membership renewals, and token purchases.' },
    { id: 'ind-17', name: 'Online Furniture', category: 'Retail', desc: 'Custom home furnishings with extended fulfillment timelines and large deposits.' },
    { id: 'ind-18', name: 'Psychics', category: 'Digital', desc: 'Astrology, tarot, and online advisory consulting billed by minute or session.' },
    { id: 'ind-19', name: 'Recurring Billing', category: 'Subscription', desc: 'SaaS platforms, digital continuity clubs, and automated subscription engines.' },
    { id: 'ind-20', name: 'SEO & SEM', category: 'Specialized', desc: 'Digital marketing agencies, performance campaigns, and monthly retainer models.' },
    { id: 'ind-21', name: 'Software & eBooks', category: 'Digital', desc: 'Digital downloadable intellectual property, license keys, and developer utilities.' },
    { id: 'ind-22', name: 'Telemedicine', category: 'Specialized', desc: 'Virtual medical consults, digital pharmacy fulfillment, and health subscriptions.' },
    { id: 'ind-23', name: 'Travel', category: 'Specialized', desc: 'Airlines, charter tours, vacation rentals, and advance booking reservations.' },
    { id: 'ind-24', name: 'Web Design & Hosting', category: 'Digital', desc: 'Cloud infrastructure providers, dedicated servers, and managed design retainers.' }
  ],

  resources: [
    {
      id: 'res-1',
      category: 'PAYMENT INTELLIGENCE',
      title: 'Common Payment Decline Codes',
      summary: 'A complete merchant guide to understanding bank response codes (05 Do Not Honor, 51 Insufficient Funds, 62 Restricted Route) and strategies to recover failed payments.',
      readTime: '6 min read'
    },
    {
      id: 'res-2',
      category: 'MERCHANT ARCHITECTURE',
      title: 'Merchant ID (MID) Guide',
      summary: 'Everything high-risk merchants need to know about MIDs, multi-MID load balancing strategies, acquiring bank diversification, and account longevity.',
      readTime: '8 min read'
    },
    {
      id: 'res-3',
      category: 'VOLUME MANAGEMENT',
      title: 'What Is MTOT Disc?',
      summary: 'Demystifying Monthly Transaction Processing Limits (MTOT), rolling reserves, and how to scale processing volume caps without triggering account freezes.',
      readTime: '5 min read'
    },
    {
      id: 'res-4',
      category: 'FEE TRANSPARENCY',
      title: 'Merchant Account Fees 101',
      summary: 'Understanding interchange-plus pricing models, network assessments, rolling reserve mechanics, and dispute ratio calculation benchmarks.',
      readTime: '10 min read'
    }
  ],

  testimonials: [
    {
      quote: 'Vserve24 scaled our Online Casino platform from ₹80 Lakhs to ₹6 Crores monthly. Real-time instant auth eliminated player deposit drop-offs, and 0% rolling reserve transformed our liquidity.',
      type: 'Online Casino Platform Lead',
      vertical: 'Online Casino & iGaming',
      highlight: 'Instant Deposit Clearance & 0% Rolling Reserve'
    },
    {
      quote: 'As a Forex and CFD brokerage, standard aggregators constantly froze our funding rails. Vserve24 provided dedicated direct sponsor MIDs with daily T+1 IMPS bank settlement and zero downtime.',
      type: 'Forex & CFD Brokerage CEO',
      vertical: 'Forex & Prop Trading',
      highlight: 'High-Velocity Trader Funding & Direct Tier-1 MIDs'
    },
    {
      quote: 'The automated Verifi RDR shield keeps our dispute ratio at 0.18%, completely protecting our high-volume crypto and online casino payment rails.',
      type: 'Crypto & Casino Platform Founder',
      vertical: 'Crypto & Online Casino',
      highlight: '90% Pre-Dispute Interception & Clean Ratios'
    }
  ],

  faqs: [
    {
      id: 'faq-1',
      question: 'Do you provide direct payment gateways for Casino, Gaming and Forex Trading platforms?',
      answer: 'Yes! Vserve24 is specifically engineered for high-velocity Online Casino, iGaming, Forex trading, and crypto platforms. We provide dedicated corporate MIDs registered with Tier-1 sponsor acquiring banks, instant real-time authorization, multi-currency settlement (INR, USD, EUR, GBP), and automated cascading fallback.'
    },
    {
      id: 'faq-2',
      question: 'How quickly can our Casino or Trading platform get approved and go live?',
      answer: 'Our high-risk underwriting desk provides formal sponsor bank decisions within 24 hours of receiving KYC/KYB documents. Once approved, production API keys and REST webhooks are issued immediately for same-day live processing and T+1 daily batch settlements.'
    },
    {
      id: 'faq-3',
      question: 'How does Vserve24 protect our merchant accounts from aggregator shutdowns?',
      answer: 'Pooled aggregators (Stripe, PayPal, Shopify Payments) combine all merchants under a single master account, causing sudden algorithmic freezes. With Vserve24, you receive an independent Dedicated Merchant ID (MID) in your corporate name with custom volume caps, zero pooled risk, and native Verifi/Ethoca chargeback shields.'
    },
    {
      id: 'faq-4',
      question: 'What are the rolling reserve requirements for high-risk trading and casino merchants?',
      answer: 'Established merchants with 3+ months clean statements receive 0% Rolling Reserve on direct Tier-1 rails. Fresh platforms start with standard 5% rolling reserve which automatically steps down to 0% after 90 days of consistent settlement stability.'
    }
  ]
};
