import Selector from '../../ui/Selector';

export default function ExchangeHeader() {
  return (
    <>
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-base font-semibold text-white">Exchange Rates</h2>
        <Selector time="Today" />
      </div>
    </>
  );
}
