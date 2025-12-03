import { useState } from 'react';
import { MdContentCopy } from 'react-icons/md';

export default function CardField({
  label,
  value,
  copyable,
}: {
  label: string;
  value: string;
  copyable?: boolean;
}) {
  const [copied, setCopied] = useState(false);

  // Copy to clipboard when copyable
  const handleCopy = async () => {
    if (!copyable) return;
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 750);
    } catch {
      console.error('Failed to copy!');
    }
  };

  return (
    <div className="flex flex-col gap-1">
      <span className="font-normal text-xs sm:text-sm">{label}</span>

      <div className="relative inline-flex">
        <span
          className={`font-bold inline-flex items-center gap-2 text-xs sm:text-sm ${
            copyable ? 'cursor-pointer hover:opacity-80 transition-opacity ease-in-out duration-200' : ''
          }`}
          onClick={handleCopy}
        >
          {value}{' '}
          {copyable && <MdContentCopy className="text-sm sm:text-base" />}
        </span>

        {/* Show alert when value is copied */}
        {copied && (
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-green-500 text-white px-3 py-1 rounded-lg shadow-lg text-xs whitespace-nowrap z-10 animate-fade-in">
            Copied!
          </div>
        )}
      </div>
    </div>
  );
}
