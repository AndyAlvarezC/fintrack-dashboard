import { NavLink } from 'react-router-dom';

import { navItems } from './data/sideBarData';

interface Props {
  className?: string;
}

export default function DesktopSidebar({ className }: Props) {


  return (
    <aside
      className={`relative top-0 left-0 gap-8 min-h-screen w-65 bg-(--bg-secondary) flex flex-col items-center pt-6 pr-6 backdrop-blur-md rounded-r-3xl ${className}`}
    >
      {/* Logo */}
      <NavLink
        to="/"
        className="my-10 flex flex-col items-center gap-2 text-xl font-semibold text-(--text-primary) hover:text-(--color-primary) transition-colors"
      >
        <img
          src="/logo.jpeg"
          alt="Logo"
          className="w-20 h-20 object-contain rounded-xl shadow-[0_0_10px_rgba(167,127,255,0.3)] transition-all duration-200 ease-in-out hover:shadow-[0_0_30px_rgba(167,127,255,0.8)]"
        />
        <span className="tracking-wide">FinTrack</span>
      </NavLink>

      {/* Navigation */}
      <ul className="flex flex-col w-full gap-4">
        {navItems.map(({ label, icon: Icon, path }) => (
          <li key={label}>
            <NavLink
              to={path}
              className={({ isActive }) =>
                `flex items-center gap-4 text-lg px-4 py-3 rounded-r-lg pl-14 transition-all duration-200 ease-in-out  hover:shadow-[0_0_30px_rgba(167,127,255,0.8)]
                ${
                  isActive
                    ? 'bg-linear-to-br from-purple-500/10 via-violet-500/5 to-purple-600/10 font-semibold shadow-[0_0_15px_rgba(167,127,255,0.4)]'
                    : 'text-(--text-secondary) hover:bg-linear-to-r hover:from-[#1F1C26] hover:to-[#2E2939]'
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
