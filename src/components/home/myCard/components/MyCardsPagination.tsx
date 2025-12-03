interface MyCardsPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function MyCardsPagination({
  currentPage,
  totalPages,
  onPageChange,
}: MyCardsPaginationProps) {
  return (
    // Pagination container
    <div className="flex flex-row w-full justify-center items-center gap-4 mt-auto">
      {/* Pagination dots */}
      <div className="flex gap-2">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => onPageChange(index)}
            className={`rounded-full transition-all ease-in-out duration-200 cursor-pointer ${
              currentPage === index
                ? 'w-8 h-3 bg-purple-700'
                : 'w-3 h-3 bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
