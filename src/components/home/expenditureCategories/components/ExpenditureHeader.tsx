import ComponentsHeader from '../../ui/ComponentsHeader';
import Selector from '../../ui/Selector';

// Expenditure Header Component

// Props interface
interface ExpenditureHeaderProps {
  option: 'this' | 'prev';
  setOption: React.Dispatch<React.SetStateAction<'this' | 'prev'>>;
}

// Main Component
export default function ExpenditureHeader({
  option,
  setOption,
}: ExpenditureHeaderProps) {
  return (
    <>
      {/* Header container */}
      <div className="flex items-center justify-between mb-3">
        {/* Title */}
        <ComponentsHeader name="Expenditure Categories" />
        {/* Selector dropdown */}
        <Selector
          option={option}
          setOption={setOption}
          options={[
            { value: 'this', label: 'Today' },
            { value: 'prev', label: 'Yesterday' },
          ]}
        />
      </div>
    </>
  );
}
