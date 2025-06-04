import { Navigate, Outlet } from 'react-router';
import { useAuthentication } from '@/contexts/AuthContext';

export function PublicRoute() {
  const { isLogin } = useAuthentication();
  return !isLogin ? <Outlet /> : <Navigate to="/home" />;
}
