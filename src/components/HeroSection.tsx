
import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-vello-blue to-vello-blue/80 text-white py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Domine as 116 Estratégias para Faturar 6 Dígitos/Mês!
            </h1>
            <p className="text-xl opacity-90 mb-6">
              A mesma metodologia usada por marcas como Mio Capelli e Foot's para escalar vendas.
            </p>
            <button className="ctaButton flex items-center gap-2 text-lg">
              Quero Acessar o Checklist Agora
              <ArrowRight size={20} />
            </button>
            <p className="mt-3 text-sm opacity-80">
              100% gratuito para clientes da Vello.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <div className="rounded-xl overflow-hidden shadow-2xl">
              <iframe 
                width="100%" 
                height="315" 
                src="https://www.youtube.com/embed/6yLFfiayjX0" 
                title="Depoimento Checklist 100K" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                className="w-full"
              ></iframe>
            </div>
            <p className="text-center mt-3 opacity-90">
              Assista ao depoimento de quem já aplicou o checklist
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
