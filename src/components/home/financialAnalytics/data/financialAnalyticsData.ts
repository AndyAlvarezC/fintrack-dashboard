interface WeekData {
  day: string;
  Income: number;
  Expenses: number;
}

interface DataSet {
  this: WeekData[];
  prev: WeekData[];
}

export const DATA: DataSet = {
  this: [
    { day: 'Mo', Income: 3400, Expenses: 1240 },
    { day: 'Tu', Income: 4300, Expenses: 2139 },
    { day: 'We', Income: 2500, Expenses: 3380 },
    { day: 'Th', Income: 1980, Expenses: 3550 },
    { day: 'Fr', Income: 2760, Expenses: 4200 },
    { day: 'Sa', Income: 3330, Expenses: 2990 },
    { day: 'Su', Income: 1100, Expenses: 1760 },
  ],
  prev: [
    { day: 'Mo', Income: 6350, Expenses: 5200 },
    { day: 'Tu', Income: 2420, Expenses: 1180 },
    { day: 'We', Income: 3480, Expenses: 3320 },
    { day: 'Th', Income: 4900, Expenses: 4500 },
    { day: 'Fr', Income: 3700, Expenses: 2300 },
    { day: 'Sa', Income: 7400, Expenses: 6850 },
    { day: 'Su', Income: 5150, Expenses: 1600 },
  ],
};
