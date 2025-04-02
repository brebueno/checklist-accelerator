
import React from 'react';
import Navbar from '@/components/Navbar';
import PreviewSection from '@/components/PreviewSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';
import CTAFloating from '@/components/CTAFloating';

const Preview = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="py-8 bg-vello-blue text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-center">Preview do Checklist 100K</h1>
        </div>
      </div>
      <PreviewSection />
      <TestimonialsSection />
      <Footer />
      <CTAFloating />
      
      <div className="h-16 md:h-0"></div>
    </div>
  );
};

export default Preview;
