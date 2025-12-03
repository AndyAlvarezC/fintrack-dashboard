interface Transaction {
  location: string;
  date: string;
  time: string;
  balance: string;
  card: string;
  category?: string;
}

interface TransactionMapProps {
  transactions: Transaction[];
}

export default function TransactionMap({ transactions }: TransactionMapProps) {
  return (
    <div className="w-full flex flex-col gap-2 text-sm">
      {transactions.map((item, index) => (
        <div
          key={index}
          className="grid grid-cols-3 items-center py-2 border-b border-gray-700 last:border-b-0 gap-2 sm:gap-4 min-w-0"
        >
          {/* Left Column */}
          <p className="flex flex-col min-w-0">
            <span className="truncate">{item.location}</span>
            <span className="text-gray-300 text-xs sm:text-sm">
              {item.date}
            </span>
          </p>

          {/* Center Column */}
          <p className="text-center text-gray-300 text-xs sm:text-sm whitespace-nowrap">
            {item.category && (
              <span className="mt-1 w-fit px-2 py-0.5 rounded-full text-[11px] bg-purple-900/30 text-purple-300">
                {item.category}
              </span>
            )}
          </p>

          {/* Right Column*/}
          <p
            className={`flex flex-col justify-self-end font-semibold whitespace-nowrap ${
              item.balance.startsWith('+') ? 'text-green-500' : 'text-red-500'
            }`}
          >
            {item.balance}
          </p>
        </div>
      ))}
    </div>
  );
}
