import React from 'react';

export const WorkflowSection: React.FC = () => {
  const steps = [
    {
      step: '1',
      title: 'Pesan Online / WhatsApp',
      desc: 'Tentukan jadwal layanan cuci atau servis, pilih tanggal serta jam kedatangan teknisi sesuai waktu luang Anda di rumah.',
      bgColor: 'bg-[#1E3A8A]',
    },
    {
      step: '2',
      title: 'Teknisi Datang & Cek Kondisi',
      desc: 'Teknisi tiba tepat waktu membawa perlengkapan lengkap, mengenakan seragam resmi, dan memasang plastik cover pelindung dinding.',
      bgColor: 'bg-[#0284C7]',
    },
    {
      step: '3',
      title: 'Pengerjaan Beres & Bergaransi',
      desc: 'AC dingin semriwing dan wangi kembali, ruangan bersih tanpa kotoran. Anda membayar dengan aman dan garansi 30 hari langsung aktif.',
      bgColor: 'bg-[#1E3A8A]',
    },
  ];

  return (
    <section id="prosedur" className="py-16 sm:py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase text-blue-700 bg-blue-50 border border-blue-200/60 mb-3">
            PROSEDUR KERJA
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            3 Langkah Praktis Merawat AC Anda
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Nikmati proses reservasi dan pengerjaan yang praktis, transparan, dan tidak merepotkan kegiatan harian Anda.
          </p>
        </div>

        {/* 3 Steps Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 relative">
          {steps.map((item, idx) => (
            <div
              key={idx}
              id={`workflow-step-${idx + 1}`}
              className="flex flex-col items-center text-center relative group"
            >
              {/* Number Circle */}
              <div
                className={`w-14 h-14 rounded-full ${item.bgColor} text-white font-extrabold text-xl flex items-center justify-center shadow-lg shadow-blue-900/10 mb-6 group-hover:scale-110 transition-transform duration-200`}
              >
                {item.step}
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-slate-900 tracking-tight mb-2.5">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-slate-600 leading-relaxed max-w-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
