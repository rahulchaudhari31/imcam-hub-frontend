import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ProtectedRoute from './components/ProtectedRoute';
import AdminLayout from './components/admin/AdminLayout';
import Home from './pages/Home';
import FeaturesIndex from './pages/FeaturesIndex';
import FeatureAdmin from './pages/FeatureAdmin';
import FeatureCaseworker from './pages/FeatureCaseworker';
import FeatureCandidate from './pages/FeatureCandidate';
import FeatureClient from './pages/FeatureClient';
import Solutions from './pages/Solutions';
import Pricing from './pages/Pricing';
import Resources from './pages/Resources';
import BookDemo from './pages/BookDemo';
import Login from './pages/Login';
import Dashboard from './pages/admin/Dashboard';
import DemoRequests from './pages/admin/DemoRequests';
import DemoRequestDetail from './pages/admin/DemoRequestDetail';

function App() {
  return (
    <BrowserRouter>
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
          <Route path="/features/candidate" element={<FeatureCandidate />} />
          <Route path="/features/client" element={<FeatureClient />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/book-demo" element={<BookDemo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
