import { useState } from 'react';

import ExpenditureHeader from './components/ExpenditureHeader';
import ExpenditureLegend from './components/ExpenditureLegend';
import ExpenditureChart from './components/ExpenditureChart';

import {
  expenditureCategoriesThis,
  expenditureCategoriesPrev,
} from '../../data/mockData';

// Expenditure Categories Component

// Main Component
export default function ExpenditureCategories() {
  const [option, setOption] = useState<'this' | 'prev'>('this');

  const categories =
    option === 'this' ? expenditureCategoriesThis : expenditureCategoriesPrev;

  return (
    <div className="flex flex-col h-full gap-4 w-full">
      {/* Header with option selector */}
      <ExpenditureHeader option={option} setOption={setOption} />

      {/* Container for legend and charts */}
      <div className="flex flex-col md:flex-row items-start w-full gap-6 transition-opacity duration-300">
        {/* Categories legend */}
        <div className="w-full md:w-auto">
          <ExpenditureLegend />
        </div>

        {/* Circular progress charts */}
        <div className="grid grid-cols-2 sm:grid-cols-4 w-full md:flex-1 gap-4 sm:gap-6 place-items-center">
          {categories.map((category, index) => (
            <div key={index}>
              <ExpenditureChart data={category} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
