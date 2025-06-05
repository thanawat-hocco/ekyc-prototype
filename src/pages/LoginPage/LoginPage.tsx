import { useAuthentication } from '@/contexts/AuthContext';

export function LoginPage() {
  const { login } = useAuthentication();
  return (
    <div className="m-5">
      <button className="bg-sky-500" onClick={login}>
        Login
      </button>
    </div>
  );
}
