import { MdOutlineSettings } from 'react-icons/md';

export default function CardHeader({ type }: { type: string }) {
  return (
    <div className="flex items-start justify-between">
      <h2 className="text-gray-300 font-medium text-sm">{type}</h2>
      <MdOutlineSettings className="text-lg cursor-pointer shrink-0" />
    </div>
  );
}
