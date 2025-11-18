import { transactionData } from '../data/transactionData';

export default function TransactionMap() {
  return (
    <>
      {/* Transactions Map */}
      <div className="w-full flex flex-col gap-2 text-sm">
        {transactionData.map((item, index) => (
          <div
            key={index}
            className="flex flex-row items-center justify-between py-2 border-b border-gray-700 last:border-b-0 gap-2 sm:gap-4 min-w-0"
          >
            <p className="flex flex-col min-w-0">
              <span className="truncate">{item.location}</span>
              <span className="text-gray-300 text-xs sm:text-sm">
                {item.date}
              </span>
            </p>
            <p className="text-gray-300 text-xs sm:text-sm whitespace-nowrap">
              {item.time}
            </p>
            <p
              className={`flex flex-col items-start sm:items-end font-semibold whitespace-nowrap ${
                item.balance.startsWith('+') ? 'text-green-500' : 'text-red-500'
              }`}
            >
              {item.balance}
              <span className="text-gray-300 text-xs sm:text-sm">
                {item.card}
              </span>
            </p>
          </div>
        ))}
      </div>
      ;
    </>
  );
}
