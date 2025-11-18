import SpendingStatisticsChart from './components/SpendingStatisticsChart';
import SpendingStatisticsHeader from './components/SpendingStatisticsHeader';
import SpendingStatisticsLegend from './components/SpendingStatisticsLegend';

export default function SpendingStatistics() {
  return (
    <div className="flex flex-col w-full h-full gap-8 sm:gap-0 min-w-0">
      {/* Header: h2 & Selector */}
      <SpendingStatisticsHeader />

      {/* Legend & Chart */}
      <div className="flex flex-col md:flex-row gap-6 w-full h-full flex-1 min-w-0">
        <div className="flex items-center justify-center md:justify-start md:w-1/4">
          <SpendingStatisticsLegend />
        </div>
        <div className="w-full md:w-3/4 flex-1 min-h-[200px] min-w-0">
          <SpendingStatisticsChart />
        </div>
      </div>
    </div>
  );
}
