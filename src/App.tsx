/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { PricingSection } from './components/PricingSection';
import { BookingForm } from './components/BookingForm';
import { WorkflowSection } from './components/WorkflowSection';
import { WarrantyBanner } from './components/WarrantyBanner';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { BookingSuccessModal } from './components/BookingSuccessModal';
import { ServiceItem, BookingFormData } from './types';
import { SERVICES_DATA } from './data/servicesData';

export default function App() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [confirmedBooking, setConfirmedBooking] = useState<{
    formData: BookingFormData;
    service: ServiceItem;
    totalPrice: number;
  } | null>(null);

  const scrollToBooking = () => {
    const el = document.getElementById('cara-pesan');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSelectService = (service: ServiceItem) => {
    setSelectedService(service);
    scrollToBooking();
  };

  const handleOpenWhatsApp = () => {
    const text = encodeURIComponent(
      'Halo Admin ALIF TEKNIK, saya ingin konsultasi mengenai perawatan/servis AC rumah.'
    );
    window.open(`https://wa.me/6289530440417?text=${text}`, '_blank');
  };

  const handleFormSubmit = (data: BookingFormData, calculatedTotal: number) => {
    const currentService =
      SERVICES_DATA.find((s) => s.id === data.serviceId) || SERVICES_DATA[0];

    setConfirmedBooking({
      formData: data,
      service: currentService,
      totalPrice: calculatedTotal,
    });
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      {/* Top Navigation */}
      <Navbar onBookNow={scrollToBooking} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection
          onBookNow={scrollToBooking}
          onOpenWhatsApp={handleOpenWhatsApp}
        />

        {/* Why Choose Us / Keunggulan */}
        <WhyChooseUs onOpenWhatsApp={handleOpenWhatsApp} />

        {/* Catalog & Pricing Section */}
        <PricingSection onSelectService={handleSelectService} />

        {/* Interactive Booking Form Section */}
        <BookingForm
          selectedService={selectedService}
          onFormSubmit={handleFormSubmit}
        />

        {/* 3 Step Practical Procedure */}
        <WorkflowSection />

        {/* 30-Day Warranty Pre-Footer Banner */}
        <WarrantyBanner onBookNow={scrollToBooking} />
      </main>

      {/* Full Dark Footer */}
      <Footer onOpenWhatsApp={handleOpenWhatsApp} />

      {/* Floating Action WhatsApp Button */}
      <FloatingWhatsApp onClick={handleOpenWhatsApp} />

      {/* Booking Confirmation Dialog */}
      <BookingSuccessModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        bookingData={confirmedBooking ? confirmedBooking.formData : null}
        service={confirmedBooking ? confirmedBooking.service : null}
        totalPrice={confirmedBooking ? confirmedBooking.totalPrice : 0}
      />
    </div>
  );
}

