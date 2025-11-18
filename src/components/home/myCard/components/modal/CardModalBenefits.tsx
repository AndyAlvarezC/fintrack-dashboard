import { memo, useMemo } from 'react';
import { Sparkles } from 'lucide-react';
import type { CardType } from './CardModal';

interface Props {
  cardType: CardType;
}

const benefits = {
  platinum: [
    '• Cashback 5% en todas tus compras',
    '• Acceso a salas VIP en aeropuertos',
    '• Seguro de viaje incluido',
  ],
  gold: [
    '• Cashback 3% en todas tus compras',
    '• Sin comisiones internacionales',
    '• Programa de puntos premium',
  ],
  silver: [
    '• Cashback 1% en compras',
    '• Sin anualidad primer año',
    '• App móvil con notificaciones',
  ],
};

function CardModalBenefits({ cardType }: Props) {
  const cardTypeCapitalized = useMemo(
    () => cardType.charAt(0).toUpperCase() + cardType.slice(1),
    [cardType]
  );

  const currentBenefits = useMemo(() => benefits[cardType], [cardType]);

  return (
    <div className="rounded-xl bg-blue-500/5 p-4 border border-blue-500/20 text-left">
      <div className="flex items-start gap-3">
        <Sparkles className="h-5 w-5 text-blue-400 mt-0.5 shrink-0" />
        <div>
          <h1 className="text-sm font-medium text-blue-400">
            Beneficios {cardTypeCapitalized}
          </h1>
          <ul className="mt-2 space-y-1 text-xs text-slate-400">
            {currentBenefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default memo(CardModalBenefits);
