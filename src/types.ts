export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  description: string;
  price: number;
  unit: string;
  popular?: boolean;
  features: string[];
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  initials: string;
  quote: string;
  rating: number;
}

export interface CoverageAreaItem {
  id: string;
  region: string;
  districts: string;
  isCustom?: boolean;
}

export interface BookingFormData {
  fullName: string;
  phone: string;
  serviceId: string;
  quantity: number;
  date: string;
  timeSlot: 'pagi' | 'siang' | 'sore';
  address: string;
  notes: string;
}
