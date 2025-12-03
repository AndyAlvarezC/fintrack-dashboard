import { CiCircleChevUp, CiCircleChevDown } from 'react-icons/ci';

interface Props {
  data: { day: string; Income: number; Expenses: number }[];
}

export default function TotalBalanceGrid({ data }: Props) {
  if (data.length < 2) return null;

  const lastDay = data[data.length - 1];
  const prevDay = data[data.length - 2];

  const lastBalance = lastDay.Income - lastDay.Expenses;
  const prevBalance = prevDay.Income - prevDay.Expenses;

  // Percentage change from previous balance
  const change = ((lastBalance - prevBalance) / prevBalance) * 100;
  const isPositive = change >= 0;

  return (
    <div className="flex flex-col justify-between h-full">
      {/* Current total balance */}
      <div className="flex-1 flex items-center justify-center">
        <h2 className="text-xl md:text-3xl font-semibold">
          $ {lastBalance.toLocaleString()}
        </h2>
      </div>

      {/* Daily percentage change */}
      <div className="flex items-center gap-1">
        {isPositive ? (
          <CiCircleChevUp className="text-2xl text-green-500" strokeWidth={1} />
        ) : (
          <CiCircleChevDown className="text-2xl text-red-500" strokeWidth={1} />
        )}

        <h3
          className={`${
            isPositive ? 'text-green-500' : 'text-red-500'
          } font-semibold`}
        >
          {change.toFixed(1)}%
        </h3>
      </div>
    </div>
  );
}
