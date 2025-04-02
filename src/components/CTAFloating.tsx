
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTAFloating: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-vello-blue text-white py-3 z-30 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-semibold text-center md:text-left">
            Não perca tempo! Acesse o Checklist 100K e escale seu e-commerce agora.
          </p>
          <Link to="/checklist" className="pulseCTA ctaButton flex items-center gap-2">
            Acessar o Checklist
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CTAFloating;
