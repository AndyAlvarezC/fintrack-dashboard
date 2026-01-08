import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Login from '../pages/auth/Login';
import Sidebar from '../components/sidebar/Sidebar';

export default function MainLayout() {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-slate-950 text-slate-300 select-none">
      <div className="absolute inset-0 bg-linear-to-br from-blue-500/10 via-slate-800/50 to-blue-600/10" />

      <div className="relative z-10 flex min-h-screen w-full">
        {isAuth ? (
          <>
            <Sidebar />
            <main className="flex-1 overflow-y-auto">
              <Outlet context={{ setIsAuth }} />
            </main>
          </>
        ) : (
          <Login onLogin={() => setIsAuth(true)} />
        )}
      </div>
    </div>
  );
}
