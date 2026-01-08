import {
  Home,
  CreditCard,
  Wallet,
  PieChart,
  User,
  Settings,
  LogOut,
} from 'lucide-react';

export const navItems = [
  { label: 'Home', icon: Home, path: '/', mobile: true },
  { label: 'Payments', icon: CreditCard, path: '/payments', mobile: true },
  { label: 'Accounts', icon: Wallet, path: '/accounts', mobile: true },
  { label: 'Budget', icon: PieChart, path: '/budget', mobile: true },

  // Desktop-only
  { label: 'Profile', icon: User, path: '/profile', mobile: false },
  { label: 'Settings', icon: Settings, path: '/settings', mobile: false },
  { label: 'Log Out', icon: LogOut, path: '/logout', mobile: false },
];
