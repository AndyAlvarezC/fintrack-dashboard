import ExpensesBalanceChange from './components/ExpensesBalanceChange';
import ExpensesChart from './components/ExpensesChart';
import ExpensesHeader from './components/ExpensesHeader';

export default function Income() {
  return (
    <div className="flex flex-col w-full h-full">
      {/* Header */}
      <ExpensesHeader />
      {/* Content Grid */}
      <div className="grid grid-cols-[auto_1fr] h-full gap-4 w-full min-w-0">
        <ExpensesBalanceChange />
        {/* Right Column: Chart */}
        <div className="min-h-[150px] min-w-0 flex items-center">
          <ExpensesChart />
        </div>
      </div>
    </div>
  );
}
