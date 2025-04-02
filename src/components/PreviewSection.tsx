
import React from 'react';
import { Check, ArrowRight, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const PreviewSection: React.FC = () => {
  const checklistItems = [
    "Checkout sem cadastro obrigatório aumenta conversão em até 35%",
    "SEO otimizado para alcançar +50% de tráfego orgânico qualificado",
    "Pixel de rastreamento avançado para reduzir custo de aquisição",
    "Funil automatizado de recuperação de carrinho com 25% de eficácia",
    "Estratégia omnichannel marketplace + loja própria para maximizar margem",
    "Otimização de imagens para velocidade de carregamento sub-2 segundos"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="inline-block bg-vello-orange px-3 py-1 rounded-full text-white text-sm font-semibold mb-2">PRÉVIA EXCLUSIVA</span>
          <h2 className="text-3xl md:text-4xl font-bold text-vello-blue mb-4">Estratégias Comprovadas do Checklist 100K</h2>
          <p className="text-gray-600">Conheça algumas das 116 estratégias que estão transformando e-commerces em todo o Brasil</p>
        </div>
        
        <div className="max-w-3xl mx-auto bg-gradient-to-r from-white to-vello-gray/10 rounded-xl shadow-xl p-8 mb-12 border border-vello-blue/10">
          {checklistItems.map((item, index) => (
            <div key={index} className="flex items-start gap-3 mb-6 group">
              <div className="bg-vello-green/10 rounded-full p-1 group-hover:bg-vello-green transition-colors duration-300">
                <Check className="text-vello-green" size={18} />
              </div>
              <div>
                <span className="text-gray-800 font-medium">{item}</span>
              </div>
            </div>
          ))}
          
          <div className="flex items-center justify-center mt-8 pt-6 border-t border-gray-100">
            <Zap size={20} className="text-vello-orange mr-2" />
            <span className="text-gray-600 italic">E mais 110 estratégias de alto impacto...</span>
          </div>
        </div>
        
        <div className="text-center">
          <Link to="/checklist" className="secondaryCTA inline-flex items-center gap-2 group">
            Acessar o Checklist Completo
            <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PreviewSection;
