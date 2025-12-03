export default function Legend() {
  const items = [
    { color: 'bg-purple-400', label: 'Income' },
    { color: 'bg-teal-500', label: 'Expenses' },
  ];

  return (
    <div className="flex items-center gap-4 sm:gap-6 flex-wrap">
      {items.map(({ color, label }) => (
        <div key={label} className="flex items-center gap-1">
          {/* Color Indicator */}
          <span
            className={`w-2 h-2 rounded-full inline-block ${color} shrink-0`}
          />
          {/* Label */}
          <span className="text-gray-300 text-xs sm:text-sm whitespace-nowrap">
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}
