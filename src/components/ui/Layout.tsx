import { PropsWithChildren } from 'react';

import { TopBar } from '@/components/ui';
import { useAuthentication } from '@/contexts/AuthContext';

type Props = PropsWithChildren;

export function Layout({ children }: Props) {
  const { logout } = useAuthentication();
  return (
    <div className="w-full">
      <TopBar onLogout={logout} />
      <div>{children}</div>
    </div>
  );
}
