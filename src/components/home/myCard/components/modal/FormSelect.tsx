import { memo } from 'react';

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

function FormSelect({ label, name, value, onChange, options }: Props) {
  return (
    // Modal Form Select Options
    <div>
      <label className="text-sm font-medium text-slate-300">{label}</label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="w-full rounded-xl border border-slate-700 bg-slate-800/50 px-4 py-3 text-white 
          placeholder-slate-500 transition-colors ease-in duration-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 mt-1 cursor-pointer"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default memo(FormSelect);
