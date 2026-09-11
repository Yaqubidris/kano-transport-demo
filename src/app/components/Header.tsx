import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, AlertCircle, Search, Menu } from 'lucide-react';

export default function Header() {
  return (
    <header className="w-full font-sans border-b border-gray-200">
      {/* 1. Official Government Announcement & Contact Top Bar */}
      <div className="bg-[#003D1C] text-white text-xs py-2 px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-2">
        <div className="flex items-center gap-4 divide-x divide-emerald-700">
          <span className="flex items-center gap-1 font-medium text-emerald-200">
            <AlertCircle className="w-3.5 h-3.5 text-amber-400" />
            Official Portal of Kano State Government
          </span>
          <span className="pl-4 hidden sm:inline text-gray-300">
            Kano State Ministry of Transportation
          </span>
        </div>

        <div className="flex items-center gap-4 text-gray-200">
          <a href="tel:+2348036447258" className="flex items-center gap-1 hover:text-white transition">
            <Phone className="w-3.5 h-3.5" />
            +234 803 644 7258
          </a>
          <a href="mailto:info@transport.kn.gov.ng" className="flex items-center gap-1 hover:text-white transition">
            <Mail className="w-3.5 h-3.5" />
            info@transport.kn.gov.ng
          </a>
        </div>
      </div>

      {/* 2. Main Navigation Header */}
      <div className="bg-white px-4 md:px-8 py-3 flex justify-between items-center shadow-sm">
        {/* Brand / Logo Section */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png" // Ensure your file in /public is named logo.png
            alt="Kano State Ministry of Transportation Logo"
            width={56}
            height={56}
            className="w-12 h-12 md:w-14 md:h-14 object-contain"
            priority
          />
          <div>
            <h1 className="text-lg md:text-xl font-bold text-gray-900 leading-tight">
              Ministry of Transportation
            </h1>
            <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">
              Kano State Government
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 font-medium text-sm text-gray-700">
          <Link href="#" className="text-[#005C2B] font-semibold border-b-2 border-[#005C2B] pb-1">
            Home
          </Link>
          <Link href="#about" className="hover:text-[#005C2B] transition">
            About Ministry
          </Link>
          <Link href="#agencies" className="hover:text-[#005C2B] transition">
            Agencies & KAROTA
          </Link>
          <Link href="#services" className="hover:text-[#005C2B] transition">
            Services & Permits
          </Link>
          <Link href="#projects" className="hover:text-[#005C2B] transition">
            Projects
          </Link>
          <Link href="#news" className="hover:text-[#005C2B] transition">
            News & Updates
          </Link>
        </nav>

        {/* Search & Actions */}
        <div className="flex items-center gap-3">
          <button className="hidden sm:flex items-center gap-2 bg-emerald-50 text-[#005C2B] px-3 py-2 rounded-lg text-sm font-medium hover:bg-emerald-100 transition">
            <Search className="w-4 h-4" />
            Search
          </button>
          <button className="bg-[#005C2B] hover:bg-[#003D1C] text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-md transition">
            Verify Permit
          </button>
          <button className="lg:hidden text-gray-700 p-2">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Live Ticker Bar */}
      <div className="bg-amber-50 border-y border-amber-200/60 px-4 md:px-8 py-2 flex items-center gap-3 text-xs md:text-sm">
        <span className="bg-amber-600 text-white font-bold px-2 py-0.5 rounded text-xs uppercase tracking-wide shrink-0">
          Live Traffic
        </span>
        <p className="text-amber-900 truncate">
          KAROTA Traffic Advisory: Smooth vehicular movement along Zaria Road, Maiduguri Road flyover, and Katsina Road corridor.
        </p>
      </div>
    </header>
  );
}