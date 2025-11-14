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
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-full h-full">
        {/* Column 1 */}
        <div className='flex flex-col gap-4'>
          <div className="col-span-2 bg-(--bg-primary) shadow-[0_0_15px_rgba(167,127,255,0.4)] p-4 rounded-lg">
            <FinancialAnalytics />
          </div>
          <div className="bg-(--bg-primary) shadow-[0_0_15px_rgba(167,127,255,0.4)] p-4 rounded-lg">
            <TotalBalance />
          </div>
          <div className="bg-(--bg-primary) shadow-[0_0_15px_rgba(167,127,255,0.4)] p-4 rounded-lg">
            <Income />
          </div>
          <div className="bg-(--bg-primary) shadow-[0_0_15px_rgba(167,127,255,0.4)] p-4 rounded-lg">
            <Expenses />
          </div>
        </div>

        {/* Col 2 */}
        <div className="flex flex-col gap-4">
          <div className="bg-(--bg-primary) shadow-[0_0_15px_rgba(167,127,255,0.4)] p-4 rounded-lg">
            <SpendingStatistics />
          </div>
          <div className="bg-(--bg-primary) shadow-[0_0_15px_rgba(167,127,255,0.4)] p-4 rounded-lg">
            <IncomeStatistics />
          </div>
          <div className="bg-(--bg-primary) shadow-[0_0_15px_rgba(167,127,255,0.4)] p-4 rounded-lg">
            <ExpenditureCategories />
          </div>
          <div className="bg-(--bg-primary) shadow-[0_0_15px_rgba(167,127,255,0.4)] p-4 rounded-lg">
            <ExchangeRates />
          </div>
        </div>

        {/* Col 3 */}
        <div className="flex flex-col gap-4">
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
