import { Link } from 'react-router-dom';

export default function StoreDiscovery() {
  return (
    <main className="max-w-container-max mx-auto pb-24 md:pb-8">
      {/* Search Section */}
      <section className="px-margin-mobile pt-stack-md">
        <div className="relative group">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-outline">
            <span className="material-symbols-outlined">search</span>
          </div>
          <input 
            className="w-full bg-surface border-slate-200 border-2 rounded-xl py-4 pl-12 pr-4 focus:border-trust-blue focus:ring-0 text-slate-900 transition-all placeholder:text-outline" 
            placeholder="Search verified stores..." 
            type="text"
          />
          <div className="absolute inset-y-0 right-4 flex items-center">
            <button className="material-symbols-outlined text-trust-blue">tune</button>
          </div>
        </div>
      </section>

      {/* Category Chips */}
      <section className="px-margin-mobile py-stack-md overflow-x-auto whitespace-nowrap flex gap-stack-sm" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        <button className="px-6 py-2 rounded-full bg-primary text-on-primary font-label-caps text-label-caps">All</button>
        <button className="px-6 py-2 rounded-full bg-surface border border-outline-variant text-on-surface-variant font-label-caps text-label-caps hover:bg-surface-container-low transition-colors">Fashion</button>
        <button className="px-6 py-2 rounded-full bg-surface border border-outline-variant text-on-surface-variant font-label-caps text-label-caps hover:bg-surface-container-low transition-colors">Electronics</button>
        <button className="px-6 py-2 rounded-full bg-surface border border-outline-variant text-on-surface-variant font-label-caps text-label-caps hover:bg-surface-container-low transition-colors">Beauty</button>
        <button className="px-6 py-2 rounded-full bg-surface border border-outline-variant text-on-surface-variant font-label-caps text-label-caps hover:bg-surface-container-low transition-colors">Home</button>
      </section>

      {/* Active Filters */}
      <section className="px-margin-mobile flex flex-wrap gap-2 pb-stack-md">
        <div className="flex items-center gap-1 bg-success-green/10 text-success-green px-3 py-1 rounded-lg border border-success-green/20">
          <span className="font-label-caps text-label-caps">Verified Only</span>
          <span className="material-symbols-outlined text-[16px] leading-none cursor-pointer">close</span>
        </div>
        <div className="flex items-center gap-1 bg-trust-blue/10 text-trust-blue px-3 py-1 rounded-lg border border-trust-blue/20">
          <span className="font-label-caps text-label-caps">Min Trust Score 70+</span>
          <span className="material-symbols-outlined text-[16px] leading-none cursor-pointer">close</span>
        </div>
      </section>

      {/* Store List */}
      <section className="px-margin-mobile space-y-stack-md">
        
        {/* Store Card 1 */}
        <Link to="/profile/luxe-threads" className="block bg-surface rounded-xl border border-outline-variant p-4 flex flex-col gap-4 shadow-[0_4px_6px_-1px_rgba(15,23,42,0.02)] transition-transform active:scale-[0.98]">
          <div className="flex items-start justify-between">
            <div className="flex gap-4">
              <div className="w-16 h-16 rounded-xl overflow-hidden bg-surface-container-high shrink-0">
                <img alt="Luxe Threads Storefront" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuArCjlSMK7Jpr1Owa7I8l06ghSAJdzuTRLN_zYdbFUu_qx-am8AdhBNc2YY3I_ppRsjrMxFh_OdrfrTjWKjQfNGMVT4iyO9MTx8DJJUGjLiyBEDkZ5aAdf3eV-CF1P2lYdE0qaQ_QvLW46IlMlV-nxmxZcBC36huk0JWz0Mjl3rJePDP53QNbxvrXutoawsl0FZgOjRfxRCIV6IVJdybhBv3NVUMPjyHV6-0zlRPDmVazP_1j7UDXcILI7FHpkCPy2eWyfEpIXNrkc"/>
              </div>
              <div>
                <h3 className="font-headline-md text-slate-900">Luxe Threads</h3>
                <div className="flex items-center gap-1 text-slate-600 font-body-sm">
                  <span className="material-symbols-outlined text-[16px]">location_on</span>
                  New York, NY
                </div>
              </div>
            </div>
            <div className="bg-primary/10 text-primary px-3 py-1.5 rounded-lg flex flex-col items-center border border-primary/20">
              <span className="font-bold text-headline-md leading-none">92</span>
              <span className="font-label-caps text-[10px] uppercase">Elite</span>
            </div>
          </div>
          <div className="flex gap-2">
            <span className="bg-surface-container text-on-surface-variant font-label-caps text-[10px] px-2 py-0.5 rounded">FASHION</span>
            <span className="bg-surface-container text-on-surface-variant font-label-caps text-[10px] px-2 py-0.5 rounded">LUXURY</span>
            <span className="bg-success-green/10 text-success-green font-label-caps text-[10px] px-2 py-0.5 rounded flex items-center gap-1">
              <span className="material-symbols-outlined text-[12px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
              ESCROW ACTIVE
            </span>
          </div>
        </Link>

        {/* Store Card 2 */}
        <Link to="/profile/adaeze" className="block bg-surface rounded-xl border border-outline-variant p-4 flex flex-col gap-4 shadow-[0_4px_6px_-1px_rgba(15,23,42,0.02)] transition-transform active:scale-[0.98]">
          <div className="flex items-start justify-between">
            <div className="flex gap-4">
              <div className="w-16 h-16 rounded-xl overflow-hidden bg-surface-container-high shrink-0">
                <img alt="Adaeze Fashion Store" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCl7HNiMpUfRz3iKK1HEsbGVna6IDzbsg3YJ7TkH4Sx7jssqEoaE-Ig3g2DuzhR2d46GaTGV0BvXpAlmPNv_dVspHFyXBnNwaLS4DaNnuLAALig5TkuJScJb5j5sHEQi5DdDWEEHWBbxmQRhCl5bhrjXSBAxTDrEF3hwfV_CtdF0EdZG-pZrx3wNy0_B4J6k9sPhMkkYcSkigpkgko-PrmXqRirOoU5qxeEnFj9OzU5rSo058ihvAuPinMlaC57GmRwXULPkCOaHCE"/>
              </div>
              <div>
                <h3 className="font-headline-md text-slate-900">Adaeze Fashion</h3>
                <div className="flex items-center gap-1 text-slate-600 font-body-sm">
                  <span className="material-symbols-outlined text-[16px]">location_on</span>
                  Lagos, Nigeria
                </div>
              </div>
            </div>
            <div className="bg-primary/10 text-primary px-3 py-1.5 rounded-lg flex flex-col items-center border border-primary/20">
              <span className="font-bold text-headline-md leading-none">85</span>
              <span className="font-label-caps text-[10px] uppercase">Verified</span>
            </div>
          </div>
          <div className="flex gap-2">
            <span className="bg-surface-container text-on-surface-variant font-label-caps text-[10px] px-2 py-0.5 rounded">FASHION</span>
            <span className="bg-success-green/10 text-success-green font-label-caps text-[10px] px-2 py-0.5 rounded flex items-center gap-1">
              <span className="material-symbols-outlined text-[12px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
              TRUSTED SELLER
            </span>
          </div>
        </Link>

        {/* Call to action */}
        <div className="bg-slate-900 text-white rounded-xl p-6 flex flex-col justify-center items-center gap-4 text-center shadow-lg">
          <span className="material-symbols-outlined text-4xl text-primary-fixed">verified_user</span>
          <div>
            <h3 className="font-headline-md text-white mb-2">Want to list your store?</h3>
            <p className="text-slate-400 font-body-sm">Pass our 12-point security check to get the TrustBridge verified badge today.</p>
          </div>
          <button className="bg-trust-blue text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors">Start Verification</button>
        </div>

      </section>
    </main>
  );
}
