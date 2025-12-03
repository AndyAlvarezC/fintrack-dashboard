import Legend from './FinancialLegend';
import Selector from '../../ui/Selector';
import ComponentsHeader from '../../ui/ComponentsHeader';

interface FinancialHeaderProps {
  option: 'this' | 'prev';
  setOption: React.Dispatch<React.SetStateAction<'this' | 'prev'>>;
}

export default function FinancialHeader({
  option,
  setOption,
}: FinancialHeaderProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 md:gap-6 w-full">
      {/* Header Title */}
      <ComponentsHeader name="Financial Analytics" />

      {/* Legend and Selector */}
      <div className="flex flex-wrap items-center gap-4 sm:gap-6 sm:ml-auto">
        {/* Financial Legend */}
        <Legend />

        {/* Week Selector */}
        <Selector
          option={option}
          setOption={setOption}
          options={[
            { value: 'this', label: 'This Week' },
            { value: 'prev', label: 'Last Week' },
          ]}
        />
      </div>
    </div>
  );
}
