import Selector from '../../ui/Selector';

export default function IncomeStatisticsHeader() {
  return (
    <>
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-md md:text-lg font-semibold">Income Statistics</h2>
        <Selector time="This Week" />
      </div>
    </>
  );
}
