import Legend from './components/Legend';
import WeekSelector from '../ui/WeekSelector';
import FinancialChart from './components/FinancialChart';

export default function FinancialAnalytics() {
  return (
    <div className="grid grid-rows-[auto_1fr] w-full h-full gap-4">
      {/* Header: h2, Legend & WeekSelector */}
      <div className="grid grid-cols-[1fr_auto_auto] items-center gap-6">
        <h2 className="text-md font-semibold">Financial Analytics</h2>
        <Legend />
        <WeekSelector />
      </div>

      {/* Chart */}
      <div className="w-full h-full">
        <FinancialChart />
      </div>
    </div>
  );
}
