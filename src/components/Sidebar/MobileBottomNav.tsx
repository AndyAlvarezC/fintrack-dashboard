import { Home, CreditCard, Wallet, PieChart } from 'lucide-react';

interface Props {
  className?: string;
}

const navItems = [
  { label: 'Home', icon: Home },
  { label: 'Payments', icon: CreditCard },
  { label: 'Accounts', icon: Wallet },
  { label: 'Budget', icon: PieChart },
];

export default function MobileBottomNav({ className }: Props) {
  return (
    <div
      className={`w-[90%] max-w-md fixed bottom-0 inset-x-0 mx-auto flex justify-center items-center m-4 py-3 px-6 bg-black/10 backdrop-blur-lg rounded-4xl border border-white/20 shadow-lg ${className}`}
    >
      <ul className="flex justify-between w-full">
        {navItems.map(({ label, icon: Icon }) => (
          <li key={label} className="flex flex-col items-center truncate">
            <button className="cursor-pointer flex flex-col items-center m-auto text-xs">
              <Icon className="w-5 h-5" />
              {label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
