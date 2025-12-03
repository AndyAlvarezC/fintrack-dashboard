import { useState } from 'react';

import ExpensesBalanceChange from './components/ExpensesBalanceChange';
import ExpensesChart from './components/ExpensesChart';
import ExpensesHeader from './components/ExpensesHeader';

import {
  totalBalancePrevMonth,
  totalBalanceThisMonth,
} from '../../data/mockData';

export default function Expenses() {
  const [option, setOption] = useState<'this' | 'prev'>('this');

  return (
    <div className="flex flex-col w-full h-full">
      {/* Header Container */}
      <ExpensesHeader option={option} setOption={setOption} />

      {/* Main Content Grid */}
      <div className="grid grid-cols-[auto_1fr] h-full gap-8 w-full min-w-0">
        {/* Left Column: Expenses Balance Change */}
        <div>
          <ExpensesBalanceChange
            data={
              option === 'this' ? totalBalanceThisMonth : totalBalancePrevMonth
            }
            prevData={
              option === 'this' ? totalBalancePrevMonth : totalBalanceThisMonth
            }
          />
        </div>

        {/* Right Column: Expenses Chart */}
        <div className="min-h-[150px] min-w-0 flex items-center">
          <ExpensesChart option={option} />
        </div>
      </div>
    </div>
  );
}
