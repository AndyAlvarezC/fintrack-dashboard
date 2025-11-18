import {
  ResponsiveContainer,
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Area,
  Tooltip,
} from 'recharts';
import { financialData } from '../data/financialData';
import { formatDollar } from '../helpers/formatDollar';
import FinancialCustomTooltip from './FinancialCustomToolTip';

export default function FinancialChart() {
  return (
    <div className="w-full h-full min-w-0">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={financialData}
          margin={{ top: 5, right: 10, left: -15, bottom: 0 }}
        >
          <CartesianGrid stroke="#555" strokeDasharray="5 5" vertical={false} />
          <XAxis
            dataKey="day"
            tick={{ fill: 'gray', fontSize: 12 }}
            axisLine={false}
            tickLine={false}
            height={40}
          />
          <YAxis
            tickFormatter={formatDollar}
            tick={{ fill: 'gray', fontSize: 12 }}
            axisLine={false}
            tickLine={false}
            width={60}
          />
          <Area
            dataKey="Income"
            type="monotone"
            stroke="#7a46f5"
            fill="#443368"
            strokeWidth={3}
            isAnimationActive={false}
          />
          <Area
            dataKey="Expenses"
            type="monotone"
            stroke="#46dfe7"
            fill="#3b7485"
            strokeWidth={3}
            isAnimationActive={false}
          />
          <Tooltip content={<FinancialCustomTooltip />} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
