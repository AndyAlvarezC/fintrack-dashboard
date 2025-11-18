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
  return (
    <div className="flex flex-col gap-1">
      <span className="font-normal text-xs sm:text-sm">{label}</span>
      <span className="font-bold flex items-center gap-2 text-xs sm:text-sm">
        {value} {copyable && <MdContentCopy className="cursor-pointer" />}
      </span>
    </div>
  );
}
