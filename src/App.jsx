import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import ProtectedRoute from './components/ProtectedRoute';
import AdminLayout from './components/admin/AdminLayout';

const Home = lazy(() => import('./pages/Home'));
const FeaturesIndex = lazy(() => import('./pages/FeaturesIndex'));
const FeatureAdmin = lazy(() => import('./pages/FeatureAdmin'));
const FeatureCaseworker = lazy(() => import('./pages/FeatureCaseworker'));
const FeatureCandidate = lazy(() => import('./pages/FeatureCandidate'));
const FeatureClient = lazy(() => import('./pages/FeatureClient'));
const Solutions = lazy(() => import('./pages/Solutions'));
const Pricing = lazy(() => import('./pages/Pricing'));
const Resources = lazy(() => import('./pages/Resources'));
const Terms = lazy(() => import('./pages/Terms'));
const BookDemo = lazy(() => import('./pages/BookDemo'));
const Login = lazy(() => import('./pages/Login'));
const Dashboard = lazy(() => import('./pages/admin/Dashboard'));
const DemoRequests = lazy(() => import('./pages/admin/DemoRequests'));
const DemoRequestDetail = lazy(() => import('./pages/admin/DemoRequestDetail'));

function PageFallback() {
  return (
    <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      Loading…
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<PageFallback />}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/admin"
            element={
              <ProtectedRoute allowedRoles={['admin']}>
                <AdminLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Dashboard />} />
            <Route path="demo-requests" element={<DemoRequests />} />
            <Route path="demo-requests/:id" element={<DemoRequestDetail />} />
          </Route>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<FeaturesIndex />} />
            <Route path="/features/admin" element={<FeatureAdmin />} />
            <Route path="/features/caseworker" element={<FeatureCaseworker />} />
            <Route path="/features/client-portal" element={<FeatureCandidate />} />
            <Route path="/features/client" element={<FeatureClient />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/book-demo" element={<BookDemo />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;