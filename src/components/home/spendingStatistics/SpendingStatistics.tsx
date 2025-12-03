import { useState } from 'react';
import SpendingStatisticsChart from './components/SpendingStatisticsChart';
import SpendingStatisticsHeader from './components/SpendingStatisticsHeader';
import SpendingStatisticsLegend from './components/SpendingStatisticsLegend';

export default function SpendingStatistics() {
  const [option, setOption] = useState<'this' | 'prev'>('this');

  return (
    // Main container
    <div className="flex flex-col w-full h-full gap-8 sm:gap-0 min-w-0">
      {/* Header section: title + week selector */}
      <SpendingStatisticsHeader option={option} setOption={setOption} />

      {/* Content section: legend (left) + chart (right) */}
      <div className="flex flex-col md:flex-row gap-6 w-full h-full flex-1 min-w-0">
        {/* Legend container */}
        <div className="flex items-center justify-center md:justify-start md:w-1/4">
          <SpendingStatisticsLegend />
        </div>

        {/* Chart container */}
        <div className="w-full md:w-3/4 flex-1 min-h-[200px] min-w-0">
          <SpendingStatisticsChart option={option} />
        </div>
      </div>
    </div>
  );
}
