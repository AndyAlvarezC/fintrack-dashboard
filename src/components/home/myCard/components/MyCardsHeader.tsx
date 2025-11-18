import { useState } from 'react';
import { GoPlus } from 'react-icons/go';
import CardModal from './modal/CardModal';

export default function MyCardsHeader() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => setIsOpen((prev) => !prev);
  return (
    <>
      {/* Header */}
      <div className="flex items-center justify-between w-full">
        <h2 className="text-md md:text-lg font-semibold">My Cards</h2>
        <div
          onClick={handleOpenModal}
          className="flex flex-row items-center gap-2"
        >
          <h3 className="font-semibold text-sm">Add New</h3>
          <GoPlus className="text-2xl cursor-pointer" />
        </div>
      </div>
      {/* Modal */}
      {isOpen && <CardModal onClose={handleOpenModal} />}
    </>
  );
}
