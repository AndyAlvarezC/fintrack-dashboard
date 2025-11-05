import { Home, CreditCard, Wallet, PieChart } from 'lucide-react';

interface Props {
  className?: string;
}

export default function MobileBottomNav({ className }: Props) {
  return (
    <div
      className={`w-[90%] max-w-md fixed bottom-0 inset-x-0 mx-auto flex justify-center items-center m-4 p-3 bg-black/10 backdrop-blur-lg rounded-xl border border-white/20 shadow-lg ${className}`}
    >
      <ul className="flex justify-between w-full">
        <li className="flex flex-col items-center truncate">
          <button className="cursor-pointer flex flex-col items-center m-auto text-xs">
            <Home className="w-5 h-5 text-white" />
            Home
          </button>
        </li>
        <li className="flex flex-col items-center truncate">
          <button className="cursor-pointer flex flex-col items-center text-xs">
            <CreditCard className="w-5 h-5 text-white" />
            Payments
          </button>
        </li>
        <li className="flex flex-col items-center truncate">
          <button className="cursor-pointer flex flex-col items-center text-xs">
            <Wallet className="w-5 h-5 text-white" />
            Accounts
          </button>
        </li>
        <li className="flex flex-col items-center truncate">
          <button className="cursor-pointer flex flex-col items-center text-xs">
            <PieChart className="w-5 h-5 text-white" />
            Budget
          </button>
        </li>
      </ul>
    </div>
  );
}
