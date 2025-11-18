import { GoPlus } from 'react-icons/go';

export default function MyCardsHeader() {
  return (
    <>
      {/* Header */}
      <div className="flex items-center justify-between w-full">
        <h2 className="text-md md:text-lg font-semibold">My Cards</h2>
        <div className="flex flex-row items-center gap-2">
          <h3 className="font-semibold text-sm">Add New</h3>
          <GoPlus className="text-2xl cursor-pointer" />
        </div>
      </div>
    </>
  );
}
