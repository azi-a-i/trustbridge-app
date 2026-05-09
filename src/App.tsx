import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StoreDiscovery from './pages/StoreDiscovery';
import TrustProfile from './pages/TrustProfile';
import EscrowCheckout from './pages/EscrowCheckout';
import OrderComplete from './pages/OrderComplete';
import TrustScoreDashboard from './pages/TrustScoreDashboard';
import SellerKYC from './pages/SellerKYC';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Register from './pages/Register';
import PublicLayout from './components/layouts/PublicLayout';
import BuyerLayout from './components/layouts/BuyerLayout';
import SellerLayout from './components/layouts/SellerLayout';
import { AuthProvider } from './context/AuthContext';

// Protected Route Wrappers
function ProtectedBuyerRoute({ children }: { children: React.ReactNode }) {
  // In a real app we'd redirect to /login if no user or wrong role
  return <BuyerLayout>{children}</BuyerLayout>;
}

function ProtectedSellerRoute({ children }: { children: React.ReactNode }) {
  return <SellerLayout>{children}</SellerLayout>;
}

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<PublicLayout><LandingPage /></PublicLayout>} />
          <Route path="/login" element={<PublicLayout><Login /></PublicLayout>} />
          <Route path="/register" element={<PublicLayout><Register /></PublicLayout>} />

          {/* Buyer Routes */}
          <Route path="/buyer/discover" element={<ProtectedBuyerRoute><StoreDiscovery /></ProtectedBuyerRoute>} />
          <Route path="/buyer/store/:sellerId" element={<ProtectedBuyerRoute><TrustProfile /></ProtectedBuyerRoute>} />
          <Route path="/buyer/checkout" element={<ProtectedBuyerRoute><EscrowCheckout /></ProtectedBuyerRoute>} />
          <Route path="/buyer/order-complete" element={<ProtectedBuyerRoute><OrderComplete /></ProtectedBuyerRoute>} />
          {/* Fallbacks for now */}
          <Route path="/buyer/orders" element={<ProtectedBuyerRoute><div className="p-8 text-center mt-20 font-bold text-slate-500">Orders Page Coming Soon</div></ProtectedBuyerRoute>} />
          <Route path="/buyer/profile" element={<ProtectedBuyerRoute><div className="p-8 text-center mt-20 font-bold text-slate-500">Buyer Profile Coming Soon</div></ProtectedBuyerRoute>} />

          {/* Seller Routes */}
          <Route path="/seller/dashboard" element={<ProtectedSellerRoute><TrustScoreDashboard /></ProtectedSellerRoute>} />
          {/* Fallbacks for now */}
          <Route path="/seller/orders" element={<ProtectedSellerRoute><div className="p-8 text-center mt-20 font-bold text-slate-500">Seller Orders Coming Soon</div></ProtectedSellerRoute>} />
          <Route path="/seller/onboarding" element={<ProtectedSellerRoute><SellerKYC /></ProtectedSellerRoute>} />

          {/* Redirect old routes for backwards compatibility while testing */}
          <Route path="/profile/:sellerId" element={<ProtectedBuyerRoute><TrustProfile /></ProtectedBuyerRoute>} />
          <Route path="/checkout" element={<ProtectedBuyerRoute><EscrowCheckout /></ProtectedBuyerRoute>} />
          <Route path="/order-complete" element={<ProtectedBuyerRoute><OrderComplete /></ProtectedBuyerRoute>} />
          <Route path="/dashboard" element={<ProtectedSellerRoute><TrustScoreDashboard /></ProtectedSellerRoute>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
