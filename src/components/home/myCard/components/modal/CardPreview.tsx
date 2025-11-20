// modal/CardPreview.tsx
import { memo, useMemo } from 'react';
import { RiMastercardLine, RiVisaLine } from 'react-icons/ri';
import type { FormData, CardType } from './CardModal';

interface Props {
  formData: FormData;
}

const cardColors: Record<CardType, string> = {
  silver: 'bg-linear-to-br from-slate-800 via-slate-700 to-slate-900',
  gold: 'bg-linear-to-br from-yellow-600 via-amber-600 to-yellow-700',
  platinum: 'bg-linear-to-br from-slate-900 via-slate-800 to-black',
};

const cardNumbers: Record<CardType, string> = {
  platinum: '4321',
  gold: '8765',
  silver: '5432',
};

function CardPreview({ formData }: Props) {
  // Memoized values for performance
  const cardColorClass = useMemo(
    () => cardColors[formData.cardType],
    [formData.cardType]
  );

  const cardNumber = useMemo(
    () => cardNumbers[formData.cardType],
    [formData.cardType]
  );

  const cardTypeUppercase = useMemo(
    () => formData.cardType.toUpperCase(),
    [formData.cardType]
  );

  return (
    <div className="flex items-center justify-center lg:justify-end relative">
      {/* Card Container with Dynamic Colors */}
      <div
        className={`${cardColorClass} relative w-full aspect-[1.586/1] max-w-[340px] rounded-2xl p-5 sm:p-6 shadow-2xl`}
      >
        {/* Top Left - Card Label */}
        <div className="absolute top-5 sm:top-6 left-5 sm:left-6">
          <p className="text-xs sm:text-sm font-medium text-white">
            {formData.cardLabel || 'My Card'}
          </p>
        </div>

        {/* Top Right - Card Type */}
        <div className="absolute top-5 sm:top-6 right-5 sm:right-6">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white">
            {cardTypeUppercase}
          </p>
        </div>

        {/* Bottom Left - Card Number */}
        <div className="absolute bottom-5 sm:bottom-6 left-5 sm:left-6">
          <p className="text-base sm:text-lg font-bold tracking-wider text-white">
            ···· {cardNumber}
          </p>
        </div>

        {/* Bottom Right - Logo */}
        <div className="absolute bottom-5 sm:bottom-6 right-5 sm:right-6">
          {formData.cardNetwork === 'visa' ? (
            <RiVisaLine className="text-4xl sm:text-5xl text-white" />
          ) : (
            <RiMastercardLine className="text-4xl sm:text-5xl text-white" />
          )}
        </div>
      </div>
    </div>
  );
}

export default memo(CardPreview);
