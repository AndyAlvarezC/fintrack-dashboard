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

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full flex-1">
        {/* Row 1 */}
        <div className="col-span-2 bg-(--bg-primary) shadow-[0_0_15px_rgba(167,127,255,0.4)] p-4 rounded-lg h-full">
          <FinancialAnalytics />
        </div>
        <div className="col-span-1 bg-(--bg-primary) shadow-[0_0_15px_rgba(167,127,255,0.4)] p-4 rounded-lg h-full">
          <SpendingStatistics />
        </div>
        <div className="col-span-1 bg-(--bg-primary) shadow-[0_0_15px_rgba(167,127,255,0.4)] p-4 rounded-lg h-full">
          <MyCards />
        </div>

        {/* Row 2 */}
        <div className="col-span-1 bg-(--bg-primary) shadow-[0_0_15px_rgba(167,127,255,0.4)] p-4 rounded-lg h-full">
          <TotalBalance />
        </div>
        <div className="col-span-1 bg-(--bg-primary) shadow-[0_0_15px_rgba(167,127,255,0.4)] p-4 rounded-lg h-full">
          <Income />
        </div>
        <div className="col-span-1 bg-(--bg-primary) shadow-[0_0_15px_rgba(167,127,255,0.4)] p-4 rounded-lg h-full">
          <Expenses />
        </div>

        {/* Row 3 */}
        <div className="col-span-1 bg-(--bg-primary) shadow-[0_0_15px_rgba(167,127,255,0.4)] p-4 rounded-lg h-full">
          <Calendar />
        </div>
        <div className="col-span-1 bg-(--bg-primary) shadow-[0_0_15px_rgba(167,127,255,0.4)] p-4 rounded-lg h-full">
          <IncomeStatistics />
        </div>
        <div className="col-span-1 bg-(--bg-primary) shadow-[0_0_15px_rgba(167,127,255,0.4)] p-4 rounded-lg h-full">
          <ExpenditureCategories />
        </div>

        {/* Row 4 */}
        <div className="col-span-1 bg-(--bg-primary) shadow-[0_0_15px_rgba(167,127,255,0.4)] p-4 rounded-lg h-full">
          <TransactionHistory />
        </div>
        <div className="col-span-1 bg-(--bg-primary) shadow-[0_0_15px_rgba(167,127,255,0.4)] p-4 rounded-lg h-full">
          <ExchangeRates />
        </div>
      </div>
    </div>
  );
}
