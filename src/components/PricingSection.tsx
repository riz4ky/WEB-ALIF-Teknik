import React from 'react';
import { Check, ArrowRight, Tag, Sparkles, Shield, Cpu, Gauge, Droplets, Wrench } from 'lucide-react';
import { ServiceItem } from '../types';
import { SERVICES_DATA } from '../data/servicesData';

interface PricingSectionProps {
  onSelectService: (service: ServiceItem) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectService }) => {
  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'cuci-split-besar':
        return <Cpu className="w-4 h-4 text-slate-400" />;
      case 'cuci-inverter':
        return <Shield className="w-4 h-4 text-slate-400" />;
      case 'tambah-freon':
        return <Gauge className="w-4 h-4 text-slate-400" />;
      case 'bocor-air':
        return <Droplets className="w-4 h-4 text-amber-500" />;
      case 'bongkar-pasang':
        return <Wrench className="w-4 h-4 text-slate-400" />;
      default:
        return <Sparkles className="w-4 h-4 text-slate-400" />;
    }
  };

  return (
    <section id="layanan" className="py-16 sm:py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase text-blue-700 bg-blue-50 border border-blue-200/60 mb-3">
              KATALOG &amp; BIAYA
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Tarif Jasa Transparan &amp; Kompetitif
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              Pilih paket perawatan yang sesuai dengan tipe AC rumah Anda. Tarif pasti, teruji, dan sudah termasuk garansi.
            </p>
          </div>

          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-200 shadow-xs text-xs sm:text-sm font-semibold text-slate-700">
              <Tag className="w-4 h-4 text-blue-600" />
              <span>Harga perawatan tertera di bawah ini</span>
            </div>
          </div>
        </div>

        {/* 6 Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {SERVICES_DATA.map((service) => {
            const isPopular = !!service.popular;

            return (
              <div
                key={service.id}
                id={`pricing-card-${service.id}`}
                className={`relative flex flex-col justify-between rounded-2xl p-6 sm:p-7 bg-white transition-all duration-200 ${
                  isPopular
                    ? 'border-2 border-blue-600 shadow-xl shadow-blue-900/5'
                    : 'border border-slate-200 hover:border-slate-300 shadow-xs hover:shadow-md'
                }`}
              >
                {/* Popular Badge */}
                {isPopular && (
                  <div className="absolute -top-3.5 right-6">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1E3A8A] text-white text-[11px] font-extrabold tracking-wide uppercase shadow-sm">
                      <Sparkles className="w-3 h-3 text-amber-300" />
                      PALING POPULER
                    </span>
                  </div>
                )}

                <div>
                  {/* Category & Icon */}
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                      {service.category}
                    </span>
                    {!isPopular && getCategoryIcon(service.id)}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
                    {service.title}
                  </h3>

                  {/* Short description */}
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed min-h-[40px]">
                    {service.description}
                  </p>

                  {/* Price */}
                  <div className="mt-5 pb-5 border-b border-slate-100">
                    <span className="text-xs font-medium text-slate-400 block mb-1">
                      Mulai dari
                    </span>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-2xl sm:text-3xl font-extrabold text-[#1E3A8A] tracking-tight">
                        Rp {service.price.toLocaleString('id-ID')}
                      </span>
                      <span className="text-xs font-medium text-slate-500">
                        / {service.unit}
                      </span>
                    </div>
                  </div>

                  {/* Feature Checklist */}
                  <ul className="mt-5 space-y-3">
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                        <div className="mt-0.5 rounded-full p-0.5 bg-blue-50 text-blue-600 shrink-0">
                          <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                        </div>
                        <span className="leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Action Button */}
                <div className="mt-8 pt-2">
                  <button
                    type="button"
                    id={`btn-select-service-${service.id}`}
                    onClick={() => onSelectService(service)}
                    className={`w-full py-3 px-4 rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-all duration-150 cursor-pointer ${
                      isPopular
                        ? 'bg-[#1E3A8A] hover:bg-[#172554] text-white shadow-md shadow-blue-900/10'
                        : 'bg-blue-50/80 hover:bg-blue-100 text-blue-700 hover:text-blue-800'
                    }`}
                  >
                    <span>Pilih Layanan Ini</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
