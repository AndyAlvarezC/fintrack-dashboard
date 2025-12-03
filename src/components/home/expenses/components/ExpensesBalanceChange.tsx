import { CiCircleChevUp, CiCircleChevDown } from 'react-icons/ci';

interface Props {
  data: { Expenses: number }[];
  prevData: { Expenses: number }[];
}

export default function ExpensesBalanceChange({ data, prevData }: Props) {
  // Get current and previous expenses
  const currentExpenses = data[data.length - 1].Expenses;
  const previousExpenses = prevData[prevData.length - 1].Expenses;

  // Calculate percentage change
  const change =
    ((currentExpenses - previousExpenses) / previousExpenses) * 100;

  const isPositive = change < 0;

  return (
    <div className="flex flex-col justify-between h-full">
      {/* Current Expenses Display */}
      <div className="flex-1 flex items-center justify-center">
        <h2 className="text-xl md:text-3xl font-semibold">
          $ {currentExpenses.toLocaleString()}
        </h2>
      </div>

      {/* 24h Change Indicator */}
      <div className="flex items-center gap-1">
        {/* Icon showing direction of change */}
        {isPositive ? (
          <CiCircleChevUp className="text-2xl text-green-500" strokeWidth={1} />
        ) : (
          <CiCircleChevDown className="text-2xl text-red-500" strokeWidth={1} />
        )}

        {/* Percentage value */}
        <h3
          className={`font-semibold ${
            isPositive ? 'text-green-500' : 'text-red-500'
          }`}
        >
          {change > 0 ? '+' : ''}
          {change.toFixed(1)}%
        </h3>
      </div>
    </div>
  );
}
