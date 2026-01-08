import { NavLink } from 'react-router-dom';
import { navItems } from './data/sideBarData';

interface Props {
  className?: string;
}

export default function DesktopSidebar({ className }: Props) {
  return (
    <aside
      className={`relative top-0 left-0 gap-16 min-h-screen sm:w-65 md:w-56 2xl:w-65
      bg-slate-800/40 
      flex flex-col items-center pt-6 pr-6 backdrop-blur-md rounded-r-3xl 
      ${className}`}
    >
      {/* Logo */}
      <div className="flex flex-col items-center space-y-4 mt-20">
        <div
          className="w-20 h-20 bg-linear-to-br from-blue-500 to-blue-600 
          rounded-2xl flex items-center justify-center 
          shadow-[0_0_10px_rgba(59,130,246,0.3)] 
          transition-color duration-200 ease-in-out 
          hover:shadow-[0_0_30px_rgba(59,130,246,0.8)] cursor-pointer"
        >
          <svg
            className="w-10 h-10 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <h1
          className="tracking-wide text-2xl font-semibold 
    text-slate-300 transition-color duration-200 ease-in-out hover:text-blue-400 cursor-pointer"
        >
          FinTrack
        </h1>
      </div>

      {/* Navigation */}
      <ul className="flex flex-col w-full gap-4">
        {navItems.map(({ label, icon: Icon, path }) => (
          <li key={label}>
            <NavLink
              to={path}
              className={({ isActive }) =>
                `flex items-center gap-4 text-lg px-4 py-3 rounded-r-lg pl-14 
                transition-all duration-200 ease-in-out 
                hover:shadow-[0_0_30px_rgba(59,130,246,0.6)]
                ${
                  isActive
                    ? 'bg-linear-to-br from-blue-500/10 via-blue-600/5 to-blue-700/10 font-semibold shadow-[0_0_15px_rgba(59,130,246,0.4)] text-slate-200'
                    : 'text-slate-400 hover:bg-linear-to-r hover:from-slate-800 hover:to-slate-900 hover:text-slate-200'
                }`
              }
            >
              <Icon className="w-5 h-5" />
              <span>{label}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
}
