import { CiCircleChevUp } from 'react-icons/ci';

export default function TotalBalanceGrid() {
  return (
    <>
      {/* Left Column */}
      <div className="flex flex-col justify-between h-full">
        <div className="flex-1 flex items-center justify-center">
          <h2 className="text-xl md:text-2xl font-semibold">$ 9864.12</h2>
        </div>

        {/* Change 24h */}
        <div className="flex items-center gap-1">
          <CiCircleChevUp className="text-2xl text-green-500" strokeWidth={1} />
          <h3 className="text-green-500 font-semibold">+1.8%</h3>
        </div>
      </div>
    </>
  );
}
