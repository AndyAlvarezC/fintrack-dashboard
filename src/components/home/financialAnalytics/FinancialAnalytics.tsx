import Legend from './components/Legend';
import WeekSelector from '../ui/WeekSelector';
import FinancialChart from './components/FinancialChart';

export default function FinancialAnalytics() {
  return (
    <div className="grid grid-rows-[auto_1fr] w-full h-full gap-4 overflow-hidden">
      {/* Header: h2, Legend & WeekSelector */}
      <div className="flex flex-wrap items-center gap-4 md:grid md:grid-cols-[1fr_auto_auto] md:gap-6 min-h-0">
        <h2 className="text-md font-semibold whitespace-nowrap">Financial Analytics</h2>
        <Legend />
        <WeekSelector />
      </div>

      {/* Chart */}
      <div className="w-full h-full min-h-[300px] max-w-full overflow-hidden">
        <FinancialChart />
      </div>
    </div>
  );
}