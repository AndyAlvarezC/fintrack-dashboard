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
    <div className="w-full h-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart 
          data={data} 
          margin={{ top: 5, right: 10, left: -15, bottom: 0 }}
        >
          <CartesianGrid stroke="#555" strokeDasharray="5 5" vertical={false} />
          <XAxis dataKey="day" tick={{ fill: 'gray', fontSize: 12 }} axisLine={false} tickLine={false} height={40} />
          <YAxis tickFormatter={formatDollar} tick={{ fill: 'gray', fontSize: 12 }} axisLine={false} tickLine={false} width={60} />
          <Area dataKey="income" type="monotone" stroke="#7a46f5" fill="#443368" strokeWidth={3} isAnimationActive={false} />
          <Area dataKey="expenses" type="monotone" stroke="#46dfe7" fill="#3b7485" strokeWidth={3} isAnimationActive={false} />
          <Tooltip content={CustomTooltip} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
