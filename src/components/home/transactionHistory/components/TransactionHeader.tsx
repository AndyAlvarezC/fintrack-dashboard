import ComponentsHeader from '../../ui/ComponentsHeader';
import Selector from '../../ui/Selector';

interface TransactionHeaderProps {
  option: 'this' | 'prev';
  setOption: React.Dispatch<React.SetStateAction<'this' | 'prev'>>;
}

export default function TransactionHeader({
  option,
  setOption,
}: TransactionHeaderProps) {
  return (
    // Header container: title + selector
    <div className="flex items-center justify-between mb-3">
      {/* Title of the section */}
      <ComponentsHeader name="Transaction History" />

      {/* Selector to choose time range */}
      <Selector
        option={option}
        setOption={setOption}
        options={[
          { value: 'this', label: 'Today' },
          { value: 'prev', label: 'Yesterday' },
        ]}
      />
    </div>
  );
}
