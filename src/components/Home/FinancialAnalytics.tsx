import { useState } from 'react';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';

export default function FinancialAnalytics() {
  const [week, setWeek] = useState('this');

  const dataThisWeek = [
    { day: 'Mo', Income: 3400, Expenses: 1240 },
    { day: 'Tu', Income: 4300, Expenses: 2139 },
    { day: 'We', Income: 2500, Expenses: 3380 },
    { day: 'Th', Income: 1980, Expenses: 3550 },
    { day: 'Fr', Income: 2760, Expenses: 4200 },
    { day: 'Sa', Income: 3330, Expenses: 2990 },
    { day: 'Su', Income: 1100, Expenses: 1760 },
  ];

  const dataPrevWeek = [
    { day: 'Mo', Income: 6350, Expenses: 5200 },
    { day: 'Tu', Income: 2420, Expenses: 1180 },
    { day: 'We', Income: 3480, Expenses: 3320 },
    { day: 'Th', Income: 4900, Expenses: 4500 },
    { day: 'Fr', Income: 3700, Expenses: 2300 },
    { day: 'Sa', Income: 7400, Expenses: 6850 },
    { day: 'Su', Income: 5150, Expenses: 1600 },
  ];

  const data = week === 'this' ? dataThisWeek : dataPrevWeek;

  const formatDollar = (value: number) =>
    value >= 1000 ? `$${value / 1000}k` : `$${value}`;

  return (
    <div className="w-full p-4">
      {/* Header with title, legend and selector */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Financial Analytics</h2>

        <div className="flex items-center space-x-4">
          {/* Custom Legend */}
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-1">
              <span className="w-3 h-3 bg-purple-600 rounded-full inline-block"></span>
              <span className="text-gray-300 text-sm">Income</span>
            </div>
            <div className="flex items-center space-x-1">
              <span className="w-3 h-3 bg-cyan-400 rounded-full inline-block"></span>
              <span className="text-gray-300 text-sm">Expenses</span>
            </div>
          </div>

          {/* Week Selector */}
          <div className="inline-block rounded-lg bg-linear-to-br from-purple-500/10 via-violet-500/5 to-purple-600/10 shadow-[0_0_15px_rgba(167,127,255,0.4)] backdrop-blur-sm">
            <select
              className="bg-transparent px-3 py-1 font-semibold text-white rounded-lg appearance-none"
              value={week}
              onChange={(e) => setWeek(e.target.value)}
            >
              <option value="this">This Week</option>
              <option value="prev">Last Week</option>
            </select>
          </div>
        </div>
      </div>

      {/* Chart */}
      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 20 }}>
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
            <Tooltip
              content={({ active, payload, label }) => {
                if (active && payload && payload.length) {
                  const orderedPayload = payload.sort((a, b) => {
                    if (a.dataKey === 'Income') return -1;
                    if (b.dataKey === 'Expenses') return 1;
                    return 0;
                  });

                  return (
                    <div
                      style={{
                        backgroundColor: '#1f2937',
                        padding: '8px 12px',
                        borderRadius: '8px',
                        color: 'white',
                        fontSize: '14px',
                      }}
                    >
                      <div>{label}</div>
                      {orderedPayload.map((entry) => (
                        <div key={entry.dataKey}>
                          <span style={{ color: entry.color, marginRight: 6 }}>
                            ●
                          </span>
                          {entry.dataKey}: ${entry.value}
                        </div>
                      ))}
                    </div>
                  );
                }
                return null;
              }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
