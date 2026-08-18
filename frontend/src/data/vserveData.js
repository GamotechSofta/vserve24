export const vserveData = {
  brand: {
    name: 'VSERVE24',
    tagline: 'No setup fees • Daily payouts • 24h approvals',
    headline: 'Powering high-risk businesses with payment confidence',
    description: 'Vserve24 helps complex businesses process cards and ACH with stronger approval performance, adaptive risk controls, and chargeback defense.',
    positioning: 'Built for merchants traditional processors reject',
    positioningDesc: 'A high-risk merchant account is designed for businesses with elevated fraud, chargeback, or regulatory complexity. Vserve24 combines payment infrastructure and risk strategy so you can scale sustainably.'
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
      description: 'Online, phone, and virtual terminal support for complex sales channels.',
      badge: 'Omnichannel Routing',
      metric: 'Omnichannel'
    },
    {
      letter: 'B',
      title: 'Subscription ready',
      description: 'Recurring billing workflows and account updater tools for continuity.',
      badge: 'Continuity Billing',
      metric: 'Automated Lifecycle'
    },
    {
      letter: 'C',
      title: 'Dispute controls',
      description: 'Chargeback alerts, Ethoca/Verifi RDR networks, and representment support.',
      badge: 'Shield Architecture',
      metric: 'Pre-Dispute Alerts'
    }
  ],

  capabilitiesData: [
    {
      id: 'multi-channel',
      tabTitle: 'Multi-channel Acceptance',
      headline: 'Process cards and ACH across every commercial customer touchpoint',
      description: 'Accept payments through hosted checkout forms, developer REST APIs, MOTO virtual terminals, and batch file uploads under one unified processing gateway.',
      channels: [
        { label: 'Online Storefront', desc: 'Embedded checkout with tokenized card vaulting', status: 'API Connected' },
        { label: 'Virtual Terminal', desc: 'Secure browser-based MOTO entry with 2FA authentication', status: 'Active Console' },
        { label: 'Recurring Engine', desc: 'Automated card-on-file billing schedules & proration', status: 'Continuous' }
      ],
      flowSteps: ['Customer Order', 'Secure Tokenization', 'Gateway Encryption', 'Direct Acquirer Routing', 'Approved Settlement']
    },
    {
      id: 'subscription',
      tabTitle: 'Subscription Ready',
      headline: 'Built specifically for high-velocity recurring billing continuity',
      description: 'Engineered with intelligent decline salvage rules, automated card account updaters, and cascading retry algorithms to eliminate involuntary subscriber churn.',
      channels: [
        { label: 'Smart Retry Logic', desc: 'Dynamic timing algorithm based on issuer bank patterns', status: 'Automated' },
        { label: 'Account Updater', desc: 'Direct Visa/Mastercard real-time expiry & card refresh', status: 'Zero-Drop' },
        { label: 'Proration Engine', desc: 'Multi-tier plans, metered billing & custom trial intervals', status: 'Flexible' }
      ],
      flowSteps: ['Initial Signup', 'Recurring Cycle', 'Dynamic Cascading', 'Account Updater', 'Settlement Engine']
    },
    {
      id: 'dispute-controls',
      tabTitle: 'Dispute Controls',
      headline: 'Automated pre-dispute deflection to preserve healthy merchant ratios',
      description: 'Intercept cardholder inquiries before they convert into formal chargebacks through native integration with Ethoca Consumer Clarity and Verifi Rapid Dispute Resolution (RDR).',
      channels: [
        { label: 'Ethoca Alerts', desc: 'Early warning signals direct from issuing banks', status: 'Pre-Chargeback' },
        { label: 'Verifi RDR', desc: 'Automated instant refund rules configured by descriptor', status: 'Auto-Deflect' },
        { label: 'Evidence Builder', desc: 'Templated representment packets with signature proof', status: 'Rapid Reversal' }
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
      id: 'credit-card',
      num: '01',
      title: 'Credit Card Processing',
      summary: 'Accept cards online, over phone, and in person.',
      description: 'High-capacity Visa, Mastercard, AMEX, and Discover processing engineered for complex business verticals with robust authorization performance and daily batch settlement.',
      flowNodes: ['Card Authorization', 'Encrypted Payload', 'Bank Routing', 'Instant Approval'],
      features: ['Level 2 & Level 3 data support', 'Multi-currency settlement in 30+ currencies', 'Direct tier-1 processor connections']
    },
    {
      id: 'ach-processing',
      num: '02',
      title: 'ACH Processing',
      summary: 'Lower costs with direct debit and eCheck rails.',
      description: 'Direct bank-to-bank electronic fund transfers with automated routing verification, lower interchange overhead, and predictable clearing schedules.',
      flowNodes: ['Bank Verification', 'ACH Network Rail', 'Clearing House', 'Merchant Settlement'],
      features: ['Same-Day ACH capability', 'Instant bank account micro-verification', 'Lower cost structure than card interchange']
    },
    {
      id: 'ai-fraud',
      num: '03',
      title: 'AI Fraud Detection',
      summary: 'Adaptive rules to stop suspicious behavior.',
      description: 'Machine learning fraud defense that evaluates device fingerprints, IP geolocation, proxy signals, and velocity anomalies in real time without creating false positives.',
      flowNodes: ['Transaction Payload', 'Behavioral Analysis', 'AI Risk Assessment', 'Instant Decision'],
      features: ['Dynamic 3D Secure 2.2 routing', 'Custom velocity and proxy rules', 'Device reputation database indexing']
    },
    {
      id: 'payment-gateways',
      num: '04',
      title: 'Payment Gateways',
      summary: 'Connect with trusted gateway ecosystems.',
      description: 'Enterprise gateway infrastructure featuring multi-MID load balancing, smart cascading, tokenized customer vaults, and zero downtime API redundancy.',
      flowNodes: ['Merchant Storefront', 'Tokenized Gateway', 'Multi-MID Router', 'Payment Network'],
      features: ['Multi-MID volume load balancing', 'Over 50+ shopping cart integrations', 'PCI-compliant tokenized vault']
    },
    {
      id: 'approval-optimization',
      num: '05',
      title: 'Approval Optimization',
      summary: 'Recover good orders that are falsely declined.',
      description: 'Intelligent cascading architecture that reroutes soft declines through secondary acquiring bank networks with optimized transaction data to capture legitimate revenue.',
      flowNodes: ['Soft Decline', 'Risk Re-Analysis', 'Acquirer Cascading', 'Transaction Approved'],
      features: ['Automated decline salvage routing', 'BIN-level interchange optimization', 'Smart retry scheduling for subscriptions']
    },
    {
      id: 'chargeback-protection',
      num: '06',
      title: 'Chargeback Protection',
      summary: 'Dispute prevention and faster response cycles.',
      description: 'Comprehensive dispute defense combining Ethoca, Verifi RDR, automated merchant refunds, and representment evidence automation to keep dispute ratios well below bank thresholds.',
      flowNodes: ['Payment In Dispute', 'Pre-Dispute Alert', 'Protection Workflow', 'Deflected & Resolved'],
      features: ['Real-time Ethoca & Verifi RDR integration', 'Automated threshold monitoring alerts', 'End-to-end representment support']
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
    { id: 'ind-8', name: 'Fantasy Sports', category: 'Digital', desc: 'Skill-based contests, league deposits, and high-frequency digital micropayments.' },
    { id: 'ind-9', name: 'High-Ticket Coaching', category: 'Specialized', desc: 'Consulting, masterminds, and professional executive courses with high order values.' },
    { id: 'ind-10', name: 'Jewelry', category: 'Retail', desc: 'Luxury diamonds, precious metals, and high-value physical goods e-commerce.' },
    { id: 'ind-11', name: 'Large Ticket Accounts', category: 'Financial', desc: 'B2B enterprise transactions, commercial wholesale, and invoice settlements over $10K.' },
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
      title: 'Common Credit Card Decline Codes',
      summary: 'A complete merchant guide to understanding issuer response codes (05 Do Not Honor, 51 Insufficient Funds, 62 Restricted Card) and strategies to recover failed payments.',
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
      summary: 'Understanding interchange-plus pricing models, card association assessments, rolling reserve mechanics, and chargeback ratio calculation benchmarks.',
      readTime: '10 min read'
    }
  ],

  testimonials: [
    {
      quote: 'Our approval rates improved in the first month, and onboarding was much faster than previous providers.',
      type: 'eCommerce Brand',
      vertical: 'Nutraceutical',
      highlight: 'Faster Underwriting & Direct Bank Integration'
    },
    {
      quote: 'The dispute support team helped us reduce chargebacks and protect recurring revenue.',
      type: 'Subscription Business',
      vertical: 'Telemedicine',
      highlight: 'Active Chargeback Deflection'
    },
    {
      quote: 'Reliable processing, clear communication, and excellent support for a high-risk model.',
      type: 'Growth Merchant',
      vertical: 'Online Services',
      highlight: 'Multi-Channel Gateway Stability'
    }
  ],

  faqs: [
    {
      id: 'faq-1',
      question: 'How quickly can we start processing?',
      answer: 'Most merchants can complete onboarding and begin processing within a few business days after underwriting approval. Our high-risk underwriting pipeline delivers decisions within 24 hours of receiving complete documentation, followed by immediate sandbox testing and production gateway credentials.'
    },
    {
      id: 'faq-2',
      question: 'Do you support recurring billing businesses?',
      answer: 'Yes. Vserve24 is engineered specifically for continuity, membership, and subscription models. Our gateway features dynamic retry logic, automatic Visa and Mastercard account updaters, proration workflows, and tokenized customer vaults.'
    },
    {
      id: 'faq-3',
      question: 'Can you help reduce chargebacks?',
      answer: 'Yes. We natively integrate pre-dispute alert networks (Ethoca Consumer Clarity and Verifi Rapid Dispute Resolution / RDR). These networks alert you to customer disputes in real time, enabling automatic refunds before they register as formal chargebacks against your processing ratios.'
    },
    {
      id: 'faq-4',
      question: 'Which industries do you work with?',
      answer: 'We specialize in over 100 high-risk and hard-to-place categories including nutraceuticals, CBD, subscription continuity, adult entertainment, dropshipping, travel, fantasy sports, telemarketing, telemedicine, collection agencies, high-ticket coaching, and specialized retail.'
    }
  ]
};
