import Calendar from '../../components/home/calendar/CalendarComponent';
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
    <div className="flex flex-col w-full min-h-screen p-4 sm:p-6 bg-[#1F1F1F] text-[#E0E0E0]">
      {/* Header */}
      <div className="shrink-0 mb-6">
        <Header />
      </div>

      <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 w-full min-w-0">
        {/* LEFT SECTION */}
        <div className="lg:col-span-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-9 gap-8 w-full min-w-0">
          {/* ROW 1 */}
          {/* Financial Analytics */}
          <div className="sm:col-span-2 lg:col-span-6 bg-linear-to-b from-[#2D2D2D] to-[#1F1F1F] shadow-xl p-4 rounded-lg min-h-[300px]">
            <FinancialAnalytics />
          </div>

          {/* Spending Statistics */}
          <div className="sm:col-span-2 lg:col-span-3 bg-linear-to-b from-[#2D2D2D] to-[#1F1F1F] shadow-xl p-4 rounded-lg min-h-[300px]">
            <SpendingStatistics />
          </div>

          {/* ROW 2 */}
          {/* Total Balance */}
          <div className="lg:col-span-3 bg-linear-to-b from-[#2D2D2D] to-[#1F1F1F] shadow-xl p-4 rounded-lg min-h-[200px]">
            <TotalBalance />
          </div>

          {/* Income */}
          <div className="lg:col-span-3 bg-linear-to-b from-[#2D2D2D] to-[#1F1F1F] shadow-xl p-4 rounded-lg min-h-[200px]">
            <Income />
          </div>

          {/* Expenses */}
          <div className="sm:col-span-2 lg:col-span-3 bg-linear-to-b from-[#2D2D2D] to-[#1F1F1F] shadow-xl p-4 rounded-lg min-h-[200px]">
            <Expenses />
          </div>

          {/* ROW 3 */}
          {/* Income Statistics */}
          <div className="sm:col-span-2 lg:col-span-3 bg-linear-to-b from-[#2D2D2D] to-[#1F1F1F] shadow-xl p-4 rounded-lg min-h-[300px]">
            <IncomeStatistics />
          </div>

          {/* Expenditure Categories & Exchange Rates together */}
          <div className="sm:col-span-2 lg:col-span-6 md:grid md:grid-rows-2 gap-4 min-w-0">
            <div className="bg-linear-to-b from-[#2D2D2D] to-[#1F1F1F] shadow-xl p-4 rounded-lg min-h-[200px]">
              <ExpenditureCategories />
            </div>
            <div className="bg-linear-to-b from-[#2D2D2D] to-[#1F1F1F] shadow-xl p-4 rounded-lg min-h-[200px]">
              <ExchangeRates />
            </div>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-8 w-full min-w-0">
          <div className="bg-linear-to-b from-[#2D2D2D] to-[#1F1F1F] shadow-xl p-4 rounded-lg min-h-[250px]">
            <MyCards />
          </div>
          <div className="bg-linear-to-b from-[#2D2D2D] to-[#1F1F1F] shadow-xl p-4 rounded-lg min-h-[300px]">
            <Calendar />
          </div>
          <div className="sm:col-span-2 lg:col-span-1 bg-linear-to-b from-[#2D2D2D] to-[#1F1F1F] shadow-xl p-4 rounded-lg min-h-[400px]">
            <TransactionHistory />
          </div>
        </div>
      </div>
    </div>
  );
}
