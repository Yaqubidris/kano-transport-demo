import { ShieldCheck, Bus, Car, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-[#003D1C] via-[#005C2B] to-[#012B14] text-white py-16 md:py-24 px-4 md:px-8 overflow-hidden">
      {/* Background Decorative Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Headline & Pitch */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 bg-emerald-800/80 border border-emerald-600/50 text-emerald-200 text-xs font-semibold px-3 py-1.5 rounded-full backdrop-blur-md">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              Official State Transport Portal
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-white">
              Transforming Kano State’s Transport & Infrastructure System
            </h1>

            <p className="text-emerald-100/90 text-base md:text-lg max-w-2xl font-normal leading-relaxed">
              Driving sustainable mobility, regulating road safety through KAROTA, and delivering modern public transit solutions across all 44 Local Government Areas.
            </p>

            {/* CTA Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#services"
                className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-6 py-3.5 rounded-lg shadow-lg hover:shadow-xl transition flex items-center gap-2 text-sm md:text-base"
              >
                Access Transport Services
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#agencies"
                className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-medium px-6 py-3.5 rounded-lg backdrop-blur-md transition text-sm md:text-base"
              >
                Explore Agencies & KAROTA
              </a>
            </div>
          </div>

          {/* Quick Action Widget Card */}
          <div className="lg:col-span-5 bg-white text-slate-900 rounded-2xl p-6 md:p-8 shadow-2xl border border-emerald-100">
            <h3 className="text-lg font-bold text-slate-900 mb-1">
              Public Service Quick Access
            </h3>
            <p className="text-xs text-slate-500 mb-6">
              Select a service below to initiate online processing or verification.
            </p>

            <div className="space-y-3">
              <button className="w-full flex items-center justify-between p-3.5 bg-slate-50 hover:bg-emerald-50/60 border border-slate-200 hover:border-emerald-300 rounded-xl transition text-left group">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-emerald-100 text-[#005C2B] rounded-lg group-hover:bg-[#005C2B] group-hover:text-white transition">
                    <Car className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-sm font-bold block text-slate-800">Commercial Drivers License / Permit</span>
                    <span className="text-xs text-slate-500">Apply or renew driver credentials</span>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#005C2B] transition" />
              </button>

              <button className="w-full flex items-center justify-between p-3.5 bg-slate-50 hover:bg-emerald-50/60 border border-slate-200 hover:border-emerald-300 rounded-xl transition text-left group">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-emerald-100 text-[#005C2B] rounded-lg group-hover:bg-[#005C2B] group-hover:text-white transition">
                    <Bus className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-sm font-bold block text-slate-800">Motor Park & Bus Routing</span>
                    <span className="text-xs text-slate-500">Registration for intra & interstate routes</span>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#005C2B] transition" />
              </button>
            </div>
          </div>

        </div>

        {/* Quick Stats Counter Bar */}
        <div className="mt-16 pt-8 border-t border-emerald-700/60 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <span className="block text-2xl md:text-3xl font-extrabold text-amber-400">44</span>
            <span className="text-xs text-emerald-200 uppercase tracking-wider font-medium">LGAs Covered</span>
          </div>
          <div>
            <span className="block text-2xl md:text-3xl font-extrabold text-white">KAROTA</span>
            <span className="text-xs text-emerald-200 uppercase tracking-wider font-medium">Active Traffic Control</span>
          </div>
          <div>
            <span className="block text-2xl md:text-3xl font-extrabold text-amber-400">100%</span>
            <span className="text-xs text-emerald-200 uppercase tracking-wider font-medium">Digital Verification Focus</span>
          </div>
          <div>
            <span className="block text-2xl md:text-3xl font-extrabold text-white">24/7</span>
            <span className="text-xs text-emerald-200 uppercase tracking-wider font-medium">Public Transport Support</span>
          </div>
        </div>

      </div>
    </section>
  );
}