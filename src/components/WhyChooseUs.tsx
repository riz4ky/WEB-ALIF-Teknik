import React from 'react';
import {
  UserCheck,
  Receipt,
  ShieldCheck,
  Sparkles,
  Check,
  MessageCircle,
} from 'lucide-react';

interface WhyChooseUsProps {
  onOpenWhatsApp: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onOpenWhatsApp }) => {
  const features = [
    {
      icon: <UserCheck className="w-5 h-5 text-blue-600" />,
      title: 'Teknisi Berpengalaman & Sopan',
      description:
        'Pengecekan dilakukan secara menyeluruh dan mendalam, pekerjaan rapi, dan selalu menggunakan plastik cover pelindung dinding agar menjaga kebersihan dinding dan perabot Anda.',
      badge: 'Prosedur Rapi & Bersih',
    },
    {
      icon: <Receipt className="w-5 h-5 text-blue-600" />,
      title: 'Harga Terbuka & Transparan',
      description:
        'Daftar tarif tetap sejak awal sebelum pengerjaan. Tidak ada biaya tambahan dan tidak memaksakan perbaikan jika memang masih optimal.',
      badge: 'Bebas Biaya Tersembunyi',
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-blue-600" />,
      title: 'Garansi Pengerjaan 30 Hari',
      description:
        'Jika AC kembali menetes, bocor, atau tidak dingin dalam kurun waktu 30 hari pasca pengerjaan, kami siap datang kembali tanpa biaya tambahan.',
      badge: 'Klaim Mudah Tanpa Ribet',
    },
    {
      icon: <Sparkles className="w-5 h-5 text-blue-600" />,
      title: 'Peralatan Modern & Higienis',
      description:
        'Menggunakan jet cleaner dengan kekuatan terukur agar evaporator tidak rusak.',
      badge: 'Aman Bagi Komponen AC',
    },
  ];

  return (
    <section id="keunggulan" className="py-16 sm:py-20 bg-white border-y border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase text-blue-700 bg-blue-50 border border-blue-200/60 mb-3">
              KEUNGGULAN LAYANAN
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Mengapa 500+ Keluarga Memilih{' '}
              <span className="text-blue-700">ALIF TEKNIK?</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              Kami mengutamakan kejujuran, kebersihan perabot rumah, dan kepastian tarif yang tidak pernah berubah di tengah jalan.
            </p>
          </div>

          <div>
            <button
              type="button"
              id="features-wa-btn"
              onClick={onOpenWhatsApp}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#10B981] hover:bg-[#059669] text-white text-sm font-bold shadow-md shadow-emerald-500/20 transition-all duration-200 hover:scale-102 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Chat WhatsApp</span>
            </button>
          </div>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, idx) => (
            <div
              key={idx}
              id={`feature-card-${idx}`}
              className="group relative flex flex-col justify-between p-6 rounded-2xl bg-sky-50/40 hover:bg-sky-50/70 border border-sky-100 hover:border-sky-300 transition-all duration-200 shadow-xs hover:shadow-md"
            >
              <div>
                {/* Icon box */}
                <div className="w-12 h-12 rounded-xl bg-blue-100/90 text-blue-700 flex items-center justify-center mb-5 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-200">
                  {item.icon}
                </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
                  {item.title}
                </h3>

                <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Bottom pill tag */}
              <div className="mt-6 pt-4 border-t border-sky-100/80">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-700">
                  <Check className="w-3.5 h-3.5 text-blue-600 stroke-[2.5]" />
                  <span>{item.badge}</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
