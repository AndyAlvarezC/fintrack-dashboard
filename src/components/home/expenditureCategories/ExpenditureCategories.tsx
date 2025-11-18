import CircularChart from './components/ExpenditureChart';
import ExpenditureHeader from './components/ExpenditureHeader';
import ExpenditureLegend from './components/ExpenditureLegend';
import { expenditureCategories } from './data/expenditureCategories';

export default function ExpenditureCategories() {
  return (
    <div className="flex flex-col h-full gap-4 w-full">
      {/* Header */}
      <ExpenditureHeader />

      {/* Legend & Charts */}
      <div className="flex flex-col md:flex-row items-center w-full gap-4">
        {/* Legend */}
        <ExpenditureLegend />
        {/* Circular Progress Charts */}
        <div className="flex flex-col sm:flex-row w-full md:w-1/2 gap-4 md:m-auto justify-center">
          {expenditureCategories.map((category, index) => (
            <div key={index} className="flex-1 flex justify-center min-w-0">
              <CircularChart data={category} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
