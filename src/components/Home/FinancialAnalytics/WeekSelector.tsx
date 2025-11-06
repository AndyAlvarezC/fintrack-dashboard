interface WeekSelectorProps {
  week: 'this' | 'prev';
  setWeek: (week: 'this' | 'prev') => void;
}

export default function WeekSelector({ week, setWeek }: WeekSelectorProps) {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    // Aseguramos que el valor siempre sea 'this' | 'prev'
    setWeek(e.target.value as 'this' | 'prev');
  };

  return (
    <div className="inline-block rounded-lg bg-linear-to-br from-purple-500/10 via-violet-500/5 to-purple-600/10 shadow-[0_0_15px_rgba(167,127,255,0.4)] backdrop-blur-sm">
      <select
        value={week}
        onChange={handleChange}
        className="bg-transparent px-3 py-1 font-semibold text-white rounded-lg appearance-none cursor-pointer"
      >
        <option value="this">This Week</option>
        <option value="prev">Last Week</option>
      </select>
    </div>
  );
}
