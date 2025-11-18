import IncomeBalanceChange from './components/IncomeBalanceChange';
import IncomeChart from './components/IncomeChart';
import IncomeHeader from './components/IncomeHeader';

export default function Income() {
  return (
    <div className="flex flex-col w-full h-full">
      <IncomeHeader />

      {/* Content Grid */}
      <div className="grid grid-cols-[auto_1fr] h-full gap-4 w-full min-w-0">
        {/* Left Columns: Balance & Change 24h */}
        <IncomeBalanceChange />

        {/* Right Column: Chart */}
        <div className="min-h-[150px] min-w-0 flex items-center">
          <IncomeChart />
        </div>
      </div>
    </div>
  );
}
