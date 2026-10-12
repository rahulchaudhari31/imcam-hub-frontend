import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';

const Home = lazy(() => import('./pages/Home'));
const FeaturesIndex = lazy(() => import('./pages/FeaturesIndex'));
const FeatureAdmin = lazy(() => import('./pages/AdminPortal/Admin'));
const FeatureCaseworker = lazy(() => import('./pages/Caseworker/Caseworker'));
const FeatureClientPortal = lazy(() => import('./pages/ClientPortal/ClientPortal'));
const FeatureSponsorBusinessPortal = lazy(
  () => import('./pages/SponsorBusinessPortal/SponsorBusinessPortal')
);
const Solutions = lazy(() => import('./pages/Solutions'));
const Pricing = lazy(() => import('./pages/Pricing'));
const Resources = lazy(() => import('./pages/Resources'));
const Terms = lazy(() => import('./pages/Terms'));
const BookDemo = lazy(() => import('./pages/BookDemo'));

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
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<FeaturesIndex />} />
            <Route path="/features/admin" element={<FeatureAdmin />} />
            <Route path="/features/caseworker" element={<FeatureCaseworker />} />
            <Route path="/features/client-portal" element={<FeatureClientPortal />} />
            <Route path="/features/client" element={<FeatureSponsorBusinessPortal />} />
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