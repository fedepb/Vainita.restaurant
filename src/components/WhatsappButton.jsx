// components/WhatsappButton.jsx
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const whatsappNumber = "+34687586325";

export default function WhatsappButton() {
  return (
    <a
      href={`https://wa.me/${whatsappNumber.replace(/\D/g, '')}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-green-500 p-3 text-white shadow-lg transition-colors duration-200 ease-in-out hover:bg-green-600"
    >
      <FaWhatsapp className="h-full w-full" />
    </a>
  );
}