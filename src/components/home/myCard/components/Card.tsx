import { RiVisaLine } from 'react-icons/ri';

import { myCardData } from '../data/myCardsData';

import CardField from '../helpers/CardField';
import CardHeader from '../helpers/CardHeader';

export default function Card() {
  return (
    <div className="flex flex-col w-full gap-4 flex-1 max-w-[350px] m-auto">
      {myCardData.map((card, index) => (
        <div
          key={index}
          className="flex flex-col p-3 w-full h-auto bg-linear-to-r from-indigo-600 via-indigo-700 to-indigo-800 rounded-2xl min-w-0"
        >
          <CardHeader type={card.type} />

          {/* Card Number */}
          <div className="flex flex-col mt-12 gap-2 font-semibold">
            <CardField label="Card Number" value={card.number} copyable />
          </div>

          {/* Expiry, CVV & VISA Logo */}
          <div className='flex justify-between'>
          <div className="flex items-center font-semibold mt-2 text-sm sm:text-base gap-6 sm:gap-4">
            <CardField label="Expiry Date" value={card.date} />
            <CardField label="CVV" value={String(card.cvc)} copyable />
          </div>
          <div className='flex justify-end'>
            <RiVisaLine className="text-5xl" />
          </div>
          </div>
        </div>
      ))}
    </div>
  );
}
