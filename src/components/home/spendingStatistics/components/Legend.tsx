
export default function Legend() {
  const items = [
    {color: 'bg-cyan-400', label: 'Cash Withdrawal'},
    { color: 'bg-pink-600', label: 'Payment For Purchases' },
    {color: 'bg-purple-600', label: 'Money Transfers'}

  ]
  return (
    <div className="flex flex-col space-y-6">
      {items.map(({ color, label }) => (
        <div key={label} className="flex items-center space-x-1">
          <span className={`w-2 h-2 rounded-full ${color}`} />
          <span className={`text-gray-300 text-sm font-semibold`}>{label}</span>
        </div>
      ))}
    </div>
  )
}
