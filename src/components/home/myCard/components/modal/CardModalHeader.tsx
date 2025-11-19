import { X, CreditCard } from 'lucide-react';

import type { props } from './CardModal';

export default function CardModalHeader({ onClose }: props) {
  return (
    // Modal Header
    <div className="border-b border-slate-800 bg-slate-900/50 px-3 sm:px-6 py-5 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="bg-blue-500/10 p-2 rounded-xl">
          {/* Icon */}
          <CreditCard className="h-6 w-6 text-blue-400" />
        </div>
        <div className="text-left">
          {/* Title */}
          <h1 className="sm:text-xl font-semibold text-white">
            Create new card
          </h1>
          {/* Secondary Text */}
          <p className="text-sm text-slate-400">Set up your custom card</p>
        </div>
      </div>
      <div className="flex">
        {/* Modal Close Button */}
        <button
          onClick={onClose}
          className="rounded-full p-2 text-slate-400 transition-colors ease-in duration-200 hover:bg-slate-800 hover:text-white cursor-pointer"
        >
          <X className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
}
