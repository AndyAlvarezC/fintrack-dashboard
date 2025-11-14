import { Bell } from 'lucide-react';
import { useState } from 'react';

export default function HeaderNotification() {
  const [isOpen, setIsOpen] = useState(false);

  const handleIsOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="relative inline-block z-10">
      <button
        onClick={handleIsOpen}
        className={`bg-linear-to-br from-purple-500/10 via-violet-500/5 to-purple-600/10 font-semibold
      shadow-[0_0_15px_rgba(167,127,255,0.4)] p-2 rounded-lg cursor-pointer
      transition-all duration-200 ease-in-out hover:shadow-[0_0_30px_rgba(167,127,255,0.8)] hover:bg-purple-500/20 ${
        isOpen ? 'shadow-[0_0_30px_rgba(167,127,255,0.8)] bg-purple-500/20' : ''
      }`}
      >
        <Bell />
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 bg-indigo-950 font-semibold shadow-[0_0_15px_rgba(167,127,255,0.4)] rounded-lg p-2">
          <div className="flex justify-center">
            <h1>Notifications</h1>
          </div>
          <h1 className="bg-indigo-900 px-4 py-2 rounded-lg mt-2">Esta abierto</h1>
          <h1 className="bg-indigo-900 px-4 py-2 rounded-lg mt-2">Notificacion de nómina</h1>
        </div>
      )}
    </div>
  );
}
