import WeekSelector from "../ui/WeekSelector";
import IncomeStatisticsChart from "./components/IncomeStatisticsChart";
import Legend from "./components/Legend";

export default function IncomeStatistics() {
  return(
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-base font-semibold">Income Statistics</h2>
        <WeekSelector />
      </div>
      
      {/* Legend */}
      <div className="mb-3">
        <Legend />
      </div>
      
      {/* Gráfico con altura mínima para mobile */}
      <div className="flex-1 min-h-[250px] mt-2">
        <IncomeStatisticsChart />
      </div>
    </div>
  )
}
