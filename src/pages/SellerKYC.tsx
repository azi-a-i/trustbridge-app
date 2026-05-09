
import { useNavigate } from 'react-router-dom';

export default function SellerKYC() {
  const navigate = useNavigate();

  return (
    <main className="flex-grow w-full max-w-container-max mx-auto px-margin-mobile pt-stack-md pb-32">
      {/* Page Title & Guidance */}
      <div className="mb-stack-lg mt-8">
        <h1 className="font-headline-lg text-headline-lg text-deep-navy">Get Verified</h1>
        <p className="font-body-md text-body-md text-slate-600 mt-2">To start selling, we need to verify your business and personal identity.</p>
      </div>

      {/* Progress Stepper */}
      <div className="w-full mb-stack-lg bg-surface-container rounded-full h-2 relative">
        <div className="absolute top-0 left-0 bg-trust-blue h-full rounded-full transition-all duration-500" style={{ width: '33.33%' }}></div>
        <div className="flex justify-between mt-4">
          <div className="flex flex-col items-center">
            <span className="font-label-caps text-label-caps text-trust-blue">Business</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-label-caps text-label-caps text-on-surface-variant opacity-50">Owner</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-label-caps text-label-caps text-on-surface-variant opacity-50">Review</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-stack-lg">
        {/* Section: Business Identity */}
        <section className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <span className="material-symbols-outlined text-trust-blue">domain</span>
            <h2 className="font-headline-md text-headline-md text-deep-navy">Business Identity</h2>
          </div>

          <div className="space-y-6">
            <div className="flex flex-col gap-2">
              <label className="font-label-sm text-label-sm text-slate-900 px-1">Business Name</label>
              <input className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-trust-blue focus:ring-1 focus:ring-trust-blue outline-none text-body-md bg-white" placeholder="Legal Registered Name" type="text" />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-label-sm text-label-sm text-slate-900 px-1">CAC Registration Number</label>
              <input className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-trust-blue focus:ring-1 focus:ring-trust-blue outline-none text-body-md bg-white" placeholder="RC-1234567" type="text" />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-label-sm text-label-sm text-slate-900 px-1">CAC Certificate</label>
              <div className="border-2 border-dashed border-slate-200 rounded-lg p-8 flex flex-col items-center justify-center bg-slate-50 group hover:border-trust-blue transition-colors cursor-pointer">
                <span className="material-symbols-outlined text-4xl text-slate-400 group-hover:text-trust-blue mb-2">upload_file</span>
                <span className="font-label-sm text-label-sm text-slate-600">Upload PDF or high-quality JPG</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Owner Identity */}
        <section className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <span className="material-symbols-outlined text-trust-blue">badge</span>
            <h2 className="font-headline-md text-headline-md text-deep-navy">Owner Identity</h2>
          </div>

          <div className="space-y-6">
            <div className="flex flex-col gap-2">
              <label className="font-label-sm text-label-sm text-slate-900 px-1">ID Document Type</label>
              <div className="relative">
                <select className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-trust-blue focus:ring-1 focus:ring-trust-blue outline-none text-body-md bg-white appearance-none">
                  <option>National Identity Card (NIN)</option>
                  <option>International Passport</option>
                  <option>Voter's Card</option>
                  <option>Driver's License</option>
                </select>
                <span className="material-symbols-outlined absolute right-4 top-3 text-slate-400 pointer-events-none">keyboard_arrow_down</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label className="font-label-sm text-label-sm text-slate-900 px-1">Front of ID</label>
                <div className="aspect-[4/3] rounded-lg bg-safety-blue border border-dashed border-trust-blue/30 flex flex-col items-center justify-center p-4 relative overflow-hidden group cursor-pointer">
                  <span className="material-symbols-outlined text-trust-blue text-3xl mb-1 relative z-10">add_a_photo</span>
                  <span className="font-label-sm text-label-sm text-trust-blue relative z-10">Snap Front Photo</span>
                </div>
              </div>
              
              <div className="flex flex-col gap-2">
                <label className="font-label-sm text-label-sm text-slate-900 px-1">Back of ID</label>
                <div className="aspect-[4/3] rounded-lg bg-slate-50 border border-dashed border-slate-200 flex flex-col items-center justify-center p-4 group cursor-pointer">
                  <span className="material-symbols-outlined text-slate-400 text-3xl mb-1 group-hover:text-trust-blue transition-colors">add_a_photo</span>
                  <span className="font-label-sm text-label-sm text-slate-600">Snap Back Photo</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Indicator Chip */}
        <div className="flex justify-center mt-4">
          <div className="flex items-center gap-2 bg-success-green/10 text-success-green px-4 py-2 rounded-full border border-success-green/20">
            <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
            <span className="font-label-caps text-label-caps">Secure 256-bit Encryption</span>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="fixed bottom-[80px] left-0 w-full bg-white shadow-[0_-4px_6px_-1px_rgba(15,23,42,0.05)] border-t border-slate-100 px-margin-mobile py-4 z-40">
        <div className="max-w-container-max mx-auto flex flex-col gap-3">
          <button 
            onClick={() => navigate('/seller/dashboard')}
            className="w-full bg-trust-blue text-white py-4 rounded-xl font-body-md font-bold hover:bg-blue-700 active:scale-95 transition-all shadow-md"
          >
            Continue to Review
          </button>
        </div>
      </div>
    </main>
  );
}
