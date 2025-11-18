import TransactionHeader from './components/TransactionHeader';
import TransactionMap from './components/TransactionMap';
import TransactionPagination from './components/TransactionPagination';

export default function TransactionHistory() {
  return (
    <div className="flex flex-col h-full min-h-[400px] w-full">
      {/* Header: h2 & Selector */}
      <TransactionHeader />

      {/* Transactions */}
      <div className="flex-1 min-h-0 pt-2 w-full overflow-auto">
        {/* Transactions Map */}
        <TransactionMap />
      </div>

      {/* Pagination */}
      <TransactionPagination />
    </div>
  );
}
