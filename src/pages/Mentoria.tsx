
import React from 'react';
import Navbar from '@/components/Navbar';
import MentoriaSection from '@/components/MentoriaSection';
import UrgencySection from '@/components/UrgencySection';
import Footer from '@/components/Footer';
import CTAFloating from '@/components/CTAFloating';

const Mentoria = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="py-8 bg-vello-blue text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-center">Mentoria Premium Vello</h1>
        </div>
      </div>
      <UrgencySection />
      <MentoriaSection />
      <Footer />
      <CTAFloating />
      
      <div className="h-16 md:h-0"></div>
    </div>
  );
};

export default Mentoria;
