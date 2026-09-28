import React from 'react';
import { MessageCircle } from 'lucide-react';

interface FloatingWhatsAppProps {
  onClick: () => void;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ onClick }) => {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      <button
        type="button"
        id="floating-whatsapp-btn"
        onClick={onClick}
        aria-label="Hubungi WhatsApp"
        className="group flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#10B981] hover:bg-[#059669] text-white shadow-xl shadow-emerald-700/25 transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
      >
        <MessageCircle className="w-6 h-6 fill-white" />
        <span className="hidden sm:inline font-bold text-sm tracking-wide">
          Chat Teknisi
        </span>
      </button>
    </div>
  );
};
