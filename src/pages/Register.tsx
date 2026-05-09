import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Register() {
  const [role, setRole] = useState<'buyer' | 'seller'>('buyer');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const roleParam = params.get('role');
    if (roleParam === 'seller' || roleParam === 'buyer') {
      setRole(roleParam);
    }
  }, [location]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    login(role, name);
    
    // Redirect based on role
    if (role === 'buyer') {
      navigate('/buyer/discover');
    } else {
      navigate('/seller/onboarding'); // First time sellers go to KYC
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
          <h1 className="font-headline-lg text-deep-navy text-center mb-2">Create an Account</h1>
          <p className="text-center text-on-surface-variant font-body-sm mb-8">Join the secure social commerce network</p>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Role Selection */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <button
                type="button"
                onClick={() => setRole('buyer')}
                className={`py-3 px-4 rounded-xl border-2 font-bold transition-all flex flex-col items-center gap-1 ${
                  role === 'buyer' 
                    ? 'border-trust-blue bg-safety-blue text-trust-blue' 
                    : 'border-slate-200 text-slate-500 hover:border-slate-300'
                }`}
              >
                <span className="material-symbols-outlined">shopping_bag</span>
                I'm a Buyer
              </button>
              <button
                type="button"
                onClick={() => setRole('seller')}
                className={`py-3 px-4 rounded-xl border-2 font-bold transition-all flex flex-col items-center gap-1 ${
                  role === 'seller' 
                    ? 'border-trust-blue bg-safety-blue text-trust-blue' 
                    : 'border-slate-200 text-slate-500 hover:border-slate-300'
                }`}
              >
                <span className="material-symbols-outlined">storefront</span>
                I'm a Seller
              </button>
            </div>

            <div>
              <label className="block font-label-caps text-slate-600 mb-1">Full Name {role === 'seller' && '/ Business Name'}</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-trust-blue focus:ring-2 focus:ring-trust-blue/20 outline-none transition-all"
                placeholder={role === 'buyer' ? "John Doe" : "Luxe Threads"}
              />
            </div>

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
              <label className="block font-label-caps text-slate-600 mb-1">Password</label>
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
              {role === 'buyer' ? 'Start Shopping Securely' : 'Start Verification'}
            </button>
          </form>
        </div>
        
        <div className="bg-slate-50 p-6 border-t border-slate-200 text-center">
          <p className="text-on-surface-variant font-body-sm">
            Already have an account?{' '}
            <Link to="/login" className="text-trust-blue font-bold hover:underline">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
