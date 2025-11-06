import { Search, Bell } from 'lucide-react';
import Calendar from '../../components/Home/Calendar';
import ExchangeRates from '../../components/Home/ExchangeRates';
import ExpenditureCategories from '../../components/Home/ExpenditureCategories';
import Expenses from '../../components/Home/Expenses';
import FinancialAnalytics from '../../components/Home/FinancialAnalytics/FinancialAnalytics';
import Income from '../../components/Home/Income';
import IncomeStatistics from '../../components/Home/IncomeStatistics';
import MyCards from '../../components/Home/MyCards';
import SpendingStatistics from '../../components/Home/SpendingStatistics';
import TotalBalance from '../../components/Home/TotalBalance';
import TransactionHistory from '../../components/Home/TransactionHistory';

export default function Home() {
  return (
    <div className="flex flex-col w-full h-full p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <h2 className="text-xl font-semibold">
          Hello, Andy Álvarez! Welcome Back
        </h2>

        <div className="flex items-center gap-4 w-full md:w-auto">
          {/* Search input con icono */}
          <div className="relative flex-1 md:flex-none cursor-text">
            <input
              placeholder="Search"
              className="w-full pl-3 pr-10 py-2 rounded-lg font-semibold bg-linear-to-br from-purple-500/10 via-violet-500/5 to-purple-600/10 shadow-[0_0_15px_rgba(167,127,255,0.4)] focus:outline-none focus:ring-0"
            />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-300 pointer-events-none" />
          </div>

          {/* Notificaciones */}
          <button className="bg-linear-to-br from-purple-500/10 via-violet-500/5 to-purple-600/10 font-semibold shadow-[0_0_15px_rgba(167,127,255,0.4)] p-2 rounded-lg cursor-pointer">
            <Bell />
          </button>
        </div>
      </div>

      {/* Grid principal */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full flex-1">
        {/* Fila 1 */}
        <div className="col-span-2 bg-(--bg-primary) shadow-[0_0_15px_rgba(167,127,255,0.4)] p-4 rounded-lg h-full">
          <FinancialAnalytics />
        </div>
        <div className="bg-indigo-400 p-4 rounded-lg h-full">
          <SpendingStatistics />
        </div>
        <div className="bg-indigo-400 p-4 rounded-lg md:row-span-2 h-full">
          <MyCards />
        </div>

        {/* Fila 2 */}
        <div className="bg-indigo-400 p-4 rounded-lg h-full">
          <TotalBalance />
        </div>
        <div className="bg-indigo-400 p-4 rounded-lg h-full">
          <Income />
        </div>
        <div className="bg-indigo-400 p-4 rounded-lg h-full">
          <Expenses />
        </div>

        {/* Fila 3 */}
        <div className="bg-indigo-400 p-4 rounded-lg h-full">
          <Calendar />
        </div>
        <div className="bg-indigo-400 p-4 rounded-lg md:row-span-2 h-full">
          <IncomeStatistics />
        </div>
        <div className="col-span-2 bg-indigo-400 p-4 rounded-lg h-full">
          <ExpenditureCategories />
        </div>

        {/* Fila 4 */}
        <div className="bg-indigo-400 p-4 rounded-lg h-full">
          <TransactionHistory />
        </div>
        <div className="col-span-2 bg-indigo-400 p-4 rounded-lg h-full">
          <ExchangeRates />
        </div>
      </div>
    </div>
  );
}
