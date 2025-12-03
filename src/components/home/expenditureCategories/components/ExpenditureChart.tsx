import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

// Expenditure Chart Component

// Props interface
interface ExpenditureChartProps {
  data: {
    name: string;
    value: number;
    amount: number;
    color: string;
  };
}

// Main Component
export default function ExpenditureChart({ data }: ExpenditureChartProps) {
  // Prepare chart data
  const chartData = [{ value: data.value }, { value: 100 - data.value }];

  return (
    <div className="flex flex-col items-center gap-2">
      {/* Pie chart container */}
      <div className="relative w-28 h-28">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            {/* Pie segment */}
            <Pie
              data={chartData}
              cx="50%"
              cy="50%"
              startAngle={90}
              endAngle={-270}
              innerRadius="70%"
              outerRadius="100%"
              dataKey="value"
              strokeWidth={0}
            >
              {/* Segment color */}
              <Cell fill={data.color} />
              {/* Remaining background */}
              <Cell fill="#2a2a2a" />
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        {/* Centered labels */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-lg font-bold text-white">{data.value}%</span>
          <span className="text-xs text-gray-400">${data.amount}</span>
        </div>
      </div>
      {/* Category name */}
      <span className="text-sm text-gray-300 font-medium">{data.name}</span>
    </div>
  );
}
