import { useState, useMemo } from 'react';
import {
  ResponsiveContainer,
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Area,
  Tooltip,
} from 'recharts';
import Legend from './Legend';
import WeekSelector from './WeekSelector';
import CustomTooltip from './CustomToolTip';

interface WeekData {
  day: string;
  Income: number;
  Expenses: number;
}

interface DataSet {
  this: WeekData[];
  prev: WeekData[];
}

const DATA: DataSet = {
  this: [
    { day: 'Mo', Income: 3400, Expenses: 1240 },
    { day: 'Tu', Income: 4300, Expenses: 2139 },
    { day: 'We', Income: 2500, Expenses: 3380 },
    { day: 'Th', Income: 1980, Expenses: 3550 },
    { day: 'Fr', Income: 2760, Expenses: 4200 },
    { day: 'Sa', Income: 3330, Expenses: 2990 },
    { day: 'Su', Income: 1100, Expenses: 1760 },
  ],
  prev: [
    { day: 'Mo', Income: 6350, Expenses: 5200 },
    { day: 'Tu', Income: 2420, Expenses: 1180 },
    { day: 'We', Income: 3480, Expenses: 3320 },
    { day: 'Th', Income: 4900, Expenses: 4500 },
    { day: 'Fr', Income: 3700, Expenses: 2300 },
    { day: 'Sa', Income: 7400, Expenses: 6850 },
    { day: 'Su', Income: 5150, Expenses: 1600 },
  ],
};

const formatDollar = (value: number) =>
  value >= 1000 ? `$${value / 1000}k` : `$${value}`;

export default function FinancialAnalytics() {
  const [week, setWeek] = useState<'this' | 'prev'>('this');
  const data = useMemo(() => DATA[week], [week]);

  return (
    <div className="flex flex-col w-full h-full p-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Financial Analytics</h2>
        <div className="flex items-center space-x-4">
          <Legend />
          <WeekSelector week={week} setWeek={setWeek} />
        </div>
      </div>

      {/* Chart */}
      <div className="flex-1 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 20, right: 0, bottom: 0, left: 0 }}
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
    </div>
  );
}
