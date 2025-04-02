
import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

const MentoriaSection: React.FC = () => {
  const benefits = [
    "Acesso a 8 marcas próprias do Grupo Vello (ex.: Mio Capelli).",
    "4 imersões presenciais/ano + Grupo VIP no WhatsApp.",
    "Bônus: Planilha de ROI, Banco de Fornecedores e Modelos de Copy."
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-vello-blue to-vello-blue/80 text-white rounded-2xl p-8 md:p-12 shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Impulsione Seu E-commerce com a Mentoria Vello
          </h2>
          
          <div className="mb-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-4 mb-4">
                <CheckCircle className="text-vello-orange flex-shrink-0 mt-1" />
                <p className="text-lg">{benefit}</p>
              </div>
            ))}
          </div>
          
          <div className="bg-black/20 p-6 rounded-xl mb-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div>
                <p className="text-lg opacity-80">De <span className="line-through">R$ 5.000</span> por apenas:</p>
                <p className="text-3xl md:text-4xl font-bold">R$ 4.500 à vista (Pix)</p>
                <p className="opacity-80">ou 12x de R$ 496,17</p>
              </div>
              <button className="pulseCTA ctaButton text-lg flex items-center gap-2">
                Garantir Mentoria Agora
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
          
          <p className="text-center text-sm opacity-80">
            * Investimento com retorno garantido: Caso não tenha resultados em 30 dias, devolvemos seu dinheiro.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MentoriaSection;
