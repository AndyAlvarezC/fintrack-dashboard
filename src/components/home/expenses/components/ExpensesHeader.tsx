import ComponentsHeader from '../../ui/ComponentsHeader';
import Selector from '../../ui/Selector';

interface ExpensesHeaderProps {
  option: 'this' | 'prev';
  setOption: React.Dispatch<React.SetStateAction<'this' | 'prev'>>;
}

export default function ExpensesHeader({
  option,
  setOption,
}: ExpensesHeaderProps) {
  return (
    <div className="flex justify-between items-center mb-4">
      {/* Header Title */}
      <ComponentsHeader name="Expenses" />

      {/* Selector to switch */}
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
