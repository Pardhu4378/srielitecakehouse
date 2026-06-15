import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation
} from 'react-router-dom';
import { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './lib/firebase';
import { ProductProvider } from './context/ProductContext';

// Layout Components
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';

// Pages
import Home from './pages/Home';
import CategoryPage from './pages/CategoryPage';
import CakesPage from './pages/CakesPage';
import Gallery from './pages/Gallery';

// Admin Pages
import Login from './pages/Admin/Login';
import Dashboard from './pages/Admin/Dashboard';
import Products from './pages/Admin/Products';
import GalleryAdmin from './pages/Admin/GalleryAdmin';
import ReviewsAdmin from './pages/Admin/ReviewsAdmin';

// Protected Route Wrapper
function ProtectedRoute({ children }) {
  const [user, setUser] = useState(null);
  const [checking, setChecking] = useState(true);
  const isDemo = sessionStorage.getItem('isAdminDemo') === 'true';

  useEffect(() => {
    // If we logged in via Demo, bypass firebase check
    if (isDemo) {
      setUser({ email: 'admin@srielite.com' });
      setChecking(false);
      return;
    }

    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setChecking(false);
    });

    return () => unsubscribe();
  }, [isDemo]);

  if (checking) {
    return (
      <div className="min-h-screen bg-[#FFFDF9] flex items-center justify-center">
        <div className="text-center text-[#8B5E3C]">
          <svg className="animate-spin h-8 w-8 mx-auto mb-4" viewBox="0 0 24 24" fill="none">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
          <p className="font-lato text-sm font-semibold">Authenticating...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/admin/login" replace />;
  }

  return children;
}

function Layout() {
  const location = useLocation();

  const isAdminRoute =
    location.pathname.startsWith('/admin');

  return (
    <div className="flex flex-col min-h-screen bg-[#FFFDF9]">

      {!isAdminRoute && <Header />}

      <main className="flex-grow">
        <Routes>

          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/category/:slug" element={<CategoryPage />} />
          <Route path="/cakes" element={<CakesPage />} />
          <Route path="/gallery" element={<Gallery />} />

          {/* Admin Login */}
          <Route path="/admin/login" element={<Login />} />

          {/* Protected Admin Routes */}
          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/products"
            element={
              <ProtectedRoute>
                <Products />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/gallery"
            element={
              <ProtectedRoute>
                <GalleryAdmin />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/reviews"
            element={
              <ProtectedRoute>
                <ReviewsAdmin />
              </ProtectedRoute>
            }
          />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {!isAdminRoute && <FloatingButtons />}
      {!isAdminRoute && <Footer />}

    </div>
  );
}

export default function App() {
  return (
    <ProductProvider>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </ProductProvider>
  );
}