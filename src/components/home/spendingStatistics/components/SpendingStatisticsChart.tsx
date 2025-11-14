import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
  {name: 'Cash Withdrawal', value: 330},
  {name: 'Payment for Purchases', value: 210},
  {name: 'Money Transfers', value: 170},
]

const COLORS = ['#4F46E5', '#0EA5E9', '#22C55E'];

export default function SpendingStatisticsChart() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie data={data} dataKey="value" nameKey="name" innerRadius={40} outerRadius={60} stroke='none' >
            {data.map((entry, index) => (
              <Cell key={index} fill={COLORS[index]} />
            ))}
          <Tooltip />
          </Pie>
        </PieChart>
      </ResponsiveContainer>
        </div>
  )
}
