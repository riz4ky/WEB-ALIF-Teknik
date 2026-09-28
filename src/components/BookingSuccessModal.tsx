import React from 'react';
import { CheckCircle2, MessageCircle, X, Calendar, Clock, MapPin, Tag } from 'lucide-react';
import { BookingFormData, ServiceItem } from '../types';

interface BookingSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  bookingData: BookingFormData | null;
  service: ServiceItem | null;
  totalPrice: number;
}

export const BookingSuccessModal: React.FC<BookingSuccessModalProps> = ({
  isOpen,
  onClose,
  bookingData,
  service,
  totalPrice,
}) => {
  if (!isOpen || !bookingData || !service) return null;

  const getWhatsAppMessage = () => {
    const text = `Halo Admin ALIF TEKNIK,%0A%0ASaya ingin konfirmasi booking teknisi AC dengan rincian berikut:%0A%0A*Nama:* ${bookingData.fullName}%0A*No. WhatsApp:* ${bookingData.phone}%0A*Layanan:* ${service.title}%0A*Jumlah Unit:* ${bookingData.quantity} unit%0A*Tanggal:* ${bookingData.date}%0A*Waktu Kedatangan:* Slot ${bookingData.timeSlot.toUpperCase()}%0A*Alamat:* ${bookingData.address}%0A*Keluhan:* ${bookingData.notes || '-' }%0A*Perkiraan Estimasi:* Rp ${totalPrice.toLocaleString('id-ID')}%0A%0AMohon konfirmasi jadwal dan teknisi yang bertugas. Terima kasih!`;
    return `https://wa.me/6289530440417?text=${text}`;
  };

  const handleOpenWhatsApp = () => {
    window.open(getWhatsAppMessage(), '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg rounded-2xl bg-white p-6 sm:p-8 shadow-2xl border border-slate-100">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100 transition-colors"
          aria-label="Tutup"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Icon */}
        <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-8 h-8 stroke-[2.2]" />
        </div>

        <div className="text-center mb-6">
          <h3 className="text-xl font-extrabold text-slate-900">
            Jadwal Booking Terdata!
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Data Anda telah siap dikirimkan ke admin ALIF TEKNIK melalui WhatsApp untuk konfirmasi instan.
          </p>
        </div>

        {/* Booking Summary Box */}
        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2.5 text-xs sm:text-sm mb-6">
          <div className="flex items-center justify-between pb-2 border-b border-slate-200/70">
            <span className="text-slate-500 font-medium">Pemesan:</span>
            <span className="font-bold text-slate-900">{bookingData.fullName}</span>
          </div>

          <div className="flex items-center justify-between pb-2 border-b border-slate-200/70">
            <span className="text-slate-500 font-medium">Layanan:</span>
            <span className="font-bold text-slate-900 text-right">
              {service.title} ({bookingData.quantity} unit)
            </span>
          </div>

          <div className="flex items-center justify-between pb-2 border-b border-slate-200/70">
            <span className="text-slate-500 font-medium">Jadwal Tiba:</span>
            <span className="font-bold text-slate-900">
              {bookingData.date} • Slot {bookingData.timeSlot.toUpperCase()}
            </span>
          </div>

          <div className="flex items-start justify-between pb-2 border-b border-slate-200/70">
            <span className="text-slate-500 font-medium shrink-0">Alamat:</span>
            <span className="font-medium text-slate-800 text-right max-w-[220px] line-clamp-2">
              {bookingData.address}
            </span>
          </div>

          <div className="flex items-center justify-between pt-1">
            <span className="text-slate-700 font-bold">Total Estimasi:</span>
            <span className="text-base font-extrabold text-blue-700">
              Rp {totalPrice.toLocaleString('id-ID')}
            </span>
          </div>
        </div>

        {/* Buttons */}
        <div className="space-y-3">
          <button
            type="button"
            id="modal-wa-send-btn"
            onClick={handleOpenWhatsApp}
            className="w-full py-3.5 px-5 rounded-xl bg-[#10B981] hover:bg-[#059669] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20 transition-all cursor-pointer"
          >
            <MessageCircle className="w-5 h-5 fill-white" />
            <span>Lanjut Kirim ke WhatsApp Admin</span>
          </button>

          <button
            type="button"
            onClick={onClose}
            className="w-full py-2.5 rounded-xl text-slate-600 hover:bg-slate-100 font-semibold text-xs transition-colors"
          >
            Tutup &amp; Kembali ke Halaman
          </button>
        </div>
      </div>
    </div>
  );
};
