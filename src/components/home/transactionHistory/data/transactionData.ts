interface DataProps {
  location: string;
  date: string;
  time: string;
  balance: string;
  card: string;
}

export const transactionData: DataProps[] = [
  {
    location: 'Ebay',
    date: '12 Nov, 2025',
    time: '15:00:41 Am',
    balance: '-442.60 USD',
    card: 'Debit Cart',
  },
  {
    location: 'Andy A.',
    date: '12 Nov, 2025',
    time: '13:22:40 Am',
    balance: '+800.00 USD',
    card: 'Debit Cart',
  },
  {
    location: 'Cashback',
    date: '12 Nov, 2025',
    time: '11:49:15 Am',
    balance: '+26.55 USD',
    card: 'Debit Cart',
  },
  {
    location: 'Luxaliexpress',
    date: '12 Nov, 2025',
    time: '9:28:33 Am',
    balance: '-185.42 USD',
    card: 'Debit Cart',
  },
];
