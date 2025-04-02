import React from 'react';
import { CheckCircle, Clock, Cloud, Gift, BarChart3, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ROASCalculator from './ROASCalculator';

const BenefitsSection: React.FC = () => {
  const benefits = [
    {
      icon: <CheckCircle className="benefitIcon" />,
      title: "116 Estratégias Validadas",
      description: "Testadas e aprovadas em mais de 350+ e-commerces de sucesso em diferentes nichos"
    },
    {
      icon: <Clock className="benefitIcon" />,
      title: "Resultados Imediatos",
      description: "Implementações rápidas que podem aumentar suas vendas em até 30% no primeiro mês"
    },
    {
      icon: <Cloud className="benefitIcon" />,
      title: "Acesso Vitalício",
      description: "Sincronização na nuvem e atualizações gratuitas para sempre"
    },
    {
      icon: <BarChart3 className="benefitIcon" />,
      title: "Metas Atingíveis",
      description: "Plano de implementação estruturado para crescimento sustentável"
    }
  ];

  return (
    <section className="py-16 bg-vello-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-vello-blue px-3 py-1 rounded-full text-white text-sm font-semibold mb-2">DIFERENCIAL EXCLUSIVO</span>
          <h2 className="text-3xl md:text-4xl font-bold text-vello-blue">Por Que o Checklist 100K Transformará Seu E-Commerce</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">Desenvolvido após anos de estudos e implementações com centenas de lojistas, o Checklist 100K é o caminho mais curto para escalar seu faturamento.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="card text-center transform transition-transform duration-300 hover:-translate-y-2">
              <div className="flex justify-center">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-vello-blue mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-xl shadow-xl p-8">
          <h3 className="text-2xl font-bold text-vello-blue mb-6 text-center">Calcule o Impacto do Checklist 100K no Seu Negócio</h3>
          <ROASCalculator />
        </div>

        <div className="mt-12 text-center">
          <Link to="/beneficios" className="secondaryCTA inline-flex items-center gap-2 group">
            Ver Todos os Benefícios
            <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
