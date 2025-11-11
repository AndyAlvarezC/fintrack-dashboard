import { Search } from 'lucide-react';

export default function HeaderSearchInput() {
  return (
    <div className="relative flex-1 md:flex-none cursor-text">
      <input
        placeholder="Search"
        className="
          w-full pl-3 pr-10 py-2 rounded-lg font-semibold
          bg-linear-to-br from-purple-500/10 via-violet-500/5 to-purple-600/10
          shadow-[0_0_15px_rgba(167,127,255,0.4)]
          focus:outline-none focus:ring-0 focus:shadow-[0_0_30px_rgba(167,127,255,0.8)] focus:bg-purple-500/20
          transition-all duration-200 ease-in-out
          hover:shadow-[0_0_30px_rgba(167,127,255,0.8)] hover:bg-purple-500/20
        "
      />
      <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-300 pointer-events-none" />
    </div>
  );
}
