import { Shield, Bus, FileText, MapPin, ExternalLink, PhoneCall } from 'lucide-react';

const agencies = [
  {
    title: "KAROTA (Kano Road Traffic Agency)",
    icon: Shield,
    badge: "Traffic & Enforcement",
    description: "Enforcing road safety regulations, traffic flow management, and commercial vehicle compliance across metropolitan Kano.",
    links: ["Report Traffic Incident", "Check Fine Status", "Traffic Regulations"]
  },
  {
    title: "Commercial Transit & Motor Parks",
    icon: Bus,
    badge: "Logistics & Parks",
    description: "Management of interstate and intrastate motor parks, bus corridors, and tricycle (Keke) routing guidelines.",
    links: ["Motor Park Registry", "Route Approvals", "Operator Permits"]
  },
  {
    title: "Vehicle & Permit Licensing",
    icon: FileText,
    badge: "Digital Services",
    description: "Streamlined processing for commercial vehicle registration, driver permits, and transport operator accreditation.",
    links: ["Apply for Permit", "Verify License", "Fee Schedule"]
  }
];

export default function AgenciesSection() {
  return (
    <section id="agencies" className="py-16 md:py-24 bg-slate-50 px-4 md:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold text-[#005C2B] uppercase tracking-widest bg-emerald-100/70 px-3 py-1 rounded-full">
            Core Operations
          </span>
          <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900">
            Key Agencies & Public Services
          </h2>
          <p className="text-slate-600 text-sm md:text-base">
            Delivering organized transit systems, road safety enforcement, and digital licensing for the citizens of Kano State.
          </p>
        </div>

        {/* Agency Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {agencies.map((agency, index) => {
            const Icon = agency.icon;
            return (
              <div 
                key={index} 
                className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/80 hover:shadow-md transition flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-3 bg-emerald-50 text-[#005C2B] rounded-xl group-hover:bg-[#005C2B] group-hover:text-white transition">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-semibold text-amber-700 bg-amber-50 border border-amber-200 px-2.5 py-1 rounded-full">
                      {agency.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#005C2B] transition">
                    {agency.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed">
                    {agency.description}
                  </p>
                </div>

                {/* Quick Action Links */}
                <div className="mt-6 pt-4 border-t border-slate-100 space-y-2">
                  {agency.links.map((link, lIdx) => (
                    <a 
                      key={lIdx} 
                      href="#" 
                      className="flex items-center justify-between text-xs font-semibold text-slate-700 hover:text-[#005C2B] py-1 transition"
                    >
                      <span>{link}</span>
                      <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                    </a>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Emergency Assistance Callout */}
        <div className="bg-[#003D1C] text-white rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg">
          <div className="flex items-center gap-4">
            <div className="p-3.5 bg-amber-500 text-slate-950 rounded-xl shrink-0">
              <PhoneCall className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold">KAROTA Emergency Traffic Response</h4>
              <p className="text-emerald-200 text-xs md:text-sm">Need immediate road assistance or traffic incident reporting in Kano metropolis?</p>
            </div>
          </div>
          <a 
            href="tel:+2348036447258" 
            className="bg-white text-[#003D1C] hover:bg-emerald-50 font-bold px-6 py-3 rounded-xl text-sm whitespace-nowrap transition shadow-md"
          >
            Call Hotline: +234 803 644 7258
          </a>
        </div>

      </div>
    </section>
  );
}