import { memo, useState, useRef, useEffect } from 'react';

interface Option {
  value: string;
  label: string;
}

interface Props {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: Option[];
}

// Custom Select component
function FormSelect({ label, name, value, onChange, options }: Props) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Close dropdown
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const selected = options.find((opt) => opt.value === value);

  // Handle selection
  const handleSelect = (val: string) => {
    const event = {
      target: { name, value: val },
    } as unknown as React.ChangeEvent<HTMLSelectElement>;

    onChange(event);
    setOpen(false);
  };

  return (
    <div ref={ref} className="relative w-full">
      {/* Label */}
      <label className="text-sm font-medium text-slate-300">{label}</label>

      {/* Visible input-like button */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="
          w-full mt-1 
          rounded-xl border border-slate-700 
          bg-slate-800/50 
          px-4 py-3 
          text-left text-white
          text-sm
          transition-all duration-200 
          focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20
          cursor-pointer
        "
      >
        <div className="flex justify-between items-center">
          {selected?.label ?? 'Seleccionar'}

          {/* Dropdown arrow */}
          <svg
            className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
              open ? 'rotate-180' : 'rotate-0'
            }`}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 9l6 6 6-6"
            />
          </svg>
        </div>
      </button>

      {/* Dropdown menu */}
      {open && (
        <div
          className="
            absolute left-0 right-0 mt-2 p-2
            rounded-xl border border-slate-700 
            bg-slate-900 shadow-xl
            overflow-hidden 
            animate-fadeSlide
            z-50
          "
        >
          {options.map((option) => (
            <button
              key={option.value}
              onClick={() => handleSelect(option.value)}
              className="
                w-full text-left px-4 py-3 
                text-sm text-slate-200 
                hover:bg-slate-700/50 hover:rounded-xl
                transition-colors duration-150 cursor-pointer
              "
            >
              {option.label}
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
          animation: fadeSlide 0.18s ease-out forwards;
        }
      `}</style>
    </div>
  );
}

export default memo(FormSelect);
