import { ResponsiveContainer, AreaChart, Area, Tooltip } from 'recharts';
import CustomToolTip from '../../ui/CustomToolTip';

interface Props {
  data: { day: string; Income: number; Expenses: number }[];
}

export default function TotalBalanceChart({ data }: Props) {
  const chartData = data.map((d) => ({
    day: d.day,
    Balance: Math.max(0, d.Income - d.Expenses),
  }));

  return (
    <div className="w-full h-full min-h-[150px] overflow-hidden">
      <ResponsiveContainer width="100%" height="100%" minHeight={150}>
        {/* Area chart */}
        <AreaChart data={chartData}>
          <Area
            dataKey="Balance"
            type="monotone"
            stroke="#a78bfa"
            fill="#a78bfa"
            fillOpacity="0.2"
            strokeWidth={3}
          />

          {/* Tooltip */}
          <Tooltip content={<CustomToolTip />} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
