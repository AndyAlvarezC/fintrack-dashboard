import { RiVisaLine, RiMastercardLine } from 'react-icons/ri';
import type { CardType as CardTypeEnum } from './modal/CardModal';
import CardField from './CardField';
import CardHeader from './CardHeader';

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

// Background gradients
const cardColors: Record<CardTypeEnum, string> = {
  silver: 'bg-linear-to-br from-slate-800 via-slate-700 to-slate-900',
  gold: 'bg-linear-to-br from-yellow-600 via-amber-600 to-yellow-700',
  platinum: 'bg-linear-to-br from-slate-900 via-slate-800 to-black',
};

export default function Card({ cards }: CardProps) {
  // Empty State: Display message when no cards are available
  if (cards.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center w-full h-[215px] sm:h-[250px] text-center">
        <p className="text-slate-400 text-lg">You don't have any cards yet</p>
        <p className="text-slate-500 text-sm mt-2">Create your first card</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full gap-4 h-[215px] sm:h-[225px] max-w-[350px] m-auto">
      {/* Map through each card */}
      {cards.map((card, index) => (
        <div
          key={index}
          className={`relative w-full rounded-2xl p-5 shadow-2xl transition-all ease-in-out duration-400 ${
            cardColors[card.cardType]
          }`}
        >
          {/* Card Header: Shows card type and label */}
          <CardHeader type={card.cardType} label={card.cardLabel} />

          {/* Card Number */}
          <div className="flex flex-col mt-8 sm:mt-14 xl:mt-8 2xl:mt-14 gap-2 font-semibold">
            <CardField label="Card Number" value={card.cardNumber} copyable />
          </div>

          {/* Bottom Row: Expiry Date, CVV, and Network Logo */}
          <div className="flex justify-between mt-auto">
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
