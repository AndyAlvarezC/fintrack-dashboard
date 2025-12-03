import { ResponsiveContainer, AreaChart, Area, Tooltip } from 'recharts';

import {
  totalBalancePrevMonth,
  totalBalanceThisMonth,
} from '../../../data/mockData';
import CustomToolTip from '../../ui/CustomToolTip';

interface Props {
  option: 'this' | 'prev';
}

export default function IncomeChart({ option }: Props) {
  const data =
    option === 'this' ? totalBalanceThisMonth : totalBalancePrevMonth;

  return (
    <div className="w-full h-full min-h-[150px] overflow-hidden">
      {/* Area Chart Container */}
      <ResponsiveContainer width="100%" height="100%" minHeight={150}>
        <AreaChart data={data}>
          {/* Income Area */}
          <Area
            dataKey="Income"
            type="monotone"
            stroke="#a78bfa"
            fill="#a78bfa"
            fillOpacity="0.2"
            strokeWidth={3}
          />
          {/* Custom Tooltip */}
          <Tooltip content={<CustomToolTip />} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
