import { CiCircleChevDown } from 'react-icons/ci';

export default function ExpensesBalanceChange() {
  return (
    <>
      {/* Left Column: Balance & Change 24h */}
      <div className="flex flex-col justify-between h-full">
        <div className="flex-1 flex items-center justify-center">
          <h2 className="text-xl md:text-2xl font-semibold">$ 4244.46</h2>
        </div>

        <div className="flex items-center gap-1">
          <CiCircleChevDown className="text-2xl text-red-500" strokeWidth={1} />
          <h3 className="text-red-500 font-semibold">-2.7%</h3>
        </div>
      </div>
    </>
  );
}
