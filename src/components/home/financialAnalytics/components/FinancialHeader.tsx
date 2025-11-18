import Legend from './FinancialLegend';
import Selector from '../../ui/Selector';

export default function FinancialHeader() {
  return (
    <>
      {/* Header: h2, Legend & Selector */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 md:gap-6 w-full">
        <h2 className="text-md md:text-lg font-semibold truncate">
          Financial Analytics
        </h2>
        <div className="flex flex-wrap items-center gap-4 sm:gap-6 sm:ml-auto">
          <Legend />
          <Selector time="This Week" />
        </div>
      </div>
    </>
  );
}
