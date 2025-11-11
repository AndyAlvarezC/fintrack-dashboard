import { Outlet } from 'react-router-dom';
import Sidebar from '../components/sidebar/Sidebar';

export default function MainLayout() {
  return (
    <div className="flex min-h-screen w-full">
      <Sidebar />
      <main className="flex-1 h-screen w-full p-6 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}
