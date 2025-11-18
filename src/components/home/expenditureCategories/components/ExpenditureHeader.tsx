import Selector from '../../ui/Selector';

export default function ExpenditureHeader() {
  return (
    <>
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-md md:text-lg font-semibold text-white">
          Expenditure Categories
        </h2>
        <Selector time="Today" />
      </div>
    </>
  );
}
