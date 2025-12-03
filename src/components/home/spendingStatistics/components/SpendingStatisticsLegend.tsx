export default function SpendingStatisticsLegend() {
  // Legend items
  const items = [
    { color: 'bg-teal-400', label: 'Cash Withdrawal' },
    { color: 'bg-rose-500', label: 'Payment For Purchases' },
    { color: 'bg-purple-400', label: 'Money Transfers' },
  ];

  return (
    // Legend container: horizontal on mobile, vertical on larger screens
    <div className="flex flex-row md:flex-col gap-4 sm:gap-6">
      {/* Render each legend item */}
      {items.map(({ color, label }) => (
        <div
          key={label}
          className="flex flex-col sm:flex-row items-center text-center sm:text-start gap-2"
        >
          {/* Color dot indicator */}
          <span
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${color} shrink-0`}
          />

          {/* Label text */}
          <span className="text-gray-300 text-xs sm:text-sm">{label}</span>
        </div>
      ))}
    </div>
  );
}
