import { useState, useCallback, memo } from 'react';

import CardModalHeader from './CardModalHeader';
import CardModalBenefits from './CardModalBenefits';
import CardModalForm from './CardModalForm';
import CardPreview from './CardPreview';
import CardModalFooter from './CardModalFooter';

export interface props {
  onClose: () => void;
  onSubmit: (CardData: FormData) => void;
}

export type CardType = 'silver' | 'gold' | 'platinum';

export interface FormData {
  firstName: string;
  lastName: string;
  cardLabel: string;
  cardType: CardType;
  cardNetwork: string;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
}

// Main modal component for creating a card
function CardModal({ onClose, onSubmit }: props) {
  // State to hold all form input values
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    cardLabel: '',
    cardType: 'platinum',
    cardNetwork: 'visa',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  // Update form state on input change
  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    },
    []
  );

  // Generate random 16-digit card number
  function generateCardNumber() {
    const digits = Array.from({ length: 16 }, () =>
      Math.floor(Math.random() * 10)
    ).join('');

    return digits.replace(/(\d{4})(?=\d)/g, '$1 ');
  }

  // Handle form submission
  const handleSubmit = useCallback(() => {
    const cardNumber = generateCardNumber();

    const expiryDate = `${String(new Date().getMonth() + 1).padStart(
      2,
      '0'
    )}/${String(new Date().getFullYear() + 3).slice(-2)}`;

    const cvv = String(Math.floor(100 + Math.random() * 900));

    const newCardData = {
      ...formData,
      cardNumber,
      expiryDate,
      cvv,
    };

    onSubmit(newCardData);
    onClose();
  }, [formData, onSubmit, onClose]);

  // Close modal when clicking on backdrop
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    // Modal container
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-saturate-150 animate-fadeIn"
      onClick={handleBackdropClick}
    >
      {/* Modal content */}
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-linear-to-b from-slate-900 to-slate-950 shadow-2xl animate-scaleIn">
        {/* Header */}
        <CardModalHeader onClose={onClose} onSubmit={onSubmit} />

        {/* Form and Benefits */}
        <div className="grid gap-6 p-6 lg:grid-cols-2 text-left">
          <div className="space-y-4">
            <CardModalForm
              formData={formData}
              handleInputChange={handleInputChange}
            />
            <CardModalBenefits cardType={formData.cardType} />
          </div>

          {/* Card preview */}
          <CardPreview formData={formData} />
        </div>

        {/* Footer with action buttons */}
        <CardModalFooter onClose={onClose} onSubmit={handleSubmit} />
      </div>

      {/* Animations for modal */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes scaleIn {
          from { 
            opacity: 0;
            transform: scale(0.96);
          }
          to { 
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.15s ease-out;
        }
        
        .animate-scaleIn {
          animation: scaleIn 0.15s ease-out;
        }
      `}</style>
    </div>
  );
}

export default memo(CardModal);
