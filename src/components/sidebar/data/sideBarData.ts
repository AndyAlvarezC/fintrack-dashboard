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
  { label: 'Home', icon: Home, path: '/' },
  { label: 'Payments', icon: CreditCard, path: '/payments' },
  { label: 'Accounts', icon: Wallet, path: '/accounts' },
  { label: 'Budget', icon: PieChart, path: '/budget' },
  { label: 'Profile', icon: User, path: '/profile' },
  { label: 'Settings', icon: Settings, path: '/settings' },
  { label: 'Log Out', icon: LogOut, path: '/logout' },
];
