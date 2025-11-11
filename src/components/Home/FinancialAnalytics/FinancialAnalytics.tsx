import { useState } from 'react';
import Legend from './components/Legend';
import WeekSelector from './components/WeekSelector';
import FinancialChart from './components/FinancialChart';


export default function FinancialAnalytics() {
  const [week, setWeek] = useState<'this' | 'prev'>('this');

  return (
    <div className="flex flex-col w-full h-full">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-md font-semibold">Financial Analytics</h2>
        <div className="flex items-center space-x-4">
          <Legend />
          <WeekSelector week={week} setWeek={setWeek} />
        </div>
      </div>

      {/* Area Chart */}
      <FinancialChart week={week} />
    </div>
  );
}
