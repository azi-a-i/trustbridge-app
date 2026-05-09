
import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <main className="flex-1 flex flex-col">
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-24 px-margin-mobile relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          {/* Abstract pattern placeholder */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-trust-blue rounded-full filter blur-[100px] transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary rounded-full filter blur-[120px] transform -translate-x-1/3 translate-y-1/3"></div>
        </div>
        
        <div className="max-w-container-max mx-auto relative z-10 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-8 border border-white/20">
            <span className="material-symbols-outlined text-success-green" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
            <span className="font-label-caps text-label-caps tracking-wider text-white">THE SECURE SOCIAL COMMERCE PLATFORM</span>
          </div>
          
          <h1 className="font-headline-xl text-[48px] md:text-[64px] leading-tight font-bold mb-6 max-w-4xl">
            Buy and Sell with <span className="text-trust-blue">Zero Fraud Risk</span>
          </h1>
          
          <p className="font-body-lg text-body-lg text-slate-300 max-w-2xl mb-12">
            TrustBridge combines verified seller intelligence with secure escrow payments to make social commerce in Nigeria safe, transparent, and completely risk-free.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link to="/register?role=buyer" className="bg-trust-blue text-white px-8 py-4 rounded-xl font-bold font-body-md hover:bg-blue-700 transition-colors shadow-lg shadow-trust-blue/20 flex items-center justify-center gap-2">
              Start Shopping Securely
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
            <Link to="/register?role=seller" className="bg-white/10 text-white px-8 py-4 rounded-xl font-bold font-body-md hover:bg-white/20 transition-colors border border-white/20 flex items-center justify-center gap-2">
              Become a Verified Seller
              <span className="material-symbols-outlined">storefront</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Pillars */}
      <section className="py-24 px-margin-mobile bg-slate-50">
        <div className="max-w-container-max mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-deep-navy mb-4">How TrustBridge Protects You</h2>
            <p className="font-body-md text-on-surface-variant max-w-2xl mx-auto">Our infrastructure is built to eliminate scams and build long-term trust between genuine buyers and sellers.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-safety-blue text-trust-blue rounded-xl flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-[32px]">shield_lock</span>
              </div>
              <h3 className="font-headline-md text-[20px] text-deep-navy mb-3">Secure Escrow</h3>
              <p className="text-on-surface-variant font-body-sm leading-relaxed">
                Funds are held safely by TrustBridge and only released to the seller when the buyer confirms delivery of exactly what they ordered.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-success-green/10 text-success-green rounded-xl flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-[32px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
              </div>
              <h3 className="font-headline-md text-[20px] text-deep-navy mb-3">Seller Verification</h3>
              <p className="text-on-surface-variant font-body-sm leading-relaxed">
                Every merchant undergoes a rigorous 12-point KYC check, including identity verification and physical address confirmation.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-alert-amber/10 text-alert-amber rounded-xl flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-[32px]">query_stats</span>
              </div>
              <h3 className="font-headline-md text-[20px] text-deep-navy mb-3">Trust Intelligence</h3>
              <p className="text-on-surface-variant font-body-sm leading-relaxed">
                Sellers earn a dynamic Trust Score based on successful deliveries, low dispute rates, and authentic buyer reviews.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dual Value Proposition */}
      <section className="py-24 px-margin-mobile bg-white border-t border-slate-200">
        <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* For Buyers */}
          <div className="flex flex-col items-start bg-slate-50 p-12 rounded-3xl border border-slate-200">
            <span className="font-label-caps text-trust-blue mb-4">FOR BUYERS</span>
            <h3 className="font-headline-lg text-deep-navy mb-6">Shop with Absolute Confidence</h3>
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-success-green mt-0.5">check_circle</span>
                <span className="text-on-surface-variant">Never lose money to "what I ordered vs what I got"</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-success-green mt-0.5">check_circle</span>
                <span className="text-on-surface-variant">Easily discover the most reliable vendors in Nigeria</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-success-green mt-0.5">check_circle</span>
                <span className="text-on-surface-variant">Fast, dispute resolution if things go wrong</span>
              </li>
            </ul>
            <Link to="/register?role=buyer" className="text-trust-blue font-bold flex items-center gap-2 hover:gap-3 transition-all">
              Sign up as a Buyer <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>

          {/* For Sellers */}
          <div className="flex flex-col items-start bg-deep-navy p-12 rounded-3xl border border-slate-800 text-white">
            <span className="font-label-caps text-trust-blue mb-4">FOR SELLERS</span>
            <h3 className="font-headline-lg text-white mb-6">Your Trust is Your Currency</h3>
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-success-green mt-0.5">check_circle</span>
                <span className="text-slate-300">Convert more sales with the TrustBridge Verified Badge</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-success-green mt-0.5">check_circle</span>
                <span className="text-slate-300">Eliminate "pay on delivery" risks and fake buyers</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-success-green mt-0.5">check_circle</span>
                <span className="text-slate-300">Access higher transaction limits via your Trust Score</span>
              </li>
            </ul>
            <Link to="/register?role=seller" className="text-trust-blue font-bold flex items-center gap-2 hover:gap-3 transition-all">
              Verify your Business <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
