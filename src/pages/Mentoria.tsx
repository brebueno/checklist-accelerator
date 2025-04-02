
import React from 'react';
import Navbar from '@/components/Navbar';
import MentoriaSection from '@/components/MentoriaSection';
import UrgencySection from '@/components/UrgencySection';
import Footer from '@/components/Footer';
import CTAFloating from '@/components/CTAFloating';
import { ArrowRight, CheckCircle, Users, Calendar, Award } from 'lucide-react';

const Mentoria = () => {
  const features = [
    {
      icon: <CheckCircle className="text-vello-green" />,
      title: "Implementação Guiada",
      description: "Aplique cada estratégia do Checklist 100K com acompanhamento personalizado"
    },
    {
      icon: <Users className="text-vello-green" />,
      title: "Networking Estratégico",
      description: "Conecte-se com outros empreendedores que estão escalando seus negócios"
    },
    {
      icon: <Calendar className="text-vello-green" />,
      title: "Encontros Presenciais",
      description: "4 imersões por ano com especialistas em e-commerce e marketing digital"
    },
    {
      icon: <Award className="text-vello-green" />,
      title: "Casos de Sucesso",
      description: "Acesso a estratégias reais implementadas em lojas que faturam 7 dígitos"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="py-12 bg-vello-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <span className="inline-block bg-vello-orange px-3 py-1 rounded-full text-white text-sm font-semibold mb-4">ALTA PERFORMANCE</span>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Mentoria Vello</h1>
          <p className="text-xl max-w-2xl mx-auto opacity-90">
            Implementação acelerada do Checklist 100K com suporte especializado
          </p>
        </div>
      </div>
      
      <UrgencySection />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-vello-blue mb-6">
                Por Que a Mentoria Potencializa os Resultados do Checklist 100K
              </h2>
              <p className="text-gray-600 mb-8">
                O Checklist 100K por si só é uma ferramenta poderosa, mas com a mentoria, você contará com a orientação direta dos especialistas que desenvolveram as estratégias e já implementaram em centenas de e-commerces.
              </p>
              
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="mt-1">{feature.icon}</div>
                    <div>
                      <h3 className="font-semibold text-vello-blue">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <a 
                  href="https://seguro.velloeducacao.com.br/checkout?skipToCheckout=1&tokenReference=GLFPYTFD9P"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ctaButton inline-flex items-center gap-2"
                >
                  Garantir Minha Vaga
                  <ArrowRight size={20} />
                </a>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-vello-blue mb-6">
                O Que Nossos Mentorados Dizem
              </h3>
              
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow border border-gray-100">
                  <p className="italic text-gray-600 mb-4">
                    "A mentoria acelerou meus resultados em 3x. O que eu levaria um ano para implementar sozinho, consegui em 4 meses com o suporte da equipe Vello."
                  </p>
                  <p className="font-semibold text-vello-blue">Carlos Mendes</p>
                  <p className="text-sm text-gray-500">E-commerce de Suplementos</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow border border-gray-100">
                  <p className="italic text-gray-600 mb-4">
                    "Além do checklist, o networking com outros empreendedores da mentoria me trouxe insights valiosos. Já fechamos 3 parcerias estratégicas que aumentaram meu ticket médio em 40%."
                  </p>
                  <p className="font-semibold text-vello-blue">Marina Costa</p>
                  <p className="text-sm text-gray-500">Loja de Cosméticos Naturais</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <MentoriaSection />
      <Footer />
      <CTAFloating />
      
      <div className="h-16 md:h-0"></div>
    </div>
  );
};

export default Mentoria;
