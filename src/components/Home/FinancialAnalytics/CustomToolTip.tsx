export default function CustomTooltip({ active, payload, label }: any) {
  if (!active || !payload || !payload.length) return null;

  const ordered = payload.sort((a: any) => (a.dataKey === 'Income' ? -1 : 1));

  return (
    <div className="bg-gray-800 p-2 rounded-md text-white text-sm">
      <div>{label}</div>
      {ordered.map((entry: any) => (
        <div key={entry.dataKey} className="flex items-center">
          <span className="mr-2" style={{ color: entry.color }}>
            ●
          </span>
          {entry.dataKey}: ${entry.value}
        </div>
      ))}
    </div>
  );
}
