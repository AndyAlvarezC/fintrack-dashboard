export default function Legend() {
  const items = [
    { color: 'bg-purple-600', label: 'Income' },
    { color: 'bg-cyan-400', label: 'Expenses' },
  ];

  return (
    <div className="flex items-center space-x-6">
      {items.map(({ color, label }) => (
        <div key={label} className="flex items-center space-x-1">
          <span className={`w-2 h-2 rounded-full inline-block ${color}`} />
          <span className="text-gray-300 text-xs">{label}</span>
        </div>
      ))}
    </div>
  );
}
