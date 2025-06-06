import { Navigate, Route, Routes } from 'react-router';

import { HomePage } from '@/pages/Homepage/HomePage';
import { LoginPage } from '@/pages/LoginPage/LoginPage';

import CameraCapture from '@/pages/CapturePage/CapturePage';
import FaceCapture from '@/pages/CapturePage/FaceCapture';
import IDCardCapture from '@/pages/CapturePage/IDCardCapture';

import SuccessPage from '@/pages/LandingPage/SuccessPage';
import FaceSuccessPage from '@/pages/LandingPage/FaceSuccessPage';
import IDCardSuccessPage from '@/pages/LandingPage/IDCardSuccessPage';

import FailurePage from '@/pages/LandingPage/FailurePage';
import FaceFailurePage from '@/pages/LandingPage/FaceFailuePage';
import IDCardFailurePage from '@/pages/LandingPage/IDCardFailurePage';

import { AuthenticationRoute } from './AuthenticationRoute';
import { PublicRoute } from './PublicRoute';

export function AppRouter() {
  return (
    <Routes>
      <Route element={<AuthenticationRoute />}>
        <Route path="/home" element={<HomePage />} />
        <Route path="/face" element={<FaceCapture />} />
        <Route path="/idcard" element={<IDCardCapture />} />
        <Route path="/capture" element={<CameraCapture />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/failure" element={<FailurePage />} />
        <Route path="/facefailuer" element={<FaceFailurePage />} />
        <Route path="/idcardfailure" element={<IDCardFailurePage />} />
        <Route path="/facesuccess" element={<FaceSuccessPage />} />
        <Route path="/idcardsuccess" element={<IDCardSuccessPage />} />
      </Route>
      <Route element={<PublicRoute />}>
        <Route path="/example-component" />
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
      </Route>
    </Routes>
  );
}
