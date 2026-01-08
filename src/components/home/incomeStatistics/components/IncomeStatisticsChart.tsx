import { useEffect, useState } from 'react';
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from 'recharts';

import { formatDollar } from '../../../helpers/formatDollar';
import CustomToolTip from '../../ui/CustomToolTip';

import { IncomeDataThisWeek, IncomeDataPrevWeek } from '../../../data/mockData';

interface Props {
  option: 'this' | 'prev';
}

// Component
export default function IncomeStatisticsChart({ option }: Props) {
  const [data, setData] = useState(IncomeDataThisWeek);

  // Update chart data
  useEffect(() => {
    const timer = setTimeout(() => {
      setData(option === 'this' ? IncomeDataThisWeek : IncomeDataPrevWeek);
    }, 150);
    return () => clearTimeout(timer);
  }, [option]);

  return (
    <div className="w-full h-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 10, right: 10, left: -10, bottom: 5 }}
        >
          <CartesianGrid stroke="#333" strokeDasharray="5 5" vertical={false} />
          {/* X-axis */}
          <XAxis
            dataKey="day"
            tick={{ fill: 'gray', fontSize: 12 }}
            axisLine={false}
            tickLine={false}
          />
          {/* Y-axis */}
          <YAxis
            tickFormatter={formatDollar}
            tick={{ fill: 'gray', fontSize: 12 }}
            axisLine={false}
            tickLine={false}
            ticks={[0, 200, 400, 600, 800, 1000]}
          />
          {/* Bar for cashback */}
          <Bar
            dataKey="cashback"
            fill="#8b5cf6"
            radius={[4, 4, 0, 0]}
            maxBarSize={40}
            isAnimationActive={true}
            animationDuration={800}
            animationEasing="ease-in-out"
          />
          {/* Bar for replenishment */}
          <Bar
            dataKey="replenishment"
            fill="#0d9488"
            radius={[4, 4, 0, 0]}
            maxBarSize={40}
            isAnimationActive={true}
            animationDuration={800}
            animationEasing="ease-in-out"
          />
          {/* Custom tooltip component */}
          <Tooltip
            cursor={{ fill: 'rgba(255,255,255,0.03)' }}
            content={
              <CustomToolTip
                nameFormatter={(name: string) =>
                  name.charAt(0).toUpperCase() + name.slice(1)
                }
              />
            }
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
