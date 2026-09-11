"use client";

import { Send } from 'lucide-react';

export default function FeedbackSection() {
  return (
    <section className="py-16 bg-[#003D1C] text-white px-4 md:px-8">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h2 className="text-2xl md:text-3xl font-extrabold">Public Feedback & Traffic Complaints</h2>
        <p className="text-emerald-100 text-sm max-w-xl mx-auto">
          Citizens can directly submit reports, feedback on road conditions, or KAROTA traffic assistance requests online.
        </p>

        <form onSubmit={(e) => e.preventDefault()} className="grid grid-cols-1 md:grid-cols-3 gap-3 text-slate-900 text-sm">
          <input type="text" placeholder="Your Name" className="p-3.5 rounded-xl bg-white focus:outline-none" />
          <input type="email" placeholder="Phone / Email" className="p-3.5 rounded-xl bg-white focus:outline-none" />
          <button className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold p-3.5 rounded-xl transition flex items-center justify-center gap-2">
            Submit Feedback <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </section>
  );
}