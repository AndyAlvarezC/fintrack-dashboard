import ComponentsHeader from '../../ui/ComponentsHeader';
import Selector from '../../ui/Selector';

interface SpendingStatisticsHeaderProps {
  option: 'this' | 'prev';
  setOption: React.Dispatch<React.SetStateAction<'this' | 'prev'>>;
}

export default function SpendingStatisticsHeader({
  option,
  setOption,
}: SpendingStatisticsHeaderProps) {
  return (
    // Header container: title + selector
    <div className="flex items-center justify-between w-full">
      {/* Component title */}
      <ComponentsHeader name="Spending Statistics" />

      {/* Week selector */}
      <Selector
        option={option}
        setOption={setOption}
        options={[
          { value: 'this', label: 'This Week' },
          { value: 'prev', label: 'Last Week' },
        ]}
      />
    </div>
  );
}
