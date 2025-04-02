
import React from 'react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-vello-blue text-white py-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img src="/lovable-uploads/41daa1a1-c3df-4d72-8b21-bf3e82d88549.png" alt="Vello Logo" className="h-10 mr-2" />
            <span className="font-bold text-xl">Vello</span>
          </Link>
        </div>
        
        <div className="hidden md:flex items-center space-x-6 mr-4">
          <Link to="/" className="hover:text-white/80 transition-colors">Home</Link>
          <Link to="/beneficios" className="hover:text-white/80 transition-colors">Benefícios</Link>
          <Link to="/preview" className="hover:text-white/80 transition-colors">Preview</Link>
          <Link to="/mentoria" className="hover:text-white/80 transition-colors">Mentoria</Link>
        </div>
        
        <Link to="/checklist" className="ctaButton text-sm">Acessar Checklist</Link>
      </div>
    </nav>
  );
};

export default Navbar;
