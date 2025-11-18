import TotalBalanceChart from './components/TotalBalanceChart';
import TotalBalanceGrid from './components/TotalBalanceGrid';
import TotalBalanceHeader from './components/TotalBalanceHeader';

export default function TotalBalance() {
  return (
    <div className="flex flex-col w-full h-full">
      {/* Header: h2 & Selector */}
      <TotalBalanceHeader />

      {/* Content Grid */}
      <div className="grid grid-cols-[auto_1fr] h-full gap-4 w-full min-w-0">
        {/* Left Column: Balance + Change 24h */}
        <TotalBalanceGrid />
        {/* Right Column: Chart */}
        <div className="min-h-[150px] min-w-0 flex items-center">
          <TotalBalanceChart />
        </div>
      </div>
    </div>
  );
}
