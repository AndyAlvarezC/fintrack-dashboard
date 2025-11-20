import { memo, useMemo } from 'react';
import { Sparkles } from 'lucide-react';
import type { CardType } from './CardModal';

interface Props {
  cardType: CardType;
}

// Dynamic Text Depending on Card Type
const benefits = {
  platinum: [
    '• 5% cashback on all your purchases',
    '• Access to airport VIP lounges',
    '• Travel insurance included',
  ],
  gold: [
    '• 3% cashback on all your purchases',
    '• No international fees',
    '• Premium rewards program',
  ],
  silver: [
    '• 1% cashback on purchases',
    '• No annual fee for the first year',
    '• Mobile app with notifications',
  ],
};

function CardModalBenefits({ cardType }: Props) {
  // Memorized for Performance
  const cardTypeCapitalized = useMemo(
    () => cardType.charAt(0).toUpperCase() + cardType.slice(1),
    [cardType]
  );

  const currentBenefits = useMemo(() => benefits[cardType], [cardType]);

  return (
    // Benefits Container
    <div className="rounded-xl bg-blue-500/5 p-4 border border-blue-500/20 text-left">
      <div className="flex items-start gap-3">
        {/* Benefits Icon */}
        <Sparkles className="h-5 w-5 text-blue-400 mt-0.5 shrink-0" />
        {/* Benefits: Title & Benefits */}
        <div>
          <h1 className="text-sm font-medium text-blue-400">
            {cardTypeCapitalized} Benefits
          </h1>
          <ul className="mt-2 space-y-1 text-xs text-slate-400">
            {currentBenefits.map((benefit, _) => (
              <li key={benefit}>{benefit}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default memo(CardModalBenefits);
