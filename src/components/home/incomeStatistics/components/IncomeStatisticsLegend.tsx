export default function IncomeStatisticsLegend() {
  return (
    <>
      {/* Legend container */}
      <div className="flex flex-wrap items-center gap-4 text-sm">
        {/* Legend item for Cashback */}
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-purple-400" />
          <span className="text-gray-300">Cashback</span>{' '}
        </div>

        {/* Legend item for Replenishment */}
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-teal-500" />
          <span className="text-gray-300">Replenishment</span>
        </div>
      </div>
    </>
  );
}
