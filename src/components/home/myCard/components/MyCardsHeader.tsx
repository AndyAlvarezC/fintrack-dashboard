interface Props {
  onOpenModal: () => void;
  totalCards: number;
}

export default function MyCardsHeader({ onOpenModal, totalCards }: Props) {
  return (
    // Cards Section Header
    <div className="flex justify-between items-center">
      {/* h1 & Total Cards Number */}
      <div>
        <h1 className="text-2xl font-bold text-white">My Cards</h1>
        <p className="text-slate-400 text-sm mt-1">
          {totalCards} {totalCards === 1 ? 'tarjeta' : 'cards'}
        </p>
      </div>
      {/* Create New Card & Open Modal */}
      <button
        onClick={onOpenModal}
        className="px-6 py-3 bg-linear-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-xl hover:scale-105 transition-all ease-in duration-200 shadow-lg shadow-blue-500/25 cursor-pointer"
      >
        + New Card
      </button>
    </div>
  );
}
