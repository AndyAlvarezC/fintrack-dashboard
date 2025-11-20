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

      <div className="relative inline-block">
        <span
          className={`font-bold flex items-center gap-2 text-xs sm:text-sm ${
            copyable ? 'cursor-pointer' : ''
          }`}
          onClick={handleCopy}
        >
          {value} {copyable && <MdContentCopy />}
        </span>

        {/* Show alert when value is copied */}
        {copied && (
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-green-500 text-white px-3 py-1 rounded-lg shadow-lg text-xs whitespace-nowrap text-center">
            Copied to clipboard!
          </div>
        )}
      </div>
    </div>
  );
}
