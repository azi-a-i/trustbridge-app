import React from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import StoreDiscovery from './pages/StoreDiscovery';
import TrustProfile from './pages/TrustProfile';
import EscrowCheckout from './pages/EscrowCheckout';
import OrderComplete from './pages/OrderComplete';
import TrustScoreDashboard from './pages/TrustScoreDashboard';

function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  
  return (
    <>
      <header className="w-full top-0 sticky bg-surface shadow-sm z-50 border-b border-outline-variant">
        <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4 w-full max-w-container-max mx-auto">
          <Link to="/" className="font-headline-md text-headline-md font-bold text-primary flex items-center gap-2">
            <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>security</span>
            TrustBridge
          </Link>
          <div className="flex items-center gap-4">
            <button className="p-2 rounded-full hover:bg-surface-container-low transition-colors active:scale-95 duration-200">
              <span className="material-symbols-outlined text-on-surface-variant">notifications</span>
            </button>
          </div>
        </div>
      </header>

      {children}

      <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-4 pt-2 bg-surface shadow-[0_-4px_6px_-1px_rgba(15,23,42,0.02)]">
        <Link to="/" className={`flex flex-col items-center justify-center px-4 py-1.5 transition-transform active:scale-90 ${location.pathname === '/' ? 'bg-secondary-container text-on-secondary-container rounded-xl' : 'text-on-surface-variant hover:text-primary'}`}>
          <span className="material-symbols-outlined" style={location.pathname === '/' ? { fontVariationSettings: "'FILL' 1" } : {}}>home</span>
          <span className="font-label-sm text-label-sm font-medium">Home</span>
        </Link>
        <button className="flex flex-col items-center justify-center text-on-surface-variant px-4 py-1.5 hover:text-primary transition-transform active:scale-90">
          <span className="material-symbols-outlined">search</span>
          <span className="font-label-sm text-label-sm font-medium">Search</span>
        </button>
        <Link to="/dashboard" className={`flex flex-col items-center justify-center px-4 py-1.5 transition-transform active:scale-90 ${location.pathname === '/dashboard' ? 'bg-secondary-container text-on-secondary-container rounded-xl' : 'text-on-surface-variant hover:text-primary'}`}>
          <span className="material-symbols-outlined" style={location.pathname === '/dashboard' ? { fontVariationSettings: "'FILL' 1" } : {}}>account_balance_wallet</span>
          <span className="font-label-sm text-label-sm font-medium">Dashboard</span>
        </Link>
        <Link to="/profile/adaeze" className={`flex flex-col items-center justify-center px-4 py-1.5 transition-transform active:scale-90 ${location.pathname.startsWith('/profile') ? 'bg-secondary-container text-on-secondary-container rounded-xl' : 'text-on-surface-variant hover:text-primary'}`}>
          <span className="material-symbols-outlined" style={location.pathname.startsWith('/profile') ? { fontVariationSettings: "'FILL' 1" } : {}}>person</span>
          <span className="font-label-sm text-label-sm font-medium">Profile</span>
        </Link>
      </nav>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<StoreDiscovery />} />
          <Route path="/profile/:sellerId" element={<TrustProfile />} />
          <Route path="/checkout" element={<EscrowCheckout />} />
          <Route path="/order-complete" element={<OrderComplete />} />
          <Route path="/dashboard" element={<TrustScoreDashboard />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
