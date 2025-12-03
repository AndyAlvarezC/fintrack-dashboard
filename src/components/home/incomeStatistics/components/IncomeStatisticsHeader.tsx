import ComponentsHeader from '../../ui/ComponentsHeader';
import Selector from '../../ui/Selector';

interface IncomeStatisticsHeaderProps {
  option: 'this' | 'prev';
  setOption: React.Dispatch<React.SetStateAction<'this' | 'prev'>>;
}

// Component for the header
export default function IncomeStatisticsHeader({
  option,
  setOption,
}: IncomeStatisticsHeaderProps) {
  return (
    <div className="flex items-center justify-between mb-3">
      {/* Title of the section */}
      <ComponentsHeader name="Income Statistics" />

      {/* Selector to switch */}
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
