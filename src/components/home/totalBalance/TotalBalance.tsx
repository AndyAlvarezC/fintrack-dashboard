import MonthSelector from '../ui/MonthSelector';
import TotalBalancChart from './components/TotalBalanceChart';
import { CiCircleChevUp } from "react-icons/ci";

export default function TotalBalance() {
  return (
    <div className="flex flex-col w-full h-full">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-md font-semibold">Total Balance</h2>
        <MonthSelector />
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-[auto_1fr] grid-rows-[1fr_auto] h-full gap-2">
        
        {/* Balance */}
        <div className="flex items-center">
          <h2 className="text-xl font-semibold">$ 9864.12</h2>
        </div>

        {/* Chart */}
        <div className="row-span-2">
          <TotalBalancChart />
        </div>

        {/* Bottom Left: icono + % */}
        <div className="flex items-center gap-1">
          <CiCircleChevUp className="text-2xl text-green-500" strokeWidth={1} />
          <h3 className="text-green-500 font-semibold">+1.8%</h3>
        </div>

      </div>
    </div>
  );
}
