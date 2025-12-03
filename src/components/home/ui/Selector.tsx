import { useState, useRef, useEffect } from 'react';

interface Option {
  value: 'this' | 'prev';
  label: string;
}

// Props for the Selector component
interface SelectorProps {
  option: 'this' | 'prev';
  setOption: React.Dispatch<React.SetStateAction<'this' | 'prev'>>;
  options: Option[];
}

// Selector component
export default function Selector({
  option,
  setOption,
  options,
}: SelectorProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Close dropdown if clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const selected = options?.find((opt) => opt.value === option);

  // Handle selecting an option
  const handleSelect = (val: 'this' | 'prev') => {
    setOption(val);
    setOpen(false);
  };

  return (
    <div ref={ref} className="relative">
      {/* Button that toggles dropdown */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="text-sm sm:text-normal rounded-xl p-1.5 sm:px-4 sm:py-2 gap-1 text-slate-300 bg-linear-to-br from-slate-800 via-slate-700 to-slate-800 text-left font-semibold flex justify-between items-center cursor-pointer transition-all duration-200 hover:bg-slate-800/80 focus:outline-none"
      >
        {selected?.label ?? 'Seleccionar'}
        <svg
          className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
            open ? 'rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
        </svg>
      </button>

      {/* Dropdown menu */}
      {open && options && (
        <div className="absolute left-0 right-0 mt-1 p-1 rounded-lg bg-slate-900 border border-slate-700 shadow-lg overflow-hidden z-50 animate-fadeSlide">
          {options.map((opt) => (
            <button
              key={opt.value}
              onClick={() => handleSelect(opt.value)}
              className="w-full text-center px-4 py-2 text-sm text-slate-200 hover:bg-slate-700/50 transition-colors duration-150 cursor-pointer hover:rounded-xl"
            >
              {opt.label}
            </button>
          ))}
        </div>
      )}

      {/* Animation for dropdown */}
      <style>{`
        @keyframes fadeSlide {
          0% { opacity: 0; transform: translateY(-6px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeSlide {
          animation: fadeSlide 0.2s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
