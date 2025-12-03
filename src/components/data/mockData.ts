// Utils

// Generate random daily income and expenses
function generateDayFinancialData(
  IncomeMin: number,
  IncomeMax: number,
  expMin: number,
  expMax: number
) {
  const Income =
    Math.floor(Math.random() * (IncomeMax - IncomeMin)) + IncomeMin;

  const Expenses = Math.min(
    Income,
    Math.floor(Math.random() * (expMax - expMin)) + expMin
  );

  return { Income, Expenses };
}

// Split expenses into cash withdrawal, purchases, and transfers
function generateSpending(Expenses: number) {
  const cashWithdrawal = Math.floor(Expenses * (0.15 + Math.random() * 0.15));
  const paymentPurchases = Math.floor(Expenses * (0.4 + Math.random() * 0.2));
  const moneyTransfers = Math.max(
    0,
    Expenses - (cashWithdrawal + paymentPurchases)
  );

  return { cashWithdrawal, paymentPurchases, moneyTransfers };
}

// Days of the week
const weekDays = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];

// THIS WEEK — Income & Expenses
// Generate daily financial data for current week
export const financialDataThisWeek = weekDays.map((day) => {
  const { Income, Expenses } = generateDayFinancialData(1100, 1800, 600, 1200);
  return { day, Income, Expenses };
});

// PREV WEEK — Income & Expenses
// Generate daily financial data for previous week
export const financialDataPrevWeek = weekDays.map((day) => {
  const { Income, Expenses } = generateDayFinancialData(1000, 1600, 600, 1100);
  return { day, Income, Expenses };
});

// THIS WEEK — Spending Breakdown
// Breakdown expenses into categories for current week
export const spendingDataThisWeek = financialDataThisWeek.map((d) => ({
  day: d.day,
  ...generateSpending(d.Expenses),
}));

// Breakdown expenses for previous week
export const spendingDataPrevWeek = financialDataPrevWeek.map((d) => ({
  day: d.day,
  ...generateSpending(d.Expenses),
}));

// THIS MONTH — 30 days
// Generate monthly total balance for current month
export const totalBalanceThisMonth = Array.from({ length: 30 }, (_, i) => {
  const day = i + 1;
  const { Income, Expenses } = generateDayFinancialData(1000, 1500, 500, 1200);

  return {
    day: `Day ${day}`,
    Income,
    Expenses,
    balance: Math.max(0, Income - Expenses),
  };
});

// Generate monthly total balance for previous month
export const totalBalancePrevMonth = Array.from({ length: 30 }, (_, i) => {
  const day = i + 1;
  const { Income, Expenses } = generateDayFinancialData(900, 1400, 400, 1100);

  return {
    day: `Day ${day}`,
    Income,
    Expenses,
    balance: Math.max(0, Income - Expenses),
  };
});

// Income Statistics
// Calculate cashback and replenishments for current week
export const IncomeDataThisWeek = financialDataThisWeek.map((d) => {
  const cashback = Math.floor(d.Income * (0.3 + Math.random() * 0.2));
  const replenishment = Math.min(
    d.Income - cashback,
    Math.floor(d.Income * (0.2 + Math.random() * 0.2))
  );

  return { day: d.day, cashback, replenishment };
});

// Calculate cashback and replenishments for previous week
export const IncomeDataPrevWeek = financialDataPrevWeek.map((d) => {
  const cashback = Math.floor(d.Income * (0.3 + Math.random() * 0.2));
  const replenishment = Math.min(
    d.Income - cashback,
    Math.floor(d.Income * (0.2 + Math.random() * 0.2))
  );

  return { day: d.day, cashback, replenishment };
});

// Default to current week income stats
export const IncomeData = IncomeDataThisWeek;

// EXPENDITURE CATEGORIES
// Generate expense categories with amounts and colors
function generateExpenditureCategories(
  financialData: { day: string; Income: number; Expenses: number }[]
) {
  const totalExpenses = financialData.reduce((sum, d) => sum + d.Expenses, 0);

  let foodPercentage = 35 + Math.random() * 10;
  let transportPercentage = 15 + Math.random() * 10;
  let shoppingPercentage = 25 + Math.random() * 10;

  const roundedFood = Math.round(foodPercentage);
  const roundedTransport = Math.round(transportPercentage);
  const roundedShopping = Math.round(shoppingPercentage);

  const roundedEntertainment =
    100 - (roundedFood + roundedTransport + roundedShopping);

  const foodAmount = Math.floor(totalExpenses * (roundedFood / 100));
  const transportAmount = Math.floor(totalExpenses * (roundedTransport / 100));
  const shoppingAmount = Math.floor(totalExpenses * (roundedShopping / 100));

  const entertainmentAmount =
    totalExpenses - (foodAmount + transportAmount + shoppingAmount);

  return {
    categories: [
      {
        name: 'Food',
        value: roundedFood,
        amount: foodAmount,
        color: '#a78bfa',
      },
      {
        name: 'Transport',
        value: roundedTransport,
        amount: transportAmount,
        color: '#f43f5e',
      },
      {
        name: 'Shopping',
        value: roundedShopping,
        amount: shoppingAmount,
        color: '#14b8a6',
      },
      {
        name: 'Entertainment',
        value: roundedEntertainment,
        amount: entertainmentAmount,
        color: '#fb923c',
      },
    ],
    totalExpenses,
  };
}

