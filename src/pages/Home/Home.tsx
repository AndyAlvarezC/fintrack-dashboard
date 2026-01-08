import Header from '../../components/home/header/Header';
import FinancialAnalytics from '../../components/home/financialAnalytics/FinancialAnalytics';
import SpendingStatistics from '../../components/home/spendingStatistics/SpendingStatistics';
import TotalBalance from '../../components/home/totalBalance/TotalBalance';
import Income from '../../components/home/income/Income';
import Expenses from '../../components/home/expenses/Expenses';
import Calendar from '../../components/home/calendar/CalendarComponent';
import IncomeStatistics from '../../components/home/incomeStatistics/IncomeStatistics';
import ExpenditureCategories from '../../components/home/expenditureCategories/ExpenditureCategories';
import ExchangeRates from '../../components/home/exchangeRates/ExchangeRates';
import MyCards from '../../components/home/myCard/MyCards';
import TransactionHistory from '../../components/home/transactionHistory/TransactionHistory';

export default function Home() {
  return (
    <div className="flex flex-col w-full min-h-screen p-4 sm:p-6">
      {/* Header */}
      <div className="shrink-0 mb-6">
        <Header />
      </div>

      {/* Main Container */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 w-full min-w-0">
        {/* Lect Section */}
        <div className="lg:col-span-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-9 gap-8 w-full min-w-0">
          
          {/* Row 1 */}
          {/* Financial Analytics Container */}
          <div className="sm:col-span-2 lg:col-span-6 bg-linear-to-b from-slate-900 to-slate-950 shadow-2xl border border-slate-800 p-4 rounded-2xl min-h-[300px]">
            <FinancialAnalytics />
          </div>
          {/* Spending Statistics Container */}
          <div className="sm:col-span-2 lg:col-span-3 bg-linear-to-b from-slate-900 to-slate-950 shadow-2xl border border-slate-800 p-4 rounded-2xl min-h-[300px]">
            <SpendingStatistics />
          </div>

          {/* Row 2 */}
          {/* Total Balance Container */}
          <div className="lg:col-span-3 bg-linear-to-b from-slate-900 to-slate-950 shadow-2xl border border-slate-800 p-4 rounded-2xl min-h-[200px]">
            <TotalBalance />
          </div>

          {/* Income Container */}
          <div className="lg:col-span-3 bg-linear-to-b from-slate-900 to-slate-950 shadow-2xl border border-slate-800 p-4 rounded-2xl min-h-[200px]">
            <Income />
          </div>

          {/* Expenses Container */}
          <div className="sm:col-span-2 lg:col-span-3 bg-linear-to-b from-slate-900 to-slate-950 shadow-2xl border border-slate-800 p-4 rounded-2xl min-h-[200px]">
            <Expenses />
          </div>

          {/* Row 3 */}
          {/* Income Statistics Container */}
          <div className="sm:col-span-2 lg:col-span-3 bg-linear-to-b from-slate-900 to-slate-950 shadow-2xl border border-slate-800 p-4 rounded-2xl min-h-[300px]">
            <IncomeStatistics />
          </div>

          {/* Vertical Container*/}
          <div className="sm:col-span-2 lg:col-span-6 md:grid md:grid-rows-2 gap-4 min-w-0">
            {/* Expenditure Categories Container*/}
            <div className="bg-linear-to-b from-slate-900 to-slate-950 shadow-2xl border border-slate-800 p-4 rounded-2xl min-h-[200px]">
              <ExpenditureCategories />
            </div>

            {/* Exchange Rates Container*/}
            <div className="bg-linear-to-b from-slate-900 to-slate-950 shadow-2xl border border-slate-800 p-4 rounded-2xl min-h-[200px]">
              <ExchangeRates />
            </div>
          </div>
        </div>
        {/* End Left Section*/}

        {/* Right Section */}
        <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-8 w-full min-w-0">
          {/* Cards Container */}
          <div className="bg-linear-to-b from-slate-900 to-slate-950 shadow-2xl border border-slate-800 p-4 rounded-2xl min-h-[250px]">
            <MyCards />
          </div>

          {/* Calendar Container */}
          <div className="bg-linear-to-b from-slate-900 to-slate-950 shadow-2xl border border-slate-800 p-4 rounded-2xl min-h-[300px]">
            <Calendar />
          </div>

          {/* Transaction History Container */}
          <div className="sm:col-span-2 lg:col-span-1 bg-linear-to-b from-slate-900 to-slate-950 shadow-2xl border border-slate-800 p-4 rounded-2xl min-h-[400px]">
            <TransactionHistory />
          </div>
        </div>
        {/* End Right Section */}
      </div>
    </div>
  );
}
