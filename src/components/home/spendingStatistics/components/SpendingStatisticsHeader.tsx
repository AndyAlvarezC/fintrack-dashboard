import WeekSelector from '../../ui/WeekSelector';

export default function SpendingStatisticsHeader() {
  return (
    <div className="flex flex-col w-full h-full">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-md font-semibold">Spending Statistics</h2>
          <div className="flex items-center space-x-4">
            <WeekSelector />
          </div>
        </div>
      </div>

      {/* Pie Chart */}
    </div>
  );
}
