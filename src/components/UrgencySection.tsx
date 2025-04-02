
import React, { useState, useEffect } from 'react';
import { Clock, Users, AlertTriangle } from 'lucide-react';

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
    <section className="py-8 bg-vello-orange text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="flex items-center gap-3">
            <div className="bg-white/10 p-2 rounded-full">
              <Clock size={28} />
            </div>
            <div>
              <p className="text-lg font-semibold">Condições especiais por:</p>
              <div className="flex gap-2 items-center">
                <div className="bg-white/20 rounded-md px-2 py-1">
                  <span className="text-2xl font-bold">{formatNumber(timeLeft.hours)}</span>
                </div>
                <span className="text-xl">:</span>
                <div className="bg-white/20 rounded-md px-2 py-1">
                  <span className="text-2xl font-bold">{formatNumber(timeLeft.minutes)}</span>
                </div>
                <span className="text-xl">:</span>
                <div className="bg-white/20 rounded-md px-2 py-1">
                  <span className="text-2xl font-bold">{formatNumber(timeLeft.seconds)}</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="h-12 border-r border-white/30 hidden md:block"></div>
          
          <div className="flex items-center gap-3">
            <div className="bg-white/10 p-2 rounded-full">
              <Users size={28} />
            </div>
            <div>
              <p className="text-lg font-semibold">Vagas limitadas:</p>
              <div className="flex items-center gap-2">
                <AlertTriangle size={16} className="animate-pulse" />
                <p className="text-xl font-bold">Últimas 50 vagas para a mentoria!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UrgencySection;
