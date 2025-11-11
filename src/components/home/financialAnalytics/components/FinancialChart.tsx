import {
  ResponsiveContainer,
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Area,
  Tooltip,
} from 'recharts';
import { useMemo } from 'react';

import CustomTooltip from './CustomToolTip';
import { DATA } from '../data/financialAnalyticsData';
import { formatDollar } from '../helper/currenfyFormat';

interface FinancialChartProps {
  week: 'this' | 'prev';
}

export default function FinancialChart({ week }: FinancialChartProps) {
  const data = useMemo(() => DATA[week], [week]);

  return (
    <div className="flex-1 w-full">
        <ResponsiveContainer width="100%" height="120%">
          <AreaChart
            data={data}
            margin={{ top: 20, right: 0, bottom: 0, left: -20 }}
          >
            <CartesianGrid
              stroke="#555"
              strokeDasharray="5 5"
              vertical={false}
            />
            <XAxis
              dataKey="day"
              tick={{ fill: 'gray' }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              tickFormatter={formatDollar}
              tick={{ fill: 'gray' }}
              axisLine={false}
              tickLine={false}
            />
            <Area
              dataKey="Income"
              type="monotone"
              stroke="#7a46f5"
              fill="#443368"
              strokeWidth={3}
            />
            <Area
              dataKey="Expenses"
              type="monotone"
              stroke="#46dfe7"
              fill="#3b7485"
              strokeWidth={3}
            />
            <Tooltip content={CustomTooltip} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
  )
}
