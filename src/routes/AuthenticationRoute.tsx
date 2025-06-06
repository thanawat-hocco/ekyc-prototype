import { Navigate, Outlet } from 'react-router';

import { useAuthentication } from '@/contexts/AuthContext';
import { Layout } from '@/components/ui';

export function AuthenticationRoute() {
  const { isLogin } = useAuthentication();
  return isLogin ? (
    <Layout>
      <Outlet />
    </Layout>
  ) : (
    <Navigate to="/login" />
  );
}
