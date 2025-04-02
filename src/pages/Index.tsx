
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import BenefitsSection from '@/components/BenefitsSection';
import PreviewSection from '@/components/PreviewSection';
import UrgencySection from '@/components/UrgencySection';
import MentoriaSection from '@/components/MentoriaSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';
import CTAFloating from '@/components/CTAFloating';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <HeroSection />
      <BenefitsSection />
      <PreviewSection />
      <UrgencySection />
      <TestimonialsSection />
      <MentoriaSection />
      <Footer />
      <CTAFloating />
      
      {/* Adicione padding-bottom para evitar que o CTA fixo cubra o conteúdo no final da página */}
      <div className="h-16 md:h-0"></div>
    </div>
  );
};

export default Index;
