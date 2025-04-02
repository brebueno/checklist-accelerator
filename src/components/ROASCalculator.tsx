
import React, { useState, useEffect } from 'react';
import { DollarSign, PieChart } from 'lucide-react';

const ROASCalculator: React.FC = () => {
  const [adSpend, setAdSpend] = useState<number>(1000);
  const [revenue, setRevenue] = useState<number>(3000);
  const [currentROAS, setCurrentROAS] = useState<number>(3);
  const [projectedROAS, setProjectedROAS] = useState<number>(5);
  const [projectedRevenue, setProjectedRevenue] = useState<number>(5000);
  const [additionalRevenue, setAdditionalRevenue] = useState<number>(2000);

  useEffect(() => {
    if (adSpend > 0) {
      setCurrentROAS(revenue / adSpend);
      setProjectedROAS(projectedRevenue / adSpend);
      setAdditionalRevenue(projectedRevenue - revenue);
    }
  }, [adSpend, revenue, projectedRevenue]);

  const formatCurrency = (value: number): string => {
    return `R$ ${value.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

  const formatPercentage = (value: number): string => {
    return `${(value * 100).toFixed(0)}%`;
  };

  return (
    <div className="rounded-xl bg-gray-50 p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h4 className="text-lg font-semibold text-vello-blue mb-4">Dados Atuais</h4>
          
          <div className="mb-4">
            <label htmlFor="adSpend" className="block text-sm font-medium text-gray-700 mb-1">
              Investimento em Anúncios Mensal
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <DollarSign size={16} className="text-gray-400" />
              </div>
              <input
                type="number"
                id="adSpend"
                value={adSpend}
                onChange={(e) => setAdSpend(Number(e.target.value))}
                className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-vello-blue focus:ring-vello-blue"
              />
            </div>
          </div>
          
          <div className="mb-4">
            <label htmlFor="revenue" className="block text-sm font-medium text-gray-700 mb-1">
              Faturamento Mensal Atual
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <DollarSign size={16} className="text-gray-400" />
              </div>
              <input
                type="number"
                id="revenue"
                value={revenue}
                onChange={(e) => setRevenue(Number(e.target.value))}
                className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-vello-blue focus:ring-vello-blue"
              />
            </div>
          </div>
          
          <div className="mb-4">
            <label htmlFor="projectedRevenue" className="block text-sm font-medium text-gray-700 mb-1">
              Faturamento Projetado com Checklist 100K
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <DollarSign size={16} className="text-gray-400" />
              </div>
              <input
                type="number"
                id="projectedRevenue"
                value={projectedRevenue}
                onChange={(e) => setProjectedRevenue(Number(e.target.value))}
                className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-vello-blue focus:ring-vello-blue"
              />
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-md p-6">
          <h4 className="text-lg font-semibold text-vello-blue mb-4 flex items-center">
            <PieChart className="mr-2 text-vello-orange" size={20} />
            Resultados Projetados
          </h4>
          
          <div className="space-y-4">
            <div className="border-b pb-3">
              <p className="text-sm text-gray-500">ROAS Atual</p>
              <p className="text-xl font-bold">{currentROAS.toFixed(2)}x</p>
            </div>
            
            <div className="border-b pb-3">
              <p className="text-sm text-gray-500">ROAS Projetado</p>
              <div className="flex items-end gap-2">
                <p className="text-xl font-bold text-vello-green">{projectedROAS.toFixed(2)}x</p>
                <p className="text-sm text-vello-green">
                  (+{(projectedROAS - currentROAS).toFixed(2)}x)
                </p>
              </div>
            </div>
            
            <div className="border-b pb-3">
              <p className="text-sm text-gray-500">Aumento no Faturamento</p>
              <div className="flex items-end gap-2">
                <p className="text-xl font-bold text-vello-green">{formatCurrency(additionalRevenue)}</p>
                <p className="text-sm text-vello-green">
                  (+{formatPercentage((projectedRevenue - revenue) / revenue)})
                </p>
              </div>
            </div>
            
            <div className="mt-4 pt-2">
              <p className="text-sm text-gray-600 italic">
                * Baseado na média de resultados dos nossos clientes após implementação do Checklist 100K
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ROASCalculator;
