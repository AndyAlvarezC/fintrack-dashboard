interface Props {
  type: string;
  label?: string;
}

export default function CardHeader({ type, label }: Props) {
  return (
    // Card Header Container
    <div className="flex justify-between items-center">
      {/* Card Label */}
      <p className="text-sm font-medium text-white/80">{label || 'My Card'} </p>

      {/* Card Type */}
      <p className="text-sm font-bold uppercase tracking-wider text-white">
        {type}
      </p>
    </div>
  );
}
