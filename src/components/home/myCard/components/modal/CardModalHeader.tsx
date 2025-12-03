import { memo, useMemo } from 'react';
import { X, CreditCard } from 'lucide-react';
import type { props } from './CardModal';

function CardModalHeader({ onClose }: props) {
  const icon = useMemo(
    () => <CreditCard className="h-6 w-6 text-blue-400" />,
    []
  );

  const closeIcon = useMemo(() => <X className="h-6 w-6" />, []);

  return (
    // Header container
    <div className="border-b border-slate-800 bg-slate-900/50 px-3 sm:px-6 py-5 flex items-center justify-between">
      {/* Left side: Icon and Title */}
      <div className="flex items-center gap-3">
        {/* Icon container */}
        <div className="bg-blue-500/10 p-2 rounded-xl">{icon}</div>

        {/* Title and subtitle */}
        <div className="text-left">
          <h1 className="sm:text-xl font-semibold text-white">
            Create new card
          </h1>
          <p className="text-sm text-slate-400">Set up your custom card</p>
        </div>
      </div>

      {/* Right side: Close button */}
      <button
        onClick={onClose}
        className="rounded-full p-2 text-slate-400 transition-colors duration-150 ease-out hover:bg-slate-800 hover:text-white cursor-pointer"
      >
        {closeIcon}
      </button>
    </div>
  );
}

export default memo(CardModalHeader);
