import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

export default function CircularChart({
  data,
}: {
  data: { name: string; value: number; color: string };
}) {
  const chartData = [{ value: data.value }, { value: 100 - data.value }];

  return (
    <div className="flex flex-col items-center w-full">
      <div className="relative w-full max-w-32 aspect-square">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={chartData}
              cx="50%"
              cy="50%"
              startAngle={90}
              endAngle={-270}
              innerRadius="75%"
              outerRadius="90%"
              dataKey="value"
              strokeWidth={0}
            >
              <Cell fill={data.color} />
              <Cell fill="#2a2a2a" />
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-sm font-semibold text-white">{data.name}</span>
        </div>
      </div>
    </div>
  );
}
