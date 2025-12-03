// Custom Tool Tip for charts
export default function CustomToolTip({ active, payload, label }: any) {
  if (!active || !payload || !payload.length) return null;

  const ordered = payload.sort((a: any) => (a.dataKey === 'Income' ? -1 : 1));

  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const dayLabel =
    typeof label === 'number'
      ? `Day: ${days[label - 1] || label}`
      : `${label}`;

  return (
    <div className="bg-gray-800 p-2 rounded-md text-white text-sm">
      {' '}
      <div className="font-semibold mb-1">{dayLabel}</div>
      {ordered.map((entry: any) => (
        <div key={entry.dataKey} className="flex items-center">
          <span className="mr-2" style={{ color: entry.color }}>
            ●{' '}
          </span>
          {entry.dataKey}: ${entry.value}{' '}
        </div>
      ))}{' '}
    </div>
  );
}
