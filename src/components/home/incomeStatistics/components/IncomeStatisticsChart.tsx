import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from 'recharts';
import { incomeData } from '../data/incomeStatistics';
import { formatDollar } from '../helpers/formatDolar';

export default function IncomeStatisticsChart() {
  return (
    <>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={incomeData}
          margin={{ top: 10, right: 10, left: -10, bottom: 5 }}
        >
          <CartesianGrid stroke="#333" strokeDasharray="5 5" vertical={false} />
          <XAxis
            dataKey="day"
            tick={{ fill: 'gray', fontSize: 12 }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tickFormatter={formatDollar}
            tick={{ fill: 'gray', fontSize: 12 }}
            axisLine={false}
            tickLine={false}
            ticks={[0, 400, 800, 1200, 1600]}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: '#1f2937',
              border: '1px solid #374151',
              borderRadius: '8px',
            }}
            labelStyle={{ color: '#fff' }}
          />
          <Bar
            dataKey="cashback"
            fill="#443368"
            radius={[4, 4, 0, 0]}
            maxBarSize={40}
          />
          <Bar
            dataKey="replenishment"
            fill="#3b7485"
            radius={[4, 4, 0, 0]}
            maxBarSize={40}
          />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
}
