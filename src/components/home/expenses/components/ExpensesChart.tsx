import { ResponsiveContainer, AreaChart, Area, Tooltip } from 'recharts';
import {
  totalBalancePrevMonth,
  totalBalanceThisMonth,
} from '../../../data/mockData';
import CustomToolTip from '../../ui/CustomToolTip';

export default function ExpensesChart({ option }: { option: 'this' | 'prev' }) {
  const data =
    option === 'this' ? totalBalanceThisMonth : totalBalancePrevMonth;

  return (
    <div className="w-full h-full min-h-[150px] overflow-hidden">
      {/* Responsive Area Chart */}
      <ResponsiveContainer width="100%" height="100%" minHeight={150}>
        <AreaChart data={data}>
          <Area
            dataKey="Expenses"
            type="monotone"
            stroke="#a78bfa"
            fill="#a78bfa"
            fillOpacity="0.2"
            strokeWidth={3}
          />
          <Tooltip content={<CustomToolTip />} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
