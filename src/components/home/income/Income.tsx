import { useState } from 'react';

import IncomeBalanceChange from './components/IncomeBalanceChange';
import IncomeChart from './components/IncomeChart';
import IncomeHeader from './components/IncomeHeader';

import {
  totalBalancePrevMonth,
  totalBalanceThisMonth,
} from '../../data/mockData';

// Main component
export default function Income() {
  const [option, setOption] = useState<'this' | 'prev'>('this');

  return (
    <div className="flex flex-col w-full h-full">
      {/* Header section */}
      <IncomeHeader option={option} setOption={setOption} />

      {/* Main content grid: two columns */}
      <div className="grid grid-cols-[auto_1fr] h-full gap-8 w-full min-w-0">
        {/* Left column: shows total balance and 24h change */}
        <div>
          <IncomeBalanceChange
            data={
              option === 'this' ? totalBalanceThisMonth : totalBalancePrevMonth
            }
            prevData={
              option === 'this' ? totalBalancePrevMonth : totalBalanceThisMonth
            }
          />
        </div>

        {/* Right column: chart representing income */}
        <div className="min-h-[150px] min-w-0 flex items-center">
          <IncomeChart option={option} />
        </div>
      </div>
    </div>
  );
}
