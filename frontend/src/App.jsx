import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import MerchantPositioning from './components/MerchantPositioning';
import FeeCalculator from './components/FeeCalculator';
import ServicesSection from './components/ServicesSection';
import IndustriesSection from './components/IndustriesSection';
import VirtualTerminalDemo from './components/VirtualTerminalDemo';
import ApiPlayground from './components/ApiPlayground';
import PaymentIntelligence from './components/PaymentIntelligence';
import ResourcesSection from './components/ResourcesSection';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import ApplicationModal from './components/ApplicationModal';
import MerchantPortalModal from './components/MerchantPortalModal';
import UnderwriterChatDrawer from './components/UnderwriterChatDrawer';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalParams, setModalParams] = useState(null);
  const [portalOpen, setPortalOpen] = useState(false);

  const handleOpenApplication = (params = null) => {
    if (params) {
      setModalParams(params);
    }
    setModalOpen(true);
  };

  const handleCloseApplication = () => {
    setModalOpen(false);
    setModalParams(null);
  };

  const handleOpenPortal = () => {
    setPortalOpen(true);
  };

  const handleClosePortal = () => {
    setPortalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#FCFBF8] text-[#0B192C] font-['Plus_Jakarta_Sans',sans-serif] antialiased selection:bg-[#FF5500]/15 selection:text-[#FF5500] flex flex-col overflow-x-hidden">
      
      {/* ── Global Header with Official VSERVE24 Logo & Portal Trigger ── */}
      <Navbar 
        onOpenApplication={() => handleOpenApplication()} 
        onOpenPortal={handleOpenPortal}
      />

      {/* ── Main High-Risk Financial Infrastructure Website ── */}
      <main className="flex-1 pt-[72px] sm:pt-[76px]">
        
        {/* 01 — Approved Hero Section */}
        <HeroSection onOpenApplication={() => handleOpenApplication()} />

        {/* 02 — Merchant Positioning: Built for merchants traditional processors reject */}
        <MerchantPositioning onOpenApplication={() => handleOpenApplication()} />

        {/* [TOOL 1] — Interactive Interchange & Revenue Recovery Calculator */}
        <FeeCalculator onOpenApplication={handleOpenApplication} />

        {/* 04 — Core Payment Services: 6 Dynamic Service Interactive Systems */}
        <ServicesSection onOpenApplication={() => handleOpenApplication()} />

        {/* 05 — High-Risk Industries: 24 Specialized Merchant Directory with 3D Orbit Radar */}
        <IndustriesSection onOpenApplication={() => handleOpenApplication()} />

        {/* [TOOL 3] — Interactive MOTO Virtual Terminal Simulator */}
        <VirtualTerminalDemo onOpenApplication={() => handleOpenApplication()} />

        {/* [TOOL 4] — Developer REST API Sandbox & Real-Time Test Request Playground */}
        <ApiPlayground onOpenApplication={() => handleOpenApplication()} />

        {/* 06 — Payment Intelligence & Global Processing Pipeline */}
        <PaymentIntelligence onOpenApplication={() => handleOpenApplication()} />

        {/* ── Desktop-Only Supplementary Knowledge & Reviews (Hidden on Mobile) ── */}
        <div className="hidden md:block">
          {/* 07 — Merchant Knowledge Base & Decline Code Resources */}
          <ResourcesSection onOpenApplication={() => handleOpenApplication()} />

          {/* 08 — Verified Merchant Testimonials Carousel */}
          <Testimonials />
        </div>

      </main>

      {/* 11 — Enterprise Financial Infrastructure Footer */}
      <Footer onOpenApplication={() => handleOpenApplication()} />

      {/* ── Streamlined 24h Underwriting Intake Modal ── */}
      <ApplicationModal 
        isOpen={modalOpen} 
        onClose={handleCloseApplication} 
        initialParams={modalParams}
      />

      {/* ── Live Merchant Gateway Console Interactive Demo Modal ── */}
      <MerchantPortalModal 
        isOpen={portalOpen} 
        onClose={handleClosePortal}
        onOpenApplication={() => handleOpenApplication()}
      />

      {/* ── Floating Underwriter AI Assistant & Knowledge Desk ── */}
      <UnderwriterChatDrawer onOpenApplication={() => handleOpenApplication()} />

    </div>
  );
}
