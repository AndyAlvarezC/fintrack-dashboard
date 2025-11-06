export default function Legend() {
  const items = [
    { color: 'purple-600', label: 'Income' },
    { color: 'cyan-400', label: 'Expenses' },
  ];

  return (
    <div className="flex items-center space-x-6">
      {items.map(({ color, label }) => (
        <div key={label} className="flex items-center space-x-1">
          <span className={`w-3 h-3 rounded-full inline-block bg-${color}`} />
          <span className="text-gray-300 text-sm">{label}</span>
        </div>
      ))}
    </div>
  );
}
