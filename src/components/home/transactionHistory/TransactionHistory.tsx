import DaySelector from "../ui/DaySelector";

interface DataProps {
  location: string;
  date: string;
  time: string;
  balance: string;
  card: string;
}

const data: DataProps[] = [
  {location: 'Ebay', date: '12 Nov, 2025', time: '15:00:41 Am', balance: '-442.60 USD', card: 'Debit Cart'},
  {location: 'Andy A.', date: '12 Nov, 2025', time: '13:22:40 Am', balance: '+800.00 USD', card: 'Debit Cart'},
  {location: 'Cashback', date: '12 Nov, 2025', time: '11:49:15 Am', balance: '+26.55 USD', card: 'Debit Cart'},
  {location: 'Luxaliexpress', date: '12 Nov, 2025', time: '9:28:33 Am', balance: '-185.42 USD', card: 'Debit Cart'},
];

export default function TransactionHistory() {

  return (
    <div className="flex flex-col h-full min-h-[400px]">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-base font-semibold">Transaction History</h2>
        <DaySelector />
      </div>
      
      {/* Transactions */}
      <div className="flex-1 min-h-0 pt-2">
        <div className="w-full flex flex-col gap-2 text-sm">
          {data.map((item, index) => (
            <div key={index} className="flex items-center justify-between py-2 border-b border-gray-700 last:border-b-0">
              <p className="flex flex-col">
                {item.location}
                <span className="text-gray-300">{item.date}</span>
              </p>
              <p className="text-gray-300">{item.time}</p>
              <p className={`flex flex-col items-end font-semibold ${item.balance.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                {item.balance}
                <span className="text-gray-300">{item.card}</span>
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination */}
      <div className="flex flex-row w-full justify-center gap-2 mt-auto pt-3">
        <div className="w-3 h-3 bg-gray-400 rounded-full" />
        <div className="w-3 h-3 bg-purple-700 rounded-full" />
        <div className="w-3 h-3 bg-gray-400 rounded-full" />
      </div>
    </div>
  );
}