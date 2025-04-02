
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import Footer from '@/components/Footer';
import CTAFloating from '@/components/CTAFloating';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <HeroSection />
      <div className="py-12 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-vello-blue">Descubra Como o Checklist 100K Pode Transformar Seu E-commerce</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <a href="/beneficios" className="card hover:shadow-xl transition-all">
              <h3 className="text-xl font-bold text-vello-blue">Benefícios</h3>
              <p className="text-gray-600">Conheça as vantagens exclusivas do Checklist 100K</p>
            </a>
            
            <a href="/preview" className="card hover:shadow-xl transition-all">
              <h3 className="text-xl font-bold text-vello-blue">Preview</h3>
              <p className="text-gray-600">Veja uma amostra das 116 estratégias incluídas</p>
            </a>
            
            <a href="/mentoria" className="card hover:shadow-xl transition-all">
              <h3 className="text-xl font-bold text-vello-blue">Mentoria</h3>
              <p className="text-gray-600">Acelere seus resultados com nosso programa premium</p>
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
