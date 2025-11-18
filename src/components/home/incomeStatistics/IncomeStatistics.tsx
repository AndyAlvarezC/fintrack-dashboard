import IncomeStatisticsHeader from './components/IncomeStatisticsHeader';
import IncomeStatisticsChart from './components/IncomeStatisticsChart';
import IncomeStatisticsLegend from './components/IncomeStatisticsLegend';


export default function IncomeStatistics() {
  return (
    <div className="flex flex-col h-full w-full">
      {/* Header */}
    <IncomeStatisticsHeader />

      {/* Legend */}
      <div className="mb-3">
        <IncomeStatisticsLegend />
      </div>

      {/* Chart */}
      <div className="flex-1 min-h-[250px] w-full mt-2">
        <IncomeStatisticsChart />
      </div>
    </div>
  );
}
