export default function WeekSelector() {
  return (
    <div className="inline-block rounded-lg bg-linear-to-br from-purple-500/10 via-violet-500/5 to-purple-600/10 shadow-[0_0_15px_rgba(167,127,255,0.4)] backdrop-blur-sm">
      <select
        className="bg-transparent text-sm px-3 py-1 font-semibold rounded-lg appearance-none cursor-pointer transition-all duration-200 ease-in-out hover:shadow-[0_0_30px_rgba(167,127,255,0.8)] hover:bg-purple-500/20"
      >
        <option value="this">This Week</option>
        <option value="prev">Last Week</option>
      </select>
    </div>
  );
}
