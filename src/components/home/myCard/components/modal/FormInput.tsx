import { memo } from 'react';

interface Props {
  label: string;
  name: string;
  value: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function FormInput({ label, name, value, placeholder, onChange }: Props) {
  return (
    // Container for label and input
    <div>
      {/* Input Label */}
      <label className="text-sm font-medium text-slate-300">{label}</label>

      {/* Text Input Field */}
      <input
        name={name}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
        className="w-full rounded-xl border border-slate-700 bg-slate-800/50 px-4 py-3 text-white 
          placeholder-slate-500 transition-colors ease-in duration-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 mt-1"
      />
    </div>
  );
}

export default memo(FormInput);
