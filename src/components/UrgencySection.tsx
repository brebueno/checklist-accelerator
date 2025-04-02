
import React, { useState, useEffect } from 'react';
import { Clock, Users } from 'lucide-react';

const UrgencySection: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 48,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        const totalSeconds = prev.hours * 3600 + prev.minutes * 60 + prev.seconds - 1;
        
        if (totalSeconds <= 0) {
          clearInterval(timer);
          return { hours: 0, minutes: 0, seconds: 0 };
        }
        
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;
        
        return { hours, minutes, seconds };
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => num.toString().padStart(2, '0');

  return (
    <section className="py-12 bg-vello-orange text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="flex items-center gap-3">
            <Clock size={32} />
            <div>
              <p className="text-lg font-semibold">Oferta válida por mais:</p>
              <div className="text-2xl md:text-3xl font-bold">
                {formatNumber(timeLeft.hours)}h {formatNumber(timeLeft.minutes)}m {formatNumber(timeLeft.seconds)}s
              </div>
            </div>
          </div>
          
          <div className="h-12 border-r border-white/30 hidden md:block"></div>
          
          <div className="flex items-center gap-3">
            <Users size={32} />
            <div>
              <p className="text-lg font-semibold">Vagas limitadas:</p>
              <p className="text-2xl md:text-3xl font-bold">Últimas 50 vagas com acesso à mentoria!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UrgencySection;
