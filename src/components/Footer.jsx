// components/Footer.jsx
import React from 'react';

export default function Footer() {
  // Guardamos la URL de WhatsApp en una variable para que el código sea más limpio
  const whatsappUrl = "https://api.whatsapp.com/send/?phone=34687586325&text&type=phone_number&app_absent=0";

  return (
    // CAMBIO: Se ajusta el layout para ser flexible y centrado en móvil
    <footer className="px-8 py-6 flex flex-col sm:flex-row sm:justify-between items-center bg-[#084538] text-[#aa9465] gap-4">
      
      {/* CAMBIO: Texto centrado en móvil y alineado a la izquierda en escritorio */}
      <p className="text-sm text-center sm:text-left">
        © 2025 Vainita con Tostón. Todos los derechos reservados.
      </p>

      {/* CAMBIO: La navegación se oculta en móvil (hidden) y se muestra a partir de 'sm' (sm:flex) */}
      <nav className="hidden sm:flex items-center gap-6">
        <a 
          href="#inicio" 
          className="text-sm tracking-wider hover:text-white transition-colors"
        >
          Inicio
        </a>
        <a 
          href={whatsappUrl}
          target="_blank"           // <-- Para que se abra en una nueva pestaña
          rel="noopener noreferrer"  // <-- Buena práctica de seguridad para enlaces externos
          className="text-sm tracking-wider hover:text-white transition-colors"
        >
          Contacto
        </a>
      </nav>

    </footer>
  );
}