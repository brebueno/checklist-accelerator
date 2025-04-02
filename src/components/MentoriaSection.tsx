
import React from 'react';
import { ArrowRight, CheckCircle, Shield, Users, Clock } from 'lucide-react';

const MentoriaSection: React.FC = () => {
  const benefits = [
    "Acesso a 8 marcas próprias do Grupo Vello, incluindo a Mio Capelli que fatura 7 dígitos mensais",
    "4 imersões presenciais por ano para networking e estratégias avançadas",
    "Grupo VIP no WhatsApp com suporte prioritário e network com outros empresários",
    "Planilha exclusiva de ROI, Banco de Fornecedores qualificados e Templates de Copy de alta conversão"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-vello-blue/95 to-vello-blue text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block bg-vello-orange px-3 py-1 rounded-full text-white text-sm font-semibold mb-2">PRÓXIMO NÍVEL</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Acelere Sua Implementação Com a Mentoria Vello
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Para quem deseja implementar o Checklist 100K com orientação personalizada e acesso a estratégias avançadas
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-10 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <div className="flex flex-col h-full">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-4 mb-6">
                      <CheckCircle className="text-vello-orange flex-shrink-0 mt-1" size={22} />
                      <p className="text-lg">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-black/20 rounded-xl p-6 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Shield size={20} className="text-vello-orange" />
                    <span className="text-lg font-semibold">Garantia Incondicional</span>
                  </div>
                  <span className="bg-vello-orange/20 text-vello-orange px-2 py-1 rounded text-xs font-semibold">30 DIAS</span>
                </div>
                
                <p className="mb-6 text-white/90">
                  Se não obter resultados nos primeiros 30 dias, devolvemos 100% do seu investimento sem burocracia.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-sm text-white/80">
                    <Users size={16} />
                    <span>Últimas vagas disponíveis neste mês</span>
                  </div>
                  
                  <div className="flex items-center gap-3 text-sm text-white/80">
                    <Clock size={16} />
                    <span>Próxima turma inicia em 7 dias</span>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-white/10">
                  <div className="mb-2">
                    <p className="text-sm opacity-80">De <span className="line-through">R$ 5.000</span> por apenas:</p>
                    <div className="flex items-center gap-2">
                      <p className="text-3xl font-bold">R$ 4.500</p>
                      <span className="bg-vello-green/20 text-vello-green px-2 py-1 rounded text-xs">À VISTA (PIX)</span>
                    </div>
                    <p className="opacity-80 text-sm">ou 12x de R$ 496,17</p>
                  </div>
                  
                  <a 
                    href="https://seguro.velloeducacao.com.br/checkout?skipToCheckout=1&tokenReference=GLFPYTFD9P"
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="pulseCTA ctaButton text-lg mt-4 flex items-center justify-center gap-2 w-full"
                  >
                    Garantir Minha Vaga
                    <ArrowRight size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentoriaSection;
