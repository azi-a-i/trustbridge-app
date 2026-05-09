import React from 'react';
import { Link } from 'react-router-dom';

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-50 text-on-surface font-body-md flex flex-col">
      <header className="bg-surface w-full top-0 sticky border-b border-outline-variant shadow-sm z-50">
        <div className="flex justify-between items-center px-margin-mobile py-4 w-full max-w-container-max mx-auto">
          <Link to="/" className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">security</span>
            <span className="font-headline-md text-headline-md font-bold text-on-surface">TrustBridge</span>
          </Link>
          <div className="flex gap-2">
            <Link to="/login" className="px-4 py-2 text-trust-blue font-bold rounded-xl hover:bg-surface-container-low transition-colors">
              Log In
            </Link>
            <Link to="/register" className="px-4 py-2 bg-trust-blue text-white font-bold rounded-xl hover:bg-blue-700 transition-colors">
              Sign Up
            </Link>
          </div>
        </div>
      </header>
      <div className="flex-1">
        {children}
      </div>
    </div>
  );
}
