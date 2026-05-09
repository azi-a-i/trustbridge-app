

export default function TrustScoreDashboard() {
  return (
    <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-stack-lg">
      {/* Header Section */}
      <div className="mb-stack-lg flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="font-headline-xl text-headline-xl text-deep-navy">Trust Score Intelligence</h1>
          <p className="font-body-md text-body-md text-slate-600 mt-2">Real-time performance metrics and credibility analysis.</p>
        </div>
        <div className="flex items-center gap-3">
          <span className="bg-success-green/10 text-success-green px-3 py-1 rounded-full text-label-caps font-label-caps flex items-center gap-1">
            <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span> Verified Seller
          </span>
          <span className="text-body-sm font-body-sm text-on-surface-variant">Last updated: Today, 09:42 AM</span>
        </div>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
        {/* Primary Score Shield Card */}
        <div className="lg:col-span-4 bg-white rounded-xl border border-[#E2E8F0] shadow-sm p-8 flex flex-col items-center justify-center">
          <h2 className="font-label-caps text-label-caps text-slate-600 mb-8">Overall Reputation Index</h2>
          <div className="relative w-48 h-48 flex items-center justify-center">
            <div className="w-full h-full rounded-full relative" style={{ background: 'conic-gradient(#004ac6 0% 85%, #e1e2ed 85% 100%)' }}>
               <div className="absolute inset-[24px] bg-white rounded-full"></div>
            </div>
            <div className="absolute z-10 flex flex-col items-center">
              <span className="font-headline-xl text-[48px] text-deep-navy">85</span>
              <span className="font-label-sm text-slate-600">out of 100</span>
            </div>
          </div>
          <div className="mt-8 text-center">
            <span className="bg-safety-blue text-trust-blue px-4 py-1.5 rounded-full font-label-caps text-label-caps">Tier 1: Institutional Trust</span>
            <p className="font-body-sm text-body-sm text-slate-600 mt-4 leading-relaxed">Your score is in the top 5% of marketplace sellers this quarter.</p>
          </div>
        </div>

        {/* Breakdown Grid */}
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-stack-md">
          {/* Metric Card: Transaction Completion */}
          <div className="bg-white rounded-xl border border-[#E2E8F0] shadow-sm p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="font-label-caps text-label-caps text-slate-600">Completion Rate</p>
                <h3 className="font-headline-md text-headline-md text-deep-navy">98.4%</h3>
              </div>
              <span className="bg-success-green/10 text-success-green px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider">Excellent</span>
            </div>
            <div className="w-full bg-slate-50 h-2 rounded-full mb-3">
              <div className="bg-success-green h-full rounded-full" style={{ width: '98.4%' }}></div>
            </div>
            <div className="flex justify-between text-[11px] text-slate-600 font-medium">
              <span>Weight: 35%</span>
              <span>428 Transactions</span>
            </div>
          </div>

          {/* Metric Card: Disputes */}
          <div className="bg-white rounded-xl border border-[#E2E8F0] shadow-sm p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="font-label-caps text-label-caps text-slate-600">Dispute Outcome</p>
                <h3 className="font-headline-md text-headline-md text-deep-navy">92% Win</h3>
              </div>
              <span className="bg-alert-amber/10 text-alert-amber px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider">Healthy</span>
            </div>
            <div className="w-full bg-slate-50 h-2 rounded-full mb-3">
              <div className="bg-alert-amber h-full rounded-full" style={{ width: '92%' }}></div>
            </div>
            <div className="flex justify-between text-[11px] text-slate-600 font-medium">
              <span>Weight: 25%</span>
              <span>12 Cases Resolved</span>
            </div>
          </div>

          {/* Metric Card: Reviews */}
          <div className="bg-white rounded-xl border border-[#E2E8F0] shadow-sm p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="font-label-caps text-label-caps text-slate-600">Verified Reviews</p>
                <h3 className="font-headline-md text-headline-md text-deep-navy">4.9 / 5.0</h3>
              </div>
              <span className="bg-success-green/10 text-success-green px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider">Excellent</span>
            </div>
            <div className="w-full bg-slate-50 h-2 rounded-full mb-3">
              <div className="bg-trust-blue h-full rounded-full" style={{ width: '98%' }}></div>
            </div>
            <div className="flex justify-between text-[11px] text-slate-600 font-medium">
              <span>Weight: 20%</span>
              <span>850+ Verifications</span>
            </div>
          </div>

          {/* Metric Card: Delivery */}
          <div className="bg-white rounded-xl border border-[#E2E8F0] shadow-sm p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="font-label-caps text-label-caps text-slate-600">Delivery Speed</p>
                <h3 className="font-headline-md text-headline-md text-deep-navy">Avg 1.2 Days</h3>
              </div>
              <span className="bg-danger-red/10 text-danger-red px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider">Needs Attention</span>
            </div>
            <div className="w-full bg-slate-50 h-2 rounded-full mb-3">
              <div className="bg-danger-red h-full rounded-full" style={{ width: '65%' }}></div>
            </div>
            <div className="flex justify-between text-[11px] text-slate-600 font-medium">
              <span>Weight: 10%</span>
              <span>Slightly behind peers</span>
            </div>
          </div>
        </div>

        {/* Lower Row: Policy and Pathway */}
        <div className="lg:col-span-4 bg-white rounded-xl border border-[#E2E8F0] shadow-sm p-6 h-full flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-headline-md text-headline-md text-deep-navy">Policy Compliance</h3>
            <span className="material-symbols-outlined text-success-green">gavel</span>
          </div>
          <div className="flex-grow space-y-6">
            <div className="flex items-center justify-between">
              <span className="font-body-md text-slate-600">Terms of Service</span>
              <span className="material-symbols-outlined text-success-green" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-body-md text-slate-600">Identity Verification</span>
              <span className="material-symbols-outlined text-success-green" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-body-md text-slate-600">Anti-Fraud Protocols</span>
              <span className="material-symbols-outlined text-success-green" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
            </div>
            <div className="p-4 bg-slate-50 rounded-lg mt-4">
              <p className="font-label-sm text-slate-600 uppercase tracking-wide mb-1">Weight Impact</p>
              <p className="font-headline-md text-headline-md text-deep-navy">10% / 10%</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-8 bg-white rounded-xl border border-[#E2E8F0] shadow-sm overflow-hidden">
          <div className="p-6 border-b border-outline-variant bg-slate-50/50">
            <h3 className="font-headline-md text-headline-md text-deep-navy flex items-center gap-2">
              <span className="material-symbols-outlined text-trust-blue">trending_up</span>
              Improvement Pathway
            </h3>
          </div>
          <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex gap-4 p-4 border border-[#E2E8F0] rounded-lg hover:border-trust-blue transition-colors group">
              <div className="w-12 h-12 shrink-0 bg-safety-blue text-trust-blue flex items-center justify-center rounded-xl font-bold text-headline-md">1</div>
              <div>
                <h4 className="font-body-md font-bold text-deep-navy mb-1">Optimize Response Time</h4>
                <p className="font-body-sm text-slate-600">Reduce average response time to under 2 hours to boost satisfaction and delivery metrics.</p>
              </div>
            </div>
            <div className="flex gap-4 p-4 border border-[#E2E8F0] rounded-lg hover:border-trust-blue transition-colors group">
              <div className="w-12 h-12 shrink-0 bg-safety-blue text-trust-blue flex items-center justify-center rounded-xl font-bold text-headline-md">2</div>
              <div>
                <h4 className="font-body-md font-bold text-deep-navy mb-1">Shipping Logistics</h4>
                <p className="font-body-sm text-slate-600">Transition to "Verified Logistics" providers to eliminate 15% of current transit delays.</p>
              </div>
            </div>
            <div className="flex gap-4 p-4 border border-[#E2E8F0] rounded-lg hover:border-trust-blue transition-colors group">
              <div className="w-12 h-12 shrink-0 bg-safety-blue text-trust-blue flex items-center justify-center rounded-xl font-bold text-headline-md">3</div>
              <div>
                <h4 className="font-body-md font-bold text-deep-navy mb-1">Evidence Documentation</h4>
                <p className="font-body-sm text-slate-600">Upload clearer pre-shipping photos to reduce dispute durations by an estimated 24%.</p>
              </div>
            </div>
            <div className="flex gap-4 p-4 border border-trust-blue/20 bg-safety-blue/30 rounded-lg">
              <div className="w-12 h-12 shrink-0 bg-trust-blue text-white flex items-center justify-center rounded-xl">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
              </div>
              <div>
                <h4 className="font-body-md font-bold text-trust-blue mb-1">Projected Score</h4>
                <p className="font-body-sm text-slate-600">Completing these tasks will raise your reputation index to <strong className="text-deep-navy">92/100</strong>.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Visual Context Section */}
      <div className="mt-stack-lg bg-deep-navy rounded-2xl overflow-hidden relative min-h-[300px] flex items-center px-12 py-16">
        <div className="absolute inset-0 z-0">
          <img className="w-full h-full object-cover opacity-20 mix-blend-luminosity" src="https://lh3.googleusercontent.com/aida-public/AB6AXuChH2HgKcW-CG74nB0inQw3JwS5XIwU6gxi1X7ZnfA9z1YkiROZ7IHxywysIJ5cJzH9gT4gVm6afVO6awM1wkDCQImQlKmYIHhDJYi8pixE0uAnhBuRby90C_7_DnG-tgqBlmQdjWIFXuGFNtSHU-oYp-9j_IuPsh9cZ_YlcTNovM55V2lAyvukup2ggEiMTf2zknfcng9iD_yfn8onmzQrsAU_2y_YzEddS__mf23ap-Z9_GNkGL7i0lTlCR2Di8DS_KEvc0xHHi4"/>
        </div>
        <div className="relative z-10 max-w-2xl">
          <h2 className="font-headline-lg text-headline-lg text-white mb-4">Your Trust is Your Currency.</h2>
          <p className="font-body-lg text-body-lg text-slate-300 mb-8 leading-relaxed">The ShieldSecure Reputation Index is more than a number—it's a verifiable certificate of your professional integrity used by global marketplaces to unlock higher transaction limits.</p>
          <button className="bg-trust-blue text-white px-8 py-4 rounded-xl font-body-md font-bold hover:bg-primary transition-all flex items-center gap-2 group">
            Download Trust Certificate
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </button>
        </div>
      </div>
    </main>
  );
}
