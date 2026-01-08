import { NavLink } from 'react-router-dom';

import { navItems } from './data/sideBarData';

interface Props {
  className?: string;
}

export default function MobileBottomNav({ className }: Props) {
  return (
    <nav
      className={`w-[85%] max-w-xs fixed bottom-3 inset-x-0 mx-auto
  bg-linear-to-br from-blue-500/10 via-blue-600/5 to-blue-700/10
  backdrop-blur-2xl
  border border-slate-700/50
  rounded-full z-100
  shadow-[0_8px_32px_0_rgba(59,130,246,0.15),0_0_0_1px_rgba(255,255,255,0.05)_inset]
  ${className}`}
    >
      {/* Navigation  */}
      <ul className="flex justify-around items-center px-2 py-1.5">
        {navItems
          .filter((item) => item.mobile)
          .map(({ label, icon: Icon, path }) => (
            <li key={label}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `flex flex-col items-center justify-center px-3 py-1.5 rounded-full transition-all duration-200
          ${
            isActive
              ? 'bg-blue-500/20 backdrop-blur-md text-white shadow-[0_2px_12px_rgba(59,130,246,0.4),0_0_0_1px_rgba(59,130,246,0.4)_inset]'
              : 'text-slate-400 hover:text-slate-200'
          }`
                }
              >
                <Icon className="w-4 h-4" strokeWidth={2.5} />
                <span className="text-[0.6rem] font-semibold mt-0.5">
                  {label}
                </span>
              </NavLink>
            </li>
          ))}
      </ul>
    </nav>
  );
}
