import ComponentsHeader from '../../ui/ComponentsHeader';

interface Props {
  onOpenModal: () => void;
  totalCards: number;
}

export default function MyCardsHeader({ onOpenModal, totalCards }: Props) {
  return (
    // Cards Section Header
    <div className="flex justify-between items-center">
      {/* Left side: Title and total cards */}
      <div>
        <ComponentsHeader name="My Cards" />
        <p className="text-slate-400 text-sm mt-1">
          {totalCards} {totalCards === 1 ? 'tarjeta' : 'cards'}
        </p>
      </div>

      {/* Right side: Button to create a new card and open modal */}
      <button
        onClick={onOpenModal}
        className="px-3 md:px-4 lg:px-6 py-2 sm:py-3 bg-linear-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-xl hover:scale-105 transition-all ease-in duration-200 shadow-lg shadow-blue-500/25 cursor-pointer"
      >
        + New Card
      </button>
    </div>
  );
}
