import { useEffect, useState } from 'react';

export default function Header() {
  const [username, setUsername] = useState<string>('');

  useEffect(() => {
    const storedName = localStorage.getItem('username');
    if (storedName) {
      setUsername(storedName);
    }
  }, []);

  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
      <h2 className="text-xl font-semibold">Hello, {username}! Welcome Back</h2>
    </div>
  );
}
