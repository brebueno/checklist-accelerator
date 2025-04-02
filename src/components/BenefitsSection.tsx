
import React from 'react';
import { CheckCircle, Clock, CloudSync, Gift } from 'lucide-react';

const BenefitsSection: React.FC = () => {
  const benefits = [
    {
      icon: <CheckCircle className="benefitIcon" />,
      title: "116 Pontos Validados",
      description: "por 350+ E-commerces de Sucesso"
    },
    {
      icon: <Clock className="benefitIcon" />,
      title: "Acesso Vitalício",
      description: "com Atualizações Automáticas"
    },
    {
      icon: <CloudSync className="benefitIcon" />,
      title: "Funciona Offline",
      description: "e Sincroniza na Nuvem"
    },
    {
      icon: <Gift className="benefitIcon" />,
      title: "Bônus Exclusivo",
      description: "1 Hora de Mentoria com a Vello"
    }
  ];

  return (
    <section className="py-16 bg-vello-gray">
      <div className="container mx-auto px-4">
        <h2 className="sectionTitle">Por Que Este Checklist É Diferente?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="card text-center">
              <div className="flex justify-center">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-vello-blue mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
