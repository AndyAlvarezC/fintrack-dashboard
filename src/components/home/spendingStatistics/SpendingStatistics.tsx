import WeekSelector from '../ui/WeekSelector';
import Legend from './components/Legend';
import SpendingStatisticsChart from './components/SpendingStatisticsChart';

export default function SpendingStatistics() {
  return (
    <div className="grid grid-rows-[auto_1fr] w-full h-full gap-4">
      {/* Header: h2 & WeekSelector */}
      <div className="grid grid-cols-[1fr_auto] items-center w-full">
        <h2 className="text-md font-semibold">Spending Statistics</h2>
        <WeekSelector />
      </div>

      {/* Legends & Chart */}
      <div className="grid grid-cols-[1fr_3fr] gap-4 w-full h-full">
        <div className="flex items-center justify-center">
          <Legend />
        </div>
        <div className="w-full h-full">
          <SpendingStatisticsChart />
        </div>
      </div>
    </div>
  );
}
