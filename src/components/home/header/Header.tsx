import HeaderSearchInput from './components/HeaderSearchInput';
import HeaderNotification from './components/HeaderNotification';

export default function Header() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
      <h2 className="text-xl font-semibold">Hello, Andy Álvarez! Welcome Back</h2>

      <div className="flex items-center gap-4 w-full md:w-auto">
        {/* Search input with Icon */}
        <HeaderSearchInput />

        {/* Notifications */}
        <HeaderNotification />
      </div>
    </div>
  );
}
