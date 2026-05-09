import { Link } from 'react-router-dom';

export default function OrderComplete() {
  return (
    <main className="w-full max-w-[480px] mx-auto px-margin-mobile pt-stack-lg pb-stack-lg flex-1 flex flex-col items-center">
      {/* Success Indicator Section */}
      <div className="flex flex-col items-center text-center mb-stack-lg">
        <div className="w-20 h-20 rounded-full bg-success-green/10 flex items-center justify-center mb-stack-md">
          <span className="material-symbols-outlined text-[48px] text-success-green" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
        </div>
        <h1 className="font-headline-lg text-headline-lg text-deep-navy mb-stack-sm">Order Secured</h1>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-[280px]">
          Your payment of <span className="font-bold text-deep-navy">N15,000</span> is now held in escrow.
        </p>
      </div>

      {/* The Order Summary Card (The Shield) */}
      <div className="w-full bg-surface-container-lowest rounded-xl p-stack-md mb-stack-lg border border-slate-200 shadow-sm">
        <div className="flex justify-between items-start mb-stack-md">
          <div className="flex flex-col">
            <span className="font-label-caps text-label-caps text-on-surface-variant mb-1">TRANSACTION ID</span>
            <span className="font-body-md text-body-md font-bold text-deep-navy uppercase">TXN-78291044</span>
          </div>
          <div className="bg-safety-blue px-3 py-1.5 rounded-full flex items-center gap-1.5">
            <span className="material-symbols-outlined text-trust-blue text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
            <span className="font-label-caps text-label-caps text-trust-blue">SAFE & SECURE</span>
          </div>
        </div>

        <div className="flex gap-4 items-center py-stack-md border-t border-slate-100 border-b">
          <div className="w-16 h-16 rounded-lg bg-slate-100 overflow-hidden flex-shrink-0">
            <img alt="Ankara Maxi Dress" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMZdAwvygmHQcfb_kB9lYNN0SbARisARH0Vht4Q6l_58kGwH22peyBvIBIpHWxxy6bRwX0pkZ2z0VMz-h6XCb6hb9CRC5q0AqpYLILPBLzv6JGkIOC9Nd_-LPc48b-KXV-QPaKyHE2kJKDdG9QATMLfpS-jTzGs4fiXS0rDMxrBZEGGrpsOjM-4L6vNh6yCBTm1QNQK0uimlV295OLOG2ZY2NVYjBIJrt9R7wartwPvo-xfGvL5iWPVKg7BoZ8NjuhB61jEyOqbPI"/>
          </div>
          <div className="flex flex-col">
            <h3 className="font-body-md text-body-md font-bold text-deep-navy">Ankara Maxi Dress</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant">Size: M | Color: Royal Blue</p>
            <span className="font-body-md text-body-md font-bold text-trust-blue mt-1">N15,000</span>
          </div>
        </div>

        <div className="pt-stack-md flex items-start gap-2">
          <span className="material-symbols-outlined text-on-surface-variant text-[18px] mt-0.5">info</span>
          <p className="font-body-sm text-body-sm text-on-surface-variant italic leading-tight">
            You can release funds once you confirm delivery.
          </p>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="w-full flex flex-col gap-stack-md mt-auto">
        <button className="w-full py-4 bg-trust-blue text-on-primary font-body-md font-bold rounded-lg active:scale-95 transition-transform duration-200 flex items-center justify-center gap-2">
          <span className="material-symbols-outlined text-[20px]">local_shipping</span>
          Track Order
        </button>
        <Link to="/" className="w-full py-4 bg-transparent border-2 border-slate-200 text-deep-navy font-body-md font-bold rounded-lg active:scale-95 transition-transform duration-200 hover:bg-slate-50 flex items-center justify-center">
          Back to Home
        </Link>
      </div>

      {/* Trust Signals Footer */}
      <div className="mt-stack-lg flex items-center justify-center gap-4 py-stack-md opacity-60">
        <div className="flex items-center gap-1.5">
          <span className="material-symbols-outlined text-[16px]">shield_lock</span>
          <span className="font-label-caps text-label-caps uppercase">Escrow Protection</span>
        </div>
        <div className="w-1 h-1 bg-on-surface-variant rounded-full"></div>
        <div className="flex items-center gap-1.5">
          <span className="material-symbols-outlined text-[16px]">lock_clock</span>
          <span className="font-label-caps text-label-caps uppercase">Secure Payment</span>
        </div>
      </div>
    </main>
  );
}
