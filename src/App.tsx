import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustProof } from './components/TrustProof';
import { ProblemSolution } from './components/ProblemSolution';
import { Features } from './components/Features';
import { ProductShowcase } from './components/ProductShowcase';
import { Pricing } from './components/Pricing';
import { Testimonial } from './components/Testimonial';
import { TrialForm } from './components/TrialForm';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { DemoModal } from './components/DemoModal';
import { QuickTrialModal } from './components/QuickTrialModal';
import { LoginModal } from './components/LoginModal';
import { MobileStickyCTA } from './components/MobileStickyCTA';

export default function App() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [isTrialModalOpen, setIsTrialModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [selectedPlanForTrial, setSelectedPlanForTrial] = useState('Growth');

  const scrollToTrialForm = (planName?: string) => {
    if (planName) {
      setSelectedPlanForTrial(planName);
    }
    const formElement = document.getElementById('trial-signup');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      setIsTrialModalOpen(true);
    }
  };

  const handleOpenTrialModal = (planName: string = 'Growth') => {
    setSelectedPlanForTrial(planName);
    // On desktop, smooth scroll to the low-friction form for natural conversion flow
    // or open popup if clicked from mobile sticky
    if (window.innerWidth < 640) {
      setIsTrialModalOpen(true);
    } else {
      scrollToTrialForm(planName);
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col antialiased selection:bg-indigo-100 selection:text-indigo-900">
      {/* SaaS Navigation */}
      <Navbar
        onOpenTrial={() => handleOpenTrialModal('Growth')}
        onOpenLogin={() => setIsLoginModalOpen(true)}
        onOpenDemo={() => setIsDemoModalOpen(true)}
      />

      <main className="flex-1">
        {/* Hero with realistic SaaS dashboard */}
        <Hero
          onOpenTrial={() => handleOpenTrialModal('Growth')}
          onOpenDemo={() => setIsDemoModalOpen(true)}
        />

        {/* Compact Trust & Metrics Bar */}
        <TrustProof />

        {/* Unified System vs Fragmented Stack */}
        <ProblemSolution />

        {/* 6-Grid Core Features */}
        <Features onOpenTrial={() => handleOpenTrialModal('Growth')} />

        {/* Full-width Product Dashboard Browser Showcase */}
        <ProductShowcase />

        {/* Transparent 3-Card Pricing Section */}
        <Pricing onSelectPlan={(plan) => handleOpenTrialModal(plan)} />

        {/* Understated Authentic Testimonial */}
        <Testimonial />

        {/* Low-Friction 3-Field Trial Signup Form */}
        <TrialForm initialPlan={selectedPlanForTrial} />

        {/* Final Conversion Block */}
        <FinalCTA onOpenTrial={() => handleOpenTrialModal('Growth')} />
      </main>

      {/* Minimal Modern SaaS Footer */}
      <Footer />

      {/* Mobile Sticky Conversion Banner */}
      <MobileStickyCTA onOpenTrial={() => setIsTrialModalOpen(true)} />

      {/* Interactive 2-Minute Demo Walkthrough Modal */}
      <DemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
        onStartTrial={() => {
          setIsDemoModalOpen(false);
          handleOpenTrialModal('Growth');
        }}
      />

      {/* Quick Trial Modal */}
      <QuickTrialModal
        isOpen={isTrialModalOpen}
        onClose={() => setIsTrialModalOpen(false)}
        selectedPlan={selectedPlanForTrial}
      />

      {/* Staff / Owner Login Modal */}
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        onSwitchToTrial={() => {
          setIsLoginModalOpen(false);
          handleOpenTrialModal('Growth');
        }}
      />
    </div>
  );
}
