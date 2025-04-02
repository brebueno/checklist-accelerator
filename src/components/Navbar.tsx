
import React from 'react';
import { cn } from '@/lib/utils';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-vello-blue text-white py-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center">
          <img src="/lovable-uploads/41daa1a1-c3df-4d72-8b21-bf3e82d88549.png" alt="Vello Logo" className="h-10 mr-2" />
          <span className="font-bold text-xl">Vello</span>
        </div>
        <button className="ctaButton text-sm">Acessar Checklist</button>
      </div>
    </nav>
  );
};

export default Navbar;
