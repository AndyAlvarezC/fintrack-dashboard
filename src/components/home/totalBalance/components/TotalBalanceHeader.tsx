import ComponentsHeader from '../../ui/ComponentsHeader';
import Selector from '../../ui/Selector';

interface TotalBalanceHeaderProps {
  option: 'this' | 'prev';
  setOption: React.Dispatch<React.SetStateAction<'this' | 'prev'>>;
}

export default function TotalBalanceHeader({
  option,
  setOption,
}: TotalBalanceHeaderProps) {
  return (
    <>
      {/* Header: title + month selector */}
      <div className="flex justify-between items-center mb-4">
        <ComponentsHeader name="Total Balance" />

        {/* Selector Component */}
        <Selector
          option={option}
          setOption={setOption}
          options={[
            { value: 'this', label: 'This Month' },
            { value: 'prev', label: 'Last Month' },
          ]}
        />
      </div>
    </>
  );
}
