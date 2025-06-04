import { Navigate, Route, Routes } from 'react-router';

import { HomePage } from '@/pages/Homepage/HomePage';
import { LoginPage } from '@/pages/LoginPage/LoginPage';

import { AuthenticationRoute } from './AuthenticationRoute';
import { PublicRoute } from './PublicRoute';

export function AppRouter() {
  return (
    <Routes>
      <Route element={<AuthenticationRoute />}>
        <Route path="/home" element={<HomePage />} />
      </Route>
      <Route element={<PublicRoute />}>
        <Route path="/example-component" />
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
      </Route>
    </Routes>
  );
}
