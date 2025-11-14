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
    <div className="flex flex-col w-full h-full space-y-6">
      {/* Header */}
      <Header />

      <div className="grid grid-cols-12 gap-4 w-full h-full">
        {/* Financial Analytics: columna izquierda 6/12 */}
        <div className="col-span-12 lg:col-span-6 bg-(--bg-primary) shadow-[0_0_15px_rgba(167,127,255,0.4)] p-4 rounded-lg">
          <FinancialAnalytics />
        </div>

        {/* Columna derecha superior: Spending Statistics */}
        <div className="col-span-12 lg:col-span-3 bg-(--bg-primary) shadow-[0_0_15px_rgba(167,127,255,0.4)] p-4 rounded-lg">
          <SpendingStatistics />
        </div>

        {/* Columna derecha inferior: My Cards */}
        <div className="col-span-12 lg:col-span-3 bg-(--bg-primary) shadow-[0_0_15px_rgba(167,127,255,0.4)] p-4 rounded-lg">
          <MyCards />
        </div>

        {/* Otros componentes debajo */}
        <div className="col-span-12 lg:col-span-3 bg-(--bg-primary) shadow-[0_0_15px_rgba(167,127,255,0.4)] p-4 rounded-lg">
          <TotalBalance />
        </div>
        <div className="col-span-12 lg:col-span-3 bg-(--bg-primary) shadow-[0_0_15px_rgba(167,127,255,0.4)] p-4 rounded-lg">
          <Income />
        </div>
        <div className="col-span-12 lg:col-span-3 bg-(--bg-primary) shadow-[0_0_15px_rgba(167,127,255,0.4)] p-4 rounded-lg">
          <Expenses />
        </div>
        <div className="col-span-12 lg:col-span-3 bg-(--bg-primary) shadow-[0_0_15px_rgba(167,127,255,0.4)] p-4 rounded-lg">
          <Calendar />
        </div>
        <div className="col-span-12 lg:col-span-3 bg-(--bg-primary) shadow-[0_0_15px_rgba(167,127,255,0.4)] p-4 rounded-lg">
          <IncomeStatistics />
        </div>
        <div className="col-span-12 lg:col-span-3 bg-(--bg-primary) shadow-[0_0_15px_rgba(167,127,255,0.4)] p-4 rounded-lg">
          <ExpenditureCategories />
        </div>
        <div className="col-span-12 lg:col-span-3 bg-(--bg-primary) shadow-[0_0_15px_rgba(167,127,255,0.4)] p-4 rounded-lg">
          <ExchangeRates />
        </div>
        <div className="col-span-12 lg:col-span-3 bg-(--bg-primary) shadow-[0_0_15px_rgba(167,127,255,0.4)] p-4 rounded-lg">
          <TransactionHistory />
        </div>
      </div>
    </div>
  );
}
