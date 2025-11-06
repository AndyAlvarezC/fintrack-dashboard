// Home.tsx
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
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full h-full">
      {/* 🔹 Fila 1 */}
      <div className="col-span-2 bg-(--bg-primary) shadow-[0_0_15px_rgba(167,127,255,0.4)] p-4 rounded-lg h-full">
        <FinancialAnalytics />
      </div>
      <div className="bg-indigo-400 p-4 rounded-lg h-full">
        <SpendingStatistics />
      </div>
      <div className="bg-indigo-400 p-4 rounded-lg md:row-span-2 h-full">
        <MyCards />
      </div>

      {/* 🔹 Fila 2 */}
      <div className="bg-indigo-400 p-4 rounded-lg h-full">
        <TotalBalance />
      </div>
      <div className="bg-indigo-400 p-4 rounded-lg h-full">
        <Income />
      </div>
      <div className="bg-indigo-400 p-4 rounded-lg h-full">
        <Expenses />
      </div>

      {/* 🔹 Fila 3 */}
      <div className="bg-indigo-400 p-4 rounded-lg h-full">
        <Calendar />
      </div>
      <div className="bg-indigo-400 p-4 rounded-lg md:row-span-2 h-full">
        <IncomeStatistics />
      </div>
      <div className="col-span-2 bg-indigo-400 p-4 rounded-lg h-full">
        <ExpenditureCategories />
      </div>

      {/* 🔹 Fila 4 */}
      <div className="bg-indigo-400 p-4 rounded-lg h-full">
        <TransactionHistory />
      </div>
      <div className="col-span-2 bg-indigo-400 p-4 rounded-lg h-full">
        <ExchangeRates />
      </div>
    </div>
  );
}
