import Legend from './components/Legend';
import WeekSelector from '../ui/WeekSelector';
import FinancialChart from './components/FinancialChart';

export default function FinancialAnalytics() {
  return (
    <div className="grid grid-rows-[auto_minmax(0,1fr)] w-full gap-4 h-full">
      {/* Header: h2, Legend & WeekSelector */}
      <div className="flex flex-wrap items-center gap-4 md:grid md:grid-cols-[1fr_auto_auto] md:gap-6">
        <h2 className="text-md font-semibold truncate">Financial Analytics</h2>
        <Legend />
        <WeekSelector />
      </div>

      {/* Chart */}
      <div className="w-full h-full min-h-[250px]">
        <FinancialChart />
      </div>
    </div>
  );
}
