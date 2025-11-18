import Selector from '../../ui/Selector';

export default function SpendingStatisticsHeader() {
  return (
    <div className="flex items-center justify-between w-full">
      <h2 className="text-md md:text-lg font-semibold">Spending Statistics</h2>
      <Selector time="This Week" />
    </div>
  );
}
