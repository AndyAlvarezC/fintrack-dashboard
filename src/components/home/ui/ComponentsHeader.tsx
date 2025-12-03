interface ComponentsProps {
  name: string;
}


// Header Component for containers
export default function ComponentsHeader({ name }: ComponentsProps) {
  return (
    <div className="flex justify-between items-center">
      <h2 className="text-md md:text-lg font-semibold">{name}</h2>
    </div>
  );
}
