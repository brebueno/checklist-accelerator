
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: "Natana Stinguel",
      text: "Aumentei minhas vendas em 150% em 3 meses! O checklist foi fundamental para identificar falhas e otimizar meu e-commerce.",
      company: "Loja de Cosméticos"
    },
    {
      name: "Ricardo Ferreira",
      text: "O checklist me fez enxergar falhas críticas no meu checkout. Após implementar as correções, a taxa de conversão subiu 32%.",
      company: "Cliente Vello"
    },
    {
      name: "Amanda Costa",
      text: "Com o checklist da Vello, consegui aumentar meu tráfego orgânico em 78%. As estratégias de SEO são extremamente eficazes!",
      company: "Moda Sustentável"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex(prev => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex(prev => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-16 bg-vello-gray">
      <div className="container mx-auto px-4">
        <h2 className="sectionTitle">O Que Nossos Clientes Dizem</h2>
        
        <div className="relative max-w-3xl mx-auto">
          <div className="card min-h-[240px]">
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, index) => (
                <Star key={index} className="text-vello-orange fill-vello-orange" size={24} />
              ))}
            </div>
            
            <blockquote className="text-lg md:text-xl text-gray-700 italic mb-6 text-center">
              "{testimonials[currentIndex].text}"
            </blockquote>
            
            <div className="text-center">
              <p className="font-bold text-vello-blue">{testimonials[currentIndex].name}</p>
              <p className="text-gray-600 text-sm">{testimonials[currentIndex].company}</p>
            </div>
          </div>
          
          <button 
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 bg-white rounded-full p-2 shadow-lg hover:bg-vello-blue hover:text-white transition-all"
            aria-label="Depoimento anterior"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 bg-white rounded-full p-2 shadow-lg hover:bg-vello-blue hover:text-white transition-all"
            aria-label="Próximo depoimento"
          >
            <ChevronRight size={24} />
          </button>
        </div>
        
        <div className="flex justify-center mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 mx-1 rounded-full ${
                currentIndex === index ? 'bg-vello-orange' : 'bg-gray-300'
              }`}
              aria-label={`Ver depoimento ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
