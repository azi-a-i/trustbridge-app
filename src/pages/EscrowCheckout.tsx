import { Link } from 'react-router-dom';

export default function EscrowCheckout() {
  return (
    <main className="max-w-container-max mx-auto px-margin-mobile py-stack-lg pb-32">
      {/* Step Indicator */}
      <div className="mb-stack-lg flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-trust-blue text-on-primary flex items-center justify-center font-bold text-label-sm">3</div>
          <div>
            <p className="font-label-caps text-label-caps text-on-surface-variant">STEP 3 OF 3</p>
            <h1 className="font-headline-md text-headline-md text-deep-navy">Secure Checkout</h1>
          </div>
        </div>
        <button className="text-on-surface-variant flex items-center gap-1 hover:text-primary transition-colors">
          <span className="material-symbols-outlined">close</span>
        </button>
      </div>

      {/* Escrow Trust Banner */}
      <section className="bg-trust-blue rounded-xl p-6 mb-stack-lg shadow-sm overflow-hidden relative">
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-2">
            <span className="material-symbols-outlined text-white" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
            <span className="font-label-caps text-label-caps text-white opacity-90">SECURE ESCROW PAYMENT</span>
          </div>
          <h2 className="font-headline-lg text-headline-lg text-white mb-2">Your N15,000 is safe</h2>
          <p className="font-body-md text-body-md text-white opacity-80 leading-relaxed">
            TrustBridge holds your funds in a secure vault. We only release payment to Adaeze Fashion Store once you confirm the Ankara Maxi Dress has arrived and meets your expectations.
          </p>
        </div>
        {/* Decorative Shield Pattern */}
        <div className="absolute -right-8 -bottom-8 opacity-10">
          <span className="material-symbols-outlined text-[160px] text-white">shield</span>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
        {/* Left Column: Payment & Methods */}
        <div className="md:col-span-7 space-y-stack-lg">
          {/* Payment Method Selection */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
            <h3 className="font-headline-md text-headline-md text-deep-navy mb-stack-md">Payment Method</h3>
            <div className="space-y-4">
              
              {/* Card Option */}
              <label className="flex items-center justify-between p-4 border-2 border-primary bg-safety-blue rounded-xl cursor-pointer group transition-all">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <span className="material-symbols-outlined text-trust-blue">credit_card</span>
                  </div>
                  <div>
                    <p className="font-body-md font-bold text-deep-navy">Pay with Card</p>
                    <p className="font-body-sm text-on-surface-variant">Visa, Mastercard, Verve</p>
                  </div>
                </div>
                <div className="w-6 h-6 rounded-full border-2 border-primary flex items-center justify-center">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                </div>
                <input defaultChecked className="hidden" name="payment" type="radio"/>
              </label>

              {/* Bank Transfer Option */}
              <label className="flex items-center justify-between p-4 border border-slate-200 rounded-xl cursor-pointer hover:border-outline transition-all group">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center">
                    <span className="material-symbols-outlined text-on-surface-variant">account_balance</span>
                  </div>
                  <div>
                    <p className="font-body-md font-bold text-on-surface">Bank Transfer</p>
                    <p className="font-body-sm text-on-surface-variant">Instant confirmation</p>
                  </div>
                </div>
                <div className="w-6 h-6 rounded-full border-2 border-slate-200"></div>
                <input className="hidden" name="payment" type="radio"/>
              </label>

              {/* USSD Option */}
              <label className="flex items-center justify-between p-4 border border-slate-200 rounded-xl cursor-pointer hover:border-outline transition-all group">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center">
                    <span className="material-symbols-outlined text-on-surface-variant">dialpad</span>
                  </div>
                  <div>
                    <p className="font-body-md font-bold text-on-surface">Pay with USSD</p>
                    <p className="font-body-sm text-on-surface-variant">Dial code from your mobile</p>
                  </div>
                </div>
                <div className="w-6 h-6 rounded-full border-2 border-slate-200"></div>
                <input className="hidden" name="payment" type="radio"/>
              </label>

            </div>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-stack-lg py-4 border-y border-slate-200">
            <div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all cursor-default">
              <span className="material-symbols-outlined text-success-green">security_update_good</span>
              <span className="font-label-caps text-label-caps text-on-surface-variant">PCI-DSS Compliant</span>
            </div>
            <div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all cursor-default">
              <span className="material-symbols-outlined text-trust-blue">gpp_good</span>
              <span className="font-label-caps text-label-caps text-on-surface-variant">Secured by TrustBridge</span>
            </div>
          </div>

        </div>

        {/* Right Column: Order Summary */}
        <div className="md:col-span-5">
          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm sticky top-24">
            <h3 className="font-headline-md text-headline-md text-deep-navy mb-stack-md">Order Summary</h3>
            
            {/* Product Card */}
            <div className="flex gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100 mb-stack-md">
              <img alt="Ankara Maxi Dress" className="w-20 h-20 object-cover rounded-lg shadow-sm" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZNaNfVDwVHbwv85lwLFkzYKc2vIExtkZnYSLzhGWknBMi1urWiEifh5GaWuJb142jh2ntO7Bh1lGwPYfuDr-c7rk33ZkFbOgr22EcyZd-kit3Sr-Of9wD_lC675aNrSPEzp0kGNkUIYpRkju_tQds77jlBqKmUPS4GqqgnZPsveDvNLdcGxunguA2V8XWr6jH_jBCjCMhH-Af2YXnerW8gopbnw2vLVuvRFaXc46WExMvDqw-lIkSNg6uRMVI7aWnfJCagrpKcmE"/>
              <div className="flex flex-col justify-center">
                <p className="font-body-md font-bold text-deep-navy">Ankara Maxi Dress</p>
                <p className="font-body-sm text-on-surface-variant">Adaeze Fashion Store</p>
                <div className="mt-1 flex items-center gap-1">
                  <span className="material-symbols-outlined text-success-green text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                  <span className="text-xs font-medium text-success-green">Verified Merchant</span>
                </div>
              </div>
            </div>

            {/* Price Breakdown */}
            <div className="space-y-3 mb-6">
              <div className="flex justify-between items-center text-on-surface-variant">
                <span className="font-body-md">Subtotal</span>
                <span className="font-body-md">N14,000</span>
              </div>
              <div className="flex justify-between items-center text-on-surface-variant">
                <span className="font-body-md">Shipping</span>
                <span className="font-body-md">N1,000</span>
              </div>
              <div className="flex justify-between items-center text-on-surface-variant">
                <span className="font-body-md">Escrow Fee</span>
                <span className="font-body-md text-success-green font-bold">FREE</span>
              </div>
              <div className="pt-3 border-t border-slate-200 flex justify-between items-center">
                <span className="font-headline-md text-headline-md text-deep-navy">Total</span>
                <span className="font-headline-md text-headline-md text-deep-navy">N15,000</span>
              </div>
            </div>

            {/* Trust Message */}
            <div className="bg-safety-blue p-4 rounded-lg flex gap-3 items-start border border-blue-100 mb-stack-md">
              <span className="material-symbols-outlined text-trust-blue">info</span>
              <p className="font-body-sm text-on-secondary-container">Your payment is protected. Adaeze Fashion Store will not receive funds until you confirm delivery.</p>
            </div>

            {/* Desktop CTA */}
            <Link to="/order-complete" className="hidden md:block text-center w-full bg-primary text-on-primary py-4 rounded-xl font-bold font-body-md shadow-md hover:bg-on-primary-fixed-variant active:scale-[0.98] transition-all">
              Fund Escrow & Order
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Sticky CTA */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-white p-margin-mobile border-t border-slate-200 z-50">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="font-label-caps text-label-caps text-on-surface-variant">TOTAL PAYABLE</p>
            <p className="font-headline-md text-headline-md text-deep-navy">N15,000</p>
          </div>
          <div className="flex items-center gap-1 text-success-green">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>lock</span>
            <span className="font-label-sm">Secured</span>
          </div>
        </div>
        <Link to="/order-complete" className="w-full bg-primary text-on-primary py-4 rounded-xl font-bold font-body-md shadow-md active:scale-95 transition-transform flex items-center justify-center gap-2">
          <span className="material-symbols-outlined">shield_with_heart</span>
          Fund Escrow & Order
        </Link>
      </div>
    </main>
  );
}
