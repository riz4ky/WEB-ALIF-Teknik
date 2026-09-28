import React from 'react';
import { ShieldCheck, ArrowRight } from 'lucide-react';

interface WarrantyBannerProps {
  onBookNow: () => void;
}

export const WarrantyBanner: React.FC<WarrantyBannerProps> = ({ onBookNow }) => {
  return (
    <section className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl bg-[#EFF6FF] border border-blue-200/80 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
          {/* Left Icon and Text */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 sm:gap-5">
            <div className="w-14 h-14 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center shrink-0 shadow-inner">
              <ShieldCheck className="w-7 h-7 stroke-[2.2]" />
            </div>
            <div className="max-w-2xl">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
                Garansi Layanan Servis 30 Hari Penuh
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Kami memberikan nota digital resmi setelah pengerjaan. Jika AC Anda kembali bocor atau kurang dingin dalam masa garansi, teknisi kami siap datang kembali tanpa biaya sepeser pun.
              </p>
            </div>
          </div>

          {/* Right Button */}
          <div className="shrink-0 w-full sm:w-auto">
            <button
              type="button"
              id="warranty-banner-cta"
              onClick={onBookNow}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#0F356B] hover:bg-[#0A2540] text-white text-sm font-bold shadow-md shadow-blue-950/15 hover:shadow-lg transition-all duration-150 cursor-pointer"
            >
              <span>Jadwalkan Servis Sekarang</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
