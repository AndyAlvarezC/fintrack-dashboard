import { useState } from 'react';

import FinancialChart from './components/FinancialChart';
import FinancialHeader from './components/FinancialHeader';

export default function FinancialAnalytics() {
  const [option, setOption] = useState<'this' | 'prev'>('this');

  return (
    <div className="flex flex-col w-full h-full gap-4 min-w-0">
      {/* Header Container: Title, Legend & Selector */}
      <FinancialHeader option={option} setOption={setOption} />

      {/* Chart Container */}
      <div className="w-full h-full flex-1 min-w-0">
        <FinancialChart option={option} />
      </div>
    </div>
  );
}
