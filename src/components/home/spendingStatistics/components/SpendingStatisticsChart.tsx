import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';

import { spendingData } from '../data/spendingStatisticsData';

const COLORS = ['#4F46E5', '#0EA5E9', '#22C55E'];

export default function SpendingStatisticsChart() {
  const total = spendingData.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className="w-full h-full flex items-center justify-center min-h-[200px] relative">
      {/* Chart Container */}
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={spendingData}
            dataKey="value"
            nameKey="name"
            innerRadius={50}
            outerRadius={60}
            stroke="none"
          >
            {spendingData.map((_, index) => (
              <Cell key={index} fill={COLORS[index]} />
            ))}
            <Tooltip />
          </Pie>
        </PieChart>
      </ResponsiveContainer>

      {/* Middle Donut */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-lg md:text-xl font-semibold text-white">
          ${total}
        </span>
      </div>
    </div>
  );
}
