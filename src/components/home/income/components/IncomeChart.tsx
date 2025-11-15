import { ResponsiveContainer, AreaChart, Area, Tooltip} from "recharts";

const data = [
  {balance: 62.12},
  {balance: 4862.12},
  {balance: 3862.12},
  {balance: 862.12},
  {balance: 7862.12},
  {balance: 662.12},
  {balance: 1862.12},
  {balance: 9862.12},
  {balance: 6862.12},
  {balance: 12862.12},
]

export default function IncomeChart() {
  return (
    <div className="w-full h-full min-h-[150px] overflow-hidden">
      <ResponsiveContainer width="100%" height="100%" minHeight={150}>
        <AreaChart data={data}>
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
  )
}
