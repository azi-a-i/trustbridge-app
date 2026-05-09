import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // For demo purposes, we let them pick the role to simulate logging into different account types
  const [mockRole, setMockRole] = useState<'buyer' | 'seller'>('buyer');
  
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    const name = email.split('@')[0] || 'User';
    login(mockRole, name);
    
    // Redirect based on role
    if (mockRole === 'buyer') {
      navigate('/buyer/discover');
    } else {
      navigate('/seller/dashboard');
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center py-12 px-margin-mobile">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
        <div className="p-8">
          <div className="flex justify-center mb-6">
            <div className="w-12 h-12 bg-trust-blue text-white rounded-xl flex items-center justify-center">
              <span className="material-symbols-outlined text-[28px]">security</span>
            </div>
          </div>
          <h1 className="font-headline-lg text-deep-navy text-center mb-2">Welcome Back</h1>
          <p className="text-center text-on-surface-variant font-body-sm mb-8">Log in to your TrustBridge account</p>

          {/* Demo toggle to simulate auth role */}
          <div className="mb-6 p-4 bg-amber-50 border border-amber-200 rounded-xl">
             <p className="text-xs text-amber-800 font-bold mb-2 uppercase">Demo: Log in as</p>
             <div className="flex gap-2">
               <label className="flex items-center gap-2 text-sm text-amber-900 cursor-pointer">
                 <input type="radio" checked={mockRole === 'buyer'} onChange={() => setMockRole('buyer')} /> Buyer
               </label>
               <label className="flex items-center gap-2 text-sm text-amber-900 cursor-pointer">
                 <input type="radio" checked={mockRole === 'seller'} onChange={() => setMockRole('seller')} /> Seller
               </label>
             </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block font-label-caps text-slate-600 mb-1">Email Address</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-trust-blue focus:ring-2 focus:ring-trust-blue/20 outline-none transition-all"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="block font-label-caps text-slate-600">Password</label>
                <a href="#" className="text-xs text-trust-blue font-bold hover:underline">Forgot?</a>
              </div>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-trust-blue focus:ring-2 focus:ring-trust-blue/20 outline-none transition-all"
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-trust-blue text-white font-bold rounded-xl hover:bg-blue-700 transition-colors mt-4"
            >
              Log In
            </button>
          </form>
        </div>
        
        <div className="bg-slate-50 p-6 border-t border-slate-200 text-center">
          <p className="text-on-surface-variant font-body-sm">
            Don't have an account?{' '}
            <Link to="/register" className="text-trust-blue font-bold hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
