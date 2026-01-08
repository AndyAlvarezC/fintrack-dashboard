import { Routes, Route, useOutletContext } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/home/Home';
import PlaceHolder from './pages/PlaceHolder';
import Logout from './pages/auth/Logout';

function LogoutWrapper() {
  const { setIsAuth } = useOutletContext<{ setIsAuth: (v: boolean) => void }>();

  return <Logout onLogout={() => setIsAuth(false)} />;
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />

        <Route path="payments" element={<PlaceHolder title="Payments" />} />
        <Route path="accounts" element={<PlaceHolder title="Accounts" />} />
        <Route path="budget" element={<PlaceHolder title="Budget" />} />
        <Route path="profile" element={<PlaceHolder title="Profile" />} />
        <Route path="settings" element={<PlaceHolder title="Settings" />} />
        <Route path="logout" element={<LogoutWrapper />} />

        <Route
          path="*"
          element={
            <PlaceHolder
              title="Page Not Found"
              subtitle="This page does not exist yet!"
            />
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
