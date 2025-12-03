import ComponentsHeader from '../../ui/ComponentsHeader';
import Selector from '../../ui/Selector';

interface IncomeHeaderProps {
  option: 'this' | 'prev';
  setOption: React.Dispatch<React.SetStateAction<'this' | 'prev'>>;
}

export default function IncomeHeader({ option, setOption }: IncomeHeaderProps) {
  return (
    <div className="flex justify-between items-center mb-4">
      {/* Header Container */}
      <ComponentsHeader name="Income" />

      {/* Selector for Month Option */}
      <Selector
        option={option}
        setOption={setOption}
        options={[
          { value: 'this', label: 'This Month' },
          { value: 'prev', label: 'Last Month' },
        ]}
      />
    </div>
  );
}
