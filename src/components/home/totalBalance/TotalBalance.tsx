import WeekSelector from '../ui/WeekSelector';

export default function TotalBalance() {
  return (
    <div className="flex flex-col w-full h-full">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-md font-semibold">Total Balance</h2>
        <WeekSelector />
      </div>

      <div className="flex text-xl my-auto font-semibold">
        <h2>$ 9864.12</h2>
      </div>
      {/* Area Chart */}
    </div>
  );
}
