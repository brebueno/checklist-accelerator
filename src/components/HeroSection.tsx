
import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-vello-blue to-vello-blue/80 text-white py-12 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <div className="inline-block bg-vello-orange/20 px-3 py-1 rounded-full mb-4">
              <span className="text-vello-orange font-semibold">Exclusivo Vello</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
              O Checklist de 116 Estratégias Que Levou 350+ E-commerces a Faturarem 6 Dígitos
            </h1>
            <div className="flex items-center gap-2 mb-6">
              <CheckCircle size={20} className="text-vello-orange" />
              <p className="text-lg opacity-90">
                Transforme seu negócio com estratégias validadas pelo mercado
              </p>
            </div>
            <Link to="/checklist" className="ctaButton flex items-center gap-2 text-lg group">
              Quero Acessar o Checklist Agora
              <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <p className="mt-3 text-sm opacity-80">
              100% gratuito para clientes da Vello
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
