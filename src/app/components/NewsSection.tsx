// src/components/NewsSection.tsx
import { Calendar, ArrowRight } from 'lucide-react';

const newsItems = [
  {
    date: "September 08, 2026",
    category: "Press Release",
    title: "Ministry Announces New Traffic Flow Regulations along Zaria Road Flyover Corridor",
    summary: "New peak-hour driving guidelines introduced to alleviate commercial congestion."
  },
  {
    date: "August 28, 2026",
    category: "KAROTA Advisory",
    title: "KAROTA Commences Routine Compliance Verification for Commercial Tricycles",
    summary: "Operators are advised to complete registration and ensure all safety permits are up to date."
  },
  {
    date: "August 15, 2026",
    category: "Project Update",
    title: "Kano State Executive Council Approves Terminal Upgrades for Interstate Parks",
    summary: "Strategic funding approved for modernizing passenger waiting areas and digital manifests."
  }
];

export default function NewsSection() {
  return (
    <section id="news" className="py-16 md:py-24 bg-slate-50 px-4 md:px-8">
      <div className="max-w-7xl mx-auto space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold text-amber-700 uppercase tracking-widest bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
            Public Updates
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">
            News & Official Announcements
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {newsItems.map((item, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-md transition space-y-3">
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span className="font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">{item.category}</span>
                <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {item.date}</span>
              </div>
              <h3 className="text-base font-bold text-slate-900 leading-snug">{item.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{item.summary}</p>
              <a href="#" className="inline-flex items-center gap-1 text-xs font-bold text-[#005C2B] hover:underline pt-2">
                Read Full Release <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}