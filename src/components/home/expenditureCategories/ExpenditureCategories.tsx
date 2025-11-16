import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import DaySelector from '../ui/DaySelector';

const categories = [
  { name: '$124.45', value: 75, color: '#00d4ff' },
  { name: '$100.00', value: 60, color: '#8b5cf6' },
  { name: '$108.12', value: 82, color: '#ec4899' }
];

const legends = [
  { name: 'Cash Withdrawal', color: '#00d4ff' },
  { name: 'Supermarkets And Online Payment', color: '#8b5cf6' },
  { name: 'Other Shopping And Personal Care', color: '#ec4899' }
];

function CircularChart({ data }: { data: { name: string; value: number; color: string } }) {
  const chartData = [
    { value: data.value },
    { value: 100 - data.value }
  ];

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-28 h-28">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={chartData}
              cx="50%"
              cy="50%"
              startAngle={90}
              endAngle={-270}
              innerRadius={35}
              outerRadius={50}
              dataKey="value"
              strokeWidth={0}
            >
              <Cell fill={data.color} />
              <Cell fill="#2a2a2a" />
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-sm font-semibold text-white">{data.name}</span>
        </div>
      </div>
    </div>
  );
}

export default function ExpenditureCategories() {
  return (
    <div className="flex flex-col h-full">  {/* QUITÉ min-h-[350px] */}
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-base font-semibold text-white">Expenditure Categories</h2>
        <DaySelector />
      </div>

      {/* Legend */}
      <div className="flex flex-col gap-1.5 mb-2 text-xs">
        {legends.map((legend, index) => (
          <div key={index} className="flex items-center gap-2">
            <div 
              className="w-2 h-2 rounded-full" 
              style={{ backgroundColor: legend.color }}
            />
            <span className="text-gray-400">{legend.name}</span>
          </div>
        ))}
      </div>

      {/* Circular Progress Charts */}
      <div className="flex-1 flex items-center justify-around min-h-0">  {/* Añadí flex-1 */}
        {categories.map((category, index) => (
          <CircularChart key={index} data={category} />
        ))}
      </div>
    </div>
  );
}