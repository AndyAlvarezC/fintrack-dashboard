import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState, useCallback, memo } from 'react';
import CardModalHeader from './CardModalHeader';
import CardModalBenefits from './CardModalBenefits';
import CardModalForm from './CardModalForm';
import CardPreview from './CardPreview';
import CardModalFooter from './CardModalFooter';

export interface props {
  onClose: () => void;
  onSubmit: (CardData: FormData) => void;
}

// Card Type Types
export type CardType = 'silver' | 'gold' | 'platinum';

// Interface of FormData
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

function CardModal({ onClose, onSubmit }: props) {
  {
    /* State to Control Form Data */
  }
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

  {
    /* Update Form Data on Input Change */
  }
  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    },
    []
  );

  {
    /* Handle Submit: Generate Card Number, Expiry Date & CVV */
  }
  const handleSubmit = useCallback(() => {
    const cardNumber = `**** **** **** ${Math.floor(
      1000 + Math.random() * 9000
    )}`;
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

  return (
    // Modal Container
    <Transition appear show as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        onClose={onClose}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-150"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm" />
        </Transition.Child>

        <div className="relative w-full max-w-4xl">
          <div className="flex min-h-full items-center justify-center text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-150"
              enterFrom="opacity-0 scale-96"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-100"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              {/* Modal Form Container */}
              <Dialog.Panel className="relative w-full max-w-4xl transform overflow-hidden rounded-3xl bg-linear-to-b from-slate-900 to-slate-950 shadow-2xl max-h-[90vh] overflow-y-auto">
                <CardModalHeader onClose={onClose} onSubmit={onSubmit} />

                <div className="grid gap-6 p-6 lg:grid-cols-2 text-left">
                  <div className="space-y-4">
                    <CardModalForm
                      formData={formData}
                      handleInputChange={handleInputChange}
                    />
                    <CardModalBenefits cardType={formData.cardType} />
                  </div>

                  <CardPreview formData={formData} />
                </div>

                <CardModalFooter onClose={onClose} onSubmit={handleSubmit} />
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

export default memo(CardModal);
