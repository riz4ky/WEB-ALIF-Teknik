import React from 'react';
import {
  ShieldCheck,
  Clock,
  Tag,
  CheckCircle,
  ArrowRight,
  MessageCircle,
  Star,
  Check,
} from 'lucide-react';

interface HeroSectionProps {
  onBookNow: () => void;
  onOpenWhatsApp: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onBookNow,
  onOpenWhatsApp,
}) => {
  return (
    <section id="beranda" className="relative pt-8 pb-16 lg:pt-14 lg:pb-24 overflow-hidden">
      {/* Subtle background ambient tint */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/70 via-sky-50/30 to-transparent pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            {/* Top Pill Guarantee Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/80 border border-blue-200/80 text-blue-800 text-xs sm:text-sm font-semibold shadow-xs">
              <ShieldCheck className="w-4 h-4 text-blue-600" />
              <span>Garansi Dingin Maksimal 30 Hari • Teknisi Bersertifikasi</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Solusi Cepat untuk{' '}
              <span className="text-[#1D4ED8] block sm:inline">
                AC Dingin &amp; Udara Sehat!
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
              Layanan cuci, isi freon, serta perbaikan AC profesional untuk rumah tangga.
            </p>

            {/* 3 Quick Benefit Badges */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 text-xs sm:text-sm font-medium shadow-xs">
                <Clock className="w-3.5 h-3.5 text-blue-600" />
                <span>Respon Cepat &lt; 15 Mnt</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 text-xs sm:text-sm font-medium shadow-xs">
                <Tag className="w-3.5 h-3.5 text-blue-600" />
                <span>Tarif Jelas Transparan</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 text-xs sm:text-sm font-medium shadow-xs">
                <CheckCircle className="w-3.5 h-3.5 text-blue-600" />
                <span>Garansi Servis 30 Hari</span>
              </div>
            </div>

            {/* CTA Buttons Row */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2 w-full sm:w-auto">
              <button
                type="button"
                id="hero-book-now-btn"
                onClick={onBookNow}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-lg bg-[#C2410C] hover:bg-[#9A3412] text-white text-base font-bold shadow-lg shadow-orange-700/20 hover:shadow-orange-700/30 transition-all duration-200 cursor-pointer group"
              >
                <span>Pesan Teknisi Sekarang</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                type="button"
                id="hero-whatsapp-btn"
                onClick={onOpenWhatsApp}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 text-base font-bold shadow-xs hover:border-slate-400 transition-all duration-200 cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 text-emerald-600 fill-emerald-500/20" />
                <span>Konsultasi WA Gratis</span>
              </button>
            </div>

            {/* Social Proof & Rating Stack */}
            <div className="flex items-center gap-4 pt-3 border-t border-slate-200/70 w-full sm:w-auto">
              {/* Stacked Avatars */}
              <div className="flex -space-x-2.5 overflow-hidden">
                <div className="inline-block h-9 w-9 rounded-full ring-2 ring-white bg-blue-100 flex items-center justify-center text-xs font-bold text-blue-800">
                  AR
                </div>
                <div className="inline-block h-9 w-9 rounded-full ring-2 ring-white bg-amber-100 flex items-center justify-center text-xs font-bold text-amber-800">
                  SK
                </div>
                <div className="inline-block h-9 w-9 rounded-full ring-2 ring-white bg-emerald-100 flex items-center justify-center text-xs font-bold text-emerald-800">
                  RP
                </div>
                <div className="inline-block h-9 w-9 rounded-full ring-2 ring-white bg-purple-100 flex items-center justify-center text-xs font-bold text-purple-800">
                  MT
                </div>
              </div>

              {/* Rating info */}
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-sm font-bold text-slate-900">4.9 / 5.0</span>
                </div>
                <p className="text-xs font-medium text-slate-500">
                  Dipercaya lebih dari 500+ Rumah Tangga
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Technician Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Card Frame */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200/90 bg-slate-900 group">
                {/* Technician Image */}
                <img
                  src="https://cdn.phototourl.com/free/2026-09-22-4a22bafe-37bf-41f1-844d-a7aa3d3a3022.jpg"
                  alt="Teknisi Alif Teknik sedang servis AC rumah tangga"
                  className="w-full h-[400px] sm:h-[450px] object-cover object-center group-hover:scale-102 transition-transform duration-500"
                />

                {/* Top overlay badge: Puas 99.4% */}
                <div className="absolute top-4 left-4 z-10">
                  <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-xl bg-white/95 backdrop-blur-md shadow-md border border-white/60">
                    <div className="w-6 h-6 rounded-md bg-blue-50 text-blue-600 flex items-center justify-center">
                      <ShieldCheck className="w-4 h-4 text-blue-600" />
                    </div>
                    <div className="text-left">
                      <div className="text-xs font-extrabold text-slate-900 leading-tight">
                        Puas 99,4%
                      </div>
                      <div className="text-[10px] font-medium text-slate-500">
                        500+ Rumah Puas
                      </div>
                    </div>
                  </div>
                </div>

                {/* Dark Lower Content Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-slate-950 via-slate-950/85 to-transparent text-white">
                  <span className="inline-block px-2.5 py-0.5 mb-2 text-[10px] font-bold tracking-wider uppercase rounded-md bg-blue-600/90 text-white">
                    PROSEDUR BERGARANSI
                  </span>
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    Standar Layanan 5-Bintang
                  </h3>
                  <p className="text-xs text-slate-300 mt-1 line-clamp-2">
                    Cover plastik pelindung dinding lengkap untuk menjaga kebersihan rumah Anda.
                  </p>

                  <div className="mt-3 flex items-center gap-2 text-xs font-semibold text-sky-400">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-400"></span>
                    </span>
                    <span>Teknisi Selalu Siap Siaga</span>
                  </div>
                </div>
              </div>

              {/* Floating Bottom-Right Badge: Tepat Waktu */}
              <div className="absolute -bottom-5 right-2 sm:-right-4 z-20">
                <div className="inline-flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white shadow-xl border border-slate-200">
                  <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center text-orange-600">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-bold text-slate-900">
                      Tepat Waktu
                    </div>
                    <div className="text-[11px] font-medium text-slate-500">
                      Jadwal Tiba Terkonfirmasi
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
