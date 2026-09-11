// src/components/ProjectsSection.tsx
import { MapPin, Calendar, ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: "Kano Bus Rapid Transit (BRT) Corridor Upgrade",
    location: "Kano Metropolis",
    status: "Ongoing",
    completion: "75%",
    desc: "Modernization of designated transit lanes and installation of solar-powered terminal shelters."
  },
  {
    title: "KAROTA Smart Traffic Light Automation",
    location: "Major Junctions (Zaria Rd & Katsina Rd)",
    status: "Phase 1 Complete",
    completion: "100%",
    desc: "Installation of automated traffic management sensors to reduce gridlock during peak hours."
  },
  {
    title: "Interstate Motor Park Digitalization & Security",
    location: "Kano Central Parks",
    status: "In Progress",
    completion: "40%",
    desc: "Deploying digital ticketing kiosks and passenger manifest verification systems."
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-16 md:py-24 bg-white px-4 md:px-8 border-t border-slate-100">
      <div className="max-w-7xl mx-auto space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold text-[#005C2B] uppercase tracking-widest bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              State Infrastructure
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mt-2">
              Key Transport Initiatives & Projects
            </h2>
          </div>
          <p className="text-slate-500 text-sm max-w-md">
            Tracking major ongoing developments and transit modernization programs across Kano State.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((proj, idx) => (
            <div key={idx} className="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-emerald-500 transition shadow-sm space-y-4">
              <div className="flex justify-between items-center">
                <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                  proj.completion === "100%" ? "bg-emerald-100 text-emerald-800" : "bg-amber-100 text-amber-800"
                }`}>
                  {proj.status}
                </span>
                <span className="text-xs font-bold text-slate-500">{proj.completion}</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900">{proj.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{proj.desc}</p>
              <div className="pt-2 flex items-center text-xs font-medium text-slate-500 gap-1">
                <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                {proj.location}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}