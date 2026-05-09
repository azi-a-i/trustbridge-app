import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export default function BuyerLayout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen bg-slate-50 text-on-surface font-body-md">
      {/* TopAppBar */}
      <header className="bg-surface w-full top-0 sticky border-b border-outline-variant shadow-sm z-50">
        <div className="flex justify-between items-center px-margin-mobile py-4 w-full max-w-container-max mx-auto">
          <Link to="/buyer/discover" className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">security</span>
            <span className="font-headline-md text-headline-md font-bold text-on-surface">TrustBridge</span>
          </Link>
          
          <div className="flex items-center gap-4">
            <button className="hover:bg-surface-container-low transition-colors p-2 rounded-full">
              <span className="material-symbols-outlined text-on-surface-variant">notifications</span>
            </button>
            <div className="flex items-center gap-2">
               <span className="font-label-sm text-on-surface-variant hidden md:inline">{user?.name}</span>
               <button onClick={logout} className="hover:bg-surface-container-low transition-colors p-2 rounded-full text-danger-red" title="Logout">
                 <span className="material-symbols-outlined">logout</span>
               </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="pb-24">
        {children}
      </div>

      {/* BottomNavBar */}
      <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-4 pt-2 bg-surface shadow-lg border-t border-outline-variant">
        <Link to="/buyer/discover" className={`flex flex-col items-center justify-center px-4 py-1.5 transition-transform active:scale-90 ${location.pathname === '/buyer/discover' ? 'bg-secondary-container text-on-secondary-container rounded-xl' : 'text-on-surface-variant hover:text-primary'}`}>
          <span className="material-symbols-outlined" style={location.pathname === '/buyer/discover' ? { fontVariationSettings: "'FILL' 1" } : {}}>storefront</span>
          <span className="font-label-sm text-label-sm font-medium">Discover</span>
        </Link>
        <Link to="/buyer/orders" className={`flex flex-col items-center justify-center px-4 py-1.5 transition-transform active:scale-90 ${location.pathname === '/buyer/orders' ? 'bg-secondary-container text-on-secondary-container rounded-xl' : 'text-on-surface-variant hover:text-primary'}`}>
          <span className="material-symbols-outlined" style={location.pathname === '/buyer/orders' ? { fontVariationSettings: "'FILL' 1" } : {}}>local_shipping</span>
          <span className="font-label-sm text-label-sm font-medium">Orders</span>
        </Link>
        <Link to="/buyer/profile" className={`flex flex-col items-center justify-center px-4 py-1.5 transition-transform active:scale-90 ${location.pathname === '/buyer/profile' ? 'bg-secondary-container text-on-secondary-container rounded-xl' : 'text-on-surface-variant hover:text-primary'}`}>
          <span className="material-symbols-outlined" style={location.pathname === '/buyer/profile' ? { fontVariationSettings: "'FILL' 1" } : {}}>person</span>
          <span className="font-label-sm text-label-sm font-medium">Profile</span>
        </Link>
      </nav>
    </div>
  );
}
