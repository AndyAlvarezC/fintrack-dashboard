export default function IncomeStatisticsLegend() {
  return (
    <>
      <div className="flex flex-wrap items-center gap-4 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-purple-600" />
          <span className="text-gray-300">Cashback</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-cyan-400" />
          <span className="text-gray-300">Replenishment</span>
        </div>
      </div>
    </>
  );
}
