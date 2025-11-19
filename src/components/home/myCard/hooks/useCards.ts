import { useState, useEffect } from 'react';

import type { FormData } from '../components/modal/CardModal';

export interface Card extends FormData {
  id: string;
  createdAt: string;
}

export function useCards() {
  const [cards, setCards] = useState<Card[]>([]);

  {
    /* Get Card Form Local Storage on First Render */
  }
  useEffect(() => {
    const savedCards = localStorage.getItem('cards');
    if (savedCards) {
      setCards(JSON.parse(savedCards));
    }
  }, []);

  {
    /* Persist Cards to Local Storage Whenever They Are Updated */
  }
  useEffect(() => {
    localStorage.setItem('cards', JSON.stringify(cards));
  }, [cards]);

  {
    /* Create New Card With Unique ID & Created Date */
  }
  const addCard = (cardData: FormData) => {
    const newCard: Card = {
      ...cardData,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
    };
    setCards((prev) => [...prev, newCard]);
  };

  {
    /* Delete a Card Filtering its ID */
  }
  const deleteCard = (id: string) => {
    setCards((prev) => prev.filter((card) => card.id !== id));
  };

  {
    /* Expose Card List & Handlers */
  }
  return { cards, addCard, deleteCard };
}
