// components/Footer.jsx
import React from 'react';

export default function Footer() {
  // Guardamos la URL de WhatsApp en una variable para que el código sea más limpio
  const whatsappUrl = "https://api.whatsapp.com/send/?phone=34687586325&text&type=phone_number&app_absent=0";

  return (
    // 1. Convertimos el footer en un contenedor flex
    <footer className="px-8 py-4 flex justify-between items-center bg-[#084538] text-[#aa9465]">
      
      {/* 2. Elemento Izquierdo: El texto de copyright */}
      <p className="text-sm">
        © 2025 Vainita con Tostón. Todos los derechos reservados.
      </p>

      {/* 3. Elemento Derecho: Los enlaces de navegación */}
      <nav className="flex items-center gap-6">
        <a 
          href="#inicio" 
          className="text-sm  tracking-wider hover:text-white transition-colors"
        >
          Inicio
        </a>
        <a 
          href={whatsappUrl}
          target="_blank"          // <-- Para que se abra en una nueva pestaña
          rel="noopener noreferrer"  // <-- Buena práctica de seguridad para enlaces externos
          className="text-sm e tracking-wider hover:text-white transition-colors"
        >
          Contacto
        </a>
      </nav>

    </footer>
  );
}