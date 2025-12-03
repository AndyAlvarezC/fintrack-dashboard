import { CiCircleChevUp, CiCircleChevDown } from 'react-icons/ci';

interface Props {
  data: { Income: number }[];
  prevData: { Income: number }[];
}

export default function IncomeBalanceChange({ data, prevData }: Props) {
  const currentIncome = data[data.length - 1].Income;
  const previousIncome = prevData[prevData.length - 1].Income;

  const change = ((currentIncome - previousIncome) / previousIncome) * 100;
  const isPositive = change >= 0;

  return (
    <div className="flex flex-col justify-between h-full">
      {/* Current Income Display */}
      <div className="flex-1 flex items-center justify-center">
        <h2 className="text-xl md:text-3xl font-semibold">
          $ {currentIncome.toLocaleString()}
        </h2>
      </div>

      {/* 24h Change */}
      <div className="flex items-center gap-1">
        {isPositive ? (
          <CiCircleChevUp className="text-2xl text-green-500" strokeWidth={1} />
        ) : (
          <CiCircleChevDown className="text-2xl text-red-500" strokeWidth={1} />
        )}
        <h3
          className={`font-semibold ${
            isPositive ? 'text-green-500' : 'text-red-500'
          }`}
        >
          {isPositive ? '+' : ''}
          {change.toFixed(1)}%
        </h3>
      </div>
    </div>
  );
}
