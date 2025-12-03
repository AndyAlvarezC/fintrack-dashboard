import IncomeStatisticsHeader from './components/IncomeStatisticsHeader';
import IncomeStatisticsChart from './components/IncomeStatisticsChart';
import IncomeStatisticsLegend from './components/IncomeStatisticsLegend';
import { useState } from 'react';

// Main component
export default function IncomeStatistics() {
  const [option, setOption] = useState<'this' | 'prev'>('this');

  return (
    <div className="flex flex-col h-full w-full">
      {/* Header with title and selector */}
      <IncomeStatisticsHeader option={option} setOption={setOption} />
      {/* Legend */}
      <div className="mb-3">
        <IncomeStatisticsLegend />
      </div>

      {/* Chart */}
      <div className="flex-1 min-h-[250px] w-full mt-2">
        <IncomeStatisticsChart option={option} />
      </div>
    </div>
  );
}
