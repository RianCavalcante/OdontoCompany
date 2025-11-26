import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  icon: React.ReactNode;
  imageUrl: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  imageUrl: string;
}

export interface ContactInfo {
  phone: string;
  whatsapp: string;
  address: string;
  addressUrl: string;
  email: string;
  hours: string[];
}

export interface NavLink {
  label: string;
  href: string;
}