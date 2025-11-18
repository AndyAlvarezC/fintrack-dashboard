import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState, useCallback, memo } from 'react';

import CardModalHeader from './CardModalHeader';
import CardModalBenefits from './CardModalBenefits';
import CardModalForm from './CardModalForm';
import CardPreview from './CardPreview';
import CardModalFooter from './CardModalFooter';

export interface props {
  onClose: () => void;
}

export type CardType = 'silver' | 'gold' | 'platinum';

export interface FormData {
  firstName: string;
  lastName: string;
  cardLabel: string;
  cardType: CardType;
  cardNetwork: string;
}

function CardModal({ onClose }: props) {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    cardLabel: '',
    cardType: 'platinum',
    cardNetwork: 'visa',
  });

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    },
    []
  );

  const handleSubmit = useCallback(() => {
    alert('¡Tarjeta creada exitosamente!');
    onClose();
  }, [onClose]);

  return (
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
              <Dialog.Panel className="relative w-full max-w-4xl transform overflow-hidden rounded-3xl bg-linear-to-b from-slate-900 to-slate-950 shadow-2xl max-h-[90vh] overflow-y-auto">
                <CardModalHeader onClose={onClose} />

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
