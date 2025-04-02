
import React from 'react';
import Navbar from '@/components/Navbar';
import BenefitsSection from '@/components/BenefitsSection';
import Footer from '@/components/Footer';
import CTAFloating from '@/components/CTAFloating';
import { ArrowRight, BarChart3, TrendingUp, Target, CheckSquare, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Benefits = () => {
  const businessImpacts = [
    {
      icon: <TrendingUp className="text-vello-orange" size={36} />,
      title: "Aumento de Conversão",
      description: "Implementando apenas 30% do checklist, nossos clientes registram um aumento médio de 45% na taxa de conversão em 60 dias.",
      stat: "+45%"
    },
    {
      icon: <Target className="text-vello-orange" size={36} />,
      title: "Redução de CAC",
      description: "Otimização técnica do pixel e estratégias de remarketing que reduzem o custo de aquisição em até 30% nos primeiros 90 dias.",
      stat: "-30%"
    },
    {
      icon: <BarChart3 className="text-vello-orange" size={36} />,
      title: "Aumento de LTV",
      description: "Implementação de estratégias de recorrência e recompra que ampliam o valor vitalício do cliente em até 85%.",
      stat: "+85%"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="py-12 bg-vello-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <span className="inline-block bg-vello-orange px-3 py-1 rounded-full text-white text-sm font-semibold mb-4">TRANSFORMAÇÃO DIGITAL</span>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Por Que Você Precisa do Checklist 100K</h1>
          <p className="text-xl max-w-2xl mx-auto opacity-90">
            Descubra como centenas de e-commerces estão escalando para 6 dígitos mensais
          </p>
        </div>
      </div>
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-vello-blue mb-4">
              Impacto Real no Seu Negócio
            </h2>
            <p className="text-gray-600">
              O Checklist 100K não é apenas uma lista de tarefas. É um sistema comprovado para transformar e-commerces comuns em máquinas de vendas.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {businessImpacts.map((impact, index) => (
              <div key={index} className="card relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-vello-orange/10 text-vello-orange font-bold text-2xl px-4 py-2 rounded-bl-lg">
                  {impact.stat}
                </div>
                <div className="mt-8">
                  <div className="mb-4">{impact.icon}</div>
                  <h3 className="text-xl font-bold text-vello-blue mb-2">{impact.title}</h3>
                  <p className="text-gray-600">{impact.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <Zap className="text-vello-orange mb-4" size={36} />
                <h2 className="text-3xl font-bold text-vello-blue mb-4">
                  Totalmente Orientado a Resultados
                </h2>
                <p className="text-gray-600 mb-6">
                  Cada um dos 116 pontos do checklist foi cuidadosamente testado e validado em centenas de e-commerces reais, com resultados mensuráveis e comprovados.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckSquare className="text-vello-green mt-1" size={20} />
                    <p className="text-gray-700">Estratégias organizadas por prioridade e impacto</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckSquare className="text-vello-green mt-1" size={20} />
                    <p className="text-gray-700">Implementação gradual com resultados desde o primeiro mês</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckSquare className="text-vello-green mt-1" size={20} />
                    <p className="text-gray-700">Métricas de sucesso para cada estratégia</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckSquare className="text-vello-green mt-1" size={20} />
                    <p className="text-gray-700">Atualizações periódicas com as novidades do mercado</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-vello-blue mb-6">
                  O Checklist Inclui
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border-b border-gray-100">
                    <span className="text-gray-700 font-medium">Estratégias de Conversão</span>
                    <span className="text-vello-orange font-bold">32 pontos</span>
                  </div>
                  <div className="flex items-center justify-between p-4 border-b border-gray-100">
                    <span className="text-gray-700 font-medium">Otimização de Tráfego</span>
                    <span className="text-vello-orange font-bold">28 pontos</span>
                  </div>
                  <div className="flex items-center justify-between p-4 border-b border-gray-100">
                    <span className="text-gray-700 font-medium">Experiência do Usuário</span>
                    <span className="text-vello-orange font-bold">24 pontos</span>
                  </div>
                  <div className="flex items-center justify-between p-4 border-b border-gray-100">
                    <span className="text-gray-700 font-medium">Gestão de Operações</span>
                    <span className="text-vello-orange font-bold">18 pontos</span>
                  </div>
                  <div className="flex items-center justify-between p-4">
                    <span className="text-gray-700 font-medium">Estratégias Avançadas</span>
                    <span className="text-vello-orange font-bold">14 pontos</span>
                  </div>
                </div>
                
                <div className="mt-8">
                  <Link to="/checklist" className="ctaButton inline-flex items-center justify-center gap-2 w-full">
                    Acessar o Checklist Completo
                    <ArrowRight size={20} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <BenefitsSection />
      <Footer />
      <CTAFloating />
      
      <div className="h-16 md:h-0"></div>
    </div>
  );
};

export default Benefits;
