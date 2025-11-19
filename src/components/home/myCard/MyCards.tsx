import { useState } from 'react';
import { useCards } from './hooks/useCards';

import Card from './components/Card';
import MyCardsHeader from './components/MyCardsHeader';
import MyCardsPagination from './components/MyCardsPagination';
import CardModal from './components/modal/CardModal';

import type { FormData } from './components/modal/CardModal';

export default function MyCards() {
  {
    /* Modal: Open | Close */
  }
  const [isModalOpen, setIsModalOpen] = useState(false);
  {
    /* Card Actions */
  }
  const { cards, addCard, deleteCard } = useCards();

  {
    /* Handle Submit */
  }
  const handleCreateCard = (cardData: FormData) => {
    addCard(cardData);
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col w-full h-full gap-4">
      {/* Card Header */}
      <MyCardsHeader
        onOpenModal={() => setIsModalOpen(true)}
        totalCards={cards.length}
      />

      {/* Cards */}
      <Card cards={cards} onDelete={deleteCard} />

      {/* Cards Pagination */}
      {cards.length > 0 && <MyCardsPagination />}

      {/* Create New Card Modal */}
      {isModalOpen && (
        <CardModal
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleCreateCard}
        />
      )}
    </div>
  );
}
