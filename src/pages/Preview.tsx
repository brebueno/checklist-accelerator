
import React from 'react';
import Navbar from '@/components/Navbar';
import PreviewSection from '@/components/PreviewSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';
import CTAFloating from '@/components/CTAFloating';
import { ArrowRight, Check, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const Preview = () => {
  const categoriesList = [
    {
      name: "Conversão",
      examples: [
        "Checkout sem cadastro obrigatório",
        "Recuperação inteligente de carrinho abandonado",
        "Upsell e cross-sell automatizados"
      ]
    },
    {
      name: "Tráfego",
      examples: [
        "SEO estratégico para e-commerce",
        "Pixel de rastreamento otimizado",
        "Campanhas de remarketing segmentadas"
      ]
    },
    {
      name: "Operações",
      examples: [
        "Automação de processos de pós-venda",
        "Logística integrada com marketplaces",
        "Gestão eficiente de estoques"
      ]
    },
    {
      name: "Experiência",
      examples: [
        "Otimização de velocidade de carregamento",
        "Design responsivo de alta conversão",
        "Jornada de compra simplificada"
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="py-12 bg-vello-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <span className="inline-block bg-vello-orange px-3 py-1 rounded-full text-white text-sm font-semibold mb-4">INSIGHTS EXCLUSIVOS</span>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Preview do Checklist 100K</h1>
          <p className="text-xl max-w-2xl mx-auto opacity-90">
            Um vislumbre das 116 estratégias que estão transformando e-commerces
          </p>
        </div>
      </div>
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Sparkles className="text-vello-orange mx-auto mb-3" size={32} />
              <h2 className="text-3xl font-bold text-vello-blue mb-4">
                Como o Checklist Está Organizado
              </h2>
              <p className="text-gray-600">
                O Checklist 100K é dividido em categorias estratégicas para facilitar a implementação
                e maximizar os resultados do seu e-commerce.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {categoriesList.map((category, index) => (
                <div key={index} className="card">
                  <h3 className="text-xl font-bold text-vello-blue mb-4">
                    {category.name}
                  </h3>
                  <div className="space-y-3">
                    {category.examples.map((example, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <Check className="text-vello-green mt-1" size={18} />
                        <p className="text-gray-600">{example}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 text-sm text-gray-500 italic">
                    + diversos outros pontos estratégicos
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-vello-blue/5 rounded-xl p-8 border border-vello-blue/20 text-center">
              <h3 className="text-2xl font-bold text-vello-blue mb-4">
                Veja o Checklist 100K Completo
              </h3>
              <p className="text-gray-600 mb-6">
                Acesse agora mesmo todas as 116 estratégias e comece a transformar seu e-commerce hoje
              </p>
              <Link to="/checklist" className="ctaButton inline-flex items-center gap-2">
                Acessar o Checklist Completo
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <PreviewSection />
      <TestimonialsSection />
      <Footer />
      <CTAFloating />
      
      <div className="h-16 md:h-0"></div>
    </div>
  );
};

export default Preview;
