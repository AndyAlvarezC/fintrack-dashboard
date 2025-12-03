import { CiCircleChevDown, CiCircleChevUp } from 'react-icons/ci';
import ReactCountryFlag from 'react-country-flag';

import type { ExchangeRate } from '../types/types';

// Single Exchange Rate Row Component

export default function ExchangeRateRow({
  currency,
  countryCode,
  rate,
  change,
}: ExchangeRate) {
  const isPositive = change > 0;

  return (
    <div className="flex items-center justify-between py-2 border-b border-gray-700 sm:last:border-b-0">
      {/* Currency info with flag and symbol */}
      <div className="flex items-center gap-2">
        <ReactCountryFlag
          countryCode={countryCode}
          svg
          style={{ width: '1.5rem', height: '1.5rem' }}
        />
        <span className="text-sm font-medium text-white">{currency}</span>
      </div>

      {/* Exchange rate value */}
      <div className="flex-1 text-center">
        <span className="text-sm text-gray-300">{rate.toFixed(4)} USD</span>
      </div>

      {/* Change percentage with arrow icon */}
      <div className="flex items-center gap-1 min-w-[70px] justify-end">
        <span
          className={`text-lg m-auto ${
            isPositive ? 'text-green-500' : 'text-red-500'
          }`}
        >
          {isPositive ? (
            <CiCircleChevUp strokeWidth={1} />
          ) : (
            <CiCircleChevDown strokeWidth={1} />
          )}
        </span>
        <span
          className={`text-sm font-medium ${
            isPositive ? 'text-green-500' : 'text-red-500'
          }`}
        >
          {isPositive ? '+' : ''}
          {change.toFixed(2)}%
        </span>
      </div>
    </div>
  );
}
