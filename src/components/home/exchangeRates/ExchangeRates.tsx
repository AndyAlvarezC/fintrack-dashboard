import { exchangeRatesData } from './data/exchangeData';
import ExchangeRateRow from './components/ExchangeRatesRow';
import ExchangeHeader from './components/ExchangeHeader';

export default function ExchangeRates() {
  const firstColumn = exchangeRatesData.slice(0, 3);
  const secondColumn = exchangeRatesData.slice(3, 6);

  return (
    <div className="flex flex-col h-full w-full">
      {/* Header */}
      <ExchangeHeader />

      {/* Exchange Rates List - 2 Columns */}
      <div className="flex flex-col md:flex-row gap-4 w-full">
        {/* First Column - 3 items */}
        <div className="flex-1 flex flex-col min-w-0">
          {firstColumn.map((rate, index) => (
            <ExchangeRateRow key={index} {...rate} />
          ))}
        </div>

        {/* Second Column - 3 items */}
        <div className="flex-1 flex flex-col min-w-0">
          {secondColumn.map((rate, index) => (
            <ExchangeRateRow key={index} {...rate} />
          ))}
        </div>
      </div>
    </div>
  );
}
