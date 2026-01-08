import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

type Props = {
  onLogout: () => void;
};

export default function Logout({ onLogout }: Props) {
  const navigate = useNavigate();

  useEffect(() => {
    onLogout();
    navigate('/', { replace: true });
  }, [onLogout, navigate]);

  return null;
}
