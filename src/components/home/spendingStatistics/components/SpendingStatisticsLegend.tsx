export default function SpendingStatisticsLegend() {
  const items = [
    { color: 'bg-indigo-600', label: 'Cash Withdrawal' },
    { color: 'bg-cyan-400', label: 'Payment For Purchases' },
    { color: 'bg-green-500', label: 'Money Transfers' },
  ];
  return (
    <div className="flex flex-row md:flex-col gap-4 sm:gap-6">
      {items.map(({ color, label }) => (
        <div
          key={label}
          className="flex flex-col sm:flex-row items-center text-center sm:text-start gap-2"
        >
          <span
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${color} shrink-0`}
          />
          <span className={`text-gray-300 text-xs sm:text-sm`}>{label}</span>
        </div>
      ))}
    </div>
  );
}
