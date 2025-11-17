import { Outlet } from 'react-router-dom';

export default function MainLayout() {
  return (
    <div className="flex min-h-screen w-full">
      <main className="flex-1 h-screen w-full overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}
