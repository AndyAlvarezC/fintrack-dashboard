import MonthSelector from '../ui/MonthSelector';
import ExpensesChart from './components/ExpensesChart';
import { CiCircleChevDown } from "react-icons/ci";

export default function Income() {
  return (
    <div className="flex flex-col w-full h-full">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-md font-semibold">Expenses</h2>
        <MonthSelector />
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-[auto_1fr] grid-rows-[1fr_auto] h-full gap-4">
        
        {/* Balance */}
        <div className="flex items-center">
          <h2 className="text-xl font-semibold">$ 4244.46</h2>
        </div>

        {/* Chart */}
        <div className="row-span-2">
          <ExpensesChart />
        </div>

        {/* Bottom Left: icono + % */}
        <div className="flex items-center gap-1">
          <CiCircleChevDown className="text-2xl text-red-500" strokeWidth={1} />
          <h3 className="text-red-500 font-semibold">-2.7%</h3>
        </div>

      </div>
    </div>
  );
}
