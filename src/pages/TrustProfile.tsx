import { Link } from 'react-router-dom';

export default function TrustProfile() {
  return (
    <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mt-stack-md">
      {/* Header Section: Avatar & Branding */}
      <section className="flex flex-col items-center text-center py-stack-lg">
        <div className="relative mb-4">
          <div className="w-32 h-32 rounded-full border-4 border-surface shadow-md overflow-hidden bg-surface-container-high">
            <img alt="Adaeze" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCl7HNiMpUfRz3iKK1HEsbGVna6IDzbsg3YJ7TkH4Sx7jssqEoaE-Ig3g2DuzhR2d46GaTGV0BvXpAlmPNv_dVspHFyXBnNwaLS4DaNnuLAALig5TkuJScJb5j5sHEQi5DdDWEEHWBbxmQRhCl5bhrjXSBAxTDrEF3hwfV_CtdF0EdZG-pZrx3wNy0_B4J6k9sPhMkkYcSkigpkgko-PrmXqRirOoU5qxeEnFj9OzU5rSo058ihvAuPinMlaC57GmRwXULPkCOaHCE"/>
          </div>
          <div className="absolute bottom-1 right-1 bg-success-green text-on-primary p-1.5 rounded-full shadow-lg border-2 border-surface">
            <span className="material-symbols-outlined text-[18px] block" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
          </div>
        </div>
        <h1 className="font-headline-lg text-headline-lg text-deep-navy">Adaeze Fashion Store</h1>
        <div className="mt-2 inline-flex items-center gap-1.5 bg-safety-blue text-trust-blue px-4 py-1.5 rounded-full font-label-caps text-label-caps">
          <span className="material-symbols-outlined text-[16px]">security</span>
          VERIFIED TRUSTED SELLER
        </div>
      </section>

      {/* Trust Score Section (Bento Grid Style) */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-gutter mb-stack-lg">
        {/* Trust Score Card */}
        <div className="bg-white p-8 rounded-xl border border-outline-variant shadow-sm flex flex-col items-center justify-center">
          <p className="font-label-caps text-label-caps text-on-surface-variant mb-6">TRUSTBRIDGE TRUST SCORE</p>
          <div className="relative flex items-center justify-center">
            <div className="w-40 h-40 rounded-full trust-score-ring flex items-center justify-center">
              <div className="w-[140px] h-[140px] bg-white rounded-full flex flex-col items-center justify-center shadow-inner">
                <span className="font-headline-xl text-headline-xl text-trust-blue">85</span>
                <span className="font-label-sm text-label-sm text-on-surface-variant">Optimal</span>
              </div>
            </div>
          </div>
          <p className="mt-6 font-body-sm text-body-sm text-center text-on-surface-variant">TRUSTBRIDGE TRUST SCORE</p>
        </div>

        {/* Metrics Column */}
        <div className="grid grid-cols-1 gap-4">
          <div className="bg-white p-6 rounded-xl border border-outline-variant shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-surface-container-lowest flex items-center justify-center border border-outline-variant">
              <span className="material-symbols-outlined text-trust-blue">package_2</span>
            </div>
            <div>
              <p className="font-headline-md text-headline-md text-deep-navy">120+</p>
              <p className="font-body-sm text-body-sm text-on-surface-variant">Completed Orders</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-outline-variant shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-surface-container-lowest flex items-center justify-center border border-outline-variant">
              <span className="material-symbols-outlined text-alert-amber" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            </div>
            <div>
              <p className="font-headline-md text-headline-md text-deep-navy">4.8/5</p>
              <p className="font-body-sm text-body-sm text-on-surface-variant">Merchant Rating</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-outline-variant shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-surface-container-lowest flex items-center justify-center border border-outline-variant">
              <span className="material-symbols-outlined text-success-green">bolt</span>
            </div>
            <div>
              <p className="font-headline-md text-headline-md text-deep-navy">24hr</p>
              <p className="font-body-sm text-body-sm text-on-surface-variant">Avg. Dispatch Time</p>
            </div>
          </div>
        </div>
      </section>

      {/* Verification Dossier Section */}
      <section className="mb-stack-lg">
        <h2 className="font-headline-md text-headline-md text-deep-navy mb-gutter">Verification Dossier</h2>
        <div className="bg-white rounded-xl border border-outline-variant overflow-hidden shadow-sm">
          <div className="divide-y divide-outline-variant">
            <div className="p-5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">badge</span>
                <span className="font-body-md text-body-md font-semibold">Identity Verification</span>
              </div>
              <div className="flex items-center gap-2 text-success-green font-label-sm text-label-sm">
                <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                VERIFIED
              </div>
            </div>

            <div className="p-5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">domain</span>
                <span className="font-body-md text-body-md font-semibold">Business Registration</span>
              </div>
              <div className="flex items-center gap-2 text-success-green font-label-sm text-label-sm">
                <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                VERIFIED
              </div>
            </div>

            <div className="p-5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">location_on</span>
                <span className="font-body-md text-body-md font-semibold">Physical Address</span>
              </div>
              <div className="flex items-center gap-2 text-success-green font-label-sm text-label-sm">
                <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                VERIFIED
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Verified Reviews Section */}
      <section className="mb-stack-lg pb-32">
        <div className="flex justify-between items-center mb-gutter">
          <h2 className="font-headline-md text-headline-md text-deep-navy">Verified Reviews</h2>
          <button className="text-primary font-label-sm text-label-sm font-bold flex items-center gap-1">
            VIEW ALL
            <span className="material-symbols-outlined text-[18px]">chevron_right</span>
          </button>
        </div>

        <div className="space-y-4">
          <div className="bg-white p-6 rounded-xl border border-outline-variant shadow-sm">
            <div className="flex justify-between items-start mb-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary-fixed flex items-center justify-center text-on-primary-fixed text-[12px] font-bold">JD</div>
                <div>
                  <p className="font-body-sm text-body-sm font-bold">John Doe</p>
                  <p className="text-[10px] text-on-surface-variant uppercase tracking-wider">Verified Purchase</p>
                </div>
              </div>
              <div className="flex gap-0.5">
                {[1,2,3,4,5].map(i => (
                  <span key={i} className="material-symbols-outlined text-alert-amber text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                ))}
              </div>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant italic">"Excellent quality fabrics and lightning fast delivery. TrustBridge escrow made the payment completely stress-free."</p>
          </div>
        </div>
      </section>

      {/* Floating Action Button */}
      <div className="fixed bottom-24 left-0 right-0 px-margin-mobile z-40 pointer-events-none">
        <div className="max-w-container-max mx-auto flex justify-center pointer-events-auto">
          <Link to="/checkout" className="bg-trust-blue text-on-primary font-body-md font-bold px-8 py-4 rounded-full shadow-2xl flex items-center gap-3 active:scale-95 transition-all hover:brightness-110">
            <span className="material-symbols-outlined">account_balance_wallet</span>
            Pay via TrustBridge Escrow
          </Link>
        </div>
      </div>
    </main>
  );
}
