import React, { useState, useEffect } from 'react';
import {
  User,
  Phone,
  Calendar,
  Clock,
  Headphones,
  Lock,
  Minus,
  Plus,
  ArrowRight,
  PhoneCall,
  CheckCircle2,
} from 'lucide-react';
import { ServiceItem, BookingFormData } from '../types';
import { SERVICES_DATA } from '../data/servicesData';

interface BookingFormProps {
  selectedService: ServiceItem | null;
  onFormSubmit: (data: BookingFormData, calculatedTotal: number) => void;
}

export const BookingForm: React.FC<BookingFormProps> = ({
  selectedService,
  onFormSubmit,
}) => {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    phone: '',
    serviceId: selectedService ? selectedService.id : SERVICES_DATA[0].id,
    quantity: 1,
    date: new Date(Date.now() + 86400000).toISOString().split('T')[0],
    timeSlot: 'pagi',
    address: '',
    notes: '',
  });

  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});

  // Sync selected service if changed from outside
  useEffect(() => {
    if (selectedService) {
      setFormData((prev) => ({
        ...prev,
        serviceId: selectedService.id,
      }));
    }
  }, [selectedService]);

  // Current active service item
  const currentService =
    SERVICES_DATA.find((s) => s.id === formData.serviceId) || SERVICES_DATA[0];

  // Pricing calculation
  const basePrice = currentService.price;
  const isDiscountEligible = formData.quantity > 3;
  const discountPerUnit = isDiscountEligible ? 10000 : 0;
  const finalUnitPrice = basePrice - discountPerUnit;
  const estimatedTotal = finalUnitPrice * formData.quantity;

  const handleQuantityChange = (delta: number) => {
    setFormData((prev) => ({
      ...prev,
      quantity: Math.max(1, Math.min(15, prev.quantity + delta)),
    }));
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: { [key: string]: string } = {};

    if (!formData.fullName.trim()) {
      errors.fullName = 'Nama pemesan wajib diisi';
    }
    if (!formData.phone.trim() || formData.phone.length < 8) {
      errors.phone = 'Nomor WhatsApp aktif wajib diisi (min. 8 digit)';
    }
    if (!formData.address.trim()) {
      errors.address = 'Alamat & patokan rumah wajib diisi';
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    onFormSubmit(formData, estimatedTotal);
  };

  return (
    <section id="cara-pesan" className="py-16 sm:py-24 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Heading & Trust Badges */}
          <div className="lg:col-span-5 space-y-7">
            <div>
              <span className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase text-blue-700 bg-blue-50 border border-blue-200/60 mb-3">
                PESAN CEPAT
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
                Formulir Booking Teknisi Cepat
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                Isi data anda di bawah ini kemudian admin kami akan segera mengonfirmasi jadwal &amp; rincian estimasi langsung ke WhatsApp Anda.
              </p>
            </div>

            {/* Trust Points */}
            <div className="space-y-4 pt-1">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                  <Headphones className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">
                    Admin Standby Cepat
                  </h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Konfirmasi rata-rata &lt;10-15 menit di jam kerja.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <Lock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">
                    Privasi Aman
                  </h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Data Anda hanya digunakan untuk keperluan kunjungan teknisi.
                  </p>
                </div>
              </div>
            </div>

            {/* Urgent Phone Box */}
            <div className="rounded-2xl p-6 bg-gradient-to-br from-[#0F356B] to-[#0A2540] text-white shadow-lg space-y-3">
              <span className="inline-block px-2.5 py-0.5 rounded text-[11px] font-extrabold tracking-wide uppercase bg-sky-500/20 text-sky-300 border border-sky-400/30">
                BUTUH TEKNISI HARI INI JUGA?
              </span>
              <a
                href="tel:089530440417"
                id="urgent-call-link"
                className="flex items-center gap-3 text-2xl sm:text-3xl font-extrabold text-white tracking-tight hover:text-sky-300 transition-colors"
              >
                <PhoneCall className="w-6 h-6 text-sky-400 animate-pulse" />
                <span>0895-3044-0417</span>
              </a>
              <p className="text-xs text-slate-300">
                Telepon langsung untuk penjadwalan urgent / darurat tanpa antre lama.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Booking Form */}
          <div className="lg:col-span-7">
            <form
              id="booking-form-element"
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-xl shadow-slate-200/50 space-y-5"
            >
              {/* Row 1: Name and WhatsApp Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-xs font-bold text-slate-800 uppercase tracking-wide mb-1.5"
                  >
                    Nama Lengkap Pemesan <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <User className="w-4 h-4" />
                    </div>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="Contoh: Ibu Rina Wulandari"
                      className={`w-full pl-10 pr-4 py-2.5 rounded-xl text-sm border bg-slate-50/50 focus:bg-white focus:outline-none transition-colors ${
                        formErrors.fullName
                          ? 'border-red-500 focus:border-red-500'
                          : 'border-slate-200 focus:border-blue-600'
                      }`}
                    />
                  </div>
                  {formErrors.fullName && (
                    <p className="text-xs text-red-500 mt-1">{formErrors.fullName}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-xs font-bold text-slate-800 uppercase tracking-wide mb-1.5"
                  >
                    Nomor WhatsApp Aktif <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <Phone className="w-4 h-4" />
                    </div>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Contoh: 0812XXXXXXXX"
                      className={`w-full pl-10 pr-4 py-2.5 rounded-xl text-sm border bg-slate-50/50 focus:bg-white focus:outline-none transition-colors ${
                        formErrors.phone
                          ? 'border-red-500 focus:border-red-500'
                          : 'border-slate-200 focus:border-blue-600'
                      }`}
                    />
                  </div>
                  {formErrors.phone && (
                    <p className="text-xs text-red-500 mt-1">{formErrors.phone}</p>
                  )}
                </div>
              </div>

              {/* Row 2: Service Selection & Quantity */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-5">
                <div className="sm:col-span-8">
                  <label
                    htmlFor="serviceId"
                    className="block text-xs font-bold text-slate-800 uppercase tracking-wide mb-1.5"
                  >
                    Pilihan Jenis Layanan <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="serviceId"
                    name="serviceId"
                    value={formData.serviceId}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 rounded-xl text-sm border border-slate-200 bg-slate-50/50 focus:bg-white focus:border-blue-600 focus:outline-none transition-colors font-medium text-slate-800"
                  >
                    {SERVICES_DATA.map((srv) => (
                      <option key={srv.id} value={srv.id}>
                        {srv.title} (Rp {srv.price.toLocaleString('id-ID')})
                      </option>
                    ))}
                  </select>
                </div>

                <div className="sm:col-span-4">
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wide mb-1.5">
                    Jumlah Unit AC
                  </label>
                  <div className="flex items-center justify-between border border-slate-200 rounded-xl px-2 py-1.5 bg-slate-50/50">
                    <button
                      type="button"
                      id="btn-decrease-qty"
                      onClick={() => handleQuantityChange(-1)}
                      disabled={formData.quantity <= 1}
                      className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-600 hover:bg-white hover:text-slate-900 disabled:opacity-30 disabled:hover:bg-transparent transition-colors cursor-pointer"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="text-sm font-bold text-slate-900 px-3">
                      {formData.quantity}
                    </span>
                    <button
                      type="button"
                      id="btn-increase-qty"
                      onClick={() => handleQuantityChange(1)}
                      className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-600 hover:bg-white hover:text-slate-900 transition-colors cursor-pointer"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Row 3: Date & Arrival Time Slot */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-5">
                <div className="sm:col-span-6">
                  <label
                    htmlFor="date"
                    className="block text-xs font-bold text-slate-800 uppercase tracking-wide mb-1.5"
                  >
                    Rencana Tanggal Pengerjaan <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <Calendar className="w-4 h-4" />
                    </div>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl text-sm border border-slate-200 bg-slate-50/50 focus:bg-white focus:border-blue-600 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="sm:col-span-6">
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wide mb-1.5">
                    Jam Layanan Kedatangan <span className="text-red-500">*</span>
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: 'pagi', label: 'Pagi', time: '08-11' },
                      { id: 'siang', label: 'Siang', time: '11-14' },
                      { id: 'sore', label: 'Sore', time: '14-17' },
                    ].map((slot) => {
                      const isSelected = formData.timeSlot === slot.id;
                      return (
                        <button
                          key={slot.id}
                          type="button"
                          id={`time-slot-${slot.id}`}
                          onClick={() =>
                            setFormData((prev) => ({
                              ...prev,
                              timeSlot: slot.id as 'pagi' | 'siang' | 'sore',
                            }))
                          }
                          className={`py-2 px-1 text-center rounded-xl border text-xs transition-all cursor-pointer ${
                            isSelected
                              ? 'border-blue-600 bg-blue-50/90 text-blue-800 font-bold shadow-xs'
                              : 'border-slate-200 bg-slate-50/50 text-slate-600 hover:bg-slate-100 font-medium'
                          }`}
                        >
                          <div className="font-semibold">{slot.label}</div>
                          <div className="text-[10px] text-slate-500">{slot.time}</div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Row 4: Address */}
              <div>
                <label
                  htmlFor="address"
                  className="block text-xs font-bold text-slate-800 uppercase tracking-wide mb-1.5"
                >
                  Alamat Lengkap &amp; Patokan Rumah <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  placeholder="Nama jalan, nomor rumah, RT/RW, Kelurahan, dan patokan (misal: Rumah pagar hitam samping Masjid Al-Hidayah)"
                  className={`w-full px-4 py-2.5 rounded-xl text-sm border bg-slate-50/50 focus:bg-white focus:outline-none transition-colors ${
                    formErrors.address
                      ? 'border-red-500 focus:border-red-500'
                      : 'border-slate-200 focus:border-blue-600'
                  }`}
                />
                {formErrors.address && (
                  <p className="text-xs text-red-500 mt-1">{formErrors.address}</p>
                )}
              </div>

              {/* Row 5: Notes */}
              <div>
                <label
                  htmlFor="notes"
                  className="block text-xs font-bold text-slate-800 uppercase tracking-wide mb-1.5"
                >
                  Catatan Keluhan AC (Opsional)
                </label>
                <input
                  type="text"
                  id="notes"
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  placeholder="Contoh: AC kamar anak kurang dingin dan mengeluarkan suara mendesis"
                  className="w-full px-4 py-2.5 rounded-xl text-sm border border-slate-200 bg-slate-50/50 focus:bg-white focus:border-blue-600 focus:outline-none transition-colors"
                />
              </div>

              {/* Form Bottom: Price Calculation & CTA */}
              <div className="pt-4 mt-2 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="w-full sm:w-auto text-left">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-slate-500">
                      Perkiraan Estimasi Biaya
                    </span>
                    {isDiscountEligible && (
                      <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold">
                        Hemat Rp {(10000 * formData.quantity).toLocaleString('id-ID')}
                      </span>
                    )}
                  </div>
                  <div className="flex items-baseline gap-1.5 mt-0.5">
                    <span className="text-2xl font-extrabold text-[#1D4ED8] tracking-tight">
                      Rp {estimatedTotal.toLocaleString('id-ID')}
                    </span>
                    <span className="text-xs text-slate-400">
                      (Dapat berubah setelah selesai)
                    </span>
                  </div>
                </div>

                <button
                  type="submit"
                  id="submit-booking-form-btn"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#C2410C] hover:bg-[#9A3412] text-white text-sm font-bold shadow-lg shadow-orange-800/15 hover:shadow-orange-800/25 transition-all duration-150 cursor-pointer"
                >
                  <span>Konfirmasi &amp; Kirim Jadwal Booking</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
