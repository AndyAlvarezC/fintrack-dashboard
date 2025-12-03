// Format values as dollars
export const formatDollar = (value: number) =>
  value >= 1000 ? `$${value / 1000}k` : `$${value}`;
