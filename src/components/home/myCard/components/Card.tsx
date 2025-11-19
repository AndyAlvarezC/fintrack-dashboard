import { RiVisaLine, RiMastercardLine } from 'react-icons/ri';

import type { CardType as CardTypeEnum } from './modal/CardModal';
import CardField from '../helpers/CardField';
import CardHeader from '../helpers/CardHeader';

interface CardProps {
  cards: {
    firstName: string;
    lastName: string;
    cardLabel: string;
    cardType: CardTypeEnum;
    cardNetwork: string;
    cardNumber: string;
    expiryDate: string;
    cvv: string;
  }[];
  onDelete: (id: string) => void;
}

const cardColors: Record<CardTypeEnum, string> = {
  silver: 'bg-linear-to-br from-slate-800 via-slate-700 to-slate-900',
  gold: 'bg-linear-to-br from-yellow-600 via-amber-600 to-yellow-700',
  platinum: 'bg-linear-to-br from-slate-900 via-slate-800 to-black',
};

export default function Card({ cards }: CardProps) {
  {/* No Cards: Empty State*/}
  if (cards.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center w-full h-full text-center">
        <p className="text-slate-400 text-lg">You don't have any cards yet</p>
        <p className="text-slate-500 text-sm mt-2">Create your first card</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full gap-4 flex-1 max-w-[350px] m-auto">
      {/* Map Cards */}
      {cards.map((card, index) => (
        <div
          key={index}
          className={`relative w-full aspect-[1.586/1] max-w-[340px] rounded-2xl p-5 sm:p-6 shadow-2xl transition-all duration-200 hover:scale-105 cursor-pointer group ${
            cardColors[card.cardType]
          }`}
        >
          {/* Card Header */}
          <CardHeader type={card.cardType} label={card.cardLabel} />

          {/* Card Number */}
          <div className="flex flex-col mt-12 gap-2 font-semibold">
            <CardField label="Card Number" value={card.cardNumber} copyable />
          </div>

          {/* Expiry Date, CVV & Network Logo */}
          <div className="flex justify-between">
            {/* Expiry Date & CVV */}
            <div className="flex items-center font-semibold mt-2 text-sm sm:text-base gap-6 sm:gap-4">
              <CardField label="Expiry Date" value={card.expiryDate} />
              <CardField label="CVV" value={card.cvv} copyable />
            </div>
            {/* Network Logo */}
            <div className="flex justify-end">
              {card.cardNetwork === 'visa' ? (
                <RiVisaLine className="text-5xl text-white" />
              ) : (
                <RiMastercardLine className="text-5xl text-white" />
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
