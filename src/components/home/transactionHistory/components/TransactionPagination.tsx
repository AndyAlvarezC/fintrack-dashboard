interface TransactionPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function TransactionPagination({
  currentPage,
  totalPages,
  onPageChange,
}: TransactionPaginationProps) {
  return (
    // Container for pagination
    <div className="flex flex-row w-full justify-center gap-2 mt-auto pt-3">
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index}
          onClick={() => onPageChange(index)}
          className={`w-3 h-3 rounded-full transition-colors ease-in-out duration-200 cursor-pointer ${
            currentPage === index
              ? 'bg-purple-700'
              : 'bg-gray-400 hover:bg-gray-300'
          }`}
          aria-label={`Go to page ${index + 1}`}
        />
      ))}
    </div>
  );
}
