import {
  ResponsiveContainer,
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Area,
  Tooltip,
} from 'recharts';
import CustomTooltip from './CustomToolTip';
import { formatDollar } from '../helper/currenfyFormat';
import { data } from '../data/financialAnalyticsData'


export default function FinancialChart() {

  return (
    <div className="w-full min-h-[250px] h-full flex items-center justify-center">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <CartesianGrid stroke="#555" strokeDasharray="5 5" vertical={false} />
          <XAxis dataKey="day" tick={{ fill: 'gray' }} axisLine={false} tickLine={false} />
          <YAxis
            tickFormatter={formatDollar}
            tick={{ fill: 'gray' }}
            axisLine={false}
            tickLine={false}
          />
          <Area dataKey="income" type="monotone" stroke="#7a46f5" fill="#443368" strokeWidth={3} />
          <Area
            dataKey="expenses"
            type="monotone"
            stroke="#46dfe7"
            fill="#3b7485"
            strokeWidth={3}
          />
          <Tooltip content={CustomTooltip} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
