import React from 'react';
import {
  ShieldCheck,
  MapPin,
  Clock,
  Phone,
  Mail,
  MessageCircle,
} from 'lucide-react';

interface FooterProps {
  onOpenWhatsApp: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenWhatsApp }) => {
  return (
    <footer className="bg-[#0B1528] text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800/80">
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-md">
                <ShieldCheck className="w-5 h-5 stroke-[2.2]" />
              </div>
              <span className="text-xl font-extrabold text-white tracking-tight">
                ALIF TEKNIK
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Jasa Servis, Cuci &amp; Perawatan AC Rumah Tangga Terpercaya. Mengutamakan transparansi harga, kebersihan hunian, dan kepuasan pelanggan.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-900/40 border border-blue-700/50 text-blue-300 text-xs font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
              <span>Garansi Servis 30 Hari</span>
            </div>
          </div>

          {/* Column 2: Workshop & Office */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Workshop
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm text-slate-400">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>Perum KSB (Kota Serang Baru) Blok E32, Desa Sukaragam, Kecamatan Serang Baru, Kabupaten Bekasi</span>
              </p>
              <div className="pt-1 space-y-1">
                <div className="flex items-center gap-2 text-slate-300 font-medium">
                  <Clock className="w-4 h-4 text-blue-400" />
                  <span>Jam Operasional:</span>
                </div>
                <p className="pl-6 text-xs text-slate-400">
                  Senin - Minggu: 08:00 - 18:00 WIB
                </p>
                <p className="pl-6 text-xs text-emerald-400 font-medium">
                  Siap melayani hari libur
                </p>
              </div>
            </div>
          </div>

          {/* Column 3: Quick Navigation */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Navigasi Cepat
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#beranda" className="text-slate-400 hover:text-white transition-colors">
                  Beranda
                </a>
              </li>
              <li>
                <a href="#layanan" className="text-slate-400 hover:text-white transition-colors">
                  Layanan AC
                </a>
              </li>
              <li>
                <a href="#keunggulan" className="text-slate-400 hover:text-white transition-colors">
                  Kebijakan Privasi
                </a>
              </li>
              <li>
                <a href="#prosedur" className="text-slate-400 hover:text-white transition-colors">
                  Syarat &amp; Ketentuan
                </a>
              </li>
              <li>
                <a href="#cara-pesan" className="text-slate-400 hover:text-white transition-colors">
                  Hubungi Kami
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Emergency Contacts */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Kontak Darurat
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm">
              <a
                href="tel:089530440417"
                className="flex items-center gap-2.5 text-slate-300 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-blue-400" />
                <span>0895-3044-0417</span>
              </a>
              <a
                href="mailto:halo@alifteknik.com"
                className="flex items-center gap-2.5 text-slate-300 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-blue-400" />
                <span>halo@alifteknik.com</span>
              </a>
            </div>

            <div className="pt-2">
              <button
                type="button"
                id="footer-wa-btn"
                onClick={onOpenWhatsApp}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white hover:bg-slate-100 text-slate-900 text-xs font-bold shadow-md transition-all duration-150 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600 fill-emerald-600" />
                <span>Chat WhatsApp Resmi</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 text-center text-xs text-slate-500">
          <p>© 2026 ALIF TEKNIK. Jasa Servis, Cuci &amp; Perawatan AC Rumah Tangga Terpercaya. Garansi Servis 30 Hari.</p>
        </div>
      </div>
    </footer>
  );
};
