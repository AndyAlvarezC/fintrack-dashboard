import { ResponsiveContainer, AreaChart, Area, Tooltip } from 'recharts';
import { expensesData } from '../data/expensesData';

export default function ExpensesChart() {
  return (
    <div className="w-full h-full min-h-[150px] overflow-hidden">
      <ResponsiveContainer width="100%" height="100%" minHeight={150}>
        <AreaChart data={expensesData}>
          <Area
            dataKey="balance"
            type="monotone"
            stroke="#7a46f5"
            fill="#443368"
            strokeWidth={3}
          />
          <Tooltip />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