// Categories and totals for current and previous week
export const expenditureCategoriesThis = generateExpenditureCategories(
  financialDataThisWeek
).categories;
export const expenditureCategoriesPrev = generateExpenditureCategories(
  financialDataPrevWeek
).categories;

export const totalExpensesThisWeek = generateExpenditureCategories(
  financialDataThisWeek
).totalExpenses;
export const totalExpensesPrevWeek = generateExpenditureCategories(
  financialDataPrevWeek
).totalExpenses;

// Default to current week categories
export const expenditureCategories = expenditureCategoriesThis;

// Simplified export for chart usage
export const expenditureData = expenditureCategories.map((cat) => ({
  name: cat.name,
  value: cat.value,
  color: cat.color,
}));

// TRANSACTION HISTORY WITH CATEGORIES
// Merchant keywords mapped to categories and colors
const categoryMap: Record<string, { category: string; color: string }> = {
  amazon: { category: 'Shopping', color: '#14b8a6' },
  starbucks: { category: 'Food', color: '#a78bfa' },
  walmart: { category: 'Shopping', color: '#14b8a6' },
  target: { category: 'Shopping', color: '#14b8a6' },
  paypal: { category: 'Transfers', color: '#938fff' },
  apple: { category: 'Tech', color: '#38bdf8' },
  netflix: { category: 'Entertainment', color: '#fb923c' },
  uber: { category: 'Transport', color: '#f43f5e' },
  mcdonald: { category: 'Food', color: '#a78bfa' },
  shell: { category: 'Transport', color: '#f43f5e' },
};

// Detect category automatically from merchant name
function detectCategory(location: string) {
  const name = location.toLowerCase();

  const entry = Object.entries(categoryMap).find(([key]) => name.includes(key));

  return (
    entry?.[1] ?? {
      category: 'Other',
      color: '#cbd5e1',
    }
  );
}

export interface Transaction {
  location: string;
  date: string;
  time: string;
  balance: string;
  card: string;
  category?: string;
  categoryColor?: string;
}
// Generate random transactions for each day
function generateTransactions(
  financialData: { day: string; Income: number; Expenses: number }[]
): Transaction[] {
  const locations = [
    'Amazon',
    'Starbucks',
    'Walmart',
    'Target',
    'PayPal',
    'Apple Store',
    'Netflix',
    'Uber',
    "McDonald's",
    'Shell Gas Station',
  ];

  const cards = ['Visa •••• 1234', 'Mastercard •••• 5678', 'Bank Transfer'];

  return financialData.flatMap((d) => {
    const count = Math.floor(Math.random() * 3) + 2;

    return Array.from({ length: count }, () => {
      const amount = Math.floor(Math.random() * (d.Expenses / 2)) + 20;
      const positive = Math.random() > 0.7;

      const location = locations[Math.floor(Math.random() * locations.length)];
      const { category, color } = detectCategory(location);

      const timeHour = Math.floor(Math.random() * 12) + 1;
      const timeMinute = Math.floor(Math.random() * 60);
      const ampm = Math.random() > 0.5 ? 'AM' : 'PM';
      const time = `${timeHour}:${timeMinute
        .toString()
        .padStart(2, '0')} ${ampm}`;

      const card = cards[Math.floor(Math.random() * cards.length)];

      return {
        location,
        date: `2025-11-${Math.floor(Math.random() * 30 + 1)
          .toString()
          .padStart(2, '0')}`,
        time,
        balance: `${positive ? '+' : '-'}${amount}`,
        card,
        category,
        categoryColor: color,
      };
    });
  });
}

// Transaction data for current and previous week
export const transactionDataThisWeek = generateTransactions(
  financialDataThisWeek
);
export const transactionDataPrevWeek = generateTransactions(
  financialDataPrevWeek
);

// Default export for transaction data
export const transactionData = transactionDataThisWeek;
