import Selector from '../../ui/Selector';

export default function TotalBalanceHeader() {
  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-md md:text-lg font-semibold">Total Balance</h2>
        <Selector time="This Month" />
      </div>
    </>
  );
}
