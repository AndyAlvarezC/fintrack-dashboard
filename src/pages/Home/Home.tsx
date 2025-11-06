import Calendar from '../../components/Home/Calendar';
import ExchangeRates from '../../components/Home/ExchangeRates';
import ExpenditureCategories from '../../components/Home/ExpenditureCategories';
import Expenses from '../../components/Home/Expenses';
import FinancialAnalytics from '../../components/Home/FinancialAnalytics';
import Income from '../../components/Home/Income';
import IncomeStatistics from '../../components/Home/IncomeStatistics';
import MyCards from '../../components/Home/MyCards';
import SpendingStatistics from '../../components/Home/SpendingStatistics';
import TotalBalance from '../../components/Home/TotalBalance';
import TransactionHistory from '../../components/Home/TransactionHistory';

export default function Home() {
  return (
    <div className="grid grid-cols-4 grid-rows-4 gap-4 w-[66%] ml-80 min-h-screen">
      {/* Col 1–3 normales */}
      <div className="col-span-2 bg-(--bg-primary) shadow-[0_0_15px_rgba(167,127,255,0.4)] p-4 rounded-lg">
        <FinancialAnalytics />
      </div>
      <div className="bg-indigo-400 p-4 rounded-lg">
        <SpendingStatistics />
      </div>

      {/* 🔹 1er elemento columna 4 (ocupa fila 1–2) */}
      <div className="bg-indigo-400 p-4 rounded-lg row-span-2 col-start-4">
        <MyCards />
      </div>

      {/* Siguiente fila completa (col 1–3) */}
      <div className="bg-indigo-400 p-4 rounded-lg">
        <TotalBalance />
      </div>
      <div className="bg-indigo-400 p-4 rounded-lg">
        <Income />
      </div>
      <div className="bg-indigo-400 p-4 rounded-lg">
        <Expenses />
      </div>

      {/* 🔹 2º elemento columna 4 (ocupa fila 3) */}
      <div className="bg-indigo-400 p-4 rounded-lg row-start-3 col-start-4">
        <Calendar />
      </div>

      <div className="row-span-2 bg-indigo-400 p-4 rounded-lg">
        <IncomeStatistics />
      </div>
      <div className="col-span-2 bg-indigo-400 p-4 rounded-lg col-start-2">
        <ExpenditureCategories />
      </div>

      {/* 🔹 3º elemento columna 4 (ocupa fila 4) */}
      <div className="bg-indigo-400 p-4 rounded-lg row-start-4 col-start-4">
        <TransactionHistory />
      </div>

      <div className="col-span-2 bg-indigo-400 p-4 rounded-lg col-start-2">
        <ExchangeRates />
      </div>
    </div>
  );
}

