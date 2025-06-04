import { useAuthentication } from '@/contexts/AuthContext';

export function LoginPage() {
  const { login } = useAuthentication();
  return (
    <div className="m-5">
      <button onClick={login}>Login</button>
    </div>
  );
}
