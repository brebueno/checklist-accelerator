
import React from 'react';
import { CheckCircle, Clock, Cloud, BarChart3, ArrowRight, Zap, ChartBar, Target, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const BenefitsSection: React.FC = () => {
  const benefits = [
    {
      icon: <CheckCircle className="benefitIcon" />,
      title: "116 Estratégias Validadas",
      description: "Testadas e aprovadas em mais de 350+ e-commerces que alcançaram 6 dígitos de faturamento"
    },
    {
      icon: <Clock className="benefitIcon" />,
      title: "Resultados em 30 Dias",
      description: "Implementações rápidas que já demonstraram aumentar as vendas em até 40% no primeiro mês"
    },
    {
      icon: <Cloud className="benefitIcon" />,
      title: "Acesso Vitalício",
      description: "Atualizações constantes com as novidades do mercado e suporte técnico por 12 meses"
    },
    {
      icon: <BarChart3 className="benefitIcon" />,
      title: "Crescimento Sustentável",
      description: "Plano de implementação estruturado para escalar seu negócio sem queimar caixa"
    }
  ];

  const metrics = [
    {
      icon: <TrendingUp className="text-vello-orange" size={28} />,
      title: "45% de aumento",
      description: "Na taxa de conversão em apenas 60 dias"
    },
    {
      icon: <Target className="text-vello-orange" size={28} />,
      title: "30% de redução",
      description: "No custo de aquisição de clientes (CAC)"
    },
    {
      icon: <ChartBar className="text-vello-orange" size={28} />,
      title: "85% de crescimento",
      description: "No valor vitalício do cliente (LTV)"
    }
  ];

  return (
    <section className="py-16 bg-vello-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-vello-orange px-3 py-1 rounded-full text-white text-sm font-semibold mb-2">DIFERENCIAL EXCLUSIVO</span>
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
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-vello-blue mb-4">Resultados Reais de Quem Implementou o Checklist 100K</h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Os números não mentem. Veja o impacto direto no crescimento dos e-commerces que aplicaram nosso método:
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {metrics.map((metric, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg text-center border-t-4 border-vello-orange">
                <div className="flex justify-center mb-4">
                  <div className="rounded-full bg-vello-orange/10 p-3">
                    {metric.icon}
                  </div>
                </div>
                <h4 className="text-2xl font-bold text-vello-blue mb-2">{metric.title}</h4>
                <p className="text-gray-600">{metric.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-10 bg-vello-blue/5 p-6 rounded-lg border border-vello-blue/20">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-1">
                <h4 className="text-xl font-bold text-vello-blue mb-3 flex items-center">
                  <Zap className="mr-2 text-vello-orange" size={24} />
                  Transforme seu E-commerce Hoje:
                </h4>
                <p className="text-gray-700">
                  O Checklist 100K é usado por marcas que faturam milhões mensalmente. Agora é a sua vez de implementar essas estratégias exclusivas e ver seu negócio crescer consistentemente.
                </p>
              </div>
              <div className="md:w-auto">
                <Link to="/checklist" className="ctaButton inline-flex items-center gap-2 px-8 py-4 text-lg">
                  Acessar o Checklist Agora
                  <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
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
