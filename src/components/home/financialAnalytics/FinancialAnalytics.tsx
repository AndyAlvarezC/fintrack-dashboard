import FinancialChart from './components/FinancialChart';
import FinancialHeader from './components/FinancialHeader';

export default function FinancialAnalytics() {
  return (
    <div className="flex flex-col w-full h-full gap-4 min-w-0">
      {/* Header: h2, Legend & Selector */}
      <FinancialHeader />

      {/* Chart */}
      <div className="w-full h-full flex-1 min-w-0">
        <FinancialChart />
      </div>
    </div>
  );
}
