import { useState } from 'react';
import TransactionHeader from './components/TransactionHeader';
import TransactionMap from './components/TransactionMap';
import TransactionPagination from './components/TransactionPagination';
import {
  transactionDataThisWeek,
  transactionDataPrevWeek,
} from '../../data/mockData';

const ITEMS_PER_PAGE = 5;

export default function TransactionHistory() {
  const [option, setOption] = useState<'this' | 'prev'>('this');
  const [currentPage, setCurrentPage] = useState(0);

  const allTransactions =
    option === 'this' ? transactionDataThisWeek : transactionDataPrevWeek;

  // Calculate total pages for pagination
  const totalPages = Math.ceil(allTransactions.length / ITEMS_PER_PAGE);

  // Get transactions for the current page
  const startIndex = currentPage * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentTransactions = allTransactions.slice(startIndex, endIndex);

  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex flex-col h-full min-h-[400px] w-full">
      {/* Header: title and selector */}
      <TransactionHeader option={option} setOption={setOption} />

      {/* Transactions list */}
      <div className="flex-1 pt-2 w-full overflow-auto">
        {/* Map through current transactions */}
        <TransactionMap transactions={currentTransactions} />
      </div>

      {/* Pagination component */}
      {totalPages > 1 && (
        <TransactionPagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
}
