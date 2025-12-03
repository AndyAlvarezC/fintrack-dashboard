import { memo } from 'react';

interface Props {
  onClose: () => void;
  onSubmit: () => void;
}

// Footer component for modal with action buttons
function CardModalFooter({ onClose, onSubmit }: Props) {
  return (
    // Container for footer buttons
    <div className="sm:px-6 pb-6 flex items-center justify-center sm:justify-end gap-3 border-t border-slate-800 pt-6">
      {/* Cancel button to close modal */}
      <button
        type="button"
        onClick={onClose}
        className="rounded-xl px-4 sm:px-6 py-2.5 font-medium text-slate-400 transition-colors ease-in duration-200 hover:bg-slate-800 hover:text-white cursor-pointer"
      >
        Cancel
      </button>

      {/* Create card button */}
      <button
        type="button"
        onClick={onSubmit}
        className="rounded-xl bg-linear-to-r from-blue-500 to-blue-600 px-4 sm:px-6 py-2.5 font-semibold text-white shadow-lg shadow-blue-500/25 transition-transform ease-in duration-200 hover:shadow-blue-500/40 hover:scale-105 cursor-pointer"
      >
        Ceate Card
      </button>
    </div>
  );
}

export default memo(CardModalFooter);
