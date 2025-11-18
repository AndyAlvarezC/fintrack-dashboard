import MyCardsHeader from './components/MyCardsHeader';
import Card from './components/Card';
import MyCardsPagination from './components/MyCardsPagination';

export default function MyCards() {
  return (
    <div className="flex flex-col w-full h-full gap-4">
      {/* Header */}
      <MyCardsHeader />

      {/* Cards */}
      <Card/>

      {/* Pagination */}
      <MyCardsPagination />
    </div>
  );
}
