import DaySelector from "../ui/DaySelector";

interface ExchangeRate {
  currency: string;
  flag: string;
  rate: number;
  change: number;
}

const exchangeRates: ExchangeRate[] = [
  { currency: 'EUR', flag: '🇪🇺', rate: 1.0350, change: -0.12 },
  { currency: 'CAD', flag: '🇨🇦', rate: 0.7645, change: -2.4 },
  { currency: 'GBP', flag: '🇬🇧', rate: 1.1836, change: 0.12 },
  { currency: 'CHF', flag: '🇨🇭', rate: 1.0626, change: 0.13 },
  { currency: 'AUD', flag: '🇦🇺', rate: 0.6691, change: 0.05 },
  { currency: 'RUB', flag: '🇷🇺', rate: 0.0166, change: 0.03 }
];

function ExchangeRateRow({ currency, flag, rate, change }: ExchangeRate) {
  const isPositive = change > 0;
  
  return (
    <div className="flex items-center justify-between py-2 border-b border-gray-700 last:border-b-0">
      {/* Currency Info */}
      <div className="flex items-center gap-2 min-w-80px">
        <span className="text-2xl">{flag}</span>
        <span className="text-sm font-medium text-white">{currency}</span>
      </div>

      {/* Rate */}
      <div className="flex-1 text-center">
        <span className="text-sm text-gray-300">{rate.toFixed(4)} USD</span>
      </div>

      {/* Change */}
      <div className="flex items-center gap-1 min-w-[70px] justify-end">
        <span className={`text-lg ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
          {isPositive ? '↗' : '↘'}
        </span>
        <span className={`text-sm font-medium ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
          {isPositive ? '+' : ''}{change.toFixed(2)}%
        </span>
      </div>
    </div>
  );
}

export default function ExchangeRates() {
  return (
    <div className="flex flex-col h-full">  {/* QUITÉ min-h-[400px] */}
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-base font-semibold text-white">Exchange Rates</h2>
        <DaySelector />
      </div>

      {/* Exchange Rates List */}
      <div className="flex-1 min-h-0 overflow-y-auto">
        <div className="flex flex-col">
          {exchangeRates.map((rate, index) => (
            <ExchangeRateRow key={index} {...rate} />
          ))}
        </div>
      </div>
    </div>
  );
}