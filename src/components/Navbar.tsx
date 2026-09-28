import React, { useState } from 'react';
import { Phone, Calendar, Menu, X, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  onBookNow: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onBookNow }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('beranda');

  const navLinks = [
    { label: 'Beranda', href: '#beranda', id: 'beranda' },
    { label: 'Layanan & Harga', href: '#layanan', id: 'layanan' },
    { label: 'Keunggulan', href: '#keunggulan', id: 'keunggulan' },
    { label: 'Cara Pesan', href: '#cara-pesan', id: 'cara-pesan' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <a
            href="#beranda"
            id="brand-logo-link"
            className="flex items-center gap-3 group"
          >
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-700 to-sky-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform duration-200">
              <ShieldCheck className="w-6 h-6 stroke-[2.2]" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-tight text-slate-900 flex items-center gap-1.5">
                ALIF TEKNIK
              </span>
              <span className="text-[11px] font-semibold tracking-wide text-slate-500 uppercase">
                Spesialisasi AC Rumah Tangga
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  id={`nav-link-${link.id}`}
                  onClick={() => setActiveSection(link.id)}
                  className={`text-sm font-semibold transition-colors duration-200 relative py-2 ${
                    isActive
                      ? 'text-blue-600 font-bold'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action Items */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href="tel:081234567890"
              id="header-phone-cta"
              className="flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-800 px-3 py-2 rounded-lg hover:bg-blue-50 transition-colors"
            >
              <Phone className="w-4 h-4 text-blue-600" />
              <span>0895-3044-0417</span>
            </a>

            <button
              onClick={onBookNow}
              id="header-booking-btn"
              type="button"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[#C2410C] hover:bg-[#9A3412] text-white text-sm font-bold shadow-md shadow-orange-900/10 hover:shadow-lg transition-all duration-150 transform active:scale-95 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Booking Sekarang</span>
            </button>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onBookNow}
              className="px-3 py-1.5 rounded-lg bg-[#C2410C] text-white text-xs font-bold"
            >
              Booking
            </button>
            <button
              type="button"
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-xl">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => {
                  setActiveSection(link.id);
                  setMobileMenuOpen(false);
                }}
                className="px-3 py-2 rounded-lg text-base font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-600"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
            <a
              href="tel:081234567890"
              className="flex items-center justify-center gap-2 py-2.5 text-sm font-semibold text-blue-700 bg-blue-50 rounded-lg"
            >
              <Phone className="w-4 h-4" />
              <span>Hubungi: 0812-3456-7890</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onBookNow();
              }}
              className="w-full py-3 bg-[#C2410C] text-white text-sm font-bold rounded-lg shadow-sm"
            >
              Booking Sekarang
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
