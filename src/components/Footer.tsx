
import React from 'react';
import { Shield, Lock } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-vello-blue text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-6">
          <img src="/lovable-uploads/41daa1a1-c3df-4d72-8b21-bf3e82d88549.png" alt="Vello Logo" className="h-12" />
        </div>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-6">
          <div className="flex items-center gap-2">
            <Lock size={20} />
            <span>Pagamento 100% Seguro</span>
          </div>
          <div className="hidden md:block mx-4">|</div>
          <div className="flex items-center gap-2">
            <Shield size={20} />
            <span>Garantia de 30 dias</span>
          </div>
        </div>
        
        <div className="text-center text-sm opacity-80">
          <p className="mb-2">© {new Date().getFullYear()} Vello Group. Todos os direitos reservados.</p>
          <p>CNPJ: 00.000.000/0001-00</p>
          <p className="mt-4">
            <a href="#" className="underline hover:text-vello-orange transition-colors">Política de Privacidade</a>
            {' '}&bull;{' '}
            <a href="#" className="underline hover:text-vello-orange transition-colors">Termos de Uso</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
