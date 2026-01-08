import ComponentsHeader from '../../ui/ComponentsHeader';
import { Trash2 } from 'lucide-react';

interface Props {
  onOpenModal: () => void;
  onDeleteCard?: () => void;
  totalCards: number;
}

export default function MyCardsHeader({
  onOpenModal,
  onDeleteCard,
  totalCards,
}: Props) {
  return (
    <div className="flex justify-between items-center">
      {/* Left side: Title and total cards */}
      <div>
        <ComponentsHeader name="My Cards" />
        <p className="text-slate-400 text-sm mt-1">
          {totalCards} {totalCards === 1 ? 'tarjeta' : 'cards'}
        </p>
      </div>

      {/* Right side: Buttons */}
      <div className="flex gap-2 2xl:gap-4 items-center">
        {/* Delete Card with Trash Icon */}
        {onDeleteCard && totalCards > 0 && (
          <button
            onClick={onDeleteCard}
            className="p-2 bg-red-500/10 text-red-500 hover:bg-red-500/20 rounded-xl transition-all duration-200 shadow-md shadow-red-500/25 cursor-pointer"
            aria-label="Delete card"
          >
            <Trash2 size={20} />
          </button>
        )}
        {/* New Card */}
        <button
          onClick={onOpenModal}
          className="w-full px-3 md:px-4 lg:px-6 xl:px-2 2xl:px-6 py-2 sm:py-3 xl:py-1 2xl:py-3 bg-linear-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-xl hover:scale-105 transition-all ease-in duration-200 shadow-lg shadow-blue-500/25 cursor-pointer"
        >
          + New Card
        </button>
      </div>
    </div>
  );
}
