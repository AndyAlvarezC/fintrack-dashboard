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
    <div className="flex flex-col items-center w-full">
      <div className="relative w-full max-w-32 aspect-square">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={chartData}
              cx="50%"
              cy="50%"
              startAngle={90}
              endAngle={-270}
              innerRadius="62%"
              outerRadius="89%"
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
    <div className="flex flex-col h-full gap-4 w-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-base font-semibold text-white">Expenditure Categories</h2>
        <DaySelector />
      </div>

      {/* Legend & Charts */}
      <div className='flex flex-col md:flex-row items-center w-full gap-4'>
        {/* Leyendas */}
        <div className="flex flex-col gap-2 text-sm">
          {legends.map((legend, index) => (
            <div key={index} className="flex items-center gap-2">
              <div 
                className="w-2 h-2 rounded-full shrink-0" 
                style={{ backgroundColor: legend.color }}
              />
              <span className="text-gray-400">{legend.name}</span>
            </div>
          ))}
        </div>

        {/* Circular Progress Charts */}
        <div className="flex flex-col sm:flex-row w-full md:w-1/2 gap-4 md:m-auto justify-center">
          {categories.map((category, index) => (
            <div key={index} className="flex-1 flex justify-center min-w-0">
              <CircularChart data={category} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}