interface Props {
  type: string;
  label?: string;
}

export default function CardHeader({ type, label }: Props) {
  return (
    // Card Header: Label & Type
    <div className="flex justify-between items-center">
      <p className="text-sm font-medium text-white/80">{label}</p>
      <p className="text-sm font-bold uppercase tracking-wider text-white">
        {type}
      </p>
    </div>
  );
}
