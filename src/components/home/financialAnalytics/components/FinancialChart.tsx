import { useEffect, useState } from 'react';
import {
  ResponsiveContainer,
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Area,
  Tooltip,
} from 'recharts';

import {
  financialDataPrevWeek,
  financialDataThisWeek,
} from '../../../data/mockData';
import { formatDollar } from '../../../helpers/formatDollar';
import CustomToolTip from '../../ui/CustomToolTip';

export default function FinancialChart({
  option,
}: {
  option: 'this' | 'prev';
}) {
  const [data, setData] = useState(financialDataThisWeek);

  useEffect(() => {
    const timer = setTimeout(() => {
      setData(
        option === 'this' ? financialDataThisWeek : financialDataPrevWeek
      );
    }, 150);

    return () => clearTimeout(timer);
  }, [option]);

  return (
    <div className="w-full h-full min-w-0">
      {/* Chart Container */}
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{ top: 5, right: 10, left: -15, bottom: 0 }}
        >
          {/* Grid Lines */}
          <CartesianGrid stroke="#555" strokeDasharray="5 5" vertical={false} />

          {/* X Axis */}
          <XAxis
            dataKey="day"
            tick={{ fill: 'gray', fontSize: 12 }}
            axisLine={false}
            tickLine={false}
            height={40}
          />

          {/* Y Axis */}
          <YAxis
            tickFormatter={formatDollar}
            tick={{ fill: 'gray', fontSize: 12 }}
            axisLine={false}
            tickLine={false}
            width={60}
          />

          {/* Income Area */}
          <Area
            dataKey="Income"
            type="monotone"
            stroke="#a78bfa"
            fill="#a78bfa"
            fillOpacity="0.2"
            strokeWidth={3}
            isAnimationActive={true}
            animationDuration={800}
            animationEasing="ease-in-out"
          />

          {/* Expenses Area */}
          <Area
            dataKey="Expenses"
            type="monotone"
            stroke="#14b8a6"
            fill="#14b8a6"
            fillOpacity="0.2"
            strokeWidth={3}
            isAnimationActive={true}
            animationDuration={800}
            animationEasing="ease-in-out"
          />

          {/* Custom Tooltip */}
          <Tooltip content={<CustomToolTip />} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
