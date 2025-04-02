
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import BenefitsSection from '@/components/BenefitsSection';
import PreviewSection from '@/components/PreviewSection';
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
      <TestimonialsSection />
      <div className="py-12 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-vello-blue">Explore Mais Sobre o Checklist 100K</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <a href="/beneficios" className="card hover:shadow-xl transition-all relative group overflow-hidden">
              <div className="absolute w-full h-full bg-vello-blue/5 -inset-full group-hover:inset-0 transition-all duration-300 z-0"></div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-vello-blue">Benefícios Completos</h3>
                <p className="text-gray-600">Conheça todos os benefícios exclusivos do Checklist 100K</p>
              </div>
            </a>
            
            <a href="/preview" className="card hover:shadow-xl transition-all relative group overflow-hidden">
              <div className="absolute w-full h-full bg-vello-blue/5 -inset-full group-hover:inset-0 transition-all duration-300 z-0"></div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-vello-blue">Preview Detalhado</h3>
                <p className="text-gray-600">Veja exemplos práticos das estratégias incluídas</p>
              </div>
            </a>
            
            <a href="/mentoria" className="card hover:shadow-xl transition-all relative group overflow-hidden">
              <div className="absolute w-full h-full bg-vello-blue/5 -inset-full group-hover:inset-0 transition-all duration-300 z-0"></div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-vello-blue">Acelere com Mentoria</h3>
                <p className="text-gray-600">Maximize resultados com apoio personalizado da Vello</p>
              </div>
            </a>
          </div>
        </div>
      </div>
      <Footer />
      <CTAFloating />
      
      <div className="h-16 md:h-0"></div>
    </div>
  );
};

export default Index;
