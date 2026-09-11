import { Target, Eye, Shield, Users, Landmark } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-slate-50 px-4 md:px-8 border-b border-slate-200">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold text-[#005C2B] uppercase tracking-widest bg-emerald-100/80 px-3 py-1 rounded-full border border-emerald-200">
            Institutional Profile
          </span>
          <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900">
            About the Ministry of Transportation
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            The Kano State Ministry of Transportation is tasked with the formulation, implementation, and monitoring of policies governing road, air, and rail transport infrastructure across Kano State.
          </p>
        </div>

        {/* Mission, Vision & Mandate Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Mission Card */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4 hover:shadow-md transition">
            <div className="w-12 h-12 bg-emerald-50 text-[#005C2B] rounded-xl flex items-center justify-center">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Our Mission</h3>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
              To establish a safe, reliable, accessible, and integrated multi-modal transport network that drives economic growth and seamless mobility across all 44 LGAs.
            </p>
          </div>

          {/* Vision Card */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4 hover:shadow-md transition">
            <div className="w-12 h-12 bg-amber-50 text-amber-700 rounded-xl flex items-center justify-center">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Our Vision</h3>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
              To make Kano State a model for modern urban transit, smart traffic enforcement through KAROTA, and innovative transport logistics in West Africa.
            </p>
          </div>

          {/* Core Core Mandate Card */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4 hover:shadow-md transition">
            <div className="w-12 h-12 bg-emerald-50 text-[#005C2B] rounded-xl flex items-center justify-center">
              <Landmark className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Core Mandate</h3>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
              Regulating commercial transport operators, overseeing motor park operations, enforcing vehicle roadworthiness, and modernizing state transport infrastructure.
            </p>
          </div>

        </div>

        {/* Strategic Pillars Summary */}
        <div className="bg-[#003D1C] text-white rounded-3xl p-8 md:p-10 shadow-xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="space-y-1">
            <span className="text-amber-400 font-extrabold text-2xl">01</span>
            <h4 className="font-bold text-sm">Policy Formulation</h4>
            <p className="text-xs text-emerald-200">Developing modern framework for urban transit.</p>
          </div>
          <div className="space-y-1">
            <span className="text-amber-400 font-extrabold text-2xl">02</span>
            <h4 className="font-bold text-sm">Traffic Safety</h4>
            <p className="text-xs text-emerald-200">Enforcing traffic rules via KAROTA officers.</p>
          </div>
          <div className="space-y-1">
            <span className="text-amber-400 font-extrabold text-2xl">03</span>
            <h4 className="font-bold text-sm">Logistics & Parks</h4>
            <p className="text-xs text-emerald-200">Regulating state motor parks and transit routes.</p>
          </div>
          <div className="space-y-1">
            <span className="text-amber-400 font-extrabold text-2xl">04</span>
            <h4 className="font-bold text-sm">Digital Licensing</h4>
            <p className="text-xs text-emerald-200">Digitizing driver permits and operator badges.</p>
          </div>
        </div>

      </div>
    </section>
  );
}