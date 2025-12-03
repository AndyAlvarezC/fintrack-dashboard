import { useState } from 'react';

import TotalBalanceChart from './components/TotalBalanceChart';
import TotalBalanceGrid from './components/TotalBalanceGrid';
import TotalBalanceHeader from './components/TotalBalanceHeader';

import {
  totalBalancePrevMonth,
  totalBalanceThisMonth,
} from '../../data/mockData';

export default function TotalBalance() {
  const [option, setOption] = useState<'this' | 'prev'>('this');

  const data =
    option === 'this' ? totalBalanceThisMonth : totalBalancePrevMonth;

  return (
    <div className="flex flex-col w-full h-full">
      {/* Header: title + selector */}
      <TotalBalanceHeader option={option} setOption={setOption} />

      {/* Layout: left summary + right chart */}
      <div className="grid grid-cols-[auto_1fr] h-full gap-8 w-full min-w-0">
        {/* Left Column: current balance + daily change */}
        <div>
          <TotalBalanceGrid data={data} />
        </div>

        {/* Right Column: area chart */}
        <div className="min-h-[150px] min-w-0 flex items-center">
          <TotalBalanceChart data={data} />
        </div>
      </div>
    </div>
  );
}
