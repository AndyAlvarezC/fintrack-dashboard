export interface ExchangeRate {
  currency: string;
  countryCode: string;
  rate: number;
  change: number;
}

export const exchangeRatesData: ExchangeRate[] = [
  { currency: 'EUR', countryCode: 'EU', rate: 1.035, change: -0.12 },
  { currency: 'CAD', countryCode: 'CA', rate: 0.7645, change: -2.4 },
  { currency: 'GBP', countryCode: 'GB', rate: 1.1836, change: 0.12 },
  { currency: 'CHF', countryCode: 'CH', rate: 1.0626, change: 0.13 },
  { currency: 'AUD', countryCode: 'AU', rate: 0.6691, change: 0.05 },
  { currency: 'RUB', countryCode: 'RU', rate: 0.0166, change: 0.03 },
];
