import { useState, useEffect } from 'react';
import { useCards } from './hooks/useCards';

import Card from './components/Card';
import MyCardsHeader from './components/MyCardsHeader';
import MyCardsPagination from './components/MyCardsPagination';
import CardModal from './components/modal/CardModal';

import type { FormData } from './components/modal/CardModal';

export default function MyCards() {
  /* Modal state: Open | Close */
  const [isModalOpen, setIsModalOpen] = useState(false);

  /* Pagination state */
  const [currentPage, setCurrentPage] = useState(0);

  /* Transition state for slide effect */
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState<'left' | 'right'>('right');

  /* Card Actions from custom hook */
  const { cards, addCard, deleteCard } = useCards();

  const totalPages = Math.max(1, cards.length);
  const currentCard = cards[currentPage] ? [cards[currentPage]] : [];

  /* Handle creating a new card */
  const handleCreateCard = (cardData: FormData) => {
    addCard(cardData);
    setIsModalOpen(false);
    setDirection('right');
    setCurrentPage(cards.length);
  };

  /* Handle deleting a card */
  const handleDeleteCard = (id: string) => {
    deleteCard(id);
    if (currentPage > 0 && currentPage >= cards.length - 1) {
      setDirection('left');
      setCurrentPage(currentPage - 1);
    }
  };

  /* Handle changing pages */
  const handlePageChange = (page: number) => {
    if (page !== currentPage) {
      setDirection(page > currentPage ? 'right' : 'left');
      setIsTransitioning(true);

      setTimeout(() => {
        setCurrentPage(page);
        setIsTransitioning(false);
      }, 200);
    }
  };

  /* Trigger slide transition on page change */
  useEffect(() => {
    setIsTransitioning(true);
    const timer = setTimeout(() => setIsTransitioning(false), 300);
    return () => clearTimeout(timer);
  }, [currentPage]);

  return (
    <div className="flex flex-col w-full h-full gap-4">
      {/* Header: Title and Create New Card button */}
      <MyCardsHeader
        onOpenModal={() => setIsModalOpen(true)}
        totalCards={cards.length}
        onDeleteCard={() =>
          currentCard[0] && handleDeleteCard(currentCard[0].id)
        }
      />

      {/* Card Container: shows one card at a time with transition */}
      <div className="flex-1 relative overflow-hidden">
        <div
          className={`transition-all duration-300 ease-in-out ${
            isTransitioning
              ? direction === 'right'
                ? 'opacity-0 translate-x-8'
                : 'opacity-0 -translate-x-8'
              : 'opacity-100 translate-x-0'
          }`}
        >
          <Card cards={currentCard} onDelete={handleDeleteCard} />
        </div>
      </div>

      {/* Pagination */}
      {cards.length > 1 && (
        <MyCardsPagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}

      {/* Modal: Create New Card */}
      {isModalOpen && (
        <CardModal
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleCreateCard}
        />
      )}
    </div>
  );
}
