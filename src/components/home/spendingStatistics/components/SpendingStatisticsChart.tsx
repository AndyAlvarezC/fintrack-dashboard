import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

import {
  spendingDataPrevWeek,
  spendingDataThisWeek,
} from '../../../data/mockData';
import CustomToolTip from '../../ui/CustomToolTip';

const COLORS = ['#14b8a6', '#a78bfa', '#f43f5e'];

export default function SpendingStatisticsChart({
  option,
}: {
  option: 'this' | 'prev';
}) {
  const data = option === 'this' ? spendingDataThisWeek : spendingDataPrevWeek;

  // Build data for Pie chart
  const pieData = [
    {
      name: 'Cash Withdrawal',
      value: data.reduce((sum, d) => sum + d.cashWithdrawal, 0),
    },
    {
      name: 'Payments',
      value: data.reduce((sum, d) => sum + d.paymentPurchases, 0),
    },
    {
      name: 'Money Transfers',
      value: data.reduce((sum, d) => sum + d.moneyTransfers, 0),
    },
  ];

  // Total spending
  const total = pieData.reduce((sum, entry) => sum + entry.value, 0);

  return (
    <div className="w-full h-full flex items-center justify-center min-h-[200px] relative">
      {/* Responsive Chart Container */}
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          {/* Donut Chart */}
          <Pie
            data={pieData}
            dataKey="value"
            nameKey="name"
            innerRadius={50}
            outerRadius={80}
            stroke="none"
          >
            {/* Chart Colors */}
            {pieData.map((_, index) => (
              <Cell key={index} fill={COLORS[index]} />
            ))}
          </Pie>

          {/* Custom Tooltip */}
          <Tooltip content={<CustomToolTip />} />
        </PieChart>
      </ResponsiveContainer>

      {/* Center Value */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-lg md:text-xl font-semibold text-white">
          ${total}
        </span>
      </div>
    </div>
  );
}
