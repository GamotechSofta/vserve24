import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import MerchantPositioning from './components/MerchantPositioning';
import Capabilities from './components/Capabilities';
import OnboardingFlow from './components/OnboardingFlow';
import ServicesSection from './components/ServicesSection';
import IndustriesSection from './components/IndustriesSection';
import PaymentIntelligence from './components/PaymentIntelligence';
import Testimonials from './components/Testimonials';
import FAQSection from './components/FAQSection';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import ApplicationModal from './components/ApplicationModal';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenApplication = () => {
    setModalOpen(true);
  };

  const handleCloseApplication = () => {
    setModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#FCFBF8] text-[#0B192C] font-['Plus_Jakarta_Sans',sans-serif] antialiased selection:bg-[#FF5500]/15 selection:text-[#FF5500] flex flex-col overflow-x-hidden">
      
      {/* ── Global Header with Official VSERVE24 Logo ── */}
      <Navbar onOpenApplication={handleOpenApplication} />

      {/* ── Main High-Risk Financial Infrastructure Website ── */}
      <main className="flex-1 pt-[72px] sm:pt-[76px]">
        
        {/* Approved Final Hero Section (Protected - Never Modified) */}
        <HeroSection onOpenApplication={handleOpenApplication} />

        {/* 02 — Merchant Positioning: Built for merchants traditional processors reject */}
        <MerchantPositioning onOpenApplication={handleOpenApplication} />

        {/* 03 — Core Capabilities: Multi-channel, Subscription ready, Dispute controls */}
        <Capabilities />

        {/* 04 — How Onboarding Works: 3-Step Interactive Connected Timeline */}
        <OnboardingFlow onOpenApplication={handleOpenApplication} />

        {/* 05 — Core Payment Services: 6 Dynamic Service Interactive Systems */}
        <ServicesSection onOpenApplication={handleOpenApplication} />

        {/* 06 — High-Risk Industries: 24 Specialized Merchant Directory with 3D Orbit Radar */}
        <IndustriesSection onOpenApplication={handleOpenApplication} />

        {/* 07 — Payment Intelligence & Global Processing Pipeline */}
        <PaymentIntelligence onOpenApplication={handleOpenApplication} />

        {/* 08 — Verified Merchant Testimonials Carousel */}
        <Testimonials />

        {/* 09 — Frequently Asked Questions Accordion */}
        <FAQSection />

        {/* 10 — Final High-Conversion Concluding CTA */}
        <FinalCTA onOpenApplication={handleOpenApplication} />

      </main>

      {/* 11 — Enterprise Financial Infrastructure Footer */}
      <Footer onOpenApplication={handleOpenApplication} />

      {/* ── Streamlined 24h Underwriting Intake Modal ── */}
      <ApplicationModal isOpen={modalOpen} onClose={handleCloseApplication} />

    </div>
  );
}
