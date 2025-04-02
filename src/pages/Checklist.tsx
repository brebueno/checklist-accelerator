
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Checklist = () => {
  const checklistUrl = "https://docs.google.com/spreadsheets/d/1QWxrNWTL0Dsli9WaYA7_B8Q6iYlRlHbnGxFi9qdox7M/edit?gid=2029693868#gid=2029693868";
  
  useEffect(() => {
    // Track that the user accessed the checklist
    console.log("Checklist accessed");
    
    // You could add analytics tracking here
    // analytics.track('Checklist Viewed');
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="py-8 bg-vello-blue text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-center">Checklist 100K da Vello</h1>
          <p className="text-xl opacity-90 mt-2 text-center">116 estratégias para escalar seu e-commerce</p>
        </div>
      </div>
      
      <div className="flex-grow py-10 bg-vello-gray">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <Link to="/" className="inline-flex items-center gap-2 text-vello-blue hover:underline">
              <ArrowLeft size={20} />
              <span>Voltar para a página inicial</span>
            </Link>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-vello-blue mb-6">Seu Checklist Está Pronto!</h2>
            
            <div className="mb-8">
              <p className="text-lg mb-4">
                Acesse o Checklist 100K completo no Google Sheets através do link abaixo:
              </p>
              
              <a 
                href={checklistUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-vello-blue text-white font-semibold py-3 px-6 rounded-md hover:bg-vello-blue/90 transition-all"
              >
                Abrir Checklist no Google Sheets
              </a>
            </div>
            
            <div className="bg-vello-gray rounded-lg p-6">
              <h3 className="text-xl font-bold text-vello-blue mb-3">Instruções de uso:</h3>
              <ol className="list-decimal pl-5 space-y-2">
                <li>Faça uma cópia do checklist para a sua conta Google (Arquivo &gt; Fazer uma cópia).</li>
                <li>Preencha as informações do seu negócio no topo da planilha.</li>
                <li>Marque cada item como "Concluído", "Em Progresso" ou "Não Iniciado".</li>
                <li>Use as notas para registrar suas ideias e próximos passos.</li>
                <li>Acompanhe seu progresso geral na aba de Dashboard.</li>
              </ol>
            </div>
            
            <div className="mt-8 border-t pt-6">
              <p className="text-lg font-bold text-vello-blue">Precisa de ajuda personalizada?</p>
              <p className="mb-4">Nossa equipe está pronta para ajudar você a implementar as estratégias.</p>
              <Link 
                to="/mentoria" 
                className="inline-block bg-vello-orange text-white font-semibold py-3 px-6 rounded-md hover:bg-vello-orange/90 transition-all"
              >
                Conhecer a Mentoria Premium
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Checklist;
