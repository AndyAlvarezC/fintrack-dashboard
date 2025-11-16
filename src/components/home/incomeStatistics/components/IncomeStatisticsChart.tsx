import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import { formatDollar } from "../../financialAnalytics/helper/currenfyFormat";

const data = [
  { day: "Mo", cashback: 200, replenishment: 1000 },
  { day: "Tu", cashback: 250, replenishment: 800 },
  { day: "We", cashback: 350, replenishment: 1200 },
  { day: "Th", cashback: 300, replenishment: 1500 },
  { day: "Fr", cashback: 400, replenishment: 600 }
];


export default function IncomeStatisticsChart() {
  return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart 
          data={data}
          margin={{ top: 10, right: 10, left: -10, bottom: 5 }}
        >
          <CartesianGrid 
            stroke="#333" 
            strokeDasharray="5 5" 
            vertical={false} 
          />
          <XAxis
            dataKey="day" 
            tick={{ fill: '#9ca3af', fontSize: 11 }} 
            axisLine={false} 
            tickLine={false}
          /> 
          <YAxis
            tickFormatter={formatDollar}
            tick={{ fill: '#9ca3af', fontSize: 11 }}
            axisLine={false}
            tickLine={false}
            ticks={[0, 400, 800, 1200, 1600]}
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: '#1f2937', 
              border: '1px solid #374151',
              borderRadius: '8px'
            }}
            labelStyle={{ color: '#fff' }}
          />
          <Bar 
            dataKey="cashback" 
            fill="#7a46f5" 
            radius={[4, 4, 0, 0]}
            maxBarSize={40}
          />
          <Bar 
            dataKey="replenishment" 
            fill="#3b7485" 
            radius={[4, 4, 0, 0]}
            maxBarSize={40}
          />
        </BarChart>
      </ResponsiveContainer>
  );
}
