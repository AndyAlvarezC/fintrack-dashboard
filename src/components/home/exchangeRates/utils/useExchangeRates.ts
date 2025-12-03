import { useState, useEffect } from 'react';
import type { ExchangeRate } from '../types/types';

export default function useExchangeRates() {
  // State to store exchange rates
  const [exchangeRates, setExchangeRates] = useState<ExchangeRate[]>([]);
  // Loading state while fetching data
  const [loading, setLoading] = useState(true);
  // Error state in case fetching fails
  const [error, setError] = useState<string | null>(null);
  // Last update
  const [lastUpdate, setLastUpdate] = useState<Date | null>(null);

  // Fetch exchange rates
  useEffect(() => {
    fetchExchangeRates();
    const interval = setInterval(fetchExchangeRates, 10 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  // Function to fetch exchange rates
  const fetchExchangeRates = async () => {
    try {
      setLoading(true);

      // List of currencies to fetch
      const currencies = [
        { code: 'EUR', country: 'EU' },
        { code: 'CAD', country: 'CA' },
        { code: 'GBP', country: 'GB' },
        { code: 'CHF', country: 'CH' },
        { code: 'AUD', country: 'AU' },
        { code: 'JPY', country: 'JP' },
      ];

      // Get today's and yesterday's dates
      const today = new Date();
      const yesterday = new Date(today);
      yesterday.setDate(yesterday.getDate() - 1);

      const todayStr = today.toISOString().split('T')[0];
      const yesterdayStr = yesterday.toISOString().split('T')[0];

      // Fetch current and previous exchange rates
      const [currentResponse, previousResponse] = await Promise.all([
        fetch(`https://api.frankfurter.app/${todayStr}?from=USD`),
        fetch(`https://api.frankfurter.app/${yesterdayStr}?from=USD`),
      ]);

      if (!currentResponse.ok || !previousResponse.ok)
        throw new Error('Failed to fetch');

      const currentData = await currentResponse.json();
      const previousData = await previousResponse.json();

      // Map API data to our format and calculate 24h change
      const rates: ExchangeRate[] = currencies
        .map(({ code, country }) => {
          const currentRate = currentData.rates[code];
          const previousRate = previousData.rates[code];
          if (!currentRate || !previousRate) return null;

          const convertedCurrentRate = 1 / currentRate;
          const convertedPreviousRate = 1 / previousRate;

          // Calculate % change from previous day
          const change =
            ((convertedCurrentRate - convertedPreviousRate) /
              convertedPreviousRate) *
            100;

          return {
            currency: code,
            countryCode: country,
            rate: convertedCurrentRate,
            change,
          };
        })
        .filter((rate): rate is ExchangeRate => rate !== null);

      setExchangeRates(rates);
      setLastUpdate(new Date());
      setError(null);
    } catch (err) {
      console.error(err);
      setError('Failed to load exchange rates');
    } finally {
      setLoading(false);
    }
  };

  return { exchangeRates, loading, error, lastUpdate, fetchExchangeRates };
}
