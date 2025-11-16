import Calendar from '../../components/home/calendar/Calendar';
import ExchangeRates from '../../components/home/exchangeRates/ExchangeRates';
import ExpenditureCategories from '../../components/home/expenditureCategories/ExpenditureCategories';
import Expenses from '../../components/home/expenses/Expenses';
import FinancialAnalytics from '../../components/home/financialAnalytics/FinancialAnalytics';
import Income from '../../components/home/income/Income';
import IncomeStatistics from '../../components/home/incomeStatistics/IncomeStatistics';
import MyCards from '../../components/home/myCard/MyCards';
import SpendingStatistics from '../../components/home/spendingStatistics/SpendingStatistics';
import TotalBalance from '../../components/home/totalBalance/TotalBalance';
import TransactionHistory from '../../components/home/transactionHistory/TransactionHistory';
import Header from '../../components/home/header/Header';

export default function Home() {
  return (
    <div className="flex flex-col w-full h-screen p-6">
      {/* Header */}
      <div className="shrink-0">
        <Header />
      </div>

      <div className="flex-1 grid grid-cols-12 gap-4 py-6">
        {/* SECCIÓN IZQUIERDA - 9 columnas */}
        <div className="col-span-12 lg:col-span-9 grid grid-cols-9 gap-4 h-full">
          {/* FILA 1 */}
          {/* Financial Analytics - 6 de 9 columnas */}
          <div className="col-span-9 lg:col-span-6 bg-(--bg-primary) shadow-[0_0_15px_rgba(167,127,255,0.4)] p-4 rounded-lg">
            <FinancialAnalytics />
          </div>

          {/* Spending Statistics - 3 de 9 columnas */}
          <div className="col-span-9 lg:col-span-3 bg-(--bg-primary) shadow-[0_0_15px_rgba(167,127,255,0.4)] p-4 rounded-lg">
            <SpendingStatistics />
          </div>

          {/* FILA 2 */}
          {/* Total Balance - 3 de 9 columnas */}
          <div className="col-span-9 lg:col-span-3 bg-(--bg-primary) shadow-[0_0_15px_rgba(167,127,255,0.4)] p-4 rounded-lg">
            <TotalBalance />
          </div>

          {/* Income - 3 de 9 columnas */}
          <div className="col-span-9 lg:col-span-3 bg-(--bg-primary) shadow-[0_0_15px_rgba(167,127,255,0.4)] p-4 rounded-lg">
            <Income />
          </div>

          {/* Expenses - 3 de 9 columnas */}
          <div className="col-span-9 lg:col-span-3 bg-(--bg-primary) shadow-[0_0_15px_rgba(167,127,255,0.4)] p-4 rounded-lg">
            <Expenses />
          </div>

          {/* FILA 3 */}
          {/* Income Statistics - 3 de 9 columnas */}
          <div className="col-span-9 lg:col-span-3 bg-(--bg-primary) shadow-[0_0_15px_rgba(167,127,255,0.4)] p-4 rounded-lg">
            <IncomeStatistics />
          </div>

          {/* Expenditure Categories y Exchange Rates juntos - 6 de 9 columnas */}
          <div className="col-span-9 lg:col-span-6 grid grid-rows-2 gap-4">
            <div className="bg-(--bg-primary) shadow-[0_0_15px_rgba(167,127,255,0.4)] p-4 rounded-lg">
              <ExpenditureCategories />
            </div>
            <div className="bg-(--bg-primary) shadow-[0_0_15px_rgba(167,127,255,0.4)] p-4 rounded-lg">
              <ExchangeRates />
            </div>
          </div>
        </div>

        {/* SECCIÓN DERECHA - 3 columnas */}
        <div className="col-span-12 lg:col-span-3 grid grid-rows-3 gap-4 h-full">
          <div className="bg-(--bg-primary) shadow-[0_0_15px_rgba(167,127,255,0.4)] p-4 rounded-lg">
            <MyCards />
          </div>
          <div className="bg-(--bg-primary) shadow-[0_0_15px_rgba(167,127,255,0.4)] p-4 rounded-lg">
            <Calendar />
          </div>
          <div className="bg-(--bg-primary) shadow-[0_0_15px_rgba(167,127,255,0.4)] p-4 rounded-lg">
            <TransactionHistory />
          </div>
        </div>
      </div>
    </div>
  );
}