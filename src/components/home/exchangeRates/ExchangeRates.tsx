import ExchangeHeader from './components/ExchangeHeader';
import ExchangeRateRow from './components/ExchangeRatesRow';
import useExchangeRates from './utils/useExchangeRates';

export default function ExchangeRates() {
  const { exchangeRates, loading, error, lastUpdate, fetchExchangeRates } =
    useExchangeRates();

  // Loading state
  if (loading && exchangeRates.length === 0)
    return (
      <div className="flex flex-col h-full w-full">
        <ExchangeHeader />
        <div className="flex items-center justify-center flex-1">
          <div className="flex flex-col items-center gap-3">
            <div className="relative">
              {/* Spinner animation */}
              <div className="w-12 h-12 border-4 border-purple-500/30 rounded-full" />
              <div className="w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full animate-spin absolute top-0" />
            </div>
            <p className="text-gray-400 text-sm">Loading exchange rates...</p>
          </div>
        </div>
      </div>
    );

  // Error state
  if (error && exchangeRates.length === 0)
    return (
      <div className="flex flex-col h-full w-full">
        <ExchangeHeader />
        <div className="flex items-center justify-center flex-1">
          <div className="text-center">
            <p className="text-red-400 text-sm mb-3">{error}</p>
            <button
              onClick={fetchExchangeRates}
              className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white text-sm rounded-lg transition-colors cursor-pointer"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );

  const firstColumn = exchangeRates.slice(0, 3);
  const secondColumn = exchangeRates.slice(3, 6);

  return (
    <div className="flex flex-col h-full w-full">
      {/* Header component */}
      <ExchangeHeader />

      {/* Exchange rates list*/}
      <div className="flex flex-col md:flex-row sm:gap-16 w-full sm:px-4 2xl:px-16 py-4 ">
        {/* First column */}
        <div className="flex-1 flex flex-col gap-2 min-w-0">
          {firstColumn.map((rate, idx) => (
            <ExchangeRateRow key={idx} {...rate} />
          ))}
        </div>

        {/* Second column */}
        <div className="flex-1 flex flex-col gap-2 min-w-0">
          {secondColumn.map((rate, idx) => (
            <ExchangeRateRow key={idx} {...rate} />
          ))}
        </div>
      </div>

      {/* Last update indicator */}
      {lastUpdate && !loading && (
        <div className="flex items-center justify-center gap-2 mt-3">
          <div className="flex items-center gap-1.5">
            {/* Pulsing green dot indicating live data */}
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <p className="text-xs text-gray-400">
              Live data • Updated {lastUpdate.toLocaleTimeString()} • 24h change
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
