import Image from 'next/image';
import { Quote, Award, CheckCircle2 } from 'lucide-react';

export default function CommissionerSection() {
  return (
    <section className="py-16 md:py-24 bg-white px-4 md:px-8 border-b border-slate-200">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-emerald-50 via-slate-50 to-amber-50/40 rounded-3xl p-8 md:p-12 border border-emerald-100 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Expanded & Enlarged Commissioner Portrait Column */}
          <div className="lg:col-span-5 flex flex-col items-center text-center">
            <div className="relative group w-full max-w-sm flex justify-center">
              {/* Outer Decorative Ring Frame */}
              <div className="relative w-72 h-80 sm:w-80 sm:h-96 rounded-3xl p-2 bg-gradient-to-b from-amber-400 via-emerald-600 to-[#005C2B] shadow-2xl">
                <div className="w-full h-full rounded-2xl overflow-hidden relative bg-slate-100 border-2 border-white">
                  <Image
                    src="/commissioner.jpg" // Ensure your file in /public is named commissioner.jpg
                    alt="Hon. Barr. Haruna Isa Dederi, Commissioner for Transportation, Kano State"
                    fill
                    className="object-cover object-top hover:scale-105 transition-transform duration-500"
                    priority
                  />
                </div>
              </div>

              {/* Elevated Badge Overlay */}
              <div className="absolute -bottom-4 bg-[#005C2B] text-white px-4 py-2.5 rounded-2xl shadow-xl border-2 border-amber-400 flex items-center gap-2">
                <Award className="w-5 h-5 text-amber-400 shrink-0" />
                <span className="text-xs font-bold tracking-wide uppercase">Executive Leadership</span>
              </div>
            </div>

            <div className="mt-8 space-y-1">
              <h3 className="text-xl md:text-2xl font-extrabold text-slate-900">
                Hon. Barr. Haruna Isa Dederi
              </h3>
              <p className="text-xs md:text-sm font-bold text-[#005C2B] uppercase tracking-wider">
                Honorable Commissioner for Transportation
              </p>
            </div>
          </div>

          {/* Statement & Strategic Objectives Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 text-[#005C2B] font-bold text-xs uppercase tracking-widest">
              <Quote className="w-4 h-4 text-amber-500" />
              Leadership Vision & Message
            </div>

            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 leading-snug">
              "Building an Efficient, Secure, and Technology-Driven Transport Infrastructure for Kano Citizens"
            </h2>

            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              Under the leadership of Hon. Barr. Haruna Isa Dederi and the Kano State Executive Council, the Ministry of Transportation is committed to modernizing road networks, enhancing commercial traffic safety, and implementing digital transport licensing for seamless urban transit.
            </p>

            {/* Priority Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="flex items-center gap-2.5 text-sm font-semibold text-slate-800 bg-white/80 p-2.5 rounded-xl border border-emerald-100/80 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                Integrated KAROTA Traffic Management
              </div>
              <div className="flex items-center gap-2.5 text-sm font-semibold text-slate-800 bg-white/80 p-2.5 rounded-xl border border-emerald-100/80 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                Digital Commercial Permit System
              </div>
              <div className="flex items-center gap-2.5 text-sm font-semibold text-slate-800 bg-white/80 p-2.5 rounded-xl border border-emerald-100/80 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                Interstate Motor Park Modernization
              </div>
              <div className="flex items-center gap-2.5 text-sm font-semibold text-slate-800 bg-white/80 p-2.5 rounded-xl border border-emerald-100/80 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                Transparent Public Portal & Feedback
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}