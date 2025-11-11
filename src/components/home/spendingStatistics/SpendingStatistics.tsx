import { useState } from 'react';
import WeekSelector from '../financialAnalytics/components/WeekSelector';

export default function SpendingStatistics() {
  const [week, setWeek] = useState<'this' | 'prev'>('this');
  return (
    <div className="flex flex-col w-full h-full">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-md font-semibold">Spending Statistics</h2>
        <WeekSelector week={week} setWeek={setWeek} />
      </div>

      {/* Pie Chart */}
    </div>
  );
}
