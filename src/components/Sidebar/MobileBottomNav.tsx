import { NavLink } from 'react-router-dom';
import {
  Home,
  CreditCard,
  Wallet,
  PieChart,
} from 'lucide-react';

interface Props {
  className?: string;
}

export default function MobileBottomNav({ className }: Props) {
  const navItems = [
    { label: 'Home', icon: Home, path: '/' },
    { label: 'Payments', icon: CreditCard, path: '/payments' },
    { label: 'Accounts', icon: Wallet, path: '/accounts' },
    { label: 'Budget', icon: PieChart, path: '/budget' },
    //{ label: 'Profile', icon: User, path: '/profile' },
    //{ label: 'Settings', icon: Settings, path: '/settings' },
    //{ label: 'Log Out', icon: LogOut, path: '/logout' },
  ];

  return (
    <nav
      className={`w-[85%] max-w-xs fixed bottom-3 inset-x-0 mx-auto
    bg-linear-to-br from-purple-500/10 via-violet-500/5 to-purple-600/10
    backdrop-blur-2xl
    border border-white/20
    rounded-full
    shadow-[0_8px_32px_0_rgba(139,92,246,0.15),0_0_0_1px_rgba(255,255,255,0.1)_inset]
    ${className}`}
    >
      {/* NAVIGATION  */}
      <ul className="flex justify-around items-center px-2 py-1.5">
        {navItems.map(({ label, icon: Icon, path }) => (
          <li key={label}>
            <NavLink
              to={path}
              className={({ isActive }) =>
                `flex flex-col items-center justify-center px-3 py-1.5 rounded-full transition-all duration-200
            ${
              isActive
                ? 'bg-white/20 backdrop-blur-md text-white shadow-[0_2px_8px_rgba(255,255,255,0.2),0_0_0_1px_rgba(255,255,255,0.3)_inset]'
                : 'text-white/60 hover:text-white/90'
            }`
              }
            >
              <Icon className="w-4 h-4" strokeWidth={2.5} />
              <span className="text-[0.6rem] font-medium mt-0.5">{label}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
