
import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const PreviewSection: React.FC = () => {
  const checklistItems = [
    "Checkout sem cadastro obrigatório",
    "SEO para +50% de tráfego orgânico",
    "Pixel de rastreamento otimizado",
    "Funil de recuperação de carrinho abandonado",
    "Estratégia de marketplace + loja própria",
    "Otimização de imagens para velocidade de carregamento"
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="sectionTitle">Conheça Algumas Estratégias do Checklist 100K</h2>
        
        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8 mb-10">
          {checklistItems.map((item, index) => (
            <div key={index} className="bullet">
              <Check className="checkbox" />
              <span className="text-gray-800">{item}</span>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Link to="/checklist" className="secondaryCTA flex items-center gap-2 mx-auto">
            Ver Todos os 116 Pontos
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PreviewSection;
