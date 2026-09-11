import { MapPin, Phone, Mail, Globe, ShieldCheck } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#012B14] text-slate-300 font-sans border-t-4 border-amber-500">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Col 1: Government Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#005C2B] rounded-full flex items-center justify-center text-white font-bold text-lg border border-amber-500">
                KNSG
              </div>
              <div>
                <h3 className="text-white font-bold text-base leading-tight">Ministry of Transport</h3>
                <p className="text-xs text-emerald-400 font-semibold uppercase">Kano State Government</p>
              </div>
            </div>
            <p className="text-xs leading-relaxed text-slate-400">
              Formulating transport policies, enforcing traffic standards through KAROTA, and providing modern urban transit solutions.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider border-b border-emerald-800 pb-2">
              Ministry Portals
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#" className="hover:text-amber-400 transition">KAROTA Traffic Division</a></li>
              <li><a href="#" className="hover:text-amber-400 transition">Commercial Permit Portal</a></li>
              <li><a href="#" className="hover:text-amber-400 transition">Motor Park Management</a></li>
              <li><a href="#" className="hover:text-amber-400 transition">Press Releases & News</a></li>
            </ul>
          </div>

          {/* Col 3: Public Services */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider border-b border-emerald-800 pb-2">
              Public Assistance
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#" className="hover:text-amber-400 transition">Verify Vehicle Permit</a></li>
              <li><a href="#" className="hover:text-amber-400 transition">Report Road Incident</a></li>
              <li><a href="#" className="hover:text-amber-400 transition">Traffic Rules & Guidelines</a></li>
              <li><a href="#" className="hover:text-amber-400 transition">Submit Public Feedback</a></li>
            </ul>
          </div>

          {/* Col 4: Official Address */}
          <div className="space-y-3 text-xs">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider border-b border-emerald-800 pb-2">
              Ministry Contact
            </h4>
            <div className="space-y-2.5 text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Club Road / Kofar Kabuga, Kano State, Nigeria</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span>+234 803 644 7258</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span>info@transport.kn.gov.ng</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-amber-400 shrink-0" />
                <span>transport.kn.gov.ng</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Accreditation Bar */}
        <div className="pt-8 border-t border-emerald-900/80 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Kano State Ministry of Transport. All rights reserved.</p>
          <div className="flex items-center gap-2 text-emerald-400 font-medium">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            Official State Government Web Infrastructure
          </div>
        </div>
      </div>
    </footer>
  );
}